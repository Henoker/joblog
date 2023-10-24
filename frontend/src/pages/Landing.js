import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';


const Landing = () => {
  return (
    <Wrapper>
        <main>
            <nav>
                <img src={logo} alt='jobify' className='logo'/>
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>Job<span>Tracking</span>App</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis leo in varius egestas. Phasellus vehicula at enim et consequat. Vivamus at auctor purus. </p>
                    <button className='btn btn-hero'>
                        Login/Register
                    </button>
                </div>
                <img src={main} alt='job hunt' className='img main-img'/>
            </div>
        </main>
    </Wrapper>
    
  )
}

export default Landing