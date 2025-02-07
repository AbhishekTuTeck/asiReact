import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { save_fields } from './config';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function IdentifyParticulateTwo() {
  const [fields, setFields] = useState({ ...save_fields });

  const _handleChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  }
  const [startDate, setStartDate] = useState(new Date());

  return (
    
    <>

      <Form className='siteForm'>
      <Card className='welcomeCard mb-3 shadow-none'>
          <Card.Body>
            <Card.Title>
              <h2 className='mb-3'>Welcome Back ! <span>Company Name</span></h2>
              <p className='f-s-16'>To Start Servey Plesae Verify 1 & 2 Question</p>
              <p className='fw-bold f-s-13 text-muted'><i class="bi bi-check-circle-fill text-success"></i> 1. Identification particulars of the enterprise.</p>
              <p className='fw-bold f-s-13 text-muted'><i class="bi bi-check-circle-fill text-success"></i> 2. The contact information of the designated enterprise contact person for this questionnaire</p>
              </Card.Title>
              <Row className='mt-4'>
              <div href='#' className='col-md-6' 
    > <Button variant="primary"  onClick={() => console.log(fields)}>Start Now<i class="bi bi-arrow-right-short"></i></Button></div>
              <div href='#' className='col-md-6 d-flex align-items-center justify-content-end link-body-emphasis text-decoration-none '
    >
      <span>
        <strong className='text-truncate text-muted'>Abhishek Ghosh</strong>
        <p className='mb-0 text-grey text-truncate'>
          abhishek.ghosh@tuteck.com
        </p>
      </span>
    </div>
            </Row>

          </Card.Body>
        </Card>
        <div className='d-flex mb-2'>
          <h3 className='page-title'>Identification Particulars</h3>
          <Button variant="light">Save & Continue <i class="bi bi-arrow-right-short"></i></Button>
        </div>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title>
              <span className='Count'>1</span>
              <h5>Provide the Identification particulars of the enterprise.</h5>
              <div className='action-card ms-auto d-flex'>
                <span className='warning-point'></span>
                < a href="/"><i class="bi bi-pencil-fill"></i></a>
              </div>
            </Card.Title>

            <Row>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Corporate Identification Number (CIN)</Form.Label>
                <p>AZS78541345</p>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Legal name of the enterprise</Form.Label>
                <p>Example Enterprise</p>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Operating name of the enterprise</Form.Label>
                <p>Operating name</p>
              </Form.Group>
              <Form.Group as={Col} lg="12" md="12" sm="12">
                <Form.Label>Company Address of the enterprise
                </Form.Label>
                <p>142 Netaji Subhash Road, Panihati, Kolkata, Pin code - 700114, West Bengal, India</p>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Company Email ID
                </Form.Label>
                <p>example@gmail.com</p>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>GSTN of the enterprise
                </Form.Label>
                <p>GSTNO87764346</p>
              </Form.Group>
            </Row>

          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title>
              <span className='Count'>2</span>
              <h5>Provide the contact information of the designated enterprise contact person for this questionnaire</h5>
              <div className='action-card ms-auto d-flex'>
                <span className='success-point'></span>
                < a href="/"><i class="bi bi-pencil-fill"></i></a>
              </div>
              </Card.Title>

            <Row>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>First Name</Form.Label>
                <p>Abhishek</p>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Last Name</Form.Label>
                <p>Ghosh</p>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Designation</Form.Label>
                <p>UI UX Laead</p>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Email ID
                </Form.Label>
                <p>example@gmail.com</p>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Mobile Mo
                </Form.Label>
                <p>8296855114</p>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>TelePhone No
                </Form.Label>
                <p>033 8296855114</p>
              </Form.Group>
              <Form.Group as={Col} lg="12" md="12" sm="12">
                <Form.Label>Postal Address
                </Form.Label>
                <p>142 Netaji Subhash Road, Panihati, Kolkata, Pin code - 700114, West Bengal, India</p>
              </Form.Group>

            </Row>



          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title><span className='Count'>3</span> <h5>Provide the current operational status of the enterprise identified by the legal and operating name
              above (as on the date of the survey).</h5></Card.Title>
            <Row>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mt-3">
                  <Form.Check
                    inline
                    label="Operational"
                    name="3"
                    value={"1"}
                    checked={fields[3] === "1"}
                    type={type}
                    onChange={_handleChange}
                    id={`inline-${type}-1`}
                    className="mb-3"
                  />
                  <Form.Check
                    inline
                    label="Not currently operational"
                    name="3"
                    value={"2"}
                    type={type}
                    checked={fields[3] === "2"}
                    onChange={_handleChange}
                    id={`inline-${type}-2`}
                    className="mb-3"
                  />
                </div>
              ))}
            </Row>
            <Row>
              {fields[3] === "2" && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Why is this enterprise not currently operational? </Form.Label>
                <Form.Select aria-label="Default select example" name="3.1" value={fields['3.1']} onChange={_handleChange}  className="mb-3">
                  <option>Open this select menu</option>
                  <option value="21">Seasonal operations</option>
                  <option value="22">Ceased / Strike off operations</option>
                  <option value="23">Sold operation</option>
                  <option value="24">Amalgamated with other enterprises</option>
                  <option value="25">Temporarily inactive but will re-open</option>
                  <option value="29">No longer operating due to other reasons</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              </Row>
              <Row>
              {fields['3.1'] === "21" && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>When did this enterprise close for the season? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  className="mb-3"
                  name="3.1.1.1"
                  value={fields['3.1.1.1']}
                  onChange={_handleChange}
                />
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='form-control'/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              {fields['3.1'] === "21" && <Form.Group as={Col} lg="5" md="6" sm="12">
                <Form.Label>When does this enterprise expect to resume operations? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  className="mb-3"
                  name="3.1.1.2"
                  value={fields['3.1.1.2']}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              {fields['3.1'] === "22" && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>When did this enterprise cease operations? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  className="mb-3"
                  name="3.1.2.1"
                  value={fields['3.1.2.1']}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              {fields['3.1'] === "22" && <Form.Group as={Col} lg="4" md="6" sm="12" name="3.1.2.2" value={fields['3.1.2.2']} onChange={_handleChange}>
                <Form.Label>Why did this enterprise cease operations?</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="221">Bankruptcy </option>
                  <option value="222">Liquidation </option>
                  <option value="223">Dissolution </option>
                  <option value="229">Other </option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
           
              {fields['3.1'] === "22" && <Form.Group as={Col} lg="12" md="12" sm="12">
                <Form.Label>Specify the other reasons why the operations ceased? </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  className='mb-3'
                  name="3.1.2.3"
                  value={fields['3.1.2.3']}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
            </Row>
            <Row>
              {fields['3.1'] === "23" && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label> When was this enterprise sold? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  className="mb-3"
                  name="3.1.3.1"
                  value={fields["3.1.3.1"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              {fields['3.1'] === "23" && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>  What is the CIN of’the buyer? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter CIN"
                  defaultValue=""
                  className="mb-3"
                  name="3.1.3.2"
                  value={fields["3.1.3.2"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              {fields['3.1'] === "23" && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label> What is the Legal name of the buyer?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Name"
                  defaultValue=""
                  className="mb-3"
                  name="3.1.3.3"
                  value={fields["3.1.3.3"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              </Row>
              <Row>
              {fields['3.1'] === "24" &&
                <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>When did this enterprise amalgamate?  </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  className="mb-3"
                  name="3.1.4.1"
                  value={fields["3.1.4.1"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              </Row>
              
                 {fields['3.1'] === "24" && <Card className='card-body mb-3 bg-light'>
                  <Row>
              <div className='col-lg-5 col-md-5 col-sm-5'>
                <Form.Group>
              <Form.Label>What is the CIN of’the resulting or continuing enterprise?</Form.Label>
              <Form.Control
                   required
                    type="text"
                     placeholder="Enter CIN"
                     name="3.1.4.2"
                     onChange={_handleChange}
                      className='mb-2'
                  />
                  </Form.Group>
              </div>

              <div className='col-lg-6 col-md-5 col-sm-5'>
                <Form.Group>
              <Form.Label> What is the Legal name ot’the resulting or continuing enterprise?</Form.Label>
              <Form.Control
                   required
                    type="text"
                      placeholder="Enter"
                     name="3.1.4.3"
                     value={fields["3.1.4.3"]}
                     onChange={_handleChange}
                     className='mb-2'
                  />
                  </Form.Group>
              </div>

              <div className='col-lg-1 col-md-2 col-sm-2'>
                <div>
              <label class="form-label invisible d-block"> Blank </label>
              <Button variant="outline-primary"><i class="bi bi-plus-circle"></i></Button>
              </div>
              </div>
              </Row>
              <hr/>
              <Row>
              <div className='col-lg-5 col-md-5 col-sm-5'>
                <Form.Group>
              <Form.Label>What is the CIN of’the resulting or continuing enterprise?</Form.Label>
              <Form.Control
                   required
                    type="text"
                     placeholder="Enter CIN"
                     name="3.1.4.2"
                     onChange={_handleChange}
                      className='mb-2'
                  />
                  </Form.Group>
              </div>

              <div className='col-lg-6 col-md-5 col-sm-5'>
                <Form.Group>
              <Form.Label> What is the Legal name ot’the resulting or continuing enterprise?</Form.Label>
              <Form.Control
                   required
                    type="text"
                      placeholder="Enter"
                     name="3.1.4.3"
                     value={fields["3.1.4.3"]}
                     onChange={_handleChange}
                     className='mb-2'
                  />
                  </Form.Group>
              </div>

              <div className='col-lg-1 col-md-2 col-sm-2'>
                <div>
              <label class="form-label invisible d-block"> Blank </label>
              <Button variant="outline-danger"><i class="bi bi-dash-circle"></i></Button>
              </div>
              </div>
              </Row>
             </Card> }
              <Row>
              {fields['3.1'] === "24" && <Form.Group as={Col} lg="6" md="6" sm="12">
                <Form.Label> What are the CINs of the other enterprises amalgamated with the resulting or continuing enterprise?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter"
                  className="mb-3"
                  name="3.1.4.4"
                  value={fields["3.1.4.4"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              {fields['3.1'] === "24" && <Form.Group as={Col} lg="6" md="6" sm="12">
                <Form.Label>What are the Legal names of’the other enterprises amalgamated with the resulting or continuing enterprise?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter"
                  defaultValue=""
                  className="mb-3"
                  name="3.1.4.5"
                  value={fields["3.1.4.5"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              {fields['3.1'] === "25" && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>  When did this enterprise become temporarily inactive?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  className="mb-3"
                  name="3.1.5.1"
                  value={fields["3.1.5.1"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
              {fields['3.1'] === "25" && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>  When does this enterprise expect to resume operations?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  className="mb-3"
                  name="3.1.5.2"
                  value={fields["3.1.5.2"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
            </Row>
            <Row>
              {fields['3.1'] === "25" && <Form.Group as={Col} lg="12" md="12" sm="12">
                <Form.Label>Why is this enterprise temporarily inactive? </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  className='mb-3'
                  name="3.1.5.3"
                  value={fields["3.1.5.3"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}

              {fields['3.1'] === "29" && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>  When did this enterprise stop operations?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  className="mb-3"
                  name="3.1.6.1"
                  value={fields["3.1.6.1"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}

              {fields['3.1'] === "29" && <Form.Group as={Col} lg="12" md="12" sm="12">
                <Form.Label>  Why did this enterprise stop operations?</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Reason"
                  className="mb-3"
                  name="3.1.6.2"
                  value={fields["3.1.6.2"]}
                  onChange={_handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>}
            </Row>
          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title><span className='Count'>4</span> <h5>Provide the place of Business Operation of the Enterprise</h5></Card.Title>
            <Row>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Select State </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>West Bengal</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title><span className='Count'>5</span> <h5>Provide the current Principal / Main activity of the enterprise</h5></Card.Title>
            <Row>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Select from dropdown of principal activity.  </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Agriculture, forestry. and fishing </option>
                  <option>Mining and quarrying </option>
                  <option>Manufacturing  </option>
                  <option>Electricity, gas, steam, air conditioning supply </option>
                  <option>Water supply, sewerage, waste management and rediation activities </option>
                  <option>Construction  </option>
                  <option>Wholesale and retail trade and repair of motor vchicles and motorcycles </option>
                  <option>Transportation and storage </option>
                  <option>Accomodation and food service activities </option>
                  <option>Information and communication</option>
                  <option>Real estate activities</option>
                  <option>Professional, Scientific and technical activities  </option>
                  <option>Electricity, gas, steam, air conditioning supply </option>
                  <option>Administrative and support service activities, public administration and defense, compulsory social security </option>
                  <option>Education   </option>
                  <option>Human health, and social work aclivities </option>
                  <option>Arts, entertainment and recreation. otlier service activities n.e.c </option>
                  <option>Others</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Selection of Detail List</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title><span className='Count'>6</span> <h5>Percentage of total turnover contributed by the principal / Main activity of the enterprise</h5></Card.Title>
            <Row>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Percentage Of total Turnover.</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter Percentage Of total Turnover"
                  value={100}
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title><span className='Count'>7</span> <h5>Whether any enterprise is amalgamated or merged or acquired by this enterprise during the current financial year i.e.  after 31.03.2024</h5></Card.Title>
            <Row>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mt-3">
                  <Form.Check
                    inline
                    label="Yes - 1"
                    name="group7"
                    type={type}
                    id={`inline-${type}-1`}
                    className="mb-3"
                  />
                  <Form.Check
                    inline
                    label="No - 2"
                    name="group7"
                    type={type}
                    id={`inline-${type}-2`}
                    className="mb-3"
                  />
                </div>
              ))}
            </Row>
            <Row>
              <Col lg={12} sm={12} md={12}>
                <Card.Title><h5>Yes, Details of the enterprises is amalgamated or merged or acquired</h5></Card.Title>
              </Col>
              <Col lg={4} sm={12} md={4}>
                <Form.Group>
                  <Form.Label>Number of the enterprises is amalgamated or merged or acquired.</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Enter Number of the enterprises is amalgamated or merged or acquired"
                    value={100}
                    className="mb-3"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={4} sm={12} md={4}>
                <Form.Group>
                  <Form.Label>Name of the enterprises.</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Name of the enterprises"
                    value="NSSO, TUTECK"
                    className="mb-3"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={4} sm={12} md={4}>
                <Form.Group>
                  <Form.Label>CIN of the enterprises.</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter CIN of the enterprises"
                    className="mb-3"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <div className='footerBtnGroup d-flex justify-content-end'>
          <div>
            <Button variant="primary" className='ms-2' onClick={() => console.log(fields)}>Save & Continue <i class="bi bi-arrow-right-short"></i></Button></div>
        </div>
      </Form>
    </>
  );
}
