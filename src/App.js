import React from "react";
import { HashRouter,Route,Routes, } from "react-router-dom";
import Myskills from "./myskills";
import Personal from "./personal";
import Contact from "./contactdetails";
import Education from "./educationdetails";
import Resume from "./myresume";
import Editpersonal from "./editpersonal";
import Editcontact from "./editcontact";
import Editeducation from "./editeducation";
import Editskills from "./editskill";





function App(){

  return(
  <HashRouter>
     <Routes>
      <Route exact path="/myskills" element={<Myskills/>}/>
      <Route exact path="/personal" element={<Personal/>}/>
      <Route exact path="/contactdetails" element={<Contact/>}/>
      <Route exact path="/educationdetails" element={<Education/>}/>
      <Route exact path="/myresume" element={<Resume/>}/>
      <Route exact path="/editpersonal/:personalid" element={<Editpersonal/>}/>
      <Route exact path="/editcontact/:contactid" element={<Editcontact/>}/>
      <Route exact path="/editeducation" element={<Editeducation/>}/>
      <Route exact path="/editskill" element={<Editskills/>}/>
      
      
     </Routes>
  </HashRouter>
  )


}
export default App;