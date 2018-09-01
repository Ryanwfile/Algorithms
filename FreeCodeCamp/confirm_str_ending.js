//Check if a string (first argument, str) ends with the given target string (second argument, target).

var confirmEnding = (str, target) => {
  return str.endsWith(target);
}

console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));