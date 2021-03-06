#How create npm setup

Create package.json

    npm init

### IntelliJ plugin 
    LiveEdit

##Setup development dependecies

###concurrently 
_concurrently_ run multiple commands concurrently

    npm install concurrently --save-dev

###lite-server
_lite-server_ Lightweight development node server for serving a web app, providing a fallback for browser history API, loading in the browser, and injecting scripts on the fly.

    npm install lite-server --save-dev

###typescript 
TypeScript compiler

    npm install typescript --save-dev

###typings 
_typings_ Type definition

    npm install typings --save-dev      


##Setup dependecies
###core-js
_core-js_ Modular standard library for JavaScript. Includes polyfills for ECMAScript 5, ECMAScript 6: promises, symbols, collections, iterators, typed arrays, ECMAScript 7+ proposals, setImmediate, etc. Some additional features such as dictionaries or extended partial application. You can require only needed features or use it without global namespace pollution.

    npm install core-js --save

###rxj
_rxjs_ Reactive Extensions Library for JavaScript. This is a rewrite of Reactive-Extensions/RxJS and is intended to supersede it once this is ready. This rewrite is meant to have better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface.

    npm install rxjs@5.0.0-beta.12 --save

###zone.js
_zone.js_ A Zone is an execution context that persists across async tasks. You can think of it as thread-local storage for JavaScript VMs.

    npm install zone.js --save

###reflect-metadata
_reflect-metadata.js_ is a package that is a proposal for ES7. It allow for meta data to be included to a class or function

    npm install reflect-metadata --save

###systemjs
_systemjs_ Universal dynamic module loader - loads ES6 modules, AMD, CommonJS and global scripts in the browser and NodeJS.

    npm install systemjs --save

##Install Angular
###angular/core
_angular/core_  

    npm install @angular/core --save

###angular/common
_angular/common_  

    npm install @angular/common --save

###angular/compiler
_angular/compiler_  

    npm install @angular/compiler --save
    
###angular/platform-browser
_angular/platform-browser_  

    npm install @angular/platform-browser --save   

###angular/platform-browser-dynamic
_angular/platform-browser-dynamic_  

    npm install @angular/platform-browser-dynamic --save

###angular/http
_angular/http_  

    npm install @angular/http --save

###angular/router
_angular/router_  

    npm install @angular/router --save

#Type Script 
## add compiler configuration _tsconfig.json_

    npm run tsc -- -init
    
    
#Typings
## add _typings.json_ configuration

    npm run typings -- init 
    
## install _typings_ node global definitions

     npm run typings -- install dt~node --save --global

## install _typings_ global _core-js_  definitions

     npm run typings -- install dt~core-js --save --global


#Configuration _system-js_ 
## add _system.config.js_ configuration
Alias path add _map_ to tell the system loader where to look for things. 
Define app folder name and configure angular bundles and other libraries where to load the _umd_ files.



    (function (global) {
        System.config({
            paths: {
                // paths server as alias
                'npm:': 'node_modules/'
            },
            // map tells the System loader where to look for things
            map: {
                // our app is within th app folder
                app: 'app',
                // angular bundles
                '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
                '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
                '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
                '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
                '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
                '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
                '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
                
                 // other libraries
                'rxjs': 'npm:rxjs'
            },
            // packages tells the System loader how to load when no filename and/or no extension 
            packages: {
                app: {
                    main: './main.js',
                    defaultExtension: 'js'
                },
                rxjs: {
                    defaultExtension: 'js'
                }
            }
        });
    })(this);
    

#Start lite-server

    npm run start
 
