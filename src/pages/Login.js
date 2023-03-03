import FormLogin from '../components/FormLogin'
import '../stylesheets/pages.css'




const Login = () => {
    return(
        <div className='pages-structure-container'>
            <div className='pages-structure-container-header'>

            </div>
            <div className='pages-structure-container-main'>
                <FormLogin/>
            </div>
        </div>
    )
}

export default Login