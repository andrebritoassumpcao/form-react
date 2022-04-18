const validation = (values) => {
  let errors = {};

  if (!values.fullname) {
    errors.fullname = "Precisa de um nome.";
  }
  if (!values.email) {
    errors.email = "Precisa de um Email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email inválido.";
  }
  if (!values.password) {
    errors.password = "Precisa de uma senha.";
  } else if (values.password.length < 5) {
    errors.password = "A senha precisa ter mais de 5 caracteres";
  }
  if (!values.date) {
    errors.date = "Precisa de uma data.";
  }
  if (!values.check) {
    errors.check = "Precisa confirmar.";
  }

  return errors;
};

export default validation;
