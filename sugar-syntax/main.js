//Sugar Syntax
//Spread Operator

//const names = ['Rita', 'Jose', 'Anita','Carlos'];
//console.log (...names);
//console.log ('Rita', 'Jose', 'Anita','Carlos');

//Concatenacion de Arrays
//const perros = ['Rocky','Firulais'];
//const gatos = ['Mishi','Luna'];

//const mascotas = [...perros, ...gatos];
//console.log (mascotas);

//Spread Operator con Objetos
//const user = {
//    firstName: 'Anita',
//    age: 18,
//    course: 'JavaScript',
//}
//const user2 = {...user};
//console.log(user2);

//const user3 = {
//    ...user,
//    course: 'ReactJS',
//    email: 'anita@mail.com'
//}
//console.log(user3);
//console.log(user);

//Operador de Carga Opcional
//?.
//const user = {
  //  id: 1,
    //userName: 'Admin',
    //profile: {
      //  avatar: '/avatar.png',
        //language: 'english'
    //}
//};

//const user = null;

//Antes de ES6 (EcmaScript 6)
//let profile = user && user.profile;
//console.log(profile);

// usando ?.
//let profile = user?.profile;
//console.log(profile);

//let avatar = user?.profile?.avatar;
//console.log(avatar);

//?? - Nullish Coalesing

//let defaultProfile = {
  //  default : '/default.png',
    //language : 'english'
//}

//let profile = user?.profile ?? defaultProfile;
//console.log(profile);

