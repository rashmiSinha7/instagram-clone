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
  http.get("*/user/details", async () => {
    const response = await import ("./data/user_details.json");
    return HttpResponse.json(response.default);
  }),
];

export default handlers;
