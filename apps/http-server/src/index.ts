import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/singup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await prismaClient.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    message: "User is signed up",
    id: user.id,
  });
});

app.listen(3001, () => {
  console.log("your app is up and successfully running on port 3001");
});
