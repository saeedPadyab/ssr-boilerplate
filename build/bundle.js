/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _app = __webpack_require__(/*! ./app */ \"./src/client/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _UsersListPage = __webpack_require__(/*! ./pages/UsersListPage */ \"./src/client/pages/UsersListPage.js\");\n\nvar _UsersListPage2 = _interopRequireDefault(_UsersListPage);\n\nvar _AdminsListPage = __webpack_require__(/*! ./pages/AdminsListPage */ \"./src/client/pages/AdminsListPage.js\");\n\nvar _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);\n\nvar _NotfoundPage = __webpack_require__(/*! ./pages/NotfoundPage */ \"./src/client/pages/NotfoundPage.js\");\n\nvar _NotfoundPage2 = _interopRequireDefault(_NotfoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _app2.default, {\n  routes: [_extends({}, _HomePage2.default, {\n    path: \"/\",\n    exact: true\n  }), _extends({}, _AdminsListPage2.default, {\n    path: \"/admins\"\n  }), _extends({}, _UsersListPage2.default, {\n    path: \"/users\"\n  }), _extends({}, _NotfoundPage2.default)]\n})];\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_USERS = exports.FETCH_USERS = \"fetch_users\";\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = \"fetch_current_user\";\nvar FETCH_ADMINS = exports.FETCH_ADMINS = \"fetch_admins\";\n\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axiosInstance.get(\"/users\");\n\n            case 2:\n              res = _context.sent;\n\n              dispatch({\n                type: FETCH_USERS,\n                payload: res.data\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, axiosInstance) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axiosInstance.get(\"/current_user\");\n\n            case 2:\n              res = _context2.sent;\n\n              dispatch({\n                type: FETCH_CURRENT_USER,\n                payload: res.data\n              });\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchAdmins = exports.fetchAdmins = function fetchAdmins() {\n  return function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, axiosInstance) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return axiosInstance.get(\"/admins\");\n\n            case 2:\n              res = _context3.sent;\n\n              dispatch({\n                type: FETCH_ADMINS,\n                payload: res.data\n              });\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined);\n    }));\n\n    return function (_x7, _x8, _x9) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Header = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/client/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    _react2.default.createElement(\n      \"div\",\n      { style: { paddingTop: 40 } },\n      (0, _reactRouterConfig.renderRoutes)(route.routes)\n    )\n  );\n};\nexports.default = {\n  component: App,\n  loadData: function loadData(_ref2) {\n    var dispatch = _ref2.dispatch;\n    return dispatch((0, _actions.fetchCurrentUser)());\n  }\n};\n\n//# sourceURL=webpack:///./src/client/app.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(_ref) {\n  var auth = _ref.auth;\n\n  var authButton = auth ? _react2.default.createElement(\n    \"a\",\n    { href: \"/api/logout\" },\n    \"Logout\"\n  ) : _react2.default.createElement(\n    \"a\",\n    { href: \"/api/auth/google\" },\n    \"Login\"\n  );\n  return _react2.default.createElement(\n    \"nav\",\n    { style: { position: \"fixed\", width: \"100%\", zIndex: 100 } },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"nav-wrapper\" },\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: \"/\", className: \"brand-logo left\" },\n        \"React SSR\"\n      ),\n      _react2.default.createElement(\n        \"ul\",\n        { className: \"right\" },\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/users\" },\n            \"Users\"\n          )\n        ),\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/admins\" },\n            \"Admins\"\n          )\n        ),\n        _react2.default.createElement(\n          \"li\",\n          null,\n          authButton\n        )\n      )\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n  var auth = _ref2.auth;\n  return {\n    auth: auth\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/hocs/requireAuth.js":
/*!***************************************************!*\
  !*** ./src/client/components/hocs/requireAuth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// localStorage.getItem(\"token\");\nexports.default = function (WrappedComponent) {\n  function RequireAuth(props) {\n    switch (props.auth) {\n      case false:\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: \"/\" });\n      case null:\n        return _react2.default.createElement(\n          \"div\",\n          null,\n          \"...loading\"\n        );\n      default:\n        return _react2.default.createElement(WrappedComponent, props);\n    }\n  }\n  function mapStateToProps(_ref) {\n    var auth = _ref.auth;\n\n    return {\n      auth: auth\n    };\n  }\n  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);\n};\n\n//# sourceURL=webpack:///./src/client/components/hocs/requireAuth.js?");

/***/ }),

