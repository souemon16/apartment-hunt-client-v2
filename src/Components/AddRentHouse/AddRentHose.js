import React from 'react';
import '../BookingList/BookingList.css';
import logo from '../../Images/logos/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPlusSquare, faHome, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import '../DashboardMenu/DashBoardMenu.css';
import { Button, Form } from 'react-bootstrap';
import './AddRentHouse.css';


const AddRentHouse = () => {
  return (
    <div>
      <div class="container">

        <div className="row">

          <div className="col-4">
            <div class="container">

              <div className="pt-3">
                <img style={{ height: '60px' }} src={logo} alt="" />
                <p className="book-head">Add rent house</p>
              </div>


              <div className="pt-5 menu-bar">
                <ul>
                  <li>
                    <a href="#" ><FontAwesomeIcon icon={faClipboardList} /> Booking list</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a style={{ color: "#648883" }} href="#" active><FontAwesomeIcon icon={faPlusSquare} /> Add Rent House</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#"><FontAwesomeIcon icon={faHome} />My Rent</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-8 booking-list-design">
            <div className="booking-sub-content">

              <div className="row">
                <div className="col-6">
                  <Form>
                    <Form.Group>
                      <Form.Label>Service Title</Form.Label>
                      <Form.Control type="text" placeholder="Enter Title" />

                    </Form.Group>

                    <Form.Group >
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" placeholder="Enter Location" />
                    </Form.Group>

                    <Form.Group >
                      <Form.Label>No of Bathroom</Form.Label>
                      <Form.Control type="text" placeholder="price" />
                    </Form.Group>


                  </Form>

                </div>
                <div className="col-6">
                  <Form>
                    <Form.Group>
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="text" placeholder="Enter Title" />

                    </Form.Group>

                    <Form.Group >
                      <Form.Label>No of Bedroom</Form.Label>
                      <Form.Control type="text" placeholder="Enter Location" />
                    </Form.Group>

                    <Form.Group >

                      <span className="upload-img"><FontAwesomeIcon icon={faCloudUploadAlt} />Upload Image</span>
                      <Form.Control className="mt-3" type="file" placeholder="Enter Location" />
                    </Form.Group>




                  </Form>


                </div>

              </div>

            </div>
            <Button className="btn-design mb-3" type="submit">
              Submit
                       </Button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AddRentHouse;