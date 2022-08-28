import React, { useEffect, useState } from 'react';
import './news.css';
const News = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData('./data.json');
  }, []);

  const getData = (data) => {
    fetch(data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  };

  return (
    <div className="news-container">
      <h4 className="news-header">News Today</h4>
      {items.map((item, i) => (
        <ul key={i} className="news-items-container">
          <li className="news-items">
            {item.date}
            <br />
            {item.headline}
          </li>
          <hr />
        </ul>
      ))}
    </div>
  );
};

export default News;
