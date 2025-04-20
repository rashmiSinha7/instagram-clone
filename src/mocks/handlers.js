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
  http.post("*/api/login", () => {
    return HttpResponse.json({
      id: "123",
      token: "asbcdgg",
      userName: "Rashmi",
      role: "user",
    });
  }),
];

export default handlers;
