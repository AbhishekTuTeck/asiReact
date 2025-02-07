import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function ListOfNic() {
  return (
    <>
      <Form className="siteForm">
        <div className="d-flex mb-2">
          <h3 className="page-title">List Of NIC - 2008 for step 2 Selection</h3>
          <Button variant="light">
            Save & Continue <i class="bi bi-arrow-right-short"></i>
          </Button>
        </div>
        <Card className="questionCard mb-3">
          <Card.Body>
            <Card.Text>
              <Row>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Agriculture, Forestry, And fishing
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Crop And Animal Production, hunting and related service activities</option>
                    <option>Forestry And Logging</option>
                    <option>Fishing And Aquaculture</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Mining and Quarrying
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Mining of coal and lignite</option>
                    <option>Extraction of crude pertroleum and natural gas</option>
                    <option>mining of metal ores</option>
                    <option>Other Mining and Quarrying</option>
                    <option>Mining support service activities</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Manufacturing
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Manufacture of food products, beverages, and tobacco products</option>
                    <option>manufacture of textiles, waering apparel and leather and related products</option>
                    <option>Manufacture wood and products of wood and cork, except furniture, manufacture of article of straw and plating materials, manufacture of furniture</option>
                    <option>Manufacture of paper and paper products</option>
                    <option>Manufacture of chemicals and chemical products</option>
                    <option>Manufacture of coke and refined petroleum products</option>
                    <option>Printing and reproduction of recorded media</option>
                    <option>Manufacture of phermaceuticals and medical chemicals, and botanical products</option>
                    <option>Manufacture of rubber and plastic products, other non metallic mineral products</option>
                    <option>Manufacture of basic metals, fabricated metal products, except machinery and equipments</option>
                    <option>Manufacture of computer, electromic, optical products, electrical equipment, machinery, and equipment n.e.c</option>
                    <option>Manufacture of Motor vehicles, trailers, semi-trailers, other transport equipment.</option>
                    <option>Other manufacturing, repair, and installation of machinery, and equipment</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Electricity, gas, steam and air conditioning supply
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Electricity, gas, steam and air conditioning supply</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Water Supply, Sewerage, waste management and remediation activities
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Water Collection , Treatment and Supply</option>
                    <option>Sewerage , Waste Collection, Treatment, and disposal activities; Material Recovery</option>
                    <option>Remediation activities and other waste management services</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Construction
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Construction Of Buildings</option>
                    <option>Civil Engineering</option>
                    <option>Specialized Construction activities</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Wholesale and retail trade and repair of motor vehicles and motorcycles
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Wholesale and retail trade, and repair of motor vehicles and motorcycles</option>
                    <option>Wholesale trade, except of motor vehicles and motorcycles</option>
                    <option>Retail trade, except of motor vehicles and motorcycles</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Trasportation and Storage
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>land transport and trasport via pipelines</option>
                    <option>Water Transport</option>
                    <option>Air transport</option>
                    <option>Warehouse and support activities for Transportation</option>
                    <option>Postal and courier activities</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Accomodation and food service activities
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Accomodation</option>
                    <option>Food and beverage service activities</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Information and communication
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Publishing Activities</option>
                    <option>Motion Picture, video, television, programme production, sound recording, and music publishing activities,</option>
                    <option>Broadcasting and programming activities</option>
                    <option>Telecommunications</option>
                    <option>Computer Progamming, Consultancy, and related activities</option>
                    <option>Information service activities</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Financial and Insurrance Activities
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Financial service Activities, except Insurance, and pension funding</option>
                    <option>Insurance, reInsurance, and pension funding, except compulsory social security</option>
                    <option>Other Financial activities</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Real Estate Activities
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Real Estate Activities</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Professional, scientific, and technical activities
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Legal and accounting Activities</option>
                    <option>Activities of Head Offices; management Consultancy activities,</option>
                    <option>Architecture and Engineering activities, technical testing and analysis</option>
                    <option>scientific reserach and development</option>
                    <option>Advertising and market research</option>
                    <option>Other professional, scientific and technical activities</option>
                    <option>Veterinary activities</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Administrative and support service activities, public adminstration and defense, compulsory social security
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Rental and leasing activities</option>
                    <option>Employment activities,</option>
                    <option>Travel agency, tour operator, and other reservation service activities</option>
                    <option>Security and investigation activities</option>
                    <option>services to buildings and landscape activities</option>
                    <option>Office adminstrative, office support, and other business support activities </option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Education
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Education</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Human Health, and social work activities
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Human Health activities</option>
                    <option>Residential care activities,</option>
                    <option>Social work activities, without accomodation</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="6" md="4" lg="3">
                  <Form.Label>
                    Arts, Entertainment, and recreation, other srvice activities
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Creative arts and entertainment activities</option>
                    <option>Libraries, archives, museums, and other cultural activities,</option>
                    <option>Gambling and betting activities</option>
                    <option>Sports activities and amusement, and recreation activities</option>
                    <option>Activities of membership organizations</option>
                    <option>Repair of computers and personal and household goods</option>
                    <option>Other personal service activites</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="footerBtnGroup d-flex justify-content-end">
          <div>
            <Button variant="primary" className="ms-2">
              Save & Continue <i class="bi bi-arrow-right-short"></i>
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
