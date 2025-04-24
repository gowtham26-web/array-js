
var sport = ['basketball', 'cricket', 'football','hockey','kabbadi'];
let newsport = prompt("Enter a sport to add:");
if (newsport && !sport.includes(newsport)) {
  sport.push(newsport);
}

sport.sort();
console.log("Sorted Array:", sport);
console.log("Array Length:", sport.length);
