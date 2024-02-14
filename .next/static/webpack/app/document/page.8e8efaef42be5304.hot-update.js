"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/document/page",{

/***/ "(app-pages-browser)/./app/components/ChatInterface.tsx":
/*!******************************************!*\
  !*** ./app/components/ChatInterface.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ChatInterface_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ChatInterface.module.css */ \"(app-pages-browser)/./app/styles/ChatInterface.module.css\");\n/* harmony import */ var _styles_ChatInterface_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ChatInterface_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ChatInterface = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const sendMessage = (e)=>{\n        e.preventDefault();\n        if (input.trim() !== \"\") {\n            setMessages([\n                ...messages,\n                {\n                    text: input,\n                    sender: \"user\"\n                }\n            ]);\n            setInput(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ChatInterface_module_css__WEBPACK_IMPORTED_MODULE_2___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ChatInterface_module_css__WEBPACK_IMPORTED_MODULE_2___default().messagesContainer)\n            }, void 0, false, {\n                fileName: \"/Users/krish/Desktop/CS/Projects/DiligenceDynamics/app/components/ChatInterface.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: sendMessage,\n                className: (_styles_ChatInterface_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_styles_ChatInterface_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputField),\n                        value: input,\n                        onChange: (e)=>setInput(e.target.value),\n                        placeholder: \"Type your question...\",\n                        autoFocus: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krish/Desktop/CS/Projects/DiligenceDynamics/app/components/ChatInterface.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_ChatInterface_module_css__WEBPACK_IMPORTED_MODULE_2___default().sendButton),\n                        disabled: input.trim() === \"\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krish/Desktop/CS/Projects/DiligenceDynamics/app/components/ChatInterface.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krish/Desktop/CS/Projects/DiligenceDynamics/app/components/ChatInterface.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krish/Desktop/CS/Projects/DiligenceDynamics/app/components/ChatInterface.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatInterface, \"HDAtGPGcvWga1zf1TBXg51T+tsc=\");\n_c = ChatInterface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatInterface);\nvar _c;\n$RefreshReg$(_c, \"ChatInterface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NoYXRJbnRlcmZhY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ2dCO0FBRXhELE1BQU1HLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1PLGNBQWMsQ0FBQ0M7UUFDbkJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSUosTUFBTUssSUFBSSxPQUFPLElBQUk7WUFDdkJOLFlBQVk7bUJBQUlEO2dCQUFVO29CQUFFUSxNQUFNTjtvQkFBT08sUUFBUTtnQkFBTzthQUFFO1lBQzFETixTQUFTO1FBQ1g7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXYix1RkFBb0I7OzBCQUNsQyw4REFBQ1k7Z0JBQUlDLFdBQVdiLDJGQUF3Qjs7Ozs7OzBCQUd4Qyw4REFBQ2dCO2dCQUFLQyxVQUFVWDtnQkFBYU8sV0FBV2Isd0ZBQXFCOztrQ0FDM0QsOERBQUNJO3dCQUNDZSxNQUFLO3dCQUNMTixXQUFXYixvRkFBaUI7d0JBQzVCcUIsT0FBT2pCO3dCQUNQa0IsVUFBVSxDQUFDZixJQUFNRixTQUFTRSxFQUFFZ0IsTUFBTSxDQUFDRixLQUFLO3dCQUN4Q0csYUFBWTt3QkFDWkMsU0FBUzs7Ozs7O2tDQUVYLDhEQUFDQzt3QkFBT1AsTUFBSzt3QkFBU04sV0FBV2Isb0ZBQWlCO3dCQUFFNEIsVUFBVXhCLE1BQU1LLElBQUksT0FBTztrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNGO0dBaENNUjtLQUFBQTtBQWtDTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9DaGF0SW50ZXJmYWNlLnRzeD9iNDhmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DaGF0SW50ZXJmYWNlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBDaGF0SW50ZXJmYWNlID0gKCkgPT4ge1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaW5wdXQudHJpbSgpICE9PSAnJykge1xuICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCB7IHRleHQ6IGlucHV0LCBzZW5kZXI6ICd1c2VyJyB9XSk7XG4gICAgICBzZXRJbnB1dCgnJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Q29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZXNDb250YWluZXJ9PlxuICAgICAgICB7LyogLi4uIGV4aXN0aW5nIG1lc3NhZ2UgbWFwcGluZyAuLi4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTWVzc2FnZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZH1cbiAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcXVlc3Rpb24uLi5cIlxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zZW5kQnV0dG9ufSBkaXNhYmxlZD17aW5wdXQudHJpbSgpID09PSAnJ30+XG4gICAgICAgICAgU2VuZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRJbnRlcmZhY2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJDaGF0SW50ZXJmYWNlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImlucHV0Iiwic2V0SW5wdXQiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJ0ZXh0Iiwic2VuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhdENvbnRhaW5lciIsIm1lc3NhZ2VzQ29udGFpbmVyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXRDb250YWluZXIiLCJ0eXBlIiwiaW5wdXRGaWVsZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImF1dG9Gb2N1cyIsImJ1dHRvbiIsInNlbmRCdXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ChatInterface.tsx\n"));

/***/ })

});