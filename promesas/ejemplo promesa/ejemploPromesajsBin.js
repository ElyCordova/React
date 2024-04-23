const data =
[
  {
    id: 1,
    nombre: "Buzo 1",
    tipo: "buzo",
    precio: 1200
  },
  
  {
    id: 1,
    nombre: "Remera 1",
    tipo: "remera",
    precio: 500
  },
]

const getData = () => {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve(data)
    }, 3000)
  })
}

getData().then((data) => console.log(data))

