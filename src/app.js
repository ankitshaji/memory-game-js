document.addEventListener("DOMContentLoaded", () => {
  //cards
  const cardArray = [
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

  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/images/blank.png");
      card.setAttribute("width", "100px");
      card.setAttribute("height", "100px");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardArray[cardId]);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length == 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if (optionOneId === optionTwoId) {
      alert("Same image");
      cards[optionOneId].setAttribute("src", "src/images/blank.png");
      cards[optionTwoId].setAttribute("src", "src/images/blank.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("Match found");
      cards[optionOneId].setAttribute("src", "src/images/white.png");
      cards[optionTwoId].setAttribute("src", "src/images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    }
    cardsChosen = [];
    cardsChosenIds = [];
  }

  createBoard();
});
