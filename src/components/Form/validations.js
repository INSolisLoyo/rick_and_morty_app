const emailRegexp = new RegExp(/\S+@\S+\.\S+/);
const passwordRegexp = new RegExp(/^[a-z0-9_-]{6,10}$/);

const valitation = (data) => {
    let errors = {};

    if(!emailRegexp.test(data.email)){
        errors.email = 'Debe ingresar un email válido'
    }
    if(!data.email)
        errors.emailNull = 'El email no debe estar vacío'
    if(data.email.length > 35)
        errors.characteres = 'Debe ser un email menor a 35 caracteres'
    if(!passwordRegexp.test(data.password))
        errors.password = 'Contraseña inválida'

    return errors;
}

export default valitation;