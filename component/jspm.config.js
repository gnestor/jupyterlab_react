SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "async-react-dom/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
      "babel-plugin-react-transform": "npm:babel-plugin-react-transform@2.0.2",
      "react-transform-catch-errors": "npm:react-transform-catch-errors@1.0.2",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "core-js": "npm:core-js@2.4.1"
    },
    "packages": {
      "npm:babel-plugin-react-transform@2.0.2": {
        "map": {
          "lodash": "npm:lodash@4.17.2"
        }
      },
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.18.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "lodash": "npm:lodash@4.17.2",
          "esutils": "npm:esutils@2.0.2",
          "babel-types": "npm:babel-types@6.19.0"
        }
      },
      "npm:babel-runtime@6.18.0": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.6"
        }
      },
      "npm:babel-types@6.19.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.17.2",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "async-react-dom": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              [
                "babel-plugin-transform-react-jsx"
              ]
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "chart.js": "npm:chart.js@1.1.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "fsevents": "npm:fsevents@1.0.15",
    "graceful-fs": "npm:graceful-fs@4.1.11",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "punycode": "npm:jspm-nodelibs-punycode@0.2.0",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
    "react": "npm:react@15.4.1",
    "react-chartjs": "npm:react-chartjs@0.8.0",
    "react-data-grid": "npm:react-data-grid@1.0.66",
    "react-dnd": "npm:react-dnd@2.1.4",
    "react-dom": "npm:react-dom@15.4.1",
    "redbox-react": "npm:redbox-react@1.3.3",
    "reon-core": "npm:reon-core@0.0.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.14.3",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:react@15.4.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "fbjs": "npm:fbjs@0.8.6",
        "loose-envify": "npm:loose-envify@1.3.0"
      }
    },
    "npm:fbjs@0.8.6": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0",
        "object-assign": "npm:object-assign@4.1.0",
        "core-js": "npm:core-js@1.2.7",
        "ua-parser-js": "npm:ua-parser-js@0.7.12",
        "promise": "npm:promise@7.1.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1"
      }
    },
    "npm:react-dom@15.4.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.6",
        "loose-envify": "npm:loose-envify@1.3.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:loose-envify@1.3.0": {
      "map": {
        "js-tokens": "npm:js-tokens@2.0.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.3",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.1"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.5.0"
      }
    },
    "npm:stream-http@2.5.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:redbox-react@1.3.3": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "error-stack-parser": "npm:error-stack-parser@1.3.6"
      }
    },
    "npm:error-stack-parser@1.3.6": {
      "map": {
        "stackframe": "npm:stackframe@0.3.1"
      }
    },
    "npm:react-data-grid@1.0.66": {
      "map": {
        "classnames": "npm:classnames@1.2.2",
        "fbjs": "npm:fbjs@0.6.1",
        "fs-extra": "npm:fs-extra@0.30.0",
        "object-assign": "npm:object-assign@2.1.1",
        "es5-shim": "npm:es5-shim@4.5.9",
        "react-dnd-html5-backend": "npm:react-dnd-html5-backend@2.1.2",
        "react-select": "npm:react-select@1.0.0-rc.2",
        "reselect": "npm:reselect@2.5.4",
        "react-contextmenu": "npm:react-contextmenu@1.6.2",
        "ron-react-autocomplete": "npm:ron-react-autocomplete@3.0.1",
        "react-dnd": "npm:react-dnd@2.1.4"
      }
    },
    "npm:react-select@1.0.0-rc.2": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "react-input-autosize": "npm:react-input-autosize@1.1.0"
      }
    },
    "npm:ron-react-autocomplete@3.0.1": {
      "map": {
        "classnames": "npm:classnames@1.2.2",
        "socket.io-client": "npm:socket.io-client@1.7.1",
        "engine.io": "npm:engine.io@1.8.1",
        "browser-sync": "npm:browser-sync@2.18.2"
      }
    },
    "npm:react-contextmenu@1.6.2": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "object-assign": "npm:object-assign@4.1.0",
        "invariant": "npm:invariant@2.2.2",
        "lodash.isobject": "npm:lodash.isobject@3.0.2",
        "redux": "npm:redux@3.6.0",
        "react-overlays": "npm:react-overlays@0.6.10"
      }
    },
    "npm:fs-extra@0.30.0": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "jsonfile": "npm:jsonfile@2.4.0",
        "klaw": "npm:klaw@1.3.1",
        "rimraf": "npm:rimraf@2.5.4",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:react-dnd@2.1.4": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "disposables": "npm:disposables@1.0.1",
        "dnd-core": "npm:dnd-core@2.0.2",
        "lodash": "npm:lodash@4.17.2"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0"
      }
    },
    "npm:react-dnd-html5-backend@2.1.2": {
      "map": {
        "lodash": "npm:lodash@4.17.2"
      }
    },
    "npm:dnd-core@2.0.2": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "invariant": "npm:invariant@2.2.2",
        "redux": "npm:redux@3.6.0",
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "loose-envify": "npm:loose-envify@1.3.0",
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "lodash-es": "npm:lodash-es@4.17.2"
      }
    },
    "npm:react-overlays@0.6.10": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "warning": "npm:warning@3.0.0",
        "dom-helpers": "npm:dom-helpers@2.4.0",
        "react-prop-types": "npm:react-prop-types@0.4.0"
      }
    },
    "npm:socket.io-client@1.7.1": {
      "map": {
        "indexof": "npm:indexof@0.0.1",
        "object-component": "npm:object-component@0.0.3",
        "has-binary": "npm:has-binary@0.1.7",
        "backo2": "npm:backo2@1.0.2",
        "component-emitter": "npm:component-emitter@1.2.1",
        "component-bind": "npm:component-bind@1.0.0",
        "parseuri": "npm:parseuri@0.0.5",
        "socket.io-parser": "npm:socket.io-parser@2.3.1",
        "to-array": "npm:to-array@0.1.4",
        "debug": "npm:debug@2.3.3",
        "engine.io-client": "npm:engine.io-client@1.8.1"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:engine.io@1.8.1": {
      "map": {
        "base64id": "npm:base64id@0.1.0",
        "engine.io-parser": "npm:engine.io-parser@1.2.4",
        "debug": "npm:debug@2.2.0",
        "accepts": "npm:accepts@1.3.1",
        "ws": "npm:ws@1.0.1"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inherits": "npm:inherits@2.0.3",
        "inflight": "npm:inflight@1.0.6",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "once": "npm:once@1.4.0",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:socket.io-parser@2.3.1": {
      "map": {
        "component-emitter": "npm:component-emitter@1.1.2",
        "debug": "npm:debug@2.2.0",
        "isarray": "npm:isarray@0.0.1",
        "json3": "npm:json3@3.3.2"
      }
    },
    "npm:engine.io-parser@1.2.4": {
      "map": {
        "has-binary": "npm:has-binary@0.1.6",
        "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
        "blob": "npm:blob@0.0.4",
        "utf8": "npm:utf8@2.1.0",
        "after": "npm:after@0.8.1"
      }
    },
    "npm:browser-sync@2.18.2": {
      "map": {
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "fs-extra": "npm:fs-extra@0.30.0",
        "dev-ip": "npm:dev-ip@1.0.1",
        "emitter-steward": "npm:emitter-steward@1.0.0",
        "easy-extender": "npm:easy-extender@2.3.2",
        "server-destroy": "npm:server-destroy@1.0.1",
        "bs-recipes": "npm:bs-recipes@1.3.2",
        "eazy-logger": "npm:eazy-logger@3.0.2",
        "localtunnel": "npm:localtunnel@1.8.1",
        "opn": "npm:opn@4.0.2",
        "portscanner": "npm:portscanner@1.2.0",
        "resp-modifier": "npm:resp-modifier@6.0.2",
        "serve-index": "npm:serve-index@1.8.0",
        "browser-sync-client": "npm:browser-sync-client@2.4.3",
        "serve-static": "npm:serve-static@1.11.1",
        "qs": "npm:qs@6.2.1",
        "browser-sync-ui": "npm:browser-sync-ui@0.6.1",
        "micromatch": "npm:micromatch@2.3.11",
        "chokidar": "npm:chokidar@1.6.0",
        "immutable": "npm:immutable@3.8.1",
        "http-proxy": "npm:http-proxy@1.15.1",
        "socket.io": "npm:socket.io@1.5.0",
        "rx": "npm:rx@4.1.0",
        "yargs": "npm:yargs@6.0.0",
        "connect": "npm:connect@3.5.0"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0"
      }
    },
    "npm:has-binary@0.1.7": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:has-binary@0.1.6": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:react-prop-types@0.4.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:parseuri@0.0.5": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:engine.io-client@1.8.1": {
      "map": {
        "engine.io-parser": "npm:engine.io-parser@1.3.1",
        "ws": "npm:ws@1.1.1",
        "component-emitter": "npm:component-emitter@1.2.1",
        "debug": "npm:debug@2.3.3",
        "indexof": "npm:indexof@0.0.1",
        "parseuri": "npm:parseuri@0.0.5",
        "parseqs": "npm:parseqs@0.0.5",
        "component-inherit": "npm:component-inherit@0.0.3",
        "has-cors": "npm:has-cors@1.1.0",
        "xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.3",
        "parsejson": "npm:parsejson@0.0.3",
        "yeast": "npm:yeast@0.1.2",
        "node-ws": "npm:ws@1.1.1",
        "node-xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.3"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:engine.io-parser@1.3.1": {
      "map": {
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
        "after": "npm:after@0.8.1",
        "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
        "blob": "npm:blob@0.0.4",
        "has-binary": "npm:has-binary@0.1.6",
        "wtf-8": "npm:wtf-8@1.0.0"
      }
    },
    "npm:accepts@1.3.1": {
      "map": {
        "negotiator": "npm:negotiator@0.6.0",
        "mime-types": "npm:mime-types@2.1.13"
      }
    },
    "npm:debug@2.3.3": {
      "map": {
        "ms": "npm:ms@0.7.2"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:easy-extender@2.3.2": {
      "map": {
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:opn@4.0.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:localtunnel@1.8.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "openurl": "npm:openurl@1.1.0",
        "yargs": "npm:yargs@3.29.0",
        "request": "npm:request@2.65.0"
      }
    },
    "npm:resp-modifier@6.0.2": {
      "map": {
        "debug": "npm:debug@2.3.3",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:serve-index@1.8.0": {
      "map": {
        "accepts": "npm:accepts@1.3.3",
        "debug": "npm:debug@2.2.0",
        "mime-types": "npm:mime-types@2.1.13",
        "escape-html": "npm:escape-html@1.0.3",
        "batch": "npm:batch@0.5.3",
        "parseurl": "npm:parseurl@1.3.1",
        "http-errors": "npm:http-errors@1.5.1"
      }
    },
    "npm:ws@1.0.1": {
      "map": {
        "options": "npm:options@0.0.6",
        "bufferutil": "npm:bufferutil@1.2.1",
        "utf-8-validate": "npm:utf-8-validate@1.2.1",
        "ultron": "npm:ultron@1.0.2"
      }
    },
    "npm:ws@1.1.1": {
      "map": {
        "options": "npm:options@0.0.6",
        "bufferutil": "npm:bufferutil@1.2.1",
        "utf-8-validate": "npm:utf-8-validate@1.2.1",
        "ultron": "npm:ultron@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:better-assert@1.0.2": {
      "map": {
        "callsite": "npm:callsite@1.0.0"
      }
    },
    "npm:accepts@1.3.3": {
      "map": {
        "negotiator": "npm:negotiator@0.6.1",
        "mime-types": "npm:mime-types@2.1.13"
      }
    },
    "npm:browser-sync-ui@0.6.1": {
      "map": {
        "immutable": "npm:immutable@3.8.1",
        "server-destroy": "npm:server-destroy@1.0.1",
        "async-each-series": "npm:async-each-series@0.1.1",
        "stream-throttle": "npm:stream-throttle@0.1.3",
        "connect-history-api-fallback": "npm:connect-history-api-fallback@1.3.0",
        "weinre": "npm:weinre@2.0.0-pre-I0Z7U9OV"
      }
    },
    "npm:parseqs@0.0.5": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:chokidar@1.6.0": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inherits": "npm:inherits@2.0.3",
        "is-glob": "npm:is-glob@2.0.1",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "async-each": "npm:async-each@1.0.1",
        "glob-parent": "npm:glob-parent@2.0.0",
        "anymatch": "npm:anymatch@1.3.0",
        "readdirp": "npm:readdirp@2.1.0"
      }
    },
    "npm:parsejson@0.0.3": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:serve-static@1.11.1": {
      "map": {
        "escape-html": "npm:escape-html@1.0.3",
        "parseurl": "npm:parseurl@1.3.1",
        "encodeurl": "npm:encodeurl@1.0.1",
        "send": "npm:send@0.14.1"
      }
    },
    "npm:eazy-logger@3.0.2": {
      "map": {
        "tfunk": "npm:tfunk@3.0.2"
      }
    },
    "npm:socket.io@1.5.0": {
      "map": {
        "engine.io": "npm:engine.io@1.7.0",
        "socket.io-parser": "npm:socket.io-parser@2.2.6",
        "socket.io-client": "npm:socket.io-client@1.5.0",
        "has-binary": "npm:has-binary@0.1.7",
        "debug": "npm:debug@2.2.0",
        "socket.io-adapter": "npm:socket.io-adapter@0.4.0"
      }
    },
    "npm:browser-sync-client@2.4.3": {
      "map": {
        "fresh": "npm:fresh@0.3.0",
        "etag": "npm:etag@1.7.0"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "filename-regex": "npm:filename-regex@2.0.0",
        "array-unique": "npm:array-unique@0.2.1",
        "is-glob": "npm:is-glob@2.0.1",
        "regex-cache": "npm:regex-cache@0.4.3",
        "is-extglob": "npm:is-extglob@1.0.0",
        "normalize-path": "npm:normalize-path@2.0.1",
        "object.omit": "npm:object.omit@2.0.1",
        "extglob": "npm:extglob@0.3.2",
        "kind-of": "npm:kind-of@3.0.4",
        "parse-glob": "npm:parse-glob@3.0.4",
        "arr-diff": "npm:arr-diff@2.0.0",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "braces": "npm:braces@1.8.5"
      }
    },
    "npm:socket.io-parser@2.2.6": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "json3": "npm:json3@3.3.2",
        "component-emitter": "npm:component-emitter@1.1.2",
        "isarray": "npm:isarray@0.0.1",
        "benchmark": "npm:benchmark@1.0.0"
      }
    },
    "npm:http-errors@1.5.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "setprototypeof": "npm:setprototypeof@1.0.2",
        "statuses": "npm:statuses@1.3.1"
      }
    },
    "npm:mime-types@2.1.13": {
      "map": {
        "mime-db": "npm:mime-db@1.25.0"
      }
    },
    "npm:bufferutil@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "npm:utf-8-validate@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "npm:socket.io-client@1.5.0": {
      "map": {
        "engine.io-client": "npm:engine.io-client@1.7.0",
        "component-emitter": "npm:component-emitter@1.2.0",
        "parseuri": "npm:parseuri@0.0.4",
        "debug": "npm:debug@2.2.0",
        "component-bind": "npm:component-bind@1.0.0",
        "object-component": "npm:object-component@0.0.3",
        "socket.io-parser": "npm:socket.io-parser@2.2.6",
        "has-binary": "npm:has-binary@0.1.7",
        "indexof": "npm:indexof@0.0.1",
        "to-array": "npm:to-array@0.1.4",
        "backo2": "npm:backo2@1.0.2"
      }
    },
    "npm:engine.io@1.7.0": {
      "map": {
        "base64id": "npm:base64id@0.1.0",
        "debug": "npm:debug@2.2.0",
        "ws": "npm:ws@1.0.1",
        "engine.io-parser": "npm:engine.io-parser@1.2.4",
        "accepts": "npm:accepts@1.3.1"
      }
    },
    "npm:portscanner@1.2.0": {
      "map": {
        "async": "npm:async@1.5.2"
      }
    },
    "npm:http-proxy@1.15.1": {
      "map": {
        "requires-port": "npm:requires-port@1.0.0",
        "eventemitter3": "npm:eventemitter3@1.2.0"
      }
    },
    "npm:connect@3.5.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "parseurl": "npm:parseurl@1.3.1",
        "utils-merge": "npm:utils-merge@1.0.0",
        "finalhandler": "npm:finalhandler@0.5.0"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "is-dotfile": "npm:is-dotfile@1.0.2",
        "glob-base": "npm:glob-base@0.3.0"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "micromatch": "npm:micromatch@2.3.11",
        "arrify": "npm:arrify@1.0.1"
      }
    },
    "npm:parseuri@0.0.4": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:send@0.14.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "encodeurl": "npm:encodeurl@1.0.1",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.7.0",
        "fresh": "npm:fresh@0.3.0",
        "http-errors": "npm:http-errors@1.5.1",
        "ms": "npm:ms@0.7.1",
        "statuses": "npm:statuses@1.3.1",
        "destroy": "npm:destroy@1.0.4",
        "range-parser": "npm:range-parser@1.2.0",
        "on-finished": "npm:on-finished@2.3.0",
        "mime": "npm:mime@1.3.4",
        "depd": "npm:depd@1.1.0"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "minimatch": "npm:minimatch@3.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1"
      }
    },
    "npm:engine.io-client@1.7.0": {
      "map": {
        "engine.io-parser": "npm:engine.io-parser@1.3.0",
        "parsejson": "npm:parsejson@0.0.1",
        "parseqs": "npm:parseqs@0.0.2",
        "xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
        "component-emitter": "npm:component-emitter@1.1.2",
        "component-inherit": "npm:component-inherit@0.0.3",
        "debug": "npm:debug@2.2.0",
        "has-cors": "npm:has-cors@1.1.0",
        "indexof": "npm:indexof@0.0.1",
        "parseuri": "npm:parseuri@0.0.4",
        "ws": "npm:ws@1.1.1",
        "yeast": "npm:yeast@0.1.2",
        "node-ws": "npm:ws@1.1.1",
        "node-xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1"
      }
    },
    "npm:fsevents@1.0.15": {
      "map": {
        "nan": "npm:nan@2.4.0",
        "node-pre-gyp": "npm:node-pre-gyp@0.6.32"
      }
    },
    "npm:socket.io-adapter@0.4.0": {
      "map": {
        "socket.io-parser": "npm:socket.io-parser@2.2.2",
        "debug": "npm:debug@2.2.0"
      }
    },
    "npm:engine.io-parser@1.3.0": {
      "map": {
        "after": "npm:after@0.8.1",
        "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
        "blob": "npm:blob@0.0.4",
        "has-binary": "npm:has-binary@0.1.6",
        "wtf-8": "npm:wtf-8@1.0.0"
      }
    },
    "npm:tfunk@3.0.2": {
      "map": {
        "object-path": "npm:object-path@0.9.2",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:parseqs@0.0.2": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parsejson@0.0.1": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:yargs@6.0.0": {
      "map": {
        "decamelize": "npm:decamelize@1.2.0",
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "get-caller-file": "npm:get-caller-file@1.0.2",
        "set-blocking": "npm:set-blocking@2.0.0",
        "which-module": "npm:which-module@1.0.0",
        "require-main-filename": "npm:require-main-filename@1.0.1",
        "string-width": "npm:string-width@1.0.2",
        "window-size": "npm:window-size@0.2.0",
        "os-locale": "npm:os-locale@1.4.0",
        "cliui": "npm:cliui@3.2.0",
        "require-directory": "npm:require-directory@2.1.1",
        "y18n": "npm:y18n@3.2.1",
        "yargs-parser": "npm:yargs-parser@4.1.0"
      }
    },
    "npm:yargs@3.29.0": {
      "map": {
        "decamelize": "npm:decamelize@1.2.0",
        "window-size": "npm:window-size@0.1.4",
        "os-locale": "npm:os-locale@1.4.0",
        "camelcase": "npm:camelcase@1.2.1",
        "cliui": "npm:cliui@3.2.0",
        "y18n": "npm:y18n@3.2.1"
      }
    },
    "npm:socket.io-parser@2.2.2": {
      "map": {
        "debug": "npm:debug@0.7.4",
        "json3": "npm:json3@3.2.6",
        "component-emitter": "npm:component-emitter@1.1.2",
        "isarray": "npm:isarray@0.0.1",
        "benchmark": "npm:benchmark@1.0.0"
      }
    },
    "npm:stream-throttle@0.1.3": {
      "map": {
        "limiter": "npm:limiter@1.1.0",
        "commander": "npm:commander@2.9.0"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:object.omit@2.0.1": {
      "map": {
        "for-own": "npm:for-own@0.1.4",
        "is-extendable": "npm:is-extendable@0.1.1"
      }
    },
    "npm:request@2.65.0": {
      "map": {
        "qs": "npm:qs@5.2.1",
        "mime-types": "npm:mime-types@2.1.13",
        "caseless": "npm:caseless@0.11.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "isstream": "npm:isstream@0.1.2",
        "stringstream": "npm:stringstream@0.0.5",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "extend": "npm:extend@3.0.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "http-signature": "npm:http-signature@0.11.0",
        "node-uuid": "npm:node-uuid@1.4.7",
        "bl": "npm:bl@1.0.3",
        "form-data": "npm:form-data@1.0.1",
        "har-validator": "npm:har-validator@2.0.6",
        "tough-cookie": "npm:tough-cookie@2.2.2",
        "hawk": "npm:hawk@3.1.3"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.7.0"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.1"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:weinre@2.0.0-pre-I0Z7U9OV": {
      "map": {
        "nopt": "npm:nopt@3.0.6",
        "underscore": "npm:underscore@1.7.0",
        "express": "npm:express@2.5.11"
      }
    },
    "npm:kind-of@3.0.4": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.4"
      }
    },
    "npm:cliui@3.2.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "wrap-ansi": "npm:wrap-ansi@2.1.0"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:finalhandler@0.5.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "escape-html": "npm:escape-html@1.0.3",
        "on-finished": "npm:on-finished@2.3.0",
        "statuses": "npm:statuses@1.3.1",
        "unpipe": "npm:unpipe@1.0.0"
      }
    },
    "npm:yargs-parser@4.1.0": {
      "map": {
        "camelcase": "npm:camelcase@3.0.0"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "glob-parent": "npm:glob-parent@2.0.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "preserve": "npm:preserve@0.2.0",
        "repeat-element": "npm:repeat-element@1.1.2",
        "expand-range": "npm:expand-range@1.8.2"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:os-locale@1.4.0": {
      "map": {
        "lcid": "npm:lcid@1.0.0"
      }
    },
    "npm:for-own@0.1.4": {
      "map": {
        "for-in": "npm:for-in@0.1.6"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "path-exists": "npm:path-exists@2.1.0"
      }
    },
    "npm:on-finished@2.3.0": {
      "map": {
        "ee-first": "npm:ee-first@1.1.1"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:form-data@1.0.1": {
      "map": {
        "async": "npm:async@2.1.4",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.13"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "commander": "npm:commander@2.9.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "is-my-json-valid": "npm:is-my-json-valid@2.15.0"
      }
    },
    "npm:node-pre-gyp@0.6.32": {
      "map": {
        "request": "npm:request@2.79.0",
        "rimraf": "npm:rimraf@2.5.4",
        "nopt": "npm:nopt@3.0.6",
        "mkdirp": "npm:mkdirp@0.5.1",
        "tar-pack": "npm:tar-pack@3.3.0",
        "tar": "npm:tar@2.2.1",
        "npmlog": "npm:npmlog@4.0.1",
        "rc": "npm:rc@1.1.6",
        "semver": "npm:semver@5.3.0"
      }
    },
    "npm:bl@1.0.3": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:wrap-ansi@2.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:request@2.79.0": {
      "map": {
        "form-data": "npm:form-data@2.1.2",
        "http-signature": "npm:http-signature@1.1.1",
        "qs": "npm:qs@6.3.0",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "caseless": "npm:caseless@0.11.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@3.0.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "har-validator": "npm:har-validator@2.0.6",
        "hawk": "npm:hawk@3.1.3",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.13",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "stringstream": "npm:stringstream@0.0.5",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "uuid": "npm:uuid@3.0.1",
        "aws4": "npm:aws4@1.5.0"
      }
    },
    "npm:async@2.1.4": {
      "map": {
        "lodash": "npm:lodash@4.17.2"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:form-data@2.1.2": {
      "map": {
        "mime-types": "npm:mime-types@2.1.13",
        "combined-stream": "npm:combined-stream@1.0.5",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "load-json-file": "npm:load-json-file@1.1.0",
        "path-type": "npm:path-type@1.1.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:http-signature@0.11.0": {
      "map": {
        "ctype": "npm:ctype@0.5.3",
        "assert-plus": "npm:assert-plus@0.1.5",
        "asn1": "npm:asn1@0.1.11"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.3.1",
        "sshpk": "npm:sshpk@1.10.1"
      }
    },
    "npm:lcid@1.0.0": {
      "map": {
        "invert-kv": "npm:invert-kv@1.0.0"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "parse-json": "npm:parse-json@2.2.0",
        "strip-bom": "npm:strip-bom@2.0.0",
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "isobject": "npm:isobject@2.1.0",
        "randomatic": "npm:randomatic@1.1.6",
        "is-number": "npm:is-number@2.1.0",
        "repeat-string": "npm:repeat-string@1.6.1"
      }
    },
    "npm:tar-pack@3.3.0": {
      "map": {
        "once": "npm:once@1.3.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "debug": "npm:debug@2.2.0",
        "rimraf": "npm:rimraf@2.5.4",
        "tar": "npm:tar@2.2.1",
        "uid-number": "npm:uid-number@0.0.6",
        "fstream-ignore": "npm:fstream-ignore@1.0.5",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:normalize-package-data@2.3.5": {
      "map": {
        "semver": "npm:semver@5.3.0",
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1",
        "hosted-git-info": "npm:hosted-git-info@2.1.5"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:npmlog@4.0.1": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "gauge": "npm:gauge@2.7.1"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "sntp": "npm:sntp@1.0.9",
        "cryptiles": "npm:cryptiles@2.0.5",
        "boom": "npm:boom@2.10.1",
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:is-my-json-valid@2.15.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-function": "npm:generate-function@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "jsonpointer": "npm:jsonpointer@4.0.0"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:express@2.5.11": {
      "map": {
        "connect": "npm:connect@1.9.2",
        "mime": "npm:mime@1.2.4",
        "qs": "npm:qs@0.4.2",
        "mkdirp": "npm:mkdirp@0.3.0"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:connect@1.9.2": {
      "map": {
        "qs": "npm:qs@6.3.0",
        "mime": "npm:mime@1.3.4",
        "formidable": "npm:formidable@1.0.17"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:sshpk@1.10.1": {
      "map": {
        "asn1": "npm:asn1@0.2.3",
        "assert-plus": "npm:assert-plus@1.0.0",
        "getpass": "npm:getpass@0.1.6",
        "dashdash": "npm:dashdash@1.14.1"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "deep-extend": "npm:deep-extend@0.4.1",
        "strip-json-comments": "npm:strip-json-comments@1.0.4",
        "ini": "npm:ini@1.3.4"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:randomatic@1.1.6": {
      "map": {
        "kind-of": "npm:kind-of@3.0.4",
        "is-number": "npm:is-number@2.1.0"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.0.4"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:jsprim@1.3.1": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2",
        "json-schema": "npm:json-schema@0.2.3",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:fstream@1.0.10": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "inherits": "npm:inherits@2.0.3",
        "rimraf": "npm:rimraf@2.5.4",
        "mkdirp": "npm:mkdirp@0.5.1"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:gauge@2.7.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "string-width": "npm:string-width@1.0.2",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "aproba": "npm:aproba@1.0.4",
        "has-unicode": "npm:has-unicode@2.0.1",
        "has-color": "npm:has-color@0.1.7",
        "wide-align": "npm:wide-align@1.1.0",
        "signal-exit": "npm:signal-exit@3.0.1"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.0"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-correct": "npm:spdx-correct@1.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.4"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:bcrypt-pbkdf@1.0.0": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.3"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:wide-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:error-ex@1.3.0": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.2"
      }
    },
    "npm:jspm-nodelibs-punycode@0.2.0": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    }
  }
});
