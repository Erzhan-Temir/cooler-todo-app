import {createSelector} from 'reselect';

const getSearchKeyword = (state) => state.searchKeyword;
const getFilter = (state) => state.filter;
const getTasks = (state) => state.tasks;

const searchSelector = createSelector(
    [getTasks, getSearchKeyword],
    (tasks, searchKeyword) => tasks.filter((task) => {
      return task.text.indexOf(searchKeyword) > -1;
    })
);

const filterSelector = createSelector(
    [searchSelector, getFilter],
    (tasks, filter) => {
      switch (filter) {
        case `All`:
          return tasks;
        case `Marked`:
          return tasks.slice().filter((task) => task.isMarked === true);
        case `Done`:
          return tasks.slice().filter((task) => task.isDone === true);
        default:
          return tasks;
      }
    }
);

export default filterSelector;
