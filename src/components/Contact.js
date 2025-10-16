import React from "react";
import { Container, Form, Button } from "react-bootstrap";

    function Contact() {
      return (
        <Container id="contact" className="my-5">
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form>
            <Form.Group controlId="formName" className="shadow-sm">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3 shadow-sm">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3 shadow-sm">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 shadow-sm">
              Submit
            </Button>
          </Form>
        </Container>
      );
    }
    export default Contact;