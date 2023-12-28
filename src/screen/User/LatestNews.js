import React, { useState } from 'react';
import i4 from '../../component/assets/images/i4.jpg';
import i5 from '../../component/assets/images/i5.jpg';
import i6 from '../../component/assets/images/i6.jpg';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const initialNews = [
    {
      id: 1,
      title: 'Kolakhet Hospital Unveils Advanced Medical Wing for Enhanced Patient Care',
      content: 'In a significant stride toward excellence, Kolakhet Hospital proudly introduces its new medical wing designed to elevate patient care standards. The state-of-the-art facility incorporates cutting-edge technology, spacious patient rooms, and advanced medical equipment. This expansion reaffirms our commitment to providing top-notch healthcare services, ensuring the well-being of our community.',
      date: 'September 5, 2023',
      image: i4,
    },
    {
      id: 2,
      title: 'Pioneering Research Initiatives at Kolakhet Hospital',
      content: 'Kolakhet Hospital embarks on groundbreaking research initiatives aimed at advancing medical knowledge and improving patient outcomes. Our dedicated team of researchers and healthcare professionals collaborates on innovative studies, exploring new treatments, and contributing to the global healthcare landscape. Stay tuned for updates on our transformative research endeavors.',
      date: 'September 12, 2023',
      image: i5,
    },
    {
      id: 3,
      title: 'Celebrating a Decade of Compassionate Healthcare Excellence',
      content: 'As we mark a decade of service, Kolakhet Hospital reflects on a journey of unwavering commitment to compassionate healthcare. From our humble beginnings to becoming a trusted healthcare institution, we express gratitude to our dedicated staff, supportive community, and valued patients. Here\'s to a decade of healing, growth, and continued excellence.',
      date: 'September 20, 2023',
      image: i6,
    }
  ];

  const [expandedNews, setExpandedNews] = useState([]);

  const handleSeeMore = (id) => {
    setExpandedNews([...expandedNews, id]);
  };

  const handleSeeLess = (id) => {
    setExpandedNews(expandedNews.filter(item => item !== id));
  };

  return (
    <div className="section relative pt-16 pb-16 bg-gray-100">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <h2 className="text-2xl leading-normal mb-6 font-bold text-black text-center">Our Latest News</h2>
        <div className="flex flex-wrap -mx-4">
          {initialNews.map(news => (
            <div key={news.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-xl p-6 h-full">
                <div className="mb-4">
                  <img src={news.image} alt={news.title} className="rounded-md w-full h-40 object-cover" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">{news.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                {news.content.length > 20 ? (
                  <div>
                    <p className={`text-gray-500 leading-relaxed ${expandedNews.includes(news.id) ? '' : 'truncate'}`}>
                      {news.content}
                    </p>
                    {!expandedNews.includes(news.id) && (
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleSeeMore(news.id)}
                      >
                        See More
                      </button>
                    )}
                    {expandedNews.includes(news.id) && (
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleSeeLess(news.id)}
                      >
                        See Less
                      </button>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500 leading-relaxed">{news.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
       <div className='text-center'>
       <Link to='/see/more/latest/news' >
            <button className=" mt-8 bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
              See more News
            </button>
          </Link>
       </div>
      </div>
    </div>
  );
};

export default LatestNews;
