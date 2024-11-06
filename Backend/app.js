import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

import listaPaisesRouter from "./routes/listaPaises.router.js"

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app
    .use("/api/AvailableCountries", listaPaisesRouter)

app
    .use(errorHandler)
    .use(notFound);

    async function start() {
        const PORT = process.env.PORT || 3000;
    
        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
        });
    }
    
    await start();
    
    export default app;