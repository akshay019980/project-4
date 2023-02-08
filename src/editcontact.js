import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Editcontact = () =>{
    const navigate = useNavigate();
    const {contactid} = useParams();

    const [city,pickCity] = useState();
    const [address,pickAddress] = useState();
    
    const getcontact = () =>{
    const url=`http://localhost:1235/contactdetails/${contactid}`;
    fetch(url)
    .then(response=>response.json())
    .then(serverArray=>{
        pickCity(serverArray.city)
        pickAddress(serverArray.address)

    });
}

   useEffect(()=>{
    getcontact();
   },[1]);

   const  save = () =>{
    const url=`http://localhost:1235/contactdetails/${contactid}`;

    const contactInfo = {
        "city":city,
        "address":address
    }
const postOption ={
    headers : {'Content-Type' : 'Application/json'},
    method : 'PUT',
    body:JSON.stringify(contactInfo)
}
fetch(url,postOption)
.then(response=>response.json())
.then(serverArray=>{
    navigate("/myresume")
    swal("added succesfully")
})

   }
return(
    <>
    <h1 className="text-center m-2"> Edit Contact</h1>
    <div className="container fluid ">
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 bg-body-tertiary rounded shadow-lg border border-light">
                <label>Current City Name</label>
                <input className="form-control" type="text" value={city} onChange={obj =>pickCity(obj.target.value)} ></input>
                
            </div>
            <div className="col-lg-4"></div>
            
            <div className="col-lg-4"> </div>
                <div className="col-lg-4 mt-3 shadow-lg">
                    <label>Your Current Address</label>
                    <textarea className="form-control " cols="10" type="text" value={address} onChange={obj=>pickAddress(obj.target.value)}></textarea>
                </div>
                <div className="col-lg-4"></div>
                <div className="text-center mt-3">
                    <button className="btn btn-info" onClick={save}>Save Changes</button>
                </div>
           
        </div>
    </div>
    </>
)

}
export default Editcontact;