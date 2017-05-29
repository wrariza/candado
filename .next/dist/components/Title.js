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