(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(419);

// EXTERNAL MODULE: ./src/components/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(369);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox_Checkbox = __webpack_require__(375);

// EXTERNAL MODULE: ./src/components/lkInfo/lkInfo.scss
var lkInfo_lkInfo = __webpack_require__(444);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(420);

// EXTERNAL MODULE: ./src/store/actions.js
var actions = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/Header/List/NavLink/NavLink.js
var NavLink = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/react-scroll/modules/index.js
var modules = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/Checkbox/Checkbox.scss
var components_Checkbox_Checkbox = __webpack_require__(217);

// CONCATENATED MODULE: ./src/components/lkInfo/lkInfo.js












var lkInfo_lkInfo_lkInfo = function lkInfo() {
  var dispatch = Object(es["c" /* useDispatch */])();

  var handlerExit = function handlerExit() {
    dispatch(Object(actions["J" /* userLog */])(false));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "lkInfo"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    justify: "space-between",
    className: "lkInfoTitle"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"), /*#__PURE__*/react_default.a.createElement(Link["a" /* default */], {
    component: NavLink["a" /* default */],
    to: "/",
    onClick: function onClick() {
      modules["animateScroll"].scrollToTop();
    }
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    color: "primary",
    onClick: handlerExit
  }, "\u0412\u044B\u0439\u0442\u0438"))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    className: "lkInfoContainer",
    spacing: 2
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    md: 6,
    xs: 12,
    className: "lkInfoString"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "\u0418\u043C\u044F"), /*#__PURE__*/react_default.a.createElement("p", null, "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    md: 6,
    xs: 12,
    className: "lkInfoString"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"), /*#__PURE__*/react_default.a.createElement("p", null, "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u0432\u0430")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    md: 6,
    xs: 12,
    className: "lkInfoString"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/react_default.a.createElement("p", null, "+7 (909) 981-32-54")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    md: 6,
    xs: 12,
    className: "lkInfoString"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "Email"), /*#__PURE__*/react_default.a.createElement("p", null, "alexandra.konstantinova@mymail.com")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    md: 6,
    xs: 12,
    className: "lkInfoString"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "@Instagram"), /*#__PURE__*/react_default.a.createElement("p", null, "alexandra_konstantinova")), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    md: 6,
    xs: 12,
    className: "lkInfoString"
  }, /*#__PURE__*/react_default.a.createElement(FormControlLabel["a" /* default */], {
    control: /*#__PURE__*/react_default.a.createElement(Checkbox_Checkbox["a" /* default */], {
      className: "checkbox",
      name: "checkedB",
      color: "primary" // onChange={handler}
      ,
      checkedIcon: /*#__PURE__*/react_default.a.createElement("img", {
        src: "./images/checkboxChecked.svg"
      }),
      icon: /*#__PURE__*/react_default.a.createElement("img", {
        src: "./images/checkbox.svg"
      })
    }),
    className: "checkboxContainer",
    label: "Я согласен(а) получать информацию об акции по Email"
  }))));
};

/* harmony default export */ var components_lkInfo_lkInfo = (lkInfo_lkInfo_lkInfo);

// EXTERNAL MODULE: ./src/components/tasks/tasks.scss
var tasks = __webpack_require__(445);

// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(439);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/components/slider/slider.scss
var slider = __webpack_require__(441);

// CONCATENATED MODULE: ./src/components/slider/slider.js







