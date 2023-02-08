import React from "react";
import { Link } from "react-router-dom";


const Contact = () =>{
    return(
        <>
         <div className="container">
                <h1 className="text-center text-info">Contact Details</h1>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                 <h4>profile Setting</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <Link to="/personal" className="list-group-item text-primary"><b><i className="fa fa-person"></i> Personal Details</b></Link>
                                    <Link to="/contactdetails" className="list-group-item text-primary"><b><i className="fa fa-headset"></i> Contact</b></Link>
                                    <Link to="/educationdetails" className="list-group-item text-primary"><i className="fa fa-book"></i> Education</Link>
                                    
                                    <Link to="/myskills" className="list-group-item text-primary"><i className="fa fa-computer"></i> My Skill And Experience</Link>
                                    <Link to="/myresume" className="list-group-item text-primary"><i className="fa fa-person"></i> My Resume </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    

                    <div className="col-lg-7">
                           <div className="row">
                            <div className="col-lg-12">
                                <div>
                                    <label>Current City Name</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div>
                                    <label>yours Current Address</label>
                                    <textarea className="form-control " rows={10}></textarea>
                                </div>
                            </div>
                           </div>

                           <div className="text-center mt-3">
                               <button className="btn btn-primary">UpDate Contact</button>
                           </div>

                    </div>
                    </div>
                </div>


        </>
        
    )

}
export default Contact;