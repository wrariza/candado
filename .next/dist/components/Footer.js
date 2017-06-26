'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _FooterItem = require('./FooterItem');

var _FooterItem2 = _interopRequireDefault(_FooterItem);

var _footer = require('../static/content/footer.json');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/candado/components/Footer.js';


function Footer() {
  return _react2.default.createElement(_reactStyledFlexboxgrid.Row, { center: 'xs', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_FooterItem2.default, { item: _footer2.default.item1, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_FooterItem2.default, { item: _footer2.default.item2, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_FooterItem2.default, { item: _footer2.default.item3, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })));
}

exports.default = Footer;