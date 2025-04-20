// mocks/handlers.js
import { http, HttpResponse } from "msw";

const handlers = [
  http.get("*/api/users", ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      title: "Porcelain Mug",
      price: 9.99,
    });
  }),
];

export default handlers;
