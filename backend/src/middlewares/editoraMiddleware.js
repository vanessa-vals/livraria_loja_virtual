const validateEditora = (req, res, next) => {
  const { nome, email, telefone } = req.body;
  const errors = [];

  if (!nome || nome.trim() === "") {
    errors.push("O campo nome é obrigatório.");
  } else if (nome.trim().length > 100) {
    errors.push("O campo nome deve ter no máximo 100 caracteres.");
  }

  if (!email || email.trim() === "") {
    errors.push("O campo email é obrigatório.");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("O email informado não é válido.");
    } else if (email.trim().length > 100) {
      errors.push("O campo email deve ter no máximo 100 caracteres.");
    }
  }

  if (telefone && telefone.trim().length > 20) {
    errors.push("O campo telefone deve ter no máximo 20 caracteres.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

export default validateEditora;