import { Widget } from 'phosphor/lib/ui/widget';
import asyncReactDOM from './component';

/**
 * The class name added to this OutputWidget.
 */
const WIDGET_CLASS = 'jp-OutputWidgetReact';


/**
 * A widget for rendering React.
 */
export class OutputWidget extends Widget {

  constructor(options) {
    super();
    this.addClass(WIDGET_CLASS);
    this._source = options.source;
  }

  /**
   * A message handler invoked on an `'after-attach'` message.
   */
  onAfterAttach(msg) {
    this._render();
  }

  /**
   * A message handler invoked on an `'before-detach'` message.
   */
  onBeforeDetach(msg) {
    asyncReactDOM.unmountComponentAtNode(this.node);
  }

  /**
   * A render function given the widget's DOM node.
   */
  _render() {
    let { module, type, props } = this._source;
    asyncReactDOM.render(module, { type, props }, this.node);
  }

}


export class OutputRenderer {

  /**
   * The mimetypes this OutputRenderer accepts.
   */
  mimetypes = ['application/vnd.react.v1+json'];

  /**
   * Whether the input can safely sanitized for a given mimetype.
   */
  isSanitizable(mimetype) {
    return this.mimetypes.indexOf(mimetype) !== -1;
  }

  /**
   * Whether the input is safe without sanitization.
   */
  isSafe(mimetype) {
    return false;
  }

  /**
   * Render the transformed mime bundle.
   */
  render(options) {
    return new OutputWidget(options);
  }

}
