import { NextApiRequest } from "next";
import { Server as HttpServer } from "http";
import { initSocket } from "@/lib/socket";

export default function handler(req: NextApiRequest, res: any) {
    if (!res.socket.server.io) {
        console.log("Initializing WebSocket...");
        initSocket(res.socket.server as HttpServer);
        res.socket.server.io = true;
    }

    res.end();
}
