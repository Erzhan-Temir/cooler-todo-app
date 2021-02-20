import API from '../api/api';

export const ActionCreator = {
  fetchTasks: () => {
    return {
      type: `FETCH_TASKS_REQUEST`
    };
  },
  getTasks: (tasks) => {
    return {
      type: `FETCH_TASKS_SUCCESS`,
      payload: tasks
    };
  },
  addTask: (task) => {
    return {
      type: `ADD_TASK`,
      payload: task,
    };
  },
  deleteTask: (id) => {
    return {
      type: `DELETE_TASK`,
      payload: id,
    };
  },
  editTask: (id) => {
    return {
      type: `EDIT_TASK`,
      payload: {
        id,
        controlType: `isEditing`,
      }
    };
  },
  editTaskSave: (newTask) => {
    return {
      type: `EDIT_TASK_SAVE`,
      payload: newTask
    };
  },
  toggleMarkedFlag: (id) => {
    return {
      type: `TOGGLE_MARKED_FLAG`,
      payload: {
        id,
        controlType: `isMarked`,
      }
    };
  },
  toggleDoneFlag: (id) => {
    return {
      type: `TOGGLE_DONE_FLAG`,
      payload: {
        id,
        controlType: `isDone`,
      }
    };
  },
  setSearchKeyword: (text) => {
    return {
      type: `SET_SEARCH_KEYWORD`,
      payload: text
    };
  },
  setFilter: (filter) => {
    return {
      type: `SET_FILTER`,
      payload: filter
    };
  }
};

export const fetchTasks = () => () => (dispatch) => {
  dispatch(ActionCreator.fetchTasks());
  API.getTasks()
    .then((response) => dispatch(ActionCreator.getTasks(response.data.tasks)));
};

export const fetchAddTask = () => (text) => (dispatch) => {
  dispatch(ActionCreator.fetchTasks());
  const newTask = {
    text,
    isMarked: false,
    isDone: false,
    isEditing: false,
  };
  API.addTask(newTask)
    .then((response) => dispatch(ActionCreator.addTask(response.data.tasks)));
};

export const fetchDeleteTask = () => (id) => (dispatch) => {
  dispatch(ActionCreator.fetchTasks());
  API.deleteTask(id)
    .then((response) => dispatch(ActionCreator.deleteTask(response.config.id)));
};

export const fetchPatchTask = () => (task) => (dispatch) => {
  dispatch(ActionCreator.fetchTasks());
  API.patchTask(task)
    .then((response) => dispatch(ActionCreator.editTaskSave(response.data.tasks)));
};
