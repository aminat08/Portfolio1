import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    
    const fetchData = async () => {
        try {
            const response = await axios.post("https://scrmapi.tranquility.org.ng/api/News/AddNews");
            setNews(response.data); 
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError('Failed to fetch news'); 
            setLoading(false);
        }
    };

    fetchData(); 
  }, []); 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">All News</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading news...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {news.map((newsItem, index) => (
                <li key={index} className="border-b border-gray-300 pb-4">
                  <h3 className="text-xl font-semibold">{newsItem.title}</h3>
                  <p className="text-gray-700">{newsItem.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
