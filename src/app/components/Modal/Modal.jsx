import React, { Component } from "react";

import {ModalCard, ModalHeader, ModalBody, ModalTitle, ModalContent, ModelFooter} from './Modal.styled';

export class Modal extends Component {
  render() {
      if (!this.props.show){
          return null;
      }
    return (
      <ModalCard onClick={this.props.onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>Modal title</ModalTitle>
          </ModalHeader>
          <ModalBody>Modal content</ModalBody>
          <ModelFooter>
            <button className="button" onClick={this.props.onClose}>Close</button>
          </ModelFooter>
        </ModalContent>
      </ModalCard>
    );
  }
}

export default Modal;
