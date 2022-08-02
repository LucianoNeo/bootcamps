// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Ajuga Reptans",
      price: 10,
      img: "./assets/img/produto-01.png",
      quantity: 1
    },
    {
      name: "Cordyline fruticosa",
      price: 35,
      img: "./assets/img/produto-02.png",
      quantity: 3
    },
    {
      name: "Zenith Ardente",
      price: 23.2,
      img: "./assets/img/produto-03.png",
      quantity: 12
    },
    {
      name: "Cactus Forensis",
      price: 25.5,
      img: "./assets/img/produto-04.png",
      quantity: 22
    },
    {
      name: "Delairea odorata",
      price: 5,
      img: "./assets/img/produto-05.png",
      quantity: 20
    },
    {
      name: "Satira metel",
      price: 80,
      img: "./assets/img/produto-06.png",
      quantity: 10
    },
    {
      name: "Dente de leão",
      price: 22.50,
      img: "./assets/img/produto-01.png",
      quantity: 0
    },
    {
      name: "Espada de São Jorge",
      price: 35,
      img: "./assets/img/produto-02.png",
      quantity: 0
    },
    {
      name: "Crassula ovata",
      price: 23.2,
      img: "./assets/img/produto-03.png",
      quantity: 4
    },
    {
      name: "Cyperus rotundus",
      price: 20,
      img: "./assets/img/produto-04.png",
      quantity: 1
    },
    {
      name: "Expecta Patros",
      price: 28,
      img: "./assets/img/produto-05.png",
      quantity: 0
    },
    {
      name: "Datura metel",
      price: 20,
      img: "./assets/img/produto-06.png",
      quantity: 5
    },


  ]
  )
}
