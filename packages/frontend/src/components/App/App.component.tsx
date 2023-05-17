import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const App: React.FC = () => {
  const [cats, setCats] = useState(0);

  return <p>cats amount: {cats}</p>;
};
