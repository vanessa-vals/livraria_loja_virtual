import pool from '../database/database.js';

class CompraModel{
    async showCompra(){
        const [rows] = await pool.execute('Select * From compras');
        return rows;
    }   

    async getCompraById(id_compra){
        const [rows] = await pool.execute('Select * From compras where id_compra = ?', [id_compra]);
        return rows [0];
    }

    async createCompra(data){
        const { qtde, valor, desconto, id_livro, id_cliente } = data; 
        const [result] = await pool.execute(
            'INSERT INTO compras (qtde, valor, desconto, id_livro, id_cliente) VALUES (?, ?, ?, ?, ?)',
            [qtde, valor, desconto, id_livro, id_cliente]
        );
        return result;
    }

    async updateCompra(id_compra, data) {
        const { qtde, valor, desconto, id_livro, id_cliente } = data;
        const [result] = await pool.execute(
            'UPDATE compras SET qtde = ?, valor = ?, desconto = ?, id_livro = ?, id_cliente = ? WHERE id_compra = ?',
            [qtde, valor, desconto, id_livro, id_cliente, id_compra]
        );
        return result;
    }

    async deleteCompra(id_compra) {
        const [result] = await pool.execute('DELETE FROM compras WHERE id_compra = ?', [id_compra]);
        return result;
    }
    
}

export default new CompraModel();