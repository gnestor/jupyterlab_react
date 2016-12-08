import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
// import System from 'jspm_packages/system.js';

function render(module, markup, node) {
  if (!module || Object.keys(React.DOM).includes(markup.type)) {
    ReactDOM.render(React.createElement(markup.type, markup.props, null), node);
  } else {
    ReactDOM.render(React.createElement(ProgressBar, {value: 0}, null), node);
    System.defaultJSExtensions = true;
    System.config({
      paths: {
        'npm:': 'https://npm.jspm.io/',
        'npm:*': 'https://npm.jspm.io/*',
        'github:*': 'https://github.jspm.io/*',
        '*': 'https://npm.jspm.io/*',
        'react.js': 'jspm_packages/npm/react@15.4.1/react.js',
        'react@15.4.1/*': 'jspm_packages/npm/react@15.4.1/*',
        'react@15.4/*': 'jspm_packages/npm/react@15.4.1/*',
      },
    });
    System.import(`npm:${module}`)
    .then(importedModule => {
      console.log(`[jupyterlab_reacet]: Imported ${module}`, importedModule);
      ReactDOM.render(React.createElement(ProgressBar, { value: 1.6 }, null), node);
      function createReactElement(markup) {
        return Object.entries(markup).reduce((result, [key, value]) => {
          if (key === 'type') {
            let type;
            if (Object.keys(React.DOM).includes(value)) type = value;
            if (value.startsWith(`${module}.`)) type = value.split('.').slice(1).reduce((result, path) => result[path], importedModule);
            if (!type) type = importedModule[value] || importedModule.default || value;
            if (result.props) return React.createElement(type, result.props, result.props.children || null);
            return {
              ...result,
              type
            }
          }
          if (key === 'props') {
            let props = Object.entries(value).reduce((result, [key, value]) => {
              if (key === 'children') value = createReactElement(value);
              if (typeof value === 'string' && value.startsWith(`${module}.`)) {
                value = value.split('.').slice(1).reduce((result, path) => result[path], importedModule);
              }
              return {
                ...result,
                [key]: value
              }
            }, {});
            if (result.type) return React.createElement(result.type, props, props.children || null);
            return {
              ...result,
              props
            }
          }
        }, {});
      }
      let reactElement = createReactElement(markup);
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(node);
        try {
          ReactDOM.render(reactElement, node);
        } catch (error) {
          ReactDOM.render(React.createElement(RedBox, { error }, null), node);
        }
      }, 300);
    })
    .catch(error => {
      console.error(error);
    });
  }
}

function unmountComponentAtNode(node) {
  ReactDOM.unmountComponentAtNode(node);
}

const Progress = (props) => {
  return React.createElement('progress', {
    style: {
      width: '100%'
    },
    max: 1,
    value: props.value
  });
}

class ProgressBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      progress: props.value || 0
    };
    this.timer = 0;
  }
  
  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.getProgress() >= 0.9999) clearInterval(this.timer);
      this.setState({
        progress: this.state.progress + 0.01
      });
    }, 60);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      progress: nextProps.value
    });
  }
  
  render() {
    return React.createElement(Progress, {value: this.getProgress()});
  }
  
  getProgress = () => {
    return Math.sin(this.state.progress % Math.PI) % 1;
  }
  
}

export default {
  render,
  unmountComponentAtNode
}
