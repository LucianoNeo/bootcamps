// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Ajuga Reptans",
      preco: 20.00,
      img: "./assets/img/produto-01.png",
      ordem: 0
    },
    {
      name: "Cordyline fruticosa",
      preco: 35.00,
      img: "./assets/img/produto-02.png",
      ordem: 3
    },
    {
      name: "Crassula ovata",
      preco: 23.20,
      img: "./assets/img/produto-03.png",
      ordem: 2
    },
    {
      name: "Cyperus rotundus",
      preco: 20.00,
      img: "./assets/img/produto-04.png",
      ordem: 2
    },
    {
      name: "Delairea odorata",
      preco: 20.00,
      img: "./assets/img/produto-05.png",
      ordem: 2
    },
    {
      name: "Datura metel",
      preco: 20.00,
      img: "./assets/img/produto-06.png",
      ordem: 2
    },

  ]
  )
}
