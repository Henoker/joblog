// import {useEffect, useState} from 'react';
// import { Logo , FormRow, Alert } from '../components';
// import Wrapper from '../assets/wrappers/RegisterPage';
// import { useAppContext } from '../context/appContext';

// const initialState = {
//     username: '',
//     email: '',
//     password:'',
//     password1: '',
//     password2:'',
//     isMember: true,
    

// }

// const Register = () => {
//     const [values, setValues] = useState(initialState)
//     // Global state and useNavigate

//     const {isLoading, showAlert, displayAlert, registerUser} = useAppContext()

//     const toggleMember = () => {
//         setValues({...values, isMember:!values.isMember})
//     }

//     const handleChange = (e) => {
//         setValues({...values, [e.target.name]: e.target.value})

//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         const { username, email, password, password1, password2, isMember } = values;
      
//         if (!email || !password || !username) {
//           displayAlert();
//           return;
//         }
      
//         if (isMember) {
//           // User is logging in, send only email and password
//           const currentUser = { email, password, username };
//           console.log('Logging in with:', currentUser);
//         } else {
//           // User is registering, send username, email, password1, and password2
//           if (!username || !email || !password1 || !password2) {
//             displayAlert();
//             return;
//           }
//           const currentUser = { username, email, password1, password2 };
//           console.log('Registering with:', currentUser);
//         }
//       }
      
//   return (
//     <Wrapper className='full-page'>
//         <form className='form' onSubmit={onSubmit}>
//             <Logo />
//             <h3>{values.isMember ? "Login":"Register"}</h3>
//             {showAlert && <Alert/>}
//             {/* username input */}
//             <FormRow
//             type='text'
//             name='username'
//             value={values.username}
//             handleChange={handleChange}
//             />
//              {/* email input */}
//              <FormRow
//             type='email'
//             name='email'
//             value={values.email}
//             handleChange={handleChange}
//             />
//              {/* password input */}
//              {!values.isMember && (
//                  <FormRow
//                  type='password'
//                  name='password1'
//                  value={values.password1}
//                  handleChange={handleChange}
//                  />
//              )}
//              {!values.isMember && (
//                  <FormRow
//                  type='password'
//                  name='password2'
//                  value={values.password2}
//                  handleChange={handleChange}
//                  />
//              )}
//              {values.isMember && (
//                  <FormRow
//                  type='password'
//                  name='password'
//                  value={values.password}
//                  handleChange={handleChange}
//                  />
//              )}

//             <button type='submit' className='btn btn-block' disabled={isLoading}>
//                 Submit
//             </button>
//             <p>
//                 {values.isMember ? 'Not a member yet?':'Already a member?'}
//                 <button type='button' onClick={toggleMember} className='member-btn'>
//                     {values.isMember ? 'Register': 'Login'}
//                 </button>
//             </p>

//         </form>
//     </Wrapper>
//   )
// }
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Logo , Alert } from '../components';


const Register = () => {
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password1: "",
      password2: "",
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios
        .post("http://localhost:8000/api/v1/dj-rest-auth/registration/", formData)
        .then((response) => {
          console.log("Registration successful", response.data);
        })
        .catch((error) => {
          console.error("Error registering user", error);
        });
    };
  
    return (
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <div className='form-row'>
        <label className='form-label'>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className='form-input' 
        />
      </div>
      <div className='form-row'>
        <label className='form-label'>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='form-input' 
        />
      </div>
      <div className='form-row'>
        <label className='form-label'>Password:</label>
        <input
          type="password"
          name="password1"
          value={formData.password1}
          onChange={handleChange}
          className='form-input' 
        />
      </div>
      <div className='form-row'>
        <label className='form-label'>Confirm Password:</label>
        <input
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          className='form-input' 
        />
      </div>
        <button type="submit" className='btn btn-block'>Register</button>
      </form>
    );
  };
  



export default Register