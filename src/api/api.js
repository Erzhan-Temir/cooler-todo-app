import axios from 'axios';

const API = {
  base: axios.create({
    baseURL: `api`,
    timeout: 2000,
    headers: {"Content-type": `application/json`}
  }),
  getTasks() {
    return this.base.get(`/tasks`);
  },
  addTask(task) {
    return this.base.post(`tasks`, {
      task
    });
  },
  deleteTask(id) {
    return this.base.delete(`tasks/${id}`, {
      id
    });
  },
  patchTask(task) {
    const {id} = task;
    return this.base.patch(`tasks/${id}`, {
      task
    });
  }
};

export default API;
