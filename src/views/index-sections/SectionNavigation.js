/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

// core components

function SectionNavigation() {
  return (
    <>
      <div className="section section-navigation">
        <Container className="tim-container">
          <div className="title">
            <h2>MY KNOWLEDGE</h2>
          </div>
        </Container>
        <div id="navbar">
          <div
            className="navigation-example"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ilya-yakover.jpg").default + ")",
            }}
          >
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>HTML</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right burger-menu"
                  data-target="#navbar-primary"
                  data-toggle="collapse"
                  id="navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-primary">
                  <Nav className="ml-auto" navbar>
                    <h2>90%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-info" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>CSS</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-info"
                  data-toggle="collapse"
                  id="navbar-info"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-info">
                  <Nav className="ml-auto" navbar>
                  <h2>90%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-danger" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>FLEX, GRID</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={true}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-danger"
                  data-toggle="collapse"
                  id="navbar-danger"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse
                  navbar
                  style={{}}
                  toggler="#navbar-danger"
                >
                  <Nav className="ml-auto" navbar>
                    <h2>70%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-info" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>BOOTSTRAP, MATERIAL UI</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-info"
                  data-toggle="collapse"
                  id="navbar-info"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-info">
                  <Nav className="ml-auto" navbar>
                  <h2>70%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-success" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>SASS</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={true}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-success"
                  data-toggle="collapse"
                  id="navbar-success"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse
                  navbar
                  style={{}}
                  toggler="#navbar-success"
                >
                  <Nav className="ml-auto" navbar>
                    <h2>60%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-warning" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>JAVA SCRIPT</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-warning"
                  data-toggle="collapse"
                  id="navbar-warning"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-warning">
                  <Nav className="ml-auto" navbar>
                    <h2>80%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-danger" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>JQUERY</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={true}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-danger"
                  data-toggle="collapse"
                  id="navbar-danger"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse
                  navbar
                  style={{}}
                  toggler="#navbar-danger"
                >
                  <Nav className="ml-auto" navbar>
                    <h2>60%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>REACT</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right burger-menu"
                  data-target="#navbar-primary"
                  data-toggle="collapse"
                  id="navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-primary">
                  <Nav className="ml-auto" navbar>
                    <h2>70%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-warning" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>REDUX</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-warning"
                  data-toggle="collapse"
                  id="navbar-warning"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-warning">
                  <Nav className="ml-auto" navbar>
                    <h2>40%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-danger" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>GIT HUB</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={true}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-danger"
                  data-toggle="collapse"
                  id="navbar-danger"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse
                  navbar
                  style={{}}
                  toggler="#navbar-danger"
                >
                  <Nav className="ml-auto" navbar>
                    <h2>60%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>PYTHON, OOP</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right burger-menu"
                  data-target="#navbar-primary"
                  data-toggle="collapse"
                  id="navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-primary">
                  <Nav className="ml-auto" navbar>
                    <h2>70%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-success" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  <h2>API (GET, POST)</h2>
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={true}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-success"
                  data-toggle="collapse"
                  id="navbar-success"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse
                  navbar
                  style={{}}
                  toggler="#navbar-success"
                >
                  <Nav className="ml-auto" navbar>
                    <h2>60%</h2>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>

          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default SectionNavigation;
