from IPython.display import display
import json


# Running `npm run build` will create static resources in the static
# directory of this Python package (and create that directory if necessary).

def _jupyter_labextension_paths():
    return [{
        'name': 'jupyterlab_react',
        'src': 'static',
    }]

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyterlab_react',
        'require': 'jupyterlab_react/extension'
    }]


# A display function that can be used within a notebook. E.g.:
#   from jupyterlab_react import React
#   React(data)
    
def React(data, module=None):
    bundle = {
        'application/vnd.react.v1+json': {
            'module': module,
            'type': data['type'],
            'props': data['props']
        },
        'application/json': data,
        'text/plain': json.dumps(data, indent=4)
    }
    display(bundle, raw=True)
