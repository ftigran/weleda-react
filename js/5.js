(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegEmailApproveModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _RegEmailApproveModal_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(436);
/* harmony import */ var _RegEmailApproveModal_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RegEmailApproveModal_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SimpleModal_SimpleModal_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(216);
/* harmony import */ var _SimpleModal_SimpleModal_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SimpleModal_SimpleModal_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);











var RegEmailApproveModal = function RegEmailApproveModal() {
  var open = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[/* useSelector */ "d"])(function (state) {
    return state.data.RegEmailApproveModalOpen;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[/* useDispatch */ "c"])();

  var handleClose = function handleClose() {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_10__[/* setRegEmailApproveModal */ "E"])(false));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    type: "submit",
    variant: "contained",
    size: "large"
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: "modal",
    open: open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    BackdropProps: {
      timeout: 500
    } // disableScrollLock={true}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    "in": open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalWindow SimpleModal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "transition-modal-title"
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E",
    className: "modalWindowClose",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "RegEmailApproveModalText"
  }, "\u041D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 E-mail \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043F\u0430\u0440\u043E\u043B\u044C. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u0414\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0410\u043A\u0446\u0438\u0438 \u0432\u043E\u0439\u0434\u0438 \u0432 \u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442, \u0443\u043A\u0430\u0437\u0430\u0432 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435 \u043F\u0430\u0440\u043E\u043B\u044C."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "RegEmailApproveModalText RegEmailApproveModalText-bottom"
  }, "\u0415\u0441\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u043E \u0441 \u043F\u0430\u0440\u043E\u043B\u0435\u043C \u0442\u0430\u043A \u0438 \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442, \u043E\u0431\u0440\u0430\u0442\u0438\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0410\u043A\u0446\u0438\u0438."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: "modalBtn",
    color: "secondaty",
    onClick: handleClose,
    variant: "contained",
    fullWidth: true,
    size: "large"
  }, "\u041E\u041A")))));
};

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(373);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(211);
/* harmony import */ var _renderTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _TextField_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(419);
/* harmony import */ var _regForm_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(427);
/* harmony import */ var _regForm_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_regForm_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68);
/* harmony import */ var _Modal_RegEmailApproveModal_RegEmailApproveModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(428);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(128);
/* harmony import */ var _Modal_SimpleModal_SimpleModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(127);
















var SimpleForm = function SimpleForm(props) {
  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      reset = props.reset,
      submitting = props.submitting;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "regForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    spacing: 2,
    container: true,
    justify: "center",
    className: "regFormContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    sm: 6,
    item: true,
    className: "FormTextFieldContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    name: "firstName",
    component: _renderTextField__WEBPACK_IMPORTED_MODULE_3__[/* renderTextField */ "a"],
    type: "text",
    label: "\u0418\u043C\u044F",
    validate: [_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* required */ "k"], Object(_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* maxLength */ "f"])(20, "Имя должно"), Object(_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* minLength */ "g"])(2, "Имя должно"), _TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* kirilicName */ "e"]]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    name: "lastName",
    component: _renderTextField__WEBPACK_IMPORTED_MODULE_3__[/* renderTextField */ "a"],
    type: "text",
    label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
    validate: [_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* required */ "k"], Object(_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* maxLength */ "f"])(20, "Фамилия должна"), Object(_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* minLength */ "g"])(2, "Фамилия должна"), _TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* kirilicName */ "e"]]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    name: "instagram",
    component: _renderTextField__WEBPACK_IMPORTED_MODULE_3__[/* renderTextField */ "a"],
    type: "text",
    label: "@instagram",
    validate: [_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* required */ "k"], _TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* instaUser */ "c"]]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    sm: 6,
    item: true,
    className: "FormTextFieldContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    name: "phone",
    component: _renderTextField__WEBPACK_IMPORTED_MODULE_3__[/* renderTextField */ "a"],
    type: "tel",
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    validate: [_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* required */ "k"], _TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* phoneNumber */ "i"]]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    name: "email",
    component: _renderTextField__WEBPACK_IMPORTED_MODULE_3__[/* renderTextField */ "a"],
    type: "email",
    label: "Email",
    validate: [_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* required */ "k"], _TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* email */ "a"]]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    name: "promocode",
    component: _renderTextField__WEBPACK_IMPORTED_MODULE_3__[/* renderTextField */ "a"],
    type: "text",
    label: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u0441 \u043B\u0438\u0441\u0442\u043E\u0432\u043A\u0438",
    validate: [_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* required */ "k"], _TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* promoNumber */ "j"]]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    container: true,
    direction: "column",
    className: "regFormDown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    className: "WherePromocodeWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_SimpleModal_SimpleModal__WEBPACK_IMPORTED_MODULE_12__[/* WherePromocode */ "f"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    name: "rulesCB",
    component: _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    type: "checkbox",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u042F \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043B(\u0430) \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D(\u0430) \u0441 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "empty"
    }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u0430\u043A\u0446\u0438\u0438"), " ", "\u0438 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "empty"
    }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C")),
    validate: [Object(_TextField_validation__WEBPACK_IMPORTED_MODULE_4__[/* isTrue */ "d"])()]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    name: "emailPromoCB",
    component: _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "empty"
    }, "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D(\u0430) \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C Email- \u0438 SMS-\u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"),
    type: "checkbox"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "regFormApproveWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_RegEmailApproveModal_RegEmailApproveModal__WEBPACK_IMPORTED_MODULE_10__[/* RegEmailApproveModal */ "a"], null))));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
  form: "regForm" // a unique identifier for this form

})(SimpleForm));

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _regForm_regForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(435);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(419);
/* harmony import */ var _reg_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(464);
/* harmony import */ var _reg_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reg_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _Modal_RegEmailApproveModal_RegEmailApproveModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(428);











function showResults() {}

var Reg = function Reg() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* useDispatch */ "c"])();

  var handler = function handler() {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_6__[/* setRegEmailApproveModal */ "E"])(true)); //setOpen(true);//dispatch(setRegEmailApproveModal(true))
    ///console.log(store.getState)
    //store.dispatch()
    //console.log(store.getState)
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    container: true,
    justify: "center",
    className: "regPage",
    alignItems: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    container: true,
    justify: "center",
    className: "backgroundContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    container: true,
    className: "pageContainer",
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "regTitle"
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* Provider */ "a"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_3__[/* store */ "a"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_regForm_regForm__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    onSubmit: handler
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Reg);

/***/ })

}]);