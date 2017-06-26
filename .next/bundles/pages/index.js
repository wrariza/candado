
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _index = __webpack_require__(81);

var _index2 = _interopRequireDefault(_index);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(559);

var _reactStyledFlexboxgrid = __webpack_require__(571);

var _theme = __webpack_require__(574);

var _Hero = __webpack_require__(568);

var _Hero2 = _interopRequireDefault(_Hero);

var _Logo = __webpack_require__(573);

var _Logo2 = _interopRequireDefault(_Logo);

var _Footer = __webpack_require__(576);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/pages/index.js?entry';


var Home = function (_Component) {
    (0, _inherits3.default)(Home, _Component);

    function Home() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading: false
        }, _this.handleSubmit = function (event) {
            _this.setState({
                loading: true
            });
            event.preventDefault();
            var form = event.target;
            var value = form.elements.buscar.value;
            _index2.default.push('/results?query=' + value);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.defaultTheme, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_Hero2.default, { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_Logo2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            })), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, this.state.loading && _react2.default.createElement(Loading, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement(_Footer2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }))));
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/candado/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/candado/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(560);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(559);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = __webpack_require__(571);

var _Logo = __webpack_require__(573);

var _Logo2 = _interopRequireDefault(_Logo);

var _Search = __webpack_require__(569);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/components/Hero.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: linear-gradient(to left, rgba(56, 56, 56, 0.5), rgba(64, 60, 64, 0.5));\n  padding: ', ';\n'], ['\n  background: linear-gradient(to left, rgba(56, 56, 56, 0.5), rgba(64, 60, 64, 0.5));\n  padding: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n   background-image: ', ';\n   background-repeat: no-repeat;\n   background-position: center center;\n   background-size: 100% auto;\n   @media (max-width: 1024px) {\n    background: rgb(233, 131, 238);\n   }\n'], ['\n   background-image: ', ';\n   background-repeat: no-repeat;\n   background-position: center center;\n   background-size: 100% auto;\n   @media (max-width: 1024px) {\n    background: rgb(233, 131, 238);\n   }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n   color: white;\n   text-aligh: center;\n'], ['\n   color: white;\n   text-aligh: center;\n']);

var wallpaper = 'url(../static/seguros.jpg)';

function setPadding(props) {
    if (props.sm) {
        return '2em 0';
    }
    return '100px 0 186px';
}

var Gradient = _styledComponents2.default.div(_templateObject, setPadding);

var Background = _styledComponents2.default.div(_templateObject2, wallpaper);

var GridHero = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Grid)(_templateObject3);

function Hero(props) {
    return _react2.default.createElement(Background, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement(Gradient, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement(GridHero, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, props.children, _react2.default.createElement(_Search2.default, {
        onSubmit: props.onSubmit,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }))));
}

exports.default = Hero;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/candado/components/Hero.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/candado/components/Hero.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(560);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(559);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/components/Search.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    font-weight: bold;\n    font-family: \'Josefin\'\n    @media (max-width: 1024px) {\n        flex-direction: column;\n    }\n'], ['\n    display: flex;\n    font-weight: bold;\n    font-family: \'Josefin\'\n    @media (max-width: 1024px) {\n        flex-direction: column;\n    }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    flex: 1;\n    margin-right: 1rem;\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n    ', '\n    @media (max-width: 1024px) {\n        margin-right: 0;\n    }\n'], ['\n    flex: 1;\n    margin-right: 1rem;\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n    ', '\n    @media (max-width: 1024px) {\n        margin-right: 0;\n    }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    ', '\n    background-color: #2b3133;\n    padding: 0.5rem 46px;\n    text-transform: uppercase;\n    font-weight: bold; \n    font-family: \'Josefin\';\n    color: white;\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n    font-size: 1rem;\n    cursor: pointer;\n    @media (max-width: 1024px){\n         margin-top: 1rem;\n    }\n\n    &:hover {\n        background-color: white;\n        color: #2b3133;\n        transform: scale(1.1);\n    }\n'], ['\n    ', '\n    background-color: #2b3133;\n    padding: 0.5rem 46px;\n    text-transform: uppercase;\n    font-weight: bold; \n    font-family: \'Josefin\';\n    color: white;\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n    font-size: 1rem;\n    cursor: pointer;\n    @media (max-width: 1024px){\n         margin-top: 1rem;\n    }\n\n    &:hover {\n        background-color: white;\n        color: #2b3133;\n        transform: scale(1.1);\n    }\n']);

