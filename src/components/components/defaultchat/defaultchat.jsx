import React from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from "react-router-dom";
import { Tabs, Tab, Tooltip, OverlayTrigger, Dropdown, Breadcrumb, Card, Row, Col,} from "react-bootstrap";
import { Imagesdata } from "../../../commondata/commonimages";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function DefaultChat() {
  
  return (
    <div>
      <PageHeader titles="Default chat" active="Default chat" items={['Components']} />
      <Row className="row-sm">
        <Col sm={12} md={12} lg={5} xl={4}>
          <Card className=" custom-card">
            <div className="main-content-app pt-0">
              <div className="main-content-left main-content-left-chat">
                <Card.Body>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                    />
                    <button className="input-group-text btn btn-primary">
                      Search
                    </button>
                  </div>
                </Card.Body>

                <Tabs
                  variant=""
                  className=" main-nav-line main-nav-line-chat card-body"
                >
                  <Tab
                    className="nav-link p-0"
                    eventKey="Recent Chat"
                    title="Recent Chat"
                  >
                    <div className="tab-pane " id="ChatList">
                    <PerfectScrollbar options={{ suppressScrollX: true, useBothWheelAxes: false }}>
                        <div className="main-chat-list tab-pane">
                          <Link className="media new" to="#">
                            <div className="main-img-user online">
                              <img
                                alt=""
                                src={Imagesdata("users5")}
                              />
                              <span>2</span>
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Socrates Itumay</span>
                                <span>2 hours</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users6")}
                              />
                              <span>1</span>
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Dexter dela Cruz</span>
                                <span>3 hours</span>
                              </div>
                              <p>
                                Maec enas tempus, tellus eget con dime ntum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link className="media selected" to="#">
                            <div className="main-img-user online">
                              <img
                                alt=""
                                src={Imagesdata("users9")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Reynante Labares</span>
                                <span>10 hours</span>
                              </div>
                              <p>
                                Nam quam nunc, bl ndit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users11")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Joyce Chua</span> <span>2 days</span>
                              </div>
                              <p>
                                Ma ecenas tempus, tellus eget con dimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users4")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Rolando Paloso</span> <span>2 days</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users7")}
                              />
                              <span>1</span>
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Ariana Monino</span> <span>3 days</span>
                              </div>
                              <p>
                                Maece nas tempus, tellus eget cond imentum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users8")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Maricel Villalon</span>
                                <span>4 days</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users12")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Maryjane Pechon</span> <span>5 days</span>
                              </div>
                              <p>
                                Mae cenas tempus, tellus eget co ndimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users5")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Lovely Dela Cruz</span>
                                <span>5 days</span>
                              </div>
                              <p>
                                Mae cenas tempus, tellus eget co ndimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users8")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Daniel Padilla</span> <span>5 days</span>
                              </div>
                              <p>
                                Mae cenas tempus, tellus eget co ndimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users3")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>John Pratts</span> <span>6 days</span>
                              </div>
                              <p>
                                Mae cenas tempus, tellus eget co ndimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link className="media new" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users7")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Raymart Santiago</span>
                                <span>6 days</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link className="media border-bottom-0" to="#">
                            <div className="main-img-user">
                              <img
                                alt=""
                                src={Imagesdata("users6")}
                              />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Samuel Lerin</span> <span>7 days</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                        </div>
                    </PerfectScrollbar>
                    </div>
                  </Tab>
                  <Tab className="nav-link p-0" eventKey="Calls" title="Calls">
                    <div className="tab-pane" id="ChatCalls">
                    <PerfectScrollbar options={{ suppressScrollX: true, useBothWheelAxes: false }}>

                        <div className="main-chat-list tab-pane">
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users4")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Grace Russell</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    Today, 12:15 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-outgoing"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users4")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Grace Russell</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    Today, 12:15 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-outgoing"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users9")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Joanne Miller</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    Yesterday, 02:15 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-incoming"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users12")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Kimberly Nolan</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                  <p className="text-muted tx-13">
                                    Yesterday, 05:39 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-danger fe fe-video"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users6")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Andrea Mackay</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                  <p className="text-muted tx-13">
                                    29 june 2020, 03:21 AM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-danger fe fe-phone-call"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users2")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Samantha Lewis</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    1 july 2020, 10:23 AM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-incoming"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users2")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Victoria Kerr</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                  <p className="text-muted tx-13">
                                    1 july 2020, 4:45 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-danger fe fe-phone-call"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users7")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Socrates Itumay</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    2 july 2020, 11:14 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-outgoing"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users8")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Rebecca Johnston</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                  <p className="text-muted tx-13">
                                    3 july 2020, 06:14 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-danger fe fe-phone-incoming"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users3")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Madeleine James</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    4 july 2020, 5:12 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-outgoing"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users5")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Socrates Itumay</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    4 july 2020, 5:12 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-outgoing"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users7")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Raymart Santiago</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    4 july 2020, 5:12 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-outgoing"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users7")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Raymart Santiago</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    4 july 2020, 5:12 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-outgoing"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users7")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Raymart Santiago</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    4 july 2020, 5:12 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-outgoing"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users7")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Raymart Santiago</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="fe fe-arrow-up-right text-success me-2"></i>
                                  <p className="text-muted tx-13">
                                    4 july 2020, 5:12 PM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-success fe fe-phone-outgoing"></i>
                            </div>
                          </Link>
                        </div>
                      </PerfectScrollbar>
                    </div>
                  </Tab>
                  <Tab
                    className="nav-link p-0"
                    eventKey="Contacts"
                    title="Contacts"
                  >
                    <div className="tab-pane" id="ChatContacts">
                    <PerfectScrollbar options={{ suppressScrollX: true, useBothWheelAxes: false }}>
                        <div className="main-chat-list tab-pane">
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users3")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Lillian Ross</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Home</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users5")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Socrates Itumay</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Mobile</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users4")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Elizabeth Scott</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Office</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users5")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Cameron Watson</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Home</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users8")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Christopher Arnold</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Mobile</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2 me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users4")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Justin Bailey</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Office</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users7")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Richard Berry</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Home</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users9")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Abraham Clark</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Mobile</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users4")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Anderson</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Office</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users2")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Clarkson Gray</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Home</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users12")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Henderson Dyer</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Mobile</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center media"
                          >
                            <div className="mb-0 me-2">
                              <div className="main-img-user online">
                                <img
                                  alt=""
                                  src={Imagesdata("users1")}
                                />
                              </div>
                            </div>
                            <div className="align-items-center justify-content-between">
                              <div className="media-body ms-2">
                                <div className="media-contact-name">
                                  <span>Marshall Fisher</span>
                                  <span></span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text-muted tx-13">Office</p>
                                </div>
                              </div>
                            </div>
                            <div className="ms-auto">
                              <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                              <i className="contact-status text-success fe fe-phone-call me-2"></i>
                              <i className="contact-status text-danger fe fe-video me-2"></i>
                            </div>
                          </Link>
                        </div>
                      </PerfectScrollbar>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={7} xl={8}>
          <Card className="custom-card">
            <div className="main-content-app pt-0">
              <div className="main-content-body main-content-body-chat">
                <div className="main-chat-header pt-3">
                  <div className="main-img-user online">
                    <img
                      alt="avatar"
                      src={Imagesdata("users1")}
                    />
                  </div>
                  <div className="main-chat-msg-name mt-2">
                    <h6>Sonia Taylor</h6>
                    <span className="dot-label bg-success"></span>
                    <small className="me-3">online</small>
                  </div>

                  <nav className="nav">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="nav-link"
                        variant=""
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fe fe-more-horizontal"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                        <Dropdown.Item className="dropdown-item">
                          <i className="fe fe-phone-call me-1"></i> Phone Call
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">
                          <i className="fe fe-video me-1"></i> Video Call
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">
                          <i className="fe fe-user-plus me-1"></i> Add Contact
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">
                          <i className="fe fe-trash-2 me-1"></i> Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <OverlayTrigger
                      className="  "
                      to="#"
                      placement="top"
                      overlay={<Tooltip>Phone Call</Tooltip>}
                    >
                      <i className="fe fe-phone-call nav-link"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      className=" "
                      to="#"
                      placement="top"
                      overlay={<Tooltip>Video Call</Tooltip>}
                    >
                      <i className="fe fe-video nav-link"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      className=""
                      to="#"
                      placement="top"
                      overlay={<Tooltip className="phone">Add Contact</Tooltip>}
                    >
                      <i className="fe fe-user-plus nav-link"></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      className=""
                      to="#"
                      placement="top"
                      overlay={<Tooltip>Delete</Tooltip>}
                    >
                      <i className="fe fe-trash-2 nav-link"></i>
                    </OverlayTrigger>
                  </nav>
                </div>
                <div className="main-chat-body" id="ChatBody">
                <PerfectScrollbar options={{ suppressScrollX: true, useBothWheelAxes: false }}>
                    <div className="content-inner">
                      <label className="main-chat-time">
                        <span>3 days ago</span>
                      </label>
                      <div className="media flex-row-reverse chat-right">
                        <div className="main-img-user online">
                          <img
                            alt="avatar"
                            src={Imagesdata("users2")}
                          />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Nulla consequat massa quis enim. Donec pede justo,
                            fringilla vel...
                          </div>
                          <div className="main-msg-wrapper">
                            rhoncus ut, imperdiet a, venenatis vitae, justo...
                          </div>
                          <div>
                            <span>9:48 am</span>
                            <Link to="#">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="media chat-left">
                        <div className="main-img-user online">
                          <img
                            alt="avatar"
                            src={Imagesdata("users1")}
                          />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                          </div>
                          <div>
                            <span>9:32 am</span>
                            <Link to="#">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="media flex-row-reverse chat-right">
                        <div className="main-img-user online">
                          <img
                            alt="avatar"
                            src={Imagesdata("users2")}
                          />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Nullam dictum felis eu pede mollis pretium
                          </div>
                          <div>
                            <span>11:22 am</span>
                            <Link to="#">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <label className="main-chat-time">
                        <span>Yesterday</span>
                      </label>
                      <div className="media chat-left">
                        <div className="main-img-user online">
                          <img
                            alt="avatar"
                            src={Imagesdata("users1")}
                          />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                          </div>
                          <div>
                            <span>9:32 am</span>
                            <Link to="#">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="media flex-row-reverse chat-right">
                        <div className="main-img-user online">
                          <img
                            alt="avatar"
                            src={Imagesdata("users2")}
                          />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Donec quam felis, ultricies nec, pellentesque eu,
                            pretium quis, sem. Nulla consequat massa quis enim.
                            Donec pede justo, fringilla vel, aliquet nec. In
                            enim justo, rhoncus ut, imperdiet a, venenatis
                            vitae, justo.
                          </div>
                          <div className="main-msg-wrapper">
                            Nullam dictum felis eu pede mollis pretium
                          </div>
                          <div>
                            <span>9:48 am</span>
                            <Link to="#">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <label className="main-chat-time">
                        <span>Today</span>
                      </label>
                      <div className="media chat-left">
                        <div className="main-img-user online">
                          <img
                            alt="avatar"
                            src={Imagesdata("users1")}
                          />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Maecenas tempus, tellus eget condimentum rhoncus
                          </div>
                          <div className="pd-0">
                            <img
                              alt="" className="w-20 h-10 mb-1 me-1"
                              src={Imagesdata("media3")}
                            />
                            <img
                              alt="" className="w-20 h-10 mb-1 me-1"
                              src={Imagesdata("media4")}
                            />
                            <img
                              alt="" className="w-20 h-10 mb-1 me-1"
                              src={Imagesdata("media5")}
                            />
                          </div>
                          <div>
                            <span>10:12 am</span>
                            <Link to="#">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="media flex-row-reverse chat-right">
                        <div className="main-img-user online">
                          <img
                            alt="avatar"
                            src={Imagesdata("users2")}
                          />
                        </div>
                        <div className="media-body">
                          <div className="main-msg-wrapper">
                            Maecenas tempus, tellus eget condimentum rhoncus
                          </div>
                          <div className="main-msg-wrapper">
                            Nam quam nunc, blandit vel, luctus pulvinar,
                            hendrerit id, lorem. Maecenas nec odio et ante
                            tincidunt tempus. Donec vitae sapien ut libero
                            venenatis faucibus.
                          </div>
                          <div>
                            <span>09:40 am</span>
                            <Link to="#">
                              <i className="icon ion-android-more-horizontal"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>
                <div className="main-chat-footer">
                  <nav className="nav flex-nowrap">
                    <OverlayTrigger
                      className=""
                      to="#"
                      placement="top"
                      overlay={<Tooltip className="">Add Images</Tooltip>}
                     >
                      <Link className="nav-link">
                      <i className="fe fe-image"></i>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      className=""
                      to="#"
                      placement="top"
                      overlay={<Tooltip className="">Attach a File</Tooltip>}
                    >
                      <Link className="nav-link">
                      <i className="fe fe-paperclip"></i>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      className=""
                      to="#"
                      placement="top"
                      overlay={<Tooltip>Emoji</Tooltip>}
                    >
                      <Link className="nav-link">
                      <i className="fa fa-smile-o"></i>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      className=""
                      to="#"
                      placement="top"
                      overlay={<Tooltip className="">Record Voice</Tooltip>}
                    >
                      <Link className="nav-link">
                      <i className="fe fe-mic"></i>
                      </Link>
                    </OverlayTrigger>
                  </nav>
                  <div className="defaultinput ms-0 flex-grow-1">
                    <input
                      className=" form-control ms-0"
                      placeholder="Type your message here..."
                      type="text"
                    />
                  </div>
                  <Link className="main-msg-send" to="#">
                    <i className="fa fa-paper-plane-o"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
