
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 564:
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

/***/ 593:
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

var _reactStyledFlexboxgrid = __webpack_require__(569);

var _Logo = __webpack_require__(564);

var _Logo2 = _interopRequireDefault(_Logo);

var _Search = __webpack_require__(594);

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
    }, _react2.default.createElement(Gradient, { sm: props.sm, __source: {
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

/***/ 594:
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

/***/ 595:
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

/***/ 615:
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

var _reactStyledFlexboxgrid = __webpack_require__(569);

var _theme = __webpack_require__(595);

var _Hero = __webpack_require__(593);

var _Hero2 = _interopRequireDefault(_Hero);

var _Logo = __webpack_require__(564);

var _Logo2 = _interopRequireDefault(_Logo);

var _Footer = __webpack_require__(617);

var _Footer2 = _interopRequireDefault(_Footer);

var _Loading = __webpack_require__(619);

var _Loading2 = _interopRequireDefault(_Loading);

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
                    lineNumber: 26
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_Hero2.default, { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_Logo2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            })), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, this.state.loading && _react2.default.createElement(_Loading2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement(_Footer2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
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

/***/ 616:
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

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(569);

var _FooterItem = __webpack_require__(618);

var _FooterItem2 = _interopRequireDefault(_FooterItem);

var _footer = __webpack_require__(616);

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

/***/ 618:
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

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(559);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/components/Loading.js';


function Loading() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Loading...');
}

exports.default = Loading;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/candado/components/Loading.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/candado/components/Loading.js"); } } })();

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(615);


/***/ })

},[620]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby5qcz8yZTYxZjg3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVyby5qcz8yZTYxZjg3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzPzJlNjFmODciLCJ3ZWJwYWNrOi8vLy4vbGliL3RoZW1lLmpzPzJlNjFmODciLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MmU2MWY4NyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvY29udGVudC9mb290ZXIuanNvbj85MGQ1ZDFhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzPzkwZDVkMWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXJJdGVtLmpzPzkwZDVkMWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nLmpzPzkwZDVkMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBMID0gc3R5bGVkLmgxYFxuICBmb250LWZhbWlseTogRnJpam9sZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5mdW5jdGlvbiBMb2dvIChwcm9wcykge1xuICAgIHJldHVybihcbiAgICAgICAgPEw+XG4gICAgICAgICBjYW5kYWRvXG4gICAgICAgIDwvTD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2dvLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgR3JpZCwgUm93ICwgQ29sfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28uanMnO1xuaW1wb3J0IFNlYXJjaGVyIGZyb20gJy4vU2VhcmNoJztcblxudmFyIHdhbGxwYXBlciA9ICd1cmwoLi4vc3RhdGljL3NlZ3Vyb3MuanBnKSc7XG5cbmZ1bmN0aW9uIHNldFBhZGRpbmcocHJvcHMpIHtcbiAgaWYgKHByb3BzLnNtKSB7XG4gICAgcmV0dXJuICcyZW0gMCc7XG4gIH1cbiAgcmV0dXJuICcxMDBweCAwIDE4NnB4Jztcbn1cblxuY29uc3QgR3JhZGllbnQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSg1NiwgNTYsIDU2LCAwLjUpLCByZ2JhKDY0LCA2MCwgNjQsIDAuNSkpO1xuICBwYWRkaW5nOiAke3NldFBhZGRpbmd9O1xuYDtcblxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gICBiYWNrZ3JvdW5kLWltYWdlOiAke3dhbGxwYXBlcn07XG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMzMsIDEzMSwgMjM4KTtcbiAgIH1cbmBcblxuY29uc3QgR3JpZEhlcm8gPSBzdHlsZWQoR3JpZClgXG4gICBjb2xvcjogd2hpdGU7XG4gICB0ZXh0LWFsaWdoOiBjZW50ZXI7XG5gXG5cbmZ1bmN0aW9uIEhlcm8ocHJvcHMpe1xuICAgIHJldHVybihcbiAgICAgICAgPEJhY2tncm91bmQ+XG4gICAgICAgICAgICA8R3JhZGllbnQgc209e3Byb3BzLnNtfT5cbiAgICAgICAgICAgICAgICA8R3JpZEhlcm8+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSGVybz5cbiAgICAgICAgICAgIDwvR3JhZGllbnQ+XG4gICAgICAgIDwvQmFja2dyb3VuZD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlcm8uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IERlZmF1bHRTdHlsZXMgPSBgXG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5gO1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4nXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbmA7XG5cbmNvbnN0IElucHV0U2VhY2hlciA9IHN0eWxlZC5pbnB1dGBcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgJHtEZWZhdWx0U3R5bGVzfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgJHtEZWZhdWx0U3R5bGVzfVxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjMxMzM7XG4gICAgcGFkZGluZzogMC41cmVtIDQ2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluJztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAjMmIzMTMzO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuYDtcblxuZnVuY3Rpb24gU2VhcmNoZXIocHJvcHMpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtwcm9wcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICA8SW5wdXRTZWFjaGVyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJ1c2NhclwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5ncmVzZSBzdXMgcGFsYWJyYXMgZmF2b3JpdGFzICB5IGNyZWUgc3UgY2FuZGFkb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbj5HZW5lcmFyPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NlYXJjaC5qcyIsImV4cG9ydCBjb25zdCBkZWZhdWx0VGhlbWUgPSB7XG4gIGZsZXhib3hncmlkOiB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICB4czogMzAsIC8vIHJlbVxuICAgICAgc206IDQ4LCAvLyByZW1cbiAgICAgIG1kOiA0OCwgLy8gcmVtXG4gICAgICBsZzogNDgsIC8vIHJlbVxuICAgIH0sXG4gIH1cbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi90aGVtZS5qcyIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3Qtc3R5bGVkLWZsZXhib3hncmlkJztcbmltcG9ydCB7IGRlZmF1bHRUaGVtZSB9IGZyb20gJy4uL2xpYi90aGVtZSc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB9XG4gICAgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtLmVsZW1lbnRzLmJ1c2Nhci52YWx1ZTtcbiAgICAgICAgUm91dGVyLnB1c2goYC9yZXN1bHRzP3F1ZXJ5PSR7dmFsdWV9YCk7XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17ZGVmYXVsdFRoZW1lfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SGVybyBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvLz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZXJvPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbTFcIjoge1xuXHRcdFwidGl0bGVcIjogXCJNYXVyaXMgYWN2IGFyaXVzIGFyY3VcIixcblx0XHRcInRleHRcIjogXCJQcm9pbiBkb2xvciBsaWJlcm8sIGludGVyZHVtIHZpdGFlIGxvcmVtIGV0LCBwZWxsZW50ZXNxdWUgZmV1Z2FpdCB1cm5hLiBOdWxsYSB2aXZlcnJhLCBleCBxdWlzIGludGVyZHVtIG1hbGVzdWFkYSwgdGVsbHVzIGVuaW0gdml2ZXJyYSBudWxsYVwiXG5cdH0sXG5cdFwiaXRlbTJcIjoge1xuXHRcdFwidGl0bGVcIjogXCJOdWxsYSB2aXZlcnJhXCIsXG5cdFx0XCJ0ZXh0XCI6IFwiRG9sb3IgbGliZXJvLCBpbnRlcmR1bSB2aXRhZSBsb3JlbSBldCwgcGFsbGVudGVzcXVlIGZldWdpYXQgdXJuYS4gTnVsbGEgdml2ZXJyYSwgZXhcIlxuXHR9LFxuXHRcIml0ZW0zXCI6IHtcblx0XHRcInRpdGxlXCI6IFwiVXNjZSBvcm5hcmVcIixcblx0XHRcInRleHRcIjogXCJBaW4gZG9sb3IgbGliZXJvLCBpbnRlcmR1bSB2aXRhZSBsb3JlbSBldCwgcGFsbGVudGVzcXVlIGZldWdpYXQgdXJuYS4gTnVsbGEgdWlzIGludGVyZHVtIG1hbGVzdSB0ZWxsdXMgZW5pbSB2aXZlcnJhIG51bGxhXCJcblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0YXRpYy9jb250ZW50L2Zvb3Rlci5qc29uXG4vLyBtb2R1bGUgaWQgPSA2MTZcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnXG5pbXBvcnQgRm9vdGVySXRlbSBmcm9tICcuL0Zvb3Rlckl0ZW0nXG5pbXBvcnQgaXRlbXMgZnJvbSAnLi4vc3RhdGljL2NvbnRlbnQvZm9vdGVyLmpzb24nXG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Um93IGNlbnRlcj1cInhzXCI+XG4gICAgICA8Q29sIHhzPXsxMn0gc209ezR9PlxuICAgICAgICA8Rm9vdGVySXRlbSBpdGVtPXtpdGVtcy5pdGVtMX0gLz5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgPEZvb3Rlckl0ZW0gaXRlbT17aXRlbXMuaXRlbTJ9IC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgeHM9ezEyfSBzbT17NH0+XG4gICAgICAgIDxGb290ZXJJdGVtIGl0ZW09e2l0ZW1zLml0ZW0zfSAvPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNDhweCAxNXB4O1xuYFxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDRgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5mdW5jdGlvbiBGb290ZXJJdGVtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEl0ZW0+XG4gICAgICA8VGl0bGU+XG4gICAgICAgIHtwcm9wcy5pdGVtLnRpdGxlfVxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxwPlxuICAgICAgICB7cHJvcHMuaXRlbS50ZXh0fVxuICAgICAgPC9wPlxuICAgIDwvSXRlbT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJJdGVtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXJJdGVtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIExvYWRpbmcuLi5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9hZGluZy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFTQTtBQUNBO0FBSUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7O0FBREE7QUFPQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBUUE7QUFDQTtBQVVBO0FBQ0E7QUFxQkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUFBOztBQUhBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBR0E7QUFGQTtBQUdBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUVBO0FBRkE7QUFBQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQU1BO0FBTkE7QUFBQTs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        