var slider_App = function App() {
  var taskNumb = Object(es["d" /* useSelector */])(function (state) {
    return state.data.task;
  });
  var dispatch = Object(es["c" /* useDispatch */])();

  var slideChange = function slideChange(index) {
    dispatch(Object(actions["H" /* setTask */])(index + 1));
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "slider"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "sliderTitle"
  }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u2116", taskNumb), /*#__PURE__*/react_default.a.createElement(lib_default.a, {
    afterChange: slideChange
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    justify: "space-between",
    direction: "column",
    className: "sliderContainer"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    className: "sliderContainerItem"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "\u0421\u0434\u0435\u043B\u0430\u0439 \u0444\u043E\u0442\u043E \u0441 \u043D\u0430\u0431\u043E\u0440\u043E\u043C \xAB100 \u043B\u0435\u0442 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B Weleda\xBB"), /*#__PURE__*/react_default.a.createElement("p", null, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u043E \u0437\u0430\u0434\u0430\u043D\u0438\u0438 \u0438 \u0441\u0440\u043E\u043A\u0438 \u043F\u0440\u0438\u0435\u043C\u0430 \u0440\u0430\u0431\u043E\u0442 \u0441\u043C\u043E\u0442\u0440\u0438", " ", /*#__PURE__*/react_default.a.createElement("a", {
    href: "empty"
  }, "\u0437\u0434\u0435\u0441\u044C"))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    component: "ul",
    className: "sliderContainerItem"
  }, /*#__PURE__*/react_default.a.createElement("li", null, "- \u0421\u0434\u0435\u043B\u0430\u0439 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0435 \u0444\u043E\u0442\u043E \u043D\u0430\u0431\u043E\u0440\u0430."), /*#__PURE__*/react_default.a.createElement("li", null, "- \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0439 \u0444\u043E\u0442\u043E \u0438\u043B\u0438 \u0432\u0438\u0434\u0435\u043E \u0432 Stories \u0438\u043B\u0438 \u0432 \u043B\u0435\u043D\u0442\u0435 Instagram."), /*#__PURE__*/react_default.a.createElement("li", null, "- \u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C \u043F\u0440\u043E \u0445\u0435\u0448\u0442\u0435\u0433 ", /*#__PURE__*/react_default.a.createElement("b", null, "#WELEDA100YEARS"), " \u0438 \u043E\u0442\u043C\u0435\u0442\u044C", " ", /*#__PURE__*/react_default.a.createElement("b", null, "@weledarussia.")), /*#__PURE__*/react_default.a.createElement("li", null, "- \u0423\u0431\u0435\u0434\u0438\u0441\u044C, \u0447\u0442\u043E \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 \u0442\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C."))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    justify: "space-between",
    direction: "column",
    className: "sliderContainer"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    className: "sliderContainerItem"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "\u0421\u0434\u0435\u043B\u0430\u0439 \u0444\u043E\u0442\u043E \u0441 \u043D\u0430\u0431\u043E\u0440\u043E\u043C \xAB100 \u043B\u0435\u0442 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B Weleda\xBB"), /*#__PURE__*/react_default.a.createElement("p", null, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u043E \u0437\u0430\u0434\u0430\u043D\u0438\u0438 \u0438 \u0441\u0440\u043E\u043A\u0438 \u043F\u0440\u0438\u0435\u043C\u0430 \u0440\u0430\u0431\u043E\u0442 \u0441\u043C\u043E\u0442\u0440\u0438", " ", /*#__PURE__*/react_default.a.createElement("a", {
    href: "empty"
  }, "\u0437\u0434\u0435\u0441\u044C"))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    component: "ul",
    className: "sliderContainerItem"
  }, /*#__PURE__*/react_default.a.createElement("li", null, "- \u0421\u0434\u0435\u043B\u0430\u0439 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0435 \u0444\u043E\u0442\u043E \u043D\u0430\u0431\u043E\u0440\u0430."), /*#__PURE__*/react_default.a.createElement("li", null, "- \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0439 \u0444\u043E\u0442\u043E \u0438\u043B\u0438 \u0432\u0438\u0434\u0435\u043E \u0432 Stories \u0438\u043B\u0438 \u0432 \u043B\u0435\u043D\u0442\u0435 Instagram."), /*#__PURE__*/react_default.a.createElement("li", null, "- \u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C \u043F\u0440\u043E \u0445\u0435\u0448\u0442\u0435\u0433 ", /*#__PURE__*/react_default.a.createElement("b", null, "#WELEDA100YEARS"), " \u0438 \u043E\u0442\u043C\u0435\u0442\u044C", " ", /*#__PURE__*/react_default.a.createElement("b", null, "@weledarussia.")), /*#__PURE__*/react_default.a.createElement("li", null, "- \u0423\u0431\u0435\u0434\u0438\u0441\u044C, \u0447\u0442\u043E \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 \u0442\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C."))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    justify: "space-between",
    direction: "column",
    className: "sliderContainer"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    className: "sliderContainerItem"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "\u0421\u0434\u0435\u043B\u0430\u0439 \u0444\u043E\u0442\u043E \u0441 \u043D\u0430\u0431\u043E\u0440\u043E\u043C \xAB100 \u043B\u0435\u0442 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B Weleda\xBB"), /*#__PURE__*/react_default.a.createElement("p", null, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u043E \u0437\u0430\u0434\u0430\u043D\u0438\u0438 \u0438 \u0441\u0440\u043E\u043A\u0438 \u043F\u0440\u0438\u0435\u043C\u0430 \u0440\u0430\u0431\u043E\u0442 \u0441\u043C\u043E\u0442\u0440\u0438", " ", /*#__PURE__*/react_default.a.createElement("a", {
    href: "empty"
  }, "\u0437\u0434\u0435\u0441\u044C"))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    component: "ul",
    className: "sliderContainerItem"
  }, /*#__PURE__*/react_default.a.createElement("li", null, "- \u0421\u0434\u0435\u043B\u0430\u0439 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0435 \u0444\u043E\u0442\u043E \u043D\u0430\u0431\u043E\u0440\u0430."), /*#__PURE__*/react_default.a.createElement("li", null, "- \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0439 \u0444\u043E\u0442\u043E \u0438\u043B\u0438 \u0432\u0438\u0434\u0435\u043E \u0432 Stories \u0438\u043B\u0438 \u0432 \u043B\u0435\u043D\u0442\u0435 Instagram."), /*#__PURE__*/react_default.a.createElement("li", null, "- \u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C \u043F\u0440\u043E \u0445\u0435\u0448\u0442\u0435\u0433 ", /*#__PURE__*/react_default.a.createElement("b", null, "#WELEDA100YEARS"), " \u0438 \u043E\u0442\u043C\u0435\u0442\u044C", " ", /*#__PURE__*/react_default.a.createElement("b", null, "@weledarussia.")), /*#__PURE__*/react_default.a.createElement("li", null, "- \u0423\u0431\u0435\u0434\u0438\u0441\u044C, \u0447\u0442\u043E \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 \u0442\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C."))), /*#__PURE__*/react_default.a.createElement(slider_Locked, null)));
};

