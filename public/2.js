webpackJsonp([2],{

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pages_Admin_Master__ = __webpack_require__(613);

// import { connect } from 'react-redux';
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
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__Pages_Admin_Master__["a" /* default */]);

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layouts_Header__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layouts_Sidebar__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RouteAdmin__ = __webpack_require__(617);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var styles = function styles(theme) {
    return {
        root: {
            flexGrow: 1,
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

var Master = function (_Component) {
    _inherits(Master, _Component);

    function Master() {
        _classCallCheck(this, Master);

        return _possibleConstructorReturn(this, (Master.__proto__ || Object.getPrototypeOf(Master)).apply(this, arguments));
    }

    _createClass(Master, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: classes.root },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Layouts_Header__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Layouts_Sidebar__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'main',
                    { className: classes.content },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.toolbar }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RouteAdmin__["a" /* default */], this.props)
                    )
                )
            );
        }
    }]);

    return Master;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(Master));

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__ = __webpack_require__(24);
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

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SidebarItem__ = __webpack_require__(616);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










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

var Sidebar = function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SidebarItem__["a" /* default */], null)
        )
      );
    }
  }]);

  return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

// Sidebar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Sidebar));

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(84);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SidebarItem = function (_Component) {
  _inherits(SidebarItem, _Component);

  function SidebarItem() {
    _classCallCheck(this, SidebarItem);

    return _possibleConstructorReturn(this, (SidebarItem.__proto__ || Object.getPrototypeOf(SidebarItem)).apply(this, arguments));
  }

  _createClass(SidebarItem, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
              { to: '/xjk-system/company' },
              'Th\xF4ng tin c\xF4ng ty'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
              { to: '/xjk-system' },
              'Dashbord'
            )
          )
        )
      );
    }
  }]);

  return SidebarItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SidebarItem);

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loadable__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Progress__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Progress__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import { get_token } from './../../actions/Login';



var Loading = function Loading() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		null,
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Progress__["LinearProgress"], null)
	);
};
var DashboardContainer = __WEBPACK_IMPORTED_MODULE_3_react_loadable___default()({
	loader: function loader() {
		return __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 606));
	},
	loading: Loading
});
var CompanyContainer = __WEBPACK_IMPORTED_MODULE_3_react_loadable___default()({
	loader: function loader() {
		return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 618));
	},
	loading: Loading
});

var RouteAdmin = function (_Component) {
	_inherits(RouteAdmin, _Component);

	function RouteAdmin() {
		_classCallCheck(this, RouteAdmin);

		return _possibleConstructorReturn(this, (RouteAdmin.__proto__ || Object.getPrototypeOf(RouteAdmin)).apply(this, arguments));
	}

	_createClass(RouteAdmin, [{
		key: 'render',
		value: function render() {
			var isLogin = this.props.isLogin;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["e" /* Switch */],
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Route */], { exact: true, path: '' + this.props.match.path, component: DashboardContainer }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Route */], { path: this.props.match.path + '/company', component: CompanyContainer })
			);
		}
	}]);

	return RouteAdmin;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
// function mapStateToProps(state) {
// 	return {
// 		isLogin: state.Login.isLogin
// 	};
// }
// function mapDispatchToProps(dispatch) {
// 	return {
// 		checkToken: () => dispatch(get_token())
// 	};
// }


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(null, null)(RouteAdmin));

/***/ })

});