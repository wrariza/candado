
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

var _Hero = __webpack_require__(570);

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

var _reactStyledFlexboxgrid = __webpack_require__(561);

var _Button = __webpack_require__(574);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/BoxInfo.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 516px; \n    height: 500px;\n    font-family: \'Lato\', sans-serif;\n    top: 130px;\n    position: relative;\n'], ['\n    width: 516px; \n    height: 500px;\n    font-family: \'Lato\', sans-serif;\n    top: 130px;\n    position: relative;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    ', '\n    padding-left: 20px;\n'], ['\n    ', '\n    padding-left: 20px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: red;\n    width: 4px;\n    height: 139px;\n    position: absolute;\n    margin-top: 12px;\n}\n'], ['\n    background-color: red;\n    width: 4px;\n    height: 139px;\n    position: absolute;\n    margin-top: 12px;\n}\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: 18px;\n    line-height: 26px;\n    margin-bottom: 40px;\n'], ['\n    font-size: 18px;\n    line-height: 26px;\n    margin-bottom: 40px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    position: relative;\n    top: 50px;\n'], ['\n    position: relative;\n    top: 50px;\n']);

var Container = _styledComponents2.default.section(_templateObject);
var styleTitle = '\n    h1{\n        font-size: 3rem;\n        margin: 0px;\n    }\n    h2{\n        font-size: 1.8rem;\n        margin-top: 10px;\n        margin-bottom: 50px;\n    }\n';

var ContainerT = _styledComponents2.default.section(_templateObject2, styleTitle);

var Line = _styledComponents2.default.div(_templateObject3);

var Info = _styledComponents2.default.p(_templateObject4);

var Button = (0, _styledComponents2.default)(_Button2.default)(_templateObject5);

function BoxInfo() {
    return _react2.default.createElement(Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, _react2.default.createElement(Line, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }), _react2.default.createElement(ContainerT, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, 'Clean & Beautiful   landing page template'), _react2.default.createElement('h2', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, 'with ultimate design & features.')), _react2.default.createElement(Info, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh neque, convallis ut interdum a, consequat sit amet mauris. Vivamus sed tincidunt enim.'), _react2.default.createElement(Button, {
        name: 'View Detail',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }));
}

exports.default = BoxInfo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/template-react/components/BoxInfo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/template-react/components/BoxInfo.js"); } } })();

/***/ }),

/***/ 570:
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

var _BoxInfo = __webpack_require__(569);

var _BoxInfo2 = _interopRequireDefault(_BoxInfo);

var _Title = __webpack_require__(573);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/Hero.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n   height: 700px;\n   background-image: ', ';\n   color: white;\n'], ['\n   height: 700px;\n   background-image: ', ';\n   color: white;\n']);

var background = 'url(../static/fondo.png)';

var GridHero = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Grid)(_templateObject, background);

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
                    lineNumber: 18
                }
            }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xsOffset: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement(_Title2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }))), _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 6, xsOffset: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_BoxInfo2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
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

module.exports = __webpack_require__(562);


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

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/Button.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    background-color: rgb(226,87, 76);\n    font-size: 18px;\n    color: rgb(255, 255, 255);\n    height: 50px; \n    text-align: center; \n    width: 250px;\n    border: none;\n    cursor: pointer;\n'], ['\n    background-color: rgb(226,87, 76);\n    font-size: 18px;\n    color: rgb(255, 255, 255);\n    height: 50px; \n    text-align: center; \n    width: 250px;\n    border: none;\n    cursor: pointer;\n']);

var Button = _styledComponents2.default.button(_templateObject);

function ButtomPrimary(props) {
    return _react2.default.createElement(Button, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, props.name);
}

exports.default = ButtomPrimary;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/template-react/components/Button.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/template-react/components/Button.js"); } } })();

