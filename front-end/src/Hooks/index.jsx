import React, { useState, useEffect } from 'react';

const Index = (url) => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = fetch(url);
  }, []);
  return <div>index</div>;
};

export default Index;
