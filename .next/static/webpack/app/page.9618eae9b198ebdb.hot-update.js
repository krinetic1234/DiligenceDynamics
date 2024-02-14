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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nasdaq_map_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nasdaq_map.json */ \"(app-pages-browser)/./app/nasdaq_map.json\");\n\nvar _s = $RefreshSig$();\n\n\nconst NewsList = (param)=>{\n    let { companyData } = param;\n    _s();\n    const [news, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const symbol = companyData.ticker;\n    let name = _nasdaq_map_json__WEBPACK_IMPORTED_MODULE_2__[symbol];\n    name = name.split(\" \")[0];\n    const date = new Date();\n    date.setDate(date.getDate() - 1);\n    console.log(date.toISOString().split(\"T\")[0]);\n    const news_api_key = \"9f1600c19aa14fa2b270ebc898d6efc6\"; // News API Key\n    const url = \"https://newsapi.org/v2/everything?q=\".concat(name, \"&from=\").concat(date.toISOString().split(\"T\")[0], \"&sortBy=popularity&apiKey=\").concat(news_api_key);\n    console.log(url);\n    const fetchNews = async ()=>{\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            setNews(data);\n        } catch (error) {\n            console.error(\"Error fetching company data:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchNews();\n    }, []);\n    console.log(news);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"hello world\"\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewsList, \"WOTeyhYPWM8BGkXfQ2Aw5LNhevc=\");\n_c = NewsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsList);\nvar _c;\n$RefreshReg$(_c, \"NewsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05ld3NMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ1A7QUFFNUMsTUFBTUksV0FBVztRQUFDLEVBQUVDLFdBQVcsRUFBRTs7SUFDL0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1PLFNBQVNILFlBQVlJLE1BQU07SUFDakMsSUFBSUMsT0FBT1AsNkNBQVUsQ0FBQ0ssT0FBTztJQUM3QkUsT0FBT0EsS0FBS0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3pCLE1BQU1DLE9BQU8sSUFBSUM7SUFDakJELEtBQUtFLE9BQU8sQ0FBQ0YsS0FBS0csT0FBTyxLQUFLO0lBQzlCQyxRQUFRQyxHQUFHLENBQUNMLEtBQUtNLFdBQVcsR0FBR1AsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzVDLE1BQU1RLGVBQWUsb0NBQW9DLGVBQWU7SUFDeEUsTUFBTUMsTUFBTSx1Q0FDVlIsT0FEaURGLE1BQUssVUFFM0JTLE9BRDNCUCxLQUFLTSxXQUFXLEdBQUdQLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUNqQyw4QkFBeUMsT0FBYlE7SUFDN0JILFFBQVFDLEdBQUcsQ0FBQ0c7SUFFWixNQUFNQyxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU1IO1lBQzdCLE1BQU1JLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ2xCLFFBQVFpQjtRQUNWLEVBQUUsT0FBT0UsT0FBTztZQUNkVixRQUFRVSxLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNGO0lBRUF4QixnREFBU0EsQ0FBQztRQUNSbUI7SUFDRixHQUFHLEVBQUU7SUFFTEwsUUFBUUMsR0FBRyxDQUFDWDtJQUNaLHFCQUNFLDhEQUFDcUI7a0JBQ0MsNEVBQUNDO3NCQUFFOzs7Ozs7Ozs7OztBQUdUO0dBbENNeEI7S0FBQUE7QUFvQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmV3c0xpc3QudHN4P2M5ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5hc2RhcV9tYXAgZnJvbSBcIi4uL25hc2RhcV9tYXAuanNvblwiO1xyXG5cclxuY29uc3QgTmV3c0xpc3QgPSAoeyBjb21wYW55RGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgc3ltYm9sID0gY29tcGFueURhdGEudGlja2VyO1xyXG4gIGxldCBuYW1lID0gbmFzZGFxX21hcFtzeW1ib2xdO1xyXG4gIG5hbWUgPSBuYW1lLnNwbGl0KFwiIFwiKVswXTtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuICBjb25zb2xlLmxvZyhkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdKTtcclxuICBjb25zdCBuZXdzX2FwaV9rZXkgPSBcIjlmMTYwMGMxOWFhMTRmYTJiMjcwZWJjODk4ZDZlZmM2XCI7IC8vIE5ld3MgQVBJIEtleVxyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YyL2V2ZXJ5dGhpbmc/cT0ke25hbWV9JmZyb209JHtcclxuICAgIGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF1cclxuICB9JnNvcnRCeT1wb3B1bGFyaXR5JmFwaUtleT0ke25ld3NfYXBpX2tleX1gO1xyXG4gIGNvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gIGNvbnN0IGZldGNoTmV3cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0TmV3cyhkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb21wYW55IGRhdGE6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hOZXdzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhuZXdzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+aGVsbG8gd29ybGQ8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibmFzZGFxX21hcCIsIk5ld3NMaXN0IiwiY29tcGFueURhdGEiLCJuZXdzIiwic2V0TmV3cyIsInN5bWJvbCIsInRpY2tlciIsIm5hbWUiLCJzcGxpdCIsImRhdGUiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJjb25zb2xlIiwibG9nIiwidG9JU09TdHJpbmciLCJuZXdzX2FwaV9rZXkiLCJ1cmwiLCJmZXRjaE5ld3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NewsList.tsx\n"));

/***/ })

});