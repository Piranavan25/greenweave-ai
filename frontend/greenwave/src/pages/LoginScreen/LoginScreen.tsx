import { useState }  from "react";
import { authService, tokenService } from '../Services/apiService';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function LoginScreen(){

    



    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const[isLoading,setisLoading]= useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        setisLoading(true)
        setError(null)

        try{
            const data = await authService.login(email, password);
            tokenService.storeTokens(data.access_token, data.refresh_token);
            navigate('/dashboard');

        }catch(err){
            setError('Failed to log in. Please check your credentials.');
        }finally{
            setisLoading(false)
        }
    }


    return (
        <div className="login-container">
            <h1>Welcome to GreenWeave AI</h1>
            <p>Style Sustainably</p>

            <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}

            <input 
            type="email"
            placeholder="abcdwxyz@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input" 
            />

            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input" 
            />

            <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? 'Logging in...' : 'Log In'}
            </button>


            </form>
            <p className="login-signup-prompt">
             Don't have an account? <Link to="/signup" className="login-signup-link">Sign Up</Link>
            </p>
        </div>
    )
}