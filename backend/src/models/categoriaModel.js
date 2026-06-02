import pool from '../database/database.js';

class CategoriasModel{
    async showCategoria(){
        const [rows] = await pool.execute('Select * From categorias');
        return rows;
    }   

    async getCategoriaById(id_categoria){
        const [rows] = await pool.execute('Select * From categorias where id_categoria = ?', [id_categoria]);
        return rows [0];
    }

    async createCategoria(data){
        const { categoria } = data; 
        const [result] = await pool.execute(
            'INSERT INTO categorias (categoria) VALUES (?)',
            [categoria]
        );
        return result;
    }

    async updateCategoria(id_categoria, data) {
        const { categoria } = data;
        const [result] = await pool.execute(
            'UPDATE categorias SET categoria = ? WHERE id_categoria = ?',
            [categoria, id_categoria]
        );
        return result;
    }

    async deleteCategoria(id_categoria) {
        const [result] = await pool.execute('DELETE FROM categorias WHERE id_categoria = ?', [id_categoria]);
        return result;
    }
    
}

export default new CategoriasModel();
