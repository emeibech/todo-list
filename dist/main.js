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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.list-item {\n  display: list-item;\n}\n.hidden {\n  display: none;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-full {\n  height: 100%;\n}\n.h-14 {\n  height: 3.5rem;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-full {\n  width: 100%;\n}\n.w-14 {\n  width: 3.5rem;\n}\n.w-7 {\n  width: 1.75rem;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.resize {\n  resize: both;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.place-items-center {\n  align-items: center;\n  justify-items: center;\n  place-items: center;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border {\n  border-width: 1px;\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-green-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(134, 239, 172, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.underline {\n  text-decoration-line: underline;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n:root {\n --doc-height: 100%;\n}\n\nhtml,\nbody {\n height: 100vh; /* fallback for Js load */\n height: 100%;\n height: var(--doc-height);\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: 20% 60% 20%;\n    overflow: hidden;\n    border: 1px solid salmon;\n}\n\n.btn {\n    overflow: hidden;\n    position: fixed;\n    bottom: 10%;\n    transition: all 500ms;\n}\n\n.btn-hide {\n    width: 0;\n    height: 0;\n    transition: all 500ms;\n}\n\n.options {\n    width: 6rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: white;\n    font-weight: bolder;\n    text-align: center;\n    transform: translateY(10%);\n    position: absolute;\n    bottom: 40%;\n}\n\n.animate-options {\n    width: 8rem;\n    transform: translateY(0%);\n    transition: all 500ms;\n}\n\n.animate-options-hide {\n    width: 0;}\n\n.options button {\n    background-color: rgb(110, 231, 183);\n    border-radius: 16px;\n    padding: 4px;\n}\n\n.options button:hover {\n    background-color: rgb(115, 236, 188);\n}\n\n.options button:active {\n    background-color: rgb(105, 226, 178);\n}\n\n\n/* overlay */\n.overlay {\n    width: 100vw;\n    height: 100vh;\n    /* border: 1px solid skyblue; */\n    position: absolute;\n    /* background-color: rgba(236, 253, 245, 0.1); */\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    place-items: center;\n}\n\n.options-wrapper {\n    width: 0;\n    height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    background-color: rgb(167, 243, 208);\n    display: flex;\n    flex-direction: column;\n    /* flex-wrap: wrap; */\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1rem;\n    overflow: scroll;\n    transition: all 500ms;\n}\n\n.options-wrapper-animate {\n    width: max(300px, min(calc(180px + 23vh), 420px));\n    height: max(300px, min(calc(180px + 23vh), 420px));\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    transition: all 500ms;\n}\n\n#form-list,\n#form-task {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    height: max(100px, min(calc(45px + 24vh), 420px));\n    overflow: hidden;\n    justify-content: center;\n    /* font-weight: bolder; */\n    color: rgb(60, 60, 60);\n}\n\n.list-item {\n    /* border: 1px solid saddlebrown; */\n    /* font-weight: bolder; */\n    width: max(6rem, min(calc(6rem + 24vh), 12rem));\n    color: rgb(44, 44, 44);\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border-radius: 3rem;\n    background-color: rgb(240, 240, 240);\n    display: grid;\n    grid-template-columns: 80% 20%;\n    grid-gap: 1rem;\n    gap: 1rem;\n}\n\n.list-item div {\n    /* border: 1px solid forestgreen; */\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    place-items: center;\n}\n\n.list-item svg {fill: rgb(187, 61, 61);}\n\n.list-item path {stroke: rgb(240, 240, 240);}\n\n\n#active {background-color: rgb(0, 235, 235);}\n#active:hover {background-color: rgb(0, 245, 245);}\n#active:active {background-color: rgb(0, 230, 230);}\n\n.list-item:hover {background-color: rgb(230, 230, 230)}\n.list-item:active {background-color: rgb(225, 225, 225)}\n\nlabel {font-size: 1.5rem;}\n\ninput {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    font-size: 1.1rem;\n    width: max(180px, min(calc(150px + 30vw), 300px));\n    border-bottom: 1px solid rgb(170, 170, 170);\n    background-color: rgb(167, 243, 208);\n}\n\ninput:focus {\n    outline: none;\n}\n\n.option-btn, \n#form-list button,\n#form-task button {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    background-color: rgb(20, 224, 224);\n    font-size: 1.1rem;\n}\n\n/* tasks */\n.task {\n    width: max(135px, min(calc(145px + 26vh), 420px));\n    /* border: 1px dotted seagreen; */\n}\n\n.task-wrapper {\n    /* border: 1px solid slateblue; */\n    display: grid;\n    grid-template-columns: 90% 10%;\n    cursor: pointer;\n}\n\n.task-wrapper p {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    transition: all 250ms;\n}\n\n.task-wrapper button {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    place-items: center;\n    /* border: 1px solid fuchsia; */\n}\n\n.line {\n    text-decoration: line-through;\n    opacity: 0.5;\n    color: rgb(80, 80, 80);\n    transition: all 250ms;\n}\n\npath {stroke-width: 1.8;}\n\n@media only screen and (min-width: 640px) {\n\n    body {\n        background-color: #ddedea;\n        display: grid;\n        align-content: center;\n        justify-content: center;\n        place-content: center;\n        align-items: center;\n        justify-items: center;\n        place-items: center;\n        margin-top: 2rem;\n    }\n\n    .wrapper {\n        width: 640px;\n        height: 768px;\n        background-color: rgb(240, 240, 240);\n        border-radius: 3rem;\n        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\t\n    }\n\n    .btn {position: static;}\n}\n\n.active\\:bg-green-400:active {\n  --tw-bg-opacity: 1;\n  background-color: rgba(74, 222, 128, var(--tw-bg-opacity));\n}", "",{"version":3,"sources":["webpack://./src/styles.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n --doc-height: 100%;\n}\n\nhtml,\nbody {\n height: 100vh; /* fallback for Js load */\n height: var(--doc-height);\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: 20% 60% 20%;\n    overflow: hidden;\n    border: 1px solid salmon;\n}\n\n.btn {\n    overflow: hidden;\n    position: fixed;\n    bottom: 10%;\n    transition: all 500ms;\n}\n\n.btn-hide {\n    width: 0;\n    height: 0;\n    transition: all 500ms;\n}\n\n.options {\n    width: 6rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: white;\n    font-weight: bolder;\n    text-align: center;\n    transform: translateY(10%);\n    position: absolute;\n    bottom: 40%;\n}\n\n.animate-options {\n    width: 8rem;\n    transform: translateY(0%);\n    transition: all 500ms;\n}\n\n.animate-options-hide {\n    width: 0;}\n\n.options button {\n    background-color: rgb(110, 231, 183);\n    border-radius: 16px;\n    padding: 4px;\n}\n\n.options button:hover {\n    background-color: rgb(115, 236, 188);\n}\n\n.options button:active {\n    background-color: rgb(105, 226, 178);\n}\n\n\n/* overlay */\n.overlay {\n    width: 100vw;\n    height: 100vh;\n    /* border: 1px solid skyblue; */\n    position: absolute;\n    /* background-color: rgba(236, 253, 245, 0.1); */\n    display: grid;\n    place-items: center;\n}\n\n.options-wrapper {\n    width: 0;\n    height: 0;\n    padding-block: 0;\n    padding-inline: 0;\n    background-color: rgb(167, 243, 208);\n    display: flex;\n    flex-direction: column;\n    /* flex-wrap: wrap; */\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1rem;\n    overflow: scroll;\n    transition: all 500ms;\n}\n\n.options-wrapper-animate {\n    width: clamp(300px, calc(180px + 23vh), 420px);\n    height: clamp(300px, calc(180px + 23vh), 420px);\n    padding-block: 2rem;\n    padding-inline: 2rem;\n    transition: all 500ms;\n}\n\n#form-list,\n#form-task {\n    padding-block: 1rem;\n    height: clamp(100px, calc(45px + 24vh), 420px);\n    overflow: hidden;\n    justify-content: center;\n    /* font-weight: bolder; */\n    color: rgb(60, 60, 60);\n}\n\n.list-item {\n    /* border: 1px solid saddlebrown; */\n    /* font-weight: bolder; */\n    width: clamp(6rem, calc(6rem + 24vh), 12rem);\n    color: rgb(44, 44, 44);\n    padding-block: 0.25rem;\n    padding-inline: 1rem;\n    border-radius: 3rem;\n    background-color: rgb(240, 240, 240);\n    display: grid;\n    grid-template-columns: 80% 20%;\n    gap: 1rem;\n}\n\n.list-item div {\n    /* border: 1px solid forestgreen; */\n    display: grid;\n    place-items: center;\n}\n\n.list-item svg {fill: rgb(187, 61, 61);}\n\n.list-item path {stroke: rgb(240, 240, 240);}\n\n\n#active {background-color: rgb(0, 235, 235);}\n#active:hover {background-color: rgb(0, 245, 245);}\n#active:active {background-color: rgb(0, 230, 230);}\n\n.list-item:hover {background-color: rgb(230, 230, 230)}\n.list-item:active {background-color: rgb(225, 225, 225)}\n\nlabel {font-size: 1.5rem;}\n\ninput {\n    padding-inline: 0.5rem;\n    font-size: 1.1rem;\n    width: clamp(180px, calc(150px + 30vw), 300px);\n    border-bottom: 1px solid rgb(170, 170, 170);\n    background-color: rgb(167, 243, 208);\n}\n\ninput:focus {\n    outline: none;\n}\n\n.option-btn, \n#form-list button,\n#form-task button {\n    padding-block: 0.5rem;\n    padding-inline: 1rem;\n    background-color: rgb(20, 224, 224);\n    font-size: 1.1rem;\n}\n\n/* tasks */\n.task {\n    width: clamp(135px, calc(145px + 26vh), 420px);\n    /* border: 1px dotted seagreen; */\n}\n\n.task-wrapper {\n    /* border: 1px solid slateblue; */\n    display: grid;\n    grid-template-columns: 90% 10%;\n    cursor: pointer;\n}\n\n.task-wrapper p {\n    padding-inline: 0.5rem;\n    transition: all 250ms;\n}\n\n.task-wrapper button {\n    display: grid;\n    place-items: center;\n    /* border: 1px solid fuchsia; */\n}\n\n.line {\n    text-decoration: line-through;\n    opacity: 0.5;\n    color: rgb(80, 80, 80);\n    transition: all 250ms;\n}\n\npath {stroke-width: 1.8;}\n\n@media only screen and (min-width: 640px) {\n\n    body {\n        background-color: #ddedea;\n        display: grid;\n        place-content: center;\n        place-items: center;\n        margin-top: 2rem;\n    }\n\n    .wrapper {\n        width: 640px;\n        height: 768px;\n        background-color: rgb(240, 240, 240);\n        border-radius: 3rem;\n        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\t\n    }\n\n    .btn {position: static;}\n}",null],"sourceRoot":""}]);
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

defaultList.addTask('Click the green button to add a new task or create a new list [1]');



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
    nav.classList.add('nav', 'flex', 'w-full', 'h-full', 'justify-end', 'px-8', 'py-4', 'relative');
    const button = document.createElement('button');
    button.classList.add('btn', 'rounded-full', 'w-14', 'h-14', 'bg-green-300', 'shadow-lg', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-1.5', 'active:bg-green-400',);
    const line0 = document.createElement('div');
    line0.classList.add('h-1', 'w-7', 'bg-white');
    const line1 = document.createElement('div');
    line1.classList.add('h-1', 'w-7', 'bg-white');
    const line2 = document.createElement('div');
    line2.classList.add('h-1', 'w-7', 'bg-white');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLHNCQUFzQixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssZ0JBQWdCLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLGFBQWEsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLHlCQUF5QiwyQkFBMkIsdUJBQXVCLHVCQUF1QiwwQkFBMEIs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LElBQUksNkVBQWdCLHNCQUFzQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkVBQWdCLGlCQUFpQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCx3REFBVTtBQUN4RSw4REFBOEQsK0NBQVE7QUFDdEU7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNhOztBQUVuQyw4Q0FBOEMsNENBQUcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3N0eWxlcy5jc3M/YThkMCIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9hdXhpbGlhcnkvcmVtb3ZlQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2F1eGlsaWFyeS9yZXR1cm5BY3RpdmVMaXN0LmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9hdXhpbGlhcnkvc2V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvYnV0dG9uL2J0bi5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvYnV0dG9uL25hdi5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvYnV0dG9uL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL2xpc3QvZGVsZXRlTGlzdC5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvbGlzdC9kZWxldGVUYXNrLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9saXN0L2xpc3RzLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9vcHRpb25zL25ld0xpc3QuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL29wdGlvbnMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvLi9zcmMvb3B0aW9ucy9vcHRpb25zRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9vcHRpb25zL3NlbGVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL29wdGlvbnMvdmlld0xpc3RzLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy91aS9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3VpL2Nyb3NzT3V0LmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy91aS9kZWZhdWx0LmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy91aS9saXN0VGl0bGUuanMiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50Ly4vc3JjL3VpL3Rhc2tzLmpzIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGV2LWVudmlyb25tZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXYtZW52aXJvbm1lbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Rldi1lbnZpcm9ubWVudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4yLjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQgY3VycmVudENvbG9yO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQgY3VycmVudENvbG9yO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4udmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uY29sbGFwc2Uge1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxufVxcbi5zdGF0aWMge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGFibGUge1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5jb250ZW50cyB7XFxuICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmgtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5oLWZ1bGwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaC0xNCB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuLmgtMSB7XFxuICBoZWlnaHQ6IDAuMjVyZW07XFxufVxcbi53LXNjcmVlbiB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi53LTE0IHtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcbi53LTcge1xcbiAgd2lkdGg6IDEuNzVyZW07XFxufVxcbi5ib3JkZXItY29sbGFwc2Uge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLnRyYW5zZm9ybSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuLnJlc2l6ZSB7XFxuICByZXNpemU6IGJvdGg7XFxufVxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZmxleC13cmFwIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnBsYWNlLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2FwLTEge1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG4uZ2FwLTMge1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG4uZ2FwLTFcXFxcLjUge1xcbiAgZ2FwOiAwLjM3NXJlbTtcXG59XFxuLnJvdW5kZWQtZnVsbCB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcbi5ib3JkZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5iZy1ncmF5LTEwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyZWVuLTMwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNCwgMjM5LCAxNzIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXdoaXRlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucHgtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG4ucHktNCB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGV4dC00eGwge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG59XFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi51bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG59XFxuLnNoYWRvdy1sZyB7XFxuICAtLXR3LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMTBweCAxNXB4IC0zcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCA0cHggNnB4IC00cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4ub3V0bGluZSB7XFxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG59XFxuLmZpbHRlciB7XFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcbi50cmFuc2l0aW9uIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcblxcbjpyb290IHtcXG4gLS1kb2MtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiBoZWlnaHQ6IDEwMHZoOyAvKiBmYWxsYmFjayBmb3IgSnMgbG9hZCAqL1xcbiBoZWlnaHQ6IDEwMCU7XFxuIGhlaWdodDogdmFyKC0tZG9jLWhlaWdodCk7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNjAlIDIwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2FsbW9uO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDEwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4uYnRuLWhpZGUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNDAlO1xcbn1cXG5cXG4uYW5pbWF0ZS1vcHRpb25zIHtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcXG59XFxuXFxuLmFuaW1hdGUtb3B0aW9ucy1oaWRlIHtcXG4gICAgd2lkdGg6IDA7fVxcblxcbi5vcHRpb25zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDIzMSwgMTgzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4ub3B0aW9ucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE1LCAyMzYsIDE4OCk7XFxufVxcblxcbi5vcHRpb25zIGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAyMjYsIDE3OCk7XFxufVxcblxcblxcbi8qIG92ZXJsYXkgKi9cXG4ub3ZlcmxheSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgc2t5Ymx1ZTsgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjUzLCAyNDUsIDAuMSk7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbnMtd3JhcHBlciB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAyNDMsIDIwOCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcXG59XFxuXFxuLm9wdGlvbnMtd3JhcHBlci1hbmltYXRlIHtcXG4gICAgd2lkdGg6IG1heCgzMDBweCwgbWluKGNhbGMoMTgwcHggKyAyM3ZoKSwgNDIwcHgpKTtcXG4gICAgaGVpZ2h0OiBtYXgoMzAwcHgsIG1pbihjYWxjKDE4MHB4ICsgMjN2aCksIDQyMHB4KSk7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XFxufVxcblxcbiNmb3JtLWxpc3QsXFxuI2Zvcm0tdGFzayB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgaGVpZ2h0OiBtYXgoMTAwcHgsIG1pbihjYWxjKDQ1cHggKyAyNHZoKSwgNDIwcHgpKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICovXFxuICAgIGNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBzYWRkbGVicm93bjsgKi9cXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGRlcjsgKi9cXG4gICAgd2lkdGg6IG1heCg2cmVtLCBtaW4oY2FsYyg2cmVtICsgMjR2aCksIDEycmVtKSk7XFxuICAgIGNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDIwJTtcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmxpc3QtaXRlbSBkaXYge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBmb3Jlc3RncmVlbjsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHN2ZyB7ZmlsbDogcmdiKDE4NywgNjEsIDYxKTt9XFxuXFxuLmxpc3QtaXRlbSBwYXRoIHtzdHJva2U6IHJnYigyNDAsIDI0MCwgMjQwKTt9XFxuXFxuXFxuI2FjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIzNSwgMjM1KTt9XFxuI2FjdGl2ZTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI0NSwgMjQ1KTt9XFxuI2FjdGl2ZTphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMzAsIDIzMCk7fVxcblxcbi5saXN0LWl0ZW06aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKX1cXG4ubGlzdC1pdGVtOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpfVxcblxcbmxhYmVsIHtmb250LXNpemU6IDEuNXJlbTt9XFxuXFxuaW5wdXQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgd2lkdGg6IG1heCgxODBweCwgbWluKGNhbGMoMTUwcHggKyAzMHZ3KSwgMzAwcHgpKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzAsIDE3MCwgMTcwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMjQzLCAyMDgpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5vcHRpb24tYnRuLCBcXG4jZm9ybS1saXN0IGJ1dHRvbixcXG4jZm9ybS10YXNrIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMjQsIDIyNCk7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4vKiB0YXNrcyAqL1xcbi50YXNrIHtcXG4gICAgd2lkdGg6IG1heCgxMzVweCwgbWluKGNhbGMoMTQ1cHggKyAyNnZoKSwgNDIwcHgpKTtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIHNlYWdyZWVuOyAqL1xcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgc2xhdGVibHVlOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2std3JhcHBlciBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbn1cXG5cXG4udGFzay13cmFwcGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZnVjaHNpYTsgKi9cXG59XFxuXFxuLmxpbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjb2xvcjogcmdiKDgwLCA4MCwgODApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxufVxcblxcbnBhdGgge3N0cm9rZS13aWR0aDogMS44O31cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZWRlYTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogNjQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDc2OHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICAgIC0tdHctc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XFx0XFxuICAgIH1cXG5cXG4gICAgLmJ0biB7cG9zaXRpb246IHN0YXRpYzt9XFxufVxcblxcbi5hY3RpdmVcXFxcOmJnLWdyZWVuLTQwMDphY3RpdmUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMjIyLCAxMjgsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsd1JBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsMEJBQWM7RUFBZCxzREFBYztVQUFkLDhDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7RUFBZCxZQUFjO0FBQUE7O0FBQWQsd0VBQWM7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDtFQUFBLHdCQUFjO0VBQWQsd0JBQWM7RUFBZCxtQkFBYztFQUFkLG1CQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsZUFBYztFQUFkLGVBQWM7RUFBZCxhQUFjO0VBQWQsYUFBYztFQUFkLGtCQUFjO0VBQWQsc0NBQWM7RUFBZCxlQUFjO0VBQWQsb0JBQWM7RUFBZCxzQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCxrQkFBYztFQUFkLDJCQUFjO0VBQWQsNEJBQWM7RUFBZCx3Q0FBYztFQUFkLDBDQUFjO0VBQWQsbUNBQWM7RUFBZCw4QkFBYztFQUFkLHNDQUFjO0VBQWQsWUFBYztFQUFkLGtCQUFjO0VBQWQsZ0JBQWM7RUFBZCxpQkFBYztFQUFkLGtCQUFjO0VBQWQsY0FBYztFQUFkLGdCQUFjO0VBQWQsYUFBYztFQUFkLG1CQUFjO0VBQWQscUJBQWM7RUFBZCwyQkFBYztFQUFkLHlCQUFjO0VBQWQsMEJBQWM7RUFBZCwyQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCx5QkFBYztFQUFkO0FBQWM7O0FBQWQ7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsd0NBQWM7RUFBZCwwQ0FBYztFQUFkLG1DQUFjO0VBQWQsOEJBQWM7RUFBZCxzQ0FBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZDtBQUFjO0FBRWQ7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFB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bUJBQXFCO0lBQXJCLHNCQUFxQjtJQUNyQixrQkFBb0I7SUFBcEIsbUJBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxpQkFBaUI7QUFDckI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksaURBQThDO0lBQzlDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBc0I7SUFBdEIscUJBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFBbkIscUJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUEsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFeEI7O0lBRUk7UUFDSSx5QkFBeUI7UUFDekIsYUFBYTtRQUNiLHFCQUFxQjtRQUFyQix1QkFBcUI7UUFBckIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUFuQixxQkFBbUI7UUFBbkIsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isb0NBQW9DO1FBQ3BDLG1CQUFtQjtRQUNuQixrREFBa0Q7UUFDbEQsa0VBQXVHO1FBQXZHLHVIQUF1RztJQUMzRzs7SUFFQSxNQUFNLGdCQUFnQixDQUFDO0FBQzNCOztBQWhPQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbjpyb290IHtcXG4gLS1kb2MtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiBoZWlnaHQ6IDEwMHZoOyAvKiBmYWxsYmFjayBmb3IgSnMgbG9hZCAqL1xcbiBoZWlnaHQ6IHZhcigtLWRvYy1oZWlnaHQpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDYwJSAyMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNhbG1vbjtcXG59XFxuXFxuLmJ0biB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAxMCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcXG59XFxuXFxuLmJ0bi1oaWRlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDQwJTtcXG59XFxuXFxuLmFuaW1hdGUtb3B0aW9ucyB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XFxufVxcblxcbi5hbmltYXRlLW9wdGlvbnMtaGlkZSB7XFxuICAgIHdpZHRoOiAwO31cXG5cXG4ub3B0aW9ucyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEwLCAyMzEsIDE4Myk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLm9wdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNSwgMjM2LCAxODgpO1xcbn1cXG5cXG4ub3B0aW9ucyBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMjI2LCAxNzgpO1xcbn1cXG5cXG5cXG4vKiBvdmVybGF5ICovXFxuLm92ZXJsYXkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNreWJsdWU7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDI1MywgMjQ1LCAwLjEpOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9ucy13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy1ibG9jazogMDtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDI0MywgMjA4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xcbn1cXG5cXG4ub3B0aW9ucy13cmFwcGVyLWFuaW1hdGUge1xcbiAgICB3aWR0aDogY2xhbXAoMzAwcHgsIGNhbGMoMTgwcHggKyAyM3ZoKSwgNDIwcHgpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDMwMHB4LCBjYWxjKDE4MHB4ICsgMjN2aCksIDQyMHB4KTtcXG4gICAgcGFkZGluZy1ibG9jazogMnJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDJyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcztcXG59XFxuXFxuI2Zvcm0tbGlzdCxcXG4jZm9ybS10YXNrIHtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgxMDBweCwgY2FsYyg0NXB4ICsgMjR2aCksIDQyMHB4KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICovXFxuICAgIGNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBzYWRkbGVicm93bjsgKi9cXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGRlcjsgKi9cXG4gICAgd2lkdGg6IGNsYW1wKDZyZW0sIGNhbGMoNnJlbSArIDI0dmgpLCAxMnJlbSk7XFxuICAgIGNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XFxuICAgIHBhZGRpbmctYmxvY2s6IDAuMjVyZW07XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDIwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtIGRpdiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGZvcmVzdGdyZWVuOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHN2ZyB7ZmlsbDogcmdiKDE4NywgNjEsIDYxKTt9XFxuXFxuLmxpc3QtaXRlbSBwYXRoIHtzdHJva2U6IHJnYigyNDAsIDI0MCwgMjQwKTt9XFxuXFxuXFxuI2FjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIzNSwgMjM1KTt9XFxuI2FjdGl2ZTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI0NSwgMjQ1KTt9XFxuI2FjdGl2ZTphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMzAsIDIzMCk7fVxcblxcbi5saXN0LWl0ZW06aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKX1cXG4ubGlzdC1pdGVtOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpfVxcblxcbmxhYmVsIHtmb250LXNpemU6IDEuNXJlbTt9XFxuXFxuaW5wdXQge1xcbiAgICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgd2lkdGg6IGNsYW1wKDE4MHB4LCBjYWxjKDE1MHB4ICsgMzB2dyksIDMwMHB4KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzAsIDE3MCwgMTcwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMjQzLCAyMDgpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5vcHRpb24tYnRuLCBcXG4jZm9ybS1saXN0IGJ1dHRvbixcXG4jZm9ybS10YXNrIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMjI0LCAyMjQpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLyogdGFza3MgKi9cXG4udGFzayB7XFxuICAgIHdpZHRoOiBjbGFtcCgxMzVweCwgY2FsYygxNDVweCArIDI2dmgpLCA0MjBweCk7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBzZWFncmVlbjsgKi9cXG59XFxuXFxuLnRhc2std3JhcHBlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNsYXRlYmx1ZTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCUgMTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXdyYXBwZXIgcCB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG59XFxuXFxuLnRhc2std3JhcHBlciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBmdWNoc2lhOyAqL1xcbn1cXG5cXG4ubGluZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXG59XFxuXFxucGF0aCB7c3Ryb2tlLXdpZHRoOiAxLjg7fVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlZGVhO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiA2NDBweDtcXG4gICAgICAgIGhlaWdodDogNzY4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgICAgLS10dy1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcdFxcbiAgICB9XFxuXFxuICAgIC5idG4ge3Bvc2l0aW9uOiBzdGF0aWM7fVxcbn1cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgcmVtb3ZlQ2hpbGRyZW4gPSAocGFyZW50KSA9PiB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufSIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi4vbGlzdC9saXN0c1wiO1xuXG5leHBvcnQgY29uc3QgcmV0dXJuQWN0aXZlTGlzdCA9ICgpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihsaXN0W2ldLmdldElzQWN0aXZlKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RbaV1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbCwgYXR0cnMpID0+IHtcbiAgICBmb3IodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxufSIsImltcG9ydCB7IG5hdiB9IGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3QgYW5pbWF0ZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMnKS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9wdGlvbnMnKTtcbn1cblxuZXhwb3J0IGNvbnN0IGJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1oaWRlJyk7XG4gICAgbmF2KClcbiAgICBzZXRUaW1lb3V0KGFuaW1hdGVPcHRpb25zLCAxMCk7XG4gICAgLy8gYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3B0aW9ucyk7XG59IiwiXG5cbmV4cG9ydCBjb25zdCBuYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcbiAgICBjb25zdCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuMS50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgY29uc3QgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bjIudGV4dENvbnRlbnQgPSAnTmV3IExpc3QnO1xuICAgIGNvbnN0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4zLnRleHRDb250ZW50ID0gJ1ZpZXcgTGlzdHMnO1xuICAgIHdyYXBwZXIuYXBwZW5kKGJ0bjEsIGJ0bjIsIGJ0bjMpO1xuICAgIG5hdi5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbn0iLCJpbXBvcnQgeyB2aWV3TGlzdHMgfSBmcm9tIFwiLi4vb3B0aW9ucy92aWV3TGlzdHNcIjtcbmltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tIFwiLi4vb3B0aW9ucy9uZXdUYXNrXCI7XG5pbXBvcnQgeyBuZXdMaXN0IH0gZnJvbSBcIi4uL29wdGlvbnMvbmV3TGlzdFwiO1xuXG5jb25zdCByZW1vdmVPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1oaWRlJyk7XG4gICAgbmF2LnJlbW92ZUNoaWxkKG9wdGlvbnMpO1xufVxuXG5jb25zdCBvcHRpb25zTG9naWMgPSAoZSkgPT4ge1xuXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09ICdOZXcgVGFzaycpIHtcbiAgICAgICAgcmVtb3ZlT3B0aW9ucygpO1xuICAgICAgICBuZXdUYXNrKCk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09ICdOZXcgTGlzdCcpIHtcbiAgICAgICAgcmVtb3ZlT3B0aW9ucygpO1xuICAgICAgICBuZXdMaXN0KCk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09ICdWaWV3IExpc3RzJykge1xuICAgICAgICByZW1vdmVPcHRpb25zKCk7XG4gICAgICAgIHZpZXdMaXN0cygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSAoZSkgPT4ge1xuICAgIG9wdGlvbnNMb2dpYyhlKTtcbn0iLCJpbXBvcnQgeyBsaXN0IH0gZnJvbSBcIi4vbGlzdHNcIjtcbmltcG9ydCB7IHJlbW92ZUNoaWxkcmVuIH0gZnJvbSBcIi4uL2F1eGlsaWFyeS9yZW1vdmVDaGlsZHJlblwiO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTGlzdCA9IChlKSA9PiB7XG4gICAgaWYobGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgIGlmKGVsLm5hbWUgPT0gbGlzdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy13cmFwcGVyJylcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgaWYobGlzdFtpXS5nZXRJc0FjdGl2ZSgpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nLCAnc2hhZG93LWxnJylcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtsaXN0W2ldLm5hbWV9YFxuICAgICAgICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgncmVsYXRpdmUnKVxuICAgICAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxzdmcgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjb2xvcj1cIiMwMDAwMDBcIj48cGF0aCBkPVwiTTkuMTcyIDE0LjgyOEwxMi4wMDEgMTJtMi44MjgtMi44MjhMMTIuMDAxIDEybTAgMEw5LjE3MiA5LjE3Mk0xMi4wMDEgMTJsMi44MjggMi44MjhNMTIgMjJjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMHpcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPjwvc3ZnPic7XG4gICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Fic29sdXRlJywgJ3ctZnVsbCcsICdoLWZ1bGwnKVxuICAgICAgICAgICAgY2xvc2UuYXBwZW5kQ2hpbGQob3ZlcmxheSlcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmQocCwgY2xvc2UpXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVMaXN0KVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IHJldHVybkFjdGl2ZUxpc3QgfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L3JldHVybkFjdGl2ZUxpc3RcIjtcblxuLy9kZWxldGUgdGFzayBmcm9tIHRoZSBkb21cbmNvbnN0IGRlbGV0ZVRhc2tVSSA9IChlKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKS5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocmV0dXJuQWN0aXZlTGlzdCgpLmdldFRhc2tzKCkpXG4gICAgaWYoZS50YXJnZXQubG9jYWxOYW1lID09ICdkaXYnKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuQWN0aXZlTGlzdCgpLmRlbGV0ZVRhc2sodGFzaykgLy9kZWxldGUgdGFzayBmcm9tIHRoZSBvYmplY3RcbiAgICAgICAgZGVsZXRlVGFza1VJKGUpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKSlcbn0iLCJjb25zdCBsaXN0ID0gW107XG5cbmNvbnN0IGxpc3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBfdGFza3NBcnIgPSBbXTtcbiAgICBsZXQgX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgX3Rhc2tzQXJyLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCBpID0gX3Rhc2tzQXJyLmluZGV4T2YodGFzayk7XG4gICAgICAgIF90YXNrc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBfdGFza3NBcnI7XG5cbiAgICBjb25zdCBlZGl0VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGQgZnVuY3Rpb24gdG8gZWRpdCB0YXNrcycpXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QWN0aXZlVHJ1ZSA9ICgpID0+IF9pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBjb25zdCBzZXRBY3RpdmVGYWxzZSA9ICgpID0+IF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0SXNBY3RpdmUgPSAoKSA9PiBfaXNBY3RpdmU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBhZGRUYXNrLFxuICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICBnZXRUYXNrcyxcbiAgICAgICAgZWRpdFRhc2tzLFxuICAgICAgICBzZXRBY3RpdmVGYWxzZSxcbiAgICAgICAgc2V0QWN0aXZlVHJ1ZSxcbiAgICAgICAgZ2V0SXNBY3RpdmVcbiAgICB9XG59XG5cbmNvbnN0IGRlZmF1bHRMaXN0ID0gbGlzdEZhY3RvcnkoJ0RvIEl0IE5vdycpO1xubGlzdC5wdXNoKGRlZmF1bHRMaXN0KTtcbmxpc3RbMF0uc2V0QWN0aXZlVHJ1ZSgpO1xuXG5kZWZhdWx0TGlzdC5hZGRUYXNrKCdDbGljayB0aGUgZ3JlZW4gYnV0dG9uIHRvIGFkZCBhIG5ldyB0YXNrIG9yIGNyZWF0ZSBhIG5ldyBsaXN0IFsxXScpO1xuXG5leHBvcnQgeyBsaXN0LCBsaXN0RmFjdG9yeSB9IiwiaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuaW1wb3J0IHsgbGlzdCwgbGlzdEZhY3RvcnkgfSBmcm9tIFwiLi4vbGlzdC9saXN0c1wiO1xuaW1wb3J0IHsgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9hdXhpbGlhcnkvc2V0QXR0cmlidXRlc1wiO1xuaW1wb3J0IHsgY2FuY2VsT3B0aW9ucywgYW5pbWF0ZU9wdGlvbnMsIHJlbW92ZU92ZXJsYXksIHJlbW92ZUxpc3RUaXRsZSwgY2hhbmdlTGlzdFRpdGxlLCByZW1vdmVUYXNrcywgY2hhbmdlVGFza3MgfSBmcm9tIFwiLi4vb3B0aW9ucy9vcHRpb25zRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGFuaW1hdGVGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdvcHRpb25zLXdyYXBwZXItYW5pbWF0ZScpO1xufVxuIFxuY29uc3QgYWRkTmV3TGlzdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3TGlzdCcpLnZhbHVlO1xuICAgIGNvbnN0IG5ld0xpc3QgPSBsaXN0RmFjdG9yeShgJHtsaXN0TmFtZX1gKTtcbiAgICBsaXN0LnB1c2gobmV3TGlzdCk7XG4gICAgc2V0VGltZW91dChhbmltYXRlT3B0aW9ucywgMTApO1xuICAgIHNldFRpbWVvdXQocmVtb3ZlT3ZlcmxheSwgNTAwKTtcbiAgICByZXR1cm5BY3RpdmVMaXN0KCkuc2V0QWN0aXZlRmFsc2UoKTtcbiAgICBuZXdMaXN0LnNldEFjdGl2ZVRydWUoKTtcbiAgICByZW1vdmVMaXN0VGl0bGUoKTtcbiAgICBjaGFuZ2VMaXN0VGl0bGUoKTtcbiAgICByZW1vdmVUYXNrcygpO1xuICAgIGNoYW5nZVRhc2tzKCk7XG59XG5cbmV4cG9ydCBjb25zdCBuZXdMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS1saXN0JylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlcicsICdzaGFkb3ctbGcnKVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ05ldyBMaXN0J1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ld0xpc3QnKVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHNldEF0dHJpYnV0ZXMoaW5wdXQsIHsndHlwZSc6ICd0ZXh0JywgJ2lkJzogJ25ld0xpc3QnLCAnbmFtZSc6ICduZXdMaXN0J30pXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIExpc3QnXG4gICAgZm9ybS5hcHBlbmQobGFiZWwsIGlucHV0LCBidXR0b24pXG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChmb3JtKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgIHNldFRpbWVvdXQoYW5pbWF0ZUZvcm0sIDEwKVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld0xpc3QpXG4gICAgY2FuY2VsT3B0aW9ucygpXG59IiwiaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuaW1wb3J0IHsgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9hdXhpbGlhcnkvc2V0QXR0cmlidXRlc1wiO1xuaW1wb3J0IHsgY2FuY2VsT3B0aW9ucywgY2hhbmdlVGFza3MsIHJlbW92ZVRhc2tzLCByZW1vdmVPdmVybGF5LCBhbmltYXRlT3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNGdW5jdGlvbnNcIjtcblxuY29uc3QgYW5pbWF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtd3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlci1hbmltYXRlJyk7XG59XG5cbmNvbnN0IGFkZE5ld1Rhc2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFzaycpLnZhbHVlXG4gICAgLy8gY29uc29sZS5sb2cocmV0dXJuQWN0aXZlTGlzdCgpLmdldFRhc2tzKCkpXG4gICAgcmV0dXJuQWN0aXZlTGlzdCgpLmFkZFRhc2sodGFzaylcbiAgICAvLyBjb25zb2xlLmxvZyhyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKSlcbiAgICBzZXRUaW1lb3V0KGFuaW1hdGVPcHRpb25zLCAxMCk7XG4gICAgc2V0VGltZW91dChyZW1vdmVPdmVybGF5LCA1MDApO1xuICAgIHJlbW92ZVRhc2tzKClcbiAgICBjaGFuZ2VUYXNrcygpXG59XG5cbmV4cG9ydCBjb25zdCBuZXdUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS10YXNrJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMtd3JhcHBlcicsICdzaGFkb3ctbGcnKVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ld1Rhc2snKVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHNldEF0dHJpYnV0ZXMoaW5wdXQsIHsndHlwZSc6ICd0ZXh0JywgJ2lkJzogJ25ld1Rhc2snLCAnbmFtZSc6ICduZXdUYXNrJ30pXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG4gICAgZm9ybS5hcHBlbmQobGFiZWwsIGlucHV0LCBidXR0b24pXG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChmb3JtKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgIHNldFRpbWVvdXQoYW5pbWF0ZUZvcm0sIDEwKVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Rhc2spXG4gICAgY2FuY2VsT3B0aW9ucygpO1xufSIsImltcG9ydCB7IHJlbW92ZUNoaWxkcmVuIH0gZnJvbSBcIi4uL2F1eGlsaWFyeS9yZW1vdmVDaGlsZHJlblwiO1xuaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuXG5jb25zdCBhbmltYXRlT3B0aW9ucyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy13cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnb3B0aW9ucy13cmFwcGVyLWFuaW1hdGUnKTtcbn1cblxuY29uc3QgcmVtb3ZlT3ZlcmxheSA9ICgpID0+IHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxuICAgIG92ZXJsYXkucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvdmVybGF5KVxufVxuXG5jb25zdCByZW1vdmVMaXN0VGl0bGUgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtbmFtZScpLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmNvbnN0IGNoYW5nZUxpc3RUaXRsZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1uYW1lJykudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5BY3RpdmVMaXN0KCkubmFtZX1gO1xufVxuXG5jb25zdCByZW1vdmVUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2snKTtcbiAgICByZW1vdmVDaGlsZHJlbih0YXNrKTtcbn1cblxuY29uc3QgY2hhbmdlVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0dXJuQWN0aXZlTGlzdCgpLmdldFRhc2tzKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrLXdyYXBwZXInLCAndy1mdWxsJylcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHBgKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke3JldHVybkFjdGl2ZUxpc3QoKS5nZXRUYXNrcygpW2ldfWA7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWxhdGl2ZScpXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHN2ZyB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNvbG9yPVwiIzAwMDAwMFwiPjxwYXRoIGQ9XCJNOS4xNzIgMTQuODI4TDEyLjAwMSAxMm0yLjgyOC0yLjgyOEwxMi4wMDEgMTJtMCAwTDkuMTcyIDkuMTcyTTEyLjAwMSAxMmwyLjgyOCAyLjgyOE0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwelwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+PC9zdmc+JztcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Fic29sdXRlJywgJ3ctZnVsbCcsICdoLWZ1bGwnKVxuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQob3ZlcmxheSlcbiAgICAgICAgdGFza1dyYXBwZXIuYXBwZW5kKHAsIGJ1dHRvbik7XG4gICAgICBcdHRhc2suYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLmluc2VydEJlZm9yZSh0YXNrLCBidG4pO1xufVxuXG5jb25zdCBjYW5jZWxPcHRpb25zID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5JykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYW5pbWF0ZU9wdGlvbnMsIDEwKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVtb3ZlT3ZlcmxheSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IGNhbmNlbE9wdGlvbnMsIGFuaW1hdGVPcHRpb25zLCByZW1vdmVPdmVybGF5LCByZW1vdmVMaXN0VGl0bGUsIGNoYW5nZUxpc3RUaXRsZSwgcmVtb3ZlVGFza3MsIGNoYW5nZVRhc2tzIH0iLCJpbXBvcnQgeyBsaXN0IH0gZnJvbSBcIi4uL2xpc3QvbGlzdHNcIjtcbmltcG9ydCB7IHJldHVybkFjdGl2ZUxpc3QgfSBmcm9tIFwiLi4vYXV4aWxpYXJ5L3JldHVybkFjdGl2ZUxpc3RcIjtcbmltcG9ydCB7IGFuaW1hdGVPcHRpb25zLCByZW1vdmVPdmVybGF5LCByZW1vdmVMaXN0VGl0bGUsIGNoYW5nZUxpc3RUaXRsZSwgcmVtb3ZlVGFza3MsIGNoYW5nZVRhc2tzIH0gZnJvbSBcIi4vb3B0aW9uc0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBzZWxlY3RMaXN0ID0gKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1pdGVtJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2ZScpLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnYWN0aXZlJyk7XG4gICAgICAgIGlmKHJldHVybkFjdGl2ZUxpc3QoKS5nZXRJc0FjdGl2ZSgpID09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybkFjdGl2ZUxpc3QoKS5zZXRBY3RpdmVGYWxzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PSBsaXN0W2ldLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBsaXN0W2ldLnNldEFjdGl2ZVRydWUoKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoYW5pbWF0ZU9wdGlvbnMsIDEwMCk7XG4gICAgICAgIHNldFRpbWVvdXQocmVtb3ZlT3ZlcmxheSwgNTAwKTtcbiAgICAgICAgcmVtb3ZlTGlzdFRpdGxlKCk7XG4gICAgICAgIGNoYW5nZUxpc3RUaXRsZSgpO1xuICAgICAgICByZW1vdmVUYXNrcygpO1xuICAgICAgICBjaGFuZ2VUYXNrcygpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtzZWxlY3RMaXN0LCByZW1vdmVUYXNrcywgY2hhbmdlVGFza3N9IiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCIuLi9saXN0L2xpc3RzXCI7XG5pbXBvcnQgeyBzZWxlY3RMaXN0IH0gZnJvbSBcIi4vc2VsZWN0TGlzdFwiO1xuaW1wb3J0IHsgZGVsZXRlTGlzdCB9IGZyb20gXCIuLi9saXN0L2RlbGV0ZUxpc3RcIjtcbmltcG9ydCB7IGNhbmNlbE9wdGlvbnMgfSBmcm9tIFwiLi4vb3B0aW9ucy9vcHRpb25zRnVuY3Rpb25zXCI7XG5cbmNvbnN0IGFuaW1hdGVWaWV3TGlzdCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy13cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy13cmFwcGVyLWFuaW1hdGUnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdMaXN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5JylcbiAgICBjb25zdCB2aWV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdmlld0xpc3QuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy13cmFwcGVyJywgJ3NoYWRvdy1sZycpXG4gICAgc2V0VGltZW91dChhbmltYXRlVmlld0xpc3QsIDEwKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGlmKGxpc3RbaV0uZ2V0SXNBY3RpdmUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJywgJ3NoYWRvdy1sZycpXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2xpc3RbaV0ubmFtZX1gXG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgncmVsYXRpdmUnKVxuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHN2ZyB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNvbG9yPVwiIzAwMDAwMFwiPjxwYXRoIGQ9XCJNOS4xNzIgMTQuODI4TDEyLjAwMSAxMm0yLjgyOC0yLjgyOEwxMi4wMDEgMTJtMCAwTDkuMTcyIDkuMTcyTTEyLjAwMSAxMmwyLjgyOCAyLjgyOE0xMiAyMmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwUzE3LjUyMyAyIDEyIDIgMiA2LjQ3NyAyIDEyczQuNDc3IDEwIDEwIDEwelwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+PC9zdmc+JztcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Fic29sdXRlJywgJ3ctZnVsbCcsICdoLWZ1bGwnKVxuICAgICAgICBjbG9zZS5hcHBlbmRDaGlsZChvdmVybGF5KVxuICAgICAgICBidXR0b24uYXBwZW5kKHAsIGNsb3NlKVxuICAgICAgICB2aWV3TGlzdC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlTGlzdClcbiAgICB9XG4gICAgb3ZlcmxheS5hcHBlbmQodmlld0xpc3QpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpXG4gICAgdmlld0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RMaXN0KVxuICAgIGNhbmNlbE9wdGlvbnMoKVxufSIsImltcG9ydCB7IGJ0biB9IGZyb20gXCIuLi9idXR0b24vYnRuXCI7XG5cbmV4cG9ydCBjb25zdCBidXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicsICdmbGV4JywgJ3ctZnVsbCcsICdoLWZ1bGwnLCAnanVzdGlmeS1lbmQnLCAncHgtOCcsICdweS00JywgJ3JlbGF0aXZlJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdyb3VuZGVkLWZ1bGwnLCAndy0xNCcsICdoLTE0JywgJ2JnLWdyZWVuLTMwMCcsICdzaGFkb3ctbGcnLCAnZmxleCcsICdmbGV4LWNvbCcsICdqdXN0aWZ5LWNlbnRlcicsICdpdGVtcy1jZW50ZXInLCAnZ2FwLTEuNScsICdhY3RpdmU6YmctZ3JlZW4tNDAwJywpO1xuICAgIGNvbnN0IGxpbmUwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZTAuY2xhc3NMaXN0LmFkZCgnaC0xJywgJ3ctNycsICdiZy13aGl0ZScpO1xuICAgIGNvbnN0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZTEuY2xhc3NMaXN0LmFkZCgnaC0xJywgJ3ctNycsICdiZy13aGl0ZScpO1xuICAgIGNvbnN0IGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGluZTIuY2xhc3NMaXN0LmFkZCgnaC0xJywgJ3ctNycsICdiZy13aGl0ZScpO1xuICAgIGJ1dHRvbi5hcHBlbmQobGluZTAsIGxpbmUxLCBsaW5lMik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bik7XG59IiwiXG5jb25zdCBsaW5lVGhyb3VnaCA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnbGluZScpXG59XG5cbmV4cG9ydCBjb25zdCBjcm9zc091dCA9IChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQubG9jYWxOYW1lID09ICdwJykge1xuICAgICAgICBzZXRUaW1lb3V0KGxpbmVUaHJvdWdoKGUpLCAxMClcbiAgICB9XG59IiwiaW1wb3J0IHsgbGlzdFRpdGxlIH0gZnJvbSBcIi4vbGlzdFRpdGxlXCI7XG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcblxuZXhwb3J0IGNvbnN0IGRlZiA9ICgpID0+IHtcbiAgICBsaXN0VGl0bGUoKTtcbiAgICB0YXNrcygpO1xuICAgIGJ1dHRvbigpO1xufSIsImltcG9ydCB7IGxpc3QgfSBmcm9tIFwiLi4vbGlzdC9saXN0c1wiO1xuaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuXG5leHBvcnQgY29uc3QgbGlzdFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGAke3JldHVybkFjdGl2ZUxpc3QoKS5uYW1lfWA7XG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnbGlzdC1uYW1lJywgJ3RleHQtY2VudGVyJywgJ3RleHQtNHhsJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZChoMyk7XG59IiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgcmV0dXJuQWN0aXZlTGlzdCB9IGZyb20gXCIuLi9hdXhpbGlhcnkvcmV0dXJuQWN0aXZlTGlzdFwiO1xuaW1wb3J0IHsgZGVsZXRlVGFzayB9IGZyb20gXCIuLi9saXN0L2RlbGV0ZVRhc2tcIjtcbmltcG9ydCB7IGNyb3NzT3V0IH0gZnJvbSBcIi4vY3Jvc3NPdXRcIjtcblxuZXhwb3J0IGNvbnN0IHRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2l0ZW1zLWNlbnRlcicsICdnYXAtMycsICd0ZXh0LXhsJylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldHVybkFjdGl2ZUxpc3QoKS5nZXRUYXNrcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzay13cmFwcGVyJywgJ3ctZnVsbCcpXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBwYCk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtyZXR1cm5BY3RpdmVMaXN0KCkuZ2V0VGFza3MoKVtpXX1gO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncmVsYXRpdmUnKVxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxzdmcgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjb2xvcj1cIiMwMDAwMDBcIj48cGF0aCBkPVwiTTkuMTcyIDE0LjgyOEwxMi4wMDEgMTJtMi44MjgtMi44MjhMMTIuMDAxIDEybTAgMEw5LjE3MiA5LjE3Mk0xMi4wMDEgMTJsMi44MjggMi44MjhNMTIgMjJjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMHpcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPjwvc3ZnPic7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhYnNvbHV0ZScsICd3LWZ1bGwnLCAnaC1mdWxsJylcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKG92ZXJsYXkpXG4gICAgICAgIHRhc2tXcmFwcGVyLmFwcGVuZChwLCBidXR0b24pO1xuICAgICAgXHR0YXNrLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzaylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3Jvc3NPdXQpXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZGVmIH0gZnJvbSBcIi4vdWkvZGVmYXVsdFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGVmKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=