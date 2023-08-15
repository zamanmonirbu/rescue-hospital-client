import React, { useState } from 'react';


import i1 from '../../images/i1.jpg';
import i2 from '../../images/i2.jpg';
import i3 from '../../images/i3.jpg';
import i4 from '../../images/i4.jpg';
import i5 from '../../images/i5.jpg';
import i6 from '../../images/i6.jpg';



const LatestNewsSection = () => {
  const initialNews = [
    {
      id: 1,
      title: 'Exciting New Hospital Expansion',
      content: 'We are thrilled to announce the expansion of our hospital facilities to better serve our patients. Our new state-of-the-art wing is equipped with the latest medical technology and will provide top-notch healthcare services.',
      date: 'August 15, 2023', // Add post date here
      image: i4 // Add image URL here
    },
    {
      id: 2,
      title: 'Exciting New Hospital Expansion',
      content: 'We are thrilled to announce the expansion of our hospital facilities to better serve our patients. Our new state-of-the-art wing is equipped with the latest medical technology and will provide top-notch healthcare services.',
      date: 'August 15, 2023', // Add post date here
      image: i5 // Add image URL here
    },
    {
      id: 3,
      title: 'Exciting New Hospital Expansion',
      content: 'We are thrilled to announce the expansion of our hospital facilities to better serve our patients. Our new state-of-the-art wing is equipped with the latest medical technology and will provide top-notch healthcare services.',
      date: 'August 15, 2023', // Add post date here
      image: i6 // Add image URL here
    },
    {
      id: 4,
      title: 'Exciting New Hospital Expansion',
      content: 'We are thrilled to announce the expansion of our hospital facilities to better serve our patients. Our new state-of-the-art wing is equipped with the latest medical technology and will provide top-notch healthcare services.',
      date: 'August 15, 2023', // Add post date here
      image: i3 // Add image URL here
    },
    {
      id: 5,
      title: 'Exciting New Hospital Expansion',
      content: 'We are thrilled to announce the expansion of our hospital facilities to better serve our patients. Our new state-of-the-art wing is equipped with the latest medical technology and will provide top-notch healthcare services.',
      date: 'August 15, 2023', // Add post date here
      image:i1 // Add image URL here
    },
    {
      id: 6,
      title: 'Exciting New Hospital Expansion',
      content: 'We are thrilled to announce the expansion of our hospital facilities to better serve our patients. Our new state-of-the-art wing is equipped with the latest medical technology and will provide top-notch healthcare services.',
      date: 'August 15, 2023', // Add post date here
      image:i2 // Add image URL here
    },
    // Add more news items as needed
  ];

  const [newsList] = useState(initialNews);
  const [visibleNewsCount, setVisibleNewsCount] = useState(3);

  const handleSeeMoreClick = () => {
    setVisibleNewsCount(visibleNewsCount + 3);
  };

  return (
    <div className="section relative pt-16 pb-16 bg-gray-100">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <h2 className="text-2xl leading-normal mb-6 font-bold text-black">Our Latest News</h2>
        <div className="flex flex-wrap -mx-4">
          {newsList.slice(0, visibleNewsCount).map(news => (
            <div key={news.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-xl p-6 h-full">
                <div className="mb-4">
                  <img src={news.image} alt={news.title} className="rounded-md w-full h-40 object-cover" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">{news.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                <p className="text-gray-500 leading-relaxed">{news.content}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleNewsCount < newsList.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleSeeMoreClick}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestNewsSection;
