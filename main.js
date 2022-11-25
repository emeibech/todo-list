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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.list-item {\n  display: list-item;\n}\n.hidden {\n  display: none;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-full {\n  height: 100%;\n}\n.h-14 {\n  height: 3.5rem;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.h-0 {\n  height: 0px;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-0\\.5 {\n  height: 0.125rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-full {\n  width: 100%;\n}\n.w-14 {\n  width: 3.5rem;\n}\n.w-7 {\n  width: 1.75rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.resize {\n  resize: both;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.place-items-center {\n  align-items: center;\n  justify-items: center;\n  place-items: center;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border {\n  border-width: 1px;\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-green-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(134, 239, 172, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(74, 222, 128, var(--tw-bg-opacity));\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.underline {\n  text-decoration-line: underline;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n:root {\n --doc-height: 100%;\n}\n\nhtml,\nbody {\n height: 100vh;\n height: 100%;\n height: var(--doc-height);\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: 15% 70% 15%;\n    min-height: 100%;\n    min-height: var(--doc-height);\n}\n\n.nav {\n    /* border: 1px solid greenyellow; */\n    min-height: 100%;\n    min-height: var(--doc-height);\n}\n\n.btn {\n    overflow: hidden;\n    /* position: fixed;\n    bottom: 8%; */\n    transition: all 500ms;\n}\n\n.btn-hide {\n    opacity: 0;\n    transition: all 500ms;\n}\n\n.options {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: white;\n    font-weight: bolder;\n    text-align: center;\n    transform: translateY(10%);\n    position: absolute;\n    bottom: 40%;\n}\n\n.animate-options {\n    width: 8rem;\n    transform: translateY(0%);\n    transition: all 500ms;\n}\n\n.animate-options-hide {\n    width: 0;}\n\n.options button {\n    background-color: rgb(110, 231, 183);\n    border-radius: 16px;\n    padding: 4px;\n}\n\n.options button:hover {\n    background-color: rgb(115, 236, 188);\n}\n\n.options button:active {\n    background-color: rgb(105, 226, 178);\n}\n\n\n/* overlay */\n.overlay {\n    width: 100vw;\n    height: 100vh;\n    /* border: 1px solid skyblue; */\n    position: absolute;\n    /* background-color: rgba(236, 253, 245, 0.1); */\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    place-items: center;\n}\n\n.options-wrapper {\n    width: 0;\n    height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    background-color: rgb(167, 243, 208);\n    display: flex;\n    flex-direction: column;\n    /* flex-wrap: wrap; */\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1rem;\n    overflow: scroll;\n    transition: all 500ms;\n}\n\n.options-wrapper-animate {\n    width: max(300px, min(calc(180px + 23vh), 420px));\n    height: max(280px, min(calc(120px + 23vh), 420px));\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    transition: all 500ms;\n}\n\n#form-list,\n#form-task {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    height: max(100px, min(calc(45px + 24vh), 420px));\n    overflow: hidden;\n    justify-content: center;\n    /* font-weight: bolder; */\n    color: rgb(60, 60, 60);\n}\n\n.list-item {\n    /* border: 1px solid saddlebrown; */\n    /* font-weight: bolder; */\n    width: max(6rem, min(calc(6rem + 24vh), 12rem));\n    color: rgb(44, 44, 44);\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border-radius: 3rem;\n    background-color: rgb(240, 240, 240);\n    display: grid;\n    grid-template-columns: 80% 20%;\n    grid-gap: 1rem;\n    gap: 1rem;\n}\n\n.list-item div {\n    /* border: 1px solid forestgreen; */\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    place-items: center;\n}\n\n.list-item svg {fill: rgb(187, 61, 61);}\n\n.list-item path {stroke: rgb(240, 240, 240);}\n\n\n#active {background-color: rgb(0, 235, 235);}\n#active:hover {background-color: rgb(0, 245, 245);}\n#active:active {background-color: rgb(0, 230, 230);}\n\n.list-item:hover {background-color: rgb(230, 230, 230)}\n.list-item:active {background-color: rgb(225, 225, 225)}\n\nlabel {font-size: 1.5rem;}\n\ninput {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    font-size: 1.1rem;\n    width: max(180px, min(calc(150px + 30vw), 300px));\n    border-bottom: 1px solid rgb(170, 170, 170);\n    background-color: rgb(167, 243, 208);\n}\n\ninput:focus {\n    outline: none;\n}\n\n.option-btn, \n#form-list button,\n#form-task button {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    background-color: rgb(20, 224, 224);\n    font-size: 1.1rem;\n}\n\n/* tasks */\n.task {\n    width: max(135px, min(calc(145px + 26vh), 420px));\n    min-height: 100%;\n    min-height: var(--doc-height);\n    margin-top: 2rem;\n    /* border: 1px dotted seagreen; */\n}\n\n.task-wrapper {\n    /* border: 1px solid slateblue; */\n    display: grid;\n    grid-template-columns: 90% 10%;\n    cursor: pointer;\n}\n\n.task-wrapper p {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    transition: all 250ms;\n}\n\n.task-wrapper button {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    place-items: center;\n    /* border: 1px solid fuchsia; */\n}\n\n.line {\n    text-decoration: line-through;\n    opacity: 0.5;\n    color: rgb(80, 80, 80);\n    transition: all 250ms;\n}\n\npath {\n    stroke-width: 1.8;\n    stroke: rgb(80, 80, 80);\n}\n\n@media only screen and (min-width: 640px) {\n\n    body {\n        background-color: #ddedea;\n        display: grid;\n        align-content: center;\n        justify-content: center;\n        place-content: center;\n        align-items: center;\n        justify-items: center;\n        place-items: center;\n        margin-top: 2rem;\n    }\n\n    .wrapper {\n        width: 640px;\n        height: 768px;\n        background-color: rgb(240, 240, 240);\n        border-radius: 3rem;\n        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\t\n    }\n\n    /* .btn {position: static;} */\n}\n\n.active\\:bg-green-300:active {\n  --tw-bg-opacity: 1;\n  background-color: rgba(134, 239, 172, var(--tw-bg-opacity));\n}", "",{"version":3,"sources":["webpack://./src/styles.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n --doc-height: 100%;\n}\n\nhtml,\nbody {\n height: 100vh;\n height: var(--doc-height);\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: 15% 70% 15%;\n    min-height: var(--doc-height);\n}\n\n.nav {\n    /* border: 1px solid greenyellow; */\n    min-height: var(--doc-height);\n}\n\n.btn {\n    overflow: hidden;\n    /* position: fixed;\n    bottom: 8%; */\n    transition: all 500ms;\n}\n\n.btn-hide {\n    opacity: 0;\n    transition: all 500ms;\n}\n\n.options {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: white;\n    font-weight: bolder;\n    text-align: center;\n    transform: translateY(10%);\n    position: absolute;\n    bottom: 40%;\n}\n\n.animate-options {\n    width: 8rem;\n    transform: translateY(0%);\n    transition: all 500ms;\n}\n\n.animate-options-hide {\n    width: 0;}\n\n.options button {\n    background-color: rgb(110, 231, 183);\n    border-radius: 16px;\n    padding: 4px;\n}\n\n.options button:hover {\n    background-color: rgb(115, 236, 188);\n}\n\n.options button:active {\n    background-color: rgb(105, 226, 178);\n}\n\n\n/* overlay */\n.overlay {\n    width: 100vw;\n    height: 100vh;\n    /* border: 1px solid skyblue; */\n    position: absolute;\n    /* background-color: rgba(236, 253, 245, 0.1); */\n    display: grid;\n    place-items: center;\n}\n\n.options-wrapper {\n    width: 0;\n    height: 0;\n    padding-block: 0;\n    padding-inline: 0;\n    background-color: rgb(167, 243, 208);\n    display: flex;\n    flex-direction: column;\n    /* flex-wrap: wrap; */\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1rem;\n    overflow: scroll;\n    transition: all 500ms;\n}\n\n.options-wrapper-animate {\n    width: clamp(300px, calc(180px + 23vh), 420px);\n    height: clamp(280px, calc(120px + 23vh), 420px);\n    padding-block: 2rem;\n    padding-inline: 2rem;\n    transition: all 500ms;\n}\n\n#form-list,\n#form-task {\n    padding-block: 1rem;\n    height: clamp(100px, calc(45px + 24vh), 420px);\n    overflow: hidden;\n    justify-content: center;\n    /* font-weight: bolder; */\n    color: rgb(60, 60, 60);\n}\n\n.list-item {\n    /* border: 1px solid saddlebrown; */\n    /* font-weight: bolder; */\n    width: clamp(6rem, calc(6rem + 24vh), 12rem);\n    color: rgb(44, 44, 44);\n    padding-block: 0.25rem;\n    padding-inline: 1rem;\n    border-radius: 3rem;\n    background-color: rgb(240, 240, 240);\n    display: grid;\n    grid-template-columns: 80% 20%;\n    gap: 1rem;\n}\n\n.list-item div {\n    /* border: 1px solid forestgreen; */\n    display: grid;\n    place-items: center;\n}\n\n.list-item svg {fill: rgb(187, 61, 61);}\n\n.list-item path {stroke: rgb(240, 240, 240);}\n\n\n#active {background-color: rgb(0, 235, 235);}\n#active:hover {background-color: rgb(0, 245, 245);}\n#active:active {background-color: rgb(0, 230, 230);}\n\n.list-item:hover {background-color: rgb(230, 230, 230)}\n.list-item:active {background-color: rgb(225, 225, 225)}\n\nlabel {font-size: 1.5rem;}\n\ninput {\n    padding-inline: 0.5rem;\n    font-size: 1.1rem;\n    width: clamp(180px, calc(150px + 30vw), 300px);\n    border-bottom: 1px solid rgb(170, 170, 170);\n    background-color: rgb(167, 243, 208);\n}\n\ninput:focus {\n    outline: none;\n}\n\n.option-btn, \n#form-list button,\n#form-task button {\n    padding-block: 0.5rem;\n    padding-inline: 1rem;\n    background-color: rgb(20, 224, 224);\n    font-size: 1.1rem;\n}\n\n/* tasks */\n.task {\n    width: clamp(135px, calc(145px + 26vh), 420px);\n    min-height: var(--doc-height);\n    margin-top: 2rem;\n    /* border: 1px dotted seagreen; */\n}\n\n.task-wrapper {\n    /* border: 1px solid slateblue; */\n    display: grid;\n    grid-template-columns: 90% 10%;\n    cursor: pointer;\n}\n\n.task-wrapper p {\n    padding-inline: 0.5rem;\n    transition: all 250ms;\n}\n\n.task-wrapper button {\n    display: grid;\n    place-items: center;\n    /* border: 1px solid fuchsia; */\n}\n\n.line {\n    text-decoration: line-through;\n    opacity: 0.5;\n    color: rgb(80, 80, 80);\n    transition: all 250ms;\n}\n\npath {\n    stroke-width: 1.8;\n    stroke: rgb(80, 80, 80);\n}\n\n@media only screen and (min-width: 640px) {\n\n    body {\n        background-color: #ddedea;\n        display: grid;\n        place-content: center;\n        place-items: center;\n        margin-top: 2rem;\n    }\n\n    .wrapper {\n        width: 640px;\n        height: 768px;\n        background-color: rgb(240, 240, 240);\n        border-radius: 3rem;\n        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\t\n    }\n\n    /* .btn {position: static;} */\n}",null],"sourceRoot":""}]);
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
    if(e.target.classList.contains('close')) {
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
    let _crossedOutTasks = [];

    const addTask = (task) => _tasksArr.push(task);

    const deleteTask = (task) => {
        let i = _tasksArr.indexOf(task);
        _tasksArr.splice(i, 1);
    }

    const getTasks = () => _tasksArr;

    const editTasks = () => {
        console.log('add function to edit tasks')
    }

    const getIsActive = () => _isActive;

    const setActiveTrue = () => _isActive = true;

    const setActiveFalse = () => _isActive = false;

    const getCrossedOut = () => _crossedOutTasks;

    const crossOutTask = (task) => _crossedOutTasks.push(task);

    const undoCrossOut = (task) => {
        let i = _crossedOutTasks.indexOf(task);
        _crossedOutTasks.splice(i, 1);
    }

    return {
        name,
        addTask,
        deleteTask,
        getTasks,
        editTasks,
        setActiveFalse,
        setActiveTrue,
        getIsActive,
        getCrossedOut,
        crossOutTask,
        undoCrossOut
    }
}

const defaultList = listFactory('Do It Now');
list.push(defaultList);
list[0].setActiveTrue();

// for(let i = 0; i < 5; i++) {
//     const project = listFactory(`Do it Later${i + 1}`)
//     list.push(project)
//     for(let i = 0; i < 5; i++) {
//         project.addTask(`Bring me $${i + 1} or I'll kick you in the nuts`)
//     }
// }

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
/* harmony export */   "filterTask": () => (/* binding */ filterTask),
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

const filterTask = (task, p) => {
    if((0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().getCrossedOut().filter(e => e == task)[0]) p.classList.add('line')
}

const changeTasks = () => {
    const btn = document.querySelector('.nav');
    const taskContainer = document.querySelector('.task');
    for (let i = 0; i < (0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().getTasks().length; i++) {
        const taskWrapper = document.createElement('div')
        taskWrapper.classList.add('task-wrapper', 'w-full')
        const p = document.createElement(`p`);
        const task = `${(0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_1__.returnActiveList)().getTasks()[i]}`
        p.textContent = task;
        filterTask(task, p);
        const button = document.createElement('button')
        button.classList.add('relative')
        button.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        const overlay = document.createElement('div');
        overlay.classList.add('close', 'absolute', 'w-full', 'h-full')
        button.appendChild(overlay)
        taskWrapper.append(p, button);
        taskContainer.appendChild(taskWrapper);
    }
    document.querySelector('.wrapper').insertBefore(taskContainer, btn);
}

const cancelOptions = () => {
    document.querySelector('.overlay').addEventListener('click', (e) => {
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
/* harmony import */ var _auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliary/returnActiveList */ "./src/auxiliary/returnActiveList.js");


const lineThrough = (e) => {
    if(e.target.classList.contains('line')) {
        e.target.classList.remove('line')
    } else {
        e.target.classList.add('line')
    }

}

const crossOut = (e) => {
    const task = e.target.textContent;
    if(e.target.localName == 'p') {
        if((0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__.returnActiveList)().getCrossedOut().filter(e => e == task)[0]) {
            (0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__.returnActiveList)().undoCrossOut(task);
        } else {
            (0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__.returnActiveList)().crossOutTask(task);
        }
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
/* harmony import */ var _auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliary/returnActiveList */ "./src/auxiliary/returnActiveList.js");
/* harmony import */ var _list_deleteTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list/deleteTask */ "./src/list/deleteTask.js");
/* harmony import */ var _crossOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crossOut */ "./src/ui/crossOut.js");
/* harmony import */ var _options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options/optionsFunctions */ "./src/options/optionsFunctions.js");





const tasks = () => {
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task', 'flex', 'flex-col', 'items-center', 'gap-3', 'text-xl')
    
    for (let i = 0; i < (0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__.returnActiveList)().getTasks().length; i++) {
        const taskWrapper = document.createElement('div')
        taskWrapper.classList.add('task-wrapper', 'w-full')
        const p = document.createElement(`p`);
        const task = `${(0,_auxiliary_returnActiveList__WEBPACK_IMPORTED_MODULE_0__.returnActiveList)().getTasks()[i]}`
        p.textContent = task;
        (0,_options_optionsFunctions__WEBPACK_IMPORTED_MODULE_3__.filterTask)(task, p);
        const button = document.createElement('button')
        button.classList.add('relative')
        button.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        const overlay = document.createElement('div');
        overlay.classList.add('close', 'absolute', 'w-full', 'h-full')
        button.appendChild(overlay)
        taskWrapper.append(p, button);
        taskContainer.appendChild(taskWrapper);
    }
    
    document.querySelector('.wrapper').appendChild(taskContainer);
    document.querySelector('.task').addEventListener('click', _list_deleteTask__WEBPACK_IMPORTED_MODULE_1__.deleteTask)
    document.querySelector('.task').addEventListener('click', _crossOut__WEBPACK_IMPORTED_MODULE_2__.crossOut)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcs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QUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2E7O0FBRW5DLDhDQUE4Qyw0Q0FBRyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvc3R5bGVzLmNzcz9hOGQwIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2F1eGlsaWFyeS9yZW1vdmVDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvYXV4aWxpYXJ5L3JldHVybkFjdGl2ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2F1eGlsaWFyeS9zZXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9idXR0b24vYnRuLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9idXR0b24vbmF2LmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9idXR0b24vb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvbGlzdC9kZWxldGVMaXN0LmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9saXN0L2RlbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2xpc3QvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL29wdGlvbnMvbmV3TGlzdC5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvb3B0aW9ucy9uZXdUYXNrLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9vcHRpb25zL29wdGlvbnNGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL29wdGlvbnMvc2VsZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvb3B0aW9ucy92aWV3TGlzdHMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3VpL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvdWkvY3Jvc3NPdXQuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3VpL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3VpL2xpc3RUaXRsZS5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvdWkvdGFza3MuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjIuNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCBjdXJyZW50Q29sb3I7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5jb2xsYXBzZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuLnN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbn1cXG4uZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4uYWJzb2x1dGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ucmVsYXRpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50YWJsZSB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmNvbnRlbnRzIHtcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaC1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oLTE0IHtcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG4uaC0xIHtcXG4gIGhlaWdodDogMC4yNXJlbTtcXG59XFxuLmgtMCB7XFxuICBoZWlnaHQ6IDBweDtcXG59XFxuLmgtMTIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4uaC0wXFxcXC41IHtcXG4gIGhlaWdodDogMC4xMjVyZW07XFxufVxcbi53LXNjcmVlbiB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi53LTE0IHtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcbi53LTcge1xcbiAgd2lkdGg6IDEuNzVyZW07XFxufVxcbi53LTUge1xcbiAgd2lkdGg6IDEuMjVyZW07XFxufVxcbi53LTYge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuLnctMTIge1xcbiAgd2lkdGg6IDNyZW07XFxufVxcbi5ib3JkZXItY29sbGFwc2Uge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLnRyYW5zZm9ybSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuLnJlc2l6ZSB7XFxuICByZXNpemU6IGJvdGg7XFxufVxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZmxleC13cmFwIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnBsYWNlLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLml0ZW1zLWVuZCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdhcC0xIHtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuLmdhcC0zIHtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuLnJvdW5kZWQtZnVsbCB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcbi5ib3JkZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5iZy1ncmF5LTEwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyZWVuLTMwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNCwgMjM5LCAxNzIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXdoaXRlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JlZW4tNDAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDIyMiwgMTI4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5weC04IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcbi5weS00IHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuLnVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbn1cXG4uc2hhZG93LWxnIHtcXG4gIC0tdHctc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxMHB4IDE1cHggLTNweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCA2cHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5vdXRsaW5lIHtcXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcbn1cXG4uZmlsdGVyIHtcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuXFxuOnJvb3Qge1xcbiAtLWRvYy1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuIGhlaWdodDogMTAwdmg7XFxuIGhlaWdodDogMTAwJTtcXG4gaGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA3MCUgMTUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG59XFxuXFxuLm5hdiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA4JTsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4uYnRuLWhpZGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA0MCU7XFxufVxcblxcbi5hbmltYXRlLW9wdGlvbnMge1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4uYW5pbWF0ZS1vcHRpb25zLWhpZGUge1xcbiAgICB3aWR0aDogMDt9XFxuXFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgMjMxLCAxODMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5vcHRpb25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTUsIDIzNiwgMTg4KTtcXG59XFxuXFxuLm9wdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDIyNiwgMTc4KTtcXG59XFxuXFxuXFxuLyogb3ZlcmxheSAqL1xcbi5vdmVybGF5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBza3libHVlOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNTMsIDI0NSwgMC4xKTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9ucy13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDI0MywgMjA4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4ub3B0aW9ucy13cmFwcGVyLWFuaW1hdGUge1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCBtaW4oY2FsYygxODBweCArIDIzdmgpLCA0MjBweCkpO1xcbiAgICBoZWlnaHQ6IG1heCgyODBweCwgbWluKGNhbGMoMTIwcHggKyAyM3ZoKSwgNDIwcHgpKTtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcXG59XFxuXFxuI2Zvcm0tbGlzdCxcXG4jZm9ybS10YXNrIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBoZWlnaHQ6IG1heCgxMDBweCwgbWluKGNhbGMoNDVweCArIDI0dmgpLCA0MjBweCkpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGRlcjsgKi9cXG4gICAgY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNhZGRsZWJyb3duOyAqL1xcbiAgICAvKiBmb250LXdlaWdodDogYm9sZGVyOyAqL1xcbiAgICB3aWR0aDogbWF4KDZyZW0sIG1pbihjYWxjKDZyZW0gKyAyNHZoKSwgMTJyZW0pKTtcXG4gICAgY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgMjAlO1xcbiAgICBncmlkLWdhcDogMXJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtIGRpdiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGZvcmVzdGdyZWVuOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWl0ZW0gc3ZnIHtmaWxsOiByZ2IoMTg3LCA2MSwgNjEpO31cXG5cXG4ubGlzdC1pdGVtIHBhdGgge3N0cm9rZTogcmdiKDI0MCwgMjQwLCAyNDApO31cXG5cXG5cXG4jYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjM1LCAyMzUpO31cXG4jYWN0aXZlOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjQ1LCAyNDUpO31cXG4jYWN0aXZlOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIzMCwgMjMwKTt9XFxuXFxuLmxpc3QtaXRlbTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApfVxcbi5saXN0LWl0ZW06YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSl9XFxuXFxubGFiZWwge2ZvbnQtc2l6ZTogMS41cmVtO31cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB3aWR0aDogbWF4KDE4MHB4LCBtaW4oY2FsYygxNTBweCArIDMwdncpLCAzMDBweCkpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MCwgMTcwLCAxNzApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAyNDMsIDIwOCk7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm9wdGlvbi1idG4sIFxcbiNmb3JtLWxpc3QgYnV0dG9uLFxcbiNmb3JtLXRhc2sgYnV0dG9uIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDIyNCwgMjI0KTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi8qIHRhc2tzICovXFxuLnRhc2sge1xcbiAgICB3aWR0aDogbWF4KDEzNXB4LCBtaW4oY2FsYygxNDVweCArIDI2dmgpLCA0MjBweCkpO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1kb2MtaGVpZ2h0KTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIHNlYWdyZWVuOyAqL1xcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgc2xhdGVibHVlOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2std3JhcHBlciBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbn1cXG5cXG4udGFzay13cmFwcGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZnVjaHNpYTsgKi9cXG59XFxuXFxuLmxpbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjb2xvcjogcmdiKDgwLCA4MCwgODApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxufVxcblxcbnBhdGgge1xcbiAgICBzdHJva2Utd2lkdGg6IDEuODtcXG4gICAgc3Ryb2tlOiByZ2IoODAsIDgwLCA4MCk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlZGVhO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiA2NDBweDtcXG4gICAgICAgIGhlaWdodDogNzY4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgLS10dy1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcXHRcXG4gICAgfVxcblxcbiAgICAvKiAuYnRuIHtwb3NpdGlvbjogc3RhdGljO30gKi9cXG59XFxuXFxuLmFjdGl2ZVxcXFw6YmctZ3JlZW4tMzAwOmFjdGl2ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNCwgMjM5LCAxNzIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsd1JBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsMEJBQWM7RUFBZCxzREFBYztVQUFkLDhDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFB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YUFBYTtRQUNiLHFCQUFxQjtRQUFyQix1QkFBcUI7UUFBckIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUFuQixxQkFBbUI7UUFBbkIsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isb0NBQW9DO1FBQ3BDLG1CQUFtQjtRQUNuQixrREFBa0Q7UUFDbEQsa0VBQXVHO1FBQXZHLHVIQUF1RztJQUMzRzs7SUFFQSw2QkFBNkI7QUFDakM7O0FBdk9BO0VBQUEsbUJDQUE7RURBQTtDQ0FBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuOnJvb3Qge1xcbiAtLWRvYy1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuIGhlaWdodDogMTAwdmg7XFxuIGhlaWdodDogdmFyKC0tZG9jLWhlaWdodCk7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgNzAlIDE1JTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tZG9jLWhlaWdodCk7XFxufVxcblxcbi5uYXYge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gICAgbWluLWhlaWdodDogdmFyKC0tZG9jLWhlaWdodCk7XFxufVxcblxcbi5idG4ge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogOCU7ICovXFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcXG59XFxuXFxuLmJ0bi1oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNDAlO1xcbn1cXG5cXG4uYW5pbWF0ZS1vcHRpb25zIHtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcXG59XFxuXFxuLmFuaW1hdGUtb3B0aW9ucy1oaWRlIHtcXG4gICAgd2lkdGg6IDA7fVxcblxcbi5vcHRpb25zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDIzMSwgMTgzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4ub3B0aW9ucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE1LCAyMzYsIDE4OCk7XFxufVxcblxcbi5vcHRpb25zIGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAyMjYsIDE3OCk7XFxufVxcblxcblxcbi8qIG92ZXJsYXkgKi9cXG4ub3ZlcmxheSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgc2t5Ymx1ZTsgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjUzLCAyNDUsIDAuMSk7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb25zLXdyYXBwZXIge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAwO1xcbiAgICBwYWRkaW5nLWlubGluZTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMjQzLCAyMDgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XFxufVxcblxcbi5vcHRpb25zLXdyYXBwZXItYW5pbWF0ZSB7XFxuICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgY2FsYygxODBweCArIDIzdmgpLCA0MjBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMjgwcHgsIGNhbGMoMTIwcHggKyAyM3ZoKSwgNDIwcHgpO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAycmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4jZm9ybS1saXN0LFxcbiNmb3JtLXRhc2sge1xcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDEwMHB4LCBjYWxjKDQ1cHggKyAyNHZoKSwgNDIwcHgpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGRlcjsgKi9cXG4gICAgY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNhZGRsZWJyb3duOyAqL1xcbiAgICAvKiBmb250LXdlaWdodDogYm9sZGVyOyAqL1xcbiAgICB3aWR0aDogY2xhbXAoNnJlbSwgY2FsYyg2cmVtICsgMjR2aCksIDEycmVtKTtcXG4gICAgY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcXG4gICAgcGFkZGluZy1ibG9jazogMC4yNXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgMjAlO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5saXN0LWl0ZW0gZGl2IHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZm9yZXN0Z3JlZW47ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWl0ZW0gc3ZnIHtmaWxsOiByZ2IoMTg3LCA2MSwgNjEpO31cXG5cXG4ubGlzdC1pdGVtIHBhdGgge3N0cm9rZTogcmdiKDI0MCwgMjQwLCAyNDApO31cXG5cXG5cXG4jYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjM1LCAyMzUpO31cXG4jYWN0aXZlOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjQ1LCAyNDUpO31cXG4jYWN0aXZlOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIzMCwgMjMwKTt9XFxuXFxuLmxpc3QtaXRlbTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApfVxcbi5saXN0LWl0ZW06YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSl9XFxuXFxubGFiZWwge2ZvbnQtc2l6ZTogMS41cmVtO31cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB3aWR0aDogY2xhbXAoMTgwcHgsIGNhbGMoMTUwcHggKyAzMHZ3KSwgMzAwcHgpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MCwgMTcwLCAxNzApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAyNDMsIDIwOCk7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm9wdGlvbi1idG4sIFxcbiNmb3JtLWxpc3QgYnV0dG9uLFxcbiNmb3JtLXRhc2sgYnV0dG9uIHtcXG4gICAgcGFkZGluZy1ibG9jazogMC41cmVtO1xcbiAgICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMjQsIDIyNCk7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4vKiB0YXNrcyAqL1xcbi50YXNrIHtcXG4gICAgd2lkdGg6IGNsYW1wKDEzNXB4LCBjYWxjKDE0NXB4ICsgMjZ2aCksIDQyMHB4KTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tZG9jLWhlaWdodCk7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBzZWFncmVlbjsgKi9cXG59XFxuXFxuLnRhc2std3JhcHBlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNsYXRlYmx1ZTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCUgMTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXdyYXBwZXIgcCB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG59XFxuXFxuLnRhc2std3JhcHBlciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBmdWNoc2lhOyAqL1xcbn1cXG5cXG4ubGluZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG59XFxuXFxucGF0aCB7XFxuICAgIHN0cm9rZS13aWR0aDogMS44O1xcbiAgICBzdHJva2U6IHJnYig4MCwgODAsIDgwKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgICBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGVkZWE7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDY0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA3NjhweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgICAgICAtLXR3LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFx0XFxuICAgIH1cXG5cXG4gICAgLyogLmJ0biB7cG9zaXRpb246IHN0YXRpYzt9ICovXFxufVwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCByZW1vdmVDaGlsZHJlbiA9IChwYXJlbnQpID0+IHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCIuLi9saXN0L2xpc3RzXCI7XG5cbmV4cG9ydCBjb25zdCByZXR1cm5BY3RpdmVMaXN0ID0gKCkgPT4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGxpc3RbaV0uZ2V0SXNBY3RpdmUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdFtpXVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsLCBhdHRycykgPT4ge1xuICAgIGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgbmF2IH0gZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5jb25zdCBhbmltYXRlT3B0aW9ucyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3B0aW9ucycpO1xufVxuXG5leHBvcnQgY29uc3QgYnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLWhpZGUnKTtcbiAgICBuYXYoKVxuICAgIHNldFRpbWVvdXQoYW5pbWF0ZU9wdGlvbnMsIDEwKTtcbiAgICAvLyBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG4pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25zKTtcbn0iLCJcblxuZXhwb3J0IGNvbnN0IG5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xuICAgIGNvbnN0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4xLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICBjb25zdCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuMi50ZXh0Q29udGVudCA9ICdOZXcgTGlzdCc7XG4gICAgY29uc3QgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bjMudGV4dENvbnRlbnQgPSAnVmlldyBMaXN0cyc7XG4gICAgd3JhcHBlci5hcHBlbmQoYnRuMSwgYnRuMiwgYnRuMyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xufSIsImltcG9ydCB7IHZpZXdMaXN0cyB9IGZyb20gXCIuLi9vcHRpb25zL3ZpZXdMaXN0c1wiO1xuaW1wb3J0IHsgbmV3VGFzayB9IGZyb20gXCIuLi9vcHRpb25zL25ld1Rhc2tcIjtcbmltcG9ydCB7IG5ld0xpc3QgfSBmcm9tIFwiLi4vb3B0aW9ucy9uZXdMaXN0XCI7XG5cbmNvbnN0IHJlbW92ZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWhpZGUnKTtcbiAgICBuYXYucmVtb3ZlQ2hpbGQob3B0aW9ucyk7XG59XG5cbmNvbnN0IG9wdGlvbnNMb2dpYyA9IChlKSA9PiB7XG5cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gJ05ldyBUYXNrJykge1xuICAgICAgICByZW1vdmVPcHRpb25zKCk7XG4gICAgICAgIG5ld1Rhc2soKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gJ05ldyBMaXN0Jykge1xuICAgICAgICByZW1vdmVPcHRpb25zKCk7XG4gICAgICAgIG5ld0xpc3QoKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gJ1ZpZXcgTGlzdHMnKSB7XG4gICAgICAgIHJlbW92ZU9wdGlvbnMoKTtcbiAgICAgICAgdmlld0xpc3RzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IChlKSA9PiB7XG4gICAgb3B0aW9uc0xvZ2ljKGUpO1xufSIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi9saXN0c1wiO1xuaW1wb3J0IHsgcmVtb3ZlQ2hpbGRyZW4gfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L3JlbW92ZUNoaWxkcmVuXCI7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVMaXN0ID0gKGUpID0+IHtcbiAgICBpZihsaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYoZWwubmFtZSA9PSBsaXN0TmFtZSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLXdyYXBwZXInKVxuICAgICAgICByZW1vdmVDaGlsZHJlbihwYXJlbnQpXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBpZihsaXN0W2ldLmdldElzQWN0aXZlKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScsICdzaGFkb3ctbGcnKVxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2xpc3RbaV0ubmFtZX1gXG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdyZWxhdGl2ZScpXG4gICAgICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHN2ZyB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNvbG9yPVwiIzAwMDAwMFwiPjxwYXRoIGQ9XCJNOS4xNzIgMTQuODI4TDEyLjAwMSAxMm0yLjgyOC0yLjgyOEwxMi4wMDEgMTJtMCAwTDkuMTcyIDkuMTcyTTEyLjAwMSAxMmwyLjgyOCAyLjgyOE0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwelwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+PC9zdmc+JztcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWJzb2x1dGUnLCAndy1mdWxsJywgJ2gtZnVsbCcpXG4gICAgICAgICAgICBjbG9zZS5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZChwLCBjbG9zZSlcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUxpc3QpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuXG4vL2RlbGV0ZSB0YXNrIGZyb20gdGhlIGRvbVxuY29uc3QgZGVsZXRlVGFza1VJID0gKGUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKSlcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgICByZXR1cm5BY3RpdmVMaXN0KCkuZGVsZXRlVGFzayh0YXNrKSAvL2RlbGV0ZSB0YXNrIGZyb20gdGhlIG9iamVjdFxuICAgICAgICBkZWxldGVUYXNrVUkoZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHJldHVybkFjdGl2ZUxpc3QoKS5nZXRUYXNrcygpKVxufSIsImNvbnN0IGxpc3QgPSBbXTtcblxuY29uc3QgbGlzdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IF90YXNrc0FyciA9IFtdO1xuICAgIGxldCBfaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBsZXQgX2Nyb3NzZWRPdXRUYXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiBfdGFza3NBcnIucHVzaCh0YXNrKTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgaSA9IF90YXNrc0Fyci5pbmRleE9mKHRhc2spO1xuICAgICAgICBfdGFza3NBcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gX3Rhc2tzQXJyO1xuXG4gICAgY29uc3QgZWRpdFRhc2tzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkIGZ1bmN0aW9uIHRvIGVkaXQgdGFza3MnKVxuICAgIH1cblxuICAgIGNvbnN0IGdldElzQWN0aXZlID0gKCkgPT4gX2lzQWN0aXZlO1xuXG4gICAgY29uc3Qgc2V0QWN0aXZlVHJ1ZSA9ICgpID0+IF9pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBjb25zdCBzZXRBY3RpdmVGYWxzZSA9ICgpID0+IF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0Q3Jvc3NlZE91dCA9ICgpID0+IF9jcm9zc2VkT3V0VGFza3M7XG5cbiAgICBjb25zdCBjcm9zc091dFRhc2sgPSAodGFzaykgPT4gX2Nyb3NzZWRPdXRUYXNrcy5wdXNoKHRhc2spO1xuXG4gICAgY29uc3QgdW5kb0Nyb3NzT3V0ID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGkgPSBfY3Jvc3NlZE91dFRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgIF9jcm9zc2VkT3V0VGFza3Muc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGdldFRhc2tzLFxuICAgICAgICBlZGl0VGFza3MsXG4gICAgICAgIHNldEFjdGl2ZUZhbHNlLFxuICAgICAgICBzZXRBY3RpdmVUcnVlLFxuICAgICAgICBnZXRJc0FjdGl2ZSxcbiAgICAgICAgZ2V0Q3Jvc3NlZE91dCxcbiAgICAgICAgY3Jvc3NPdXRUYXNrLFxuICAgICAgICB1bmRvQ3Jvc3NPdXRcbiAgICB9XG59XG5cbmNvbnN0IGRlZmF1bHRMaXN0ID0gbGlzdEZhY3RvcnkoJ0RvIEl0IE5vdycpO1xubGlzdC5wdXNoKGRlZmF1bHRMaXN0KTtcbmxpc3RbMF0uc2V0QWN0aXZlVHJ1ZSgpO1xuXG4vLyBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4vLyAgICAgY29uc3QgcHJvamVjdCA9IGxpc3RGYWN0b3J5KGBEbyBpdCBMYXRlciR7aSArIDF9YClcbi8vICAgICBsaXN0LnB1c2gocHJvamVjdClcbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4vLyAgICAgICAgIHByb2plY3QuYWRkVGFzayhgQnJpbmcgbWUgJCR7aSArIDF9IG9yIEknbGwga2ljayB5b3UgaW4gdGhlIG51dHNgKVxuLy8gICAgIH1cbi8vIH1cblxuZGVmYXVsdExpc3QuYWRkVGFzaygnQ2xpY2sgdGhlIGdyZWVuIGJ1dHRvbiB0byBhZGQgYSBuZXcgdGFzayBvciBjcmVhdGUgYSBuZXcgbGlzdCcpO1xuXG5leHBvcnQgeyBsaXN0LCBsaXN0RmFjdG9yeSB9IiwiaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuaW1wb3J0IHsgbGlzdCwgbGlzdEZhY3RvcnkgfSBmcm9tIFwiLi4vbGlzdC9saXN0c1wiO1xuaW1wb3J0IHsgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9hdXhpbGlhcnkvc2V0QXR0cmlidXRlc1wiO1xuaW1wb3J0IHsgY2FuY2VsT3B0aW9ucywgYW5pbWF0ZU9wdGlvbnMsIHJlbW92ZU92ZXJsYXksIHJlbW92ZUxpc3RUaXRsZSwgY2hhbmdlTGlzdFRpdGxlLCByZW1vdmVUYXNrcywgY2hhbmdlVGFza3MgfSBmcm9tIFwiLi4vb3B0aW9ucy9vcHRpb25zRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGFuaW1hdGVGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdvcHRpb25zLXdyYXBwZXItYW5pbWF0ZScpO1xufVxuIFxuY29uc3QgYWRkTmV3TGlzdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3TGlzdCcpLnZhbHVlO1xuICAgIGNvbnN0IG5ld0xpc3QgPSBsaXN0RmFjdG9yeShgJHtsaXN0TmFtZX1gKTtcbiAgICBsaXN0LnB1c2gobmV3TGlzdCk7XG4gICAgc2V0VGltZW91dChhbmltYXRlT3B0aW9ucywgMTApO1xuICAgIHNldFRpbWVvdXQocmVtb3ZlT3ZlcmxheSwgNTAwKTtcbiAgICByZXR1cm5BY3RpdmVMaXN0KCkuc2V0QWN0aXZlRmFsc2UoKTtcbiAgICBuZXdMaXN0LnNldEFjdGl2ZVRydWUoKTtcbiAgICByZW1vdmVMaXN0VGl0bGUoKTtcbiAgICBjaGFuZ2VMaXN0VGl0bGUoKTtcbiAgICByZW1vdmVUYXNrcygpO1xuICAgIGNoYW5nZVRhc2tzKCk7XG59XG5cbmV4cG9ydCBjb25zdCBuZXdMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS1saXN0JylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlcicsICdzaGFkb3ctbGcnKVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ05ldyBMaXN0J1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ld0xpc3QnKVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHNldEF0dHJpYnV0ZXMoaW5wdXQsIHsndHlwZSc6ICd0ZXh0JywgJ2lkJzogJ25ld0xpc3QnLCAnbmFtZSc6ICduZXdMaXN0J30pXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIExpc3QnXG4gICAgZm9ybS5hcHBlbmQobGFiZWwsIGlucHV0LCBidXR0b24pXG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChmb3JtKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgIHNldFRpbWVvdXQoYW5pbWF0ZUZvcm0sIDEwKVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld0xpc3QpXG4gICAgY2FuY2VsT3B0aW9ucygpXG59IiwiaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuaW1wb3J0IHsgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9hdXhpbGlhcnkvc2V0QXR0cmlidXRlc1wiO1xuaW1wb3J0IHsgY2FuY2VsT3B0aW9ucywgY2hhbmdlVGFza3MsIHJlbW92ZVRhc2tzLCByZW1vdmVPdmVybGF5LCBhbmltYXRlT3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNGdW5jdGlvbnNcIjtcblxuY29uc3QgYW5pbWF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtd3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlci1hbmltYXRlJyk7XG59XG5cbmNvbnN0IGFkZE5ld1Rhc2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFzaycpLnZhbHVlXG4gICAgLy8gY29uc29sZS5sb2cocmV0dXJuQWN0aXZlTGlzdCgpLmdldFRhc2tzKCkpXG4gICAgcmV0dXJuQWN0aXZlTGlzdCgpLmFkZFRhc2sodGFzaylcbiAgICAvLyBjb25zb2xlLmxvZyhyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKSlcbiAgICBzZXRUaW1lb3V0KGFuaW1hdGVPcHRpb25zLCAxMCk7XG4gICAgc2V0VGltZW91dChyZW1vdmVPdmVybGF5LCA1MDApO1xuICAgIHJlbW92ZVRhc2tzKClcbiAgICBjaGFuZ2VUYXNrcygpXG59XG5cbmV4cG9ydCBjb25zdCBuZXdUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS10YXNrJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlcicsICdzaGFkb3ctbGcnKVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ld1Rhc2snKVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHNldEF0dHJpYnV0ZXMoaW5wdXQsIHsndHlwZSc6ICd0ZXh0JywgJ2lkJzogJ25ld1Rhc2snLCAnbmFtZSc6ICduZXdUYXNrJ30pXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG4gICAgZm9ybS5hcHBlbmQobGFiZWwsIGlucHV0LCBidXR0b24pXG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChmb3JtKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgIHNldFRpbWVvdXQoYW5pbWF0ZUZvcm0sIDEwKVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Rhc2spXG4gICAgY2FuY2VsT3B0aW9ucygpO1xufSIsImltcG9ydCB7IHJlbW92ZUNoaWxkcmVuIH0gZnJvbSBcIi4uL2F1eGlsaWFyeS9yZW1vdmVDaGlsZHJlblwiO1xuaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuXG5jb25zdCBhbmltYXRlT3B0aW9ucyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy13cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnb3B0aW9ucy13cmFwcGVyLWFuaW1hdGUnKTtcbn1cblxuY29uc3QgcmVtb3ZlT3ZlcmxheSA9ICgpID0+IHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxuICAgIG92ZXJsYXkucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvdmVybGF5KVxufVxuXG5jb25zdCByZW1vdmVMaXN0VGl0bGUgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtbmFtZScpLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmNvbnN0IGNoYW5nZUxpc3RUaXRsZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1uYW1lJykudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5BY3RpdmVMaXN0KCkubmFtZX1gO1xufVxuXG5jb25zdCByZW1vdmVUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgICByZW1vdmVDaGlsZHJlbih0YXNrKTtcbn1cblxuY29uc3QgZmlsdGVyVGFzayA9ICh0YXNrLCBwKSA9PiB7XG4gICAgaWYocmV0dXJuQWN0aXZlTGlzdCgpLmdldENyb3NzZWRPdXQoKS5maWx0ZXIoZSA9PiBlID09IHRhc2spWzBdKSBwLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKVxufVxuXG5jb25zdCBjaGFuZ2VUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2std3JhcHBlcicsICd3LWZ1bGwnKVxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGApO1xuICAgICAgICBjb25zdCB0YXNrID0gYCR7cmV0dXJuQWN0aXZlTGlzdCgpLmdldFRhc2tzKClbaV19YFxuICAgICAgICBwLnRleHRDb250ZW50ID0gdGFzaztcbiAgICAgICAgZmlsdGVyVGFzayh0YXNrLCBwKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbGF0aXZlJylcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48c3ZnIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY29sb3I9XCIjMDAwMDAwXCI+PHBhdGggZD1cIk05LjE3MiAxNC44MjhMMTIuMDAxIDEybTIuODI4LTIuODI4TDEyLjAwMSAxMm0wIDBMOS4xNzIgOS4xNzJNMTIuMDAxIDEybDIuODI4IDIuODI4TTEyIDIyYzUuNTIzIDAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTB6XCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD48L3N2Zz4nO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnY2xvc2UnLCAnYWJzb2x1dGUnLCAndy1mdWxsJywgJ2gtZnVsbCcpXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgICAgICB0YXNrV3JhcHBlci5hcHBlbmQocCwgYnV0dG9uKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuaW5zZXJ0QmVmb3JlKHRhc2tDb250YWluZXIsIGJ0bik7XG59XG5cbmNvbnN0IGNhbmNlbE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheScpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFuaW1hdGVPcHRpb25zLCAxMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZU92ZXJsYXksIDUwMCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgeyBmaWx0ZXJUYXNrLCBjYW5jZWxPcHRpb25zLCBhbmltYXRlT3B0aW9ucywgcmVtb3ZlT3ZlcmxheSwgcmVtb3ZlTGlzdFRpdGxlLCBjaGFuZ2VMaXN0VGl0bGUsIHJlbW92ZVRhc2tzLCBjaGFuZ2VUYXNrcyB9IiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCIuLi9saXN0L2xpc3RzXCI7XG5pbXBvcnQgeyByZXR1cm5BY3RpdmVMaXN0IH0gZnJvbSBcIi4uL2F1eGlsaWFyeS9yZXR1cm5BY3RpdmVMaXN0XCI7XG5pbXBvcnQgeyBhbmltYXRlT3B0aW9ucywgcmVtb3ZlT3ZlcmxheSwgcmVtb3ZlTGlzdFRpdGxlLCBjaGFuZ2VMaXN0VGl0bGUsIHJlbW92ZVRhc2tzLCBjaGFuZ2VUYXNrcyB9IGZyb20gXCIuL29wdGlvbnNGdW5jdGlvbnNcIjtcblxuY29uc3Qgc2VsZWN0TGlzdCA9IChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtaXRlbScpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3RpdmUnKS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ2FjdGl2ZScpO1xuICAgICAgICBpZihyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0SXNBY3RpdmUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm5BY3RpdmVMaXN0KCkuc2V0QWN0aXZlRmFsc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gbGlzdFtpXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgbGlzdFtpXS5zZXRBY3RpdmVUcnVlKCk7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FjdGl2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGFuaW1hdGVPcHRpb25zLCAxMDApO1xuICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZU92ZXJsYXksIDUwMCk7XG4gICAgICAgIHJlbW92ZUxpc3RUaXRsZSgpO1xuICAgICAgICBjaGFuZ2VMaXN0VGl0bGUoKTtcbiAgICAgICAgcmVtb3ZlVGFza3MoKTtcbiAgICAgICAgY2hhbmdlVGFza3MoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7c2VsZWN0TGlzdCwgcmVtb3ZlVGFza3MsIGNoYW5nZVRhc2tzfSIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi4vbGlzdC9saXN0c1wiO1xuaW1wb3J0IHsgc2VsZWN0TGlzdCB9IGZyb20gXCIuL3NlbGVjdExpc3RcIjtcbmltcG9ydCB7IGRlbGV0ZUxpc3QgfSBmcm9tIFwiLi4vbGlzdC9kZWxldGVMaXN0XCI7XG5pbXBvcnQgeyBjYW5jZWxPcHRpb25zIH0gZnJvbSBcIi4uL29wdGlvbnMvb3B0aW9uc0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBhbmltYXRlVmlld0xpc3QgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtd3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlci1hbmltYXRlJyk7XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3TGlzdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKVxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpXG4gICAgY29uc3Qgdmlld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHZpZXdMaXN0LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlcicsICdzaGFkb3ctbGcnKVxuICAgIHNldFRpbWVvdXQoYW5pbWF0ZVZpZXdMaXN0LCAxMClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBpZihsaXN0W2ldLmdldElzQWN0aXZlKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScsICdzaGFkb3ctbGcnKVxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtsaXN0W2ldLm5hbWV9YFxuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ3JlbGF0aXZlJylcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxzdmcgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjb2xvcj1cIiMwMDAwMDBcIj48cGF0aCBkPVwiTTkuMTcyIDE0LjgyOEwxMi4wMDEgMTJtMi44MjgtMi44MjhMMTIuMDAxIDEybTAgMEw5LjE3MiA5LjE3Mk0xMi4wMDEgMTJsMi44MjggMi44MjhNMTIgMjJjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMHpcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPjwvc3ZnPic7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhYnNvbHV0ZScsICd3LWZ1bGwnLCAnaC1mdWxsJylcbiAgICAgICAgY2xvc2UuYXBwZW5kQ2hpbGQob3ZlcmxheSlcbiAgICAgICAgYnV0dG9uLmFwcGVuZChwLCBjbG9zZSlcbiAgICAgICAgdmlld0xpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUxpc3QpXG4gICAgfVxuICAgIG92ZXJsYXkuYXBwZW5kKHZpZXdMaXN0KVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgIHZpZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0TGlzdClcbiAgICBjYW5jZWxPcHRpb25zKClcbn0iLCJpbXBvcnQgeyBidG4gfSBmcm9tIFwiLi4vYnV0dG9uL2J0blwiO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnLCAnZmxleCcsICd3LWZ1bGwnLCAnaC1mdWxsJywgJ2p1c3RpZnktZW5kJywgJ2l0ZW1zLWNlbnRlcicsICdweC04JywgJ3B5LTQnLCAncmVsYXRpdmUnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JvdW5kZWQtZnVsbCcsICd3LTEyJywgJ2gtMTInLCAnYmctZ3JlZW4tNDAwJywgJ3NoYWRvdy1sZycsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdnYXAtMScsICdhY3RpdmU6YmctZ3JlZW4tMzAwJywpO1xuICAgIGNvbnN0IGxpbmUwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZTAuY2xhc3NMaXN0LmFkZCgnaC0wLjUnLCAndy01JywgJ2JnLXdoaXRlJyk7XG4gICAgY29uc3QgbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5lMS5jbGFzc0xpc3QuYWRkKCdoLTAuNScsICd3LTUnLCAnYmctd2hpdGUnKTtcbiAgICBjb25zdCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmUyLmNsYXNzTGlzdC5hZGQoJ2gtMC41JywgJ3ctNScsICdiZy13aGl0ZScpO1xuICAgIGJ1dHRvbi5hcHBlbmQobGluZTAsIGxpbmUxLCBsaW5lMik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bik7XG59IiwiaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuXG5jb25zdCBsaW5lVGhyb3VnaCA9IChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5lJykpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbGluZScpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbGluZScpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBjcm9zc091dCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGlmKGUudGFyZ2V0LmxvY2FsTmFtZSA9PSAncCcpIHtcbiAgICAgICAgaWYocmV0dXJuQWN0aXZlTGlzdCgpLmdldENyb3NzZWRPdXQoKS5maWx0ZXIoZSA9PiBlID09IHRhc2spWzBdKSB7XG4gICAgICAgICAgICByZXR1cm5BY3RpdmVMaXN0KCkudW5kb0Nyb3NzT3V0KHRhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuQWN0aXZlTGlzdCgpLmNyb3NzT3V0VGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KGxpbmVUaHJvdWdoKGUpLCAxMClcbiAgICB9XG59IiwiaW1wb3J0IHsgbGlzdFRpdGxlIH0gZnJvbSBcIi4vbGlzdFRpdGxlXCI7XG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcblxuZXhwb3J0IGNvbnN0IGRlZiA9ICgpID0+IHtcbiAgICBsaXN0VGl0bGUoKTtcbiAgICB0YXNrcygpO1xuICAgIGJ1dHRvbigpO1xufSIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi4vbGlzdC9saXN0c1wiO1xuaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuXG5leHBvcnQgY29uc3QgbGlzdFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGAke3JldHVybkFjdGl2ZUxpc3QoKS5uYW1lfWA7XG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnbGlzdC1uYW1lJywgJ3RleHQtY2VudGVyJywgJ3RleHQtNHhsJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChoMyk7XG59IiwiaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuaW1wb3J0IHsgZGVsZXRlVGFzayB9IGZyb20gXCIuLi9saXN0L2RlbGV0ZVRhc2tcIjtcbmltcG9ydCB7IGNyb3NzT3V0IH0gZnJvbSBcIi4vY3Jvc3NPdXRcIjtcbmltcG9ydCB7IGZpbHRlclRhc2sgfSBmcm9tIFwiLi4vb3B0aW9ucy9vcHRpb25zRnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBjb25zdCB0YXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snLCAnZmxleCcsICdmbGV4LWNvbCcsICdpdGVtcy1jZW50ZXInLCAnZ2FwLTMnLCAndGV4dC14bCcpXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2std3JhcHBlcicsICd3LWZ1bGwnKVxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGApO1xuICAgICAgICBjb25zdCB0YXNrID0gYCR7cmV0dXJuQWN0aXZlTGlzdCgpLmdldFRhc2tzKClbaV19YFxuICAgICAgICBwLnRleHRDb250ZW50ID0gdGFzaztcbiAgICAgICAgZmlsdGVyVGFzayh0YXNrLCBwKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbGF0aXZlJylcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48c3ZnIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY29sb3I9XCIjMDAwMDAwXCI+PHBhdGggZD1cIk05LjE3MiAxNC44MjhMMTIuMDAxIDEybTIuODI4LTIuODI4TDEyLjAwMSAxMm0wIDBMOS4xNzIgOS4xNzJNMTIuMDAxIDEybDIuODI4IDIuODI4TTEyIDIyYzUuNTIzIDAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTB6XCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD48L3N2Zz4nO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnY2xvc2UnLCAnYWJzb2x1dGUnLCAndy1mdWxsJywgJ2gtZnVsbCcpXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgICAgICB0YXNrV3JhcHBlci5hcHBlbmQocCwgYnV0dG9uKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XG4gICAgfVxuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyb3NzT3V0KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGRlZiB9IGZyb20gXCIuL3VpL2RlZmF1bHRcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRlZik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9