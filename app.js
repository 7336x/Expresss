const express = require("express");

const app = express();


app.get ("/reem",(request,response)=> {
    response.json({message: "Reem"}); // this is the massege that i want to show 
});

const PORT = process.env.PORT || 8000; // to open the server  in my environment

app.listen(8000, () => {
    console.log(`The server is running on port http://localhost:${PORT}`); // to open my server  and show my massege 
  });

