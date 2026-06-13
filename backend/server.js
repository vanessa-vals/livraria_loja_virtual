import express from "express";
import cors from "cors";

import routeCliente from "./src/routes/clienteRoutes.js";
import routeCategoria from "./src/routes/categoriaRoutes.js";
import routeCompra from "./src/routes/compraRoutes.js";
import routeEditora from "./src/routes/editoraRoutes.js";
import routeLivro from "./src/routes/livroRoutes.js";

const app = express();
const PORT = process.env.PORT_SERVER || 3006;

app.use(cors());
app.use(express.json());
app.use("/clientes", routeCliente);
app.use("/categorias", routeCategoria);
app.use("/compras", routeCompra);
app.use("/editoras", routeEditora);
app.use("/livros", routeLivro);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
