import React, { useState } from 'react';
import Star from '../Star/Star';


const MyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    message: ''
  });
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const maxLength = 1000;
    setFormData({
      ...formData,
      [name]: value
    });
    setCharCount(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      message: ''
    });
    setCharCount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Star />
      </div>
      <div className='grid gap-4 my-[20px] p-5'>
        <label className='text-gray-500'>Izoh:</label>
        <textarea className='border border-gray-400 rounded-lg outline-none p-2'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          maxLength={1000}
          required
          cols="30" rows="5"
        />
        <div className=" ">
          <span className='float-end'>
           {charCount} / 1000
          </span>
          {charCount > 1000 && (
            <span className="text-red-500">Exceeded character limit!</span>
          )}
        </div>
      </div>
      <button type="submit" className='w-full bg-[#77BF44] my-4 p-2 rounded-full text-white font-[700] hover:bg-[#77BF10]'>Baholash</button>
    </form>
  );
};

export default MyForm;
