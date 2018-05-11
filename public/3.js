webpackJsonp([3],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pages_Admin_Company_Company__ = __webpack_require__(619);

// import { connect } from 'react-redux';
// import { send_login } from './../../../actions/Login'



function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {};
}
// connect(null, null, null, { pure: false })
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__Pages_Admin_Company_Company__["a" /* default */]);

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_TextField__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var styles = function styles(theme) {
    return {
        container: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 330,
            marginBottom: 10
        }
    };
};

var Company = function (_Component) {
    _inherits(Company, _Component);

    function Company() {
        _classCallCheck(this, Company);

        return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).apply(this, arguments));
    }

    _createClass(Company, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: classes.container },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'T\xEAn c\xF4ng ty',
                    id: 'margin-none',
                    defaultValue: 'C\xF4ng ty TNHH XJK',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'Hotline',
                    id: 'margin-dense',
                    defaultValue: '028 7308 2839',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: '\u0110i\u1EC7n tho\u1EA1i',
                    id: 'Phone',
                    defaultValue: '0909 7309 999',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'M\xE3 s\u1ED1 thu\u1EBF',
                    id: 'margin-none',
                    defaultValue: '010 1010 010',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'Email',
                    id: 'margin-dense',
                    defaultValue: 'lienhe@xjk.vn',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: '\u0110\u1ECBa ch\u1EC9',
                    id: 'margin-normal',
                    defaultValue: '54/5 T\xF4 Ng\u1ECDc V\xE2n, Ph\u01B0\u1EDDng Th\u1EA1nh Xu\xE2n, Qu\u1EADn 12, HCM',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'Facebook',
                    id: 'margin-none',
                    defaultValue: 'https://facebook.com/xjk.vn',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'Google Plus',
                    id: 'margin-dense',
                    defaultValue: 'https://plus.google.com/3243242',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'Youtube',
                    id: 'margin-normal',
                    defaultValue: 'https://youtube.com',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'Skype',
                    id: 'margin-none',
                    defaultValue: 'Skype',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'Zalo',
                    id: 'margin-dense',
                    defaultValue: '028 7308 2839',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: '\u0110\u1ECBa ch\u1EC9',
                    id: 'margin-normal',
                    defaultValue: '54/5 T\xF4 Ng\u1ECDc V\xE2n, Ph\u01B0\u1EDDng Th\u1EA1nh Xu\xE2n, Qu\u1EADn 12, HCM',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'T\xEAn c\xF4ng ty',
                    id: 'margin-none',
                    defaultValue: 'C\xF4ng ty TNHH XJK',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'Hotline',
                    id: 'margin-dense',
                    defaultValue: '028 7308 2839',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: '\u0110\u1ECBa ch\u1EC9',
                    id: 'margin-normal',
                    defaultValue: '54/5 T\xF4 Ng\u1ECDc V\xE2n, Ph\u01B0\u1EDDng Th\u1EA1nh Xu\xE2n, Qu\u1EADn 12, HCM',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'T\xEAn c\xF4ng ty',
                    id: 'margin-none',
                    defaultValue: 'C\xF4ng ty TNHH XJK',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: 'Hotline',
                    id: 'margin-dense',
                    defaultValue: '028 7308 2839',
                    className: classes.textField,
                    helperText: ''
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
                    label: '\u0110\u1ECBa ch\u1EC9',
                    id: 'margin-normal',
                    defaultValue: '54/5 T\xF4 Ng\u1ECDc V\xE2n, Ph\u01B0\u1EDDng Th\u1EA1nh Xu\xE2n, Qu\u1EADn 12, HCM',
                    className: classes.textField,
                    helperText: ''
                })
            );
        }
    }]);

    return Company;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Company.propTypes = {
    classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Company));

/***/ })

});