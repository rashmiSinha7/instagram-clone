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
  http.get("*/user/home", async () => {
    const response = await import ("./data/mock_instagram_home.json");
    return HttpResponse.json(response.default);
  }),
];

export default handlers;
