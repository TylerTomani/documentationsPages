/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  let cutest = {cuteness: 0};
  cats.forEach(cat => {
    if(cat["cuteness"] > cutest["cuteness"])
      cutest = cat
  })
  console.log(cutest)

}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
cutestCat(cats);
// console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }