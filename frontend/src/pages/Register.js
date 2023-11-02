// import { useState} from 'react';
// import Wrapper from '../assets/wrappers/RegisterPage';
// import { Logo, Alert } from '../components';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';



// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//       username: "",
//       email: "",
//       password1: "",
//       password2: "",
//   });

//   const [displayAlert, setDisplayAlert] = useState(false);
//   const [alertType, setAlertType] = useState("");
//   const [alertMessage, setAlertMessage] = useState("");
  

   
  
//     const handleChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
    
//       axios
//         .post("http://localhost:8000/api/v1/dj-rest-auth/registration/", formData)
//         .then((response) => {
//           console.log("Registration successful", response.data);
//           setDisplayAlert(true);
//           setAlertType('success');
//           setAlertMessage('Registration successful');
//           setFormData({
//             username: "",
//             email: "",
//             password1: "",
//             password2: "",
//           });
//           setTimeout(() => {
//             setDisplayAlert(false);
//             setAlertType('');
//             setAlertMessage('');
//             navigate('/')
//           }, 3000);
//         })
//         .catch((error) => {
//           console.error("Error registering user", error);
//           setDisplayAlert(true);
//           setAlertType('error');
//           setAlertMessage('Error registering user');
//           setTimeout(() => {
//             setDisplayAlert(false);
//             setAlertType('');
//             setAlertMessage('');
//           }, 3000);
//         });
//     };
  
//     return (
//         <Wrapper>
//             <form className='form' onSubmit={handleSubmit}>
//                 <Logo />
//                 <h3>Register</h3>
//                 {alertType && <Alert type={alertType} message={alertMessage} />}
//                 <div className='form-row'>
//                     <label className='form-label'>Username:</label>
//                     <input
//                     type="text"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     className='form-input' 
//                     />
//                 </div>
//                 <div className='form-row'>
//                     <label className='form-label'>Email:</label>
//                     <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className='form-input' 
//                     />
//                 </div>
//                 <div className='form-row'>
//                     <label className='form-label'>Password:</label>
//                     <input
//                     type="password"
//                     name="password1"
//                     value={formData.password1}
//                     onChange={handleChange}
//                     className='form-input' 
//                     />
//                 </div>
//                 <div className='form-row'>
//                     <label className='form-label'>Confirm Password:</label>
//                     <input
//                     type="password"
//                     name="password2"
//                     value={formData.password2}
//                     onChange={handleChange}
//                     className='form-input' 
//                     />
//                 </div>
//                 <button type="submit" className='btn btn-block'>Register</button>
//             </form>

//         </Wrapper>
      
//     );
//   };
  



// export default Register
import { useState } from 'react'
import { Alert, FormRow, Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'

const initialState = {
  name: '',
  email: '',
  password: '',
  password1: '',
  password2: '',
  isMember: true,
 
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const {isLoading, showAlert, displayAlert}  = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, password, password1, password2, isMember} = values
    if (!email || !password || (!isMember && !name && !password1 && password2)){
      displayAlert()
      return
    }
    console.log(values)
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        {showAlert && <Alert />}
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {!values.isMember && (
          <> 
          <div className='form-row'>
            <label className='form-label'>Name</label>
            <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className='form-input' 
            />
          </div>
          <div className='form-row'>
            <label className='form-label'>Password</label>
            <input
            type="password"
            name="password1"
            value={values.password1}
            onChange={handleChange}
            className='form-input' 
            />
          </div>
          <div className='form-row'>
            <label className='form-label'>Confirm Password</label>
            <input
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
            className='form-input' 
            />
          </div>
          </>
        )}

        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {values.isMember && (
          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
        )}

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
