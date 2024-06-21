import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  // Add registration form handling here

  return (
    <div>
      <h2>Register</h2>
      <form>
        {/* Registration form inputs */}
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}

export default Register;
