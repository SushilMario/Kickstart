"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\nvar ShowCampaign = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(ShowCampaign, Component1);\n    var _super = _createSuper(ShowCampaign);\n    function ShowCampaign() {\n        _classCallCheck(this, ShowCampaign);\n        return _super.apply(this, arguments);\n    }\n    _createClass(ShowCampaign, [\n        {\n            key: \"renderCards\",\n            value: function renderCards() {\n                var _props = this.props, minimumContribution = _props.minimumContribution, balance = _props.balance, requestCount = _props.requestCount, approverCount = _props.approverCount, manager = _props.manager;\n                var items = [\n                    {\n                        header: manager,\n                        meta: \"Address of Manager\",\n                        description: \"This is the account address of the creator of the campaign, who is responsible for making requests to withdraw funds\"\n                    },\n                    {\n                        header: minimumContribution,\n                        meta: \"Minimum Contribution\",\n                        description: \"The minimum amount of ether required to enter as a contributor to this campaign\"\n                    },\n                    {\n                        header: balance,\n                        meta: \"Funds Raised\",\n                        description: \"The total amount of ether raised so far for this campaign\"\n                    },\n                    {\n                        header: requestCount,\n                        meta: \"Pending Requests\",\n                        description: \"The number of unresolved withdraw funds requests created by the manager\"\n                    }, \n                ];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/sushilmario/Documents_Mac/Coding/Blockchain/Ethereum_and_Solidity/Projects/kickstart/pages/campaigns/show.js\",\n                    lineNumber: 57,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: this.renderCards()\n                }, void 0, false, {\n                    fileName: \"/Users/sushilmario/Documents_Mac/Coding/Blockchain/Ethereum_and_Solidity/Projects/kickstart/pages/campaigns/show.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return ShowCampaign;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowCampaign);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRUk7QUFDSTtBQUdWO0FBRUc7QUFXMUMsZ0JBQWtCLGlCQWtEZjs7OzthQWxER00sWUFBWTs7Ozs7O1lBRWRDLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUNYO2dCQUNJLElBT0ksTUFBVSxHQUFWLElBQUksQ0FBQ0MsS0FBSyxFQUxWQyxtQkFBbUIsR0FLbkIsTUFBVSxDQUxWQSxtQkFBbUIsRUFDbkJDLE9BQU8sR0FJUCxNQUFVLENBSlZBLE9BQU8sRUFDUEMsWUFBWSxHQUdaLE1BQVUsQ0FIVkEsWUFBWSxFQUNaQyxhQUFhLEdBRWIsTUFBVSxDQUZWQSxhQUFhLEVBQ2JDLE9BQU8sR0FDUCxNQUFVLENBRFZBLE9BQU87Z0JBR1gsSUFBTUMsS0FBSyxHQUNYO29CQUNJO3dCQUNJQyxNQUFNLEVBQUVGLE9BQU87d0JBQ2ZHLElBQUksRUFBRSxvQkFBb0I7d0JBQzFCQyxXQUFXLEVBQUUsc0hBQXNIO3FCQUN0STtvQkFDRDt3QkFDSUYsTUFBTSxFQUFFTixtQkFBbUI7d0JBQzNCTyxJQUFJLEVBQUUsc0JBQXNCO3dCQUM1QkMsV0FBVyxFQUFFLGlGQUFpRjtxQkFDakc7b0JBQ0Q7d0JBQ0lGLE1BQU0sRUFBRUwsT0FBTzt3QkFDZk0sSUFBSSxFQUFFLGNBQWM7d0JBQ3BCQyxXQUFXLEVBQUUsMkRBQTJEO3FCQUMzRTtvQkFDRDt3QkFDSUYsTUFBTSxFQUFFSixZQUFZO3dCQUNwQkssSUFBSSxFQUFFLGtCQUFrQjt3QkFDeEJDLFdBQVcsRUFBRSx5RUFBeUU7cUJBQ3pGO2lCQUNKO2dCQUVELHFCQUFPLDhEQUFDZCx5REFBVTtvQkFBQ1csS0FBSyxFQUFLQSxLQUFLOzs7Ozt3QkFBSyxDQUFDO2FBQzNDOzs7WUFFREssR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQ047Z0JBQ0kscUJBQ0ksOERBQUNqQiwwREFBTTs4QkFDRCxJQUFJLENBQUNLLFdBQVcsRUFBRTs7Ozs7d0JBQ2YsQ0FDWDthQUNMOzs7O0NBQ0osQ0FoRDBCTiw0Q0FBUyxDQWdEbkM7O0FBRUQsK0RBQWVLLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9iMGRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5pbXBvcnQgcmV0cmlldmVDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcblxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMocHJvcHMpXG57XG4gICAgY29uc3QgY2FtcGFpZ24gPSByZXRyaWV2ZUNhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcblxuICAgIHJldHVybiB7IHByb3BzOiB7IG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbJzAnXSwgYmFsYW5jZTogc3VtbWFyeVsnMSddLCByZXF1ZXN0Q291bnQ6IHN1bW1hcnlbJzInXSwgYXBwcm92ZXJDb3VudDogc3VtbWFyeVsnMyddLCBtYW5hZ2VyOiBzdW1tYXJ5Wyc0J10gfSB9O1xufVxuXG5jbGFzcyBTaG93Q2FtcGFpZ24gZXh0ZW5kcyBDb21wb25lbnRcbntcbiAgICByZW5kZXJDYXJkcygpXG4gICAge1xuICAgICAgICBjb25zdCBcbiAgICAgICAge1xuICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgICAgIGJhbGFuY2UsXG4gICAgICAgICAgICByZXF1ZXN0Q291bnQsXG4gICAgICAgICAgICBhcHByb3ZlckNvdW50LFxuICAgICAgICAgICAgbWFuYWdlclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBpdGVtcyA9IFxuICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICAgICAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgYWNjb3VudCBhZGRyZXNzIG9mIHRoZSBjcmVhdG9yIG9mIHRoZSBjYW1wYWlnbiwgd2hvIGlzIHJlc3BvbnNpYmxlIGZvciBtYWtpbmcgcmVxdWVzdHMgdG8gd2l0aGRyYXcgZnVuZHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICAgICAgICAgICAgbWV0YTogXCJNaW5pbXVtIENvbnRyaWJ1dGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBtaW5pbXVtIGFtb3VudCBvZiBldGhlciByZXF1aXJlZCB0byBlbnRlciBhcyBhIGNvbnRyaWJ1dG9yIHRvIHRoaXMgY2FtcGFpZ25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGJhbGFuY2UsXG4gICAgICAgICAgICAgICAgbWV0YTogXCJGdW5kcyBSYWlzZWRcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdG90YWwgYW1vdW50IG9mIGV0aGVyIHJhaXNlZCBzbyBmYXIgZm9yIHRoaXMgY2FtcGFpZ25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHJlcXVlc3RDb3VudCxcbiAgICAgICAgICAgICAgICBtZXRhOiBcIlBlbmRpbmcgUmVxdWVzdHNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbnVtYmVyIG9mIHVucmVzb2x2ZWQgd2l0aGRyYXcgZnVuZHMgcmVxdWVzdHMgY3JlYXRlZCBieSB0aGUgbWFuYWdlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcyA9IHsgaXRlbXMgfSAvPjtcbiAgICB9XG5cbiAgICByZW5kZXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNhcmRzKCkgfVxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93Q2FtcGFpZ247Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZCIsIkJ1dHRvbiIsIndlYjMiLCJTaG93Q2FtcGFpZ24iLCJyZW5kZXJDYXJkcyIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlckNvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiR3JvdXAiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

/***/ })

});