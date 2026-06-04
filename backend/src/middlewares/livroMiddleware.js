const validateLivro = (req, res, next) => {
  const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = req.body;
  const errors = [];

  if (!titulo || titulo.trim() === "") {
    errors.push("O campo titulo é obrigatório.");
  } else if (titulo.trim().length > 150) {
    errors.push("O campo titulo deve ter no máximo 150 caracteres.");
  }

  if (!autor || autor.trim() === "") {
    errors.push("O campo autor é obrigatório.");
  } else if (autor.trim().length > 100) {
    errors.push("O campo autor deve ter no máximo 100 caracteres.");
  }

  if (ano_publicacao !== undefined && ano_publicacao !== "") {
    const ano = Number(ano_publicacao);
    const anoAtual = new Date().getFullYear();
    if (!Number.isInteger(ano) || ano < 1000 || ano > anoAtual) {
      errors.push(`O campo ano_publicacao deve ser um ano válido entre 1000 e ${anoAtual}.`);
    }
  }

  if (preco === undefined || preco === "") {
    errors.push("O campo preco é obrigatório.");
  } else if (isNaN(Number(preco)) || Number(preco) < 0) {
    errors.push("O campo preco deve ser um número positivo.");
  }

  if (!id_editora) {
    errors.push("O campo id_editora é obrigatório.");
  } else if (!Number.isInteger(Number(id_editora)) || Number(id_editora) <= 0) {
    errors.push("O campo id_editora deve ser um número inteiro positivo.");
  }

  if (!id_categoria) {
    errors.push("O campo id_categoria é obrigatório.");
  } else if (!Number.isInteger(Number(id_categoria)) || Number(id_categoria) <= 0) {
    errors.push("O campo id_categoria deve ser um número inteiro positivo.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

export default validateLivro;