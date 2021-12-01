import dotenv from "dotenv";
import http from "http";
import httpStatus from "http-status-codes";
import { mongodb } from "./mongodb.js";

dotenv.config();
const port = 3030,
  app = http.createServer(async (req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
    };
    // httpStatus.OK:200

    if (req.method === "POST") {
      res.writeHead(httpStatus.OK, headers);
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
