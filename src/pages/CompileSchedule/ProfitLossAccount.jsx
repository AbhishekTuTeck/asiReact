
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"; // Adjust the path as needed
import FeatherIcon from "feather-icons-react";
import {Button,Row,Col,Card,Carousel,Form,InputGroup,Table,Alert} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function ProfitLossAccount() {
  return (
    <>
    <Breadcrumb title="Profit and Loss Account" />
      <div className="d-flex align-items-center my-2">
        <Link href='#' className='backLink d-flex align-items-center'><FeatherIcon icon="chevron-left" /><span className='backLinktext'>Back to List</span></Link>
        <div className="controlBtn ms-auto d-flex">
          <Button variant="btn btn-danger" className='d-flex align-items-center me-2'>Close<FeatherIcon icon="x" /></Button>
          <Button variant="btn btn-primary" className="d-flex align-items-center me-2"><FeatherIcon icon="chevron-left" />Back</Button>
          <Button variant="btn btn-primary" className="d-flex align-items-center me-2">Next<FeatherIcon icon="chevron-right" /></Button>
          <Button variant="btn btn-outline-primary" className='custom-outline-primary d-flex align-items-center me-2'><FeatherIcon icon="chevrons-left" />First</Button>
          <Button variant="btn btn-outline-primary" className='custom-outline-primary d-flex align-items-center'>Last<FeatherIcon icon="chevrons-right" /></Button>
        </div>
      </div>
      <Card className='rounded-4'>
          <Card.Header>
            <Card.Title className="d-flex align-items-center mb-0">ASI Schedule 2020-21 - <span className="text-danger d-flex align-items-center ms-1">CONFIDENTIAL <FeatherIcon icon="lock" className="ms-1" /></span></Card.Title>
          </Card.Header>
          <Card.Header className="py-2">
            <Row className="align-items-center">
              <Col md={6}>
                <h5 className="textPrimary fw-bold fs-6 mb-0">Profit and Loss Account - <span className="text-dark"> Data for Block E, F, G,H</span></h5>
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
          <Card.Body>
            <Row>
              <Col md={3} xs={6}>
                <Form.Label className="text-muted">DSL No.</Form.Label>
                <p className="mb-0">130832</p>
              </Col>
              <Col md={3} xs={6}>
                <Form.Label className="text-muted">PSL No.</Form.Label>
                <p className="mb-0">00776</p>
              </Col>
              <Col md={6} xs={6}>
                <Form.Label className="text-muted">Unit Name</Form.Label>
                <p className='mb-0'>SAHKAR MAHARSHI SHANKARRAO MOHITE PATIL SSK LTD.</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className=' rounded-4'>
          <Card.Header className='d-flex align-items-center'>
            <Card.Title className='mb-0 fs-6 text-dark fw-bold'>Account List -  Data for Block E, F, G,H </Card.Title>
            <div className="card-tool ms-auto">
              <Button variant='btn btn-sm btn-primary d-flex align-items-center'><FeatherIcon icon="plus" />Add</Button>
            </div>
          </Card.Header>
          <Card.Body className='p-0'>
            <Table responsive className='text-center'>
              <thead>
                <tr>
                  <th>Srl No.</th>
                  <th colSpan={2}>Item</th>
                  <th>Other Item</th>
                  <th>Closing</th>
                  <th>Blocks & Items</th>
                  <th>Action</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>(1)</th>
                  <th colSpan={2}>(2)</th>
                  <th>(3)</th>
                  <th>(4)</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td colSpan={2}>
                    <Form.Control
                      size='sm'
                      placeholder='Consumable Goods'
                    >
                    </Form.Control>
                  </td>
                  <td></td>
                  <td>
                    <Form.Control
                      size='sm'
                      placeholder='900'
                    >
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control
                      size='sm'
                      placeholder='Block-H, Item-21'
                      disabled
                    >
                    </Form.Control>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td colSpan={2}>
                    <Form.Control
                      size='sm'
                      placeholder='Keyman Insurance'
                    >
                    </Form.Control>
                  </td>
                  <td></td>
                  <td>
                    <Form.Control
                      size='sm'
                      placeholder='300'
                    >
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control
                      size='sm'
                      placeholder='Block-F, Item-3'
                      disabled
                    >
                    </Form.Control>
                  </td>
                  <td><Link to="" className='text-danger'><FeatherIcon icon="trash-2" /></Link></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>
                    <Form.Control
                      size='sm'
                      placeholder=''
                    >
                    </Form.Control>
                  </td>
                  <td></td>
                  <td>
                    <Form.Control
                      size='sm'
                      placeholder=''
                    >
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control
                      size='sm'
                      placeholder=''
                    >
                    </Form.Control>
                  </td>
                  <td><Link to="" className='text-danger'><FeatherIcon icon="trash-2" /></Link></td>
                </tr>
              </tbody>
            </Table>
            </Card.Body>
            </Card>
        <Row>
          <Col md={6}>
            <Card className='rounded-4'>
              <Card.Header>
                <Card.Title className="mb-0 fs-6 text-dark fw-bold">Remarks</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Control placeholder='Enter Remarks...' as="textarea" className="customRemarksfc text-muted" />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Alert variant="danger" className='custom-alert rounded-4'>
              <div className='d-flex align-items-start'>
                <div className='icon me-2'>
                  <FeatherIcon icon="alert-triangle" />
                </div>
                <div className='content mt-1'>
                  <Alert.Heading className='fs-6 fw-bold'>Note</Alert.Heading>
                  <p>Col-4 is mandatory.</p>
                  <p className='mb-0'>For OTHERS Item,Col-3 and Blocks are also Mandatory.</p>
                </div>
              </div>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="mb-4">
              <Button variant="btn btn-primary me-2"><span className='me-2'>Save as Draft</span><FeatherIcon icon="save" /></Button>
              <Button variant="outline-primary me-2"><span className='me-2'>Preview</span><FeatherIcon icon="eye" /></Button>
              <Button variant="success">Validate<i class="bi bi-check-circle-fill ms-2"></i></Button>
            </div>
          </Col>
          <Col>
            <div className='controlBtn d-flex justify-content-end mb-4'>
              <Button variant="btn btn-danger" className='me-2 d-flex align-items-center'>Close<FeatherIcon icon="x" /></Button>
              <Button variant="btn btn-primary" className='me-2 d-flex align-items-center'>Next<FeatherIcon icon="chevron-right" /></Button>
              <Button variant="btn btn-outline-primary custom-outline-primary" className="d-flex align-items-center">Last<FeatherIcon icon="chevrons-right" /></Button>
            </div> 
          </Col>
        </Row>
  </>

  );
}
