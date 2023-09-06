const card = document.getElementById("card");

card.addEventListener("click", () => {
  const innerCard = document.getElementById("innerCard");
  innerCard.style.transform =
    innerCard.style.transform === "rotateY(180deg)"
      ? "rotateY(0deg)"
      : "rotateY(180deg)";
});




