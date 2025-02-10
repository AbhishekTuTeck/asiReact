import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { Container, Navbar, Nav, NavDropdown, Button, Badge, Row, Col, Card, Carousel, Form, FormControl, InputGroup, } from 'react-bootstrap';


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const staticUsername = "admin";
  const staticPassword = "password123";

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8); // Generates a 6-character alphanumeric captcha
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = () => {
    if (username !== staticUsername || password !== staticPassword) {
      setErrorMessage("Invalid username or password!");
      refreshCaptcha();
      return;
    }
    if (captchaInput !== captcha) {
      setErrorMessage("Captcha incorrect! Try again.");
      refreshCaptcha();
      return;
    }
    Swal.fire("Success", "Login successful!", "success");

    navigate('/nsso-secured/compile-schedule');
  };


  return (
    <div className="loginbackground w-100 h-100">
      <Container>
        <Navbar expand="lg" className="bg-transparent py-3 custom-badge d-flex align-items-center">
          <Navbar.Brand className="navbrand" href="#">
            <img src="src\assets\logo.svg" className="img-fluid pe-4" alt="" width="200" height="61.66" />
          </Navbar.Brand>
          <Navbar.Brand className="navbrand2" href="#">
            <img src="src\assets\NSS_logo.png" className="img-fluid border-0" alt="" width="120" height="61.66" />
          </Navbar.Brand>
          <Badge className="badge badge-outline badge-danger px-3">ASI</Badge>
          <Nav className="ms-auto">
            <Button variant="primary" className="rounded-pill px-4 d-flex align-items-center justify-content-center">
              <i class="bi bi-person"></i>
              <span className="login-text ms-1">Login</span>
            </Button>
          </Nav>
        </Navbar>
        <Navbar expand="lg" className="custom-loginnavbar my-2 p-1">
          <Navbar.Toggle aria-controls="navbarToggler">
            <i className="bi bi-list"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarToggler" className="loginnavbarcollapse">
            <Nav className="custom-loginnavbar-nav d-flex justify-content-between align-items-center w-100" variant="pills" defaultActiveKey="/home">
              <Nav.Item className="customnavItem px-3 py-2">
                <Nav.Link className="d-flex justify-content-between align-items-center" eventKey="1" href="https://www.google.com/home">
                <i className="bi bi-house-door me-2"></i>Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="customnavItem px-3 py-2">
                  <Nav.Link className="d-flex justify-content-between align-items-center" eventKey="1" href="">
                  <i className="bi bi-arrow-counterclockwise me-2"></i>History
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className="customnavItem px-3 py-2">
                  <Nav.Link className="d-flex justify-content-between align-items-center" eventKey="1" href="#">
                  <i className="bi bi-grid me-2"></i>Present Structure
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className="customnavItem px-3 py-2">
                <Nav.Link className="d-flex justify-content-between align-items-center" eventKey="1" href="#">
                  <i className="bi bi-gear me-2"></i>Functions
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="customnavItem px-3 py-2">
                <NavDropdown  title={<><i className="bi bi-info-circle me-2"></i>About</>}>
                  <NavDropdown.Item className="" href="#">Lorem Ipsum</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="" href="#">Lorem Ipsum</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item className="customnavItem px-3 py-2">
                <Nav.Link className="d-flex justify-content-between align-items-center" eventKey="1" href="#">
                  <i className="bi bi-card-text me-2"></i>ASI Manual
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="customnavItem px-3 py-2">
                <Nav.Link className="d-flex justify-content-between align-items-center" eventKey="1" href="#">
                  <i className="bi bi-circle me-2"></i>NIC
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="customnavItem px-3 py-2">
                <Nav.Link className="d-flex justify-content-between align-items-center" eventKey="1" href="#">
                  <i className="bi bi-circle me-2"></i>NPCMS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="customnavItem px-3 py-2">
                <Nav.Link className="d-flex justify-content-between align-items-center" eventKey="1" href="#">
                  <i className="bi bi-bank me-2"></i>State IIP
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row className="mb-5 mt-3">
          <Col md={7}>
            <Card className="leftcard shadow-none">
              <Card.Header as="h5" className="leftcard-header p-0 pb-4 m-0 border-0">National Statistical Office - Industrial Statistics Wing</Card.Header>
              <Card.Body className="p-0 leftcard-body">
                <Carousel id="login-carousel" className="custom-carousel">
                  <Carousel.Item className="custom-carousel-inneritem active">
                    <img
                      src="src\assets\hero_image_1.jpg"
                      className="d-block w-100"
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item className="custom-carousel-inneritem">
                    <img
                      src="src\assets\hero_image_2.jpg"
                      className="d-block w-100"
                      alt=""
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="rightcard py-5 px-5">
              <Card.Title className="rightcard-title-h4">Welcome Back !</Card.Title>
              <Card.Title className="rightcard-title-h3">Login</Card.Title>
              <Card.Body className="p-0 rightcard-body">
                <Row>
                  <Col md={12} sm={12}>
                    <Form.Group controlId="formUsername" className="mb-3">
                      <Form.Label>Username<span>*</span></Form.Label>
                      <FormControl
                        type="text"
                        className="customFormcontrol"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Enter Username"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12}>
                    <Form.Group controlId="formPassword" className="mb-3">
                      <Form.Label>Password<span>*</span></Form.Label>
                      <FormControl
                        type="password"
                        className="customFormcontrol"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter Password"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12}>
                    <InputGroup className="mb-3 logininput-group">
                      <FormControl
                        id="generated-captcha"
                        value={captcha}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        onMouseDown={(e) => e.preventDefault()}
                        onSelectStart={(e) => e.preventDefault()}
                        required
                        readOnly
                      />
                      <InputGroup.Text className="p-0 border-0">
                        <Button type="button" className="btn btn-primary captcharefreshbtn" onClick={refreshCaptcha}><i className="bi bi-arrow-clockwise"></i></Button>
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                  <Col md={12} sm={12}>
                    <FormControl
                      className="mb-3"
                      type="text"
                      id="entered-captcha"
                      placeholder="Enter Above captcha.."
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      required
                    />
                    {errorMessage && <div className="alert alert-danger"><i class="bi bi-exclamation-triangle me-2"></i>{errorMessage}</div>}
                  </Col>
                  <Col md={12} sm={12} className="">
                    <button className="btn-block py-2" onClick={handleSubmit}>Login</button>
                  </Col>
                  {/*  <Col className="col-md-12 col-sm-12">
                    <div className="forgetpasswordlink d-flex justify-content-end">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </Col> */}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="loginfooter">
        <div className="loginfooter-first py-3 px-3">
          <Nav className="loginfooter-first-nav">
            <Nav.Link className="loginfooter-first-nav-link py-0 pe-4" href="#">RTI</Nav.Link>
            <Nav.Link className="loginfooter-first-nav-link py-0 pe-4" href="#">Public</Nav.Link>
            <Nav.Link className="loginfooter-first-nav-link py-0 pe-4" href="#">Notice</Nav.Link>
            <Nav.Link className="loginfooter-first-nav-link py-0 pe-4" href="#">Photo</Nav.Link>
            <Nav.Link className="loginfooter-first-nav-link py-0 pe-4" href="#">Gallery</Nav.Link>
            <Nav.Link className="loginfooter-first-nav-link py-0 pe-4" href="#">Telephone Directory</Nav.Link>
            <Nav.Link className="loginfooter-first-nav-link py-0 pe-4" href="#">Feedback</Nav.Link>
            <Nav.Link className="loginfooter-first-nav-link py-0 pe-4 border-0" href="#">Disclaimer</Nav.Link>
          </Nav>
        </div>
        <div className="loginfooter-second">
          <div class="container">
            <p class="mb-0 py-2">© 2025, National Statistical Office - Industrial Statistics Wing. All rights reserved.
              Ministry of Statistics & Programme Implementation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
