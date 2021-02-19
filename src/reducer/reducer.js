import API from '../api/api';

const getUpdatedTasks = (id, state, controlType) => {
  const taskId = id;
  const task = state.tasks.find((item) => item.id === taskId);

  const newTask = Object.assign({}, task, {
    [controlType]: !task[controlType],
  });

  const indexOfTaskToModify = state.tasks.findIndex((item) => item.id === taskId);
  const tasksCopy = state.tasks.slice();
  tasksCopy[indexOfTaskToModify] = newTask;

  return tasksCopy;
};

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case `FETCH_TASKS_REQUEST`:
      return Object.assign({}, state, {
        tasks: action.payload,
        loading: false,
      });
    case `TOGGLE_MARKED_FLAG`:
      return Object.assign({}, state, {
        tasks: getUpdatedTasks(action.payload.id, state, action.payload.controlType),
      });
    case `TOGGLE_DONE_FLAG`:
      return Object.assign({}, state, {
        tasks: getUpdatedTasks(action.payload.id, state, action.payload.controlType),
      });
    case `DELETE_TASK`: {
      const id = action.payload;
      const indexOfTaskToDelete = state.tasks.findIndex((item) => item.id === id);
      const tasksCopy = state.tasks.slice();
      tasksCopy.splice(indexOfTaskToDelete, 1);
      return Object.assign({}, state, {
        tasks: tasksCopy,
      });
    }
    case `EDIT_TASK`:
      return Object.assign({}, state, {
        tasks: getUpdatedTasks(action.payload.id, state, action.payload.controlType),
      });
    case `EDIT_TASK_SAVE`: {
      const taskId = action.payload.id;
      const task = state.tasks.find((item) => item.id === taskId);

      const newTask = Object.assign({}, task, {
        text: action.payload.text,
        isEditing: false,
      });

      const indexOfTaskToModify = state.tasks.findIndex((item) => item.id === taskId);
      const tasksCopy = state.tasks.slice();
      tasksCopy[indexOfTaskToModify] = newTask;

      return Object.assign({}, state, {
        tasks: tasksCopy,
      });
    } // refactor

  }

  return state;
};

export const ActionCreator = {
  getTasks: (tasks) => {
    return {
      type: `FETCH_TASKS_REQUEST`,
      payload: tasks
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
  editTaskSave: (id, newText) => {
    return {
      type: `EDIT_TASK_SAVE`,
      payload: {
        id,
        text: newText,
      }
    };
  }
};

export const fetchTasks = () => () => (dispatch) => {
  API.getTasks()
    .then((data) => dispatch(ActionCreator.getTasks(data)));
};
