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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Search */ \"(app-pages-browser)/./app/components/Search.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/globals.css */ \"(app-pages-browser)/./app/styles/globals.css\");\n/* harmony import */ var react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.js\");\n/* harmony import */ var react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var _components_FinanceChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FinanceChart */ \"(app-pages-browser)/./app/components/FinanceChart.tsx\");\n// ./app/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Landing = ()=>{\n    _s();\n    const [companyData, setCompanyData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);\n    const api_key = \"yDtGVD0KnJPgdFurSVspS5eHyreyLBUS\";\n    const [startDate, setStartDate] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date(Date.now() - 5 * 24 * 60 * 60 * 1000));\n    const [endDate, setEndDate] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());\n    const handleSearch = async (query)=>{\n        try {\n            if (query === \"\") {\n                setCompanyData(null);\n            } else {\n                const response = await fetch(\"https://api.polygon.io/v2/aggs/ticker/\".concat(query.toUpperCase(), \"/range/1/day/2024-02-01/2024-02-13?adjusted=true&sort=asc&limit=120&apiKey=\").concat(api_key));\n                const data = await response.json();\n                setCompanyData(data);\n            }\n        } catch (error) {\n            console.error(\"Error fetching company data:\", error);\n            setCompanyData(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: \"text-center mt-5\",\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            height: \"70vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    paddingBottom: 50\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to DiligenceDynamics\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Search for a company to get started\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: 500\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSearch: handleSearch\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"datepicker\",\n                        style: {\n                            flexDirection: \"row\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                        style: {\n                                            marginRight: 15\n                                        },\n                                        children: \"Start date:\"\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        selected: startDate,\n                                        onChange: (date)=>{\n                                            setStartDate(date);\n                                            console.log(startDate.dateFormat);\n                                        },\n                                        dateFormat: \"yyyy-MM-dd\",\n                                        maxDate: new Date(),\n                                        showYearDropdown: true\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                        style: {\n                                            marginLeft: 30,\n                                            marginRight: 15\n                                        },\n                                        children: \"End date:\"\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        selected: endDate,\n                                        onChange: (date)=>setEndDate(date),\n                                        dateFormat: \"yyyy-MM-dd\",\n                                        maxDate: new Date(),\n                                        showYearDropdown: true\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FinanceChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: companyData\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Landing, \"MzFoyJSU+VYBHQWzhxQGsJb+jqo=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7OztBQUV5QjtBQUNoQjtBQUMwQjtBQUNYO0FBQ1g7QUFDa0M7QUFDWjtBQUNDO0FBRXJELE1BQU1LLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLHFEQUFjLENBQUM7SUFDckQsTUFBTVMsVUFBVTtJQUNoQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gscURBQWMsQ0FDOUMsSUFBSVksS0FBS0EsS0FBS0MsR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUs7SUFFM0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdmLHFEQUFjLENBQUMsSUFBSVk7SUFFakQsTUFBTUksZUFBZSxPQUFPQztRQUMxQixJQUFJO1lBQ0YsSUFBSUEsVUFBVSxJQUFJO2dCQUNoQlYsZUFBZTtZQUNqQixPQUFPO2dCQUNMLE1BQU1XLFdBQVcsTUFBTUMsTUFDckIseUNBQTBJVixPQUFqR1EsTUFBTUcsV0FBVyxJQUFHLCtFQUFxRixPQUFSWDtnQkFFNUksTUFBTVksT0FBTyxNQUFNSCxTQUFTSSxJQUFJO2dCQUNoQ2YsZUFBZWM7WUFDakI7UUFDRixFQUFFLE9BQU9FLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7WUFDOUNoQixlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ04sd0ZBQVNBO1FBQ1J3QixXQUFVO1FBQ1ZDLE9BQU87WUFDTEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLFlBQVk7WUFDWkMsZ0JBQWdCO1lBQ2hCQyxRQUFRO1FBQ1Y7OzBCQUVBLDhEQUFDQztnQkFBSU4sT0FBTztvQkFBRU8sZUFBZTtnQkFBRzs7a0NBQzlCLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDSDtnQkFBSU4sT0FBTztvQkFBRVUsT0FBTztnQkFBSTs7a0NBQ3ZCLDhEQUFDbEMsMERBQU1BO3dCQUFDbUMsVUFBVXJCOzs7Ozs7a0NBQ2xCLDhEQUFDZ0I7d0JBQUlQLFdBQVU7d0JBQWFDLE9BQU87NEJBQUVFLGVBQWU7d0JBQU07OzBDQUN4RCw4REFBQ0k7O2tEQUNDLDhEQUFDTTt3Q0FBS1osT0FBTzs0Q0FBRWEsYUFBYTt3Q0FBRztrREFBRzs7Ozs7O2tEQUNsQyw4REFBQ3BDLCtFQUFVQTt3Q0FDVHFDLFVBQVU5Qjt3Q0FDVitCLFVBQVUsQ0FBQ0M7NENBQ1QvQixhQUFhK0I7NENBQ2JsQixRQUFRbUIsR0FBRyxDQUFDakMsVUFBVWtDLFVBQVU7d0NBQ2xDO3dDQUNBQSxZQUFXO3dDQUNYQyxTQUFTLElBQUlqQzt3Q0FDYmtDLGdCQUFnQjs7Ozs7Ozs7Ozs7OzBDQUdwQiw4REFBQ2Q7O2tEQUNDLDhEQUFDTTt3Q0FBS1osT0FBTzs0Q0FBRXFCLFlBQVk7NENBQUlSLGFBQWE7d0NBQUc7a0RBQUc7Ozs7OztrREFDbEQsOERBQUNwQywrRUFBVUE7d0NBQ1RxQyxVQUFVMUI7d0NBQ1YyQixVQUFVLENBQUNDLE9BQVMzQixXQUFXMkI7d0NBQy9CRSxZQUFXO3dDQUNYQyxTQUFTLElBQUlqQzt3Q0FDYmtDLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt4Qiw4REFBQzFDLGdFQUFZQTtnQkFBQ2lCLE1BQU1mOzs7Ozs7Ozs7Ozs7QUFHMUI7R0F2RU1EO0tBQUFBO0FBeUVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC4vYXBwL3BhZ2UudHN4XHJcblwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL2NvbXBvbmVudHMvU2VhcmNoXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IEZpbmFuY2VDaGFydCBmcm9tIFwiLi9jb21wb25lbnRzL0ZpbmFuY2VDaGFydFwiO1xyXG5cclxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcclxuICBjb25zdCBbY29tcGFueURhdGEsIHNldENvbXBhbnlEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGFwaV9rZXkgPSBcInlEdEdWRDBLbkpQZ2RGdXJTVnNwUzVlSHlyZXlMQlVTXCI7XHJcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgbmV3IERhdGUoRGF0ZS5ub3coKSAtIDUgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxyXG4gICk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gUmVhY3QudXNlU3RhdGUobmV3IERhdGUoKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChxdWVyeSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHF1ZXJ5ID09PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0Q29tcGFueURhdGEobnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5wb2x5Z29uLmlvL3YyL2FnZ3MvdGlja2VyLyR7cXVlcnkudG9VcHBlckNhc2UoKX0vcmFuZ2UvMS9kYXkvMjAyNC0wMi0wMS8yMDI0LTAyLTEzP2FkanVzdGVkPXRydWUmc29ydD1hc2MmbGltaXQ9MTIwJmFwaUtleT0ke2FwaV9rZXl9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRDb21wYW55RGF0YShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvbXBhbnkgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRDb21wYW55RGF0YShudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lclxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC01XCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjcwdmhcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1MCB9fT5cclxuICAgICAgICA8aDE+V2VsY29tZSB0byBEaWxpZ2VuY2VEeW5hbWljczwvaDE+XHJcbiAgICAgICAgPHA+U2VhcmNoIGZvciBhIGNvbXBhbnkgdG8gZ2V0IHN0YXJ0ZWQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgPFNlYXJjaCBvblNlYXJjaD17aGFuZGxlU2VhcmNofSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlclwiIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246IFwicm93XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGV4dCBzdHlsZT17eyBtYXJnaW5SaWdodDogMTUgfX0+U3RhcnQgZGF0ZTo8L3RleHQ+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXJ0RGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0RGF0ZS5kYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJ5eXl5LU1NLWRkXCJcclxuICAgICAgICAgICAgICBtYXhEYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgIHNob3dZZWFyRHJvcGRvd25cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogMzAsIG1hcmdpblJpZ2h0OiAxNSB9fT5FbmQgZGF0ZTo8L3RleHQ+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRFbmREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJ5eXl5LU1NLWRkXCJcclxuICAgICAgICAgICAgICBtYXhEYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgIHNob3dZZWFyRHJvcGRvd25cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZpbmFuY2VDaGFydCBkYXRhPXtjb21wYW55RGF0YX0gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJTZWFyY2giLCJEYXRlUGlja2VyIiwiRmluYW5jZUNoYXJ0IiwiTGFuZGluZyIsImNvbXBhbnlEYXRhIiwic2V0Q29tcGFueURhdGEiLCJ1c2VTdGF0ZSIsImFwaV9rZXkiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJEYXRlIiwibm93IiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJoYW5kbGVTZWFyY2giLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b1VwcGVyQ2FzZSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImRpdiIsInBhZGRpbmdCb3R0b20iLCJoMSIsInAiLCJ3aWR0aCIsIm9uU2VhcmNoIiwidGV4dCIsIm1hcmdpblJpZ2h0Iiwic2VsZWN0ZWQiLCJvbkNoYW5nZSIsImRhdGUiLCJsb2ciLCJkYXRlRm9ybWF0IiwibWF4RGF0ZSIsInNob3dZZWFyRHJvcGRvd24iLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});