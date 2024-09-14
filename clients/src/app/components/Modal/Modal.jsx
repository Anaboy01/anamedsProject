import React, { useState } from 'react';

const ReusableModal = ({ show, type, onClose, title, description, handleSubmit, inputValue, handleInputChange }) => {
  

  

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(inputValue);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✖</button>
        </div>
        <div className="pt-4">
          <p className="text-gray-700 mb-4">{description}</p>
          <form onSubmit={onSubmit}>
            <input
              type={type}
              placeholder="Enter token"
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              value={inputValue}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReusableModal;
