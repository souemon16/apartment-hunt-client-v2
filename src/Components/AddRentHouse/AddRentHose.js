import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPlusSquare, faHome, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from 'react-bootstrap';
import './AddRentHouse.css';
import DashboardMenu from '../DashboardMenu/DashboardMenu';


const AddRentHouse = () => {
  
  return (
    <div className="dashboard-section d-flex justify-content-between">
    <DashboardMenu />
    <div className='add-rent'>
      <div className="top-bar d-flex justify-content-between align-items-center">
        <h1>Add Rent House</h1>
        <h2>Name</h2>
      </div>
      <div class="container">

        <div className="row d-flex justify-content-center align-items-center">

            <div className="booking-form">
              <div className="row">
                <div className="col-6">
                  <form action="">
                    <label className='input-title' for='service' >Service</label>
                    <input type="text" name="service" id="service" className="form-control"  placeholder='Enter Title'/>
                    <label className='input-title' for='location'>Location</label>
                    <input type="text" name="location" id="location" className="form-control"  placeholder='Enter Title'/>
                    <label className='input-title' for='bathroom'>No of Bathroom</label>
                    <input type="number" name="bathroom" id="bathroom" className="form-control" placeholder='No.'/>
                  </form>

                </div>
                <div className="col-6">
                  <form action="">
                  <label className='input-title' for='price'>Price</label>
                  <input type="number" name="price" id="price" className="form-control" placeholder='price' />

                  <label className='input-title' for='bedroom'>No of Bedroom</label>
                  <input type="number" name="bedroom" id="bedroom" className="form-control" placeholder='No.'/>
                  </form>
                    <Form style={{marginTop: '45px'}}>
                    <Form.Group>
                      <span style={{width: '170px', height: '40px'}} className="upload-img"><FontAwesomeIcon icon={faCloudUploadAlt} />Upload Image</span>
                      <Form.Control style={{width: '170px', height: '40px'}} className="mt-3" type="file" placeholder="Enter Location" />
                    </Form.Group>
                    </Form>


                </div>

              </div>
              <Button className="btn btn-submit" type="submit">
              Submit
              </Button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AddRentHouse;