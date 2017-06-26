
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _Hero = __webpack_require__(571);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/pages/index.js?entry';


function Home() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_Hero2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }));
}

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/template-react/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/template-react/pages/index.js"); } } })();
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

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _taggedTemplateLiteral2 = __webpack_require__(560);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(559);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = __webpack_require__(561);

var _Title = __webpack_require__(572);

var _Title2 = _interopRequireDefault(_Title);

var _Search = __webpack_require__(574);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/Hero.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n   height: 700px;\n   background-image: ', ';\n   color: white;\n'], ['\n   height: 700px;\n   background-image: ', ';\n   color: white;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    top: 10px;\n'], ['\n    top: 10px;\n']);

var background = 'url(../static/fondo.png)';

var GridHero = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Grid)(_templateObject, background);

var Searcher = (0, _styledComponents2.default)(_Search2.default)(_templateObject2);

var Hero = function (_Component) {
    (0, _inherits3.default)(Hero, _Component);

    function Hero() {
        (0, _classCallCheck3.default)(this, Hero);

        return (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).apply(this, arguments));
    }

    (0, _createClass3.default)(Hero, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(GridHero, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xsOffset: 2, xs: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement(_Title2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }))), _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { className: 'searcher', xsOffset: 2, xs: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(Searcher, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }))));
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/template-react/components/Hero.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/template-react/components/Hero.js"); } } })();

/***/ }),

/***/ 572:
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

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/Title.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 1rem;\n  height: 37px; \n  width: 150px;\n  background-image: ', ';\n  top: 70px;\n  position: relative;\n'], ['\n  font-size: 1rem;\n  height: 37px; \n  width: 150px;\n  background-image: ', ';\n  top: 70px;\n  position: relative;\n']);

var background = 'url(../static/title.png)';

var T = _styledComponents2.default.h1(_templateObject, background);

function Title(props) {
  return _react2.default.createElement(T, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, props.name);
}

exports.default = Title;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/template-react/components/Title.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/template-react/components/Title.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(562);


/***/ }),

/***/ 574:
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

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/Search.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    font-weight: bold;\n    font-family: \'arial\'\n    top: 200px;\n    position: relative;\n    @media (max-width: 1024px) {\n        flex-direction: column;\n    }\n'], ['\n    display: flex;\n    font-weight: bold;\n    font-family: \'arial\'\n    top: 200px;\n    position: relative;\n    @media (max-width: 1024px) {\n        flex-direction: column;\n    }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    flex: 1; \n    margin-right: 1rem;\n    padding: 0.5 rem 1rem;\n    font-size: 1rem;\n    ', '\n    @media (max-width: 1024px){\n         margin-right: 0px;\n    }\n'], ['\n    flex: 1; \n    margin-right: 1rem;\n    padding: 0.5 rem 1rem;\n    font-size: 1rem;\n    ', '\n    @media (max-width: 1024px){\n         margin-right: 0px;\n    }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    ', '\n    backgroud-color: #ea83ee;\n    padding: 0.5rem 46px;\n    text-transform: uppercase;\n    font-weight: bold; \n    color: white;\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n     font-size: 1rem;\n    @media (max-width: 1024px){\n         margin-top: 1rem;\n    }\n'], ['\n    ', '\n    backgroud-color: #ea83ee;\n    padding: 0.5rem 46px;\n    text-transform: uppercase;\n    font-weight: bold; \n    color: white;\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n     font-size: 1rem;\n    @media (max-width: 1024px){\n         margin-top: 1rem;\n    }\n']);

var DefaultStyles = '\n    outline: 0;\n    borde: none;\n    border-radius: 4px;\n';

var Form = _styledComponents2.default.form(_templateObject);

var InputSeacher = _styledComponents2.default.input(_templateObject2, DefaultStyles);

var Button = _styledComponents2.default.button(_templateObject3, DefaultStyles);

function Searcher(props) {
    return _react2.default.createElement(Form, { onSubmit: props.onSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement(InputSeacher, {
        name: 'buscar',
        type: 'text',
        placeholder: 'ingrese sus palabras favoritas',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }), _react2.default.createElement(Button, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, 'Generar'));
}

exports.default = Searcher;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/template-react/components/Search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/template-react/components/Search.js"); } } })();

/***/ })

},[573]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzU2ZDg5YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvLmpzPzU2ZDg5YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS5qcz81NmQ4OWJhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzPzU2ZDg5YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvLmpzJ1xuXG5mdW5jdGlvbiBIb21lKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlcm8vPiAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBHcmlkLCBSb3cgLCBDb2x9IGZyb20gJ3JlYWN0LXN0eWxlZC1mbGV4Ym94Z3JpZCc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL1RpdGxlLmpzJztcbmltcG9ydCBTZWFyY2hlckltcG9ydCBmcm9tICcuL1NlYXJjaCc7XG5cbnZhciBiYWNrZ3JvdW5kID0gJ3VybCguLi9zdGF0aWMvZm9uZG8ucG5nKSc7XG5cbmNvbnN0IEdyaWRIZXJvID0gc3R5bGVkKEdyaWQpYFxuICAgaGVpZ2h0OiA3MDBweDtcbiAgIGJhY2tncm91bmQtaW1hZ2U6ICR7YmFja2dyb3VuZH07XG4gICBjb2xvcjogd2hpdGU7XG5gXG5cbmNvbnN0IFNlYXJjaGVyID0gc3R5bGVkKFNlYXJjaGVySW1wb3J0KWBcbiAgICB0b3A6IDEwcHg7XG5gXG5cbmNsYXNzIEhlcm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEdyaWRIZXJvPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHNPZmZzZXQ9ezJ9IHhzPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nby8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwic2VhcmNoZXJcIiB4c09mZnNldD17Mn0geHM9ezh9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9HcmlkSGVybz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVyby5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudmFyIGJhY2tncm91bmQgPSAndXJsKC4uL3N0YXRpYy90aXRsZS5wbmcpJztcblxuY29uc3QgVCA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDM3cHg7IFxuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICR7YmFja2dyb3VuZH07XG4gIHRvcDogNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZnVuY3Rpb24gVGl0bGUgKHByb3BzKSB7XG4gICAgcmV0dXJuKFxuICAgICAgIDxUPlxuICAgICAgICAgeyBwcm9wcy5uYW1lIH1cbiAgICAgICA8L1Q+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RpdGxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBEZWZhdWx0U3R5bGVzID0gYFxuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuYDtcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdhcmlhbCdcbiAgICB0b3A6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuYDtcblxuY29uc3QgSW5wdXRTZWFjaGVyID0gc3R5bGVkLmlucHV0YFxuICAgIGZsZXg6IDE7IFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjUgcmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgICR7RGVmYXVsdFN0eWxlc31cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgJHtEZWZhdWx0U3R5bGVzfVxuICAgIGJhY2tncm91ZC1jb2xvcjogI2VhODNlZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gNDZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG5gO1xuXG5cbmZ1bmN0aW9uIFNlYXJjaGVyKHByb3BzKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9PlxuICAgICAgICAgICAgPElucHV0U2VhY2hlclxuICAgICAgICAgICAgICAgIG5hbWU9XCJidXNjYXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImluZ3Jlc2Ugc3VzIHBhbGFicmFzIGZhdm9yaXRhc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbj5HZW5lcmFyPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBR0E7QUFIQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFLQTtBQUxBO0FBQUE7Ozs7O0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBVUE7QUFDQTtBQVVBO0FBQ0E7QUFjQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        