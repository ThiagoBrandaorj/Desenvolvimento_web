if (sessionStorage.getItem('interno')){
    document.getElementById('secreta').style.display = 'block';
    document.getElementById('fake-form').style.display = 'none';
} else {
    document.getElementById('secreta').style.display = 'none';
    document.getElementById('fake-form').style.display = 'block';
}


const verificaSenha = () => {
    const entrada = document.getElementById("entrada-senha").value;
    const senha = '81dc9bdb52d04dc20036dbd8313ed055';

    if (hex_md5(entrada) === senha){
        sessionStorage.setItem('interno', 'qualquer valor');
        sessionStorage.removeItem('container-entrada');
        window.location = '/';
    } else {
        alert('Senha incorreta!');
    }
}

const limpaCoiso = () => {
    sessionStorage.removeItem('coiso');
    window.location = '/';
}