var arr = new Array();
const router = async function (req, res) {
  // FOR THE GET
  if (req.url === "/api/my_name" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(arr));
  }

  //  FOR THE POST
  if (req.url === "/api/save_name" && req.method === "POST") {
    try {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question(
        "Please, enter the name do you like to add to your array file?",
        (new_name) => {
          console.log(`${new_name} successfully added !`);
          arr.push(new_name);
          readline.close();
        }
      );

      let body = "Kindlt add all new names through the terminal";
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify(body));
    } catch (error) {
      console.log(error);
    }
  }

  //   FOR PUT
  //   if (req.url.match(/\/api\/blogs\/([0-9]+)/) && req.method === "PUT") {
  //     try {
  //       // extract id from url
  //       const id = req.url.split("/")[3];

  //       let body = "";

  //       //listen for data event
  //       req.on("data", (chunk) => {
  //         body += chunk.toString();
  //       });

  //       req.on("end", async () => {
  //         let updatedBlog = await Blog.findByIdAndUpdate(id, JSON.parse(body), {
  //           new: true,
  //         });

  //         // set the status code and content-type
  //         res.writeHead(200, { "Content-Type": "application/json" });
  //         //send response
  //         res.end(JSON.stringify(updatedBlog));
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   // FOR DELETE:
  //   if (req.url.match(/\/api\/blogs\/([0-9]+)/) && req.method === "DELETE") {
  //     try {
  //       // extract id from url
  //       const id = req.url.split("/")[3];
  //       // delete blog
  //       await Blog.findByIdAndDelete(id);
  //       // set the status code and content-type
  //       res.writeHead(200, { "Content-Type": "application/json" });
  //       // send the message
  //       res.end(JSON.stringify({ message: "Blog deleted sucessfully" }));
  //     } catch (error) {
  //       // set the status code and content-type
  //       res.writeHead(404, { "Content-Type": "application/json" });
  //       // send the error
  //       res.end(JSON.stringify({ message: error }));
  //     }
  //   }
};

module.exports = router;
