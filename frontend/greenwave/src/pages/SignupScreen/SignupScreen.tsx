import { useState }  from "react";
import './SignupScreen.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { authService, tokenService } from '../Services/apiService';


export default function SignupScreen(){

    


    const[fullname,setfullName]= useState('');
    const[username,setuserName]= useState('');
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
            console.log({ fullname, username, email, password });

            const data = await authService.signup(fullname, username, email, password);
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

            <label htmlFor="fullname" className="login-label">Full Name</label>
            <input 
            type="text"
            placeholder="John Doe"
            value={fullname}
            onChange={(e) => setfullName(e.target.value)}
            required
            className="login-input" 
            />

            <label htmlFor="username" className="login-label">User Name</label>
            <input 
            type="text"
            placeholder="john"
            value={username}
            onChange={(e) => setuserName(e.target.value)}
            required
            className="login-input" 
            />

            <label htmlFor="email" className="login-label">Email</label>
            <input 
            type="email"
            placeholder="abcdwxyz@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input" 
            />

            <label htmlFor="password" className="login-label">Password</label>
            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="signup-input" 
            />

            <button type="submit" disabled={isLoading} className="signup-button">
            {isLoading ? 'Logging in...' : 'Sign Up'}
            </button>


            </form>
            <p className="login-signup-prompt">
            Have an account? <Link to="/login" className="login-signup-link">Log In</Link>

            </p>
        </div>
    )
}