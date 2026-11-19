import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="auth-container">
      <h1>Create Account</h1>
      <p>Join Voices of Heritage!</p>

     <form onSubmit={(e) => {
  e.preventDefault();
  alert('Registration form submitted successfully!');
}}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Register</button>
      </form>
      <p>
  Already have an account? <Link to="/login">Login</Link>
</p>
    </div>
  );
}

export default Register;