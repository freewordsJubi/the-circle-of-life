"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableComp = function TableComp(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      fontSize: 30
    }
  }, "TABLE"));
};

var _default = TableComp;
exports.default = _default;