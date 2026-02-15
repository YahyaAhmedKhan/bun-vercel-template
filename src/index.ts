import express from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Bun + Express!");
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "online",
    runtime: "Bun",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`\n✅ Express server is running!`);
  console.log(`🔗 Local: http://localhost:${port}`);
});