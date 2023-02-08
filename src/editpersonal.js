import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";


const Editpersonal = () =>{
    const {personalid} = useParams();
    const navigate = useNavigate();
    


    const [fullname,pickFullname] = useState('');
    const [gender,pickGender] = useState('');
    const [age,pickAge] = useState('');
    const [mobileno,pickMobileno] = useState('');
    const [emailid,pickEmailid] = useState('');
    const [Password,pickPassword] = useState('');
     
    const getpersonal = () =>{
        const url=`http://localhost:1235/personaldetails/${personalid}`;
        fetch(url)
        .then(responce=>responce.json())
        .then(serverArray=>{
            pickFullname(serverArray.fullname)
            pickGender(serverArray.gender)
            pickAge(serverArray.age)
            pickMobileno(serverArray.mobileno)
            pickEmailid(serverArray.emailid)
            pickPassword(serverArray.Password)
        });
    }
    useEffect(()=>{
        getpersonal();
    },[1]);

    const save = () =>{
        const url=`http://localhost:1235/personaldetails/${personalid}`;

        const personalInfo = {
            "fullname":fullname,
            "gender":gender,
            "age":age,
            "mobileno":mobileno,
            "emailid":emailid,
            "password":Password
        }
        const postOption ={
            headers : {'Content-Type': 'application/json'},
            method :'PUT',
            body:JSON.stringify(personalInfo)
        }

        fetch(url,postOption)
        .then(responce=>responce.json())
        .then(serverArray=>{
            navigate("/myresume")
        swal("added succesfully") 

        })
       
    }
    
    
    
    


    return(
        <>
        <h1 className="text-center">Edit Personal Detailes</h1>
              
                   <div className="container fluid mb-5 p-5 bg-light">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 bg-body-tertiary rounded ms-5 border border-light shadow-lg p-3 mb-5">
                        
                           <div className="row">
                            <div className="col-lg-12">
                                
                                    <label>Full Name</label>
                                    <input type="text" className="form-control"  value={fullname} onChange={obj => pickFullname(obj.target.value)}></input>
                                
                            </div>
                            </div>
                           <div className="row mt-4">
                            <div className="col-lg-6">
                                <div>
                                    <label>Gender</label>
                                    <select className="form-control" type="text" value={gender} onChange={obj => pickGender(obj.target.value)}>
                                        <option></option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    
                                    </select>    
                                </div>     
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <label>Age</label>
                                    <input className="form-control" type="text" value={age} onChange={obj => pickAge(obj.target.value)}></input>     
                                </div>     
                            </div>
                           </div>
                            <div className="row">
                           <div className="col-lg-12">
                                <label>Mobile No</label>
                                <input className="form-control"  type="number" value={mobileno} onChange={obj => pickMobileno(obj.target.value)}></input>
                           </div>
                           </div>
                           <div className="row mt-4">
                            <div className="col-lg-6">
                                <div>
                                    <label>Email-ID</label>
                                    <input className="form-control " type="email" value={emailid} onChange={obj => pickEmailid(obj.target.value)}></input>     
                                </div>     
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <label>Password</label>
                                    <input className="form-control" type="password" value={Password} onChange={obj => pickPassword(obj.target.value)}></input>     
                                </div>     
                            </div>
                           </div>
                           <div className="text-center mt-3">
                               <button className="btn btn-primary" onClick={save}>Save Changes</button>
                           </div>

                           </div>
                           <div className="col-lg-2"></div>
                           
                    
                    </div>
                            
                        </div>
                       
                    
                   
            
       
        </>
    )


}
export default Editpersonal;