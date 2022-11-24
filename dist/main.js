/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.list-item {\n  display: list-item;\n}\n.hidden {\n  display: none;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-full {\n  height: 100%;\n}\n.h-14 {\n  height: 3.5rem;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.h-0 {\n  height: 0px;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-0\\.5 {\n  height: 0.125rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-full {\n  width: 100%;\n}\n.w-14 {\n  width: 3.5rem;\n}\n.w-7 {\n  width: 1.75rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.resize {\n  resize: both;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.place-items-center {\n  align-items: center;\n  justify-items: center;\n  place-items: center;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border {\n  border-width: 1px;\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-green-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(134, 239, 172, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(74, 222, 128, var(--tw-bg-opacity));\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.underline {\n  text-decoration-line: underline;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n:root {\n --doc-height: 100%;\n}\n\nhtml,\nbody {\n height: 100vh;\n height: 100%;\n height: var(--doc-height);\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: 15% 70% 15%;\n    min-height: 100%;\n    min-height: var(--doc-height);\n}\n\n.nav {\n    /* border: 1px solid greenyellow; */\n    min-height: 100%;\n    min-height: var(--doc-height);\n}\n\n.btn {\n    overflow: hidden;\n    /* position: fixed;\n    bottom: 8%; */\n    transition: all 500ms;\n}\n\n.btn-hide {\n    opacity: 0;\n    transition: all 500ms;\n}\n\n.options {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: white;\n    font-weight: bolder;\n    text-align: center;\n    transform: translateY(10%);\n    position: absolute;\n    bottom: 40%;\n}\n\n.animate-options {\n    width: 8rem;\n    transform: translateY(0%);\n    transition: all 500ms;\n}\n\n.animate-options-hide {\n    width: 0;}\n\n.options button {\n    background-color: rgb(110, 231, 183);\n    border-radius: 16px;\n    padding: 4px;\n}\n\n.options button:hover {\n    background-color: rgb(115, 236, 188);\n}\n\n.options button:active {\n    background-color: rgb(105, 226, 178);\n}\n\n\n/* overlay */\n.overlay {\n    width: 100vw;\n    height: 100vh;\n    /* border: 1px solid skyblue; */\n    position: absolute;\n    /* background-color: rgba(236, 253, 245, 0.1); */\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    place-items: center;\n}\n\n.options-wrapper {\n    width: 0;\n    height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    background-color: rgb(167, 243, 208);\n    display: flex;\n    flex-direction: column;\n    /* flex-wrap: wrap; */\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1rem;\n    overflow: scroll;\n    transition: all 500ms;\n}\n\n.options-wrapper-animate {\n    width: max(300px, min(calc(180px + 23vh), 420px));\n    height: max(280px, min(calc(120px + 23vh), 420px));\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    transition: all 500ms;\n}\n\n#form-list,\n#form-task {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    height: max(100px, min(calc(45px + 24vh), 420px));\n    overflow: hidden;\n    justify-content: center;\n    /* font-weight: bolder; */\n    color: rgb(60, 60, 60);\n}\n\n.list-item {\n    /* border: 1px solid saddlebrown; */\n    /* font-weight: bolder; */\n    width: max(6rem, min(calc(6rem + 24vh), 12rem));\n    color: rgb(44, 44, 44);\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border-radius: 3rem;\n    background-color: rgb(240, 240, 240);\n    display: grid;\n    grid-template-columns: 80% 20%;\n    grid-gap: 1rem;\n    gap: 1rem;\n}\n\n.list-item div {\n    /* border: 1px solid forestgreen; */\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    place-items: center;\n}\n\n.list-item svg {fill: rgb(187, 61, 61);}\n\n.list-item path {stroke: rgb(240, 240, 240);}\n\n\n#active {background-color: rgb(0, 235, 235);}\n#active:hover {background-color: rgb(0, 245, 245);}\n#active:active {background-color: rgb(0, 230, 230);}\n\n.list-item:hover {background-color: rgb(230, 230, 230)}\n.list-item:active {background-color: rgb(225, 225, 225)}\n\nlabel {font-size: 1.5rem;}\n\ninput {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    font-size: 1.1rem;\n    width: max(180px, min(calc(150px + 30vw), 300px));\n    border-bottom: 1px solid rgb(170, 170, 170);\n    background-color: rgb(167, 243, 208);\n}\n\ninput:focus {\n    outline: none;\n}\n\n.option-btn, \n#form-list button,\n#form-task button {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    background-color: rgb(20, 224, 224);\n    font-size: 1.1rem;\n}\n\n/* tasks */\n.task {\n    width: max(135px, min(calc(145px + 26vh), 420px));\n    min-height: 100%;\n    min-height: var(--doc-height);\n    /* border: 1px dotted seagreen; */\n}\n\n.task-wrapper {\n    /* border: 1px solid slateblue; */\n    display: grid;\n    grid-template-columns: 90% 10%;\n    cursor: pointer;\n}\n\n.task-wrapper p {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    transition: all 250ms;\n}\n\n.task-wrapper button {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    place-items: center;\n    /* border: 1px solid fuchsia; */\n}\n\n.line {\n    text-decoration: line-through;\n    opacity: 0.5;\n    color: rgb(80, 80, 80);\n    transition: all 250ms;\n}\n\npath {stroke-width: 1.8;}\n\n@media only screen and (min-width: 640px) {\n\n    body {\n        background-color: #ddedea;\n        display: grid;\n        align-content: center;\n        justify-content: center;\n        place-content: center;\n        align-items: center;\n        justify-items: center;\n        place-items: center;\n        margin-top: 2rem;\n    }\n\n    .wrapper {\n        width: 640px;\n        height: 768px;\n        background-color: rgb(240, 240, 240);\n        border-radius: 3rem;\n        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\t\n    }\n\n    /* .btn {position: static;} */\n}\n\n.active\\:bg-green-300:active {\n  --tw-bg-opacity: 1;\n  background-color: rgba(134, 239, 172, var(--tw-bg-opacity));\n}", "",{"version":3,"sources":["webpack://./src/styles.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n --doc-height: 100%;\n}\n\nhtml,\nbody {\n height: 100vh;\n height: var(--doc-height);\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: 15% 70% 15%;\n    min-height: var(--doc-height);\n}\n\n.nav {\n    /* border: 1px solid greenyellow; */\n    min-height: var(--doc-height);\n}\n\n.btn {\n    overflow: hidden;\n    /* position: fixed;\n    bottom: 8%; */\n    transition: all 500ms;\n}\n\n.btn-hide {\n    opacity: 0;\n    transition: all 500ms;\n}\n\n.options {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: white;\n    font-weight: bolder;\n    text-align: center;\n    transform: translateY(10%);\n    position: absolute;\n    bottom: 40%;\n}\n\n.animate-options {\n    width: 8rem;\n    transform: translateY(0%);\n    transition: all 500ms;\n}\n\n.animate-options-hide {\n    width: 0;}\n\n.options button {\n    background-color: rgb(110, 231, 183);\n    border-radius: 16px;\n    padding: 4px;\n}\n\n.options button:hover {\n    background-color: rgb(115, 236, 188);\n}\n\n.options button:active {\n    background-color: rgb(105, 226, 178);\n}\n\n\n/* overlay */\n.overlay {\n    width: 100vw;\n    height: 100vh;\n    /* border: 1px solid skyblue; */\n    position: absolute;\n    /* background-color: rgba(236, 253, 245, 0.1); */\n    display: grid;\n    place-items: center;\n}\n\n.options-wrapper {\n    width: 0;\n    height: 0;\n    padding-block: 0;\n    padding-inline: 0;\n    background-color: rgb(167, 243, 208);\n    display: flex;\n    flex-direction: column;\n    /* flex-wrap: wrap; */\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1rem;\n    overflow: scroll;\n    transition: all 500ms;\n}\n\n.options-wrapper-animate {\n    width: clamp(300px, calc(180px + 23vh), 420px);\n    height: clamp(280px, calc(120px + 23vh), 420px);\n    padding-block: 2rem;\n    padding-inline: 2rem;\n    transition: all 500ms;\n}\n\n#form-list,\n#form-task {\n    padding-block: 1rem;\n    height: clamp(100px, calc(45px + 24vh), 420px);\n    overflow: hidden;\n    justify-content: center;\n    /* font-weight: bolder; */\n    color: rgb(60, 60, 60);\n}\n\n.list-item {\n    /* border: 1px solid saddlebrown; */\n    /* font-weight: bolder; */\n    width: clamp(6rem, calc(6rem + 24vh), 12rem);\n    color: rgb(44, 44, 44);\n    padding-block: 0.25rem;\n    padding-inline: 1rem;\n    border-radius: 3rem;\n    background-color: rgb(240, 240, 240);\n    display: grid;\n    grid-template-columns: 80% 20%;\n    gap: 1rem;\n}\n\n.list-item div {\n    /* border: 1px solid forestgreen; */\n    display: grid;\n    place-items: center;\n}\n\n.list-item svg {fill: rgb(187, 61, 61);}\n\n.list-item path {stroke: rgb(240, 240, 240);}\n\n\n#active {background-color: rgb(0, 235, 235);}\n#active:hover {background-color: rgb(0, 245, 245);}\n#active:active {background-color: rgb(0, 230, 230);}\n\n.list-item:hover {background-color: rgb(230, 230, 230)}\n.list-item:active {background-color: rgb(225, 225, 225)}\n\nlabel {font-size: 1.5rem;}\n\ninput {\n    padding-inline: 0.5rem;\n    font-size: 1.1rem;\n    width: clamp(180px, calc(150px + 30vw), 300px);\n    border-bottom: 1px solid rgb(170, 170, 170);\n    background-color: rgb(167, 243, 208);\n}\n\ninput:focus {\n    outline: none;\n}\n\n.option-btn, \n#form-list button,\n#form-task button {\n    padding-block: 0.5rem;\n    padding-inline: 1rem;\n    background-color: rgb(20, 224, 224);\n    font-size: 1.1rem;\n}\n\n/* tasks */\n.task {\n    width: clamp(135px, calc(145px + 26vh), 420px);\n    min-height: var(--doc-height);\n    /* border: 1px dotted seagreen; */\n}\n\n.task-wrapper {\n    /* border: 1px solid slateblue; */\n    display: grid;\n    grid-template-columns: 90% 10%;\n    cursor: pointer;\n}\n\n.task-wrapper p {\n    padding-inline: 0.5rem;\n    transition: all 250ms;\n}\n\n.task-wrapper button {\n    display: grid;\n    place-items: center;\n    /* border: 1px solid fuchsia; */\n}\n\n.line {\n    text-decoration: line-through;\n    opacity: 0.5;\n    color: rgb(80, 80, 80);\n    transition: all 250ms;\n}\n\npath {stroke-width: 1.8;}\n\n@media only screen and (min-width: 640px) {\n\n    body {\n        background-color: #ddedea;\n        display: grid;\n        place-content: center;\n        place-items: center;\n        margin-top: 2rem;\n    }\n\n    .wrapper {\n        width: 640px;\n        height: 768px;\n        background-color: rgb(240, 240, 240);\n        border-radius: 3rem;\n        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\t\n    }\n\n    /* .btn {position: static;} */\n}",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/auxiliary/removeChildren.js":
/*!*****************************************!*\
  !*** ./src/auxiliary/removeChildren.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeChildren": () => (/* binding */ removeChildren)
/* harmony export */ });
const removeChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/***/ }),

/***/ "./src/auxiliary/returnActiveList.js":
/*!*******************************************!*\
  !*** ./src/auxiliary/returnActiveList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnActiveList": () => (/* binding */ returnActiveList)
/* harmony export */ });
/* harmony import */ var _list_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/lists */ "./src/list/lists.js");


const returnActiveList = () => {
    for(let i = 0; i < _list_lists__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
        if(_list_lists__WEBPACK_IMPORTED_MODULE_0__.list[i].getIsActive() == true) {
            return _list_lists__WEBPACK_IMPORTED_MODULE_0__.list[i]
        }
    }
}

/***/ }),

