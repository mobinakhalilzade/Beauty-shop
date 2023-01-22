document.getElementById("login").addEventListener("click", () => {
  let username = document.getElementsByName("username")[0].value;
  let password = document.getElementsByName("password")[0].value;
  console.log(password, username);

//   fetch('https://fakestoreapi.com/users',{
//     method:"POST",
//     body:JSON.stringify(
//         {
//             email:'John@gmail.com',
//             username:'johnd',
//             password:'m38rmF$',
//             name:{
//                 firstname:'John',
//                 lastname:'Doe'
//             },
//             address:{
//                 city:'kilcoole',
//                 street:'7835 new road',
//                 number:3,
//                 zipcode:'12926-3874',
//                 geolocation:{
//                     lat:'-37.3159',
//                     long:'81.1496'
//                 }
//             },
//             phone:'1-570-236-7033'
//         }
//     )
// })
//     .then(res=>res.json())
//     .then(json=>console.log(json))

    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


//   fetch("https://fakestoreapi.com/auth/login", {
//     method: "POST",
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));
});
