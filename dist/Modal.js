"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 *  Function to create Modal Component modulable
 * @param {boolean} param0
 * @param {function} param1
 * @param {string} param2-3
 * @param {propertiesCss}param5-6-7
 * @returns {jsx element modal}
 */
const Modal = _ref => {
  let {
    isOpen,
    onClose,
    contentModal,
    titlHeaderModal,
    styleTitleModal,
    styleModal,
    styleContent
  } = _ref;
  if (isOpen) {
    console.log("etat isopen", isOpen);
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
  return /*#__PURE__*/_react.default.createElement("div", null, isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "container-modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: {
      ...styleModal
    }
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "header-modal"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    style: {
      ...styleTitleModal
    }
  }, titlHeaderModal), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close-button",
    onClick: onClose
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      styleContent
    },
    className: "contentModal"
  }, contentModal))));
};
Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func,
  content: _propTypes.default.string,
  title: _propTypes.default.string,
  styleModal: _propTypes.default.object,
  styleContent: _propTypes.default.object
};
var _default = exports.default = Modal;