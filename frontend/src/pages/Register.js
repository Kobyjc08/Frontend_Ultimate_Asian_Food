import React from "react";
import { Layout } from "../layout/Layout";
import { Container } from "react-bootstrap";



const Register = () => {
    return <Layout>
        <Container>


<div>
    <form>
  <div class="form-row">
    <div class="col">
        <label for="inputEmail4">First name</label>
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
    <label for="inputEmail4">Last Name</label>
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
</form>


<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Address"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">DNI/NIE/Passport</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="DNI/NIE/Passport"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Keep me singed
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Create an Account</button>
</form>
</div>
        </Container>
    </Layout>
}


export default Register;