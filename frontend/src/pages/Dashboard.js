import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { Layout } from "../layout/Layout";
// import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:3001/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      setName(parseData.firstname);
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
            DashBoard
          </Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <h1 className="mt-5">Dashboard</h1>
          <h2>Welcome {name}</h2>
          <h3>Soon your orders will appear here!!!</h3>
          <button onClick={(e) => logout(e)} className="btn btn-primary">
            Logout
          </button>
        </div>
      </Container>
    </Layout>
  );
};

export default Dashboard;

//not working version to render customer order details

// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import { Breadcrumb } from "react-bootstrap";
// import { Layout } from "../layout/Layout";
// import axios from "axios";
// // import { toast } from "react-toastify";

// const Dashboard = ({ setAuth }) => {
//   const [name, setName] = useState("");
//   const [customerID, setcustomerID] = useState("");

//   const getProfile = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/dashboard/", {
//         method: "POST",
//         headers: { jwt_token: localStorage.token },
//       });

//       const parseData = await res.json();
//       setName(parseData.firstname);
//       setcustomerID(parseData.user_id)
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const logout = async (e) => {
//     e.preventDefault();
//     try {
//       localStorage.removeItem("token");
//       setAuth(false);
//       //   toast.success("Logout successfully");
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
// Dashboard2();
//   useEffect(() => {
//     getProfile();
//   }, []);

//   const Dashboard2 = () => {
//   const [getCustomerOrders, setgetCustomerOrders] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/orderItems/:"+{customerID})+"/"
//       .then(function (response) {
//         setgetCustomerOrders(response.data);
//         console.group(response.data);
//       });
//   }, []);

//   return (
//     <Layout>
//       <Container>
//         <Breadcrumb>
//           <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

//           <Breadcrumb.Item id="breadcrumb_links_vertical" active>
//             DashBoard
//           </Breadcrumb.Item>
//         </Breadcrumb>
//         <div>
//           <h1 className="mt-5">Dashboard</h1>
//           <h2>Welcome {name}</h2>
//           <h3>Soon your orders will appear here!!!</h3>
//           <button onClick={(e) => logout(e)} className="btn btn-primary">
//             Logout
//           </button>
//         </div>
//       </Container>
//     </Layout>
//   );
// };

// export default Dashboard;
