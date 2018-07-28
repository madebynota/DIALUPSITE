// Ecosystem definition for PM2

module.exports = {
  apps : [
      {
        name: "server",
        script: "./src/server.js",
        watch: true,
        env: {
            "PORT": 80,
            "NODE_ENV": "production"
        },
      }
  ]
}
