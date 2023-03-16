import React, {useState,useEffect} from 'react';
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Registration.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



const Register =() => {

 const location = useLocation();
  
  const [age, setAge]= useState(0);
  const calculateAge = (date) => {
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};



  const [file, setFile] = useState(null);
  const Navigate = useNavigate();
  const [validated,setValidated] = useState(false);
  const [gender, setGender] = useState('');
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] =useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [dob, setDob] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [hobbies, setHobbies] = useState({
    reading: false,
    cooking: false,
    sports: false,
    music: false,
  });



   useEffect(() => {
    if (location.state) {
      setUsername(location.state.username);
    }
  }, [location.state]);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

   const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const age = calculateAge(dob);



    if (form.checkValidity() === true && age >= 18) {
      Navigate("/dispdata",{state: { fname, lname, zip, state, city, address, username, gender, file, hobbies, selectedOption, dob, imageUrl }}
      );
    } else {
      event.preventDefault();
      event.stopPropagation();
      alert("You must be at least 18 years old to register.");
    }
   
  };


// ---------------------------------------Form---------------------------------------------------- 

  return (
    <div className='App-home'>
    <div className='background'></div>
    <div className='formbox'>
    <Form className='form1' noValidate validated={validated} onSubmit={handleSubmit}>


{/* ------------------------------------First-Name----------------------------------------------- */}

      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

{/* -------------------------------------Last-Name------------------------------------------------ */}

      <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

{/* ------------------------------------Username-------------------------------------------------- */}

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>


{/* -------------------------------------------------Gender---------------------------------------------------------- */}
   <Row>
  <Form.Group as={Col} controlId="formGender">
        <Form.Label column sm={2}>
          Gender
        </Form.Label>
        <Col sm={10}>
          <Form.Check
          inline
            type="radio"
            label="Male"
            name="gender"
            value="male"
            id="maleRadio"
            required
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
          inline
            type="radio"
            label="Female"
            name="gender"
            value="female"
            id="femaleRadio"
            required
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
          inline
            type="radio"
            label="Other"
            name="gender"
            value="Other"
            id="otherRadio"
            required
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please select a gender.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
    

{/* -----------------------------------------------------DOB----------------------------------------------------------- */}

<Form.Group as={Col} md="4" className="mb-3" controlId="dob">
  <Form.Label>Date of Birth</Form.Label>
  <Form.Control type="date" placeholder="Date of Birth" required value={dob} onChange={(e) => {
    setDob(e.target.value);
    setAge(calculateAge(e.target.value));
  }} isInvalid={validated && age < 18}/>
  <Form.Control.Feedback type="invalid">
    You must be at least 18 years old to register.
  </Form.Control.Feedback>

</Form.Group>


<Form.Group as={Col} md="4"></Form.Group>
</Row>





{/* -------------------------------------Address------------------------------------------------- */}

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
            required
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
      </Form.Group>



{/* ------------------------------------------State---------------------------------------------- */}

        <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text"
            placeholder="State" 
            required            
            value={state}
            onChange={(e) => setState(e.target.value)}
           />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>


{/* -------------------------------------------City---------------------------------------------- */}

        
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" 
            placeholder="City" 
            required    
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>



{/* -------------------------------------------ZIP----------------------------------------------- */}

        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text"
            placeholder="Zip"
            required            
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <br/>





{/* --------------------------------------------------Qualification------------------------------------------------------------ */}

  <Row>
  <Form.Group as={Col} md="4" controlId="formGridDropdown">
  <Form.Label>Qualification</Form.Label>
  <Form.Select value={selectedOption} required onChange={(e) => setSelectedOption(e.target.value)} md="4" >
    <option value="">Select an option</option>
    <option value="SSLC">SSLC</option>
    <option value="Plus2">Plus Two</option>
    <option value="Diploma">Diploma</option>
    <option value="Degree">Degree</option>
    

  </Form.Select>
</Form.Group>




{/* ------------------------------------------Hobbies Checkbox------------------------------------------------------------ */}

<Form.Group as={Col} md="4" controlId="formGridCheckbox">
  <Form.Label>Hobbies</Form.Label>
  <div className="row">
    <div className="col-6">
      <Form.Check type="checkbox" label="Reading" id="hobby-reading" checked={hobbies.reading} onChange={(e) => setHobbies({...hobbies, reading: e.target.checked})} />
    </div>
    <div className="col-6">
      <Form.Check type="checkbox" label="Cooking" id="hobby-cooking" checked={hobbies.cooking} onChange={(e) => setHobbies({...hobbies, cooking: e.target.checked})} />
    </div>
  </div>
  <div className="row">
    <div className="col-6">
      <Form.Check type="checkbox" label="Sports" id="hobby-sports" checked={hobbies.sports} onChange={(e) => setHobbies({...hobbies, sports: e.target.checked})} />
    </div>
    <div className="col-6">
      <Form.Check type="checkbox" label="Music" id="hobby-music" checked={hobbies.music} onChange={(e) => setHobbies({...hobbies, music: e.target.checked})} />
    </div>
  </div>
</Form.Group>


</Row>


{/* ------------------------------------------------------File select---------------------------------------------------------- */}

    <Form.Group as={Col} md="4" controlId="validationCustom06">
      <Form.Label>Upload Image</Form.Label>
      <Form.Control
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <Form.Control.Feedback type="invalid">
        Please provide a valid image file.
      </Form.Control.Feedback>
    </Form.Group>


{/* -----------------------------------------Submit---------------------------------------------- */}

      <Form.Group>
      <Button className='submit-reg' type="submit">Submit form</Button>
      </Form.Group>
      </Form>
    </div>
    <div className="empty-box"></div>
    </div>
  );
}

export default Register;
 