/* harmony default export */ var slider_slider = (slider_App);

var slider_Locked = function Locked(date) {
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    justify: "space-between",
    alignItems: "center",
    direction: "column",
    className: "sliderContainerLocked sliderContainer",
    "data-locked": true
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438 \u043E \u0441\u0432\u043E\u0435\u043C \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u0435 \u0441 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u043C Weleda"), /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/locked.svg"
  }), /*#__PURE__*/react_default.a.createElement("p", null, "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0437\u0430\u0434\u0430\u043D\u0438\u044E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("b", null, "01.06.2021")));
};
// EXTERNAL MODULE: ./src/components/tasks/Tabs/Tabs.scss
var Tabs = __webpack_require__(458);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(421);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs_Tabs = __webpack_require__(491);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(480);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 14 modules
var Box = __webpack_require__(489);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(482);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(486);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(485);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(481);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(483);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(484);

// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Pagination/Pagination.js + 6 modules
var Pagination = __webpack_require__(492);

// EXTERNAL MODULE: ./src/components/tasks/Pagination/Pagination.scss
var Pagination_Pagination = __webpack_require__(459);

// CONCATENATED MODULE: ./src/components/tasks/Pagination/Pagination.js



function getPagination(props) {
  var _props$rowsPerPage = props.rowsPerPage,
      rowsPerPage = _props$rowsPerPage === void 0 ? 5 : _props$rowsPerPage,
      rows = props.rows,
      page = props.page,
      handler = props.handler,
      className = props.className;

  if (rows >= rowsPerPage) {
    return /*#__PURE__*/react_default.a.createElement(Pagination["a" /* default */], {
      className: "Pagination " + className,
      count: Math.ceil(rows / rowsPerPage),
      page: page,
      onChange: handler
    });
  } else return null;
}
// EXTERNAL MODULE: ./src/components/tasks/Table/Table.scss
var Table_Table = __webpack_require__(460);

// CONCATENATED MODULE: ./src/components/tasks/Table/Table.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function StickyHeadTable(props) {
  var _React$useState = react_default.a.useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var rowsPerPage = props.rowsPerPage || 5;

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "table"
  }, /*#__PURE__*/react_default.a.createElement(TableContainer["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */], {
    stickyHeader: true,
    "aria-label": "sticky table"
  }, /*#__PURE__*/react_default.a.createElement(TableHead["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(TableRow["a" /* default */], {
    className: "tableHeader"
  }, props.columns.map(function (column) {
    return /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], _extends({
      key: column.id
    }, column.params), column.label);
  }))), /*#__PURE__*/react_default.a.createElement(TableBody["a" /* default */], null, props.rows.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map(function (row, id) {
    return /*#__PURE__*/react_default.a.createElement(TableRow["a" /* default */], {
      hover: true,
      tabIndex: -1,
      key: id
    }, props.columns.map(function (column) {
      var value = row[column.id];
      return /*#__PURE__*/react_default.a.createElement(TableCell["a" /* default */], {
        key: column.id,
        className: "tableCell"
      }, column.format && typeof value === "number" ? column.format(value) : value);
    }));
  })))), /*#__PURE__*/react_default.a.createElement(getPagination, {
    rowsPerPage: rowsPerPage,
    rows: props.rows.length,
    page: page,
    handler: handleChangePage
  }));
}
// CONCATENATED MODULE: ./src/components/tasks/Tabs/Tabs.js
function Tabs_slicedToArray(arr, i) { return Tabs_arrayWithHoles(arr) || Tabs_iterableToArrayLimit(arr, i) || Tabs_unsupportedIterableToArray(arr, i) || Tabs_nonIterableRest(); }

