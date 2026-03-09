import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// REST Routes
app.post("/login", async (req, res) => {
  const { username } = req.body;
  
  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  let user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    user = await prisma.user.create({
      data: { username },
    });
  }

  res.json(user);
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get("/messages", async (req, res) => {
  const messages = await prisma.message.findMany({
    include: {
      sender: true,
    },
    orderBy: {
      createdAt: "asc"
    }
  });
  res.json(messages);
});

// Socket.io Handlers
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("send_message", async (data) => {
    try {
      // Save message to database
      const savedMessage = await prisma.message.create({
        data: {
          text: data.text,
          senderId: data.senderId,
        },
        include: {
          sender: true,
        }
      });
      // Broadcast to all clients including sender
      io.emit("receive_message", savedMessage);
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
