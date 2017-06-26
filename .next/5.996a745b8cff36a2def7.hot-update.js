webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45OTZhNzQ1YjhjZmYzNmEyZGVmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvLmpzP2UzMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgR3JpZCwgUm93ICwgQ29sfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28uanMnO1xuaW1wb3J0IFNlYXJjaGVyIGZyb20gJy4vU2VhcmNoJztcblxudmFyIHdhbGxwYXBlciA9ICd1cmwoLi4vc3RhdGljL3NlZ3Vyb3MuanBnKSc7XG5cbmZ1bmN0aW9uIHNldFBhZGRpbmcocHJvcHMpIHtcbiAgaWYgKHByb3BzLnNtKSB7XG4gICAgcmV0dXJuICcyZW0gMCc7XG4gIH1cbiAgcmV0dXJuICcxMDBweCAwIDE4NnB4Jztcbn1cblxuY29uc3QgR3JhZGllbnQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSg1NiwgNTYsIDU2LCAwLjUpLCByZ2JhKDY0LCA2MCwgNjQsIDAuNSkpO1xuICBwYWRkaW5nOiAke3NldFBhZGRpbmd9O1xuYDtcblxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gICBiYWNrZ3JvdW5kLWltYWdlOiAke3dhbGxwYXBlcn07XG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMzMsIDEzMSwgMjM4KTtcbiAgIH1cbmBcblxuY29uc3QgR3JpZEhlcm8gPSBzdHlsZWQoR3JpZClgXG4gICBjb2xvcjogd2hpdGU7XG4gICB0ZXh0LWFsaWdoOiBjZW50ZXI7XG5gXG5cbmZ1bmN0aW9uIEhlcm8ocHJvcHMpe1xuICAgIHJldHVybihcbiAgICAgICAgPEJhY2tncm91bmQ+XG4gICAgICAgICAgICA8R3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPEdyaWRIZXJvPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hlclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEhlcm8+XG4gICAgICAgICAgICA8L0dyYWRpZW50PlxuICAgICAgICA8L0JhY2tncm91bmQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZXJvLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBU0E7QUFDQTtBQUlBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTs7QUFEQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9