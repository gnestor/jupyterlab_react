# jupyterlab_react

A JupyterLab and Jupyter Notebook extension for rendering React data

![output renderer](http://g.recordit.co/QAsC7YULcY.gif)

## Prerequisites

* JupyterLab >=0.11.0 and/or Notebook >=4.3

## Usage

To render React output in IPython:

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

## Install

To install using pip:

```bash
pip install jupyterlab_react
# For JupyterLab
jupyter labextension install --py --sys-prefix jupyterlab_react
jupyter labextension enable --py --sys-prefix jupyterlab_react
# For Notebook
jupyter nbextension install --py --sys-prefix jupyterlab_react
jupyter nbextension enable --py --sys-prefix jupyterlab_react
```

## Development

### Set up using install script

Use the `install.sh` script to build the Javascript, install the Python package, and install/enable the notebook and lab extensions:

```bash
bash install.sh --sys-prefix
```

Use the `build.sh` script to rebuild the Javascript:

```bash
bash build.sh
```

### Set up manually

Alternatively, see the `README.md` in `/labextension` and `/nbextension` for extension-specific build instructions. 

To install the Python package:

```bash
pip install -e .
```

To install the extension for JupyterLab:

```bash
jupyter labextension install --symlink --py --sys-prefix jupyterlab_react
jupyter labextension enable --py --sys-prefix jupyterlab_react
```

To install the extension for Jupyter Notebook:

```bash
jupyter nbextension install --symlink --py --sys-prefix jupyterlab_react
jupyter nbextension enable --py --sys-prefix jupyterlab_react
```
