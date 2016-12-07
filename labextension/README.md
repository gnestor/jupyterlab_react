# jupyterlab_react JupyterLab extension

A JupyterLab extension for rendering React output and files

## Prerequisites

<<<<<<< 0b7cfde46b61523e30d557319e0b6ea2ce3dd35f
* JupyterLab >= 0.11
=======
* JupyterLab >=0.11.0
>>>>>>> Replace "Jupyter Lab" with "JupyterLab"

## Usage

To render React output in IPython:

![output renderer](http://g.recordit.co/QAsC7YULcY.gif)

```python
from IPython.display import JSON
JSON({
    'string': 'string',
    'array': [1, 2, 3],
    'bool': True,
    'object': {
        'foo': 'bar'
    }
})
```

To render a .react.json file as a tree, simply open it:

![file renderer](http://g.recordit.co/cbf0xnQHKn.gif)

## Development

Install dependencies and build Javascript:

```bash
npm install
```

Re-build Javascript:

```bash
npm run build
```

Watch `/src` directory and re-build on changes:

```bash
npm run watch
```
