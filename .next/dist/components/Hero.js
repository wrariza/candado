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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _Title = require('./Title.js');

var _Title2 = _interopRequireDefault(_Title);

var _Search = require('./Search');

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