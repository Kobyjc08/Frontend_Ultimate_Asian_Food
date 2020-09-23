import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { Layout } from "../layout/Layout";
import faqimg from "../images/faq_icon.png";
// import EditTodo from "../components/EditTodo";
// import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [DNI, setDNI] = useState("");
  const [orders, setorders] = useState([]);

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      setName(parseData[0].firstname);
      setName2(parseData[0].lastname);
      setEmail(parseData[0].user_email);
      setAddress(parseData[0].address);
      setDNI(parseData[0].dni);
      setorders(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      //   toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            Account
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="img-product">
          <img src={faqimg} alt="FAQ Icon" />
        </div>
        <h2 className="red-letters">Account</h2>
        <h2 className="mt-0 mb-1 new-titles">Order History</h2>
        <div className="dashboard-class ">
          <table>
            <thead className="thead-light">
              <tr>
                <th className="mt-0 mb-1 new-titles">Order ID </th>
                <th className="mt-0 mb-1 new-titles">Quantity </th>
                <th className="mt-0 mb-1 new-titles">Product Name </th>
                <th className="mt-0 mb-1 new-titles">Order Date </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.quantity}</td>
                  <td>{order.product_name}</td>
                  <td>{order.order_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Card style={{ width: "18rem" }} className="customCard">
            <Card.Body>
              <Card.Title>Account</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Your account details
              </Card.Subtitle>
              <Card.Text>
                Full Name: {name} {name2}
              </Card.Text>
              <Card.Text>Email Address: {Email}</Card.Text>
              <Card.Text>Address: {Address}</Card.Text>
              <Card.Text>DNI: {DNI}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <button onClick={(e) => logout(e)} className="btn btn-primary">
          Logout
        </button>
      </Container>
    </Layout>
  );
};

export default Dashboard;
