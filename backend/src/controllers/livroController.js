import livroModel from "../models/livroModel.js";

class LivroController {
  // Lista todos os livros
  async showLivro(req, res) {
    try {
      const allLivros = await livroModel.showLivro();

      if (allLivros.length === 0) {
        return res.status(200).json({ message: "Nenhum livro encontrado!" });
      }
      return res.status(200).json(allLivros);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Busca um livro específico pelo ID
  async getLivroById(req, res) {
    try {
      const id = Number(req.params.id);
      const livro = await livroModel.getLivroById(id);

      // Se o model retorna rows[0], quando não encontra nada ele é 'undefined'
      if (!livro) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }

      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Cadastra um novo livro
  async createLivro(req, res) {
    try {
      const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = req.body;

      // Validação de campos obrigatórios
      if (!titulo || !autor || !ano_publicacao || !preco || !id_editora || !id_categoria) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      // 💡 Nota: A linha abaixo foi comentada para evitar que o envio da string 'titulo'
      // quebre a busca por ID numérico. Se no futuro você criar um método 'getLivroByTitulo'
      // no seu model, você poderá descomentar e usar aqui para evitar duplicados.
      /*
      const findLivro = await livroModel.getLivroByTitulo(titulo);
      if (findLivro) {
        return res.status(400).json({ message: "Título já cadastrado!" });
      }
      */

      // Insere no banco de dados
      const createLivro = await livroModel.createLivro(req.body);

      if (createLivro.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Não foi possível cadastrar o livro!" });
      }

      return res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Atualiza os dados de um livro
  async updateLivro(req, res) {
    try {
      const id = Number(req.params.id);
      const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = req.body;

      if (!titulo || !autor || !ano_publicacao || !preco || !id_editora || !id_categoria) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      const updateLivro = await livroModel.updateLivro(id, req.body);

      if (updateLivro.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Não foi possível atualizar o título!" });
      }

      return res
        .status(200)
        .json({ message: "Livro atualizado com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Deleta um livro
  async deleteLivro(req, res) {
    try {
      const id = Number(req.params.id);

      const deleteLivro = await livroModel.deleteLivro(id);

      if (deleteLivro.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Não foi possível deletar dados do livro!" });
      }

      return res.status(200).json({ message: "Livro deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new LivroController();