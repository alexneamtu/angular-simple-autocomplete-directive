(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * angular-simple-autocomplete-directive
	 * (c) 2016 Alex Neamtu
	 * License: MIT
	 */

	'use strict';

	angular.module('simple-autocomplete', []).directive('autocomplete', __webpack_require__(2));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * angular-simple-autocomplete-directive
	 * (c) 2016 Alex Neamtu
	 * License: MIT
	 */

	var autocompleteTmpl = __webpack_require__(3);

	var controller = function () {
	    function controller($scope, $sce) {
	        _classCallCheck(this, controller);

	        this.$scope = $scope;
	        this.$sce = $sce;
	        $scope.selected = -1;

	        $scope.selectOption = this.selectOption.bind(this);
	        $scope.autocomplete = this.autocomplete.bind(this);
	        $scope.keyEvent = this.keyEvent.bind(this);
	    }

	    _createClass(controller, [{
	        key: 'selectOption',
	        value: function selectOption(option) {
	            this.$scope.model = option;
	            this.$scope.showOptions = false;
	            this.$scope.filteredOptions = [];
	        }
	    }, {
	        key: 'autocomplete',
	        value: function autocomplete(search) {
	            var _this = this;

	            this.$scope.showOptions = false;
	            this.$scope.filteredOptions = [];
	            angular.forEach(this.$scope.options, function (o) {
	                o = o.toString();
	                if (o.indexOf(search) >= 0 && search) {
	                    _this.$scope.filteredOptions.push({
	                        value: o,
	                        text: _this.$sce.trustAsHtml(o.replace(search, '<em>' + search + '</em>'))
	                    });
	                }
	            });
	            if (this.$scope.filteredOptions.length > 0) {
	                this.$scope.showOptions = true;
	            }
	        }
	    }, {
	        key: 'keyEvent',
	        value: function keyEvent(e) {
	            if (this.$scope.filteredOptions) {
	                switch (e.keyCode) {
	                    case 38:
	                        this.$scope.selected--;
	                        if (this.$scope.selected < 0) {
	                            this.$scope.selected = this.$scope.filteredOptions.length - 1;
	                        }
	                        break;
	                    case 40:
	                        this.$scope.selected++;
	                        if (this.$scope.selected >= this.$scope.filteredOptions.length) {
	                            this.$scope.selected = 0;
	                        }
	                        break;
	                    case 13:
	                        if (angular.isDefined(this.$scope.filteredOptions[this.$scope.selected])) {
	                            this.selectOption(this.$scope.filteredOptions[this.$scope.selected].value);
	                        }
	                        break;
	                }
	            }
	        }
	    }]);

	    return controller;
	}();

	controller.$inject = ['$scope', '$sce'];

	function autocomplete() {
	    return {
	        restrict: 'AE',
	        scope: {
	            model: '=',
	            options: '=',
	            ngDisabled: '='
	        },
	        replace: true,
	        transclude: true,
	        template: autocompleteTmpl,
	        controller: controller

	    };
	}

	exports.default = autocomplete;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"autocomplete\">\n    <input ng-model=\"model\" ng-change=\"autocomplete(model)\" ng-disabled=\"ngDisabled\" ng-keydown=\"keyEvent($event)\"/>\n    <ul ng-show=\"showOptions\">\n        <li ng-repeat=\"option in filteredOptions track by $index\" ng-bind-html=\"option.text\" ng-click=\"selectOption(option.value)\" ng-class=\"{'selected': $index == selected}\"></li>\n    </ul>\n</div>";

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;