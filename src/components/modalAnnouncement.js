import React, { Component } from 'react';
import {Col,Row,Modal,Button} from 'react-bootstrap';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './smashModal.css';


class SmashModal extends Component {


  render() {
    let input = this.props.selected ? this.props.selected.get('Body') : 'N/A';
    return (
      <Modal bsSize="large" show={this.props.showModal} onHide={() => {this.props.close()}}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.selected ? this.props.selected.get('Title') : '' }</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                
                <Row>
                    <Col md={12}>
                        <h3> 
                             <span> { this.props.selected ? moment(this.props.selected.get('Created On')).format('LL') : 'N/A'}</span>
                        </h3>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={12}>
                        <ReactMarkdown source={input} />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <p>
                            <span>- {this.props.selected ? this.props.selected.get('Author') : 'N/A'}</span>
                        </p>
                    </Col>
                </Row>

              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => {this.props.close()}}>Close</Button>
              </Modal.Footer>
            </Modal>
    );
  }
}

export default SmashModal;
