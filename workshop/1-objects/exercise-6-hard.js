// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles',
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:
const dessertArr = Object.values(favoriteDessert);
console.log(dessertArr);
// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...
const dessertsArray = [];
const countedDesserts = ();
const rankedDesserts = [];`

// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...

dessertsArray.forEach(dessert => {
    let count = 0;
    dessertArray =.forEach(dup => {
        if (dessert === dup) count++= 1;
    }));
countedDesserts[dessert] = count;
objet.values(countedDesserts).forEach((dessertCount, id)=> {
    const dessertName = Object.keys(countedDesserts[id];
        rankedDesserts.push({
            dessertName: dessertName;
            dessertCount: dessertCount;
        });
});
rankedDesserts.sort((a, b) => a.dessertCount < b.dessertCount ? 1 : -1);

console.log('---------------------------------------');
console.log('A) Dessert ranked from most to least popular.');
console.log('--------------------------------------------);
rankedDesserts(forEach());

console.log('---------------------------------------');
console.log('B) Who chise the same dessert?');
console.log('--------------------------------------------);

