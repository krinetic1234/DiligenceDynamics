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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nasdaq_map_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nasdaq_map.json */ \"(app-pages-browser)/./app/nasdaq_map.json\");\n\nvar _s = $RefreshSig$();\n\n\nconst NewsList = (param)=>{\n    let { companyData } = param;\n    var _nasdaq_map_symbol;\n    _s();\n    const [news, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const news_api_key = \"9f1600c19aa14fa2b270ebc898d6efc6\"; // News API Key\n    const symbol = companyData.ticker;\n    let companyName = ((_nasdaq_map_symbol = _nasdaq_map_json__WEBPACK_IMPORTED_MODULE_2__[symbol]) === null || _nasdaq_map_symbol === void 0 ? void 0 : _nasdaq_map_symbol.replace(\",\", \"\").replace(\"Inc.\", \"\")) || \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const date = new Date();\n        date.setDate(date.getDate() - 1);\n        const url = \"https://newsapi.org/v2/everything?q=\".concat(encodeURIComponent(companyName), \"&from=\").concat(date.toISOString().split(\"T\")[0], \"&sortBy=popularity&apiKey=\").concat(news_api_key);\n        const fetchNews = async ()=>{\n            try {\n                const response = await fetch(url);\n                const data = await response.json();\n                if (data.status === \"ok\") {\n                    setNews(data.articles);\n                } else {\n                    setError(data.message || \"Failed to fetch news\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching company data:\", error);\n                setError(\"Error fetching news\");\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchNews();\n    }, [\n        companyData\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading news...\"\n        }, void 0, false, {\n            fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!news.length) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"No news found for \",\n                companyName,\n                \".\"\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Latest News for \",\n                    companyName\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: news.slice(0, 5).map((article, index // Only take the first 5 articles\n                )=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: article.url,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    children: article.title\n                                }, void 0, false, {\n                                    fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: article.description\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/components/NewsList.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NewsList, \"3laYc/yLDbFe6Nu4a9NGCCYMZpM=\");\n_c = NewsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsList);\nvar _c;\n$RefreshReg$(_c, \"NewsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05ld3NMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ1A7QUFFNUMsTUFBTUksV0FBVztRQUFDLEVBQUVDLFdBQVcsRUFBRTtRQU83QkY7O0lBTkYsTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNVyxlQUFlLG9DQUFvQyxlQUFlO0lBQ3hFLE1BQU1DLFNBQVNSLFlBQVlTLE1BQU07SUFDakMsSUFBSUMsY0FDRlosRUFBQUEscUJBQUFBLDZDQUFVLENBQUNVLE9BQU8sY0FBbEJWLHlDQUFBQSxtQkFBb0JhLE9BQU8sQ0FBQyxLQUFLLElBQUlBLE9BQU8sQ0FBQyxRQUFRLFFBQU87SUFFOURkLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsT0FBTyxJQUFJQztRQUNqQkQsS0FBS0UsT0FBTyxDQUFDRixLQUFLRyxPQUFPLEtBQUs7UUFDOUIsTUFBTUMsTUFBTSx1Q0FHVkosT0FIaURLLG1CQUNqRFAsY0FDQSxVQUUyQkgsT0FEM0JLLEtBQUtNLFdBQVcsR0FBR0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQ2pDLDhCQUF5QyxPQUFiWjtRQUU3QixNQUFNYSxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNTjtnQkFDN0IsTUFBTU8sT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQyxJQUFJRCxLQUFLRSxNQUFNLEtBQUssTUFBTTtvQkFDeEJ2QixRQUFRcUIsS0FBS0csUUFBUTtnQkFDdkIsT0FBTztvQkFDTHBCLFNBQVNpQixLQUFLSSxPQUFPLElBQUk7Z0JBQzNCO1lBQ0YsRUFBRSxPQUFPdEIsT0FBTztnQkFDZHVCLFFBQVF2QixLQUFLLENBQUMsZ0NBQWdDQTtnQkFDOUNDLFNBQVM7WUFDWCxTQUFVO2dCQUNSRixXQUFXO1lBQ2I7UUFDRjtRQUVBZ0I7SUFDRixHQUFHO1FBQUNwQjtLQUFZO0lBRWhCLElBQUlHLFNBQVM7UUFDWCxxQkFBTyw4REFBQzBCO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLElBQUl4QixPQUFPO1FBQ1QscUJBQU8sOERBQUN3Qjs7Z0JBQUk7Z0JBQVF4Qjs7Ozs7OztJQUN0QjtJQUVBLElBQUksQ0FBQ0osS0FBSzZCLE1BQU0sRUFBRTtRQUNoQixxQkFBTyw4REFBQ0Q7O2dCQUFJO2dCQUFtQm5CO2dCQUFZOzs7Ozs7O0lBQzdDO0lBRUEscUJBQ0UsOERBQUNtQjs7MEJBQ0MsOERBQUNFOztvQkFBRztvQkFBaUJyQjs7Ozs7OzswQkFDckIsOERBQUNzQjswQkFDRS9CLEtBQUtnQyxLQUFLLENBQUMsR0FBRyxHQUFHQyxHQUFHLENBQ25CLENBQ0VDLFNBQ0FDLE1BQU0saUNBQWlDO2lDQUV2Qyw4REFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FBRUMsTUFBTUosUUFBUW5CLEdBQUc7Z0NBQUV3QixRQUFPO2dDQUFTQyxLQUFJOzBDQUN4Qyw0RUFBQ0M7OENBQUlQLFFBQVFRLEtBQUs7Ozs7Ozs7Ozs7OzBDQUVwQiw4REFBQ0M7MENBQUdULFFBQVFVLFdBQVc7Ozs7Ozs7dUJBSmhCVDs7Ozs7Ozs7Ozs7Ozs7OztBQVdyQjtHQXRFTXJDO0tBQUFBO0FBd0VOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05ld3NMaXN0LnRzeD9jOTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuYXNkYXFfbWFwIGZyb20gXCIuLi9uYXNkYXFfbWFwLmpzb25cIjtcclxuXHJcbmNvbnN0IE5ld3NMaXN0ID0gKHsgY29tcGFueURhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtuZXdzLCBzZXROZXdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG5ld3NfYXBpX2tleSA9IFwiOWYxNjAwYzE5YWExNGZhMmIyNzBlYmM4OThkNmVmYzZcIjsgLy8gTmV3cyBBUEkgS2V5XHJcbiAgY29uc3Qgc3ltYm9sID0gY29tcGFueURhdGEudGlja2VyO1xyXG4gIGxldCBjb21wYW55TmFtZSA9XHJcbiAgICBuYXNkYXFfbWFwW3N5bWJvbF0/LnJlcGxhY2UoXCIsXCIsIFwiXCIpLnJlcGxhY2UoXCJJbmMuXCIsIFwiXCIpIHx8IFwiXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDEpO1xyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICBjb21wYW55TmFtZVxyXG4gICAgKX0mZnJvbT0ke1xyXG4gICAgICBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdXHJcbiAgICB9JnNvcnRCeT1wb3B1bGFyaXR5JmFwaUtleT0ke25ld3NfYXBpX2tleX1gO1xyXG5cclxuICAgIGNvbnN0IGZldGNoTmV3cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgc2V0TmV3cyhkYXRhLmFydGljbGVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGZldGNoIG5ld3NcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb21wYW55IGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICBzZXRFcnJvcihcIkVycm9yIGZldGNoaW5nIG5ld3NcIik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hOZXdzKCk7XHJcbiAgfSwgW2NvbXBhbnlEYXRhXSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIG5ld3MuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFuZXdzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxkaXY+Tm8gbmV3cyBmb3VuZCBmb3Ige2NvbXBhbnlOYW1lfS48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPkxhdGVzdCBOZXdzIGZvciB7Y29tcGFueU5hbWV9PC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtuZXdzLnNsaWNlKDAsIDUpLm1hcChcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgYXJ0aWNsZSxcclxuICAgICAgICAgICAgaW5kZXggLy8gT25seSB0YWtlIHRoZSBmaXJzdCA1IGFydGljbGVzXHJcbiAgICAgICAgICApID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2FydGljbGUudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDY+e2FydGljbGUudGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibmFzZGFxX21hcCIsIk5ld3NMaXN0IiwiY29tcGFueURhdGEiLCJuZXdzIiwic2V0TmV3cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIm5ld3NfYXBpX2tleSIsInN5bWJvbCIsInRpY2tlciIsImNvbXBhbnlOYW1lIiwicmVwbGFjZSIsImRhdGUiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJ1cmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZmV0Y2hOZXdzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiYXJ0aWNsZXMiLCJtZXNzYWdlIiwiY29uc29sZSIsImRpdiIsImxlbmd0aCIsImgyIiwidWwiLCJzbGljZSIsIm1hcCIsImFydGljbGUiLCJpbmRleCIsImxpIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJoNiIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NewsList.tsx\n"));

/***/ })

});