import React from 'react';
import {compose} from 'redux';

import Header from './components/header/header';
import Search from './components/search/search';
import withReduxConnect from './containers/with-redux-connect';
import TaskList from './components/task-list/task-list';
import AddTask from './components/add-task/add-task';
import withLoading from './containers/with-loading';

const TaskListWrapped = compose(
    withReduxConnect,
    withLoading
)(TaskList);

function App() {
  return (
    <div className="container min-h-screen py-36 mx-auto font-sans bg-gray-300">
      <Header />
      <main>
        <Search />

        <TaskListWrapped />

        <AddTask />
      </main>
    </div>
  );
}

export default App;
