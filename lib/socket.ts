import { Server } from "socket.io";
import { Server as HttpServer } from "http";

let io: Server | null = null;

export function initializeSocket(server: HttpServer) {
    if (!io) {
        io = new Server(server, {
            cors: { origin: "*" },
        });

        io.on("connection", (socket) => {
            console.log("New client connected:", socket.id);

            socket.on("disconnect", () => {
                console.log("Client disconnected:", socket.id);
            });
        });

        console.log("Socket.IO server initialized!");
    }
    return io;
}

export function getSocketInstance() {
    return io;
}
