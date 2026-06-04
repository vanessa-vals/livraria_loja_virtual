const validateCategoria = (req, res, next) => {
  const { categoria } = req.body;
  const errors = [];

  if (!categoria || categoria.trim() === "") {
    errors.push("O campo categoria é obrigatório.");
  } else if (categoria.trim().length > 100) {
    errors.push("O campo categoria deve ter no máximo 100 caracteres.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

export default validateCategoria;