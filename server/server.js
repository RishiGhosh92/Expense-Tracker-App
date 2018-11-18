const path = require("path");
const Hapi = require("hapi");
const publicPath = path.join(__dirname, "..", "public");
const Inert = require("inert");
const port = process.env.PORT || 3000;

const server = Hapi.server({
  port: port
});

const init = async () => {
  // register static content plugin
  await server.register(Inert);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  // index route / homepage
  server.route({
    method: "GET",
    path: "/create",
    handler: (req, res) => {
      return res.file(path.join(publicPath, "index.html"));
    }
  });

  server.route({
    method: "GET",
    path: "/help",
    handler: (req, res) => {
      return res.file(path.join(publicPath, "index.html"));
    }
  });

  server.route({
    method: "GET",
    path: "/{params*}",
    handler: {
      directory: {
        path: publicPath
      }
    }
  });
};

init();
