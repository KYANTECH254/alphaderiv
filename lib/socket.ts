import { Server } from "socket.io";

let io: Server | null = null;

export function initSocket(server: any) {
    if (!io) {
        io = new Server(server, {
            path: "/api/socket",
            cors: { origin: "*" },
        });

        io.on("connection", (socket) => {
            console.log("Client connected:", socket.id);

            socket.on("disconnect", () => {
                console.log("Client disconnected:", socket.id);
            });
        });
    }
}

export function getSocketInstance() {
    return io;
}
