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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Search */ \"(app-pages-browser)/./app/components/Search.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/globals.css */ \"(app-pages-browser)/./app/styles/globals.css\");\n/* harmony import */ var react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.js\");\n/* harmony import */ var react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var _components_FinanceChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FinanceChart */ \"(app-pages-browser)/./app/components/FinanceChart.tsx\");\n// ./app/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Landing = ()=>{\n    _s();\n    const [companyData, setCompanyData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);\n    const api_key = \"yDtGVD0KnJPgdFurSVspS5eHyreyLBUS\";\n    const [startDate, setStartDate] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());\n    const [endDate, setEndDate] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(new Date());\n    const handleSearch = async (query)=>{\n        try {\n            if (query === \"\") {\n                setCompanyData(null);\n            } else {\n                const response = await fetch(\"https://api.polygon.io/v2/aggs/ticker/\".concat(query.toUpperCase(), \"/range/1/day/2024-02-01/2024-02-13?adjusted=true&sort=asc&limit=120&apiKey=\").concat(api_key));\n                const data = await response.json();\n                setCompanyData(data);\n            }\n        } catch (error) {\n            console.error(\"Error fetching company data:\", error);\n            setCompanyData(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: \"text-center mt-5\",\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            height: \"70vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    paddingBottom: 50\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to DiligenceDynamics\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Search for a company to get started\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: 500\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSearch: handleSearch\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flexDirection: \"row\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                selected: startDate,\n                                onChange: (date)=>setStartDate(date)\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker_dist_react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                selected: endDate,\n                                onChange: (date)=>setEndDate(date)\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FinanceChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: companyData\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/collinj/Documents/CS224G/DiligenceDynamics/app/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Landing, \"pL6AbmOTN2HcKx9/AWLli0SOZwg=\");\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUI7OztBQUV5QjtBQUNoQjtBQUNrQjtBQUNIO0FBQ1g7QUFDa0M7QUFDWjtBQUNDO0FBRXJELE1BQU1LLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLHFEQUFjLENBQUM7SUFDckQsTUFBTVMsVUFBVTtJQUNoQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gscURBQWMsQ0FBQyxJQUFJWTtJQUNyRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2QscURBQWMsQ0FBQyxJQUFJWTtJQUVqRCxNQUFNRyxlQUFlLE9BQU9DO1FBQzFCLElBQUk7WUFDRixJQUFJQSxVQUFVLElBQUk7Z0JBQ2hCVCxlQUFlO1lBQ2pCLE9BQU87Z0JBQ0wsTUFBTVUsV0FBVyxNQUFNQyxNQUNyQix5Q0FBMElULE9BQWpHTyxNQUFNRyxXQUFXLElBQUcsK0VBQXFGLE9BQVJWO2dCQUU1SSxNQUFNVyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7Z0JBQ2hDZCxlQUFlYTtZQUNqQjtRQUNGLEVBQUUsT0FBT0UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtZQUM5Q2YsZUFBZTtRQUNqQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNOLHdGQUFTQTtRQUNSdUIsV0FBVTtRQUNWQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxZQUFZO1lBQ1pDLGdCQUFnQjtZQUNoQkMsUUFBUTtRQUNWOzswQkFFQSw4REFBQ0M7Z0JBQUlOLE9BQU87b0JBQUVPLGVBQWU7Z0JBQUc7O2tDQUM5Qiw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFFTCw4REFBQ0g7Z0JBQUlOLE9BQU87b0JBQUVVLE9BQU87Z0JBQUk7O2tDQUN2Qiw4REFBQ2pDLDBEQUFNQTt3QkFBQ2tDLFVBQVVyQjs7Ozs7O2tDQUNsQiw4REFBQ2dCO3dCQUFJTixPQUFPOzRCQUFFRSxlQUFlO3dCQUFNOzswQ0FDakMsOERBQUN4QiwrRUFBVUE7Z0NBQ1RrQyxVQUFVM0I7Z0NBQ1Y0QixVQUFVLENBQUNDLE9BQVM1QixhQUFhNEI7Ozs7OzswQ0FFbkMsOERBQUNwQywrRUFBVUE7Z0NBQ1RrQyxVQUFVeEI7Z0NBQ1Z5QixVQUFVLENBQUNDLE9BQVN6QixXQUFXeUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJckMsOERBQUNuQyxnRUFBWUE7Z0JBQUNnQixNQUFNZDs7Ozs7Ozs7Ozs7O0FBRzFCO0dBdERNRDtLQUFBQTtBQXdETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL2FwcC9wYWdlLnRzeFxyXG5cInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY29tcG9uZW50cy9TZWFyY2hcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgRmluYW5jZUNoYXJ0IGZyb20gXCIuL2NvbXBvbmVudHMvRmluYW5jZUNoYXJ0XCI7XHJcblxyXG5jb25zdCBMYW5kaW5nID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb21wYW55RGF0YSwgc2V0Q29tcGFueURhdGFdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgYXBpX2tleSA9IFwieUR0R1ZEMEtuSlBnZEZ1clNWc3BTNWVIeXJleUxCVVNcIjtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gUmVhY3QudXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gUmVhY3QudXNlU3RhdGUobmV3IERhdGUoKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChxdWVyeSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHF1ZXJ5ID09PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0Q29tcGFueURhdGEobnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL2FwaS5wb2x5Z29uLmlvL3YyL2FnZ3MvdGlja2VyLyR7cXVlcnkudG9VcHBlckNhc2UoKX0vcmFuZ2UvMS9kYXkvMjAyNC0wMi0wMS8yMDI0LTAyLTEzP2FkanVzdGVkPXRydWUmc29ydD1hc2MmbGltaXQ9MTIwJmFwaUtleT0ke2FwaV9rZXl9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRDb21wYW55RGF0YShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvbXBhbnkgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRDb21wYW55RGF0YShudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lclxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC01XCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjcwdmhcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1MCB9fT5cclxuICAgICAgICA8aDE+V2VsY29tZSB0byBEaWxpZ2VuY2VEeW5hbWljczwvaDE+XHJcbiAgICAgICAgPHA+U2VhcmNoIGZvciBhIGNvbXBhbnkgdG8gZ2V0IHN0YXJ0ZWQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgPFNlYXJjaCBvblNlYXJjaD17aGFuZGxlU2VhcmNofSAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9fT5cclxuICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0U3RhcnREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtlbmREYXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEVuZERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZpbmFuY2VDaGFydCBkYXRhPXtjb21wYW55RGF0YX0gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJTZWFyY2giLCJEYXRlUGlja2VyIiwiRmluYW5jZUNoYXJ0IiwiTGFuZGluZyIsImNvbXBhbnlEYXRhIiwic2V0Q29tcGFueURhdGEiLCJ1c2VTdGF0ZSIsImFwaV9rZXkiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJEYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJoYW5kbGVTZWFyY2giLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b1VwcGVyQ2FzZSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImRpdiIsInBhZGRpbmdCb3R0b20iLCJoMSIsInAiLCJ3aWR0aCIsIm9uU2VhcmNoIiwic2VsZWN0ZWQiLCJvbkNoYW5nZSIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});