webpackHotUpdate_N_E("pages/admin/dashboard",{

/***/ "./layouts/Admin.js":
/*!**************************!*\
  !*** ./layouts/Admin.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_impsk_Desktop_PSK_NEXT_nextjs_argon_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var components_Navbars_AdminNavbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Navbars/AdminNavbar.js */ \"./components/Navbars/AdminNavbar.js\");\n/* harmony import */ var components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footers/AdminFooter.js */ \"./components/Footers/AdminFooter.js\");\n/* harmony import */ var components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Sidebar/Sidebar.js */ \"./components/Sidebar/Sidebar.js\");\n/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! routes.js */ \"./routes.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/impsk/Desktop/PSK/NEXT/nextjs-argon-dashboard/layouts/Admin.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_impsk_Desktop_PSK_NEXT_nextjs_argon_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // reactstrap components\n\n // core components\n\n\n\n\n\n\nfunction Admin(props) {\n  _s();\n\n  // used for checking current route\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var mainContentRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    document.documentElement.scrollTop = 0;\n    document.scrollingElement.scrollTop = 0;\n    mainContentRef.current.scrollTop = 0;\n  }, []);\n\n  var getBrandText = function getBrandText() {\n    for (var i = 0; i < routes_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].length; i++) {\n      if (router.route.indexOf(routes_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"][i].layout + routes_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"][i].path) !== -1) {\n        return routes_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"][i].name;\n      }\n    }\n\n    return \"Brand\";\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _objectSpread(_objectSpread({}, props), {}, {\n      routes: routes_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n      logo: {\n        innerLink: \"/admin/index\",\n        imgSrc: __webpack_require__(/*! assets/img/brand/nextjs_argon_black.png */ \"./assets/img/brand/nextjs_argon_black.png\"),\n        imgAlt: \"...\"\n      }\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"main-content\",\n      ref: mainContentRef,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Navbars_AdminNavbar_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread(_objectSpread({}, props), {}, {\n        brandText: getBrandText()\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n        fluid: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Admin, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Admin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Admin);\n\nvar _c;\n\n$RefreshReg$(_c, \"Admin\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9BZG1pbi5qcz84YmExIl0sIm5hbWVzIjpbIkFkbWluIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYWluQ29udGVudFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxpbmdFbGVtZW50IiwiY3VycmVudCIsImdldEJyYW5kVGV4dCIsImkiLCJyb3V0ZXMiLCJsZW5ndGgiLCJyb3V0ZSIsImluZGV4T2YiLCJsYXlvdXQiLCJwYXRoIiwibmFtZSIsImlubmVyTGluayIsImltZ1NyYyIsInJlcXVpcmUiLCJpbWdBbHQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDcEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsY0FBYyxnQkFBR0MsNENBQUssQ0FBQ0MsU0FBTixFQUFyQjtBQUNBRCw4Q0FBSyxDQUFDRSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFlBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsR0FBcUMsQ0FBckM7QUFDQUYsWUFBUSxDQUFDRyxnQkFBVCxDQUEwQkQsU0FBMUIsR0FBc0MsQ0FBdEM7QUFDQU4sa0JBQWMsQ0FBQ1EsT0FBZixDQUF1QkYsU0FBdkIsR0FBbUMsQ0FBbkM7QUFDRCxHQUpELEVBSUcsRUFKSDs7QUFLQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0MsaURBQU0sQ0FBQ0MsTUFBM0IsRUFBbUNGLENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsVUFBSVosTUFBTSxDQUFDZSxLQUFQLENBQWFDLE9BQWIsQ0FBcUJILGlEQUFNLENBQUNELENBQUQsQ0FBTixDQUFVSyxNQUFWLEdBQW1CSixpREFBTSxDQUFDRCxDQUFELENBQU4sQ0FBVU0sSUFBbEQsTUFBNEQsQ0FBQyxDQUFqRSxFQUFvRTtBQUNsRSxlQUFPTCxpREFBTSxDQUFDRCxDQUFELENBQU4sQ0FBVU8sSUFBakI7QUFDRDtBQUNGOztBQUNELFdBQU8sT0FBUDtBQUNELEdBUEQ7O0FBUUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxxRUFBRCxrQ0FDTXBCLEtBRE47QUFFRSxZQUFNLEVBQUVjLGlEQUZWO0FBR0UsVUFBSSxFQUFFO0FBQ0pPLGlCQUFTLEVBQUUsY0FEUDtBQUVKQyxjQUFNLEVBQUVDLG1CQUFPLENBQUMsMEZBQUQsQ0FGWDtBQUdKQyxjQUFNLEVBQUU7QUFISjtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBOEIsU0FBRyxFQUFFckIsY0FBbkM7QUFBQSw4QkFDRSxxRUFBQyx5RUFBRCxrQ0FBaUJILEtBQWpCO0FBQXdCLGlCQUFTLEVBQUVZLFlBQVk7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUdaLEtBQUssQ0FBQ3lCLFFBRlQsZUFHRSxxRUFBQyxvREFBRDtBQUFXLGFBQUssTUFBaEI7QUFBQSwrQkFDRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUEsa0JBREY7QUFvQkQ7O0dBckNRMUIsSztVQUVRRyxxRDs7O0tBRlJILEs7QUF1Q01BLG9FQUFmIiwiZmlsZSI6Ii4vbGF5b3V0cy9BZG1pbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgQWRtaW5OYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFycy9BZG1pbk5hdmJhci5qc1wiO1xuaW1wb3J0IEFkbWluRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlcnMvQWRtaW5Gb290ZXIuanNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJjb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5qc1wiO1xuXG5pbXBvcnQgcm91dGVzIGZyb20gXCJyb3V0ZXMuanNcIjtcblxuZnVuY3Rpb24gQWRtaW4ocHJvcHMpIHtcbiAgLy8gdXNlZCBmb3IgY2hlY2tpbmcgY3VycmVudCByb3V0ZVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IG1haW5Db250ZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIG1haW5Db250ZW50UmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gMDtcbiAgfSwgW10pO1xuICBjb25zdCBnZXRCcmFuZFRleHQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyb3V0ZXIucm91dGUuaW5kZXhPZihyb3V0ZXNbaV0ubGF5b3V0ICsgcm91dGVzW2ldLnBhdGgpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gcm91dGVzW2ldLm5hbWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIkJyYW5kXCI7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgcm91dGVzPXtyb3V0ZXN9XG4gICAgICAgIGxvZ289e3tcbiAgICAgICAgICBpbm5lckxpbms6IFwiL2FkbWluL2luZGV4XCIsXG4gICAgICAgICAgaW1nU3JjOiByZXF1aXJlKFwiYXNzZXRzL2ltZy9icmFuZC9uZXh0anNfYXJnb25fYmxhY2sucG5nXCIpLFxuICAgICAgICAgIGltZ0FsdDogXCIuLi5cIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiIHJlZj17bWFpbkNvbnRlbnRSZWZ9PlxuICAgICAgICA8QWRtaW5OYXZiYXIgey4uLnByb3BzfSBicmFuZFRleHQ9e2dldEJyYW5kVGV4dCgpfSAvPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgPEFkbWluRm9vdGVyIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layouts/Admin.js\n");

/***/ })

})