import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  // Add login form handling here

  return (
    <div>
      <h2>Login</h2>
      <form>
        {/* Login form inputs */}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default Login;
