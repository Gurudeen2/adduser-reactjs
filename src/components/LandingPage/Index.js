import React from "react";
import { Col } from "react-bootstrap";
import Button from "../UI/Button";
import classes from "./Index.module.css";

// reactstrap components
// import { Badge, Button, Card, CardBody, Container, Row, Col } from "reactstrap";

const Landing = () => {
  return (
    <React.Fragment>
      <div
        className={classes.landing}
        // style={{ backgroundColor: "black", height: "30rem", padding: "5rem" }}
      >
        <Col>
          <h2>Experience the best API for backend dev</h2>
          <p>
            The RaspberryPi 3 is described as a 64-bit quad core single board
            (SBC) that should have been one of the most cost-effective 64-bit
            development boards available in the ARM world. Unfortunately, it was
            released with 32-bit software support only, so it is effectively a
            quad core 1.2ghz Raspberry Pi 2 with more heat issues. That being
            said, the community is working on 64-bit support for it, and have so
            far come up with it booting 1 CPU and no GPU. We will watch the
            community’s hard work on getting the board up to where it should
            have been at release, and when we feel it is usable in 64-bit mode,
            we will release an image to support it.
          </p>
          <div className={classes.landing_action}>
            <Button style={{ backgroundColor: "blue", color: "#fff" }}>
              Get Started
            </Button>
          </div>
        </Col>
        {/* <Col>
          <div
            style={{
              position: "absolute",
              bottom: 0,
            }}
          >
            Dev List and Github
          </div>
        </Col> */}
      </div>
    </React.Fragment>
    // <>
    //   {/* <main ref="main"> */}
    //     <div className="position-relative">
    //       {/* shape Hero */}
    //       <section className="section section-lg section-shaped pb-250">
    //         <div className="shape shape-style-1 shape-default">
    //           <span />
    //           <span />
    //           <span />
    //           <span />
    //           <span />
    //           <span />
    //           <span />
    //           <span />
    //           <span />
    //         </div>
    //         <Container className="py-lg-md d-flex">
    //           <div className="col px-0">
    //             <Row>
    //               <Col lg="6">
    //                 <h1 className="display-3 text-dark">
    //                   A beautiful Design System{" "}
    //                   <span>completed with examples</span>
    //                 </h1>
    //                 <p className="lead text-dark">
    //                   The design system comes with four pre-built pages to
    //                   help you get started faster. You can change the text and
    //                   images and you're good to go.
    //                 </p>
    //                 <div className="btn-wrapper">
    //                   <Button
    //                     className="btn-icon mb-3 mb-sm-0"
    //                     color="info"
    //                     href=""
    //                   >
    //                     <span className="btn-inner--icon mr-1">
    //                       <i className="fa fa-code" />
    //                     </span>
    //                     <span className="btn-inner--text">Get Start</span>
    //                   </Button>
    //                   <Button
    //                     className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
    //                     color="default"
    //                     href=""
    //                   >
    //                     <span className="btn-inner--icon mr-1">
    //                       <i className="ni ni-cloud-download-95" />
    //                     </span>
    //                     <span className="btn-inner--text">Read Doc</span>
    //                   </Button>
    //                 </div>
    //               </Col>
    //             </Row>
    //           </div>
    //         </Container>
    //         {/* SVG separator */}
    //         <div className="separator separator-bottom separator-skew">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             preserveAspectRatio="none"
    //             version="1.1"
    //             viewBox="0 0 2560 100"
    //             x="0"
    //             y="0"
    //           >
    //             <polygon
    //               className="fill-white"
    //               points="2560 0 2560 100 0 100"
    //             />
    //           </svg>
    //         </div>
    //       </section>
    //       {/* 1st Hero Variation */}
    //     </div>
    //     <section className="section section-lg pt-lg-0 mt--200">
    //       <Container>
    //         <Row className="justify-content-center">
    //           <Col lg="12">
    //             <Row className="row-grid">
    //               <Col lg="4">
    //                 <Card className="card-lift--hover shadow border-0">
    //                   <CardBody className="py-5">
    //                     <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
    //                       <i className="ni ni-check-bold" />
    //                     </div>
    //                     <h6 className="text-primary text-uppercase">
    //                       Download Argon
    //                     </h6>
    //                     <p className="description mt-3">
    //                       Argon is a great free UI package based on Bootstrap
    //                       4 that includes the most important components and
    //                       features.
    //                     </p>
    //                     <div>
    //                       <Badge color="primary" pill className="mr-1">
    //                         design
    //                       </Badge>
    //                       <Badge color="primary" pill className="mr-1">
    //                         system
    //                       </Badge>
    //                       <Badge color="primary" pill className="mr-1">
    //                         creative
    //                       </Badge>
    //                     </div>
    //                     <Button
    //                       className="mt-4"
    //                       color="primary"
    //                       href="#pablo"
    //                       onClick={(e) => e.preventDefault()}
    //                     >
    //                       Learn more
    //                     </Button>
    //                   </CardBody>
    //                 </Card>
    //               </Col>
    //               <Col lg="4">
    //                 <Card className="card-lift--hover shadow border-0">
    //                   <CardBody className="py-5">
    //                     <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
    //                       <i className="ni ni-istanbul" />
    //                     </div>
    //                     <h6 className="text-success text-uppercase">
    //                       Build Something
    //                     </h6>
    //                     <p className="description mt-3">
    //                       Argon is a great free UI package based on Bootstrap
    //                       4 that includes the most important components and
    //                       features.
    //                     </p>
    //                     <div>
    //                       <Badge color="success" pill className="mr-1">
    //                         business
    //                       </Badge>
    //                       <Badge color="success" pill className="mr-1">
    //                         vision
    //                       </Badge>
    //                       <Badge color="success" pill className="mr-1">
    //                         success
    //                       </Badge>
    //                     </div>
    //                     <Button
    //                       className="mt-4"
    //                       color="success"
    //                       href="#pablo"
    //                       onClick={(e) => e.preventDefault()}
    //                     >
    //                       Learn more
    //                     </Button>
    //                   </CardBody>
    //                 </Card>
    //               </Col>
    //               <Col lg="4">
    //                 <Card className="card-lift--hover shadow border-0">
    //                   <CardBody className="py-5">
    //                     <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
    //                       <i className="ni ni-planet" />
    //                     </div>
    //                     <h6 className="text-warning text-uppercase">
    //                       Prepare Launch
    //                     </h6>
    //                     <p className="description mt-3">
    //                       Argon is a great free UI package based on Bootstrap
    //                       4 that includes the most important components and
    //                       features.
    //                     </p>
    //                     <div>
    //                       <Badge color="warning" pill className="mr-1">
    //                         marketing
    //                       </Badge>
    //                       <Badge color="warning" pill className="mr-1">
    //                         product
    //                       </Badge>
    //                       <Badge color="warning" pill className="mr-1">
    //                         launch
    //                       </Badge>
    //                     </div>
    //                     <Button
    //                       className="mt-4"
    //                       color="warning"
    //                       href="#pablo"
    //                       onClick={(e) => e.preventDefault()}
    //                     >
    //                       Learn more
    //                     </Button>
    //                   </CardBody>
    //                 </Card>
    //               </Col>
    //             </Row>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </section>
    //     <section className="section section-lg">
    //       <Container>
    //         <Row className="row-grid align-items-center">
    //           <Col className="order-md-2" md="6">
    //             <img
    //               alt="..."
    //               className="img-fluid floating"
    //               src={require("../../assets/img/theme/promo-1.png")}
    //             />
    //           </Col>
    //           <Col className="order-md-1" md="6">
    //             <div className="pr-md-5">
    //               <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
    //                 <i className="ni ni-settings-gear-65" />
    //               </div>
    //               <h3>Awesome features</h3>
    //               <p>
    //                 The kit comes with three pre-built pages to help you get
    //                 started faster. You can change the text and images and
    //                 you're good to go.
    //               </p>
    //               <ul className="list-unstyled mt-5">
    //                 <li className="py-2">
    //                   <div className="d-flex align-items-center">
    //                     <div>
    //                       <Badge
    //                         className="badge-circle mr-3"
    //                         color="success"
    //                       >
    //                         <i className="ni ni-settings-gear-65" />
    //                       </Badge>
    //                     </div>
    //                     <div>
    //                       <h6 className="mb-0">
    //                         Carefully crafted components
    //                       </h6>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 <li className="py-2">
    //                   <div className="d-flex align-items-center">
    //                     <div>
    //                       <Badge
    //                         className="badge-circle mr-3"
    //                         color="success"
    //                       >
    //                         <i className="ni ni-html5" />
    //                       </Badge>
    //                     </div>
    //                     <div>
    //                       <h6 className="mb-0">Amazing page examples</h6>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 <li className="py-2">
    //                   <div className="d-flex align-items-center">
    //                     <div>
    //                       <Badge
    //                         className="badge-circle mr-3"
    //                         color="success"
    //                       >
    //                         <i className="ni ni-satisfied" />
    //                       </Badge>
    //                     </div>
    //                     <div>
    //                       <h6 className="mb-0">
    //                         Super friendly support team
    //                       </h6>
    //                     </div>
    //                   </div>
    //                 </li>
    //               </ul>
    //             </div>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </section>

    //     <section className="section section-lg">
    //       <Container>
    //         <Row className="justify-content-center text-center mb-lg">
    //           <Col lg="8">
    //             <h2 className="display-3">The amazing Team</h2>
    //             <p className="lead text-muted">
    //               According to the National Oceanic and Atmospheric
    //               Administration, Ted, Scambos, NSIDClead scentist, puts the
    //               potentially record maximum.
    //             </p>
    //           </Col>
    //         </Row>
    //         <Row>
    //           <Col className="mb-5 mb-lg-0" lg="3" md="6">
    //             <div className="px-4">
    //               <img
    //                 alt=""
    //                 className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
    //                 src={require("../../assets/img/theme/team-1-800x800.jpg")}
    //                 style={{ width: "200px" }}
    //               />
    //               <div className="pt-4 text-center">
    //                 <h5 className="title">
    //                   <span className="d-block mb-1">Ryan Tompson</span>
    //                   <small className="h6 text-muted">Web Developer</small>
    //                 </h5>
    //                 <div className="mt-3">
    //                   <Button
    //                     className="btn-icon-only rounded-circle"
    //                     color="warning"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-twitter" />
    //                   </Button>
    //                   <Button
    //                     className="btn-icon-only rounded-circle ml-1"
    //                     color="warning"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-facebook" />
    //                   </Button>
    //                   <Button
    //                     className="btn-icon-only rounded-circle ml-1"
    //                     color="warning"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-dribbble" />
    //                   </Button>
    //                 </div>
    //               </div>
    //             </div>
    //           </Col>
    //           <Col className="mb-5 mb-lg-0" lg="3" md="6">
    //             <div className="px-4">
    //               <img
    //                 alt="..."
    //                 className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
    //                 src={require("../../assets/img/theme/team-2-800x800.jpg")}
    //                 style={{ width: "200px" }}
    //               />
    //               <div className="pt-4 text-center">
    //                 <h5 className="title">
    //                   <span className="d-block mb-1">Romina Hadid</span>
    //                   <small className="h6 text-muted">
    //                     Marketing Strategist
    //                   </small>
    //                 </h5>
    //                 <div className="mt-3">
    //                   <Button
    //                     className="btn-icon-only rounded-circle"
    //                     color="primary"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-twitter" />
    //                   </Button>
    //                   <Button
    //                     className="btn-icon-only rounded-circle ml-1"
    //                     color="primary"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-facebook" />
    //                   </Button>
    //                   <Button
    //                     className="btn-icon-only rounded-circle ml-1"
    //                     color="primary"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-dribbble" />
    //                   </Button>
    //                 </div>
    //               </div>
    //             </div>
    //           </Col>
    //           <Col className="mb-5 mb-lg-0" lg="3" md="6">
    //             <div className="px-4">
    //               <img
    //                 alt="..."
    //                 className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
    //                 src={require("../../assets/img/theme/team-3-800x800.jpg")}
    //                 style={{ width: "200px" }}
    //               />
    //               <div className="pt-4 text-center">
    //                 <h5 className="title">
    //                   <span className="d-block mb-1">Alexander Smith</span>
    //                   <small className="h6 text-muted">UI/UX Designer</small>
    //                 </h5>
    //                 <div className="mt-3">
    //                   <Button
    //                     className="btn-icon-only rounded-circle"
    //                     color="info"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-twitter" />
    //                   </Button>
    //                   <Button
    //                     className="btn-icon-only rounded-circle ml-1"
    //                     color="info"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-facebook" />
    //                   </Button>
    //                   <Button
    //                     className="btn-icon-only rounded-circle ml-1"
    //                     color="info"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-dribbble" />
    //                   </Button>
    //                 </div>
    //               </div>
    //             </div>
    //           </Col>
    //           <Col className="mb-5 mb-lg-0" lg="3" md="6">
    //             <div className="px-4">
    //               <img
    //                 alt="..."
    //                 className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
    //                 src={require("../../assets/img/theme/team-4-800x800.jpg")}
    //                 style={{ width: "200px" }}
    //               />
    //               <div className="pt-4 text-center">
    //                 <h5 className="title">
    //                   <span className="d-block mb-1">John Doe</span>
    //                   <small className="h6 text-muted">Founder and CEO</small>
    //                 </h5>
    //                 <div className="mt-3">
    //                   <Button
    //                     className="btn-icon-only rounded-circle"
    //                     color="success"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-twitter" />
    //                   </Button>
    //                   <Button
    //                     className="btn-icon-only rounded-circle ml-1"
    //                     color="success"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-facebook" />
    //                   </Button>
    //                   <Button
    //                     className="btn-icon-only rounded-circle ml-1"
    //                     color="success"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                   >
    //                     <i className="fa fa-dribbble" />
    //                   </Button>
    //                 </div>
    //               </div>
    //             </div>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </section>

    //     {/* <Download /> */}
    //   {/* </main> */}

    //   {/* <CardsFooter /> */}
    // </>
  );
};

export default Landing;
