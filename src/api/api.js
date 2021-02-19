const tasks = [
  {
    id: 1,
    text: `Walk the dog`,
    isMarked: false,
    isDone: false,
    isEditing: false,
  },
  {
    id: 2,
    text: `Take out the trash`,
    isMarked: true,
    isDone: false,
    isEditing: false,
  },
  {
    id: 3,
    text: `Work out`,
    isMarked: false,
    isDone: true,
    isEditing: false,
  },
  {
    id: 4,
    text: `Be the best person in world`,
    isMarked: true,
    isDone: true,
    isEditing: false,
  }
];

// DON"T FORGET DO ADD FEATURE OF CANCELLING REQUESTS

const API = {
  getTasks: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tasks);
      }, 100);
    });
  },
};

export default API;
