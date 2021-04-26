import React, { Component } from "react";
import moment from "moment";

import {
  ModalCard,
  ModalHeader,
  ModalBody,
  ModalTitle,
  ModalContent,
  ModelFooter,
  ModalThumbnail
} from "./Modal.styled";

export class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    // Reformat Date-DOB to DD/MM/YYYY
    let tempDobF = this.props.dob.substring(0, 10);
    let newDobF = moment(tempDobF).subtract(10, "days").calendar();

    return (
      <ModalCard onClick={this.props.onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>
              {this.props.fName} {this.props.lName}
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <ModalThumbnail src={this.props.thumbnail} /><br/>
            <i className="fas fa-envelope-open"></i> {this.props.email}<br /> 
            <i className="fas fa-calendar-alt"></i> {newDobF}<br />
            <i className="fas fa-mobile"></i> {this.props.cell}
          </ModalBody>
          <ModelFooter>
            <button className="button" onClick={this.props.onClose}>
              Close
            </button>
          </ModelFooter>
        </ModalContent>
      </ModalCard>
    );
  }
}

export default Modal;
