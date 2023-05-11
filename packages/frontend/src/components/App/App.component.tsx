import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const App: React.FC = () => {
  const [cats, setCats] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/get-cats-amount').then(({ data }) => {
      setCats(Number(data));
    });
  }, []);

  return <p>cats amount: {cats}</p>;
};
