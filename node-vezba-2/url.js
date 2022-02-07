const url = require("url");

const adress =
  "https://forum.krstarica.com/search/381043/?q=clue&t=post&c[child_nodes]=1&c[nodes][0]=19&o=relevance";

const parsedUrl = url.parse(adress, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query.t);
