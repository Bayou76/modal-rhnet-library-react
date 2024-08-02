"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Modal = _ref => {
  let {
    isOpen,
    setIsOpen,
    corpsHtml,
    text
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, corpsHtml ? corpsHtml : /*#__PURE__*/_react.default.createElement("p", null, text), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setIsOpen(false),
    className: "close"
  }, "Close")));
};
Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  setIsOpen: _propTypes.default.func.isRequired,
  corpsHtml: _propTypes.default.node,
  text: _propTypes.default.string
};
var _default = exports.default = Modal;