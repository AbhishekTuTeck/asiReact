import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DataTableComponent from "../../components/datatable/DataTableComponent"; // Adjust the path as needed
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"; // Adjust the path as needed
import SideBar from '../../components/sidebar/Sidebar';
import Stack from 'react-bootstrap/Stack';
import FeatherIcon from "feather-icons-react";
import React, { useState } from 'react';



export default function CompileScheduleGeneralInfo() {
    const [fileName, setFileName] = useState('No file chosen');
  
    const handleButtonClick = () => {
      document.getElementById('file-input').click();
    };handleButtonClick
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFileName(selectedFile.name);
      } 
    };

  return (
  <>
      <Breadcrumb title="Compile Schedule" />
      <div>
        <div className="d-flex align-items-center my-2">
          <a href='#' className='backLink d-flex align-items-center'><FeatherIcon icon="chevron-left" /><span className='backLinktext'>Back to List</span></a>
          <div className="controlBtn ms-auto d-flex">
            <Button variant="btn btn-danger" className='d-flex align-items-center me-2'>Close<FeatherIcon icon="x" /></Button>
            <Button variant="btn btn-primary" className="d-flex align-items-center me-2">Next<FeatherIcon icon="chevron-right" /></Button>
            <Button variant="btn btn-outline-primary" className='custom-outline-primary d-flex align-items-center'>Last<FeatherIcon icon="chevrons-right" /></Button>
          </div>
        </div>
        <Card className='asiSchedule'>
          <Card.Header className='asiScheduleHeader d-flex align-items-center'>ASI Schedule 2020-21 -  <span className='text-danger d-flex align-items-center ms-1'><span className='me-1'>  CONFIDENTIAL </span> <FeatherIcon icon="lock" /></span></Card.Header>
          <Card.Body>
            <Form className='radioSheetmode '>
              {['radio'].map((type) => (
                <div key={`inline-${type}`}>
                  <Form.Check
                    inline
                    label="Balance Sheet Mode"
                    name="group1"
                    className='me-5'
                    type={type}
                    id={`inline-${type}-1`}
                    defaultChecked
                  />
                  <Form.Check
                    inline
                    label="Direct Entry Mode"
                    name="group1"
                    className='me-5'
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </Card.Body>
        </Card>
        <div className="genInfo d-flex justify-content-between align-items-center mb-1">
          <p className='geninfoTitle'>General Information</p>
          <div className='ms-auto'>
            <InputGroup className="selectBlock mb-3" size="sm" controlId="">
              <Form.Select size='sm'>
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
              <InputGroup.Text id="" className='bg-dark'><span className='text-light'><FeatherIcon icon="search" /></span></InputGroup.Text>
            </InputGroup>
          </div>
        </div>
        <Row>
          <Col md={6}>
            <Card className='cardBlockA'>
              <Card.Header className="customCardheader">Block A</Card.Header>
              <Card.Body p-0>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label>Date of Verification/Compilation</Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='03/08/2024'
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label>Survey Year</Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='2020 -2021'
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>1</span>DSL No.</Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='131769'
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>2</span>PSL No.</Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='05933'
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>3</span>Scheme</Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='Census'
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>4</span>Industry code as per Frame </Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='1512'
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
                        <Form.Group className='mb-4' controlId="">
                          <Form.Label className='mb-2'><span className='customSerialNo'>5</span>Industry code as per Return</Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder='15121 - Manufacture of travel goods'
                          />
                          <Form.Text className="text-muted">
                            5-digit level of NIC - 08
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className='mb-4' controlId="">
                          <Form.Label className='mb-2'><span className='customSerialNo'>7</span>State</Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder='Maharashtra'
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className='mb-4' controlId="">
                          <Form.Label className='mb-2'><span className='customSerialNo'>8</span>District</Form.Label>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder='SOLAPUR'
                            disabled
                          />
                        </Form.Group>
                      </Col>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>6</span>Description of Industry</Form.Label>
                        <Form.Control
                          className='largeFormControl'
                          size="sm"
                          as="textarea"
                          placeholder='Manufacture of travel goods like suitcase, bags, hold alls etc.'
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>9</span>Sector <span className='text-danger'> *</span></Form.Label>
                        <Form.Select size="sm">
                          <option>Urban</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>10</span>RO / SRO Code</Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='RO'
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>11</span>No. of Units</Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='1'
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>12</span>Status of Unit <span className='text-danger'> *</span></Form.Label>
                        <Form.Select size="sm" disabled>
                          <option>01 - OPEN</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Label>Upload/Download Supported Documents</Form.Label>
                    <Col md={5}>
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
                        value={fileName}
                        onMouseDown={(e) => e.preventDefault()}
                        onSelectStart={(e) => e.preventDefault()}
                        readOnly
                      />
                    </Col>
                    <Col md={7}>
                      <div className='d-flex justify-content-start'>
                        <Button variant="outine-primary" className="btn btn-outline-primary d-flex align-items-center me-2"onClick={handleButtonClick} > <span className='me-2'>Browse</span><FeatherIcon icon="file" /></Button>
                        <Button variant="btn btn-primary" className=' d-flex align-items-center me-2'><span className='me-2'>Upload</span><FeatherIcon icon="upload" /></Button>
                        <Button variant="outline-danger" className='d-flex align-items-center me-2 ps-3'><FeatherIcon icon="x-square" /></Button>
                      </div>
                    </Col>
                    <Form.Text className="text-muted mt-3">
                      Allowable Extensions are .pdf,.xls,.xlsx,.doc,.docx  The upload File size limit upto 10 MB
                    </Form.Text>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Card className='remarkCard'>
              <Card.Header className='customCardheader'>Remarks</Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Control placeholder='Enter Remarks...' as="textarea" className=" customRemarksfc text-muted" />
                </Form.Group>
              </Card.Body>
            </Card>
            <div class="mb-4">
              <Button variant="btn btn-primary me-2"><span className='me-2'>Save as Draft</span><FeatherIcon icon="save" /></Button>
              <Button variant="outline-primary me-2"><span className='me-2'>Preview</span><FeatherIcon icon="eye" /></Button>
              <Button variant="success">Validate<i class="bi bi-check-circle-fill ms-2"></i></Button>
            </div>
          </Col>
          <Col md={6}>
            <Card className="cardBlockB">
              <Card.Header className='customCardheader'>Block B</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Label className='customBlockBtitle'><span className='customSerialNo'>1</span>Details of the Industrial Unit</Form.Label>
                  <Card.Title className='customBlockBsubtitle text-muted'>For Next Year Frame Updation</Card.Title>
                  <Card className='customInnercard shadow-none mt-1'>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <Form.Group className='mb-4' controlId="">
                            <Form.Label>Enter Name <span className='text-danger'> *</span></Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='Enter Name'
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className='mb-4' controlId="">
                            <Form.Label>Address1 <span className='text-danger'> *</span></Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='Address1'
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className='mb-4' controlId="">
                            <Form.Label>Address2</Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='Enter Name'
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className='mb-4' controlId="">
                            <Form.Label>Village / Town <span className='text-danger'> *</span></Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='Village / Town '
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="">
                            <Form.Label>State <span className='text-danger'> *</span></Form.Label>
                            <Form.Select size="sm">
                              <option>Select State</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group  controlId="">
                            <Form.Label>Pincode<span className='text-danger'> *</span></Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='Enter Pincode'
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <Row>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>2</span>Type of Organization <span className='text-danger'> *</span></Form.Label>
                        <Form.Select size="sm">
                          <option>Select Organization</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>3</span>CIN</Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='U27320AP2002PTC119078'
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>4</span>Whether the unit has ISO Certification, 14000 Series <span className='text-danger'> *</span></Form.Label>
                        <Form.Select size="sm">
                          <option>Yes</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>5</span>Year of initial production - YYYY <span className='text-danger'> *</span></Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='2024'
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>6</span>Accounting Year (MM/YY) <span className='text-danger'> *</span></Form.Label>
                        <Stack direction="horizontal" gap={3}>
                          <div>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='04/20'
                            />
                          </div>
                          <div>To</div>
                          <div>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='03/21'
                            />
                          </div>
                        </Stack>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>7</span>No of months operation <span className='text-danger'> *</span></Form.Label>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder='12'
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>8</span>Whether the share capital of the company includes share of foreign entities? <span className='text-danger'> *</span></Form.Label>
                        <Form.Select size="sm">
                          <option>No</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-4' controlId="">
                        <Form.Label className='mb-2'><span className='customSerialNo'>9</span>Any R&D unit in your factory? <span className='text-danger'> *</span></Form.Label>
                        <Form.Select size="sm">
                          <option>No</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Label className='customBlockBtitle'><span className='customSerialNo'>10</span>Detail of Contact Person</Form.Label>
                  <Card className='customInnercard shadow-none mt-2'>
                    <Card.Body p-0>
                      <Row>
                        <Col md={6}>
                          <Form.Group className='mb-4' controlId="">
                            <Form.Label>Enter Name <span className='text-danger'> *</span></Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='Enter Name'
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className='mb-4' controlId="">
                            <Form.Label>Designation <span className='text-danger'> *</span></Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='Enter Designation '
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className='mb-4' controlId="">
                            <Form.Label>Tele (with STD code)</Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='Enter Tele (with STD code)'
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="">
                            <Form.Label>Fax No</Form.Label>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder='Enter Fax No'
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="">
                            <Form.Label>E-mail <span className='text-danger'> *</span></Form.Label>
                            <Form.Control
                              size="sm"
                              type="email"
                              placeholder='Enter E-mail'
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <Form.Group controlId="">
                    <Form.Label className='mb-2'><span className='customSerialNo'>11</span>Whether the unit offered any formal training <span className='text-danger'> *</span></Form.Label>
                    <Form.Select size="sm">
                      <option>No</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            <div className='controlBtn d-flex justify-content-end mb-4'>
              <Button variant="btn btn-danger" className='me-2 d-flex align-items-center'>Close<FeatherIcon icon="x" /></Button>
              <Button variant="btn btn-primary" className='me-2 d-flex align-items-center'>Next<FeatherIcon icon="chevron-right" /></Button>
              <Button variant="btn btn-outline-primary custom-outline-primary" className="d-flex align-items-center">Last<FeatherIcon icon="chevrons-right" /></Button>
            </div>
          </Col>
        </Row>
      </div>
      </>
      );
}
