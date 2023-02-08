import React from "react";
import { Link } from "react-router-dom";

const Personal = () =>{
    return(
        
        <>
         <div className="container">
                <h1 className="text-center text-info"> Personal Detailes  </h1>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                 <h4>profile Setting</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <Link to="/Personal"  className="list-group-item text-primary"><b><i className="fa fa-person"></i> Personal Details</b></Link>
                                    <Link to="/contactdetails" className="list-group-item text-primary"><b><i className="fa fa-headset"></i> Contact</b></Link>
                                    <Link to="/educationdetails" className="list-group-item text-primary"><i className="fa fa-book"></i> Education</Link>
                                    
                                    <Link to="/myskills" className="list-group-item text-primary"><i className="fa fa-computer"></i> My Skill And Experience</Link>
                                    <Link to="/myresume" className="list-group-item text-primary"><i className="fa fa-person"></i> My Resume</Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                           <div className="row">
                            <div className="col-lg-12">
                                <div>
                                    <label>Full Name</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                            </div>
                           <div className="row mt-4">
                            <div className="col-lg-6">
                                <div>
                                    <label>Gender</label>
                                    <input className="form-control "></input>     
                                </div>     
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <label>Age</label>
                                    <input className="form-control "></input>     
                                </div>     
                            </div>
                           </div>

                           <div className="col-lg-12">
                            <div>
                                <label>Mobile No</label>
                                <input className="form-control"></input>
                            </div>
                           </div>
                           <div className="row mt-4">
                            <div className="col-lg-6">
                                <div>
                                    <label>Email-ID</label>
                                    <input className="form-control "></input>     
                                </div>     
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <label>Password</label>
                                    <input className="form-control "></input>     
                                </div>     
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
export default Personal;