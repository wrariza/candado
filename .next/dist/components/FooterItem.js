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

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/components/FooterItem.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 48px 15px;\n'], ['\n  padding: 48px 15px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: bold;\n'], ['\n  font-weight: bold;\n']);

var Item = _styledComponents2.default.div(_templateObject);
var Title = _styledComponents2.default.h4(_templateObject2);

function FooterItem(props) {
  return _react2.default.createElement(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.item.title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, props.item.text));
}

exports.default = FooterItem;