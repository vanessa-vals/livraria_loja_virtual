import editoraModel from "../models/editoraModel.js";

class EditoraController {
  // Lista todas as editoras
  async showEditora(req, res) {
    try {
      const allEditora = await editoraModel.showEditora();

      if (allEditora.length === 0) {
        return res.status(200).json({ message: "Nenhuma editora encontrada!" });
      }
      return res.status(200).json(allEditora);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Busca uma editora específica pelo ID
  async getEditoraById(req, res) {
    try {
      const id = Number(req.params.id);
      const editora = await editoraModel.getEditoraById(id);

      // Como o model retorna rows[0], se não achar nada ele será 'undefined'
      if (!editora) {
        return res.status(404).json({ error: "Editora não encontrada" });
      }

      return res.status(200).json(editora);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Cadastra uma nova editora
  async createEditora(req, res) {
    try {
      const { nome, email, telefone } = req.body;

      // Validação de campos obrigatórios
      if (!nome || !email || !telefone) {
        return res
          .status(400)
          .json({ message: "Preenchimento obrigatório dos campos" });
      }

      // Valida se já existe uma editora com o mesmo nome
      const findnome = await editoraModel.getEditoraByNome(nome);
      if (findnome) {
        return res.status(400).json({ message: "Nome já cadastrado!" });
      }

      // Insere no banco de dados
      const createEditora = await editoraModel.createEditora(req.body);

      if (createEditora.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Não foi possível cadastrar a editora!" });
      }

      return res
        .status(201)
        .json({ message: "Editora cadastrada com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Atualiza os dados de uma editora
  async updateEditora(req, res) {
    try {
      const id = Number(req.params.id);
      const { nome, email, telefone } = req.body;

      if (!nome || !email || !telefone) {
        return res
          .status(400)
          .json({ message: "Campos de cadastro obrigatórios" });
      }

      const updateEditora = await editoraModel.updateEditora(id, req.body);

      if (updateEditora.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Dados da editora não atualizados!" });
      }

      return res
        .status(200)
        .json({ message: "Editora atualizada com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Deleta uma editora
  async deleteEditora(req, res) {
    try {
      const id = Number(req.params.id);

      const deleteEditora = await editoraModel.deleteEditora(id);

      if (deleteEditora.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Não foi possível deletar os dados da editora!" });
      }

      return res.status(200).json({ message: "Editora deletada com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new EditoraController();