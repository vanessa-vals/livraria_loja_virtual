import clienteModel from "../models/clienteModel.js";

class ClienteController {
  async showCliente(req, res) {
    try {
      const allClientes = await clienteModel.showClientes();

      if (allClientes.length === 0) {
        return res.status(200).json({ message: "Nenhum cliente encontrado!" });
      }
      return res.status(200).json(allClientes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getClienteById(req, res) {
    try {
      const id = Number(req.params.id);
      const cliente = await clienteModel.getClienteById(id);

      if (!cliente || cliente.length === 0) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }

      return res.status(200).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createCliente(req, res) {
    // try {
      const { nome, email, telefone, cidade, estado } = req.body;

      if (!nome || !email || !telefone || !cidade || !estado) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      const [findEmail] = await clienteModel.getClienteByEmail(email) ;
      if (findEmail?.email === email) {
        return res.status(400).json({ message: "Email já cadastrado!" });
      }

      const createCliente = await clienteModel.createCliente(req.body);

      if (createCliente.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Não foi possível cadastrar o cliente!" });
      }

      return res
        .status(201)
        .json({ message: "Cliente cadastrado com sucesso!" });
    // } catch (error) {
    //   return res.status(500).json({ errorcadastro: error.message });
    // }
  }

  async updateCliente(req, res) {
    try {
      const id = Number(req.params.id);
      const { nome, email, telefone, cidade, estado } = req.body;

      if (nome === "" || !email || !telefone || !cidade || !estado) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      const [findEmail] = await clienteModel.getClienteByEmail(email) ;
      if (findEmail?.email === email) {
        return res.status(400).json({ message: "Email já cadastrado!" });
      }

      const updateCliente = await clienteModel.updateCliente(id, req.body);

      if (updateCliente.affectedRows === 0) {
        return res
          .status(400)
          .json({ message: "Não foi possível atualizar dados do cliente!" });
      }

      return res
        .status(200)
        .json({ message: "Cliente atualizado com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteCliente(req, res) {
    try {
      const id = Number(req.params.id);

      const deleteCliente = await clienteModel.deleteCliente(id);

      if (deleteCliente.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Não foi possível deletar dados do cliente!" });
      }

      return res.status(200).json({ message: "Cliente deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new ClienteController();

