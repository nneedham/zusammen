const wordObjects = require('./words.js')
// console.log(Object.keys(wordObjects))
function calculateScore(words) {
  words = words.toLowerCase()
  let tracker = {
    innovatorWords: 0,
    paragonWords: 0,
    trendSetterWords: 0,
    citizenWords: 0,
    athleteWords: 0,
    tinkererWords: 0,
    stewardWords: 0
  }

  wordObjectsCategories = Object.keys(wordObjects)
  for (let i =0; i < wordObjectsCategories.length; i++) {
    let trackerCategory = wordObjectsCategories[i]
    let currCategoryList = wordObjects[trackerCategory]
    for (let j = 0; j < currCategoryList.length; j++) {
      const target = currCategoryList[j];
      let searchField = words;
      while (searchField.indexOf(target)>-1) {
        tracker[trackerCategory] ++
        searchField = searchField.slice(searchField.indexOf(target)+1)
      }
    }

  }
  return tracker
}

module.exports = calculateScore;
