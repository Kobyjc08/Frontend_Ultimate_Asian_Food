import { Layout } from "../layout/Layout";
import { Container, Button, Form, Breadcrumb } from "react-bootstrap";
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

// import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/authentication/login",
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
        // toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        // toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            LoginPage
          </Breadcrumb.Item>
        </Breadcrumb>
        <Fragment>
          <h1 className="mt-5 text-center">Login</h1>

          <Form onSubmit={onSubmitForm}>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => onChange(e)}
              className="form-control my-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => onChange(e)}
              className="form-control my-3"
            />
            <button class="btn btn-success btn-block">Submit</button>
          </Form>

          <Link to="/register"> Register Here</Link>
        </Fragment>
      </Container>
    </Layout>
  );
};

export default Login;
