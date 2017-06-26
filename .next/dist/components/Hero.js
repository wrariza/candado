'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _Logo = require('../components/Logo.js');

var _Logo2 = _interopRequireDefault(_Logo);

var _Search = require('./Search');

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