/***/ "./src/auxiliary/setAttributes.js":
/*!****************************************!*\
  !*** ./src/auxiliary/setAttributes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAttributes": () => (/* binding */ setAttributes)
/* harmony export */ });
const setAttributes = (el, attrs) => {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

/***/ }),

/***/ "./src/button/btn.js":
/*!***************************!*\
  !*** ./src/button/btn.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btn": () => (/* binding */ btn)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/button/nav.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/button/options.js");



const animateOptions = () => {
    document.querySelector('.options').classList.add('animate-options');
}

const btn = () => {
    const button = document.querySelector('.btn');
    button.classList.add('btn-hide');
    (0,_nav__WEBPACK_IMPORTED_MODULE_0__.nav)()
    setTimeout(animateOptions, 10);
    // button.removeEventListener('click', btn);
    document.querySelector('.options').addEventListener('click', _options__WEBPACK_IMPORTED_MODULE_1__.options);
}

/***/ }),

/***/ "./src/button/nav.js":
/*!***************************!*\
  !*** ./src/button/nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });


const nav = () => {
    const nav = document.querySelector('.nav');
    const wrapper = document.createElement('div');
    wrapper.classList.add('options');
    const btn1 = document.createElement('button');
    btn1.textContent = 'New Task';
    const btn2 = document.createElement('button');
    btn2.textContent = 'New List';
    const btn3 = document.createElement('button');
    btn3.textContent = 'View Lists';
    wrapper.append(btn1, btn2, btn3);
    nav.appendChild(wrapper);
}

/***/ }),

/***/ "./src/button/options.js":
/*!*******************************!*\
  !*** ./src/button/options.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var _options_viewLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/viewLists */ "./src/options/viewLists.js");
/* harmony import */ var _options_newTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/newTask */ "./src/options/newTask.js");
/* harmony import */ var _options_newList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options/newList */ "./src/options/newList.js");




const removeOptions = () => {
    const options = document.querySelector('.options');
    const nav = document.querySelector('.nav');
    const button = document.querySelector('.btn');
    button.classList.remove('btn-hide');
    nav.removeChild(options);
}

const optionsLogic = (e) => {

    if (e.target.textContent == 'New Task') {
        removeOptions();
        (0,_options_newTask__WEBPACK_IMPORTED_MODULE_1__.newTask)();
    }

    if (e.target.textContent == 'New List') {
        removeOptions();
        (0,_options_newList__WEBPACK_IMPORTED_MODULE_2__.newList)();
    }

    if (e.target.textContent == 'View Lists') {
        removeOptions();
        (0,_options_viewLists__WEBPACK_IMPORTED_MODULE_0__.viewLists)();
    }
}

const options = (e) => {
    optionsLogic(e);
}

/***/ }),

/***/ "./src/list/deleteList.js":
/*!********************************!*\
  !*** ./src/list/deleteList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteList": () => (/* binding */ deleteList)
/* harmony export */ });
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ "./src/list/lists.js");
/* harmony import */ var _auxiliary_removeChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auxiliary/removeChildren */ "./src/auxiliary/removeChildren.js");



const deleteList = (e) => {
    if(_lists__WEBPACK_IMPORTED_MODULE_0__.list.length > 1) {
        const listName = e.target.parentElement.parentElement.firstChild.textContent;
        _lists__WEBPACK_IMPORTED_MODULE_0__.list.forEach((el, i) => {
            if(el.name == listName) {
                _lists__WEBPACK_IMPORTED_MODULE_0__.list.splice(i, 1)
            }
        })
        const parent = document.querySelector('.options-wrapper')
        ;(0,_auxiliary_removeChildren__WEBPACK_IMPORTED_MODULE_1__.removeChildren)(parent)

        for(let i = 0; i < _lists__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
            const button = document.createElement('button')
            if(_lists__WEBPACK_IMPORTED_MODULE_0__.list[i].getIsActive() == true) {
                button.setAttribute('id', 'active');
            }
            button.classList.add('list-item', 'shadow-lg')
            const p = document.createElement('p')
            p.textContent = `${_lists__WEBPACK_IMPORTED_MODULE_0__.list[i].name}`
            const close = document.createElement('div')
            close.classList.add('relative')
            close.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
            const overlay = document.createElement('div');
            overlay.classList.add('absolute', 'w-full', 'h-full')
            close.appendChild(overlay)
            button.append(p, close)
            parent.appendChild(button);
            overlay.addEventListener('click', deleteList)
        }
    }
}

/***/ }),

/***/ "./src/list/deleteTask.js":
/*!********************************!*\
  !*** ./src/list/deleteTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliary/returnActiveList */ "./src/auxiliary/returnActiveList.js");


//delete task from the dom
const deleteTaskUI = (e) => {
    document.querySelector('.task').removeChild(e.target.parentElement.parentElement);
}

const deleteTask = (e) => {
    // console.log(returnActiveList().getTasks())
    if(e.target.localName == 'div') {
        const task = e.target.parentElement.previousSibling.textContent;
        (0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__.returnActiveList)().deleteTask(task) //delete task from the object
        deleteTaskUI(e);
    }
    // console.log(returnActiveList().getTasks())
}

/***/ }),

/***/ "./src/list/lists.js":
/*!***************************!*\
  !*** ./src/list/lists.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "listFactory": () => (/* binding */ listFactory)
/* harmony export */ });
const list = [];

