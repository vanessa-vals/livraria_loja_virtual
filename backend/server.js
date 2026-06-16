import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import clienteRoutes from "./src/routes/clienteRoutes.js";
import userRouters from "./src/routes/userRoute.js";

dotenv.config();

const PORT = process.env.PORT_SERVER || 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/cliente", clienteRoutes);
app.use("/users", userRouters);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
