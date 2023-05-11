import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./BootstrapNav.css";

export default class BootstrapNav extends Component {
    render() {
        return (
            <div>
                <Navbar
                    bg="dark"
                    expand="md"
                    variant="dark"
                    fixed="top"
                    className="navbrand"
                >
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="./bs.png"
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                            id="logo"
                        />{" "}
                      CMC__Handoff -Project 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                                                  </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
