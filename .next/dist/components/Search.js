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

var _jsxFileName = '/Users/wrariza/MEGA/apps/template-react/components/Search.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    font-weight: bold;\n    font-family: \'Josefin\'\n    @media (max-width: 1024px) {\n        flex-direction: column;\n    }\n'], ['\n    display: flex;\n    font-weight: bold;\n    font-family: \'Josefin\'\n    @media (max-width: 1024px) {\n        flex-direction: column;\n    }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    flex: 1;\n    margin-right: 1rem;\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n    ', '\n    @media (max-width: 1024px) {\n        margin-right: 0;\n    }\n'], ['\n    flex: 1;\n    margin-right: 1rem;\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n    ', '\n    @media (max-width: 1024px) {\n        margin-right: 0;\n    }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    ', '\n    backgroud-color: #ea83ee;\n    padding: 0.5rem 46px;\n    text-transform: uppercase;\n    font-weight: bold; \n    font-family: \'Josefin\';\n    color: white;\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n     font-size: 1rem;\n    @media (max-width: 1024px){\n         margin-top: 1rem;\n    }\n'], ['\n    ', '\n    backgroud-color: #ea83ee;\n    padding: 0.5rem 46px;\n    text-transform: uppercase;\n    font-weight: bold; \n    font-family: \'Josefin\';\n    color: white;\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n     font-size: 1rem;\n    @media (max-width: 1024px){\n         margin-top: 1rem;\n    }\n']);

var DefaultStyles = '\n    outline: 0;\n    borde: none;\n    border-radius: 4px;\n';

var Form = _styledComponents2.default.form(_templateObject);

var InputSeacher = _styledComponents2.default.input(_templateObject2, DefaultStyles);

var Button = _styledComponents2.default.button(_templateObject3, DefaultStyles);

function Searcher(props) {
    return _react2.default.createElement(Form, { onSubmit: props.onSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement(InputSeacher, {
        name: 'buscar',
        type: 'text',
        placeholder: 'ingrese sus palabras favoritas',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }), _react2.default.createElement(Button, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, 'Generar'));
}

exports.default = Searcher;