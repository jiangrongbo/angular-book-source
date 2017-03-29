(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ngFx"] = factory();
	else
		root["ngFx"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _animations = __webpack_require__(1);

	var _utils = __webpack_require__(80);

	angular.module('ng-fx', [_animations.animations, _utils.utils]);

	exports['default'] = 'ng-fx';
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _view = __webpack_require__(2);

	var _element = __webpack_require__(7);

	var animations = angular.module('ngFx.animations', [_element.element, _view.view]).name;

	exports.animations = animations;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(3);

	var viewModule = angular.module('ngFx.animations.view', []);

	var view = viewModule.name;

	exports.view = view;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./view.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js!./view.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, ".fx-view-container {\n  position: relative;\n  min-height: 1px;\n}\n.fx-view {\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n  left: 0;\n  right: 0;\n}\n", ""]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _bounceBounce = __webpack_require__(8);

	var _fadeFade = __webpack_require__(16);

	var _zoomZoom = __webpack_require__(61);

	var _lightSpeedLightSpeed = __webpack_require__(69);

	var _rotateRotate = __webpack_require__(73);

	var elementModule = angular.module('ngFx.animations.element', []);

	/**
	 * register all animations to angular using
	 * the `module.animation()` method
	 */
	[_bounceBounce.bounces, _fadeFade.fades, _zoomZoom.zooms, _lightSpeedLightSpeed.lightSpeeds, _rotateRotate.rotates].forEach(function (animation) {
	  animation.forEach(function (variant) {
	    elementModule.animation(variant.classname, variant.creator);
	  });
	});

	var element = elementModule.name;

	exports.element = element;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(9);

	var _bounceNormal = __webpack_require__(11);

	var _bounceDown = __webpack_require__(12);

	var _bounceLeft = __webpack_require__(13);

	var _bounceRight = __webpack_require__(14);

	var _bounceUp = __webpack_require__(15);

	var bounces = [_bounceNormal.bounceNormal, _bounceDown.bounceDown, _bounceLeft.bounceLeft, _bounceRight.bounceRight, _bounceUp.bounceUp];
	exports.bounces = bounces;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./bounce.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./bounce.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/**\n * Bounces\n */\n/*******************************************/\n/******************************************/\n/*****************************************/\n/*******************************************/\n@-moz-keyframes bounceNormalIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n  33% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n  66% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes bounceNormalIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n  33% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n  66% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes bounceNormalIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n  33% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n  66% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes bounceNormalIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n  33% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n  66% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-moz-keyframes bounceNormalOut {\n  100% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n  66% {\n    transform: scale(1.05);\n  }\n  33% {\n    transform: scale(0.9);\n  }\n  0% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes bounceNormalOut {\n  100% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n  66% {\n    transform: scale(1.05);\n  }\n  33% {\n    transform: scale(0.9);\n  }\n  0% {\n    opacity: 1;\n  }\n}\n@-o-keyframes bounceNormalOut {\n  100% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n  66% {\n    transform: scale(1.05);\n  }\n  33% {\n    transform: scale(0.9);\n  }\n  0% {\n    opacity: 1;\n  }\n}\n@keyframes bounceNormalOut {\n  100% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n  66% {\n    transform: scale(1.05);\n  }\n  33% {\n    transform: scale(0.9);\n  }\n  0% {\n    opacity: 1;\n  }\n}\n@-moz-keyframes bounceDownIn {\n  0%, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@-webkit-keyframes bounceDownIn {\n  0%, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@-o-keyframes bounceDownIn {\n  0%, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@keyframes bounceDownIn {\n  0%, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@-moz-keyframes bounceDownOut {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n@-webkit-keyframes bounceDownOut {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n@-o-keyframes bounceDownOut {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n@keyframes bounceDownOut {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n@-moz-keyframes bounceLeftIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@-webkit-keyframes bounceLeftIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@-o-keyframes bounceLeftIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@keyframes bounceLeftIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@-moz-keyframes bounceLeftOut {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@-webkit-keyframes bounceLeftOut {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@-o-keyframes bounceLeftOut {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@keyframes bounceLeftOut {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@-moz-keyframes bounceRightOut {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@-webkit-keyframes bounceRightOut {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@-o-keyframes bounceRightOut {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@keyframes bounceRightOut {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@-moz-keyframes bounceRightIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@-webkit-keyframes bounceRightIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@-o-keyframes bounceRightIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@keyframes bounceRightIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n  100% {\n    transform: none;\n  }\n}\n@-moz-keyframes bounceUpIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes bounceUpIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-o-keyframes bounceUpIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceUpIn {\n  from, 60%, 75%, 90%, 100% {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-moz-keyframes bounceUpOut {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@-webkit-keyframes bounceUpOut {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@-o-keyframes bounceUpOut {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@keyframes bounceUpOut {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n", ""]);

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s bounceNormalIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s bounceNormalOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-bounce-normal';
	var bounceNormal = { creator: creator, classname: classname };

	exports.bounceNormal = bounceNormal;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s bounceDownIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s bounceDownOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-bounce-down';
	var bounceDown = { creator: creator, classname: classname };

	exports.bounceDown = bounceDown;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s bounceLeftIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s bounceLeftOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-bounce-left';
	var bounceLeft = { creator: creator, classname: classname };
	exports.bounceLeft = bounceLeft;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s bounceRightIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s bounceRightOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-bounce-right';
	var bounceRight = { creator: creator, classname: classname };
	exports.bounceRight = bounceRight;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s bounceUpIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s bounceUpOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-bounce-up';
	var bounceUp = { creator: creator, classname: classname };
	exports.bounceUp = bounceUp;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(17);

	var _fadeNormal = __webpack_require__(19);

	var _fadeDown = __webpack_require__(53);

	var _fadeDownBig = __webpack_require__(54);

	var _fadeLeft = __webpack_require__(55);

	var _fadeLeftBig = __webpack_require__(56);

	var _fadeRight = __webpack_require__(57);

	var _fadeRightBig = __webpack_require__(58);

	var _fadeUp = __webpack_require__(59);

	var _fadeUpBig = __webpack_require__(60);

	var fades = [_fadeNormal.fadeNormal, _fadeDown.fadeDown, _fadeDownBig.fadeDownBig, _fadeLeft.fadeLeft, _fadeLeftBig.fadeLeftBig, _fadeRight.fadeRight, _fadeRightBig.fadeRightBig, _fadeUp.fadeUp, _fadeUpBig.fadeUpBig];
	exports.fades = fades;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./fade.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./fade.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/***********************************/\n/***************************************/\n/***********************************/\n/***********************************/\n/***************************************/\n/***************************************/\n/***************************************/\n/***************************************/\n@-moz-keyframes fadeNormalIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeNormalIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-o-keyframes fadeNormalIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeNormalIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-moz-keyframes fadeNormalOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fadeNormalOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-o-keyframes fadeNormalOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeNormalOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-moz-keyframes fadeDownIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeDownIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-o-keyframes fadeDownIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeDownIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-moz-keyframes fadeDownOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@-webkit-keyframes fadeDownOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@-o-keyframes fadeDownOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes fadeDownOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@-moz-keyframes fadeDownBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeDownBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-o-keyframes fadeDownBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeDownBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-moz-keyframes fadeDownBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n@-webkit-keyframes fadeDownBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n@-o-keyframes fadeDownBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n@keyframes fadeDownBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n@-moz-keyframes fadeUpIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeUpIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-o-keyframes fadeUpIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeUpIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-moz-keyframes fadeUpOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@-webkit-keyframes fadeUpOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@-o-keyframes fadeUpOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes fadeUpOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@-moz-keyframes fadeUpBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeUpBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-o-keyframes fadeUpBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeUpBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-moz-keyframes fadeUpBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@-webkit-keyframes fadeUpBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@-o-keyframes fadeUpBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@keyframes fadeUpBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@-moz-keyframes fadeLeftIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeLeftIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-o-keyframes fadeLeftIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeLeftIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-moz-keyframes fadeLeftOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n@-webkit-keyframes fadeLeftOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n@-o-keyframes fadeLeftOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes fadeLeftOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n@-moz-keyframes fadeLeftBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeLeftBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-o-keyframes fadeLeftBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeLeftBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-moz-keyframes fadeLeftBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@-webkit-keyframes fadeLeftBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@-o-keyframes fadeLeftBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@keyframes fadeLeftBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@-moz-keyframes fadeRightIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeRightIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-o-keyframes fadeRightIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeRightIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-moz-keyframes fadeRightOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n@-webkit-keyframes fadeRightOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n@-o-keyframes fadeRightOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n@keyframes fadeRightOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n@-moz-keyframes fadeRightBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeRightBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-o-keyframes fadeRightBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeRightBigIn {\n  0% {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-moz-keyframes fadeRightBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@-webkit-keyframes fadeRightBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@-o-keyframes fadeRightBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@keyframes fadeRightBigOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n", ""]);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s fadeNormalIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s fadeNormalOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-fade-normal';
	var fadeNormal = { creator: creator, classname: classname };

	exports.fadeNormal = fadeNormal;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(21),
	    createAssigner = __webpack_require__(48);

	/**
	 * Recursively merges own enumerable properties of the source object(s), that
	 * don't resolve to `undefined` into the destination object. Subsequent sources
	 * overwrite property assignments of previous sources. If `customizer` is
	 * provided it's invoked to produce the merged values of the destination and
	 * source properties. If `customizer` returns `undefined` merging is handled
	 * by the method instead. The `customizer` is bound to `thisArg` and invoked
	 * with five arguments: (objectValue, sourceValue, key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 *
	 * // using a customizer callback
	 * var object = {
	 *   'fruits': ['apple'],
	 *   'vegetables': ['beet']
	 * };
	 *
	 * var other = {
	 *   'fruits': ['banana'],
	 *   'vegetables': ['carrot']
	 * };
	 *
	 * _.merge(object, other, function(a, b) {
	 *   if (_.isArray(a)) {
	 *     return a.concat(b);
	 *   }
	 * });
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var merge = createAssigner(baseMerge);

	module.exports = merge;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(22),
	    baseMergeDeep = __webpack_require__(23),
	    isArray = __webpack_require__(31),
	    isArrayLike = __webpack_require__(26),
	    isObject = __webpack_require__(35),
	    isObjectLike = __webpack_require__(30),
	    isTypedArray = __webpack_require__(43),
	    keys = __webpack_require__(46);

	/**
	 * The base implementation of `_.merge` without support for argument juggling,
	 * multiple sources, and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {Object} Returns `object`.
	 */
	function baseMerge(object, source, customizer, stackA, stackB) {
	  if (!isObject(object)) {
	    return object;
	  }
	  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	      props = isSrcArr ? undefined : keys(source);

	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObjectLike(srcValue)) {
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	    }
	    else {
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	      }
	      if ((result !== undefined || (isSrcArr && !(key in object))) &&
	          (isCommon || (result === result ? (result !== value) : (value === value)))) {
	        object[key] = result;
	      }
	    }
	  });
	  return object;
	}

	module.exports = baseMerge;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(24),
	    isArguments = __webpack_require__(25),
	    isArray = __webpack_require__(31),
	    isArrayLike = __webpack_require__(26),
	    isPlainObject = __webpack_require__(36),
	    isTypedArray = __webpack_require__(43),
	    toPlainObject = __webpack_require__(44);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	  var length = stackA.length,
	      srcValue = source[key];

	  while (length--) {
	    if (stackA[length] == srcValue) {
	      object[key] = stackB[length];
	      return;
	    }
	  }
	  var value = object[key],
	      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	      isCommon = result === undefined;

	  if (isCommon) {
	    result = srcValue;
	    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	      result = isArray(value)
	        ? value
	        : (isArrayLike(value) ? arrayCopy(value) : []);
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      result = isArguments(value)
	        ? toPlainObject(value)
	        : (isPlainObject(value) ? value : {});
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate
	  // it with its merged value.
	  stackA.push(srcValue);
	  stackB.push(result);

	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	  } else if (result === result ? (result !== value) : (value === value)) {
	    object[key] = result;
	  }
	}

	module.exports = baseMergeDeep;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = arrayCopy;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(26),
	    isObjectLike = __webpack_require__(30);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	module.exports = isArguments;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(27),
	    isLength = __webpack_require__(29);

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(28);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32),
	    isLength = __webpack_require__(29),
	    isObjectLike = __webpack_require__(30);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	module.exports = isArray;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(33);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(34),
	    isObjectLike = __webpack_require__(30);

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isNative;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	module.exports = isFunction;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(37),
	    isArguments = __webpack_require__(25),
	    isObjectLike = __webpack_require__(30);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(38),
	    keysIn = __webpack_require__(41);

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	module.exports = baseForIn;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(39);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(40);

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35);

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}

	module.exports = toObject;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(25),
	    isArray = __webpack_require__(31),
	    isIndex = __webpack_require__(42),
	    isLength = __webpack_require__(29),
	    isObject = __webpack_require__(35);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(29),
	    isObjectLike = __webpack_require__(30);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(45),
	    keysIn = __webpack_require__(41);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable
	 * properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return baseCopy(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32),
	    isArrayLike = __webpack_require__(26),
	    isObject = __webpack_require__(35),
	    shimKeys = __webpack_require__(47);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	module.exports = keys;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(25),
	    isArray = __webpack_require__(31),
	    isIndex = __webpack_require__(42),
	    isLength = __webpack_require__(29),
	    keysIn = __webpack_require__(41);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = shimKeys;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(49),
	    isIterateeCall = __webpack_require__(51),
	    restParam = __webpack_require__(52);

	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;

	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(50);

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	module.exports = bindCallback;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(26),
	    isIndex = __webpack_require__(42),
	    isObject = __webpack_require__(35);

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s fadeDownIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s fadeDownOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-fade-down';
	var fadeDown = { creator: creator, classname: classname };

	exports.fadeDown = fadeDown;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s fadeDownBigIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s fadeDownBigOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-fade-down-big';
	var fadeDownBig = { creator: creator, classname: classname };

	exports.fadeDownBig = fadeDownBig;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s fadeLeftIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s fadeLeftOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-fade-left';
	var fadeLeft = { creator: creator, classname: classname };

	exports.fadeLeft = fadeLeft;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s fadeLeftBigIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s fadeLeftBigOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-fade-left-big';
	var fadeLeftBig = { creator: creator, classname: classname };

	exports.fadeLeftBig = fadeLeftBig;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s fadeRightIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s fadeRightOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-fade-right';
	var fadeRight = { creator: creator, classname: classname };

	exports.fadeRight = fadeRight;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s fadeRightBigIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s fadeRightBigOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-fade-right-big';
	var fadeRightBig = { creator: creator, classname: classname };

	exports.fadeRightBig = fadeRightBig;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s fadeUpIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s fadeUpOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-fade-up';
	var fadeUp = { creator: creator, classname: classname };

	exports.fadeUp = fadeUp;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s fadeUpBigIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s fadeUpBigOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-fade-up-big';
	var fadeUpBig = { creator: creator, classname: classname };

	exports.fadeUpBig = fadeUpBig;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(62);

	var _zoomNormal = __webpack_require__(64);

	var _zoomDown = __webpack_require__(65);

	var _zoomUp = __webpack_require__(66);

	var _zoomRight = __webpack_require__(67);

	var _zoomLeft = __webpack_require__(68);

	var zooms = [_zoomNormal.zoomNormal, _zoomDown.zoomDown, _zoomUp.zoomUp, _zoomRight.zoomRight, _zoomLeft.zoomLeft];
	exports.zooms = zooms;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./zoom.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./zoom.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/**\n * Zoom animations\n */\n/********************************************/\n/**************************************************/\n/*******************************************************/\n/*******************************************************/\n@-moz-keyframes zoomNormalIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes zoomNormalIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@-o-keyframes zoomNormalIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes zoomNormalIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@-moz-keyframes zoomNormalOut {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes zoomNormalOut {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-o-keyframes zoomNormalOut {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes zoomNormalOut {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-moz-keyframes zoomDownIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n  }\n}\n@-webkit-keyframes zoomDownIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n  }\n}\n@-o-keyframes zoomDownIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n  }\n}\n@keyframes zoomDownIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n  }\n}\n@-moz-keyframes zoomDownOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomDownOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-o-keyframes zoomDownOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomDownOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-moz-keyframes zoomUpIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomUpIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-o-keyframes zoomUpIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomUpIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-moz-keyframes zoomUpOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomUpOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-o-keyframes zoomUpOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomUpOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-moz-keyframes zoomRightIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomRightIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-o-keyframes zoomRightIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomRightIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-moz-keyframes zoomRightOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n@-webkit-keyframes zoomRightOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n@-o-keyframes zoomRightOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n@keyframes zoomRightOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n@-moz-keyframes zoomLeftIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-webkit-keyframes zoomLeftIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-o-keyframes zoomLeftIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomLeftIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@-moz-keyframes zoomLeftOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n@-webkit-keyframes zoomLeftOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n@-o-keyframes zoomLeftOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n@keyframes zoomLeftOut {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n", ""]);

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s zoomNormalIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s zoomNormalOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-zoom-normal';
	var zoomNormal = { creator: creator, classname: classname };

	exports.zoomNormal = zoomNormal;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s zoomDownIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s zoomDownOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-zoom-down';
	var zoomDown = { creator: creator, classname: classname };

	exports.zoomDown = zoomDown;

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s zoomUpIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s zoomUpOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-zoom-up';
	var zoomUp = { creator: creator, classname: classname };

	exports.zoomUp = zoomUp;

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s zoomRightIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s zoomRightOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-zoom-right';
	var zoomRight = { creator: creator, classname: classname };

	exports.zoomRight = zoomRight;

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s zoomLeftIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s zoomLeftOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-zoom-left';
	var zoomLeft = { creator: creator, classname: classname };

	exports.zoomLeft = zoomLeft;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(70);

	var _lightSpeedNormal = __webpack_require__(72);

	var lightSpeeds = [_lightSpeedNormal.lightSpeed];
	exports.lightSpeeds = lightSpeeds;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./lightSpeed.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./lightSpeed.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "@-moz-keyframes lightSpeedNormalIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes lightSpeedNormalIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n@-o-keyframes lightSpeedNormalIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes lightSpeedNormalIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n@-moz-keyframes lightSpeedNormalOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes lightSpeedNormalOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n@-o-keyframes lightSpeedNormalOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n@keyframes lightSpeedNormalOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n", ""]);

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s lightSpeedNormalIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s lightSpeedNormalOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-light-speed';
	var lightSpeed = { creator: creator, classname: classname };

	exports.lightSpeed = lightSpeed;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	__webpack_require__(74);

	var _rotateDownLeft = __webpack_require__(76);

	var _rotateDownRight = __webpack_require__(77);

	var _rotateUpLeft = __webpack_require__(78);

	var _rotateUpRight = __webpack_require__(79);

	var rotates = [_rotateDownLeft.rotateDownLeft, _rotateDownRight.rotateDownRight, _rotateUpLeft.rotateUpLeft, _rotateUpRight.rotateUpRight];
	exports.rotates = rotates;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./rotate.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./rotate.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/**\n * ROTATES\n */\n@-moz-keyframes rotateDownLeftIn {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotateDownLeftIn {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-o-keyframes rotateDownLeftIn {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes rotateDownLeftIn {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-moz-keyframes rotateDownLeftOut {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rotateDownLeftOut {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n@-o-keyframes rotateDownLeftOut {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateDownLeftOut {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n@-moz-keyframes rotateDownRightIn {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotateDownRightIn {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-o-keyframes rotateDownRightIn {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes rotateDownRightIn {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-moz-keyframes rotateDownRightOut {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rotateDownRightOut {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@-o-keyframes rotateDownRightOut {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateDownRightOut {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@-moz-keyframes rotateUpLeftIn {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotateUpLeftIn {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-o-keyframes rotateUpLeftIn {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes rotateUpLeftIn {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-moz-keyframes rotateUpLeftOut {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rotateUpLeftOut {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@-o-keyframes rotateUpLeftOut {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateUpLeftOut {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@-moz-keyframes rotateUpRightIn {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes rotateUpRightIn {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-o-keyframes rotateUpRightIn {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@keyframes rotateUpRightIn {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n@-moz-keyframes rotateUpRightOut {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rotateUpRightOut {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n@-o-keyframes rotateUpRightOut {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateUpRightOut {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n", ""]);

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s rotateDownLeftIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s rotateDownLeftOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-rotate-down-left';
	var rotateDownLeft = { creator: creator, classname: classname };

	exports.rotateDownLeft = rotateDownLeft;

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s rotateDownRightIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s rotateDownRightOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-rotate-down-right';
	var rotateDownRight = { creator: creator, classname: classname };

	exports.rotateDownRight = rotateDownRight;

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s rotateUpLeftIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s rotateUpLeftOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-rotate-up-left';
	var rotateUpLeft = { creator: creator, classname: classname };

	exports.rotateUpLeft = rotateUpLeft;

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var creator = function creator($fxMakeAnimation) {

	  var enterAnimation = {
	    keyframeStyle: '.1s rotateUpRightIn'
	  };

	  var leaveAnimation = {
	    keyframeStyle: '.1s rotateUpRightOut'
	  };

	  return $fxMakeAnimation.create(enterAnimation, leaveAnimation);
	};

	creator.$inject = ['$fxMakeAnimation'];

	var classname = '.fx-rotate-up-right';
	var rotateUpRight = { creator: creator, classname: classname };

	exports.rotateUpRight = rotateUpRight;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _fxHelp = __webpack_require__(81);

	var _fxMakeAnimation = __webpack_require__(86);

	var config = function config($animateProvider) {
	  $animateProvider.classNameFilter(/fx-/);
	};

	config.$inject = ['$animateProvider'];

	var utils = angular.module('ngFx.utils', []).factory('$$fx', _fxHelp.fxHelp).factory('$fxMakeAnimation', _fxMakeAnimation.fxMakeAnimation).name;
	exports.utils = utils;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashLangToArray = __webpack_require__(82);

	var _lodashLangToArray2 = _interopRequireDefault(_lodashLangToArray);

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	var _easings = __webpack_require__(85);

	/**
	 * helper function to supply utility method for animations
	 * is registed as the $$fx factory
	 * @return {[Object]} public object of the methods to help with animations
	 */
	var fxHelp = function fxHelp($animateCss) {
	  // group of similar animation events
	  var similarEvents = ['enter', 'leave', 'move'];
	  var classEvents = ['addClass', 'setClass', 'removeClass'];

	  var durationRegxpString = '(\\d+)';
	  var durationRegxp = new RegExp(durationRegxpString);

	  /**
	   * takes in a fx-{option} and creates a regexp for
	   * checking against an element's classList
	   * @param  {[String]} option the fx-{option}
	   * @param  {[Boolean]} text   should the regexp loof for alphabet chars after the option
	   *                            ex: fx-ease-back
	   * @return {[Regexp]}        the composed regexp
	   */
	  var makeFxOptionRegexp = function makeFxOptionRegexp(option, text) {
	    var afterOption = text ? '[A-Za-z]' : durationRegxpString;
	    return new RegExp('fx\\-' + option + '\\-' + afterOption);
	  };

	  /**
	   * given a css classname, will check to see if it
	   * is trying to describe the duration of the animation
	   * with fx-speed-{num in ms}
	   * @param  {[String]} className a css classname
	   * @return {[Number]}           duration in seconds
	   */
	  var getDuration = function getDuration(className) {
	    // default to half a second duration

	    var duration = 500;

	    // allow usres to use fx-speed|dur|duration-{num in ms}
	    if (makeFxOptionRegexp('(speed|dur|duration)').test(className)) {
	      try {
	        duration = parseInt(className.match(durationRegxp)[0]);
	      } catch (e) {}
	    }

	    // convert ms to seconds for $animateCss to consume
	    return duration / 1000;
	  };

	  /**
	   * given a css classname, it will check to see if it
	   * trying to describe the stagger delay if any for the animation
	   * with fx-stagger-{num in ms}
	   * @param  {[String]} className css class name
	   * @return {[Number]}           number in seconds
	   */
	  var getStagger = function getStagger(className) {
	    if (makeFxOptionRegexp('stagger').test(className)) {
	      var stagger = undefined;
	      try {
	        stagger = parseInt(className.match(durationRegxp)[0]);
	      } catch (e) {
	        return;
	      }
	      // convert ms to seconds for $animateCss to consume
	      return stagger / 1000;
	    }
	  };

	  /**
	   * takes a class name and checks to see if it is trying
	   * to describe an ease type
	   * @param  {String} className css class name
	   * @return {Array}           bezier curve coordinates
	   */
	  var getEase = function getEase(className) {
	    var bezier = '';

	    if (!makeFxOptionRegexp('ease', true).test(className)) {
	      return;
	    } else {
	      var easeOptions = className.slice(8);

	      var _easeOptions$split = easeOptions.split('-');

	      var _easeOptions$split2 = _slicedToArray(_easeOptions$split, 3);

	      var ease = _easeOptions$split2[0];
	      var dir = _easeOptions$split2[1];
	      var _easeOptions$split2$2 = _easeOptions$split2[2];
	      var dir2 = _easeOptions$split2$2 === undefined ? '' : _easeOptions$split2$2;

	      var curve = _easings.curves[ease.trim()];

	      if (!curve) {
	        return;
	      }

	      if (!dir) {
	        return curve.inout;
	      } else {
	        var direction = ('' + dir + dir2).trim();
	        return curve[direction];
	      }
	    }
	  };

	  /**
	   * takes an element, parses the className, and returns
	   * an object of defined fx options
	   * @param  {DOM node} element
	   * @return {Object}           the fx options object for the element
	   */
	  var parseClassList = function parseClassList(element) {
	    var list = (0, _lodashLangToArray2['default'])(element[0].classList);
	    var classList = list.join(' ');

	    // will capture anything with `fx-thing-thing`
	    var fxRegexp = /(fx\-\w+\-(.*?)(\s|$))/g;

	    var options = classList.match(fxRegexp);

	    var results = options.reduce(function (_results, option) {
	      if (/stagger/.test(option)) {

	        var stagger = getStagger(option);
	        _results.stagger = stagger ? stagger : undefined;
	      } else if (/ease/.test(option)) {
	        var ease = getEase(option);

	        if (ease) {
	          _results.easing = 'cubic-bezier(' + ease.join() + ')';
	        }
	      } else if (/(speed|dur|duration)/.test(option)) {
	        _results.duration = getDuration(option);
	      }

	      return _results;
	      // default to half a second animations
	    }, { duration: .5 });

	    return results;
	  };

	  /**
	   * helper function to build ngAnimate animation object using $animateCss
	   * @param  {[DOM NODE]} element   the element that will be animated
	   * @param  {[Object]}   animation the object defining the animation, using
	   *                                $animateCss config
	   * @return {[Promise]}           whatver $animateCss returns
	   */
	  var buildAnimation = function buildAnimation(element, animation) {
	    var opts = parseClassList(element);
	    var animateInstructions = (0, _lodashObjectMerge2['default'])(animation, opts);
	    return $animateCss(element, animateInstructions);
	  };

	  /**
	   * helper function to buid the `enter`, `leave`, and `move` animation
	   * functions for ngAnimate to consume
	   * @param  {Object} animationConfigs all the animation objects for the
	   *                                     `enter`, `leave`, and `move` events
	   * @return {Object}                  animation object to feed ngAnimate
	   */
	  var createAnimationsForSimilarEvents = function createAnimationsForSimilarEvents(animationConfigs) {
	    return similarEvents.reduce(function (result, event) {
	      var animationConfig = animationConfigs[event];
	      if (animationConfig) {
	        result[event] = function (element, done) {
	          return buildAnimation(element, animationConfig);
	        };
	      }

	      return result;
	    }, {});
	  };

	  /**
	   * helper function to build `addClass` and `removeClass` animation
	   * functions for ngAnimate to consume
	   * @param  {Object} animationConfigs all the animations for the
	   *                                   `addClass` and `removeClass` events
	   * @return {Object}                  animation object to feed ngAnimate
	   */
	  var createClassAnimations = function createClassAnimations(animationConfigs) {
	    return classEvents.reduce(function (result, event) {
	      var animationConfig = animationConfigs[event];

	      if (animationConfig) {
	        result[event] = function (element, className, done) {
	          if (/(addClass|removeClass)/.test(event)) {
	            return buildAnimation(element, animationConfig);
	          } else {
	            done();
	          }
	        };
	      }

	      return result;
	    }, {});
	  };

	  // expose all for testing purposes
	  return {
	    getStagger: getStagger,
	    getDuration: getDuration,
	    getEase: getEase,
	    parseClassList: parseClassList,
	    buildAnimation: buildAnimation,
	    createAnimationsForSimilarEvents: createAnimationsForSimilarEvents,
	    createClassAnimations: createClassAnimations
	  };
	};

	fxHelp.$inject = ['$animateCss'];
	exports.fxHelp = fxHelp;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(24),
	    getLength = __webpack_require__(27),
	    isLength = __webpack_require__(29),
	    values = __webpack_require__(83);

	/**
	 * Converts `value` to an array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the converted array.
	 * @example
	 *
	 * (function() {
	 *   return _.toArray(arguments).slice(1);
	 * }(1, 2, 3));
	 * // => [2, 3]
	 */
	function toArray(value) {
	  var length = value ? getLength(value) : 0;
	  if (!isLength(length)) {
	    return values(value);
	  }
	  if (!length) {
	    return [];
	  }
	  return arrayCopy(value);
	}

	module.exports = toArray;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(84),
	    keys = __webpack_require__(46);

	/**
	 * Creates an array of the own enumerable property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return baseValues(object, keys(object));
	}

	module.exports = values;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  var index = -1,
	      length = props.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = object[props[index]];
	  }
	  return result;
	}

	module.exports = baseValues;


/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var curves = {
	  back: {
	    "in": [0.6, -0.28, 0.735, 0.045],
	    out: [0.175, 0.885, 0.32, 1.275],
	    inout: [0.68, -0.55, 0.265, 1.55]
	  },

	  expo: {
	    "in": [0.95, 0.05, 0.795, 0.035],
	    out: [0.19, 1, 0.22, 1],
	    inout: [1, 0, 0, 1]
	  },

	  circ: {
	    "in": [0.6, 0.04, 0.98, 0.335],
	    out: [0.075, 0.82, 0.165, 1],
	    inout: [0.785, 0.135, 0.15, 0.86]
	  },

	  quint: {
	    "in": [0.755, 0.05, 0.855, 0.06],
	    out: [0.23, 1, 0.32, 1],
	    inout: [0.86, 0, 0.07, 1]
	  },

	  quart: {
	    "in": [0.895, 0.03, 0.685, 0.22],
	    out: [0.165, 0.84, 0.44, 1],
	    inout: [0.77, 0, 0.175, 1]
	  },

	  cubic: {
	    "in": [0.55, 0.055, 0.675, 0.19],
	    out: [0.215, 0.61, 0.355, 1],
	    inout: [0.645, 0.045, 0.355, 1]
	  },

	  quad: {
	    "in": [0.55, 0.085, 0.68, 0.53],
	    out: [0.25, 0.46, 0.45, 0.94],
	    inout: [0.455, 0.03, 0.515, 0.955]
	  },

	  sine: {
	    "in": [0.47, 0, 0.745, 0.715],
	    out: [0.39, 0.575, 0.565, 1],
	    inout: [0.445, 0.05, 0.55, 0.95]
	  }
	};
	exports.curves = curves;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashObjectMerge = __webpack_require__(20);

	var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

	/**
	 * factory function to help with the
	 * basics of creating the events animaton
	 * object for $animate to consume
	 * @param  {[Object]} $animateCss part of ngAnimate
	 * @param  {[Object]} $$fx     helper object to assist in getting
	 *                                meta data from the element
	 * @return {[Function]}           function used to pass in animation options from
	 *                                the ngmodule.animation() methods
	 */
	var fxMakeAnimation = function fxMakeAnimation($animateCss, $$fx) {

	  /**
	   * takes in different animation objects for each animation event
	   * in ngAnimate. All are optional. The objects are given straight to
	   * $animateCss after the element's classList is parsed for information
	   * about duration and staggering
	   * @param  {[Object]}  enter object describing the enter animation
	   * @param  {[Object]}  leave object describing the leave animation
	   * @param  {[Object]}  move  object describing the move animation
	   * @param  {...[Object]} rest  rest of the objects for the other event type aniamtions
	   * @return {[Object]}          the animation object for ngAnimate to consume
	   */
	  var create = function create(enter, leave, setClass) {
	    var move = (0, _lodashObjectMerge2['default'])({}, enter);
	    var addClass = (0, _lodashObjectMerge2['default'])({}, leave);
	    var removeClass = (0, _lodashObjectMerge2['default'])({}, enter);

	    var ngAnimateConsumable = $$fx.createAnimationsForSimilarEvents({ enter: enter, leave: leave, move: move });

	    var classConsumables = $$fx.createClassAnimations({ addClass: addClass, removeClass: removeClass });

	    ngAnimateConsumable = (0, _lodashObjectMerge2['default'])(ngAnimateConsumable, classConsumables);

	    return ngAnimateConsumable;
	  };

	  return { create: create };
	};

	fxMakeAnimation.$inject = ['$animateCss', '$$fx'];

	exports.fxMakeAnimation = fxMakeAnimation;

/***/ }
/******/ ])
});
;