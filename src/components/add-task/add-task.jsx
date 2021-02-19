import React from 'react';

const AddTask = () => {
  return (
    <div className="max-w-sm md:max-w-md mx-auto my-5 flex">
      <input className="w-1/2 md:w-1/2 p-3 mr-3 rounded-xl shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="New task..."></input>
      <button className="w-1/2 md:w-1/2 p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Add task</button>
    </div>
  );
};

export default AddTask;
