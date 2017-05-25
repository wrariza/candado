
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

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(559);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = __webpack_require__(561);

var _Title = __webpack_require__(571);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/BoxInfo.js';


var BoxInfo = function (_Component) {
    (0, _inherits3.default)(BoxInfo, _Component);

    function BoxInfo(props) {
        (0, _classCallCheck3.default)(this, BoxInfo);

        return (0, _possibleConstructorReturn3.default)(this, (BoxInfo.__proto__ || (0, _getPrototypeOf2.default)(BoxInfo)).call(this, props));
    }

    (0, _createClass3.default)(BoxInfo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Title2.default, {
                name: 'Template',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            });
        }
    }]);

    return BoxInfo;
}(_react.Component);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/Hero.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n   height: 20rem;\n   background-color: ', ';\n'], ['\n   height: 20rem;\n   background-color: ', ';\n']);

var background = 'rgb(53, 55, 76)';

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
                    lineNumber: 16
                }
            }, _react2.default.createElement(_BoxInfo2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }));
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/template-react/components/Hero.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/template-react/components/Hero.js"); } } })();

/***/ }),

/***/ 571:
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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 1rem;\n  color: white;\n'], ['\n  font-size: 1rem;\n  color: white;\n']);

var T = _styledComponents2.default.h1(_templateObject);

function Title(props) {
  return _react2.default.createElement(T, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.name);
}

exports.default = Title;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/template-react/components/Title.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/template-react/components/Title.js"); } } })();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(562);


/***/ })

},[572]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzAzYjY1NmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Cb3hJbmZvLmpzPzAzYjY1NmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvLmpzPzAzYjY1NmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS5qcz8wM2I2NTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyby5qcydcblxuZnVuY3Rpb24gSG9tZSgpe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZXJvLz4gICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgR3JpZCwgUm93IH0gZnJvbSAncmVhY3Qtc3R5bGVkLWZsZXhib3hncmlkJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlLmpzJ1xuXG5jbGFzcyBCb3hJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgIDxUaXRsZVxuICAgICAgICAgICAgIG5hbWU9XCJUZW1wbGF0ZVwiXG4gICAgICAgICAgIC8+IFxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3hJbmZvO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQm94SW5mby5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEdyaWQsIFJvdyB9IGZyb20gJ3JlYWN0LXN0eWxlZC1mbGV4Ym94Z3JpZCc7XG5pbXBvcnQgQm94SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL0JveEluZm8uanMnO1xuXG52YXIgYmFja2dyb3VuZCA9ICdyZ2IoNTMsIDU1LCA3NiknO1xuXG5jb25zdCBHcmlkSGVybyA9IHN0eWxlZChHcmlkKWBcbiAgIGhlaWdodDogMjByZW07XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmR9O1xuYFxuXG5jbGFzcyBIZXJvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxHcmlkSGVybz5cbiAgICAgICAgICAgICAgICA8Qm94SW5mby8+XG4gICAgICAgICAgICA8L0dyaWRIZXJvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZXJvLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmZ1bmN0aW9uIFRpdGxlIChwcm9wcykge1xuICAgIHJldHVybihcbiAgICAgICA8VD5cbiAgICAgICAgIHsgcHJvcHMubmFtZSB9XG4gICAgICAgPC9UPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9UaXRsZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUNBOztBQURBO0FBSUE7QUFKQTtBQUNBOzs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        