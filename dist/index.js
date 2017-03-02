/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = store;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(0)

var makeWatchers = function (storage, dataKey) { return Object.keys(function (acc, key) {
  var vueKey = dataKey + "." + key
  // allow .bind
  var handler = function handler (value) {
    store.set(key, value)
    console.log((vueKey + " watcher executed..."))
  }

  return Object.assign(( obj = {}, obj[vueKey] = { handler: handler }, obj ), acc)
  var obj;
}, {}); }

module.exports = function (storage, dataKey) { return ({
  data: function () { return (( obj = {}, obj[dataKey] = storage, obj ))
    var obj;; },
  watch: makeWatchers(storage, dataKey)
}); }


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(0)

var addActions = function (storage) { return Object.assign({
  remove: function remove (key) {
    if (this[key] === undefined) {
      console.warn((key + " not exist in storage"))
      return
    }

    this[key] = null
  },
  clear: function clear () {
    var this$1 = this;

    var blocked = ['clear', 'remove']
    var keys = Object.keys(this).filter(function (key) { return blocked.indexOf(key) === -1; })
    keys.forEach(function (key) {
      this$1[key] = null
    })
  }
}, storage); }

module.exports = function (schema) {
  var local = store.getAll()
  var storage = Object.keys(schema)
    .reduce(function (acc, key) {
      var value = local[key] || new schema[key]()
      return Object.assign({ key: value }, acc)
    }, {})

  return addActions(storage)
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var makeStorage = __webpack_require__(2)
var makeMixin = __webpack_require__(1)

var install = function (Vue, schema, dataKey) {
  if ( dataKey === void 0 ) dataKey = 'localStorage';

  var storage = makeStorage(schema)
  Vue.mixin(makeMixin(storage, dataKey))
}

module.exports = { install: install }


/***/ })
/******/ ]);