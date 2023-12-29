import React, { useState } from 'react';
import { initialNews } from '../NewsData/NewsData';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


const LatestNewsSection = () => {
 

  const [expandedNews, setExpandedNews] = useState([]);

  const handleSeeMore = (id) => {
    setExpandedNews([...expandedNews, id]);
  };

  const handleSeeLess = (id) => {
    setExpandedNews(expandedNews.filter(item => item !== id));
  };

  return (
    <>
      <Navbar/>
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
      </div>
     
    </div>
    <Footer/>
    </>
   
  );
};

export default LatestNewsSection;
