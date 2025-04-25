// mocks/handlers.js
import { http, HttpResponse } from "msw";

const handlers = [
  http.post("*/api/login", () => {
    return HttpResponse.json({
      id: "123",
      token: "asbcdgg",
      userName: "Rashmi",
      role: "user",
    });
  }),
  http.get("*/user/details", async () => {
    const response = await import("./data/user_details.json");
    return HttpResponse.json(response.default);
  }),
  http.get("*/user/stories", async () => {
    const response = await import("./data/stories.json");
    return HttpResponse.json(response.default);
  }),
  http.get("*/user/feeds", async () => {
    const response = await import("./data/posts.json");
    return HttpResponse.json(response.default);
  }),
];

export default handlers;
