
function parseJwt(token) {
    try {
        // Get Token Header
        const base64HeaderUrl = token.split('.')[0];
        const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
        const headerData = JSON.parse(window.atob(base64Header));

        // Get Token payload and date's
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const dataJWT = JSON.parse(window.atob(base64));
        dataJWT.header = headerData;

        return dataJWT;
    } catch (err) {
        return false;
    }
}

function validaAcceso(idRol){
    console.log(document.cookie);

    if(!document.cookie){
        location.replace("login.html")
    }

    if(!JSON.parse(document.cookie).accessToken){
        location.replace("login.html")
    }

    let payload = parseJwt(JSON.parse(document.cookie).accessToken);

    if(payload.rol != idRol){
        location.replace("login.html")
    }
}

function logout(){
    console.log("salir")
    document.cookie = null;
    
    location.replace("login.html")
}