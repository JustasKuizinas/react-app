import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

class Modal extends Component<any, any> {
  static propTypes = {
    // bla: PropTypes.string,
  };

  static defaultProps = {
    // bla: 'test',
  };

  constructor(props) {
    super(props);
  }

  renderModalBody() {
    if (this.props.modalType == "movieForm") {
      return this.props.children;
    }
    if (this.props.modalType == "confirm") {
      return (
        <>
          <div className="modal__text">{this.props.confirmText}</div>
          <div className="modal__btns">
            <Button onclick={this.props.confirmFn} style="-trenary">
              confirm
            </Button>
          </div>
        </>
      );
    }

    return "";
  }

  render() {
    return (
      <div className="modal">
        <div className="modal__body">
          <div className="modal__box">
            <button onClick={this.props.closeModal} className="modal__close">
              <IoMdClose />
            </button>
            <div className="modal__box-content">
              <div className="modal__title">{this.props.modalTitle}</div>
              {this.renderModalBody()}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Modal;
