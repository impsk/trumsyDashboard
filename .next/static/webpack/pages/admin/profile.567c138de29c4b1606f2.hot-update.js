webpackHotUpdate_N_E("pages/admin/profile",{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var routes = [{\n  path: \"/dashboard\",\n  name: \"Dashboard\",\n  icon: \"ni ni-tv-2 text-primary\",\n  layout: \"/admin\"\n}, {\n  path: \"/maps\",\n  name: \"Task/ Chore List\",\n  icon: \"ni ni-pin-3 text-orange\",\n  layout: \"/admin\"\n}, {\n  path: \"/icons\",\n  name: \"Points Manager\",\n  icon: \"ni ni-planet text-blue\",\n  layout: \"/admin\"\n}, {\n  path: \"/profile\",\n  name: \"User Profile\",\n  icon: \"ni ni-single-02 text-yellow\",\n  layout: \"/admin\"\n}, {\n  path: \"/tables\",\n  name: \"Tables\",\n  icon: \"ni ni-bullet-list-67 text-red\",\n  layout: \"/admin\"\n}, {\n  path: \"/login\",\n  name: \"Login\",\n  icon: \"ni ni-key-25 text-info\",\n  layout: \"/auth\"\n}, {\n  path: \"/register\",\n  name: \"Register\",\n  icon: \"ni ni-circle-08 text-pink\",\n  layout: \"/auth\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzLmpzP2YxYzEiXSwibmFtZXMiOlsicm91dGVzIiwicGF0aCIsIm5hbWUiLCJpY29uIiwibGF5b3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLGtEQUFJQSxNQUFNLEdBQUcsQ0FDWDtBQUNFQyxNQUFJLEVBQUUsWUFEUjtBQUVFQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxNQUFJLEVBQUUseUJBSFI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0FEVyxFQVFYO0FBQ0VILE1BQUksRUFBRSxPQURSO0FBRUVDLE1BQUksRUFBRSxrQkFGUjtBQUdFQyxNQUFJLEVBQUUseUJBSFI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0FSVyxFQWNYO0FBQ0VILE1BQUksRUFBRSxRQURSO0FBRUVDLE1BQUksRUFBRSxnQkFGUjtBQUdFQyxNQUFJLEVBQUUsd0JBSFI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0FkVyxFQW9CWDtBQUNFSCxNQUFJLEVBQUUsVUFEUjtBQUVFQyxNQUFJLEVBQUUsY0FGUjtBQUdFQyxNQUFJLEVBQUUsNkJBSFI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0FwQlcsRUEwQlg7QUFDRUgsTUFBSSxFQUFFLFNBRFI7QUFFRUMsTUFBSSxFQUFFLFFBRlI7QUFHRUMsTUFBSSxFQUFFLCtCQUhSO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBMUJXLEVBZ0NYO0FBQ0VILE1BQUksRUFBRSxRQURSO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLE1BQUksRUFBRSx3QkFIUjtBQUlFQyxRQUFNLEVBQUU7QUFKVixDQWhDVyxFQXNDWDtBQUNFSCxNQUFJLEVBQUUsV0FEUjtBQUVFQyxNQUFJLEVBQUUsVUFGUjtBQUdFQyxNQUFJLEVBQUUsMkJBSFI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0F0Q1csQ0FBYjtBQTZDZUoscUVBQWYiLCJmaWxlIjoiLi9yb3V0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXG4gICAgbmFtZTogXCJEYXNoYm9hcmRcIixcbiAgICBpY29uOiBcIm5pIG5pLXR2LTIgdGV4dC1wcmltYXJ5XCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuXG4gIHtcbiAgICBwYXRoOiBcIi9tYXBzXCIsXG4gICAgbmFtZTogXCJUYXNrLyBDaG9yZSBMaXN0XCIsXG4gICAgaWNvbjogXCJuaSBuaS1waW4tMyB0ZXh0LW9yYW5nZVwiLFxuICAgIGxheW91dDogXCIvYWRtaW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2ljb25zXCIsXG4gICAgbmFtZTogXCJQb2ludHMgTWFuYWdlclwiLFxuICAgIGljb246IFwibmkgbmktcGxhbmV0IHRleHQtYmx1ZVwiLFxuICAgIGxheW91dDogXCIvYWRtaW5cIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2ZpbGVcIixcbiAgICBuYW1lOiBcIlVzZXIgUHJvZmlsZVwiLFxuICAgIGljb246IFwibmkgbmktc2luZ2xlLTAyIHRleHQteWVsbG93XCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvdGFibGVzXCIsXG4gICAgbmFtZTogXCJUYWJsZXNcIixcbiAgICBpY29uOiBcIm5pIG5pLWJ1bGxldC1saXN0LTY3IHRleHQtcmVkXCIsXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvbG9naW5cIixcbiAgICBuYW1lOiBcIkxvZ2luXCIsXG4gICAgaWNvbjogXCJuaSBuaS1rZXktMjUgdGV4dC1pbmZvXCIsXG4gICAgbGF5b3V0OiBcIi9hdXRoXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9yZWdpc3RlclwiLFxuICAgIG5hbWU6IFwiUmVnaXN0ZXJcIixcbiAgICBpY29uOiBcIm5pIG5pLWNpcmNsZS0wOCB0ZXh0LXBpbmtcIixcbiAgICBsYXlvdXQ6IFwiL2F1dGhcIixcbiAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./routes.js\n");

/***/ })

})