import { createServer, Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

type User = {
  name: string;
  email: string;
  create_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.person.fullName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          const options = { days: 10, refDays: new Date() };
          return faker.date.recent(options);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 700;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
