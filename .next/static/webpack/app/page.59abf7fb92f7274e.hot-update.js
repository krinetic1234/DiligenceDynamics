"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/FinanceChart.tsx":
/*!*****************************************!*\
  !*** ./app/components/FinanceChart.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-adapter-date-fns */ \"(app-pages-browser)/./node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js\");\n\n\n\n\n // Import the adapter\nconst FinanceChart = (param)=>{\n    let { data } = param;\n    if (data == null) {\n        return;\n    }\n    if (!data.results || data.resultsCount === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                backgroundColor: \"#FF7F7F\",\n                borderColor: \"red\",\n                borderWidth: 3,\n                borderStyle: \"solid\",\n                borderRadius: 25,\n                width: 150,\n                padding: 5,\n                justifyContent: \"center\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results found\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/FinanceChart.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/FinanceChart.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined);\n    }\n    const chartData = {\n        labels: data.results.map((result)=>new Date(result.t)),\n        datasets: [\n            {\n                label: data.ticker + \" Close Price\",\n                data: data.results.map((result)=>result.c),\n                borderColor: \"rgb(53, 162, 235)\",\n                backgroundColor: \"rgba(53, 162, 235, 0.5)\"\n            }\n        ]\n    };\n    const options = {\n        scales: {\n            x: {\n                type: \"time\",\n                time: {\n                    unit: \"day\"\n                },\n                title: {\n                    display: true,\n                    text: \"Date\"\n                }\n            },\n            y: {\n                title: {\n                    display: true,\n                    text: \"Close Price ($)\"\n                }\n            }\n        },\n        plugins: {\n            legend: {\n                display: true,\n                position: \"top\"\n            }\n        },\n        responsive: true,\n        maintainAspectRatio: true\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: 600\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            data: chartData,\n            options: options\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/FinanceChart.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/FinanceChart.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FinanceChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FinanceChart);\nvar _c;\n$RefreshReg$(_c, \"FinanceChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ZpbmFuY2VDaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDSDtBQUNnQjtBQUNMLENBQUMscUJBQXFCO0FBRXhELE1BQU1FLGVBQWU7UUFBQyxFQUFFQyxJQUFJLEVBQUU7SUFDNUIsSUFBSUEsUUFBUSxNQUFNO1FBQ2hCO0lBQ0Y7SUFDQSxJQUFJLENBQUNBLEtBQUtDLE9BQU8sSUFBSUQsS0FBS0UsWUFBWSxLQUFLLEdBQUc7UUFDNUMscUJBQ0UsOERBQUNDO1lBQ0NDLE9BQU87Z0JBQ0xDLGlCQUFpQjtnQkFDakJDLGFBQWE7Z0JBQ2JDLGFBQWE7Z0JBQ2JDLGFBQWE7Z0JBQ2JDLGNBQWM7Z0JBQ2RDLE9BQU87Z0JBQ1BDLFNBQVM7Z0JBQ1RDLGdCQUFnQjtnQkFDaEJDLFlBQVk7WUFDZDtzQkFFQSw0RUFBQ0M7MEJBQUU7Ozs7Ozs7Ozs7O0lBR1Q7SUFFQSxNQUFNQyxZQUFZO1FBQ2hCQyxRQUFRaEIsS0FBS0MsT0FBTyxDQUFDZ0IsR0FBRyxDQUFDLENBQUNDLFNBQVcsSUFBSUMsS0FBS0QsT0FBT0UsQ0FBQztRQUN0REMsVUFBVTtZQUNSO2dCQUNFQyxPQUFPdEIsS0FBS3VCLE1BQU0sR0FBRztnQkFDckJ2QixNQUFNQSxLQUFLQyxPQUFPLENBQUNnQixHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT00sQ0FBQztnQkFDM0NsQixhQUFhO2dCQUNiRCxpQkFBaUI7WUFDbkI7U0FDRDtJQUNIO0lBRUEsTUFBTW9CLFVBQVU7UUFDZEMsUUFBUTtZQUNOQyxHQUFHO2dCQUNEQyxNQUFNO2dCQUNOQyxNQUFNO29CQUNKQyxNQUFNO2dCQUNSO2dCQUNBQyxPQUFPO29CQUNMQyxTQUFTO29CQUNUQyxNQUFNO2dCQUNSO1lBQ0Y7WUFDQUMsR0FBRztnQkFDREgsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsTUFBTTtnQkFDUjtZQUNGO1FBQ0Y7UUFDQUUsU0FBUztZQUNQQyxRQUFRO2dCQUNOSixTQUFTO2dCQUNUSyxVQUFVO1lBQ1o7UUFDRjtRQUNBQyxZQUFZO1FBQ1pDLHFCQUFxQjtJQUN2QjtJQUVBLHFCQUNFLDhEQUFDcEM7UUFBSUMsT0FBTztZQUFFTSxPQUFPO1FBQUk7a0JBQ3ZCLDRFQUFDWixpREFBSUE7WUFBQ0UsTUFBTWU7WUFBV1UsU0FBU0E7Ozs7Ozs7Ozs7O0FBR3RDO0tBdEVNMUI7QUF3RU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRmluYW5jZUNoYXJ0LnRzeD9mOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQgXCJjaGFydGpzLWFkYXB0ZXItZGF0ZS1mbnNcIjsgLy8gSW1wb3J0IHRoZSBhZGFwdGVyXHJcblxyXG5jb25zdCBGaW5hbmNlQ2hhcnQgPSAoeyBkYXRhIH0pID0+IHtcclxuICBpZiAoZGF0YSA9PSBudWxsKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghZGF0YS5yZXN1bHRzIHx8IGRhdGEucmVzdWx0c0NvdW50ID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkY3RjdGXCIsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAzLFxyXG4gICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogMjUsXHJcbiAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+Tm8gcmVzdWx0cyBmb3VuZDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhcnREYXRhID0ge1xyXG4gICAgbGFiZWxzOiBkYXRhLnJlc3VsdHMubWFwKChyZXN1bHQpID0+IG5ldyBEYXRlKHJlc3VsdC50KSksXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IGRhdGEudGlja2VyICsgXCIgQ2xvc2UgUHJpY2VcIixcclxuICAgICAgICBkYXRhOiBkYXRhLnJlc3VsdHMubWFwKChyZXN1bHQpID0+IHJlc3VsdC5jKSxcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2IoNTMsIDE2MiwgMjM1KVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUzLCAxNjIsIDIzNSwgMC41KVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICB0eXBlOiBcInRpbWVcIixcclxuICAgICAgICB0aW1lOiB7XHJcbiAgICAgICAgICB1bml0OiBcImRheVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICB0ZXh0OiBcIkRhdGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB5OiB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICB0ZXh0OiBcIkNsb3NlIFByaWNlICgkKVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBsZWdlbmQ6IHtcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA2MDAgfX0+XHJcbiAgICAgIDxMaW5lIGRhdGE9e2NoYXJ0RGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaW5hbmNlQ2hhcnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmUiLCJGaW5hbmNlQ2hhcnQiLCJkYXRhIiwicmVzdWx0cyIsInJlc3VsdHNDb3VudCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicCIsImNoYXJ0RGF0YSIsImxhYmVscyIsIm1hcCIsInJlc3VsdCIsIkRhdGUiLCJ0IiwiZGF0YXNldHMiLCJsYWJlbCIsInRpY2tlciIsImMiLCJvcHRpb25zIiwic2NhbGVzIiwieCIsInR5cGUiLCJ0aW1lIiwidW5pdCIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJ5IiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/FinanceChart.tsx\n"));

/***/ })

});