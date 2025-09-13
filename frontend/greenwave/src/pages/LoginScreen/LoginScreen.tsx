import { useState }  from "react";
import './LoginScreen.css';
import type { ReactFormState } from "react-dom/client";

export default function LoginScreen(){

    const loginUser = async (email: string, password: string) => {
  // ... API call logic would be here
  console.log("Logging in with:", email, password);
};



    const[email,setEmail]= useState('');
    const[passward,setPassward]= useState('');
    const[isLoading,setisLoading]= useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        setisLoading(true)
        setError(null)

        try{
            await loginUser(email,passward)

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
            type="passward"
            placeholder="Password"
            value={passward}
            onChange={(e) => setPassward(e.target.value)}
            required
            className="login-input" 
            />

            <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? 'Logging in...' : 'Log In'}
            </button>


            </form>
            <p className="login-signup-prompt">
             Don't have an account? <span className="login-signup-link">Sign Up</span>
            </p>
        </div>
    )
}