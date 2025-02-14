import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Spinner } from "react-bootstrap";
import DataTableComponent from "../../components/datatable/DataTableComponent"; // Adjust the path as needed
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"; // Adjust the path as needed
import SideBar from "../../components/sidebar/Sidebar";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

export default function CompileScheduleGeneralInfo() {
  const [fileName, setFileName] = useState("No file chosen");

  const [isSaving, setIsSaving] = useState(false);

  const handleButtonClick = () => {
    document.getElementById("file-input").click();
  };


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };


  const handleSaveClick = () => {
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        dispatch(showToast({ message: "Search completed successfully!", variant: "success" }));
      } else {
        dispatch(showToast({ message: "Error occurred during search!", variant: "danger" }));
      }
    }, 3000);
  };


  return (
    <>
      <Breadcrumb title="Compile Schedule General Info" />

      <div className="d-flex align-items-center my-2">
        <Link
          to="/nsso-secured/compile-schedule"
          className="backLink d-flex align-items-center"
        >
          <FeatherIcon icon="chevron-left" />
          <span className="backLinktext">Back to List</span>
        </Link>
        <div className="controlBtn ms-auto d-flex">
          <Link
            to="/nsso-secured/compile-schedule"
            className="btn btn-danger d-flex align-items-center me-2"
          >
            Close
            <FeatherIcon icon="x" />
          </Link>
          <Link
            to="/nsso-secured/compile-schedule/fixed-assets-data"
            className="btn btn-primary d-flex align-items-center me-2"
          >
            Next
            <FeatherIcon icon="chevron-right" />
          </Link>
          <Link
            to="/nsso-secured/compile-schedule/check-list"
            className="btn btn-outline-primary custom-outline-primary d-flex align-items-center"
          >
            Last
            <FeatherIcon icon="chevrons-right" />
          </Link>
        </div>
      </div>
      <Card className="rounded-4">
        <Card.Header>
          <Card.Title className="d-flex align-items-center mb-0">ASI Schedule 2020-21 - <span className="text-danger d-flex align-items-center ms-1">CONFIDENTIAL <FeatherIcon icon="lock" className="ms-1" /></span></Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`}>
                <Form.Check
                  inline
                  label="Balance Sheet Mode"
                  name="group1"
                  className="me-5"
                  type={type}
                  id={`inline-${type}-1`}
                  defaultChecked
                />
                <Form.Check
                  inline
                  label="Direct Entry Mode"
                  name="group1"
                  className="me-5"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
        </Card.Body>
      </Card>
      <Row className="align-items-center mb-3">
        <Col md={6}>
          <h5 className="textPrimary fw-bold mb-0">General Information </h5>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <div className="ms-auto">
            <InputGroup size="sm" controlId="">
              <Form.Select size="sm">
                <option>Select Block</option>
                <option>Fixed Assets</option>
                <option>Balance Sheet</option>
                <option>Profit & Loss Account</option>
                <option>Block-E/Part 2(Labour Bureau)</option>
                <option>Block H</option>
                <option>Block I</option>
                <option>Block J</option>
                <option>Block KL</option>
                <option>Block A1</option>
                <option>Block A2</option>
                <option>Check List</option>
              </Form.Select>
              <InputGroup.Text id="" className="bg-dark">
                <span className="text-light">
                  <FeatherIcon icon="search" />
                </span>
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="rounded-4">
            <Card.Header>
              <Card.Title className="mb-0 fs-6 text-dark fw-bold">Block A</Card.Title>
            </Card.Header>
            <Card.Body p-0>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Verification/Compilation</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="03/08/2024"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Survey Year</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="2020 -2021"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">1</div>
                        <Form.Label className="mb-0">
                          DSL No.{" "}<span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="131769"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">2</div>
                        <Form.Label className="mb-0">
                          PSL No.{" "}<span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="05933"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">3</div>
                        <Form.Label className="mb-0">
                          Scheme
                        </Form.Label>
                      </div>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Census"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">4</div>
                        <Form.Label className="mb-0">
                          Industry code as per Frame
                        </Form.Label>
                      </div>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="1512"
                        disabled
                      />
                      <Form.Text className="text-muted">
                        4-digit level of NIC - 08
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Col>
                      <Form.Group className="mb-3" controlId="">
                        <div className="d-flex align-items-center mb-2">
                          <div className="labelSerialNo">5</div>
                          <Form.Label className="mb-0">
                            Industry code as per Return
                          </Form.Label>
                        </div>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="15121 - Manufacture of travel goods"
                        />
                        <Form.Text className="text-muted">
                          5-digit level of NIC - 08
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="">
                        <div className="d-flex align-items-center mb-2">
                          <div className="labelSerialNo">7</div>
                          <Form.Label className="mb-0">
                            State
                          </Form.Label>
                        </div>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Maharashtra"
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="">
                        <div className="d-flex align-items-center mb-2">
                          <div className="labelSerialNo">8</div>
                          <Form.Label className="mb-0">
                            District
                          </Form.Label>
                        </div>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="SOLAPUR"
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">6</div>
                        <Form.Label className="mb-0">
                          Description of Industry
                        </Form.Label>
                      </div>
                      <Form.Control
                        rows={11}
                        size="sm"
                        as="textarea"
                        placeholder="Manufacture of travel goods like suitcase, bags, hold alls etc."
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">9</div>
                        <Form.Label className="mb-0">
                          Sector{" "}<span className="text-danger"> *</span>
                        </Form.Label>
                      </div>
                      <Form.Select size="sm">
                        <option>Urban</option>
                      </Form.Select>
                      <Form.Text className="text-muted">
                        For Next Year Frame Updation
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">10</div>
                        <Form.Label className="mb-0">
                          RO / SRO Code
                        </Form.Label>
                      </div>
                      <Form.Control size="sm" type="text" placeholder="RO" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">11</div>
                        <Form.Label className="mb-0">
                          No. of Units
                        </Form.Label>
                      </div>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="1"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">12</div>
                        <Form.Label className="mb-0">
                          Status of Unit{" "}
                          <span className="text-danger"> *</span>
                        </Form.Label>
                      </div>
                      <Form.Select size="sm" disabled>
                        <option>01 - OPEN</option>
                      </Form.Select>
                      <Form.Text className="text-muted">
                        For Next Year Frame Updation
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Label>Upload/Download Supported Documents</Form.Label>
                      <div className="d-flex justify-content-start mb-1">
                        <Form.Group controlId="">
                          <Form.Control
                            type="file"
                            className="file d-none"
                            id="file-input"
                            onChange={handleFileChange}
                          />
                        </Form.Group>
                        <Form.Control
                          type="text"
                          id="file-name"
                          className="me-2"
                          value={fileName}
                          onMouseDown={(e) => e.preventDefault()}
                          onSelectStart={(e) => e.preventDefault()}
                          readOnly
                        />

                        <Button
                          variant="outine-primary"
                          className="btn btn-outline-primary d-flex align-items-center me-2"
                          onClick={handleButtonClick}
                        >
                          {" "}
                          <span className="me-2">Browse</span>
                          <FeatherIcon icon="file" />
                        </Button>
                        <Button
                          variant="btn btn-primary"
                          className=" d-flex align-items-center me-2"
                        >
                          <span className="me-2">Upload</span>
                          <FeatherIcon icon="upload" />
                        </Button>
                        <Button
                          variant="outline-danger"
                          className="d-flex align-items-center me-2 px-2"
                        >
                          <FeatherIcon icon="x" />
                        </Button>
                      </div>
                    <Form.Text className="text-muted mt-3">
                      Allowable Extensions are .pdf,.xls,.xlsx,.doc,.docx The
                      upload File size limit upto 10 MB
                    </Form.Text>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card className="rounded-4">
            <Card.Header>
              <Card.Title className="mb-0 fs-6 text-dark fw-bold">Remarks</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Control
                  placeholder="Enter Remarks..."
                  as="textarea"
                  className="text-muted"
                />
              </Form.Group>
            </Card.Body>
          </Card>

        </Col>
        <Col md={6}>
          <Card className="rounded-4">
            <Card.Header>
              <Card.Title className="mb-0 fs-6 text-dark fw-bold">Block B</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <div class="d-flex align-items-start mb-2">
                    <div class="labelSerialNo">1</div>
                    <div>
                      <Form.Label class="textPrimary form-label m-0 fs-6">Details of the Industrial Unit</Form.Label>
                      <p class="textMutedLight m-0">For Next Year Frame Updation</p>
                    </div>
                  </div>
                </Form.Group>

                <Card className="bgLightBlue shadow-none mt-1">
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label>
                            Enter Name <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Enter Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label>
                            Address1 <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Address1"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label>Address2</Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Enter Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label>
                            Village / Town <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Village / Town "
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="">
                          <Form.Label>
                            State <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select size="sm">
                            <option>Select State</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="">
                          <Form.Label>
                            Pincode <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Enter Pincode"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">2</div>
                        <Form.Label className="mb-0">
                          Organization <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Select size="sm">
                        <option>Select Organization</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">3</div>
                        <Form.Label className="mb-0">
                          CIN
                        </Form.Label>
                      </div>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="U27320AP2002PTC119078"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-start mb-2">
                        <div className="labelSerialNo">4</div>
                        <Form.Label className="mb-0">
                          Whether the unit has ISO Certification, 14000 Series <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Select size="sm">
                        <option>Yes</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-start mb-2">
                        <span className="labelSerialNo">5</span>
                        <Form.Label className="mb-0">
                          Year of initial production - YYYY <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Control size="sm" type="text" placeholder="2024" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-center mb-2">
                        <div className="labelSerialNo">6</div>
                        <Form.Label className="mb-0">
                          Accounting Year (MM/YY) <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <div className="d-flex align-items-center">
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="04/20"
                          />
                          <p className="mb-0 px-3">To</p>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="03/21"
                          />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div className="d-flex align-items-start mb-2">
                        <div className="labelSerialNo">7</div>
                        <Form.Label className="mb-0">
                          No of months operation <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Control size="sm" type="text" placeholder="12" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="">
                      <div class="d-flex align-items-start mb-2">
                        <div className="labelSerialNo">8</div>
                        <Form.Label className="mb-0">
                          Whether the
                          share capital of the company includes share of foreign
                          entities?{" "}<span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Select size="sm">
                        <option>No</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="">
                      <div class="d-flex align-items-center">
                        <div className="labelSerialNo">9</div>
                        <Form.Label className="mb-0">
                          Any R&D unit in your factory? <span className="text-danger">*</span>
                        </Form.Label>
                      </div>
                      <Form.Select size="sm">
                        <option>No</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <div class="d-flex align-items-center">
                  <div className="labelSerialNo">10</div>
                  <Form.Label className="mb-0 textPrimary">
                    Detail of Contact Person
                  </Form.Label>
                </div>
                <Card className="bgLightBlue shadow-none mt-2">
                  <Card.Body p-0>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label>
                            Enter Name <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Enter Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label>
                            Designation <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Enter Designation "
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="">
                          <Form.Label>Tele (with STD code)</Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Enter Tele (with STD code)"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="">
                          <Form.Label>Fax No</Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Enter Fax No"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="">
                          <Form.Label>
                            E-mail <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            size="sm"
                            type="email"
                            placeholder="Enter E-mail"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Form.Group controlId="">
                  <div class="d-flex align-items-center mb-2">
                    <div className="labelSerialNo">11</div>
                    <Form.Label className="mb-0">
                      Whether the unit offered any formal training <span className="text-danger">*</span>
                    </Form.Label>
                  </div>
                  <Form.Select size="sm">
                    <option>No</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row >
      <Row>
        <Col>
          <div class="mb-4">
            {!isSaving ? (
              <Button
                variant="btn btn-primary"
                className=" me-2"
                onClick={handleSaveClick}
              >
                <span className="me-2">Save as Draft</span>
                <FeatherIcon icon="save" />
              </Button>
            ) : (
              <Button variant="primary" disabled className=" me-2">
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Savings...
              </Button>
            )}
            <Button variant="outline-primary me-2">
              <span className="me-2">Preview</span>
              <FeatherIcon icon="eye" />
            </Button>
            <Button variant="success">
              Validate<i class="bi bi-check-circle-fill ms-2"></i>
            </Button>
          </div>
        </Col>
        <Col>
          <div className="controlBtn d-flex justify-content-end mb-4">
            <Link
              to="/nsso-secured/compile-schedule"
              className="btn btn-danger d-flex align-items-center me-2"
            >
              Close
              <FeatherIcon icon="x" />
            </Link>
            <Link
              to="/nsso-secured/compile-schedule/fixed-assets-data"
              className="btn btn-primary d-flex align-items-center me-2"
            >
              Next
              <FeatherIcon icon="chevron-right" />
            </Link>
            <Link
              to="/nsso-secured/compile-schedule/check-list"
              className="btn btn-outline-primary custom-outline-primary d-flex align-items-center"
            >
              Last
              <FeatherIcon icon="chevrons-right" />
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
}