const listFactory = (name) => {
    const _tasksArr = [];
    let _isActive = false;

    const addTask = (task) => {
        _tasksArr.push(task);
    }

    const deleteTask = (task) => {
        let i = _tasksArr.indexOf(task);
        _tasksArr.splice(i, 1);
    }

    const getTasks = () => _tasksArr;

    const editTasks = () => {
        console.log('add function to edit tasks')
    }

    const setActiveTrue = () => _isActive = true;

    const setActiveFalse = () => _isActive = false;

    const getIsActive = () => _isActive;

    return {
        name,
        addTask,
        deleteTask,
        getTasks,
        editTasks,
        setActiveFalse,
        setActiveTrue,
        getIsActive
    }
}

const defaultList = listFactory('Do It Now');
list.push(defaultList);
list[0].setActiveTrue();

defaultList.addTask('Click the green button to add a new task or create a new list');



/***/ }),

/***/ "./src/options/newList.js":
/*!********************************!*\
  !*** ./src/options/newList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newList": () => (/* binding */ newList)
/* harmony export */ });
/* harmony import */ var _auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliary/returnActiveList */ "./src/auxiliary/returnActiveList.js");
/* harmony import */ var _list_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list/lists */ "./src/list/lists.js");
/* harmony import */ var _auxiliary_setAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auxiliary/setAttributes */ "./src/auxiliary/setAttributes.js");
/* harmony import */ var _options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options/optionsFunctions */ "./src/options/optionsFunctions.js");





const animateForm = () => {
    document.querySelector('.options-wrapper').classList.add('options-wrapper-animate');
}
 
const addNewList = (e) => {
    e.preventDefault()
    const listName = document.querySelector('#newList').value;
    const newList = (0,_list_lists__WEBPACK_IMPORTED_MODULE_1__.listFactory)(`${listName}`);
    _list_lists__WEBPACK_IMPORTED_MODULE_1__.list.push(newList);
    setTimeout(_options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__.animateOptions, 10);
    setTimeout(_options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__.removeOverlay, 500);
    (0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__.returnActiveList)().setActiveFalse();
    newList.setActiveTrue();
    (0,_options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__.removeListTitle)();
    (0,_options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__.changeListTitle)();
    (0,_options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__.removeTasks)();
    (0,_options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__.changeTasks)();
}

const newList = () => {
    const parent = document.querySelector('.wrapper')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    const form = document.createElement('form')
    form.setAttribute('id', 'form-list')
    form.classList.add('options-wrapper', 'shadow-lg')
    const label = document.createElement('label')
    label.textContent = 'New List'
    label.setAttribute('for', 'newList')
    const input = document.createElement('input')
    ;(0,_auxiliary_setAttributes__WEBPACK_IMPORTED_MODULE_2__.setAttributes)(input, {'type': 'text', 'id': 'newList', 'name': 'newList'})
    const button = document.createElement('button')
    button.textContent = 'Add List'
    form.append(label, input, button)
    overlay.appendChild(form)
    parent.appendChild(overlay)
    setTimeout(animateForm, 10)
    button.addEventListener('click', addNewList)
    ;(0,_options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__.cancelOptions)()
}

/***/ }),

/***/ "./src/options/newTask.js":
/*!********************************!*\
  !*** ./src/options/newTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTask": () => (/* binding */ newTask)
/* harmony export */ });
/* harmony import */ var _auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliary/returnActiveList */ "./src/auxiliary/returnActiveList.js");
/* harmony import */ var _auxiliary_setAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auxiliary/setAttributes */ "./src/auxiliary/setAttributes.js");
/* harmony import */ var _optionsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionsFunctions */ "./src/options/optionsFunctions.js");




const animateForm = () => {
    document.querySelector('.options-wrapper').classList.add('options-wrapper-animate');
}

const addNewTask = (e) => {
    e.preventDefault()
    // console.log(e.target)
    const task = document.querySelector('#newTask').value
    // console.log(returnActiveList().getTasks())
    ;(0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__.returnActiveList)().addTask(task)
    // console.log(returnActiveList().getTasks())
    setTimeout(_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.animateOptions, 10);
    setTimeout(_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.removeOverlay, 500);
    (0,_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.removeTasks)()
    ;(0,_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.changeTasks)()
}

const newTask = () => {
    const parent = document.querySelector('.wrapper')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    const form = document.createElement('form')
    form.setAttribute('id', 'form-task')
    form.classList.add('options-wrapper', 'shadow-lg')
    const label = document.createElement('label')
    label.textContent = 'New Task'
    label.setAttribute('for', 'newTask')
    const input = document.createElement('input')
    ;(0,_auxiliary_setAttributes__WEBPACK_IMPORTED_MODULE_1__.setAttributes)(input, {'type': 'text', 'id': 'newTask', 'name': 'newTask'})
    const button = document.createElement('button')
    button.textContent = 'Add Task'
    form.append(label, input, button)
    overlay.appendChild(form)
    parent.appendChild(overlay)
    setTimeout(animateForm, 10)
    button.addEventListener('click', addNewTask)
    ;(0,_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.cancelOptions)();
}

/***/ }),

/***/ "./src/options/optionsFunctions.js":
/*!*****************************************!*\
  !*** ./src/options/optionsFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateOptions": () => (/* binding */ animateOptions),
/* harmony export */   "cancelOptions": () => (/* binding */ cancelOptions),
/* harmony export */   "changeListTitle": () => (/* binding */ changeListTitle),
/* harmony export */   "changeTasks": () => (/* binding */ changeTasks),
/* harmony export */   "removeListTitle": () => (/* binding */ removeListTitle),
/* harmony export */   "removeOverlay": () => (/* binding */ removeOverlay),
/* harmony export */   "removeTasks": () => (/* binding */ removeTasks)
/* harmony export */ });
/* harmony import */ var _auxiliary_removeChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliary/removeChildren */ "./src/auxiliary/removeChildren.js");
/* harmony import */ var _auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auxiliary/returnActiveList */ "./src/auxiliary/returnActiveList.js");



const animateOptions = () => {
    document.querySelector('.options-wrapper').classList.remove('options-wrapper-animate');
}

const removeOverlay = () => {
    const overlay = document.querySelector('.overlay')
    overlay.parentElement.removeChild(overlay)
}

const removeListTitle = () => {
    document.querySelector('.list-name').textContent = '';
}

const changeListTitle = () => {
    document.querySelector('.list-name').textContent = `${(0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().name}`;
}

const removeTasks = () => {
    const task = document.querySelector('.task');
    (0,_auxiliary_removeChildren__WEBPACK_IMPORTED_MODULE_0__.removeChildren)(task);
}

const changeTasks = () => {
    const btn = document.querySelector('.nav');
    const task = document.querySelector('.task');
    for (let i = 0; i < (0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().getTasks().length; i++) {
        const taskWrapper = document.createElement('div')
        taskWrapper.classList.add('task-wrapper', 'w-full')
        const p = document.createElement(`p`);
        p.textContent = `${(0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().getTasks()[i]}`;
        const button = document.createElement('button')
        button.classList.add('relative')
        button.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        const overlay = document.createElement('div');
        overlay.classList.add('absolute', 'w-full', 'h-full')
        button.appendChild(overlay)
        taskWrapper.append(p, button);
      	task.appendChild(taskWrapper);
    }
    document.querySelector('.wrapper').insertBefore(task, btn);
}

const cancelOptions = () => {
    document.querySelector('.overlay').addEventListener('click', (e) => {
        console.log(e.target)
        if(e.target.classList.contains('overlay')) {
            setTimeout(animateOptions, 10);
            setTimeout(removeOverlay, 500);
        }
    })
}



/***/ }),

/***/ "./src/options/selectList.js":
/*!***********************************!*\
  !*** ./src/options/selectList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTasks": () => (/* reexport safe */ _optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.changeTasks),
/* harmony export */   "removeTasks": () => (/* reexport safe */ _optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.removeTasks),
/* harmony export */   "selectList": () => (/* binding */ selectList)
/* harmony export */ });
/* harmony import */ var _list_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/lists */ "./src/list/lists.js");
/* harmony import */ var _auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auxiliary/returnActiveList */ "./src/auxiliary/returnActiveList.js");
/* harmony import */ var _optionsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionsFunctions */ "./src/options/optionsFunctions.js");




const selectList = (e) => {
    if(e.target.parentElement.classList.contains('list-item')) {
        document.querySelector('#active').removeAttribute('id', 'active');
        if((0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().getIsActive() == true) {
            (0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().setActiveFalse();
        }

        for(let i = 0; i < _list_lists__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
            if (e.target.textContent == _list_lists__WEBPACK_IMPORTED_MODULE_0__.list[i].name) {
                _list_lists__WEBPACK_IMPORTED_MODULE_0__.list[i].setActiveTrue();
                e.target.parentElement.setAttribute('id', 'active')
            }
        }

        setTimeout(_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.animateOptions, 100);
        setTimeout(_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.removeOverlay, 500);
        (0,_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.removeListTitle)();
        (0,_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.changeListTitle)();
        (0,_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.removeTasks)();
        (0,_optionsFunctions__WEBPACK_IMPORTED_MODULE_2__.changeTasks)();
    }
}



/***/ }),

