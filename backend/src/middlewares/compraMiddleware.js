const validateCompra = (req, res, next) => {
  const { qtde, valor, desconto, id_livro, id_cliente } = req.body;
  const errors = [];

  if (qtde === undefined || qtde === "") {
    errors.push("O campo qtde é obrigatório.");
  } else if (!Number.isInteger(Number(qtde)) || Number(qtde) <= 0) {
    errors.push("O campo qtde deve ser um número inteiro positivo.");
  }

  if (valor === undefined || valor === "") {
    errors.push("O campo valor é obrigatório.");
  } else if (isNaN(Number(valor)) || Number(valor) < 0) {
    errors.push("O campo valor deve ser um número positivo.");
  }

  if (desconto !== undefined && desconto !== "") {
    if (isNaN(Number(desconto)) || Number(desconto) < 0) {
      errors.push("O campo desconto deve ser um número positivo ou zero.");
    }
  }

  if (!id_livro) {
    errors.push("O campo id_livro é obrigatório.");
  } else if (!Number.isInteger(Number(id_livro)) || Number(id_livro) <= 0) {
    errors.push("O campo id_livro deve ser um número inteiro positivo.");
  }

  if (!id_cliente) {
    errors.push("O campo id_cliente é obrigatório.");
  } else if (!Number.isInteger(Number(id_cliente)) || Number(id_cliente) <= 0) {
    errors.push("O campo id_cliente deve ser um número inteiro positivo.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

export default validateCompra;