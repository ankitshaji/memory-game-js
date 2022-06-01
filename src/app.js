document.addEventListener("DOMContentLoaded", () => {
  //cards
  const cards = [
    {
      name: "fries",
      img: "/src/images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "/src/images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "/src/images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "/src/images/pizza.png",
    },
    {
      name: "milkshake",
      img: "/src/images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "/src/images/hotdog.png",
    },
    {
      name: "fries",
      img: "/src/images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "/src/images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "/src/images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "/src/images/pizza.png",
    },
    {
      name: "milkshake",
      img: "/src/images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "/src/images/hotdog.png",
    },
  ];

  cards.sort(() => 0.5 -Math.random());
  const grid = document.querySelector('.grid');
  function createBoard(){
      for(let i=0;i<cards.length;i++){
          const card = document.createElement('img')
          card.setAttribute('src','src/images/blank.png')
          card.setAttribute('width','100px')
          card.setAttribute('height','100px')
          card.setAttribute('data-id',i)
          card.addEventListener('click',flipCard)
          grid.appendChild(card)
      }
  }
  createBoard();
  function flipCard(){
      
  }
});
