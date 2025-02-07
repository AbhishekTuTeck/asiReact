import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from 'react';
import { save_fields } from "./config";
import { function_return_validation, function_validate } from "../../functions/common-functions";
import Select from 'react-select';
import _ from 'lodash';
const options = [
  { value: 'West Bengal', label: 'West Bengal' },
]
export default function InvestmentActivityStrategy() {

  const [fields, setFields] = useState({});
  const [state, setState] = useState({
    is_validated: false
  });

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
    let temp_fields = { ...fields };
    temp_fields[target.name] = target.value;
    if (target.name === '13') {
      temp_fields['13.1'] = "";
    }
    if (target.name === '14') {
      temp_fields['14.1'] = "";
    }
    setFields({ ...temp_fields });
  }

  const _handleSubmit = event => {
    event.preventDefault();
    const schema = [];
    for (let key in fields) {
      let schema_obj = {
        field_type: 'default',
        field_name: key,
      }
      if (key === "13.1") {
        if (fields?.["13"] === '9') {
          schema.push(schema_obj)
        } else {
          let index = _.findIndex(schema, k => k.field_name === key);
          if (index !== -1) {
            schema.slice(index, 1);
          }
        }
      } else if (key === "14.1") {
        if (fields?.["14"] === '9') {
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
    setState({ ...state, is_validated: true });
  }


  return (
    <>
      <Form className="siteForm">
        <div className="d-flex mb-2">
          <h3 className="page-title">Investment Activity Strategy</h3>
          <Button variant="light" onClick={(event) => _handleSubmit(event)}>
            Save & Continue <i class="bi bi-arrow-right-short"></i>
          </Button>
        </div>
        <Card className="questionCard mb-3">
          <Card.Body>
            <Card.Text>
              <Row>
                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Preferred Investment Strategy in the current FY (e.g.,
                    2024-25){" "}
                  </Form.Label>
                  <Form.Select aria-label="Default select example" name="13" value={fields?.["13"]} onChange={_handleChange} isInvalid={!!function_return_validation({ type: "select_field", value: fields?.["13"], title: " Preferred Investment Strategy in the current FY (e.g., 2024-25)" }, state.is_validated)?.status ? false : true}>
                    <option>Open this select menu</option>
                    <option value="1">Core</option>
                    <option value="2">Value-added</option>
                    <option value="3">Opportunistic</option>
                    <option value="4">
                      Distressed assets and non-performing loans
                    </option>
                    <option value="5">Debt strategies</option>
                    <option value="9">Others</option>
                  </Form.Select>
                  <Form.Control.Feedback type={!!function_return_validation({ type: "select_field", value: fields?.["13"], title: " Preferred Investment Strategy in the current FY (e.g., 2024-25)" }, state.is_validated)?.status ? "valid" : "invalid"}>
                    {function_return_validation({ type: "select_field", value: fields?.["13"], title: " Preferred Investment Strategy in the current FY (e.g., 2024-25)" }, state.is_validated)?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {fields?.["13"] === "9" && <Form.Group as={Col} sm="6" >
                  <Form.Label>Please specify</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Please specify"
                      aria-label="Phone No."
                      aria-describedby="basic-addon1"
                      type="text"
                      name="13.1"
                      value={fields?.["13.1"]}
                      onChange={_handleChange}
                      isInvalid={!!function_return_validation({ type: "default", value: fields?.["13.1"], title: "More Details" }, state.is_validated)?.status ? false : true}
                    />
                    <Form.Control.Feedback
                      type={!!function_return_validation({ type: "default", value: fields?.["13.1"], title: "More Details" }, state.is_validated)?.status ? "valid" : "invalid"}
                    >
                      {function_return_validation({ type: "default", value: fields?.["13.1"], title: "More Details" }, state.is_validated)?.message}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>}

                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Objective of investment in the current FY (e.g., 2024-25){" "}
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    isInvalid={!!function_return_validation({ type: "select_field", value: fields?.["14"], title: "Objective of investment in the current FY (e.g., 2024-25)" }, state.is_validated)?.status ? false : true}
                    onChange={_handleChange}
                    name="14"
                    value={fields?.["14"]}
                  >
                    <option>Open this select menu</option>
                    <option value="1">Income Generation</option>
                    <option value="2">Diversification</option>
                    <option value="3">Upgradation</option>
                    <option value="9">Others</option>
                  </Form.Select>
                  <Form.Control.Feedback
                    type={!!function_return_validation({ type: "select_field", value: fields?.["14"], title: "Objective of investment in the current FY (e.g., 2024-25)" }, state.is_validated)?.status ? "valid" : "invalid"}
                  >
                    {function_return_validation({ type: "select_field", value: fields?.["14"], title: "Objective of investment in the current FY (e.g., 2024-25)" }, state.is_validated)?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {fields?.["14"] === "9" && <Form.Group as={Col} sm="6" >
                  <Form.Label>Please specify</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Please specify"
                      aria-label="Phone No."
                      aria-describedby="basic-addon1"
                      type="text"
                      name="14.1"
                      value={fields?.["14.1"]}
                      onChange={_handleChange}
                      isInvalid={!!function_return_validation({ type: "default", value: fields?.["14.1"], title: "More Details" }, state.is_validated)?.status ? false : true}
                    />
                    <Form.Control.Feedback
                      type={!!function_return_validation({ type: "default", value: fields?.["14.1"], title: "More Details" }, state.is_validated)?.status ? "valid" : "invalid"}
                    >
                      {function_return_validation({ type: "default", value: fields?.["14.1"], title: "More Details" }, state.is_validated)?.message}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>}

                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Most preferred States for investment in the country in the
                    current FY (e.g., 2024-25)?{" "}
                  </Form.Label>
                  <Select
                    options={options}
                    isMulti
                    name="15"
                    onChange={(value) => setFields({ ...fields, ["15"]: value })}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="footerBtnGroup d-flex justify-content-end">
          <div>
            <Button variant="light" onClick={(event) => _handleSubmit(event)}>
              Save & Continue <i class="bi bi-arrow-right-short"></i>
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
