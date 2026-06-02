import compraModel from "../models/compraModel.js";

class CompraController {
  async showCompra(req, res) {
    try {
      const allCompra = await compraModel.showCompra();

      if (allCompra.length === 0) {
        return res.status(200).json({ message: "Nenhuma compra encontrada!" });
      }
      return res.status(200).json(allCompra);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getCompraById(req, res) {
    try {
      const id = Number(req.params.id);
      const compra = await compraModel.getCompraById(id);

      if (!compra || compra.length === 0) {
        return res.status(404).json({ error: "Compra não encontrada" });
      }

      return res.status(200).json(compra);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createCompra(req, res) {
    try {
      const { qtde, valor, desconto, id_livro, id_cliente } = req.body;

      if (qtde === undefined || valor === undefined || desconto === undefined || id_livro === undefined || id_cliente === undefined) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      const createCompra = await compraModel.createCompra(req.body);

      if (createCompra.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Não foi possível realizar o cadastro!" });
      }

      return res
        .status(201)
        .json({ message: "Compra realizada com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateCompra(req, res) {
    try {
      const id = Number(req.params.id);
      const { qtde, valor, desconto, id_livro, id_cliente } = req.body;

      if (qtde === undefined || valor === undefined || desconto === undefined || id_livro === undefined || id_cliente === undefined) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      const updateCompra = await compraModel.updateCompra(id, req.body);

      if (updateCompra.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Não foi possível realizar a Atualização!" });
      }

      return res
        .status(200)
        .json({ message: "Compra atualizada com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteCompra(req, res) {
    try {
      const id = Number(req.params.id);

      const deleteCompra = await compraModel.deleteCompra(id);

      if (deleteCompra.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Não foi possível deletar dados da compra!" });
      }

      return res.status(200).json({ message: "Compra deletada com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new CompraController();
