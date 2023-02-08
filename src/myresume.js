import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Resume = () =>{
     
      let[person , updatePesron] = useState([]);
      let[contact, updateContact]  = useState([]);
      let[education, updateEducation] = useState([]);
      let [skill,updateskill] = useState([]);

      const getPerson = () =>{
              fetch("http://localhost:1235/personaldetails")
              .then(response=>response.json())
              .then(personArray=>{
                   updatePesron(personArray)
                   console.log(personArray)
              })
      }

      const getContact = () =>{
          fetch("http://localhost:1235/contactdetails")
          .then(response=>response.json())
          .then(contactArray=>{
                updateContact(contactArray)
          })
      }
      const getEducation = () =>{
        fetch("http://localhost:1234/educationdetails")
        .then(response=>response.json())
        .then(educationArray=>{
            updateEducation (educationArray)
        })
      }
       
      const getskill = () =>{
        fetch("http://localhost:1234/myskills&experience")
        .then(response=>response.json())
        .then(skillArray=>{
            updateskill(skillArray)
        })
      }

      useEffect(()=>{
        getPerson();
       getContact();
       getEducation();
       getskill();
      },[1])

    return(
        <>
        <h1 className="text-center text-danger">My Resume</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                            <div className="row">
                                <div className="col-lg-3">Personal Detailes</div>
                                <div className="col-lg-6"></div>
                                <div className="col-lg-3 text-end">
                                {
                                        person.map((person)=>{
                                            return(
                                                
                                                <div key={person.id}>
                                                    {
                                                     <Link to={`/editpersonal/${person.id}`} className="text-white card-link">UpDate</Link>
                                                    }
                                                </div>
                                                

                                            )
                                        })
                                    }  
                               </div>
                            </div>
                                 </div>
                                 <div className="card-body">
                                    {
                                        person.map((person,index)=>{
                                            return(
                                                <div key={index}>
                                                    <div>Full Name : {person.fullname}</div>
                                                    <div>Gender : {person.gender}</div>
                                                    <div>Age : {person.age}</div>
                                                    <div>Mobile NO : {person.mobileno}</div>
                                                    <div>Email-ID : {person.emailid}</div>
                                                    <div>Password : {person.password}</div>

                                                </div>

                                            )
                                        })
                                    }
                                 </div>
                              
                           </div>                    
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <div className="row">
                                    <div className="col-lg-3">Contact Detailes</div>
                                    <div className="col-lg-6"></div>
                                    <div className="col-lg-3 text-end">
                                      

                                        {
                                            contact.map((contact)=>{
                                                return(
                                                    <div key={contact.id}>
                                                        {
                                                            <Link to={`/editcontact/${contact.id}`} className="text-white card-link">UpDate</Link>
                                                        }

                                                    </div>
                                                )
                                            })
                                        }
                                        
                                        
                                        </div>
                                
                                </div>
                            </div>
                            <div className="card-body">
                                {
                                   contact.map((contact,index)=>{

                                    return(
                                        <div key={index}>
                                         <div>City : {contact.city}</div>
                                         <div>Address : {contact.address}</div>

                                        </div>
                                    )
                                   })
                                }
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="row ">
                    <div className="col-lg-6 mt-5">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <div className="row">
                                    <div className="col-lg-3">Education Detailes</div>
                                    <div className="col-lg-6"></div>
                                    <div className="col-lg-3 text-end"><Link to="/editeducation">UpDate</Link></div>
                                </div>
                            </div>
                            <div className="card-body">
                                {
                                    education.map((education,index)=>{
                                        return(
                                            <div key={index}>
                                                <div>10th Marks% : {education.tenthmarks}</div>
                                                <div>12th Marks% :{education.twelvthmarks} </div>
                                                <div>Highest Education:{education.education}</div>
                                                <div>Highest Education passing year:{education.passingyear}</div>
                                                <div>Highest Education Marks%:{education.highestmarks}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>    
                <div className="col-lg-6 mt-5">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <div className="row">
                                    <div className="col-lg-3">My Skills & Experience</div>
                                    <div className="col-lg-6"></div>
                                    <div className="col-lg-3 text-end"> <Link to="/editskill">UpDate</Link></div>
                                </div>
                            </div>
                            <div className="card-body">
                                {
                                    skill.map((skill,index)=>{
                                        return(
                                            <div key={index}>
                                                <div>Total Work Experience : {skill.experience}</div>
                                                <div>Enter Your Skills : {skill.skills}</div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
        
        </>
    )
} 
export default Resume;
