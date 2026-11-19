import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="auth-container">
      <h1>Welcome Back</h1>
      <p>Login to Voices of Heritage</p>

      <form onSubmit={(e) => {
  e.preventDefault();
  alert('Login form submitted successfully!');
}}>
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>
      <p>
  Don't have an account? <Link to="/register">Register</Link>
</p>
    </div>
  );
}

export default Login;