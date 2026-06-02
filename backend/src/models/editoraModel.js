import pool from '../database/database.js';

class EditoraModel {
    async showEditora(){
        const [rows] = await pool.execute('Select * From editoras');
        return rows;
    }   

    async getEditoraById(id_editora){
        const [rows] = await pool.execute('Select * From editoras where id_editora = ?', [id_editora]);
        return rows[0];
    }

    async getEditoraByNome(nome) {
        const [rows] = await pool.execute('SELECT * FROM editoras WHERE nome = ?', [nome]);
        return rows[0]; 
    }

    async createEditora(data){
        const { nome, email, telefone } = data; 
        const [result] = await pool.execute(
            'INSERT INTO editoras (nome, email, telefone) VALUES (?, ?, ?)',
            [nome, email, telefone]
        );
        return result;
    }

    async updateEditora(id_editora, data) {
        const { nome, email, telefone } = data;
        const [result] = await pool.execute(
            'UPDATE editoras SET nome = ?, email = ?, telefone = ? WHERE id_editora = ?',
            [nome, email, telefone, id_editora],
        );
         return result;
    }

    async deleteEditora(id_editora) {
        const [result] = await pool.execute('DELETE FROM editoras WHERE id_editora = ?', [id_editora]);
        return result;
    }
}

export default new EditoraModel();