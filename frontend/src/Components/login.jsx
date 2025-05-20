import { useState } from 'react';
import { API } from '../utils/api';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      alert('Logged in!');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" onChange={handleChange} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
