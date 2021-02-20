import {Server, Model} from 'miragejs';

const makeServer = ({environment = `development`} = {}) => {
  return new Server({
    environment,

    models: {
      tasks: Model
    },

    seeds(server) {
      server.create(`task`, {
        text: `Walk the dog`,
        isMarked: false,
        isDone: false,
        isEditing: false,
      });
      server.create(`task`, {
        text: `Take out the trash`,
        isMarked: true,
        isDone: false,
        isEditing: false,
      });
      server.create(`task`, {
        text: `Work out`,
        isMarked: false,
        isDone: true,
        isEditing: false,
      });
      server.create(`task`, {
        text: `Be the best person in the world`,
        isMarked: true,
        isDone: true,
        isEditing: false,
      });
    },

    routes() {
      this.namespace = `api`;
      this.timing = 150;

      this.get(`/tasks`, (schema) => {
        return schema.tasks.all();
      });

      this.patch(`/tasks/:id`, (schema, request) => {
        let attrs = JSON.parse(request.requestBody).task;

        return schema.tasks.find(request.params.id).update(attrs);
      });

      this.post(
          `/tasks`,
          (schema, request) => {
            let attrs = JSON.parse(request.requestBody).task;

            return schema.tasks.create(attrs);
          },
          {timing: 100}
      );

      this.delete(`/tasks/:id`, (schema, request) => {
        return schema.tasks.find(request.params.id).destroy();
      });
    }
  });
};

export default makeServer;
