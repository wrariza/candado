'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _theme = require('../lib/theme.js');

var _Hero = require('../components/Hero.js');

var _Hero2 = _interopRequireDefault(_Hero);

var _Logo = require('../components/Logo.js');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/pages/index.js?entry';

//import Loading from '../components/Loading';


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
                    lineNumber: 27
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_Hero2.default, { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_Logo2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            })), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, this.state.loading && _react2.default.createElement(Loading, {
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