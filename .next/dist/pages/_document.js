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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/pages/_document.js?entry';


var Template = function (_Document) {
    (0, _inherits3.default)(Template, _Document);

    function Template() {
        (0, _classCallCheck3.default)(this, Template);

        return (0, _possibleConstructorReturn3.default)(this, (Template.__proto__ || (0, _getPrototypeOf2.default)(Template)).apply(this, arguments));
    }

    (0, _createClass3.default)(Template, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('html', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement(_document.Head, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, 'Template'), _react2.default.createElement('link', {
                href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css',
                rel: 'stylesheet',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            })), _react2.default.createElement('body', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement(_document.Main, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement(_document.NextScript, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            })));
        }
    }]);

    return Template;
}(_document2.default);

exports.default = Template;