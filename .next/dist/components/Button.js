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