function Tabs_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Tabs_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Tabs_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tabs_arrayLikeToArray(o, minLen); }

function Tabs_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Tabs_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Tabs_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Tabs_extends() { Tabs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tabs_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 //import Checkbox from '../../components/Checkbox/Checkbox';

 //import CheckRequirementsModal from '../../components/Modal/CheckRequirementsModal/CheckRequirementsModal'
//import {verify} from '../../components/Modal/SimpleModal/SimpleModal'
//import Form from '../../../../dist/components/Form/Form'









function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return /*#__PURE__*/react_default.a.createElement("div", Tabs_extends({
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other), value === index && /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    p: 3
  }, children));
}

function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    "aria-controls": "simple-tabpanel-".concat(index)
  };
}

function SimpleTabs() {
  var _React$useState = react_default.a.useState(0),
      _React$useState2 = Tabs_slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var rowsPrizi = Object(es["d" /* useSelector */])(function (state) {
    return state.data.rowsPrizi;
  });
  var rowsTasks = Object(es["d" /* useSelector */])(function (state) {
    return state.data.rowsTasks;
  });
  var ColumnsPrizi = Object(es["d" /* useSelector */])(function (state) {
    return state.data.ColumnsPrizi;
  });
  var ColumnsTasks = Object(es["d" /* useSelector */])(function (state) {
    return state.data.ColumnsTasks;
  });
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "tabpage"
  }, /*#__PURE__*/react_default.a.createElement(AppBar["a" /* default */], {
    position: "static",
    className: "TabBar"
  }, /*#__PURE__*/react_default.a.createElement(Tabs_Tabs["a" /* default */], {
    value: value,
    onChange: handleChange,
    "aria-label": "simple tabs example"
  }, /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], Tabs_extends({
    label: "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F"
  }, a11yProps(0))), /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], Tabs_extends({
    label: "\u041F\u0440\u0438\u0437\u044B"
  }, a11yProps(1))))), /*#__PURE__*/react_default.a.createElement(TabPanel, {
    value: value,
    index: 0
  }, /*#__PURE__*/react_default.a.createElement(StickyHeadTable, {
    columns: ColumnsTasks,
    rows: rowsTasks,
    rowsPerPage: 5
  })), /*#__PURE__*/react_default.a.createElement(TabPanel, {
    value: value,
    index: 1
  }, /*#__PURE__*/react_default.a.createElement(StickyHeadTable, {
    columns: ColumnsPrizi,
    rows: rowsPrizi,
    rowsPerPage: 5
  })));
}

// EXTERNAL MODULE: ./src/components/Modal/SimpleModal/SimpleModal.js
var SimpleModal = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/redux-form/es/Field.js + 10 modules
var Field = __webpack_require__(373);

// EXTERNAL MODULE: ./node_modules/redux-form/es/reduxForm.js + 16 modules
var reduxForm = __webpack_require__(211);

// EXTERNAL MODULE: ./src/components/TextField/validation.js
var validation = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/regForm/renderTextField.js
var renderTextField = __webpack_require__(31);

// CONCATENATED MODULE: ./src/components/tasks/tasks.js














