// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// kata(5kyu):
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


function generateHashtag(str) {
  if (str.trim() === '') {
    return false;
  }

  const words = str.trim().split(' ');
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const hashtag = '#' + capitalizedWords.join('');

  return hashtag.length > 140 ? false : hashtag;
}
