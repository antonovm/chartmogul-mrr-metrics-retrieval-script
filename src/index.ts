import http from "http";
import { config } from "dotenv";
import getMrrInfo from "./lib/getMrrInfo";
import { mrrDates } from "./config";

config();

export const server = http.createServer();

server.on("request", async (req, res) => {
  const mrrInfo = await getMrrInfo(mrrDates.startDate, mrrDates.endDate);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(mrrInfo));
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
