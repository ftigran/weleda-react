(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var camel2hyphen = __webpack_require__(425);

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(419);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _Top_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(432);
/* harmony import */ var _Top_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Top_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87);
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);








var Main = function Main(_ref) {
  var _ref$toLink = _ref.toLink,
      toLink = _ref$toLink === void 0 ? "/#c_rules" : _ref$toLink,
      _ref$toID = _ref.toID,
      toID = _ref$toID === void 0 ? "c_rules" : _ref$toID,
      _ref$btnText = _ref.btnText,
      btnText = _ref$btnText === void 0 ? "Выполнить задание" : _ref$btnText;

  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_4___default()(),
      history = _useReactRouter.history;

  var handleClick = function handleClick() {
    if (window.location.pathname !== "") {
      history.push(toLink);
      console.log(toLink);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Top",
    id: "c_main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    alignItems: "flex-start",
    justify: "center",
    className: "TopContainer1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    alignItems: "flex-start",
    justify: "flex-end",
    className: "TopContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    justify: "center",
    className: "TopContainer3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    alignItems: "center",
    className: "TopContainer4",
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/100YearsB.png",
    className: "TopImgLogo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0421\u0442\u0430\u043D\u044C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \u0430\u043C\u0431\u0430\u0441\u0441\u0430\u0434\u043E\u0440\u043E\u043C \u0431\u0440\u0435\u043D\u0434\u0430 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u0438 \u0432\u044B\u0438\u0433\u0440\u0430\u0439 \u043F\u0440\u0438\u0437\u044B", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \u043E\u0442 Weleda"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    onClick: handleClick,
    activeClass: "active",
    to: toID,
    smooth: true,
    duration: 700 //ignoreCancelEvents

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    variant: "contained"
  }, btnText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    onClick: handleClick,
    activeClass: "active",
    to: toID,
    smooth: true,
    duration: 700 //ignoreCancelEvents

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "arrow primera next "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "arrow segunda next "
  })))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(419);
/* harmony import */ var _Roadmap_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
/* harmony import */ var _Roadmap_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Roadmap_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var json2mq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(424);
/* harmony import */ var json2mq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json2mq__WEBPACK_IMPORTED_MODULE_4__);






var Roadmap = function Roadmap() {
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(json2mq__WEBPACK_IMPORTED_MODULE_4___default()({
    minWidth: 730
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    className: "RoadmapWrap",
    container: true,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true,
    sm: 8,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    direction: "column",
    className: "Roadmap",
    id: "c_rules"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RoadmapBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/promoTop.png",
    className: "RoadmapPromo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "RoadmapNumb"
  }, "1", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "RoadmapNumbLine"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439 \u0441\u0432\u043E\u0439 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0438 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0430\u043C\u0431\u0430\u0441\u0441\u0430\u0434\u043E\u0440\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true,
    className: "imgWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/birka.png"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    direction: "row-reverse",
    alignItems: "center",
    justify: "space-between",
    className: "RoadmapBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true,
    className: "RoadmapTextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "RoadmapNumb"
  }, "2", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "RoadmapNumbLine"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0439 \u0435\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u043F\u043E\u043B\u0443\u0447\u0430\u0439 \u0431\u0430\u043B\u043B\u044B,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u0438 \u043C\u0435\u043D\u044F\u0439 \u0438\u0445 \u043D\u0430 \u043F\u0440\u0438\u0437\u044B*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "*\u041F\u0440\u0438\u0437\u044B \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u043C\u0443 \u0432\u0438\u0434\u0443 \u043E\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u0445")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true,
    className: "RoadmapImgContainer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    container: true,
    className: "RoadmapBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true,
    sm: 6,
    xs: 8,
    className: "RoadmapTextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "RoadmapNumb"
  }, "3", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "RoadmapNumbLine"
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, matches ? "\u0412\u044B\u0438\u0433\u0440\u0430\u0439 \u043F\u043E\u0435\u0437\u0434\u043A\u0443 \u0432 \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044E\n                            \u0432 \u0441\u0430\u0434\u044B Weleda" : "Выиграй поездку в Германию"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0438\u043B\u0438 \u0433\u043E\u0434\u043E\u0432\u043E\u0439 \u0437\u0430\u043F\u0430\u0441 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438 Weleda")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    item: true,
    sm: 6,
    className: "RoadmapImgContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "./images/plane.png"
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Roadmap);

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMediaQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(378);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(417);



function useMediaQuery(queryInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
  var props = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    theme: theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });

  if (false) {}

  var query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, ''); // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  var supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  var _props$options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, options),
      _props$options$defaul = _props$options.defaultMatches,
      defaultMatches = _props$options$defaul === void 0 ? false : _props$options$defaul,
      _props$options$matchM = _props$options.matchMedia,
      matchMedia = _props$options$matchM === void 0 ? supportMatchMedia ? window.matchMedia : null : _props$options$matchM,
      _props$options$noSsr = _props$options.noSsr,
      noSsr = _props$options$noSsr === void 0 ? false : _props$options$noSsr,
      _props$options$ssrMat = _props$options.ssrMatchMedia,
      ssrMatchMedia = _props$options$ssrMat === void 0 ? null : _props$options$ssrMat;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  }),
      match = _React$useState[0],
      setMatch = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    var active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    var queryList = matchMedia(query);

    var updateMatch = function updateMatch() {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return function () {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (false) {}

  return match;
}

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Top_Top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(431);
/* harmony import */ var _Roadmap_Roadmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(433);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(443);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_3__);





var main = function main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Top_Top__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Roadmap_Roadmap__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (main);

/***/ })

}]);