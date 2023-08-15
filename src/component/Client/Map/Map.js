import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.9468474899943!2d90.3633707!3d22.6577518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375535b06f1b4c1f%3A0x466be2e41df61edc!2sBarishal%20University%20Central%20Masjid!5e0!3m2!1sen!2sbd!4v1691945295773!5m2!1sen!2sbd"
      width="600"
      height="450"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;
