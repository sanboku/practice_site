/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ejs/index.ejs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ejs/index.ejs":
/*!***************************!*\
  !*** ./src/ejs/index.ejs ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, filters, escape, rethrow) {\n    escape = escape || function(html) {\n        return String(html).replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/'/g, \"&#39;\").replace(/\"/g, \"&quot;\");\n    };\n    var __stack = {\n        lineno: 1,\n        input: '<!DOCTYPE html>\\n<html lang=\"ja\">\\n  <head>\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\\n    <title>Kobe Bryant</title>\\n  </head>\\n  <body>\\n    <div class=\"wrap\">\\n      <% include ./src/ejs/templates/_header %>\\n      <div class=\"mainVisual\"></div>\\n\\n      <div class=\"mainContents\">\\n        <section class=\"description\">\\n          <h1 class=\"mainTitle\">THIS IS KOBE</h1>\\n          <p class=\"descriptionText\"></p>\\n        </section>\\n        <section class=\"history\"></section>\\n        <section class=\"award\"></section>\\n      </div>\\n      <% include ./src/ejs/templates/_footer %>\\n    </div>\\n  </body>\\n</html>\\n',\n        filename: \".\"\n    };\n    function rethrow(err, str, filename, lineno) {\n        var lines = str.split(\"\\n\"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);\n        var context = lines.slice(start, end).map(function(line, i) {\n            var curr = i + start + 1;\n            return (curr == lineno ? \" >> \" : \"    \") + curr + \"| \" + line;\n        }).join(\"\\n\");\n        err.path = filename;\n        err.message = (filename || \"ejs\") + \":\" + lineno + \"\\n\" + context + \"\\n\\n\" + err.message;\n        throw err;\n    }\n    try {\n        var buf = [];\n        with (locals || {}) {\n            (function() {\n                buf.push('<!DOCTYPE html>\\n<html lang=\"ja\">\\n  <head>\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\\n    <title>Kobe Bryant</title>\\n  </head>\\n  <body>\\n    <div class=\"wrap\">\\n      ' + function() {\n                    var buf = [];\n                    buf.push('<nav>\\n  <ul class=\"globalNavigation\">\\n    <li><a class=\"navigationItem\" href=\"\">Home</a></li>\\n    <li><a class=\"navigationItem\" href=\"\">History</a></li>\\n    <li><a class=\"navigationItem\" href=\"\">Award</a></li>\\n  </ul>\\n</nav>\\n');\n                    return buf.join(\"\");\n                }() + '\\n      <div class=\"mainVisual\"></div>\\n\\n      <div class=\"mainContents\">\\n        <section class=\"description\">\\n          <h1 class=\"mainTitle\">THIS IS KOBE</h1>\\n          <p class=\"descriptionText\"></p>\\n        </section>\\n        <section class=\"history\"></section>\\n        <section class=\"award\"></section>\\n      </div>\\n      ' + function() {\n                    var buf = [];\n                    buf.push(\"<p>aaaaaa</p>\\n\");\n                    return buf.join(\"\");\n                }() + \"\\n    </div>\\n  </body>\\n</html>\\n\");\n            })();\n        }\n        return buf.join(\"\");\n    } catch (err) {\n        rethrow(err, __stack.input, __stack.filename, __stack.lineno);\n    }\n}\n\n//# sourceURL=webpack:///./src/ejs/index.ejs?");

/***/ })

/******/ });