var DefaultStyles = '\n    outline: 0;\n    borde: none;\n    border-radius: 4px;\n';

var Form = _styledComponents2.default.form(_templateObject);

var InputSeacher = _styledComponents2.default.input(_templateObject2, DefaultStyles);

var Button = _styledComponents2.default.button(_templateObject3, DefaultStyles);

function Searcher(props) {
    return _react2.default.createElement(Form, { onSubmit: props.onSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement(InputSeacher, {
        name: 'buscar',
        type: 'text',
        placeholder: 'ingrese sus palabras favoritas  y cree su candado',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }), _react2.default.createElement(Button, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, 'Generar'));
}

exports.default = Searcher;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/candado/components/Search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/candado/components/Search.js"); } } })();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(561);


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(560);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(559);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/components/Logo.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: Frijole;\n  font-size: 2rem;\n  color: white;\n'], ['\n  font-family: Frijole;\n  font-size: 2rem;\n  color: white;\n']);

var L = _styledComponents2.default.h1(_templateObject);

function Logo(props) {
    return _react2.default.createElement(L, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, 'candado');
}

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/candado/components/Logo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/candado/components/Logo.js"); } } })();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultTheme = exports.defaultTheme = {
  flexboxgrid: {
    container: {
      xs: 30, // rem
      sm: 48, // rem
      md: 48, // rem
      lg: 48 }
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/candado/lib/theme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/candado/lib/theme.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = {
	"item1": {
		"title": "Mauris acv arius arcu",
		"text": "Proin dolor libero, interdum vitae lorem et, pellentesque feugait urna. Nulla viverra, ex quis interdum malesuada, tellus enim viverra nulla"
	},
	"item2": {
		"title": "Nulla viverra",
		"text": "Dolor libero, interdum vitae lorem et, pallentesque feugiat urna. Nulla viverra, ex"
	},
	"item3": {
		"title": "Usce ornare",
		"text": "Ain dolor libero, interdum vitae lorem et, pallentesque feugiat urna. Nulla uis interdum malesu tellus enim viverra nulla"
	}
};

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(571);

var _FooterItem = __webpack_require__(577);

var _FooterItem2 = _interopRequireDefault(_FooterItem);

var _footer = __webpack_require__(575);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/components/Footer.js';


function Footer() {
  return _react2.default.createElement(_reactStyledFlexboxgrid.Row, { center: 'xs', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_FooterItem2.default, { item: _footer2.default.item1, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_FooterItem2.default, { item: _footer2.default.item2, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_FooterItem2.default, { item: _footer2.default.item3, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })));
}

exports.default = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/candado/components/Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/candado/components/Footer.js"); } } })();

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(560);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(559);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/components/FooterItem.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 48px 15px;\n'], ['\n  padding: 48px 15px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: bold;\n'], ['\n  font-weight: bold;\n']);

var Item = _styledComponents2.default.div(_templateObject);
var Title = _styledComponents2.default.h4(_templateObject2);

function FooterItem(props) {
  return _react2.default.createElement(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.item.title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, props.item.text));
}

exports.default = FooterItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/candado/components/FooterItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/candado/components/FooterItem.js"); } } })();

/***/ })

},[572]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzEyOThhMzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvLmpzPzEyOThhMzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2guanM/MTI5OGEzMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28uanM/MTI5OGEzMiIsIndlYnBhY2s6Ly8vLi9saWIvdGhlbWUuanM/MTI5OGEzMiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvY29udGVudC9mb290ZXIuanNvbj8xMjk4YTMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzPzEyOThhMzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXJJdGVtLmpzPzEyOThhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnO1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSAnLi4vbGliL3RoZW1lJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgIHN0YXRlID0ge1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB9XG4gICAgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtLmVsZW1lbnRzLmJ1c2Nhci52YWx1ZTtcbiAgICAgICAgUm91dGVyLnB1c2goYC9yZXN1bHRzP3F1ZXJ5PSR7dmFsdWV9YCk7XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17ZGVmYXVsdFRoZW1lfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SGVybyBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvLz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZXJvPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgR3JpZCwgUm93ICwgQ29sfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28uanMnO1xuaW1wb3J0IFNlYXJjaGVyIGZyb20gJy4vU2VhcmNoJztcblxudmFyIHdhbGxwYXBlciA9ICd1cmwoLi4vc3RhdGljL3NlZ3Vyb3MuanBnKSc7XG5cbmZ1bmN0aW9uIHNldFBhZGRpbmcocHJvcHMpIHtcbiAgaWYgKHByb3BzLnNtKSB7XG4gICAgcmV0dXJuICcyZW0gMCc7XG4gIH1cbiAgcmV0dXJuICcxMDBweCAwIDE4NnB4Jztcbn1cblxuY29uc3QgR3JhZGllbnQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSg1NiwgNTYsIDU2LCAwLjUpLCByZ2JhKDY0LCA2MCwgNjQsIDAuNSkpO1xuICBwYWRkaW5nOiAke3NldFBhZGRpbmd9O1xuYDtcblxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gICBiYWNrZ3JvdW5kLWltYWdlOiAke3dhbGxwYXBlcn07XG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMzMsIDEzMSwgMjM4KTtcbiAgIH1cbmBcblxuY29uc3QgR3JpZEhlcm8gPSBzdHlsZWQoR3JpZClgXG4gICBjb2xvcjogd2hpdGU7XG4gICB0ZXh0LWFsaWdoOiBjZW50ZXI7XG5gXG5cbmZ1bmN0aW9uIEhlcm8ocHJvcHMpe1xuICAgIHJldHVybihcbiAgICAgICAgPEJhY2tncm91bmQ+XG4gICAgICAgICAgICA8R3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPEdyaWRIZXJvPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hlclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEhlcm8+XG4gICAgICAgICAgICA8L0dyYWRpZW50PlxuICAgICAgICA8L0JhY2tncm91bmQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZXJvLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBEZWZhdWx0U3R5bGVzID0gYFxuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuYDtcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluJ1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5gO1xuXG5jb25zdCBJbnB1dFNlYWNoZXIgPSBzdHlsZWQuaW5wdXRgXG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgICR7RGVmYXVsdFN0eWxlc31cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgICR7RGVmYXVsdFN0eWxlc31cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMTMzO1xuICAgIHBhZGRpbmc6IDAuNXJlbSA0NnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbic7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzJiMzEzMztcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbmA7XG5cbmZ1bmN0aW9uIFNlYXJjaGVyKHByb3BzKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9PlxuICAgICAgICAgICAgPElucHV0U2VhY2hlclxuICAgICAgICAgICAgICAgIG5hbWU9XCJidXNjYXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImluZ3Jlc2Ugc3VzIHBhbGFicmFzIGZhdm9yaXRhcyAgeSBjcmVlIHN1IGNhbmRhZG9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24+R2VuZXJhcjwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWFyY2guanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEwgPSBzdHlsZWQuaDFgXG4gIGZvbnQtZmFtaWx5OiBGcmlqb2xlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmZ1bmN0aW9uIExvZ28gKHByb3BzKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8TD5cbiAgICAgICAgIGNhbmRhZG9cbiAgICAgICAgPC9MPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvZ28uanMiLCJleHBvcnQgY29uc3QgZGVmYXVsdFRoZW1lID0ge1xuICBmbGV4Ym94Z3JpZDoge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgeHM6IDMwLCAvLyByZW1cbiAgICAgIHNtOiA0OCwgLy8gcmVtXG4gICAgICBtZDogNDgsIC8vIHJlbVxuICAgICAgbGc6IDQ4LCAvLyByZW1cbiAgICB9LFxuICB9XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdGhlbWUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtMVwiOiB7XG5cdFx0XCJ0aXRsZVwiOiBcIk1hdXJpcyBhY3YgYXJpdXMgYXJjdVwiLFxuXHRcdFwidGV4dFwiOiBcIlByb2luIGRvbG9yIGxpYmVybywgaW50ZXJkdW0gdml0YWUgbG9yZW0gZXQsIHBlbGxlbnRlc3F1ZSBmZXVnYWl0IHVybmEuIE51bGxhIHZpdmVycmEsIGV4IHF1aXMgaW50ZXJkdW0gbWFsZXN1YWRhLCB0ZWxsdXMgZW5pbSB2aXZlcnJhIG51bGxhXCJcblx0fSxcblx0XCJpdGVtMlwiOiB7XG5cdFx0XCJ0aXRsZVwiOiBcIk51bGxhIHZpdmVycmFcIixcblx0XHRcInRleHRcIjogXCJEb2xvciBsaWJlcm8sIGludGVyZHVtIHZpdGFlIGxvcmVtIGV0LCBwYWxsZW50ZXNxdWUgZmV1Z2lhdCB1cm5hLiBOdWxsYSB2aXZlcnJhLCBleFwiXG5cdH0sXG5cdFwiaXRlbTNcIjoge1xuXHRcdFwidGl0bGVcIjogXCJVc2NlIG9ybmFyZVwiLFxuXHRcdFwidGV4dFwiOiBcIkFpbiBkb2xvciBsaWJlcm8sIGludGVyZHVtIHZpdGFlIGxvcmVtIGV0LCBwYWxsZW50ZXNxdWUgZmV1Z2lhdCB1cm5hLiBOdWxsYSB1aXMgaW50ZXJkdW0gbWFsZXN1IHRlbGx1cyBlbmltIHZpdmVycmEgbnVsbGFcIlxuXHR9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL2NvbnRlbnQvZm9vdGVyLmpzb25cbi8vIG1vZHVsZSBpZCA9IDU3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LXN0eWxlZC1mbGV4Ym94Z3JpZCdcbmltcG9ydCBGb290ZXJJdGVtIGZyb20gJy4vRm9vdGVySXRlbSdcbmltcG9ydCBpdGVtcyBmcm9tICcuLi9zdGF0aWMvY29udGVudC9mb290ZXIuanNvbidcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3cgY2VudGVyPVwieHNcIj5cbiAgICAgIDxDb2wgeHM9ezEyfSBzbT17NH0+XG4gICAgICAgIDxGb290ZXJJdGVtIGl0ZW09e2l0ZW1zLml0ZW0xfSAvPlxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIHhzPXsxMn0gc209ezR9PlxuICAgICAgICA8Rm9vdGVySXRlbSBpdGVtPXtpdGVtcy5pdGVtMn0gLz5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgPEZvb3Rlckl0ZW0gaXRlbT17aXRlbXMuaXRlbTN9IC8+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0OHB4IDE1cHg7XG5gXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gXG5cbmZ1bmN0aW9uIEZvb3Rlckl0ZW0ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8SXRlbT5cbiAgICAgIDxUaXRsZT5cbiAgICAgICAge3Byb3BzLml0ZW0udGl0bGV9XG4gICAgICA8L1RpdGxlPlxuICAgICAgPHA+XG4gICAgICAgIHtwcm9wcy5pdGVtLnRleHR9XG4gICAgICA8L3A+XG4gICAgPC9JdGVtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3Rlckl0ZW1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Zvb3Rlckl0ZW0uanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBR0E7QUFGQTtBQUdBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUVBO0FBRkE7QUFBQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQU1BO0FBTkE7QUFBQTs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFTQTtBQUNBO0FBSUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBOztBQURBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQVFBO0FBQ0E7QUFVQTtBQUNBO0FBcUJBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        