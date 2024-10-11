import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  hanldeSubmit(event) {
    event.preventDefault();
    axios.post(
      "https://localhost:3000/registrations",
      {
        user: {
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
        },
      },
      { withCredentials: true }
    ).then(response => {
      console.log("Registration request", response);
    }).catch(error => {
      console.log("Registration errors", error);
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.hanldeSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
