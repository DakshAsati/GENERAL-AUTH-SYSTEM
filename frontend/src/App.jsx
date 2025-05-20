import Login from './Components/login';
import Register from './Components/register';
import Dashboard from './Components/dashboard';

function App() {
  return (
    <div>
      <h1>MERN Auth</h1>
      <Register />
      <Login />
      <Dashboard />
    </div>
  );
}

export default App;
