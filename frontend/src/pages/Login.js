import { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, Alert } from '../components';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: "",
      password: "",
  });

  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  
//   useEffect(() => {
//     // Fetch CSRF token from Django backend
//     axios.get("http://localhost:8000/csrf_cookie/").then((response) => {
//       // You don't need to do anything with the response, just make the request to get the CSRF token
//     });
//   }, []);
   
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      axios.defaults.xsrfCookieName = 'csrftoken'; 
      axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    
      axios
        .post("api-auth/login/", formData)
        .then((response) => {
          console.log("Login successful", response.data);
          setDisplayAlert(true);
          setAlertType('success');
          setAlertMessage('Login successful');
          setFormData({
            username: "",
            password: "",
          });
          setTimeout(() => {
            setDisplayAlert(false);
            setAlertType('');
            setAlertMessage('');
            navigate('/')
          }, 3000);
        })
        .catch((error) => {
          console.log("Error Loogging in", error);
          setDisplayAlert(true);
          setAlertType('error');
          setAlertMessage('Error logging in. Please Try again');
          setTimeout(() => {
            setDisplayAlert(false);
            setAlertType('');
            setAlertMessage('');
          }, 3000);
        });
    };
  
    return (
        <Wrapper>
            <form className='form' onSubmit={handleSubmit}>
                <Logo />
                <h3>Login</h3>
                {alertType && <Alert type={alertType} message={alertMessage} />}
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
                    <label className='form-label'>Password:</label>
                    <input
                    type="password"
                    name="password"
                    value={formData.password1}
                    onChange={handleChange}
                    className='form-input' 
                    />
                </div>
                <button type="submit" className='btn btn-block'>Submit</button>
            </form>

        </Wrapper>
      
    );
}

export default Login