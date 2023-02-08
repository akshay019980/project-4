import React from "react";
import { Link } from "react-router-dom";


const Education = () =>{
    return(
        <>
        
        <div className="container">
                <h1 className="text-center text-info">Education Detailes</h1>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                 <h4>profile Setting</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <Link to="/personal"  className="list-group-item text-primary"><b><i className="fa fa-person"></i> Personal Details</b></Link>
                                    <Link to="/contactdetails" className="list-group-item text-primary"><b><i className="fa fa-headset"></i> Contact</b></Link>
                                    <Link to="/educationdetails" className="list-group-item text-primary"><i className="fa fa-book"></i> Education</Link>
                                    
                                    <Link to="/myskills" className="list-group-item text-primary"><i className="fa fa-computer"></i> My Skill And Experience</Link>
                                    <Link to="/myresume" className="list-group-item text-primary"><i className="fa fa-person"></i> My Resume</Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                           <div className="row mt-4">
                            <div className="col-lg-6">
                                <div>
                                    <label>10th Marks %</label>
                                    <input className="form-control "></input>     
                                </div>     
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <label>12th Marks %</label>
                                    <input className="form-control "></input>     
                                </div>     
                            </div>
                           </div>                  
                            <div className="col-lg-12">
                                <div>
                                    <label>Highest Education</label>
                                    <input className="form-control "></input>     
                                </div>     
                            </div>  

                             <div className="row mt-4">
                            <div className="col-lg-6">
                                <div>
                                    <label>Highest Education passing Year</label>
                                    <input className="form-control "></input>     
                                </div>     
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <label>Highest Education Marks % </label>
                                    <input className="form-control "></input>     
                                </div>     
                            </div>
                           </div>  
                           </div>
                           <div className="text-center mt-2">
                               <button className="btn btn-primary">UpDate Education</button>
                           </div>

                    </div>
                    </div>
                
        </>
        
    )

}
export default Education;