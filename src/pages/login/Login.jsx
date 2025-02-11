import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Badge,
  Row,
  Col,
  Card,
  Carousel,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const staticUsername = "asi";
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

  useEffect(() => {
    document.body.classList.add("login-page");

    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);
  return (
    <div className="loginbackground w-100 h-100">
      <Container>
        <Navbar expand="lg" className="bg-transparent py-3 custom-badge d-flex align-items-center">
          <Navbar.Brand className="navbrand" href="#">
            <img src="src\assets\logo.svg" className="img-fluid pe-4" alt="" width="230" />
          </Navbar.Brand>
          <Navbar.Brand className="navbrand2" href="#">
            <img src="src\assets\NSS_logo.png" className="img-fluid border-0" alt="" width="130"  />
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

            <Nav className="custom-loginnavbar-nav d-flex justify-content-between align-items-center w-100" variant="pills" as="ul">
              <Nav.Item  as="li">
                <Link to=""><i className="bi bi-house-door me-2"></i>Home</Link>
              </Nav.Item>
              <Nav.Item  as="li">
              <Link to=""><i className="bi bi-arrow-counterclockwise me-2"></i>History</Link>
              </Nav.Item>
              <Nav.Item  as="li">
              <Link to=""><i className="bi bi-grid me-2"></i>Present Structure</Link>
              </Nav.Item>
              <Nav.Item  as="li">
              <Link to=""><i className="bi bi-gear me-2"></i>Functions</Link>
              </Nav.Item>
              <NavDropdown className="custom-loginnavbar-nav-item px-3 py-2" title={<><i className="bi bi-info-circle me-2"></i>About</>} as="li">
                <NavDropdown.Item className="custom-loginnavbar-nav-item-dropdown"> <Link to="">About ASI</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="custom-loginnavbar-nav-item-dropdown"> <Link to="">About ASB</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Item  as="li">
              <Link to=""> <i className="bi bi-card-text me-2"></i>ASI Manual</Link>
              </Nav.Item>
              <Nav.Item  as="li">
              <Link to=""> <i className="bi bi-circle me-2"></i>NIC</Link>
              </Nav.Item>
              <Nav.Item  as="li">
              <Link to=""><i className="bi bi-circle me-2"></i>NPCMS</Link>
              </Nav.Item>
              <Nav.Item  as="li">
              <Link to=""><i className="bi bi-bank me-2"></i>State IIP</Link>

              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row className="mb-3 mt-3 align-items-center">
          <Col md={7}>
            <Card className="leftcard shadow-none">
              <Card.Header as="h5" className="leftcard-header mt-3 p-0 pb-4 m-0 border-0">National Statistical Office - Industrial Statistics Wing</Card.Header>
              <Card.Body className="p-0 leftcard-body">
                <Carousel id="login-carousel" className="custom-carousel" fade>
                  <Carousel.Item className="custom-carousel-inneritem active">
                    <img
                      src="src\assets\hero_image_2.jpg"
                      className="d-block w-100"
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item className="custom-carousel-inneritem">
                    <img
                      src="src\assets\hero_image_1.jpg"
                      className="d-block w-100"
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item className="custom-carousel-inneritem">
                    <img
                      src="src\assets\hero_image_3.jpg"
                      className="d-block w-100"
                      alt=""
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>

            <Card className="rightcard py-4 px-5 login-card-contain">
              <Card.Header className="rightcard-header p-0 border-0">
                <h4 className="rightcard-header-h4">Welcome Back !</h4>
                <h3 className="rightcard-header-title">Login</h3>
              </Card.Header>

              <Card.Body className="p-0 rightcard-body">
                <Row>
                  <Col md={12} sm={12}>
                    <Form.Group controlId="formUsername" className="mb-3">
                      <Form.Label>Username<span className="text-danger"> *</span></Form.Label>
                      <FormControl
                        type="text"
                        className="customFormcontrol"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Enter Username"
                        
                        size="lg"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12}>
                    <Form.Group controlId="formPassword" className="mb-3">
                      <Form.Label>Password<span className="text-danger"> *</span></Form.Label>
                      <FormControl
                        type="password"
                        className="customFormcontrol"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter Password"
                        
                        size="lg"
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

                      <InputGroup.Text className="p-0 border-0" >
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

                      size="lg"
                      />
                      {errorMessage && <div className="alert alert-danger"><i class="bi bi-exclamation-triangle me-2"></i>{errorMessage}</div>}
                  </Col>
                  <Col md={12} sm={12} className="my-3 d-grid">
                    <button className="py-2 btn btn-primary btn-lg" onClick={handleSubmit}>Login</button>
                  </Col>
                  <Col className="col-md-12 col-sm-12">

                    <div className="forgetpasswordlink d-flex justify-content-end">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="loginfooter">
        <div className="loginfooter-first py-3 px-3">

        <div class="container">
          <Nav className="loginfooter-first-nav align-items-center justify-content-center" as="ul">
            <Nav.Item className="loginfooter-first-nav-navitem" as="li">
              <Nav.Link className="loginfooter-first-nav-navitem-link py-0 pe-4" href="#">RTI</Nav.Link>
            </Nav.Item>
            <Nav.Item className="loginfooter-first-nav-navitem" as="li">
              <Nav.Link className="loginfooter-first-nav-navitem-link py-0 pe-4" href="#">Public</Nav.Link>
            </Nav.Item>
            <Nav.Item className="loginfooter-first-nav-navitem" as="li">
              <Nav.Link className="loginfooter-first-nav-navitem-link py-0 pe-4" href="#">Notice</Nav.Link>
            </Nav.Item>
            <Nav.Item className="loginfooter-first-nav-navitem" as="li">
              <Nav.Link className="loginfooter-first-nav-navitem-link py-0 pe-4" href="#">Photo</Nav.Link>
            </Nav.Item>
            <Nav.Item className="loginfooter-first-nav-navitem" as="li">
              <Nav.Link className="loginfooter-first-nav-navitem-link py-0 pe-4" href="#">Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item className="loginfooter-first-nav-navitem" as="li">
              <Nav.Link className="loginfooter-first-nav-navitem-link py-0 pe-4" href="#">Telephone Directory</Nav.Link>
            </Nav.Item>
            <Nav.Item className="loginfooter-first-nav-navitem" as="li">
              <Nav.Link className="loginfooter-first-nav-navitem-link py-0 pe-4" href="#">Feedback</Nav.Link>
            </Nav.Item>
            <Nav.Item className="loginfooter-first-nav-navitem" as="li">
              <Nav.Link className="loginfooter-first-nav-navitem-link py-0 pe-4" href="#">Disclaimer</Nav.Link>
            </Nav.Item>

          </Nav>
          </div>
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
