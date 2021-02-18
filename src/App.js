import React from 'react';

function App() {
  return (
    <div className="container min-h-screen py-36 mx-auto font-sans bg-gray-300">
      <header className="p-6 max-w-sm mx-auto text-center font-bold text-xl">Cooler Todo App</header>
      <main>
        <div className="max-w-sm md:max-w-md mx-auto my-5 flex justify-between">
          <input className="w-40 md:w-56 p-3 rounded-xl shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Search"></input>
          <button className="p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">All</button>
          <button className="p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Marked</button>
          <button className="p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Done</button>
        </div>

        <div>
          <ul>
            <li className="p-6 max-w-sm md:max-w-md mx-auto my-5 bg-white rounded-xl shadow-md flex justify-between items-center space-x-4 bg-purple-300">
              <p className="w-50 md:w-3/5 text-lg font-medium text-black">Another cool task</p>

              <div className="space-x-2">

                <button>
                  <svg className="w-6 h-6 hover:fill-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>

                <button>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </button>

                <button>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>

                <button>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </li>

            <li className="p-6 max-w-sm md:max-w-md mx-auto my-5 bg-white rounded-xl shadow-md flex justify-between items-center space-x-4 bg-purple-300">
              <p className="w-50 md:w-3/5 text-lg font-medium text-black">Some task</p>

              <div className="space-x-2">

                <button>
                  <svg className="w-6 h-6 hover:fill-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>

                <button>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </button>

                <button>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>

                <button>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </li>

          </ul>

        </div>

        <div className="max-w-sm md:max-w-md mx-auto my-5 flex">
          <input className="w-1/2 md:w-1/2 p-3 mr-3 rounded-xl shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="New task..."></input>
          <button className="w-1/2 md:w-1/2 p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Add task</button>
        </div>
      </main>
    </div>
  );
}

export default App;
