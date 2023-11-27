//if (sessionStorage.getItem('interno')){
    //document.getElementById('secreta').style.display = 'flex';
    //document.getElementById('container-entrada').style.display = 'none';

//} else {
  //  document.getElementById('secreta').style.display = 'none';
   // document.getElementById('container-entrada').style.display = 'flex';
//}


const verificaSenha = () => {
    const entrada = document.getElementById("entrada-senha").value;
    const senha = '81dc9bdb52d04dc20036dbd8313ed055';

    if (hex_md5(entrada) === senha){
        window.location.href = "clube.html";
    } else {
        alert('Senha incorreta!');
    }
}
