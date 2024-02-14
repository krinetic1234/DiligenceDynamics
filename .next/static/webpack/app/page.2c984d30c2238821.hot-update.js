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

/***/ "(app-pages-browser)/./app/components/NewsList.tsx":
/*!*************************************!*\
  !*** ./app/components/NewsList.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nasdaq_map_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nasdaq_map.json */ \"(app-pages-browser)/./app/nasdaq_map.json\");\n\nvar _s = $RefreshSig$();\n\n\nconst NewsList = (param)=>{\n    let { companyData } = param;\n    _s();\n    const [news, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const symbol = companyData.ticker;\n    const name = _nasdaq_map_json__WEBPACK_IMPORTED_MODULE_2__[symbol];\n    const news_api_key = \"9f1600c19aa14fa2b270ebc898d6efc6\"; // News API Key\n    const url = \"https://newsapi.org/v2/everything?q=\".concat(name, \"&from=2024-02-14&sortBy=popularity&apiKey=\").concat(news_api_key);\n    const fetchNews = async ()=>{\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            setNews(data);\n        } catch (error) {\n            console.error(\"Error fetching company data:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchNews();\n    }, [\n        companyData\n    ]);\n    console.log(news);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"hello world\"\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewsList, \"WOTeyhYPWM8BGkXfQ2Aw5LNhevc=\");\n_c = NewsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsList);\nvar _c;\n$RefreshReg$(_c, \"NewsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05ld3NMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ1A7QUFFNUMsTUFBTUksV0FBVztRQUFDLEVBQUVDLFdBQVcsRUFBRTs7SUFDL0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1PLFNBQVNILFlBQVlJLE1BQU07SUFDakMsTUFBTUMsT0FBT1AsNkNBQVUsQ0FBQ0ssT0FBTztJQUMvQixNQUFNRyxlQUFlLG9DQUFvQyxlQUFlO0lBQ3hFLE1BQU1DLE1BQU0sdUNBQXdGRCxPQUFqREQsTUFBSyw4Q0FBeUQsT0FBYkM7SUFFcEcsTUFBTUUsWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNSDtZQUM3QixNQUFNSSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENWLFFBQVFTO1FBQ1YsRUFBRSxPQUFPRSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQ2hEO0lBQ0Y7SUFFQWhCLGdEQUFTQSxDQUFDO1FBQ1JXO0lBQ0YsR0FBRztRQUFDUjtLQUFZO0lBRWhCYyxRQUFRQyxHQUFHLENBQUNkO0lBQ1oscUJBQ0UsOERBQUNlO2tCQUNDLDRFQUFDQztzQkFBRTs7Ozs7Ozs7Ozs7QUFHVDtHQTNCTWxCO0tBQUFBO0FBNkJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05ld3NMaXN0LnRzeD9jOTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuYXNkYXFfbWFwIGZyb20gXCIuLi9uYXNkYXFfbWFwLmpzb25cIjtcclxuXHJcbmNvbnN0IE5ld3NMaXN0ID0gKHsgY29tcGFueURhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtuZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHN5bWJvbCA9IGNvbXBhbnlEYXRhLnRpY2tlcjtcclxuICBjb25zdCBuYW1lID0gbmFzZGFxX21hcFtzeW1ib2xdO1xyXG4gIGNvbnN0IG5ld3NfYXBpX2tleSA9IFwiOWYxNjAwYzE5YWExNGZhMmIyNzBlYmM4OThkNmVmYzZcIjsgLy8gTmV3cyBBUEkgS2V5XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPSR7bmFtZX0mZnJvbT0yMDI0LTAyLTE0JnNvcnRCeT1wb3B1bGFyaXR5JmFwaUtleT0ke25ld3NfYXBpX2tleX1gO1xyXG5cclxuICBjb25zdCBmZXRjaE5ld3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldE5ld3MoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY29tcGFueSBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoTmV3cygpO1xyXG4gIH0sIFtjb21wYW55RGF0YV0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhuZXdzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+aGVsbG8gd29ybGQ8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibmFzZGFxX21hcCIsIk5ld3NMaXN0IiwiY29tcGFueURhdGEiLCJuZXdzIiwic2V0TmV3cyIsInN5bWJvbCIsInRpY2tlciIsIm5hbWUiLCJuZXdzX2FwaV9rZXkiLCJ1cmwiLCJmZXRjaE5ld3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NewsList.tsx\n"));

/***/ })

});