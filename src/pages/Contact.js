import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Label,
  FormGroup,
  Input,
  FormText,
  Form,
  Modal,
  ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

function Contact(props) {
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const [Email, setEmail] = useState("");
  const [modal, setModal] = useState(false);


  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_6as3cq8", templateId, variables)
      .then((res) => {
        toggle()
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  const handleUserBtnClick = async (e) => {
    try {
      const templateId = "template_rmtdr0h";
      sendFeedback(templateId, {
        message: Message,
        from_name: Name,
        reply_to: Email,
      });
    } catch (error) {
      console.log(
        "There was an error processing your results, please try again",
        error
      );
    }
  };
  const toggle = () => setModal(!modal);
  const reroute = () => {window.location.href = "/";
}
  return (
    <Container className="form">
      <Row>
        <Col>
          <Row>
            <Col>
              <div className="contactme"> Customer Support</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <h1> HoJo - Denver West</h1>
                <FormGroup row>
                  <Label className="label" for="" sm={2}>
                    Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <FormText color="muted" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="label" for="" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormText color="muted" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label className="label" for="message" color="white" sm={2}>
                    Message
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="textarea"
                      name="text"
                      id="exampleText"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <FormText />
                  </Col>
                </FormGroup>

                <Button color="success" onClick={handleUserBtnClick}>
                  Submit
                </Button>
                <Modal isOpen={modal} toggle={toggle} >
            
                  <ModalBody>
                    Thank you {Name} for your insight. One of our customer support team will reach to you about any issues. Have a great day. 
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={reroute}>
                      Close
                    </Button>
                  </ModalFooter>
                </Modal>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
