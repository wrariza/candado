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

var _Button = require('./Button.js');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/BoxInfo.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 516px; \n    height: 500px;\n    font-family: \'Lato\', sans-serif;\n    top: 130px;\n    position: relative;\n'], ['\n    width: 516px; \n    height: 500px;\n    font-family: \'Lato\', sans-serif;\n    top: 130px;\n    position: relative;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    ', '\n    padding-left: 20px;\n'], ['\n    ', '\n    padding-left: 20px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: red;\n    width: 4px;\n    height: 139px;\n    position: absolute;\n    margin-top: 12px;\n}\n'], ['\n    background-color: red;\n    width: 4px;\n    height: 139px;\n    position: absolute;\n    margin-top: 12px;\n}\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: 18px;\n    line-height: 26px;\n    margin-bottom: 40px;\n'], ['\n    font-size: 18px;\n    line-height: 26px;\n    margin-bottom: 40px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    position: relative;\n    top: 50px;\n'], ['\n    position: relative;\n    top: 50px;\n']);

var Container = _styledComponents2.default.section(_templateObject);
var styleTitle = '\n    h1{\n        font-size: 3rem;\n        margin: 0px;\n    }\n    h2{\n        font-size: 1.8rem;\n        margin-top: 10px;\n        margin-bottom: 50px;\n    }\n';

var ContainerT = _styledComponents2.default.section(_templateObject2, styleTitle);

var Line = _styledComponents2.default.div(_templateObject3);

var Info = _styledComponents2.default.p(_templateObject4);

var Button = (0, _styledComponents2.default)(_Button2.default)(_templateObject5);

function BoxInfo() {
    return _react2.default.createElement(Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, _react2.default.createElement(Line, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }), _react2.default.createElement(ContainerT, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, 'Clean & Beautiful   landing page template'), _react2.default.createElement('h2', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, 'with ultimate design & features.')), _react2.default.createElement(Info, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh neque, convallis ut interdum a, consequat sit amet mauris. Vivamus sed tincidunt enim.'), _react2.default.createElement(Button, {
        name: 'View Detail',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }));
}

exports.default = BoxInfo;