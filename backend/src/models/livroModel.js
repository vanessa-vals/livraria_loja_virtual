import pool from '../database/database.js';

class LivroModel{
    async showLivro(){
        const [rows] = await pool.execute('Select * From livros');
        return rows;
    }   

    async getLivroById(id_livro){
        const [rows] = await pool.execute('Select * From livros where id_livro = ?', [id_livro]);
        return rows [0];
    }

    async createLivro(data){
        const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = data; 
        const [result] = await pool.execute(
            'INSERT INTO livros (titulo, autor, ano_publicacao, preco, id_editora, id_categoria) VALUES (?, ?, ?, ?, ?, ?)',
            [titulo, autor, ano_publicacao, preco, id_editora, id_categoria]
        );
        return result;
    }

    async updateLivro(id_livro, data) {
        const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = data;
        const [result] = await pool.execute(
            'UPDATE livros SET titulo = ?, autor = ?, ano_publicacao = ?, preco = ?, id_editora = ?, id_categoria = ? WHERE id_livro = ?',
            [titulo, autor, ano_publicacao, preco, id_editora, id_categoria, id_livro]
        );
        return result;
    }

    async deleteLivro(id_livro) {
        const [result] = await pool.execute('DELETE FROM livros WHERE id_livro = ?', [id_livro]);
        return result;
    }
    
}

export default new LivroModel();