var tasks_taskFrom = function taskFrom(props) {
  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting;
  return /*#__PURE__*/react_default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    wrap: "nowrap",
    justify: "space-between",
    className: "instaContainer"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    className: "taskInput"
  }, /*#__PURE__*/react_default.a.createElement(Field["a" /* default */], {
    name: "instalink",
    component: renderTextField["a" /* renderTextField */],
    type: "text",
    label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043F\u043E\u0441\u0442 \u0432 Instagram",
    validate: [validation["k" /* required */], validation["b" /* instaPost */]]
  }), /*#__PURE__*/react_default.a.createElement("p", {
    className: "taskInputLegend"
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043F\u043E\u0441\u0442 \u0432 Instagram \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u043D\u0438\u044F")), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    type: "submit",
    variant: "contained",
    size: "large"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0438\u0435"), /*#__PURE__*/react_default.a.createElement(SimpleModal["e" /* TaskSend */], null)));
};

var TaskFrom = Object(reduxForm["a" /* default */])({
  form: "TaskFrom" // a unique identifier for this form

})(tasks_taskFrom);

var tasks_task = function task() {
  var dispatch = Object(es["c" /* useDispatch */])();
  var task = Object(es["d" /* useSelector */])(function (state) {
    return state.data.task;
  });
  var rowsTasks = Object(es["d" /* useSelector */])(function (state) {
    return state.data.rowsTasks;
  });

  var handler = function handler() {
    dispatch(Object(actions["z" /* setInstaPostModal */])(true));
    dispatch(Object(actions["I" /* setTaskRow */])(task));
  };

  var TaskSendVAriant = function TaskSendVAriant() {
    var alreadySent = false;
    var alreadyApproved = false;
    rowsTasks.map(function (taskRow) {
      if (taskRow.stat == "на модерации I") {
        alreadySent = true;
      }

      if (taskRow.id == task && taskRow.stat == "Принят") {
        alreadyApproved = true;
      }
    });

    if (alreadyApproved) {
      return /*#__PURE__*/react_default.a.createElement("p", {
        className: "tasksSendedText"
      }, "\u0412\u044B \u0443\u0436\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043B\u0438 \u044D\u0442\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u0435.");
    } else if (alreadySent) {
      return /*#__PURE__*/react_default.a.createElement("p", {
        className: "tasksSendedText"
      }, "\u0412\u044B \u0443\u0436\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443.", /*#__PURE__*/react_default.a.createElement("br", null), "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u0442\u0430\u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432 \u0442\u0432\u043E\u0435\u043C \u041B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0445 3-\u0445 \u0434\u043D\u0435\u0439.");
    } else {
      return /*#__PURE__*/react_default.a.createElement(TaskFrom, {
        onSubmit: handler
      });
    }
  };

  console.log("task");
  TaskSendVAriant();
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "tasksContainer"
  }, /*#__PURE__*/react_default.a.createElement("h3", null, "\u0417\u0430\u0434\u0430\u043D\u0438\u044F"), /*#__PURE__*/react_default.a.createElement(slider_slider, null), /*#__PURE__*/react_default.a.createElement(TaskSendVAriant, null), /*#__PURE__*/react_default.a.createElement(SimpleTabs, null));
};

/* harmony default export */ var tasks_tasks = (tasks_task);
// EXTERNAL MODULE: ./src/components/Modal/Modal.js
var Modal = __webpack_require__(119);

// EXTERNAL MODULE: ./src/components/Modal/PrizSelectModal/PrizSelectModal.scss
var PrizSelectModal = __webpack_require__(461);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/json2mq/index.js
var json2mq = __webpack_require__(424);
var json2mq_default = /*#__PURE__*/__webpack_require__.n(json2mq);

// CONCATENATED MODULE: ./src/components/Modal/PrizSelectModal/PrizSelectModal.js
function PrizSelectModal_extends() { PrizSelectModal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PrizSelectModal_extends.apply(this, arguments); }






var itemsArr = [{
  title: "Набор из 4-х мини-продуктов*",
  subtitle: "*набор составляется из продуктов в наличии",
  cost: 5
}, {
  title: "Промокод на бесплатную доставку",
  cost: 10,
  isDigital: true
}, {
  title: "Косметичка из органического хлопка",
  cost: 10
}, {
  title: "Промокод на покупку в интернет-магазине*",
  subtitle: "*скидка 30%",
  cost: 15,
  isDigital: true
}, {
  title: "Сумка из органического хлопка",
  cost: 15
}, {
  title: "Набор из 3-х продуктов *",
  subtitle: "*набор составляется из продуктов в наличии",
  cost: 20
}, {
  title: "Набор для спорта: бутылка для воды + массажное масло с арникой",
  cost: 25
}, {
  title: "Толстовка",
  cost: 30
}, {
  title: "Рюкзак",
  cost: 40
}];







