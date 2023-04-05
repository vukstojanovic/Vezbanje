// src/mocks/server.js
import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:4000/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: "Post 1", author: "Vuk" },
        { id: 2, title: "Post 2", author: "Aca" },
        { id: 3, title: "Post 3", author: "Misha" },
      ])
    );
  }),
];