/***/ "./src/options/viewLists.js":
/*!**********************************!*\
  !*** ./src/options/viewLists.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewLists": () => (/* binding */ viewLists)
/* harmony export */ });
/* harmony import */ var _list_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/lists */ "./src/list/lists.js");
/* harmony import */ var _selectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectList */ "./src/options/selectList.js");
/* harmony import */ var _list_deleteList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/deleteList */ "./src/list/deleteList.js");
/* harmony import */ var _options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options/optionsFunctions */ "./src/options/optionsFunctions.js");





const animateViewList = () => {
    document.querySelector('.options-wrapper').classList.add('options-wrapper-animate');
}

const viewLists = () => {
    const parent = document.querySelector('.wrapper')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    const viewList = document.createElement('div')
    viewList.classList.add('options-wrapper', 'shadow-lg')
    setTimeout(animateViewList, 10)
    for(let i = 0; i < _list_lists__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
        const button = document.createElement('button')
        if(_list_lists__WEBPACK_IMPORTED_MODULE_0__.list[i].getIsActive() == true) {
            button.setAttribute('id', 'active');
        }
        button.classList.add('list-item', 'shadow-lg')
        const p = document.createElement('p')
        p.textContent = `${_list_lists__WEBPACK_IMPORTED_MODULE_0__.list[i].name}`
        const close = document.createElement('div')
        close.classList.add('relative')
        close.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        const overlay = document.createElement('div');
        overlay.classList.add('absolute', 'w-full', 'h-full')
        close.appendChild(overlay)
        button.append(p, close)
        viewList.appendChild(button);
        overlay.addEventListener('click', _list_deleteList__WEBPACK_IMPORTED_MODULE_2__.deleteList)
    }
    overlay.append(viewList)
    parent.appendChild(overlay)
    viewList.addEventListener('click', _selectList__WEBPACK_IMPORTED_MODULE_1__.selectList)
    ;(0,_options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__.cancelOptions)()
}

/***/ }),

/***/ "./src/ui/button.js":
/*!**************************!*\
  !*** ./src/ui/button.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "button": () => (/* binding */ button)
/* harmony export */ });
/* harmony import */ var _button_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/btn */ "./src/button/btn.js");


const button = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav', 'flex', 'w-full', 'h-full', 'justify-end', 'items-center', 'px-8', 'py-4', 'relative');
    const button = document.createElement('button');
    button.classList.add('btn', 'rounded-full', 'w-12', 'h-12', 'bg-green-400', 'shadow-lg', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-1', 'active:bg-green-300',);
    const line0 = document.createElement('div');
    line0.classList.add('h-0.5', 'w-5', 'bg-white');
    const line1 = document.createElement('div');
    line1.classList.add('h-0.5', 'w-5', 'bg-white');
    const line2 = document.createElement('div');
    line2.classList.add('h-0.5', 'w-5', 'bg-white');
    button.append(line0, line1, line2);
    nav.appendChild(button);
    document.querySelector('.wrapper').appendChild(nav);
    button.addEventListener('click', _button_btn__WEBPACK_IMPORTED_MODULE_0__.btn);
}

/***/ }),

/***/ "./src/ui/crossOut.js":
/*!****************************!*\
  !*** ./src/ui/crossOut.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crossOut": () => (/* binding */ crossOut)
/* harmony export */ });

const lineThrough = (e) => {
    e.target.classList.toggle('line')
}

const crossOut = (e) => {
    if(e.target.localName == 'p') {
        setTimeout(lineThrough(e), 10)
    }
}

/***/ }),

/***/ "./src/ui/default.js":
/*!***************************!*\
  !*** ./src/ui/default.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "def": () => (/* binding */ def)
/* harmony export */ });
/* harmony import */ var _listTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listTitle */ "./src/ui/listTitle.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/ui/tasks.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/ui/button.js");




const def = () => {
    (0,_listTitle__WEBPACK_IMPORTED_MODULE_0__.listTitle)();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks)();
    (0,_button__WEBPACK_IMPORTED_MODULE_2__.button)();
}

/***/ }),

/***/ "./src/ui/listTitle.js":
/*!*****************************!*\
  !*** ./src/ui/listTitle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listTitle": () => (/* binding */ listTitle)
/* harmony export */ });
/* harmony import */ var _list_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/lists */ "./src/list/lists.js");
/* harmony import */ var _auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auxiliary/returnActiveList */ "./src/auxiliary/returnActiveList.js");



const listTitle = () => {
    const h3 = document.createElement('h3');
    h3.textContent = `${(0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().name}`;
    h3.classList.add('list-name', 'text-center', 'text-4xl');
    document.querySelector('.wrapper').appendChild(h3);
}

/***/ }),

/***/ "./src/ui/tasks.js":
/*!*************************!*\
  !*** ./src/ui/tasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auxiliary/returnActiveList */ "./src/auxiliary/returnActiveList.js");
/* harmony import */ var _list_deleteTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/deleteTask */ "./src/list/deleteTask.js");
/* harmony import */ var _crossOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crossOut */ "./src/ui/crossOut.js");





