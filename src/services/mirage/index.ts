import {
  createServer,
  Factory,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import { models } from "./models";
import faker from "faker";

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: models,

    factories: {
      user: Factory.extend({
        name(i: number) {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10, new Date());
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user"))
          .users.slice(pageStart, pageEnd)


        return new Response(
          200,
          {
            "x-total-count": String(total),
          },
          {
            users,
          }
        );
      });

      this.post("/users");
      this.post("/users/:id");

      // Volta pro estado inical para nao confudir com a pasta api que o next lê, onde colocamos as rotas de api (caso ela exista)
      this.namespace = "";

      // Se nao for detectada pelas rotas do mirage, passa adiante e usa a rota comum do projeto
      this.passthrough();
    },
  });

  return server;
}
