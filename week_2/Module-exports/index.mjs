import server from "../../week_1/Build-in-Modules-and-Asynchronous/server.js";
import callApi from "../../week_1/Event-loop-non-blocking-I-O/callApi.mjs";

callApi();

server.listen(3000, () => {
  console.log("Module Exports Server is listening on port 3000");
});
