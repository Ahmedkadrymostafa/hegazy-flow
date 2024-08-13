import React from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  jobTitle: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, jobTitle, content, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="g-text">{jobTitle}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} />
        ))}
      </div>
      <p className="text-gray-700 text-center">{content}</p>
      <div className='w-fit mx-auto my-3'>
        <FaQuoteRight className='text-yellow-500 text-3xl' />
      </div>
    </div>
  );
};

export default TestimonialCard;
