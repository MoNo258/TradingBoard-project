/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

// core components
import {
    chartExample1,
    // chartExample2,
    // chartExample3,
    // chartExample4
} from "../variables/charts.js";
import Rates from "../components/Rates";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigChartData: "data1"
        };
    }
    setBgChartData = name => {
        this.setState({
            bigChartData: name
        });
    };
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col xs="12">
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Total Shipments</h5>
                                            <CardTitle tag="h2">Performance</CardTitle>
                                        </Col>
                          {/*              <Col sm="6">*/}
                          {/*                  <ButtonGroup*/}
                          {/*                      className="btn-group-toggle float-right"*/}
                          {/*                      data-toggle="buttons"*/}
                          {/*                  >*/}
                          {/*                      <Button*/}
                          {/*                          tag="label"*/}
                          {/*                          className={classNames("btn-simple", {*/}
                          {/*                              active: this.state.bigChartData === "data1"*/}
                          {/*                          })}*/}
                          {/*                          color="info"*/}
                          {/*                          id="0"*/}
                          {/*                          size="sm"*/}
                          {/*                          onClick={() => this.setBgChartData("data1")}*/}
                          {/*                      >*/}
                          {/*                          <input*/}
                          {/*                              defaultChecked*/}
                          {/*                              className="d-none"*/}
                          {/*                              name="options"*/}
                          {/*                              type="radio"*/}
                          {/*                          />*/}
                          {/*                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">*/}
                          {/*  Accounts*/}
                          {/*</span>*/}
                          {/*                          <span className="d-block d-sm-none">*/}
                          {/*  <i className="tim-icons icon-single-02" />*/}
                          {/*</span>*/}
                          {/*                      </Button>*/}
                          {/*                      <Button*/}
                          {/*                          color="info"*/}
                          {/*                          id="1"*/}
                          {/*                          size="sm"*/}
                          {/*                          tag="label"*/}
                          {/*                          className={classNames("btn-simple", {*/}
                          {/*                              active: this.state.bigChartData === "data2"*/}
                          {/*                          })}*/}
                          {/*                          onClick={() => this.setBgChartData("data2")}*/}
                          {/*                      >*/}
                          {/*                          <input*/}
                          {/*                              className="d-none"*/}
                          {/*                              name="options"*/}
                          {/*                              type="radio"*/}
                          {/*                          />*/}
                          {/*                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">*/}
                          {/*  Purchases*/}
                          {/*</span>*/}
                          {/*                          <span className="d-block d-sm-none">*/}
                          {/*  <i className="tim-icons icon-gift-2" />*/}
                          {/*</span>*/}
                          {/*                      </Button>*/}
                          {/*                      <Button*/}
                          {/*                          color="info"*/}
                          {/*                          id="2"*/}
                          {/*                          size="sm"*/}
                          {/*                          tag="label"*/}
                          {/*                          className={classNames("btn-simple", {*/}
                          {/*                              active: this.state.bigChartData === "data3"*/}
                          {/*                          })}*/}
                          {/*                          onClick={() => this.setBgChartData("data3")}*/}
                          {/*                      >*/}
                          {/*                          <input*/}
                          {/*                              className="d-none"*/}
                          {/*                              name="options"*/}
                          {/*                              type="radio"*/}
                          {/*                          />*/}
                          {/*                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">*/}
                          {/*  Sessions*/}
                          {/*</span>*/}
                          {/*                          <span className="d-block d-sm-none">*/}
                          {/*  <i className="tim-icons icon-tap-02" />*/}
                          {/*</span>*/}
                          {/*                      </Button>*/}
                          {/*                  </ButtonGroup>*/}
                          {/*              </Col>*/}
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line
                                            data={chartExample1[this.state.bigChartData]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Rates />
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">Spots</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col md='6'>
                                            <CardHeader>
                                                <CardTitle tag='h6'>Spots Forex</CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Table className='tablesorter' responsive>
                                                    <thead className='text-primary'>
                                                    <tr>
                                                        <th>Crncy</th>
                                                        <th>Bid</th>
                                                        <th>Ask</th>
                                                        <th>Time</th>
                                                        <th>Close</th>
                                                        <th>Change</th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>EUR</td>
                                                        <td>0.1234</td>
                                                        <td>0.1245</td>
                                                        <td>9:35</td>
                                                        <td>0.1375</td>
                                                        <td>-9.85%</td>
                                                        <td><i className="value-decrease fa fa-arrow-down" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>CHF</td>
                                                        <td>0.1434</td>
                                                        <td>0.1545</td>
                                                        <td>9:35</td>
                                                        <td>0.1375</td>
                                                        <td>+11.85%</td>
                                                        <td><i className="value-growth fa fa-arrow-up" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>USD</td>
                                                        <td>1.0000</td>
                                                        <td>1.0000</td>
                                                        <td>9:35</td>
                                                        <td>1.0000</td>
                                                        <td>+0.00%</td>
                                                        <td><i className="value-stable fas fa-arrows-alt-h"></i></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </CardBody>
                                        </Col>
                                        <Col md='6'>
                                            <CardHeader>
                                                <CardTitle tag='h6'>Spots Forex</CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Table className='tablesorter' responsive>
                                                    <thead className='text-primary'>
                                                    <tr>
                                                        <th>Crncy</th>
                                                        <th>Bid</th>
                                                        <th>Ask</th>
                                                        <th>Time</th>
                                                        <th>Close</th>
                                                        <th>Change</th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>ZAR</td>
                                                        <td>0.1234</td>
                                                        <td>0.1245</td>
                                                        <td>9:35</td>
                                                        <td>0.1375</td>
                                                        <td>-9.85%</td>
                                                        <td><i className="value-decrease fa fa-arrow-down" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>MXN</td>
                                                        <td>0.1434</td>
                                                        <td>0.1545</td>
                                                        <td>9:35</td>
                                                        <td>0.1375</td>
                                                        <td>+11.85%</td>
                                                        <td><i className="value-growth fa fa-arrow-up" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>IND</td>
                                                        <td>1.0000</td>
                                                        <td>1.0000</td>
                                                        <td>9:35</td>
                                                        <td>1.0000</td>
                                                        <td>+0.00%</td>
                                                        <td><i className="value-stable fas fa-arrows-alt-h"></i></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">Rates</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col md='4'>
                                            <CardHeader>
                                                <CardTitle tag='h6'>Interest Rates EUR </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Table className='tablesorter' responsive>
                                                    <thead className='text-primary'>
                                                        <tr>
                                                            <th>Tenor</th>
                                                            <th>Bid</th>
                                                            <th></th>
                                                            <th>Ask</th>
                                                            <th>Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1M</td>
                                                            <td>0.1234</td>
                                                            <td>/</td>
                                                            <td>0.2345</td>
                                                            <td>11:23</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2M</td>
                                                            <td>0.1344</td>
                                                            <td>/</td>
                                                            <td>0.2245</td>
                                                            <td>11:24</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </CardBody>
                                        </Col>
                                        <Col md='4'>
                                            <CardHeader>
                                                <CardTitle tag='h6'>Interest Rates EUR </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Table className='tablesorter' responsive>
                                                    <thead className='text-primary'>
                                                    <tr>
                                                        <th>Tenor</th>
                                                        <th>Bid</th>
                                                        <th></th>
                                                        <th>Ask</th>
                                                        <th>Time</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>1M</td>
                                                        <td>0.1234</td>
                                                        <td>/</td>
                                                        <td>0.2345</td>
                                                        <td>11:23</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2M</td>
                                                        <td>0.1344</td>
                                                        <td>/</td>
                                                        <td>0.2245</td>
                                                        <td>11:24</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </CardBody>
                                        </Col>
                                        <Col md='4'>
                                            <CardHeader>
                                                <CardTitle tag='h6'>Interest Rates EUR </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Table className='tablesorter' responsive>
                                                    <thead className='text-primary'>
                                                    <tr>
                                                        <th>Tenor</th>
                                                        <th>Bid</th>
                                                        <th></th>
                                                        <th>Ask</th>
                                                        <th>Time</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>1M</td>
                                                        <td>0.1234</td>
                                                        <td>/</td>
                                                        <td>0.2345</td>
                                                        <td>11:23</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2M</td>
                                                        <td>0.1344</td>
                                                        <td>/</td>
                                                        <td>0.2245</td>
                                                        <td>11:24</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    {/*<Row>*/}
                    {/*    <Col lg="4">*/}
                    {/*        <Card className="card-chart">*/}
                    {/*            <CardHeader>*/}
                    {/*                <h5 className="card-category">Total Shipments</h5>*/}
                    {/*                <CardTitle tag="h3">*/}
                    {/*                    <i className="tim-icons icon-bell-55 text-info" />{" "}*/}
                    {/*                    763,215*/}
                    {/*                </CardTitle>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                <div className="chart-area">*/}
                    {/*                    <Line*/}
                    {/*                        data={chartExample1.data}*/}
                    {/*                        options={chartExample1.options}*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col lg="4">*/}
                    {/*        <Card className="card-chart">*/}
                    {/*            <CardHeader>*/}
                    {/*                <h5 className="card-category">Daily Sales</h5>*/}
                    {/*                <CardTitle tag="h3">*/}
                    {/*                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}*/}
                    {/*                    3,500€*/}
                    {/*                </CardTitle>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                <div className="chart-area">*/}
                    {/*                    <Bar*/}
                    {/*                        data={chartExample1.data}*/}
                    {/*                        options={chartExample1.options}*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col lg="4">*/}
                    {/*        <Card className="card-chart">*/}
                    {/*            <CardHeader>*/}
                    {/*                <h5 className="card-category">Completed Tasks</h5>*/}
                    {/*                <CardTitle tag="h3">*/}
                    {/*                    <i className="tim-icons icon-send text-success" /> 12,100K*/}
                    {/*                </CardTitle>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                <div className="chart-area">*/}
                    {/*                    <Line*/}
                    {/*                        data={chartExample1.data}*/}
                    {/*                        options={chartExample1.options}*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}

                    {/*<Row>*/}
                    {/*    <Col lg="6" md="12">*/}
                    {/*        <Card className="card-tasks">*/}
                    {/*            <CardHeader>*/}
                    {/*                <h6 className="title d-inline">Tasks(5)</h6>*/}
                    {/*                <p className="card-category d-inline"> today</p>*/}
                    {/*                <UncontrolledDropdown>*/}
                    {/*                    <DropdownToggle*/}
                    {/*                        caret*/}
                    {/*                        className="btn-icon"*/}
                    {/*                        color="link"*/}
                    {/*                        data-toggle="dropdown"*/}
                    {/*                        type="button"*/}
                    {/*                    >*/}
                    {/*                        <i className="tim-icons icon-settings-gear-63" />*/}
                    {/*                    </DropdownToggle>*/}
                    {/*                    <DropdownMenu aria-labelledby="dropdownMenuLink" right>*/}
                    {/*                        <DropdownItem*/}
                    {/*                            href="#pablo"*/}
                    {/*                            onClick={e => e.preventDefault()}*/}
                    {/*                        >*/}
                    {/*                            Action*/}
                    {/*                        </DropdownItem>*/}
                    {/*                        <DropdownItem*/}
                    {/*                            href="#pablo"*/}
                    {/*                            onClick={e => e.preventDefault()}*/}
                    {/*                        >*/}
                    {/*                            Another action*/}
                    {/*                        </DropdownItem>*/}
                    {/*                        <DropdownItem*/}
                    {/*                            href="#pablo"*/}
                    {/*                            onClick={e => e.preventDefault()}*/}
                    {/*                        >*/}
                    {/*                            Something else*/}
                    {/*                        </DropdownItem>*/}
                    {/*                    </DropdownMenu>*/}
                    {/*                </UncontrolledDropdown>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                <div className="table-full-width table-responsive">*/}
                    {/*                    <Table>*/}
                    {/*                        <tbody>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>*/}
                    {/*                                <FormGroup check>*/}
                    {/*                                    <Label check>*/}
                    {/*                                        <Input defaultValue="" type="checkbox" />*/}
                    {/*                                        <span className="form-check-sign">*/}
                    {/*              <span className="check" />*/}
                    {/*            </span>*/}
                    {/*                                    </Label>*/}
                    {/*                                </FormGroup>*/}
                    {/*                            </td>*/}
                    {/*                            <td>*/}
                    {/*                                <p className="title">Update the Documentation</p>*/}
                    {/*                                <p className="text-muted">*/}
                    {/*                                    Dwuamish Head, Seattle, WA 8:47 AM*/}
                    {/*                                </p>*/}
                    {/*                            </td>*/}
                    {/*                            <td className="td-actions text-right">*/}
                    {/*                                <Button*/}
                    {/*                                    color="link"*/}
                    {/*                                    id="tooltip636901683"*/}
                    {/*                                    title=""*/}
                    {/*                                    type="button"*/}
                    {/*                                >*/}
                    {/*                                    <i className="tim-icons icon-pencil" />*/}
                    {/*                                </Button>*/}
                    {/*                                <UncontrolledTooltip*/}
                    {/*                                    delay={0}*/}
                    {/*                                    target="tooltip636901683"*/}
                    {/*                                    placement="right"*/}
                    {/*                                >*/}
                    {/*                                    Edit Task*/}
                    {/*                                </UncontrolledTooltip>*/}
                    {/*                            </td>*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>*/}
                    {/*                                <FormGroup check>*/}
                    {/*                                    <Label check>*/}
                    {/*                                        <Input*/}
                    {/*                                            defaultChecked*/}
                    {/*                                            defaultValue=""*/}
                    {/*                                            type="checkbox"*/}
                    {/*                                        />*/}
                    {/*                                        <span className="form-check-sign">*/}
                    {/*              <span className="check" />*/}
                    {/*            </span>*/}
                    {/*                                    </Label>*/}
                    {/*                                </FormGroup>*/}
                    {/*                            </td>*/}
                    {/*                            <td>*/}
                    {/*                                <p className="title">GDPR Compliance</p>*/}
                    {/*                                <p className="text-muted">*/}
                    {/*                                    The GDPR is a regulation that requires businesses*/}
                    {/*                                    to protect the personal data and privacy of Europe*/}
                    {/*                                    citizens for transactions that occur within EU*/}
                    {/*                                    member states.*/}
                    {/*                                </p>*/}
                    {/*                            </td>*/}
                    {/*                            <td className="td-actions text-right">*/}
                    {/*                                <Button*/}
                    {/*                                    color="link"*/}
                    {/*                                    id="tooltip457194718"*/}
                    {/*                                    title=""*/}
                    {/*                                    type="button"*/}
                    {/*                                >*/}
                    {/*                                    <i className="tim-icons icon-pencil" />*/}
                    {/*                                </Button>*/}
                    {/*                                <UncontrolledTooltip*/}
                    {/*                                    delay={0}*/}
                    {/*                                    target="tooltip457194718"*/}
                    {/*                                    placement="right"*/}
                    {/*                                >*/}
                    {/*                                    Edit Task*/}
                    {/*                                </UncontrolledTooltip>*/}
                    {/*                            </td>*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>*/}
                    {/*                                <FormGroup check>*/}
                    {/*                                    <Label check>*/}
                    {/*                                        <Input defaultValue="" type="checkbox" />*/}
                    {/*                                        <span className="form-check-sign">*/}
                    {/*              <span className="check" />*/}
                    {/*            </span>*/}
                    {/*                                    </Label>*/}
                    {/*                                </FormGroup>*/}
                    {/*                            </td>*/}
                    {/*                            <td>*/}
                    {/*                                <p className="title">Solve the issues</p>*/}
                    {/*                                <p className="text-muted">*/}
                    {/*                                    Fifty percent of all respondents said they would*/}
                    {/*                                    be more likely to shop at a company*/}
                    {/*                                </p>*/}
                    {/*                            </td>*/}
                    {/*                            <td className="td-actions text-right">*/}
                    {/*                                <Button*/}
                    {/*                                    color="link"*/}
                    {/*                                    id="tooltip362404923"*/}
                    {/*                                    title=""*/}
                    {/*                                    type="button"*/}
                    {/*                                >*/}
                    {/*                                    <i className="tim-icons icon-pencil" />*/}
                    {/*                                </Button>*/}
                    {/*                                <UncontrolledTooltip*/}
                    {/*                                    delay={0}*/}
                    {/*                                    target="tooltip362404923"*/}
                    {/*                                    placement="right"*/}
                    {/*                                >*/}
                    {/*                                    Edit Task*/}
                    {/*                                </UncontrolledTooltip>*/}
                    {/*                            </td>*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>*/}
                    {/*                                <FormGroup check>*/}
                    {/*                                    <Label check>*/}
                    {/*                                        <Input defaultValue="" type="checkbox" />*/}
                    {/*                                        <span className="form-check-sign">*/}
                    {/*              <span className="check" />*/}
                    {/*            </span>*/}
                    {/*                                    </Label>*/}
                    {/*                                </FormGroup>*/}
                    {/*                            </td>*/}
                    {/*                            <td>*/}
                    {/*                                <p className="title">Release v2.0.0</p>*/}
                    {/*                                <p className="text-muted">*/}
                    {/*                                    Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM*/}
                    {/*                                </p>*/}
                    {/*                            </td>*/}
                    {/*                            <td className="td-actions text-right">*/}
                    {/*                                <Button*/}
                    {/*                                    color="link"*/}
                    {/*                                    id="tooltip818217463"*/}
                    {/*                                    title=""*/}
                    {/*                                    type="button"*/}
                    {/*                                >*/}
                    {/*                                    <i className="tim-icons icon-pencil" />*/}
                    {/*                                </Button>*/}
                    {/*                                <UncontrolledTooltip*/}
                    {/*                                    delay={0}*/}
                    {/*                                    target="tooltip818217463"*/}
                    {/*                                    placement="right"*/}
                    {/*                                >*/}
                    {/*                                    Edit Task*/}
                    {/*                                </UncontrolledTooltip>*/}
                    {/*                            </td>*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>*/}
                    {/*                                <FormGroup check>*/}
                    {/*                                    <Label check>*/}
                    {/*                                        <Input defaultValue="" type="checkbox" />*/}
                    {/*                                        <span className="form-check-sign">*/}
                    {/*              <span className="check" />*/}
                    {/*            </span>*/}
                    {/*                                    </Label>*/}
                    {/*                                </FormGroup>*/}
                    {/*                            </td>*/}
                    {/*                            <td>*/}
                    {/*                                <p className="title">Export the processed files</p>*/}
                    {/*                                <p className="text-muted">*/}
                    {/*                                    The report also shows that consumers will not*/}
                    {/*                                    easily forgive a company once a breach exposing*/}
                    {/*                                    their personal data occurs.*/}
                    {/*                                </p>*/}
                    {/*                            </td>*/}
                    {/*                            <td className="td-actions text-right">*/}
                    {/*                                <Button*/}
                    {/*                                    color="link"*/}
                    {/*                                    id="tooltip831835125"*/}
                    {/*                                    title=""*/}
                    {/*                                    type="button"*/}
                    {/*                                >*/}
                    {/*                                    <i className="tim-icons icon-pencil" />*/}
                    {/*                                </Button>*/}
                    {/*                                <UncontrolledTooltip*/}
                    {/*                                    delay={0}*/}
                    {/*                                    target="tooltip831835125"*/}
                    {/*                                    placement="right"*/}
                    {/*                                >*/}
                    {/*                                    Edit Task*/}
                    {/*                                </UncontrolledTooltip>*/}
                    {/*                            </td>*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>*/}
                    {/*                                <FormGroup check>*/}
                    {/*                                    <Label check>*/}
                    {/*                                        <Input defaultValue="" type="checkbox" />*/}
                    {/*                                        <span className="form-check-sign">*/}
                    {/*              <span className="check" />*/}
                    {/*            </span>*/}
                    {/*                                    </Label>*/}
                    {/*                                </FormGroup>*/}
                    {/*                            </td>*/}
                    {/*                            <td>*/}
                    {/*                                <p className="title">Arival at export process</p>*/}
                    {/*                                <p className="text-muted">*/}
                    {/*                                    Capitol Hill, Seattle, WA 12:34 AM*/}
                    {/*                                </p>*/}
                    {/*                            </td>*/}
                    {/*                            <td className="td-actions text-right">*/}
                    {/*                                <Button*/}
                    {/*                                    color="link"*/}
                    {/*                                    id="tooltip217595172"*/}
                    {/*                                    title=""*/}
                    {/*                                    type="button"*/}
                    {/*                                >*/}
                    {/*                                    <i className="tim-icons icon-pencil" />*/}
                    {/*                                </Button>*/}
                    {/*                                <UncontrolledTooltip*/}
                    {/*                                    delay={0}*/}
                    {/*                                    target="tooltip217595172"*/}
                    {/*                                    placement="right"*/}
                    {/*                                >*/}
                    {/*                                    Edit Task*/}
                    {/*                                </UncontrolledTooltip>*/}
                    {/*                            </td>*/}
                    {/*                        </tr>*/}
                    {/*                        </tbody>*/}
                    {/*                    </Table>*/}
                    {/*                </div>*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col lg="6" md="12">*/}
                    {/*        <Card>*/}
                    {/*            <CardHeader>*/}
                    {/*                <CardTitle tag="h4">Simple Table</CardTitle>*/}
                    {/*            </CardHeader>*/}
                    {/*            <CardBody>*/}
                    {/*                <Table className="tablesorter" responsive>*/}
                    {/*                    <thead className="text-primary">*/}
                    {/*                    <tr>*/}
                    {/*                        <th>Name</th>*/}
                    {/*                        <th>Country</th>*/}
                    {/*                        <th>City</th>*/}
                    {/*                        <th className="text-center">Salary</th>*/}
                    {/*                    </tr>*/}
                    {/*                    </thead>*/}
                    {/*                    <tbody>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>Dakota Rice</td>*/}
                    {/*                        <td>Niger</td>*/}
                    {/*                        <td>Oud-Turnhout</td>*/}
                    {/*                        <td className="text-center">$36,738</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>Minerva Hooper</td>*/}
                    {/*                        <td>Curaçao</td>*/}
                    {/*                        <td>Sinaai-Waas</td>*/}
                    {/*                        <td className="text-center">$23,789</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>Sage Rodriguez</td>*/}
                    {/*                        <td>Netherlands</td>*/}
                    {/*                        <td>Baileux</td>*/}
                    {/*                        <td className="text-center">$56,142</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>Philip Chaney</td>*/}
                    {/*                        <td>Korea, South</td>*/}
                    {/*                        <td>Overland Park</td>*/}
                    {/*                        <td className="text-center">$38,735</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>Doris Greene</td>*/}
                    {/*                        <td>Malawi</td>*/}
                    {/*                        <td>Feldkirchen in Kärnten</td>*/}
                    {/*                        <td className="text-center">$63,542</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>Mason Porter</td>*/}
                    {/*                        <td>Chile</td>*/}
                    {/*                        <td>Gloucester</td>*/}
                    {/*                        <td className="text-center">$78,615</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>Jon Porter</td>*/}
                    {/*                        <td>Portugal</td>*/}
                    {/*                        <td>Gloucester</td>*/}
                    {/*                        <td className="text-center">$98,615</td>*/}
                    {/*                    </tr>*/}
                    {/*                    </tbody>*/}
                    {/*                </Table>*/}
                    {/*            </CardBody>*/}
                    {/*        </Card>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </div>
            </>
        );
    }
}

export default Dashboard;
