
const validateCliente = (req, res, next) =>{
    const {nome, email, telefone, cidade, estado} = req.body;
    const errors= [];

    if (!nome || nome.trim() === ""){
        errors.push("O campo nome é obrigatório.");
    } else if (nome.trim().length > 100){
        errors.push("O campo nome deve ter no máximo 100 caracteres");
    }

    if (!email || email.trim()===""){
        errors.push("O campo email é obrigatório");
    } else{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            errors.push("O email informado não é valido.");            
        } else if (email.trim().length > 100){
            errors.push("O campo email deve ter o máximo 100 aracteres.");
        }
    }

    if (telefone && telefone.trim().length >20){
        errors.push("O campo telefone deve ter no máximo 20 caracteres.");
    }

    if (cidade && cidade.trim().length >50){
        errors.push("A cidade deve ter no máximo 50 digitos.");
    }

    if (estado && estado.trim().length !==2) {
        errors.push( " O campo estado deve ter exatamente 2 caracteres (ex: SP, RJ).");
    }
    if (errors.length > 0) {
        return res.status(400).json({erros});
    }

    next();

};

export default validateCliente