/***/ })

},[572]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2ZlMWNkYmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Cb3hJbmZvLmpzP2ZlMWNkYmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvLmpzP2ZlMWNkYmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS5qcz9mZTFjZGJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnV0dG9uLmpzP2ZlMWNkYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvLmpzJ1xuXG5mdW5jdGlvbiBIb21lKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlcm8vPiAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBHcmlkLCBSb3cgfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnO1xuaW1wb3J0IEJ1dHRvblByaW1hcnkgZnJvbSAnLi9CdXR0b24uanMnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIHdpZHRoOiA1MTZweDsgXG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgIHRvcDogMTMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuY29uc3Qgc3R5bGVUaXRsZSA9IGBcbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbmBcblxuY29uc3QgQ29udGFpbmVyVCA9IHN0eWxlZC5zZWN0aW9uYFxuICAgICR7c3R5bGVUaXRsZX1cbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5gXG5cbmNvbnN0IExpbmUgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogMTM5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG5gXG5cbmNvbnN0IEluZm8gPSBzdHlsZWQucGBcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbmBcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKEJ1dHRvblByaW1hcnkpYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwcHg7XG5gXG5cbmZ1bmN0aW9uIEJveEluZm8gKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxMaW5lLz5cbiAgICAgICAgICAgIDxDb250YWluZXJUPlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgIENsZWFuICYgQmVhdXRpZnVsICAgbGFuZGluZyBwYWdlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIHdpdGggdWx0aW1hdGUgZGVzaWduICYgZmVhdHVyZXMuXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyVD5cbiAgICAgICAgICAgIDxJbmZvPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZlc3RpYnVsdW0gbmliaCBuZXF1ZSwgY29udmFsbGlzIHV0IGludGVyZHVtIGEsIGNvbnNlcXVhdCBzaXQgYW1ldCBtYXVyaXMuIFZpdmFtdXMgc2VkIHRpbmNpZHVudCBlbmltLlxuICAgICAgICAgICAgPC9JbmZvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG5hbWU9XCJWaWV3IERldGFpbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJveEluZm87XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Cb3hJbmZvLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgR3JpZCwgUm93ICwgQ29sfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnO1xuaW1wb3J0IEJveEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Cb3hJbmZvLmpzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vVGl0bGUuanMnXG5cbnZhciBiYWNrZ3JvdW5kID0gJ3VybCguLi9zdGF0aWMvZm9uZG8ucG5nKSc7XG5cbmNvbnN0IEdyaWRIZXJvID0gc3R5bGVkKEdyaWQpYFxuICAgaGVpZ2h0OiA3MDBweDtcbiAgIGJhY2tncm91bmQtaW1hZ2U6ICR7YmFja2dyb3VuZH07XG4gICBjb2xvcjogd2hpdGU7XG5gXG5cbmNsYXNzIEhlcm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEdyaWRIZXJvPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHNPZmZzZXQ9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28vPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSB4c09mZnNldD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94SW5mby8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9HcmlkSGVybz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVyby5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudmFyIGJhY2tncm91bmQgPSAndXJsKC4uL3N0YXRpYy90aXRsZS5wbmcpJztcblxuY29uc3QgVCA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDM3cHg7IFxuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICR7YmFja2dyb3VuZH07XG4gIHRvcDogNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZnVuY3Rpb24gVGl0bGUgKHByb3BzKSB7XG4gICAgcmV0dXJuKFxuICAgICAgIDxUPlxuICAgICAgICAgeyBwcm9wcy5uYW1lIH1cbiAgICAgICA8L1Q+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RpdGxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsODcsIDc2KTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBoZWlnaHQ6IDUwcHg7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmZ1bmN0aW9uIEJ1dHRvbVByaW1hcnkgKHByb3BzKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAge3Byb3BzLm5hbWV9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9tUHJpbWFyeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBT0E7QUFDQTtBQVdBO0FBQ0E7QUFJQTtBQUNBO0FBUUE7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBREE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBS0E7QUFMQTtBQUFBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVVBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        