let titleCase = str => str.toLowerCase().split(" ").map(word => {
  return (word.slice(0,1).toUpperCase() + word.slice(1));
}).join(" ");

console.log(titleCase("lEaVe The GuN, take The cannolis"));