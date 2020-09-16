import { Container, Form, Col, Breadcrumb } from "react-bootstrap";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
// import { toast } from "react-toastify";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, firstname, lastname, address, DNI } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, firstname, lastname, address, DNI };
      const response = await fetch(
        "http://localhost:5000/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        // toast.success("Register Successfully");
      } else {
        setAuth(false);
        // toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Layout>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item id="breadcrumb_links_vertical" active>
              RegisterPage
            </Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="mt-5 text-center">Register</h1>
          <Form onSubmit={onSubmitForm}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={firstname}
                  placeholder="firstname"
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={lastname}
                  placeholder="Lastname"
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={address}
                placeholder="Address"
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>DNI/NIE/PassPort</Form.Label>
              <Form.Control
                type="text"
                name="DNI"
                value={DNI}
                placeholder="DNI/NIE/PassPort"
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <button className="btn btn-success btn-block">Submit</button>
          </Form>
          <Link to="/login">login Here</Link>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default Register;
