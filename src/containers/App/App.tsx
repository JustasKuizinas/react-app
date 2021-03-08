import React, { Component } from "react";
import "./style.scss";
import Home from "../../pages/Home/Home";
import Modal from "../Modal/Modal";
import MovieForm from "../../components/MovieForm/MovieForm";

class App extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      modalData: {},
      activeModalType: null,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal(activeModalType = null, modalData = {}) {
    this.setState({
      activeModalType,
      modalData,
    });
  }

  closeModal() {
    this.setState({
      activeModalType: null,
      modalData: {},
    });
  }

  renderMovieForm() {
    return (
      <MovieForm
        closeModal={this.closeModal}
        movie={this.state.modalData.movie}
      ></MovieForm>
    );
  }

  renderConfirm() {
    return;
  }

  render() {
    return (
      <>
        <div className="main-logo">
          <div className="container">
            <div className="logo">
              <span>netflix</span>roulette
            </div>
          </div>
        </div>

        <div className="page-wrapper">
          <Home openModal={this.openModal} />
        </div>

        {this.state.activeModalType && (
          <Modal
            modalType={this.state.activeModalType}
            confirmFn={this.state.modalData.confirmFn}
            confirmText={this.state.modalData.confirmText}
            modalTitle={this.state.modalData.title}
            closeModal={this.closeModal}
          >
            {this.state.activeModalType == "movieForm" &&
              this.renderMovieForm()}
          </Modal>
        )}
      </>
    );
  }
}
export default App;