/***/ "./src/client/pages/AdminsListPage.js":
/*!********************************************!*\
  !*** ./src/client/pages/AdminsListPage.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./../actions */ \"./src/client/actions/index.js\");\n\nvar _requireAuth = __webpack_require__(/*! ./../components/hocs/requireAuth */ \"./src/client/components/hocs/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AdminsList = function AdminsList(_ref) {\n  var admins = _ref.admins,\n      fetchAdmins = _ref.fetchAdmins;\n\n  (0, _react.useEffect)(function () {\n    fetchAdmins();\n  }, []);\n\n  function renderAdmins() {\n    return admins.map(function (admin) {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"col s12 l4\", key: admin.id },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"card\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"card-image waves-effect waves-block waves-light\" },\n            _react2.default.createElement(\"img\", {\n              className: \"activator\",\n              src: \"https://www.freecodecamp.org/news/content/images/2019/07/guillaume-fischer--JPCZcxeqzM-unsplash.jpg\"\n            })\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"card-content\" },\n            _react2.default.createElement(\n              \"span\",\n              { className: \"card-title activator grey-text text-darken-4\" },\n              admin.name,\n              _react2.default.createElement(\n                \"i\",\n                { className: \"material-icons right\" },\n                \"more_vert\"\n              )\n            ),\n            _react2.default.createElement(\n              \"p\",\n              null,\n              _react2.default.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Choose\"\n              )\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"card-reveal\" },\n            _react2.default.createElement(\n              \"span\",\n              { className: \"card-title grey-text text-darken-4\" },\n              \"Card Title\",\n              _react2.default.createElement(\n                \"i\",\n                { className: \"material-icons right\" },\n                \"close\"\n              )\n            ),\n            _react2.default.createElement(\n              \"p\",\n              null,\n              \"Here is some more information about this product that is only revealed once clicked on.\"\n            )\n          )\n        )\n      );\n    });\n  }\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"container xl\", style: { paddingTop: 30 } },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"row\" },\n      renderAdmins()\n    )\n  );\n};\nvar mapStateToProps = function mapStateToProps(_ref2) {\n  var admins = _ref2.admins;\n  return {\n    admins: admins\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchAdmins: function fetchAdmins() {\n      return dispatch((0, _actions.fetchAdmins)());\n    }\n  };\n};\n\nexports.default = {\n  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _requireAuth2.default)(AdminsList)),\n  loadData: function loadData(_ref3) {\n    var dispatch = _ref3.dispatch;\n\n    return dispatch((0, _actions.fetchAdmins)());\n  }\n};\n\n//# sourceURL=webpack:///./src/client/pages/AdminsListPage.js?");

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(props) {\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"center-align\", style: { marginTop: 200 } },\n    _react2.default.createElement(\n      \"h3\",\n      null,\n      \"Welcome\"\n    ),\n    _react2.default.createElement(\n      \"p\",\n      null,\n      \"Checkout these awesome features\"\n    )\n  );\n};\nexports.default = { component: Home };\n\n//# sourceURL=webpack:///./src/client/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/NotfoundPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/NotfoundPage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n  staticContext.notFound = true;\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"center-align\", style: { marginTop: 200 } },\n    _react2.default.createElement(\n      \"h3\",\n      null,\n      \"Ooops!Not Found Page.\"\n    ),\n    _react2.default.createElement(\n      \"p\",\n      null,\n      \"Choose one of the pages exist on header\"\n    )\n  );\n};\n\nexports.default = {\n  component: NotFoundPage\n};\n\n//# sourceURL=webpack:///./src/client/pages/NotfoundPage.js?");

/***/ }),

