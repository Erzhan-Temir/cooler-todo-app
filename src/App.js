import React from 'react';
import {compose} from 'redux';

import Header from './components/header/header';
import Search from './components/search/search';
import TaskList from './components/task-list/task-list';
import AddTask from './components/add-task/add-task';
import withReduxConnect from './containers/with-redux-connect';
import withLoading from './containers/with-loading';
import withHandlersAddTask from './containers/with-handlers-add-task';
import withHandlersSearch from './containers/with-handlers-search';
import withEmptyList from './containers/with-empty-list';

const SearchWrapped = withHandlersSearch(Search);
const TaskListWrapped = compose(
    withReduxConnect,
    withLoading,
    withEmptyList
)(TaskList);
const AddTaskWrapped = withHandlersAddTask(AddTask);


function App() {
  return (
    <div className="container min-h-screen py-36 mx-auto font-sans bg-gray-300">
      <Header />
      <main>
        <SearchWrapped />

        <TaskListWrapped />

        <AddTaskWrapped />
      </main>
    </div>
  );
}

export default App;
