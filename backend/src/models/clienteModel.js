import pool from "../database/database.js";

class ClienteModel {
  async showClientes() {
    const [rows] = await pool.execute("Select * From clientes");
    return rows;
  }

  async getClienteById(id_cliente) {
    const [rows] = await pool.execute(
      "Select * From clientes where id_cliente = ?",
      [id_cliente],
    );
    return rows[0];
  }
  async getClienteByEmail(email) {
    console.log("emailModel", email);
    const [rows] = await pool.execute(
      "Select * From clientes where email = ?;",
      [email],
    );
    return rows;
  }

  async createCliente(data) {
    const { nome, email, telefone, cidade, estado } = data;
    const [result] = await pool.execute(
      "INSERT INTO clientes (nome, email, telefone, cidade, estado) VALUES (?, ?, ?, ?, ?)",
      [nome, email, telefone, cidade, estado],
    );
    return result;
  }

  async updateCliente(id_cliente, data) {
    const { nome, email, telefone, cidade, estado } = data;
    const [result] = await pool.execute(
      "UPDATE clientes SET nome = ?, email = ?, telefone = ?, cidade = ?, estado = ? WHERE id_cliente = ?",
      [nome, email, telefone, cidade, estado, id_cliente],
    );
    return result;
  }

  async deleteCliente(id_cliente) {
    const [result] = await pool.execute(
      "DELETE FROM clientes WHERE id_cliente = ?",
      [id_cliente],
    );
    return result;
  }
}

export default new ClienteModel();
