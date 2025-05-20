
import { useEffect, useState } from 'react';
import { API } from '../utils/api';

function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await API.get('/protected', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(res.data.message);
      } catch {
        setMessage('Unauthorized');
      }
    };
    fetchData();
  }, []);

  return <h2>{message}</h2>;
}

export default Dashboard;
