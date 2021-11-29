import dotenv from "dotenv";
import http from "http";
import httpStatus from "http-status-codes";
import { mongodb } from "./mongodb.js";

dotenv.config();
const port = 3000,
  app = http.createServer(async (req, res) => {
    // httpStatus.OK:200
    res.writeHead(httpStatus.OK, {
      "Content-Type": "application/json",
    });

    if (req.method === "POST") {
      var postData = "";

      req
        .on("data", async function (chunk) {
          console.log(`BODY: ${chunk}`);

          await mongodb(JSON.parse(chunk));
          postData += chunk;
        })
        .on("end", function () {
          res.end("あなたが送信したのは、" + postData);
        });
    }
    const result = await mongodb(req);

    res.end(JSON.stringify(result));
  });

app.listen(port);

console.log(`The server has started and is listening on port number: ${port}`);
