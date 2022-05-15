// // const lang = "esp";
// //const contact = 'Hola Mundo'
// // console.log(lang)

const changeLang = (inLang) => {
  const lang = inLang;
  const contact = document.getElementById("contact");
  const location = document.getElementById("location");
  const login = document.getElementById("login");
  const register = document.getElementById("register");
  contact.innerHTML = lang;
};

// console.log(contact);
