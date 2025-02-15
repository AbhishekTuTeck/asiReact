import Breadcrumb from "../../components/breadcrumb/Breadcrumb"; // Adjust the path as needed
import { Button, Row, Col, Card, Carousel, Form, InputGroup, Table, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";

export default function CheckList() {
  return (
    <>
      <Breadcrumb title="Check List" />
      <div className="d-flex align-items-center my-2">
        <Link href='#' className='backLink d-flex align-items-center'><FeatherIcon icon="chevron-left" /><span className='backLinktext'>Back to List</span></Link>
        <div className="controlBtn ms-auto d-flex">
          <Button variant="btn btn-sm btn-danger" className='d-flex align-items-center me-2'>Close<FeatherIcon icon="x" /></Button>
          <Button variant="btn btn-sm btn-primary" className="d-flex align-items-center me-2"><FeatherIcon icon="chevron-left" />Back</Button>
          <Button variant="btn btn-sm btn-outline-primary" className='custom-outline-primary d-flex align-items-center me-2'><FeatherIcon icon="chevrons-left" />First</Button>
          <Button variant="success btn-sm">Final Submit<i class="bi bi-check-circle-fill ms-2"></i></Button>
        </div>
      </div>
      <Card className='rounded-4'>
        <Card.Header>
          <Card.Title className="d-flex align-items-center mb-0">ASI Schedule 2020-21 - <span className="text-danger d-flex align-items-center ms-1">CONFIDENTIAL <FeatherIcon icon="lock" className="ms-1" /></span></Card.Title>
        </Card.Header>
        <Card.Header className="py-2">
          <Row className="align-items-center">
            <Col md={6}>
              <h5 className="textPrimary fw-bold fs-6 mb-0">Check List</h5>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-end">
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
        </Card.Header>
        <Card.Body className="p-0">
        <Table responsive className='text-center'>
              <thead>
                <tr>
                  <th>Srl No.</th>
                  <th>Check Points</th>
                  <th >Observation</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>1</td>
                  <td>Whether codes and identification particulars have been correctly furnished in Block A?</td>
                  <td>
                    <Form.Check 
                    label="Observation"
                     />
                    </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Whether information for all the items in Block B have been correctly furnished?</td>
                  <td>
                    <Form.Check 
                    label="Observation"
                     />
                    </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>If the working capital in item 16 of Block D is negative whether reasons  furnished in he footnote of Block D of the Return and also in Block N  along with code.</td>
                  <td>
                    <Form.Check 
                    label="Observation"
                     />
                    </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Whether the return has been duly signed by owner with stamp?</td>
                  <td>
                    <Form.Check 
                    label="Observation"
                     />
                    </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>If wide variation is noticed between Opening & Closing value of  Working Capital, whether reasons furnished in the footnote of Block D  and also in Block N along with code</td>
                  <td>
                    <Form.Check 
                    label="Observation"
                     />
                    </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Whether special check has been made in case of negative GVA?</td>
                  <td>
                    <Form.Check 
                    label="Observation"
                     />
                    </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Whether basic entries have been throughly rechecked where output/input ratio is less than 0.5?</td>
                  <td>
                    <Form.Check 
                    label="Observation"
                     />
                    </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Whether ratio of Distributive expenses to gross sales is reasonable? If no,  whether the relevant entries have been rechecked particularly where this ratio exceeds 20%</td>
                  <td>
                    <Form.Check 
                    label="Observation"
                     />
                    </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>If the total Bonus is more than 20% of total wages/salaries whether suitable remarks given in the Return?</td>
                  <td>
                    <Form.Check 
                    label="Observation"
                     />
                    </td>
                </tr>
              </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card className='rounded-4'>
        <Card.Header>
          <Card.Title className="mb-0 fs-6 text-dark fw-bold">Remarks</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form.Group>
            <Form.Control placeholder='Enter Remarks...' as="textarea" className="text-muted" />
          </Form.Group>
        </Card.Body>
      </Card>
      <Row>
        <Col md={5}>
          <div class="mb-4">
            <Button variant="btn  btn-sm btn-primary me-2"><span className='me-2'>Save as Draft</span><FeatherIcon icon="save" /></Button>
            <Button variant="outline-primary  btn-sm me-2"><span className='me-2'>Preview</span><FeatherIcon icon="eye" /></Button>
            <Button variant="success btn-sm ">Validate<i class="bi bi-check-circle-fill ms-2"></i></Button>
          </div>
        </Col>
        <Col md={7}>
          <div className='controlBtn d-flex justify-content-end mb-4'>
            <Button variant="btn btn-sm btn-outline-primary d-flex align-items-center custom-outline-primary me-2">Working Sheet</Button>
            <Button variant="btn  btn-sm btn-danger" className='d-flex align-items-center me-2'>Close<FeatherIcon icon="x" /></Button>
            <Button variant="btn  btn-sm btn-primary" className="d-flex align-items-center me-2"><FeatherIcon icon="chevron-left" />Back</Button>
            <Button variant="btn  btn-sm btn-outline-primary" className='custom-outline-primary d-flex align-items-center me-2'><FeatherIcon icon="chevrons-left" />First</Button>
            <Button variant="success btn-sm ">Final Submit<i class="bi bi-check-circle-fill ms-2"></i></Button>
          </div>
        </Col>
      </Row>
    </>

  );
}
