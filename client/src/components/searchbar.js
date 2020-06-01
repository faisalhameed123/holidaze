import React from 'react';
import { Link } from 'react-router-dom';

import hotel from "../images/b&b-2.jpg";

export default function Searchbar(props){
    return(
     <>       
        
        <div className="row searcharea col-md-8 col-md-offset-2"> 
                <div className="col-md-12 form-group">
                    <input className="form-control" type="text" placeholder="Search by name" id="dest"></input>
                    <button className="btn btn-primary">
                    <h4>Search</h4>
                    </button>
                </div>   
            </div>
    </>
    )
}