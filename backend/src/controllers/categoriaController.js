import categoriaModel from "../models/categoriaModel.js";

class CategoriaController {
  async showCategoria(req, res) {
    try {
      const allCategorias = await categoriaModel.showCategoria();

      if (allCategorias.length === 0) {
        return res
          .status(200)
          .json({ message: "Nenhuma categoria encontrada!" });
      }
      return res.status(200).json(allCategorias);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getCategoriaById(req, res) {
    try {
      const id = Number(req.params.id);
      const categoria = await categoriaModel.getCategoriaById(id);

      if (!categoria || categoria.length === 0) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }

      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createCategoria(req, res) {
    try {
      const { categoria } = req.body;

      if (categoria === "" || !categoria) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      const findCategoria =
        await categoriaModel.getCategoriaById(categoria);
      if (findCategoria) {
        return res.status(400).json({ message: "Categoria já cadastrada!" });
      }

      const createCategoria = await categoriaModel.createCategoria(req.body);

      if (createCategoria.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Não foi possível cadastrar a categoria!" });
      }

      return res
        .status(201)
        .json({ message: "Categoria cadastrada com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateCategoria(req, res) {
    try {
      const id = Number(req.params.id);
      const { categoria } = req.body;

      if (categoria === "" || !categoria) {
        return res
          .status(400)
          .json({ message: "Campos de preenchimento obrigatórios" });
      }

      const updateCategoria = await categoriaModel.updateCategoria(
        id,
        req.body,
      );

      if (updateCategoria.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Não foi possível atualizar a categoria!" });
      }

      return res
        .status(200)
        .json({ message: "Categoria atualizada com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteCategoria(req, res) {
    try {
      const id = Number(req.params.id);

      const deleteCategoria = await categoriaModel.deleteCategoria(id);

      if (deleteCategoria.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Não foi possível deletar a categoria!" });
      }

      return res
        .status(200)
        .json({ message: "Categoria deletada com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new CategoriaController();
