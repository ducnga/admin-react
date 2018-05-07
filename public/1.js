webpackJsonp([1],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(578);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIconCustom = typeof global !== 'undefined' && global.__MUI_SvgIcon__ || _SvgIcon2.default;

function createSvgIcon(path, displayName) {
  var Icon = function Icon(props) {
    return _react2.default.createElement(
      SvgIconCustom,
      props,
      path
    );
  };

  Icon.displayName = displayName;
  Icon = (0, _pure2.default)(Icon);
  Icon.muiName = 'SvgIcon';

  return Icon;
};

exports.default = createSvgIcon;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setStatic = __webpack_require__(580);

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__(581);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SidebarItem__ = __webpack_require__(576);









var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    drawerPaper: {
      position: 'relative',
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
  };
};

function ClippedDrawer(props) {
  var classes = props.classes;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer___default.a,
    {
      variant: 'permanent',
      classes: {
        paper: classes.drawerPaper
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.toolbar }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_material_ui_List___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_7__SidebarItem__["a" /* ListItemSidebar */]
    )
  );
}

ClippedDrawer.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(ClippedDrawer));

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__);








var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    }
  };
};

function ClippedDrawer(props) {
  var classes = props.classes;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default.a,
    { position: 'absolute', className: classes.appBar },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a,
        { variant: 'title', color: 'inherit', noWrap: true },
        'ADMINCP'
      )
    )
  );
}

ClippedDrawer.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(ClippedDrawer));

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemSidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_List__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_MoveToInbox__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_icons_MoveToInbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_icons_MoveToInbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Home__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Settings__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_ViewList__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_ViewList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_ViewList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Edit__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Edit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Edit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_ShoppingCart__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_ShoppingCart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_ShoppingCart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_PermMedia__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_PermMedia___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_PermMedia__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Book__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Book___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Book__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_icons_SupervisorAccount__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_icons_SupervisorAccount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_icons_SupervisorAccount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_PermIdentity__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_PermIdentity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_PermIdentity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Description__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Description___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Description__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Close__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Business__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Business___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Business__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_ExpansionPanel__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_ExpansionPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_material_ui_ExpansionPanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_Typography__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ExpandMore__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ExpandMore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ExpandMore__);




















var ListItemSidebar = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Home___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'T\u1ED5ng quan' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_15_material_ui_ExpansionPanel___default.a,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_15_material_ui_ExpansionPanel__["ExpansionPanelSummary"],
      { expandIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_ExpandMore___default.a, null) },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Settings___default.a, null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'C\u1EA5u h\xECnh' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_15_material_ui_ExpansionPanel__["ExpansionPanelDetails"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
          { button: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Business___default.a, null)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'C\xF4ng ty' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
          { button: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Home___default.a, null)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'C\xF4ng ty' })
        )
      )
    )
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_ViewList___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'Danh m\u1EE5c' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Edit___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'B\xE0i vi\u1EBFt' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_ShoppingCart___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'S\u1EA3n ph\u1EA9m' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_PermMedia___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'Media' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons_Book___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: '\u0110\u01A1n h\xE0ng' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Description___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'Tin \u0111\u0103ng' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_icons_SupervisorAccount___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'Nh\xE2n vi\xEAn' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_PermIdentity___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: 'Th\xE0nh vi\xEAn' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItem"],
    { button: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemIcon"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_Close___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_List__["ListItemText"], { primary: '\u0110\u0103ng xu\u1EA5t' })
  )
);

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z' })
), 'MoveToInbox');

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shouldUpdate = __webpack_require__(579);

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__(582);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _setDisplayName = __webpack_require__(219);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(220);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return !(0, _shallowEqual2.default)(props, nextProps);
  });

  if (true) {
    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

exports.default = pure;

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _setDisplayName = __webpack_require__(219);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(220);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var ShouldUpdate = function (_Component) {
      _inherits(ShouldUpdate, _Component);

      function ShouldUpdate() {
        _classCallCheck(this, ShouldUpdate);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (true) {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

exports.default = shouldUpdate;

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shallowEqual = __webpack_require__(79);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' })
), 'Home');

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z' })
), 'Settings');

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z' })
), 'ViewList');

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' })
), 'Edit');

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z' })
), 'ShoppingCart');

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z' })
), 'PermMedia');

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z' })
), 'Book');

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z' })
), 'SupervisorAccount');

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z' })
), 'PermIdentity');

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' })
), 'Description');

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' })
), 'Close');

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z' })
), 'Business');

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(18);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
), 'ExpandMore');

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pages_Admin_Dashboard_Dashboard__ = __webpack_require__(629);


// import { send_login } from './../../../actions/Login'



// function mapStateToProps(state) {
//     return {
//         Login: state.Login
//     };
// }
// function mapDispatchToProps(dispatch) {
//     return {

//     };
// }
// connect(null, null, null, { pure: false })
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2__Pages_Admin_Dashboard_Dashboard__["a" /* default */]);

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layouts_Header__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layouts_Sidebar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Typography__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var styles = function styles(theme) {
    return {
        root: {
            flexGrow: 1,
            height: 430,
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex'
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing.unit * 3,
            minWidth: 0 // So the Typography noWrap works
        },
        toolbar: theme.mixins.toolbar
    };
};

var Dashboard = function (_Component) {
    _inherits(Dashboard, _Component);

    function Dashboard() {
        _classCallCheck(this, Dashboard);

        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
    }

    _createClass(Dashboard, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Layouts_Header__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Layouts_Sidebar__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'main',
                    { className: classes.content },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.toolbar }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default.a, null)
                )
            );
        }
    }]);

    return Dashboard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styles)(Dashboard));

/***/ })

});