var PrizSelectModal_PSM = function PSM() {
  var matches = Object(useMediaQuery["a" /* default */])(json2mq_default()({
    minWidth: 730
  }));

  var getElems = function getElems() {
    return itemsArr.map(function (item, id) {
      return /*#__PURE__*/react_default.a.createElement(PrizSelectModal_Item, PrizSelectModal_extends({}, item, {
        id: id + 1,
        key: id
      }));
    });
  };

  var GetWpar = function GetWpar(_ref) {
    var isDesktop = _ref.isDesktop;

    if (isDesktop) {
      return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
        container: true,
        justify: "space-between",
        className: "priziContainer"
      }, getElems());
    } else {
      return /*#__PURE__*/react_default.a.createElement(lib_default.a, {
        dots: true
      }, getElems());
    }
  };

  var score = Object(es["d" /* useSelector */])(function (state) {
    return state.data.score;
  });
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("p", {
    className: "cabinetSelectPriz"
  }, "\u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0431\u0430\u043B\u043B\u043E\u0432: ", /*#__PURE__*/react_default.a.createElement("span", null, score)), /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */], {
    btnText: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u0438\u0437",
    isOpen: false,
    title: "\u0412\u0438\u0442\u0440\u0438\u043D\u0430 \u043F\u0440\u0438\u0437\u043E\u0432",
    mainBtnVariant: "contained",
    mainBtnSize: "large",
    className: "priziModal",
    classNameWrap: " priziModalWrap"
  }, /*#__PURE__*/react_default.a.createElement(GetWpar, {
    isDesktop: matches
  }), /*#__PURE__*/react_default.a.createElement(SimpleModal["d" /* SelectPriz */], null), /*#__PURE__*/react_default.a.createElement(SimpleModal["b" /* PrizSuccess */], null), /*#__PURE__*/react_default.a.createElement(SimpleModal["a" /* AdressModal */], null)));
};

/* harmony default export */ var PrizSelectModal_PrizSelectModal = (PrizSelectModal_PSM);



var PrizSelectModal_Item = function Item(_ref2) {
  var id = _ref2.id,
      title = _ref2.title,
      subtitle = _ref2.subtitle,
      cost = _ref2.cost,
      _ref2$isDigital = _ref2.isDigital,
      isDigital = _ref2$isDigital === void 0 ? false : _ref2$isDigital;
  var dispatch = Object(es["c" /* useDispatch */])();

  var hangleClick = function hangleClick() {
    dispatch(Object(actions["B" /* setPriz */])({
      title: title,
      cost: cost,
      isDigital: isDigital
    }));
    dispatch(Object(actions["G" /* setSelectPrizModal */])(true));
  };

  var score = Object(es["d" /* useSelector */])(function (state) {
    return state.data.score;
  });
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 6,
    lg: 4,
    className: "priziItemGrid"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column",
    alignItems: "center",
    justify: "space-between",
    className: "priziItemContainer"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    className: "priziItemWrap"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "prizItemImg"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: "./images/items/".concat(id, ".png")
  })), /*#__PURE__*/react_default.a.createElement("p", {
    className: "priziItemTitle"
  }, title), /*#__PURE__*/react_default.a.createElement("p", {
    className: "priziItemSubtitle"
  }, subtitle)), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    className: "priziItemWrap"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: cost > score ? "priziItemCost priziItemCostDisabled" : "priziItemCost"
  }, cost, " \u0431\u0430\u043B\u043B\u043E\u0432"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "contained",
    disabled: cost > score,
    fullWidth: true,
    onClick: hangleClick
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C"))));
};
// EXTERNAL MODULE: ./src/components/App/pages/cabinet/cabinet.scss
var cabinet = __webpack_require__(462);

// EXTERNAL MODULE: ./src/store/store.js + 5 modules
var store = __webpack_require__(68);

// CONCATENATED MODULE: ./src/components/App/pages/cabinet/cabinet.js










var cabinet_main = function main() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    className: "pageBG",
    container: true,
    justify: "center",
    id: "cabinet"
  }, /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {
    store: store["a" /* store */]
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    justify: "center",
    className: "pageWrapper",
    alignContent: "flex-start"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    xs: 11,
    item: true,
    className: "pageContainer"
  }, /*#__PURE__*/react_default.a.createElement(components_lkInfo_lkInfo, null)), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    xs: 10,
    item: true,
    className: "pageContainer"
  }, /*#__PURE__*/react_default.a.createElement(tasks_tasks, null), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    justify: "space-between",
    alignItems: "center",
    className: "cabinetSelectPrizContainer"
  }, /*#__PURE__*/react_default.a.createElement(PrizSelectModal_PrizSelectModal, null)))))));
};

/* harmony default export */ var cabinet_cabinet = __webpack_exports__["default"] = (cabinet_main);

/***/ })

}]);