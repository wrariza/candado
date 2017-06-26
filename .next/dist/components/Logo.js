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