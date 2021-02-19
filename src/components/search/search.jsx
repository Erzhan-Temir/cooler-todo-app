import React from 'react';

const Search = () => {
  return (
    <div className="max-w-sm md:max-w-md mx-auto my-5 flex justify-between">
      <input className="w-40 md:w-56 p-3 rounded-xl shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Search"></input>
      <button className="p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">All</button>
      <button className="p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Marked</button>
      <button className="p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Done</button>
    </div>
  );
};

export default Search;