/***/ "./src/client/pages/UsersListPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/UsersListPage.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./../actions */ \"./src/client/actions/index.js\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UsersList = function UsersList(_ref) {\n  var users = _ref.users,\n      fetchUsers = _ref.fetchUsers,\n      _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n  (0, _react.useEffect)(function () {\n    fetchUsers();\n  }, []);\n  function renderUsers() {\n    return users.map(function (user) {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"col s12 l4\", key: user.id },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"card\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"card-image waves-effect waves-block waves-light\" },\n            _react2.default.createElement(\"img\", {\n              className: \"activator\",\n              src: \"https://www.freecodecamp.org/news/content/images/2019/07/guillaume-fischer--JPCZcxeqzM-unsplash.jpg\"\n            })\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"card-content\" },\n            _react2.default.createElement(\n              \"span\",\n              { className: \"card-title activator grey-text text-darken-4\" },\n              user.name,\n              _react2.default.createElement(\n                \"i\",\n                { className: \"material-icons right\" },\n                \"more_vert\"\n              )\n            ),\n            _react2.default.createElement(\n              \"p\",\n              null,\n              _react2.default.createElement(\n                \"a\",\n                { href: \"#\" },\n                \"Choose\"\n              )\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"card-reveal\" },\n            _react2.default.createElement(\n              \"span\",\n              { className: \"card-title grey-text text-darken-4\" },\n              \"Card Title\",\n              _react2.default.createElement(\n                \"i\",\n                { className: \"material-icons right\" },\n                \"close\"\n              )\n            ),\n            _react2.default.createElement(\n              \"p\",\n              null,\n              \"Here is some more information about this product that is only revealed once clicked on.\"\n            )\n          )\n        )\n      );\n    });\n  }\n  function head() {\n    return _react2.default.createElement(\n      _reactHelmet.Helmet,\n      null,\n      _react2.default.createElement(\n        \"title\",\n        null,\n        users.length + \" Users Loaded\"\n      ),\n      _react2.default.createElement(\"meta\", { property: \"og:title\", content: \"Users App\" })\n    );\n  }\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"container xl\", style: { paddingTop: 30 } },\n    head(),\n    _react2.default.createElement(\n      \"div\",\n      { className: \"row\" },\n      renderUsers()\n    )\n  );\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    users: state.users\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchUsers: function fetchUsers() {\n      return dispatch((0, _actions.fetchUsers)());\n    }\n  };\n};\n\nvar loadData = function loadData(store) {\n  return store.dispatch((0, _actions.fetchUsers)());\n};\n\nexports.default = {\n  loadData: loadData,\n  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersList)\n};\n\n//# sourceURL=webpack:///./src/client/pages/UsersListPage.js?");

/***/ }),

/***/ "./src/client/reducers/adminReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/adminReducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(/*! ./../actions */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.FETCH_ADMINS:\n      return action.payload;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/adminReducer.js?");

/***/ }),

/***/ "./src/client/reducers/authReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/authReducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(/*! ./../actions/ */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.FETCH_CURRENT_USER:\n      return action.payload || false;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/authReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _userReducer = __webpack_require__(/*! ./userReducer */ \"./src/client/reducers/userReducer.js\");\n\nvar _userReducer2 = _interopRequireDefault(_userReducer);\n\nvar _authReducer = __webpack_require__(/*! ./authReducer */ \"./src/client/reducers/authReducer.js\");\n\nvar _authReducer2 = _interopRequireDefault(_authReducer);\n\nvar _adminReducer = __webpack_require__(/*! ./adminReducer */ \"./src/client/reducers/adminReducer.js\");\n\nvar _adminReducer2 = _interopRequireDefault(_adminReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  users: _userReducer2.default,\n  auth: _authReducer2.default,\n  admins: _adminReducer2.default\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/userReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/userReducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(/*! ./../actions */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.FETCH_USERS:\n      return action.payload;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/reducers/userReducer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(/*! ./../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n  var axiosInstance = _axios2.default.create({\n    baseURL: \"http://react-ssr-api.herokuapp.com\",\n    headers: { cookie: req.get(\"cookie\") || \"\" }\n  });\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n  return store;\n};\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _Routes = __webpack_require__(/*! ./../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        \"div\",\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n  var helmet = _reactHelmet.Helmet.renderStatic();\n  return \"\\n        <html>\\n            <head>\\n              \" + helmet.title.toString() + \"\\n              \" + helmet.meta.toString() + \"\\n              <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\\\">\\n            </head>\\n            <body>\\n                <div id=\\\"root\\\">\" + content + \"</div>\\n                <script>\\n                    window.INITIAL_STATE = \" + (0, _serializeJavascript2.default)(store.getState()) + \"\\n                </script>\\n                <script src=\\\"bundle.js\\\"></script>\\n            </body>\\n        </html>\\n    \";\n};\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(\"/api\", (0, _expressHttpProxy2.default)(\"http://react-ssr-api.herokuapp.com\", {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers[\"x-forwarded-host\"] = \"localhost:3000\";\n    return opts;\n  }\n}));\n\napp.use(_express2.default.static(\"public\"));\n\napp.get(\"*\", function (req, res) {\n  var store = (0, _createStore2.default)(req);\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = (0, _renderer2.default)(req, store, context);\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n\n    if (context.notFound) {\n      res.status(404);\n    }\n    res.send(content);\n  });\n});\napp.listen(3001, function () {\n  console.log(\"Listening on port 3000\");\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });