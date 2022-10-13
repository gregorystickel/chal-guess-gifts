var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

function guessGifts() {
  let results = [];
  for (let j = 0; j < presents.length; j++) {
    for (let i = 0; i < wishlist.length; i++) {
      if (
        wishlist[i].size === presents[j].size &&
        wishlist[i].clatters === presents[j].clatters &&
        wishlist[i].weight === presents[j].weight
      ) {
        results.push(wishlist[i].name);
      }
    }
  }
  return results;
}

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]
