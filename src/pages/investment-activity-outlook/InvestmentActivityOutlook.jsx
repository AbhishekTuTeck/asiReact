import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Feedback from "react-bootstrap/Feedback";
import { useEffect, useState } from "react";
import { save_fields } from "./config";
import { function_return_validation, function_validate } from '../../functions/common-functions';
import _ from 'lodash';

export default function InvestmentActivityOutlook() {

  const [fields, setFields] = useState({});
  const [state, setState] = useState({
    is_validated: false
  })

  useEffect(() => {
    if (!!save_fields && save_fields.length > 0) {
      let field_obj = {};
      _.forEach(save_fields, k => {
        field_obj[k.field_id] = k.field_value;
      });
      setFields({ ...field_obj });
    }
  }, [save_fields]);

  const _handleChange = ({ target }) => {
    let temp_fields = { ...fields }
    temp_fields[target.name] = target.value;
    if (target.name === "11") {
      temp_fields["11.1"] = "";
    }
    setFields({ ...temp_fields });
  }

  const _handleSubmit = (event) => {
    event.preventDefault();
    const schema = [];
    for (let key in fields) {
      let schema_obj = {
        field_type: 'default',
        field_name: key,
      }
      if (key === "11.1") {
        if (fields?.["11"] === '1' || fields?.["11"] === "3") {
          schema.push(schema_obj)
        } else {
          let index = _.findIndex(schema, k => k.field_name === key);
          if (index !== -1) {
            schema.slice(index, 1);
          }
        }
      } else {
        schema.push(schema_obj)
      }
    }
    const submit_status = function_validate(schema, fields);
    setState({...state, is_validated: true})
  }


  return (
    <>
      <Form className="siteForm">
        <div className="d-flex mb-2">
          <h3 className="page-title">Investment Activity Outlook</h3>
          <Button variant="light" onClick={(event) => _handleSubmit(event)}>
            Save & Continue <i class="bi bi-arrow-right-short"></i>
          </Button>
        </div>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title><span className='Count'>11</span> <h5>Assets Purchasing Activity Expectations In the next FY (e.g., 2025-26)</h5></Card.Title>
            <Row>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Please Select</Form.Label>
                <Form.Select aria-label="Default select example" name="11" value={fields?.["11"]} onChange={_handleChange} isInvalid={!!function_return_validation({ type: "select_field", value: fields?.["11"], }, state.is_validated)?.status ? false : true}>
                  <option>Select</option>
                  <option value="1">Buy More</option>
                  <option value="2">About the same</option>
                  <option value="3">Buy Less</option>
                  <option value="4">No Intention To Buy</option>
                </Form.Select>
                <Feedback type={!!function_return_validation({ type: "select_field", value: fields?.["11"], }, state.is_validated)?.status ? "valid" : "invalid"}>
                  {function_return_validation({ type: "select_field", value: fields?.["11"], }, state.is_validated)?.message}
                </Feedback>
              </Form.Group>

              {(fields?.["11"] === '1' || fields?.["11"] === "3") && <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label><span className='Count'>11.1</span> Please Select</Form.Label>
                <Form.Select aria-label="Default select example" name="11.1" value={fields?.["11.1"]} onChange={_handleChange} isInvalid={!!function_return_validation({ type: "select_field", value: fields?.["11.1"], }, state.is_validated)?.status ? false : true}>
                  <option>Select</option>
                  {
                    fields?.["11"] === "1" && <>
                      <option value="11">More Than 10% Higher</option>
                      <option value="12">Upto 10% Higher</option>
                    </>
                  }
                  {
                    fields?.["11"] === "3" && <>
                      <option value="31">More Than 10% Lower</option>
                      <option value="32">Upto 10% Lower</option>
                    </>
                  }
                </Form.Select>
                <Form.Control.Feedback type={!!function_return_validation({ type: "select_field", value: fields?.["11.1"], }, state.is_validated)?.status ? "valid" : "invalid"}>
                  {function_return_validation({ type: "select_field", value: fields?.["11.1"], }, state.is_validated)?.message}
                </Form.Control.Feedback>
              </Form.Group>}
            </Row>
          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title><span className='Count'>12</span> <h5>Asstes Selling Activity Exceptions in the next FY (e.g., 2025-26)</h5></Card.Title>
            <Row>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Please Select</Form.Label>
                <Form.Select aria-label="Default select example" name="12" value={fields?.["12"]} onChange={_handleChange} isInvalid={!!function_return_validation({ type: "select_field", value: fields?.["12"], }, state.is_validated)?.status ? false : true}>
                  <option>Select</option>
                  <option value="1">Buy More</option>
                  <option value="2">About the same</option>
                  <option value="3">Buy Less</option>
                  <option value="4">No Intention To Buy</option>
                </Form.Select>
                <Form.Control.Feedback type={!!function_return_validation({ type: "select_field", value: fields?.["12"], }, state.is_validated)?.status ? "valid" : "invalid"}>
                  {function_return_validation({ type: "select_field", value: fields?.["12"], }, state.is_validated)?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Card.Body>
        </Card>
        <div className="footerBtnGroup d-flex justify-content-end">
          <div>
            <Button variant="primary" className="ms-2" onClick={(event) => _handleSubmit(event)}>
              Save & Continue <i class="bi bi-arrow-right-short"></i>
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
