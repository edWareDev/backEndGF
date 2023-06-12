import express from "express";
import { PORT } from "../config/server.config.js";
import { engine } from "express-handlebars";
import { apiRouter } from "../routers/api.router.js";
import { viewsRouter } from "../routers/views.router.js";
import { conectar } from "../database/mongoose.js";
import session from '../middlewares/session.js'
import { autenticacion } from '../middlewares/autenticacion.js'
import cors from "cors";
// import { Server as SocketIOServer } from 'socket.io'
// import { chatsManager } from "../dao/mongoose.chats.manager.js";

const app = express();
app.use(cors());
app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use(express.static('./public'))
app.use(express.json())

app.use(session)

app.use('/api', apiRouter)
app.use('/', viewsRouter)

await conectar()

const httpServer = app.listen(PORT, () => { console.log(`Conectado al servidor mediante el puerto: ${PORT}`); });

// TODO ESTO ES PARA EL CHAT
// const io = new SocketIOServer(httpServer)

// io.on('connection', async clientSocket => {
//     console.log(`nuevo cliente conectado! socket id #${clientSocket.id}`)

//     clientSocket.on('nuevoMensaje', async mensaje => {
//         await chatsManager.addChat({ ...mensaje, date: Date.now() })
//         const mensajes = await chatsManager.getChats()
//         io.sockets.emit('actualizarMensajes', mensajes)
//     })

//     clientSocket.on('nuevoIngreso', async () => {
//         const mensajes = await chatsManager.getChats()
//         io.sockets.emit('actualizarMensajes', mensajes)
//     })
// })
