import React from 'react';
import FAQAccordion from './FAQAccordion';

const faqs = [
  {
    question: 'How are payments controlled?',
    answer: 'Payments are controlled through our secure online payment portal, which ensures the highest level of security for your financial information. We also accept payments in person at our facility. You can choose from various payment methods, including credit cards, debit cards, and bank transfers. Our billing department is available to assist you with any questions.',
  },
  {
    question: 'Can a patient get service 24 hours?',
    answer: 'Yes, our facility provides round-the-clock services to ensure that patients receive the care they need at any time of day or night. Our medical staff, including doctors and nurses, are available 24/7 to handle emergencies, administer treatments, and provide support. This ensures continuous, high-quality care for all our patients.',
  },
  {
    question: 'How to cancel an appointment?',
    answer: 'To cancel an appointment, you can call our office directly at least 24 hours before your scheduled time. Alternatively, you can use our online portal to manage your appointments, including cancellations. This helps us accommodate other patients and maintain an efficient schedule. Our support team is also available to assist with cancellations.',
  },
  {
    question: 'Location?',
    answer: 'We are conveniently located at 123 Healthcare Street, Medical City, in the heart of the downtown area. Our facility is easily accessible by public transportation and has ample parking space for those who prefer to drive. We are close to major landmarks and amenities, making it easy for patients and visitors to find us.',
  },
  {
    question: 'Number of doctors and nurses?',
    answer: 'Our facility boasts a dedicated team of over 50 highly qualified doctors and more than 200 skilled nurses. This diverse and experienced medical staff is committed to providing exceptional care to our patients. Our team covers a wide range of specialties and is equipped to handle various medical conditions and treatments.',
  },
  {
    question: 'Is air conditioning available?',
    answer: 'Yes, our entire facility is fully air-conditioned to ensure the comfort and well-being of our patients, visitors, and staff. We maintain a controlled indoor climate to provide a pleasant and conducive environment for recovery. This is especially important during the warmer months, ensuring that everyone remains comfortable throughout their stay.',
  },
  {
    question: 'How much is the payment for general and VIP cabins?',
    answer: 'The cost of staying in a general cabin is $100 per day, offering essential amenities and comfortable accommodations. For those seeking additional privacy and luxury, our VIP cabins are available at $250 per day. These cabins provide enhanced facilities and personalized services to ensure a premium experience for our patients.',
  },
  {
    question: 'Extra facilities',
    answer: 'The cost of staying in a general cabin is $100 per day, offering essential amenities and comfortable accommodations. For those seeking additional privacy and luxury, our VIP cabins are available at $250 per day. These cabins provide enhanced facilities and personalized services to ensure a premium experience for our patients.',
  },
];



const FAQAccordionData = () => {
  return (
    <div>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default FAQAccordionData;
