export default function Arquitectura() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Arquitectura del Proyecto</h2>
        
        <div className="space-y-4 text-gray-600">
          <p>
            Este proyecto utiliza una arquitectura Full-Stack moderna:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Frontend:</strong> React + Vite + Tailwind CSS, desplegado en GitHub Pages.</li>
            <li><strong>Backend:</strong> Node.js + Express, desplegado en Render.</li>
            <li><strong>CI/CD:</strong> Automatización con GitHub Actions.</li>
            <li><strong>Diseño:</strong> Integración con Figma (puedes incrustar una imagen de tu diagrama aquí).</li>
          </ul>
          
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
            <p> C:.
├───.github
│   └───workflows
├───backend
│   └───node_modules
│       ├───accepts
│       ├───body-parser
│       │   └───lib
│       │       └───types
│       ├───bytes
│       ├───call-bind-apply-helpers
│       │   ├───.github
│       │   └───test
│       ├───call-bound
│       │   ├───.github
│       │   └───test
│       ├───content-disposition
│       │   └───dist
│       ├───content-type
│       │   └───dist
│       ├───cookie
│       ├───cookie-signature
│       ├───cors
│       │   └───lib
│       ├───debug
│       │   └───src
│       ├───depd
│       │   └───lib
│       │       └───browser
│       ├───dunder-proto
│       │   ├───.github
│       │   └───test
│       ├───ee-first
│       ├───encodeurl
│       ├───es-define-property
│       │   ├───.github
│       │   └───test
│       ├───es-errors
│       │   ├───.github
│       │   └───test
│       ├───es-object-atoms
│       │   ├───.github
│       │   └───test
│       ├───escape-html
│       ├───etag
│       ├───express
│       │   └───lib
│       ├───finalhandler
│       ├───forwarded
│       ├───fresh
│       ├───function-bind
│       │   ├───.github
│       │   └───test
│       ├───get-intrinsic
│       │   ├───.github
│       │   └───test
│       ├───get-proto
│       │   ├───.github
│       │   └───test
│       ├───gopd
│       │   ├───.github
│       │   └───test
│       ├───has-symbols
│       │   ├───.github
│       │   └───test
│       │       └───shams
│       ├───hasown
│       │   └───.github
│       ├───http-errors
│       ├───iconv-lite
│       │   ├───encodings
│       │   │   └───tables
│       │   ├───lib
│       │   │   └───helpers
│       │   └───types
│       ├───inherits
│       ├───ipaddr.js
│       │   └───lib
│       ├───is-promise
│       ├───math-intrinsics
│       │   ├───.github
│       │   ├───constants
│       │   └───test
│       ├───media-typer
│       ├───merge-descriptors
│       ├───mime-db
│       ├───mime-types
│       ├───ms
│       ├───negotiator
│       │   └───lib
│       ├───object-assign
│       ├───object-inspect
│       │   └───.github
│       ├───on-finished
│       ├───once
│       ├───parseurl
│       ├───path-to-regexp
│       │   └───dist
│       ├───proxy-addr
│       ├───qs
│       │   ├───.github
│       │   ├───dist
│       │   ├───lib
│       │   └───test
│       ├───range-parser
│       ├───raw-body
│       ├───router
│       │   └───lib
│       ├───safer-buffer
│       ├───send
│       ├───serve-static
│       ├───setprototypeof
│       │   └───test
│       ├───side-channel
│       │   ├───.github
│       │   └───test
│       ├───side-channel-list
│       │   ├───.github
│       │   └───test
│       ├───side-channel-map
│       │   ├───.github
│       │   └───test
│       ├───side-channel-weakmap
│       │   ├───.github
│       │   └───test
│       ├───statuses
│       ├───toidentifier
│       ├───type-is
│       ├───unpipe
│       ├───vary
│       └───wrappy
├───node_modules
│   ├───.bin
│   ├───.vite
│   │   └───deps
│   ├───.vite-temp
│   ├───@emnapi
│   │   ├───core
│   │   │   └───dist
│   │   │       └───plugins
│   │   ├───runtime
│   │   │   └───dist
│   │   └───wasi-threads
│   │       └───dist
│   ├───@jridgewell
│   │   ├───gen-mapping
│   │   │   ├───dist
│   │   │   │   └───types
│   │   │   ├───src
│   │   │   └───types
│   │   ├───remapping
│   │   │   ├───dist
│   │   │   ├───src
│   │   │   └───types
│   │   ├───resolve-uri
│   │   │   └───dist
│   │   │       └───types
│   │   ├───sourcemap-codec
│   │   │   ├───dist
│   │   │   ├───src
│   │   │   └───types
│   │   └───trace-mapping
│   │       ├───dist
│   │       ├───src
│   │       └───types
│   ├───@napi-rs
│   │   └───wasm-runtime
│   │       └───dist
│   ├───@oxc-project
│   │   └───types
│   ├───@oxlint
│   │   └───binding-win32-x64-msvc
│   ├───@rolldown
│   │   ├───binding-win32-x64-msvc
│   │   └───pluginutils
│   │       └───dist
│   │           └───filter
│   ├───@tailwindcss
│   │   ├───node
│   │   │   └───dist
│   │   ├───oxide
│   │   ├───oxide-wasm32-wasi
│   │   │   └───node_modules
│   │   │       ├───@emnapi
│   │   │       │   ├───core
│   │   │       │   │   └───dist
│   │   │       │   ├───runtime
│   │   │       │   │   └───dist
│   │   │       │   └───wasi-threads
│   │   │       │       └───dist
│   │   │       ├───@napi-rs
│   │   │       │   └───wasm-runtime
│   │   │       │       └───dist
│   │   │       ├───@tybys
│   │   │       │   └───wasm-util
│   │   │       │       ├───dist
│   │   │       │       └───lib
│   │   │       │           ├───cjs
│   │   │       │           │   └───wasi
│   │   │       │           └───mjs
│   │   │       │               └───wasi
│   │   │       └───tslib
│   │   │           └───modules
│   │   ├───oxide-win32-x64-msvc
│   │   └───vite
│   │       └───dist
│   ├───@tybys
│   │   └───wasm-util
│   │       ├───dist
│   │       └───lib
│   │           ├───cjs
│   │           │   └───wasi
│   │           └───mjs
│   │               └───wasi
│   ├───@types
│   │   ├───node
│   │   │   ├───assert
│   │   │   ├───compatibility
│   │   │   ├───dns
│   │   │   ├───fs
│   │   │   ├───readline
│   │   │   ├───stream
│   │   │   ├───timers
│   │   │   ├───ts5.6
│   │   │   │   └───compatibility
│   │   │   ├───ts5.7
│   │   │   │   └───compatibility
│   │   │   └───web-globals
│   │   ├───react
│   │   │   └───ts5.0
│   │   └───react-dom
│   │       └───test-utils
│   ├───@typescript
│   │   └───typescript-win32-x64
│   │       └───lib
│   ├───@vitejs
│   │   └───plugin-react
│   │       ├───dist
│   │       └───types
│   ├───cookie
│   │   └───dist
│   ├───csstype
│   ├───detect-libc
│   │   └───lib
│   ├───enhanced-resolve
│   │   ├───lib
│   │   │   └───util
│   │   └───types
│   │       └───util
│   ├───fdir
│   │   └───dist
│   ├───graceful-fs
│   ├───jiti
│   │   ├───dist
│   │   └───lib
│   ├───lightningcss
│   │   └───node
│   ├───lightningcss-win32-x64-msvc
│   ├───magic-string
│   │   └───dist
│   ├───nanoid
│   │   ├───async
│   │   ├───bin
│   │   ├───non-secure
│   │   └───url-alphabet
│   ├───oxlint
│   │   ├───bin
│   │   └───dist
│   ├───picocolors
│   ├───picomatch
│   │   └───lib
│   ├───postcss
│   │   └───lib
│   ├───react
│   │   └───cjs
│   ├───react-dom
│   │   └───cjs
│   ├───react-router
│   │   ├───dist
│   │   │   ├───development
│   │   │   │   └───lib
│   │   │   │       └───types
│   │   │   └───production
│   │   │       └───lib
│   │   │           └───types
│   │   └───docs
│   │       ├───explanation
│   │       ├───how-to
│   │       ├───start
│   │       │   ├───data
│   │       │   ├───declarative
│   │       │   └───framework
│   │       └───upgrading
│   ├───react-router-dom
│   │   └───dist
│   ├───rolldown
│   │   ├───bin
│   │   └───dist
│   │       └───shared
│   ├───scheduler
│   │   └───cjs
│   ├───set-cookie-parser
│   │   └───lib
│   ├───source-map-js
│   │   └───lib
│   ├───tailwindcss
│   │   └───dist
│   ├───tapable
│   │   └───lib
│   ├───tinyglobby
│   │   └───dist
│   ├───tslib
│   │   └───modules
│   ├───typescript
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───api
│   │   │   │   ├───async
│   │   │   │   ├───node
│   │   │   │   └───sync
│   │   │   ├───ast
│   │   │   ├───enums
│   │   │   └───internal
│   │   ├───lib
│   │   └───vendor
│   │       └───vscode-jsonrpc
│   │           ├───lib
│   │           │   ├───browser
│   │           │   ├───common
│   │           │   └───node
│   │           └───typings
│   ├───undici-types
│   └───vite
│       ├───bin
│       ├───dist
│       │   ├───client
│       │   └───node
│       │       └───chunks
│       ├───misc
│       └───types
│           └───internal
├───public
└───src
    ├───assets
    └───pages  </p>
          </div>
        </div>
      </div>
    </div>
  );
}