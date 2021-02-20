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
    case `FETCH_TASKS_REQUEST`: {
      return Object.assign({}, state, {
        loading: true,
      });
    }
    case `FETCH_TASKS_SUCCESS`: {
      return Object.assign({}, state, {
        tasks: action.payload,
        loading: false,
      });
    }
    case `ADD_TASK`: {
      const newTasksArr = state.tasks.slice();
      newTasksArr.push(action.payload);
      return Object.assign({}, state, {
        tasks: newTasksArr,
        loading: false,
      });
    }
    case `DELETE_TASK`: {
      const id = action.payload;
      const indexOfTaskToDelete = state.tasks.findIndex((item) => item.id === id);
      const tasksCopy = state.tasks.slice();
      tasksCopy.splice(indexOfTaskToDelete, 1);
      return Object.assign({}, state, {
        tasks: tasksCopy,
        loading: false,
      });
    }
    case `EDIT_TASK`: {
      return Object.assign({}, state, {
        tasks: getUpdatedTasks(action.payload.id, state, action.payload.controlType),
      });
    }
    case `EDIT_TASK_SAVE`: {
      const task = action.payload;
      const newTask = Object.assign({}, task, {
        isEditing: false,
      });
      const indexOfTaskToModify = state.tasks.findIndex((item) => item.id === task.id);
      const tasksCopy = state.tasks.slice();
      tasksCopy[indexOfTaskToModify] = newTask;

      return Object.assign({}, state, {
        tasks: tasksCopy,
        loading: false
      });
    }
    case `TOGGLE_MARKED_FLAG`: {
      return Object.assign({}, state, {
        tasks: getUpdatedTasks(action.payload.id, state, action.payload.controlType),
      });
    }
    case `TOGGLE_DONE_FLAG`: {
      return Object.assign({}, state, {
        tasks: getUpdatedTasks(action.payload.id, state, action.payload.controlType),
      });
    }
    case `SET_SEARCH_KEYWORD`: {
      return Object.assign({}, state, {
        searchKeyword: action.payload
      });
    }
    case `SET_FILTER`: {
      return Object.assign({}, state, {
        filter: action.payload
      });
    }
    case `CATCH_ERROR`: {
      return Object.assign({}, state, {
        hasError: true,
      });
    }
  }

  return state;
};