const tasks = () => {
    const task = document.createElement('div')
    task.classList.add('task', 'flex', 'flex-col', 'items-center', 'gap-3', 'text-xl')
    for (let i = 0; i < (0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().getTasks().length; i++) {
        const taskWrapper = document.createElement('div')
        taskWrapper.classList.add('task-wrapper', 'w-full')
        const p = document.createElement(`p`);
        p.textContent = `${(0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().getTasks()[i]}`;
        const button = document.createElement('button')
        button.classList.add('relative')
        button.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        const overlay = document.createElement('div');
        overlay.classList.add('absolute', 'w-full', 'h-full')
        button.appendChild(overlay)
        taskWrapper.append(p, button);
      	task.appendChild(taskWrapper);
    }
    document.querySelector('.wrapper').appendChild(task);
    document.querySelector('.task').addEventListener('click', _list_deleteTask__WEBPACK_IMPORTED_MODULE_2__.deleteTask)
    document.querySelector('.task').addEventListener('click', _crossOut__WEBPACK_IMPORTED_MODULE_3__.crossOut)
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _ui_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/default */ "./src/ui/default.js");



document.addEventListener('DOMContentLoaded', _ui_default__WEBPACK_IMPORTED_MODULE_1__.def);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLGdCQUFnQixLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxhQUFhLFlBQVksYUFBYSxhQUFh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LDRDQUFHO0FBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHdDO0FBQ1I7QUFDRTs7QUFFM0I7QUFDUCxJQUFJLHFEQUFTO0FBQ2IsSUFBSSw2Q0FBSztBQUNULElBQUksK0NBQU07QUFDVjs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxQztBQUM0Qjs7QUFFMUQ7QUFDUDtBQUNBLHdCQUF3Qiw2RUFBZ0IsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JzQjtBQUMyQztBQUNqQjtBQUNWOztBQUUvQjtBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSSw2RUFBZ0Isc0JBQXNCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2RUFBZ0IsaUJBQWlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHdEQUFVO0FBQ3hFLDhEQUE4RCwrQ0FBUTtBQUN0RTs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2E7O0FBRW5DLDhDQUE4Qyw0Q0FBRyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvc3R5bGVzLmNzcz9hOGQwIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2F1eGlsaWFyeS9yZW1vdmVDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvYXV4aWxpYXJ5L3JldHVybkFjdGl2ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2F1eGlsaWFyeS9zZXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9idXR0b24vYnRuLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9idXR0b24vbmF2LmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9idXR0b24vb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvbGlzdC9kZWxldGVMaXN0LmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9saXN0L2RlbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2xpc3QvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL29wdGlvbnMvbmV3TGlzdC5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvb3B0aW9ucy9uZXdUYXNrLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9vcHRpb25zL29wdGlvbnNGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL29wdGlvbnMvc2VsZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvb3B0aW9ucy92aWV3TGlzdHMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3VpL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvdWkvY3Jvc3NPdXQuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3VpL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3VpL2xpc3RUaXRsZS5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvdWkvdGFza3MuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjIuNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCBjdXJyZW50Q29sb3I7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5jb2xsYXBzZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuLnN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbn1cXG4uZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4uYWJzb2x1dGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ucmVsYXRpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50YWJsZSB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmNvbnRlbnRzIHtcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaC1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oLTE0IHtcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4uaC0xIHtcXG4gIGhlaWdodDogMC4yNXJlbTtcXG59XFxuLmgtMCB7XFxuICBoZWlnaHQ6IDBweDtcXG59XFxuLmgtMTIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4uaC0wXFxcXC41IHtcXG4gIGhlaWdodDogMC4xMjVyZW07XFxufVxcbi53LXNjcmVlbiB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi53LTE0IHtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcbi53LTcge1xcbiAgd2lkdGg6IDEuNzVyZW07XFxufVxcbi53LTUge1xcbiAgd2lkdGg6IDEuMjVyZW07XFxufVxcbi53LTYge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuLnctMTIge1xcbiAgd2lkdGg6IDNyZW07XFxufVxcbi5ib3JkZXItY29sbGFwc2Uge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLnRyYW5zZm9ybSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuLnJlc2l6ZSB7XFxuICByZXNpemU6IGJvdGg7XFxufVxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZmxleC13cmFwIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnBsYWNlLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLml0ZW1zLWVuZCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdhcC0xIHtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuLmdhcC0zIHtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuLnJvdW5kZWQtZnVsbCB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcbi5ib3JkZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5iZy1ncmF5LTEwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyZWVuLTMwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNCwgMjM5LCAxNzIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXdoaXRlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JlZW4tNDAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDIyMiwgMTI4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5weC04IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcbi5weS00IHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuLnVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbn1cXG4uc2hhZG93LWxnIHtcXG4gIC0tdHctc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxMHB4IDE1cHggLTNweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCA2cHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5vdXRsaW5lIHtcXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcbn1cXG4uZmlsdGVyIHtcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuXFxuOnJvb3Qge1xcbiAtLWRvYy1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuIGhlaWdodDogMTAwdmg7XFxuIGhlaWdodDogMTAwJTtcXG4gaGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA3MCUgMTUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG59XFxuXFxuLm5hdiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA4JTsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4uYnRuLWhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA0MCU7XFxufVxcblxcbi5hbmltYXRlLW9wdGlvbnMge1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4uYW5pbWF0ZS1vcHRpb25zLWhpZGUge1xcbiAgICB3aWR0aDogMDt9XFxuXFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgMjMxLCAxODMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5vcHRpb25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTUsIDIzNiwgMTg4KTtcXG59XFxuXFxuLm9wdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDIyNiwgMTc4KTtcXG59XFxuXFxuXFxuLyogb3ZlcmxheSAqL1xcbi5vdmVybGF5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBza3libHVlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNTMsIDI0NSwgMC4xKTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9ucy13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDI0MywgMjA4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4ub3B0aW9ucy13cmFwcGVyLWFuaW1hdGUge1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oY2FsYygxODBweCArIDIzdmgpLCA0MjBweCkpO1xcbiAgICBoZWlnaHQ6IG1heCgyODBweCwgbWluKGNhbGMoMTIwcHggKyAyM3ZoKSwgNDIwcHgpKTtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcXG59XFxuXFxuI2Zvcm0tbGlzdCxcXG4jZm9ybS10YXNrIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBoZWlnaHQ6IG1heCgxMDBweCwgbWluKGNhbGMoNDVweCArIDI0dmgpLCA0MjBweCkpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGRlcjsgKi9cXG4gICAgY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNhZGRsZWJyb3duOyAqL1xcbiAgICAvKiBmb250LXdlaWdodDogYm9sZGVyOyAqL1xcbiAgICB3aWR0aDogbWF4KDZyZW0sIG1pbihjYWxjKDZyZW0gKyAyNHZoKSwgMTJyZW0pKTtcXG4gICAgY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgMjAlO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtIGRpdiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGZvcmVzdGdyZWVuOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWl0ZW0gc3ZnIHtmaWxsOiByZ2IoMTg3LCA2MSwgNjEpO31cXG5cXG4ubGlzdC1pdGVtIHBhdGgge3N0cm9rZTogcmdiKDI0MCwgMjQwLCAyNDApO31cXG5cXG5cXG4jYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjM1LCAyMzUpO31cXG4jYWN0aXZlOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjQ1LCAyNDUpO31cXG4jYWN0aXZlOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIzMCwgMjMwKTt9XFxuXFxuLmxpc3QtaXRlbTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApfVxcbi5saXN0LWl0ZW06YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSl9XFxuXFxubGFiZWwge2ZvbnQtc2l6ZTogMS41cmVtO31cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB3aWR0aDogbWF4KDE4MHB4LCBtaW4oY2FsYygxNTBweCArIDMwdncpLCAzMDBweCkpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MCwgMTcwLCAxNzApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAyNDMsIDIwOCk7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm9wdGlvbi1idG4sIFxcbiNmb3JtLWxpc3QgYnV0dG9uLFxcbiNmb3JtLXRhc2sgYnV0dG9uIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDIyNCwgMjI0KTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi8qIHRhc2tzICovXFxuLnRhc2sge1xcbiAgICB3aWR0aDogbWF4KDEzNXB4LCBtaW4oY2FsYygxNDVweCArIDI2dmgpLCA0MjBweCkpO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIHNlYWdyZWVuOyAqL1xcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgc2xhdGVibHVlOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2std3JhcHBlciBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbn1cXG5cXG4udGFzay13cmFwcGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZnVjaHNpYTsgKi9cXG59XFxuXFxuLmxpbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjb2xvcjogcmdiKDgwLCA4MCwgODApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxufVxcblxcbnBhdGgge3N0cm9rZS13aWR0aDogMS44O31cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZWRlYTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogNjQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDc2OHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgIC0tdHctc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFx0XFxuICAgIH1cXG5cXG4gICAgLyogLmJ0biB7cG9zaXRpb246IHN0YXRpYzt9ICovXFxufVxcblxcbi5hY3RpdmVcXFxcOmJnLWdyZWVuLTMwMDphY3RpdmUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzQsIDIzOSwgMTcyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLHdSQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjO0VBQWQsc0RBQWM7VUFBZCw4Q0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkLHdFQUFjO0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsd0NBQWM7RUFBZCwwQ0FBYztFQUFkLG1DQUFjO0VBQWQsOEJBQWM7RUFBZCxzQ0FBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZDtBQUFjOztBQUFkO0VBQUEsd0JBQWM7RUFBZCx3QkFBYztFQUFkLG1CQUFjO0VBQWQsbUJBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxlQUFjO0VBQWQsZUFBYztFQUFkLGFBQWM7RUFBZCxhQUFjO0VBQWQsa0JBQWM7RUFBZCxzQ0FBYztFQUFkLGVBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLGtCQUFjO0VBQWQsMkJBQWM7RUFBZCw0QkFBYztFQUFkLHdDQUFjO0VBQWQsMENBQWM7RUFBZCxtQ0FBYztFQUFkLDhCQUFjO0VBQWQsc0NBQWM7RUFBZCxZQUFjO0VBQWQsa0JBQWM7RUFBZCxnQkFBYztFQUFkLGlCQUFjO0VBQWQsa0JBQWM7RUFBZCxjQUFjO0VBQWQsZ0JBQWM7RUFBZCxhQUFjO0VBQWQsbUJBQWM7RUFBZCxxQkFBYztFQUFkLDJCQUFjO0VBQWQseUJBQWM7RUFBZCwwQkFBYztFQUFkLDJCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLHlCQUFjO0VBQWQ7QUFBYztBQUVkO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQixxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtB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bUJBQXFCO0lBQXJCLHNCQUFxQjtJQUNyQixrQkFBb0I7SUFBcEIsbUJBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxpQkFBaUI7QUFDckI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksaURBQThDO0lBQzlDLGdCQUE2QjtJQUE3Qiw2QkFBNkI7SUFDN0IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFzQjtJQUF0QixxQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUFuQixxQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQSxNQUFNLGlCQUFpQixDQUFDOztBQUV4Qjs7SUFFSTtRQUNJLHlCQUF5QjtRQUN6QixhQUFhO1FBQ2IscUJBQXFCO1FBQXJCLHVCQUFxQjtRQUFyQixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQW5CLHFCQUFtQjtRQUFuQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsbUJBQW1CO1FBQ25CLGtEQUFrRDtRQUNsRCxrRUFBdUc7UUFBdkcsdUhBQXVHO0lBQzNHOztJQUVBLDZCQUE2QjtBQUNqQzs7QUFuT0E7RUFBQSxtQkNBQTtFREFBO0NDQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG46cm9vdCB7XFxuIC0tZG9jLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gaGVpZ2h0OiAxMDB2aDtcXG4gaGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA3MCUgMTUlO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG59XFxuXFxuLm5hdiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA4JTsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4uYnRuLWhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA0MCU7XFxufVxcblxcbi5hbmltYXRlLW9wdGlvbnMge1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4uYW5pbWF0ZS1vcHRpb25zLWhpZGUge1xcbiAgICB3aWR0aDogMDt9XFxuXFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgMjMxLCAxODMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5vcHRpb25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTUsIDIzNiwgMTg4KTtcXG59XFxuXFxuLm9wdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDIyNiwgMTc4KTtcXG59XFxuXFxuXFxuLyogb3ZlcmxheSAqL1xcbi5vdmVybGF5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBza3libHVlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNTMsIDI0NSwgMC4xKTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbnMtd3JhcHBlciB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYmxvY2s6IDA7XFxuICAgIHBhZGRpbmctaW5saW5lOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAyNDMsIDIwOCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcXG59XFxuXFxuLm9wdGlvbnMtd3JhcHBlci1hbmltYXRlIHtcXG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCBjYWxjKDE4MHB4ICsgMjN2aCksIDQyMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyODBweCwgY2FsYygxMjBweCArIDIzdmgpLCA0MjBweCk7XFxuICAgIHBhZGRpbmctYmxvY2s6IDJyZW07XFxuICAgIHBhZGRpbmctaW5saW5lOiAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XFxufVxcblxcbiNmb3JtLWxpc3QsXFxuI2Zvcm0tdGFzayB7XFxuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICAgIGhlaWdodDogY2xhbXAoMTAwcHgsIGNhbGMoNDVweCArIDI0dmgpLCA0MjBweCk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBmb250LXdlaWdodDogYm9sZGVyOyAqL1xcbiAgICBjb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgc2FkZGxlYnJvd247ICovXFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICovXFxuICAgIHdpZHRoOiBjbGFtcCg2cmVtLCBjYWxjKDZyZW0gKyAyNHZoKSwgMTJyZW0pO1xcbiAgICBjb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjI1cmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAyMCU7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmxpc3QtaXRlbSBkaXYge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBmb3Jlc3RncmVlbjsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QtaXRlbSBzdmcge2ZpbGw6IHJnYigxODcsIDYxLCA2MSk7fVxcblxcbi5saXN0LWl0ZW0gcGF0aCB7c3Ryb2tlOiByZ2IoMjQwLCAyNDAsIDI0MCk7fVxcblxcblxcbiNhY3RpdmUge2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMzUsIDIzNSk7fVxcbiNhY3RpdmU6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNDUsIDI0NSk7fVxcbiNhY3RpdmU6YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjMwLCAyMzApO31cXG5cXG4ubGlzdC1pdGVtOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCl9XFxuLmxpc3QtaXRlbTphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIyNSwgMjI1KX1cXG5cXG5sYWJlbCB7Zm9udC1zaXplOiAxLjVyZW07fVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHdpZHRoOiBjbGFtcCgxODBweCwgY2FsYygxNTBweCArIDMwdncpLCAzMDBweCk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTcwLCAxNzAsIDE3MCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDI0MywgMjA4KTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ub3B0aW9uLWJ0biwgXFxuI2Zvcm0tbGlzdCBidXR0b24sXFxuI2Zvcm0tdGFzayBidXR0b24ge1xcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjVyZW07XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDIyNCwgMjI0KTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi8qIHRhc2tzICovXFxuLnRhc2sge1xcbiAgICB3aWR0aDogY2xhbXAoMTM1cHgsIGNhbGMoMTQ1cHggKyAyNnZoKSwgNDIwcHgpO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIHNlYWdyZWVuOyAqL1xcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgc2xhdGVibHVlOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2std3JhcHBlciBwIHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDAuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbn1cXG5cXG4udGFzay13cmFwcGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGZ1Y2hzaWE7ICovXFxufVxcblxcbi5saW5lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbn1cXG5cXG5wYXRoIHtzdHJva2Utd2lkdGg6IDEuODt9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgICBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGVkZWE7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDY0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA3NjhweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICAtLXR3LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFx0XFxuICAgIH1cXG5cXG4gICAgLyogLmJ0biB7cG9zaXRpb246IHN0YXRpYzt9ICovXFxufVwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCByZW1vdmVDaGlsZHJlbiA9IChwYXJlbnQpID0+IHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCIuLi9saXN0L2xpc3RzXCI7XG5cbmV4cG9ydCBjb25zdCByZXR1cm5BY3RpdmVMaXN0ID0gKCkgPT4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGxpc3RbaV0uZ2V0SXNBY3RpdmUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdFtpXVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsLCBhdHRycykgPT4ge1xuICAgIGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgbmF2IH0gZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5jb25zdCBhbmltYXRlT3B0aW9ucyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3B0aW9ucycpO1xufVxuXG5leHBvcnQgY29uc3QgYnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWhpZGUnKTtcbiAgICBuYXYoKVxuICAgIHNldFRpbWVvdXQoYW5pbWF0ZU9wdGlvbnMsIDEwKTtcbiAgICAvLyBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG4pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25zKTtcbn0iLCJcblxuZXhwb3J0IGNvbnN0IG5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xuICAgIGNvbnN0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4xLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICBjb25zdCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuMi50ZXh0Q29udGVudCA9ICdOZXcgTGlzdCc7XG4gICAgY29uc3QgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bjMudGV4dENvbnRlbnQgPSAnVmlldyBMaXN0cyc7XG4gICAgd3JhcHBlci5hcHBlbmQoYnRuMSwgYnRuMiwgYnRuMyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xufSIsImltcG9ydCB7IHZpZXdMaXN0cyB9IGZyb20gXCIuLi9vcHRpb25zL3ZpZXdMaXN0c1wiO1xuaW1wb3J0IHsgbmV3VGFzayB9IGZyb20gXCIuLi9vcHRpb25zL25ld1Rhc2tcIjtcbmltcG9ydCB7IG5ld0xpc3QgfSBmcm9tIFwiLi4vb3B0aW9ucy9uZXdMaXN0XCI7XG5cbmNvbnN0IHJlbW92ZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWhpZGUnKTtcbiAgICBuYXYucmVtb3ZlQ2hpbGQob3B0aW9ucyk7XG59XG5cbmNvbnN0IG9wdGlvbnNMb2dpYyA9IChlKSA9PiB7XG5cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gJ05ldyBUYXNrJykge1xuICAgICAgICByZW1vdmVPcHRpb25zKCk7XG4gICAgICAgIG5ld1Rhc2soKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gJ05ldyBMaXN0Jykge1xuICAgICAgICByZW1vdmVPcHRpb25zKCk7XG4gICAgICAgIG5ld0xpc3QoKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gJ1ZpZXcgTGlzdHMnKSB7XG4gICAgICAgIHJlbW92ZU9wdGlvbnMoKTtcbiAgICAgICAgdmlld0xpc3RzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IChlKSA9PiB7XG4gICAgb3B0aW9uc0xvZ2ljKGUpO1xufSIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi9saXN0c1wiO1xuaW1wb3J0IHsgcmVtb3ZlQ2hpbGRyZW4gfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L3JlbW92ZUNoaWxkcmVuXCI7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVMaXN0ID0gKGUpID0+IHtcbiAgICBpZihsaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYoZWwubmFtZSA9PSBsaXN0TmFtZSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLXdyYXBwZXInKVxuICAgICAgICByZW1vdmVDaGlsZHJlbihwYXJlbnQpXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBpZihsaXN0W2ldLmdldElzQWN0aXZlKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScsICdzaGFkb3ctbGcnKVxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2xpc3RbaV0ubmFtZX1gXG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdyZWxhdGl2ZScpXG4gICAgICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHN2ZyB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNvbG9yPVwiIzAwMDAwMFwiPjxwYXRoIGQ9XCJNOS4xNzIgMTQuODI4TDEyLjAwMSAxMm0yLjgyOC0yLjgyOEwxMi4wMDEgMTJtMCAwTDkuMTcyIDkuMTcyTTEyLjAwMSAxMmwyLjgyOCAyLjgyOE0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwelwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+PC9zdmc+JztcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWJzb2x1dGUnLCAndy1mdWxsJywgJ2gtZnVsbCcpXG4gICAgICAgICAgICBjbG9zZS5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZChwLCBjbG9zZSlcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUxpc3QpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuXG4vL2RlbGV0ZSB0YXNrIGZyb20gdGhlIGRvbVxuY29uc3QgZGVsZXRlVGFza1VJID0gKGUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKSlcbiAgICBpZihlLnRhcmdldC5sb2NhbE5hbWUgPT0gJ2RpdicpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgICByZXR1cm5BY3RpdmVMaXN0KCkuZGVsZXRlVGFzayh0YXNrKSAvL2RlbGV0ZSB0YXNrIGZyb20gdGhlIG9iamVjdFxuICAgICAgICBkZWxldGVUYXNrVUkoZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHJldHVybkFjdGl2ZUxpc3QoKS5nZXRUYXNrcygpKVxufSIsImNvbnN0IGxpc3QgPSBbXTtcblxuY29uc3QgbGlzdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IF90YXNrc0FyciA9IFtdO1xuICAgIGxldCBfaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBfdGFza3NBcnIucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGkgPSBfdGFza3NBcnIuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgX3Rhc2tzQXJyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IF90YXNrc0FycjtcblxuICAgIGNvbnN0IGVkaXRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZCBmdW5jdGlvbiB0byBlZGl0IHRhc2tzJylcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBY3RpdmVUcnVlID0gKCkgPT4gX2lzQWN0aXZlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNldEFjdGl2ZUZhbHNlID0gKCkgPT4gX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRJc0FjdGl2ZSA9ICgpID0+IF9pc0FjdGl2ZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGdldFRhc2tzLFxuICAgICAgICBlZGl0VGFza3MsXG4gICAgICAgIHNldEFjdGl2ZUZhbHNlLFxuICAgICAgICBzZXRBY3RpdmVUcnVlLFxuICAgICAgICBnZXRJc0FjdGl2ZVxuICAgIH1cbn1cblxuY29uc3QgZGVmYXVsdExpc3QgPSBsaXN0RmFjdG9yeSgnRG8gSXQgTm93Jyk7XG5saXN0LnB1c2goZGVmYXVsdExpc3QpO1xubGlzdFswXS5zZXRBY3RpdmVUcnVlKCk7XG5cbmRlZmF1bHRMaXN0LmFkZFRhc2soJ0NsaWNrIHRoZSBncmVlbiBidXR0b24gdG8gYWRkIGEgbmV3IHRhc2sgb3IgY3JlYXRlIGEgbmV3IGxpc3QnKTtcblxuZXhwb3J0IHsgbGlzdCwgbGlzdEZhY3RvcnkgfSIsImltcG9ydCB7IHJldHVybkFjdGl2ZUxpc3QgfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L3JldHVybkFjdGl2ZUxpc3RcIjtcbmltcG9ydCB7IGxpc3QsIGxpc3RGYWN0b3J5IH0gZnJvbSBcIi4uL2xpc3QvbGlzdHNcIjtcbmltcG9ydCB7IHNldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L3NldEF0dHJpYnV0ZXNcIjtcbmltcG9ydCB7IGNhbmNlbE9wdGlvbnMsIGFuaW1hdGVPcHRpb25zLCByZW1vdmVPdmVybGF5LCByZW1vdmVMaXN0VGl0bGUsIGNoYW5nZUxpc3RUaXRsZSwgcmVtb3ZlVGFza3MsIGNoYW5nZVRhc2tzIH0gZnJvbSBcIi4uL29wdGlvbnMvb3B0aW9uc0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBhbmltYXRlRm9ybSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy13cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy13cmFwcGVyLWFuaW1hdGUnKTtcbn1cbiBcbmNvbnN0IGFkZE5ld0xpc3QgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld0xpc3QnKS52YWx1ZTtcbiAgICBjb25zdCBuZXdMaXN0ID0gbGlzdEZhY3RvcnkoYCR7bGlzdE5hbWV9YCk7XG4gICAgbGlzdC5wdXNoKG5ld0xpc3QpO1xuICAgIHNldFRpbWVvdXQoYW5pbWF0ZU9wdGlvbnMsIDEwKTtcbiAgICBzZXRUaW1lb3V0KHJlbW92ZU92ZXJsYXksIDUwMCk7XG4gICAgcmV0dXJuQWN0aXZlTGlzdCgpLnNldEFjdGl2ZUZhbHNlKCk7XG4gICAgbmV3TGlzdC5zZXRBY3RpdmVUcnVlKCk7XG4gICAgcmVtb3ZlTGlzdFRpdGxlKCk7XG4gICAgY2hhbmdlTGlzdFRpdGxlKCk7XG4gICAgcmVtb3ZlVGFza3MoKTtcbiAgICBjaGFuZ2VUYXNrcygpO1xufVxuXG5leHBvcnQgY29uc3QgbmV3TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5JylcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0tbGlzdCcpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdvcHRpb25zLXdyYXBwZXInLCAnc2hhZG93LWxnJylcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdOZXcgTGlzdCdcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXdMaXN0JylcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzZXRBdHRyaWJ1dGVzKGlucHV0LCB7J3R5cGUnOiAndGV4dCcsICdpZCc6ICduZXdMaXN0JywgJ25hbWUnOiAnbmV3TGlzdCd9KVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBMaXN0J1xuICAgIGZvcm0uYXBwZW5kKGxhYmVsLCBpbnB1dCwgYnV0dG9uKVxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSlcbiAgICBzZXRUaW1lb3V0KGFuaW1hdGVGb3JtLCAxMClcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdMaXN0KVxuICAgIGNhbmNlbE9wdGlvbnMoKVxufSIsImltcG9ydCB7IHJldHVybkFjdGl2ZUxpc3QgfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L3JldHVybkFjdGl2ZUxpc3RcIjtcbmltcG9ydCB7IHNldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L3NldEF0dHJpYnV0ZXNcIjtcbmltcG9ydCB7IGNhbmNlbE9wdGlvbnMsIGNoYW5nZVRhc2tzLCByZW1vdmVUYXNrcywgcmVtb3ZlT3ZlcmxheSwgYW5pbWF0ZU9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGFuaW1hdGVGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdvcHRpb25zLXdyYXBwZXItYW5pbWF0ZScpO1xufVxuXG5jb25zdCBhZGROZXdUYXNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2snKS52YWx1ZVxuICAgIC8vIGNvbnNvbGUubG9nKHJldHVybkFjdGl2ZUxpc3QoKS5nZXRUYXNrcygpKVxuICAgIHJldHVybkFjdGl2ZUxpc3QoKS5hZGRUYXNrKHRhc2spXG4gICAgLy8gY29uc29sZS5sb2cocmV0dXJuQWN0aXZlTGlzdCgpLmdldFRhc2tzKCkpXG4gICAgc2V0VGltZW91dChhbmltYXRlT3B0aW9ucywgMTApO1xuICAgIHNldFRpbWVvdXQocmVtb3ZlT3ZlcmxheSwgNTAwKTtcbiAgICByZW1vdmVUYXNrcygpXG4gICAgY2hhbmdlVGFza3MoKVxufVxuXG5leHBvcnQgY29uc3QgbmV3VGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5JylcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0tdGFzaycpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdvcHRpb25zLXdyYXBwZXInLCAnc2hhZG93LWxnJylcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdOZXcgVGFzaydcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXdUYXNrJylcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzZXRBdHRyaWJ1dGVzKGlucHV0LCB7J3R5cGUnOiAndGV4dCcsICdpZCc6ICduZXdUYXNrJywgJ25hbWUnOiAnbmV3VGFzayd9KVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJ1xuICAgIGZvcm0uYXBwZW5kKGxhYmVsLCBpbnB1dCwgYnV0dG9uKVxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSlcbiAgICBzZXRUaW1lb3V0KGFuaW1hdGVGb3JtLCAxMClcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdUYXNrKVxuICAgIGNhbmNlbE9wdGlvbnMoKTtcbn0iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHJlbiB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmVtb3ZlQ2hpbGRyZW5cIjtcbmltcG9ydCB7IHJldHVybkFjdGl2ZUxpc3QgfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L3JldHVybkFjdGl2ZUxpc3RcIjtcblxuY29uc3QgYW5pbWF0ZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtd3JhcHBlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ29wdGlvbnMtd3JhcHBlci1hbmltYXRlJyk7XG59XG5cbmNvbnN0IHJlbW92ZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcbiAgICBvdmVybGF5LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQob3ZlcmxheSlcbn1cblxuY29uc3QgcmVtb3ZlTGlzdFRpdGxlID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LW5hbWUnKS50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5jb25zdCBjaGFuZ2VMaXN0VGl0bGUgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtbmFtZScpLnRleHRDb250ZW50ID0gYCR7cmV0dXJuQWN0aXZlTGlzdCgpLm5hbWV9YDtcbn1cblxuY29uc3QgcmVtb3ZlVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XG4gICAgcmVtb3ZlQ2hpbGRyZW4odGFzayk7XG59XG5cbmNvbnN0IGNoYW5nZVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldHVybkFjdGl2ZUxpc3QoKS5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzay13cmFwcGVyJywgJ3ctZnVsbCcpXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBwYCk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKVtpXX1gO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncmVsYXRpdmUnKVxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxzdmcgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjb2xvcj1cIiMwMDAwMDBcIj48cGF0aCBkPVwiTTkuMTcyIDE0LjgyOEwxMi4wMDEgMTJtMi44MjgtMi44MjhMMTIuMDAxIDEybTAgMEw5LjE3MiA5LjE3Mk0xMi4wMDEgMTJsMi44MjggMi44MjhNMTIgMjJjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMHpcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPjwvc3ZnPic7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhYnNvbHV0ZScsICd3LWZ1bGwnLCAnaC1mdWxsJylcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKG92ZXJsYXkpXG4gICAgICAgIHRhc2tXcmFwcGVyLmFwcGVuZChwLCBidXR0b24pO1xuICAgICAgXHR0YXNrLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5pbnNlcnRCZWZvcmUodGFzaywgYnRuKTtcbn1cblxuY29uc3QgY2FuY2VsT3B0aW9ucyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFuaW1hdGVPcHRpb25zLCAxMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZU92ZXJsYXksIDUwMCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgeyBjYW5jZWxPcHRpb25zLCBhbmltYXRlT3B0aW9ucywgcmVtb3ZlT3ZlcmxheSwgcmVtb3ZlTGlzdFRpdGxlLCBjaGFuZ2VMaXN0VGl0bGUsIHJlbW92ZVRhc2tzLCBjaGFuZ2VUYXNrcyB9IiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCIuLi9saXN0L2xpc3RzXCI7XG5pbXBvcnQgeyByZXR1cm5BY3RpdmVMaXN0IH0gZnJvbSBcIi4uL2F1eGlsaWFyeS9yZXR1cm5BY3RpdmVMaXN0XCI7XG5pbXBvcnQgeyBhbmltYXRlT3B0aW9ucywgcmVtb3ZlT3ZlcmxheSwgcmVtb3ZlTGlzdFRpdGxlLCBjaGFuZ2VMaXN0VGl0bGUsIHJlbW92ZVRhc2tzLCBjaGFuZ2VUYXNrcyB9IGZyb20gXCIuL29wdGlvbnNGdW5jdGlvbnNcIjtcblxuY29uc3Qgc2VsZWN0TGlzdCA9IChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtaXRlbScpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3RpdmUnKS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ2FjdGl2ZScpO1xuICAgICAgICBpZihyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0SXNBY3RpdmUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm5BY3RpdmVMaXN0KCkuc2V0QWN0aXZlRmFsc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gbGlzdFtpXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgbGlzdFtpXS5zZXRBY3RpdmVUcnVlKCk7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FjdGl2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGFuaW1hdGVPcHRpb25zLCAxMDApO1xuICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZU92ZXJsYXksIDUwMCk7XG4gICAgICAgIHJlbW92ZUxpc3RUaXRsZSgpO1xuICAgICAgICBjaGFuZ2VMaXN0VGl0bGUoKTtcbiAgICAgICAgcmVtb3ZlVGFza3MoKTtcbiAgICAgICAgY2hhbmdlVGFza3MoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7c2VsZWN0TGlzdCwgcmVtb3ZlVGFza3MsIGNoYW5nZVRhc2tzfSIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi4vbGlzdC9saXN0c1wiO1xuaW1wb3J0IHsgc2VsZWN0TGlzdCB9IGZyb20gXCIuL3NlbGVjdExpc3RcIjtcbmltcG9ydCB7IGRlbGV0ZUxpc3QgfSBmcm9tIFwiLi4vbGlzdC9kZWxldGVMaXN0XCI7XG5pbXBvcnQgeyBjYW5jZWxPcHRpb25zIH0gZnJvbSBcIi4uL29wdGlvbnMvb3B0aW9uc0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBhbmltYXRlVmlld0xpc3QgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtd3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlci1hbmltYXRlJyk7XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3TGlzdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKVxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpXG4gICAgY29uc3Qgdmlld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHZpZXdMaXN0LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlcicsICdzaGFkb3ctbGcnKVxuICAgIHNldFRpbWVvdXQoYW5pbWF0ZVZpZXdMaXN0LCAxMClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBpZihsaXN0W2ldLmdldElzQWN0aXZlKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScsICdzaGFkb3ctbGcnKVxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtsaXN0W2ldLm5hbWV9YFxuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ3JlbGF0aXZlJylcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxzdmcgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjb2xvcj1cIiMwMDAwMDBcIj48cGF0aCBkPVwiTTkuMTcyIDE0LjgyOEwxMi4wMDEgMTJtMi44MjgtMi44MjhMMTIuMDAxIDEybTAgMEw5LjE3MiA5LjE3Mk0xMi4wMDEgMTJsMi44MjggMi44MjhNMTIgMjJjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMHpcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPjwvc3ZnPic7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhYnNvbHV0ZScsICd3LWZ1bGwnLCAnaC1mdWxsJylcbiAgICAgICAgY2xvc2UuYXBwZW5kQ2hpbGQob3ZlcmxheSlcbiAgICAgICAgYnV0dG9uLmFwcGVuZChwLCBjbG9zZSlcbiAgICAgICAgdmlld0xpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUxpc3QpXG4gICAgfVxuICAgIG92ZXJsYXkuYXBwZW5kKHZpZXdMaXN0KVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgIHZpZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0TGlzdClcbiAgICBjYW5jZWxPcHRpb25zKClcbn0iLCJpbXBvcnQgeyBidG4gfSBmcm9tIFwiLi4vYnV0dG9uL2J0blwiO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAnZmxleCcsICd3LWZ1bGwnLCAnaC1mdWxsJywgJ2p1c3RpZnktZW5kJywgJ2l0ZW1zLWNlbnRlcicsICdweC04JywgJ3B5LTQnLCAncmVsYXRpdmUnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JvdW5kZWQtZnVsbCcsICd3LTEyJywgJ2gtMTInLCAnYmctZ3JlZW4tNDAwJywgJ3NoYWRvdy1sZycsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdnYXAtMScsICdhY3RpdmU6YmctZ3JlZW4tMzAwJywpO1xuICAgIGNvbnN0IGxpbmUwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZTAuY2xhc3NMaXN0LmFkZCgnaC0wLjUnLCAndy01JywgJ2JnLXdoaXRlJyk7XG4gICAgY29uc3QgbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5lMS5jbGFzc0xpc3QuYWRkKCdoLTAuNScsICd3LTUnLCAnYmctd2hpdGUnKTtcbiAgICBjb25zdCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmUyLmNsYXNzTGlzdC5hZGQoJ2gtMC41JywgJ3ctNScsICdiZy13aGl0ZScpO1xuICAgIGJ1dHRvbi5hcHBlbmQobGluZTAsIGxpbmUxLCBsaW5lMik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bik7XG59IiwiXG5jb25zdCBsaW5lVGhyb3VnaCA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbGluZScpXG59XG5cbmV4cG9ydCBjb25zdCBjcm9zc091dCA9IChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQubG9jYWxOYW1lID09ICdwJykge1xuICAgICAgICBzZXRUaW1lb3V0KGxpbmVUaHJvdWdoKGUpLCAxMClcbiAgICB9XG59IiwiaW1wb3J0IHsgbGlzdFRpdGxlIH0gZnJvbSBcIi4vbGlzdFRpdGxlXCI7XG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcblxuZXhwb3J0IGNvbnN0IGRlZiA9ICgpID0+IHtcbiAgICBsaXN0VGl0bGUoKTtcbiAgICB0YXNrcygpO1xuICAgIGJ1dHRvbigpO1xufSIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi4vbGlzdC9saXN0c1wiO1xuaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuXG5leHBvcnQgY29uc3QgbGlzdFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGAke3JldHVybkFjdGl2ZUxpc3QoKS5uYW1lfWA7XG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnbGlzdC1uYW1lJywgJ3RleHQtY2VudGVyJywgJ3RleHQtNHhsJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChoMyk7XG59IiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuaW1wb3J0IHsgZGVsZXRlVGFzayB9IGZyb20gXCIuLi9saXN0L2RlbGV0ZVRhc2tcIjtcbmltcG9ydCB7IGNyb3NzT3V0IH0gZnJvbSBcIi4vY3Jvc3NPdXRcIjtcblxuZXhwb3J0IGNvbnN0IHRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2l0ZW1zLWNlbnRlcicsICdnYXAtMycsICd0ZXh0LXhsJylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldHVybkFjdGl2ZUxpc3QoKS5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzay13cmFwcGVyJywgJ3ctZnVsbCcpXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBwYCk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKVtpXX1gO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncmVsYXRpdmUnKVxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxzdmcgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjb2xvcj1cIiMwMDAwMDBcIj48cGF0aCBkPVwiTTkuMTcyIDE0LjgyOEwxMi4wMDEgMTJtMi44MjgtMi44MjhMMTIuMDAxIDEybTAgMEw5LjE3MiA5LjE3Mk0xMi4wMDEgMTJsMi44MjggMi44MjhNMTIgMjJjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMHpcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPjwvc3ZnPic7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhYnNvbHV0ZScsICd3LWZ1bGwnLCAnaC1mdWxsJylcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKG92ZXJsYXkpXG4gICAgICAgIHRhc2tXcmFwcGVyLmFwcGVuZChwLCBidXR0b24pO1xuICAgICAgXHR0YXNrLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzaylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3Jvc3NPdXQpXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZGVmIH0gZnJvbSBcIi4vdWkvZGVmYXVsdFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGVmKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=