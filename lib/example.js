"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Example = () => {
  const [isOpenClassic, setIsOpenClassic] = (0, _react.useState)(false);
  const corpsHtml = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Test de la modale"), /*#__PURE__*/_react.default.createElement("p", null, "MODAL...."));
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Modal Library"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setIsOpenClassic(true)
  }, "Ouvrir la modale"), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    isOpen: isOpenClassic,
    setIsOpen: setIsOpenClassic,
    corpsHtml: corpsHtml,
    text: "Ceci est un texte de remplacement"
  }));
};
var _default = exports.default = Example;