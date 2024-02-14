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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nasdaq_map_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nasdaq_map.json */ \"(app-pages-browser)/./app/nasdaq_map.json\");\n\nvar _s = $RefreshSig$();\n\n\nconst NewsList = (param)=>{\n    let { companyData } = param;\n    _s();\n    const [news, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const symbol = companyData.ticker;\n    let name = _nasdaq_map_json__WEBPACK_IMPORTED_MODULE_2__[symbol];\n    name = name.replace(\",\", \"\");\n    name = name.replace(\"Inc.\", \"\");\n    const date = new Date();\n    date.setDate(date.getDate() - 1);\n    const news_api_key = \"9f1600c19aa14fa2b270ebc898d6efc6\"; // News API Key\n    const url = \"https://newsapi.org/v2/everything?q=\".concat(name, \"&from=\").concat(date.toISOString().split(\"T\")[0], \"&sortBy=popularity&apiKey=\").concat(news_api_key);\n    console.log(url);\n    const fetchNews = async ()=>{\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            setNews(data);\n        } catch (error) {\n            console.error(\"Error fetching company data:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchNews();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"hello world\"\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewsList, \"WOTeyhYPWM8BGkXfQ2Aw5LNhevc=\");\n_c = NewsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsList);\nvar _c;\n$RefreshReg$(_c, \"NewsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05ld3NMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ1A7QUFFNUMsTUFBTUksV0FBVztRQUFDLEVBQUVDLFdBQVcsRUFBRTs7SUFDL0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1PLFNBQVNILFlBQVlJLE1BQU07SUFDakMsSUFBSUMsT0FBT1AsNkNBQVUsQ0FBQ0ssT0FBTztJQUM3QkUsT0FBT0EsS0FBS0MsT0FBTyxDQUFDLEtBQUs7SUFDekJELE9BQU9BLEtBQUtDLE9BQU8sQ0FBQyxRQUFRO0lBQzVCLE1BQU1DLE9BQU8sSUFBSUM7SUFDakJELEtBQUtFLE9BQU8sQ0FBQ0YsS0FBS0csT0FBTyxLQUFLO0lBQzlCLE1BQU1DLGVBQWUsb0NBQW9DLGVBQWU7SUFDeEUsTUFBTUMsTUFBTSx1Q0FDVkwsT0FEaURGLE1BQUssVUFFM0JNLE9BRDNCSixLQUFLTSxXQUFXLEdBQUdDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUNqQyw4QkFBeUMsT0FBYkg7SUFDN0JJLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFWixNQUFNSyxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU1QO1lBQzdCLE1BQU1RLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ25CLFFBQVFrQjtRQUNWLEVBQUUsT0FBT0UsT0FBTztZQUNkUCxRQUFRTyxLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNGO0lBRUF6QixnREFBU0EsQ0FBQztRQUNSb0I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007a0JBQ0MsNEVBQUNDO3NCQUFFOzs7Ozs7Ozs7OztBQUdUO0dBakNNekI7S0FBQUE7QUFtQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmV3c0xpc3QudHN4P2M5ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5hc2RhcV9tYXAgZnJvbSBcIi4uL25hc2RhcV9tYXAuanNvblwiO1xyXG5cclxuY29uc3QgTmV3c0xpc3QgPSAoeyBjb21wYW55RGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgc3ltYm9sID0gY29tcGFueURhdGEudGlja2VyO1xyXG4gIGxldCBuYW1lID0gbmFzZGFxX21hcFtzeW1ib2xdO1xyXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoXCIsXCIsIFwiXCIpO1xyXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoXCJJbmMuXCIsIFwiXCIpO1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDEpO1xyXG4gIGNvbnN0IG5ld3NfYXBpX2tleSA9IFwiOWYxNjAwYzE5YWExNGZhMmIyNzBlYmM4OThkNmVmYzZcIjsgLy8gTmV3cyBBUEkgS2V5XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPSR7bmFtZX0mZnJvbT0ke1xyXG4gICAgZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXVxyXG4gIH0mc29ydEJ5PXBvcHVsYXJpdHkmYXBpS2V5PSR7bmV3c19hcGlfa2V5fWA7XHJcbiAgY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hOZXdzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXROZXdzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvbXBhbnkgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaE5ld3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5oZWxsbyB3b3JsZDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJuYXNkYXFfbWFwIiwiTmV3c0xpc3QiLCJjb21wYW55RGF0YSIsIm5ld3MiLCJzZXROZXdzIiwic3ltYm9sIiwidGlja2VyIiwibmFtZSIsInJlcGxhY2UiLCJkYXRlIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwibmV3c19hcGlfa2V5IiwidXJsIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaE5ld3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NewsList.tsx\n"));

/***/ })

});