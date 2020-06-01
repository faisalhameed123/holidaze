import React from 'react';
import { Link } from 'react-router-dom';
import call from "../images/call.jpg";

const AdminSidebar = (props) => {
    return(
        <>
            <div className="AdminNavi">
                <div className="row col-md-12 col-xs-10 col-xs-offset-1">
                        <div className="col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2">
                            <img src={call} alt="call"/>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <h3>Admin</h3>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <Link to="/dashboard/${props.id}"><h4>Add Establishment</h4></Link>   
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <Link to="/est-record"><h4>Establishment-Record</h4></Link>   
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                        <Link to="/record"><h4>Enquiry-Record</h4></Link>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                        <Link to="/admincontact"><h4>Contact</h4></Link>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                        <Link to="/settings"><h4>Settings</h4></Link>
                        </div>
                </div>
            </div>
      </>  
    )
}
export default AdminSidebar;