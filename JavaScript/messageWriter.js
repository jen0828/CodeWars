// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e/train/javascript

// kata(6kyu):
// Implement a function that receives a string, and lets you extend it with repeated calls. 
// When no argument is passed you should return a string consisting of space-separated words you've received earlier.
// Note: There will always be at least 1 string; all inputs will be non-empty.
// For example:
// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
// Tip (helpful, but not necessary): Try using classes!

// My solution:

class MessageWriter {
  constructor(initialMessage) {
    this.message = initialMessage;
  }

  addWord(word) {
    this.message += ' ' + word;
    return this;
  }

  toString() {
    return this.message;
  }
}

function createMessage(initialMessage) {
  const messageWriter = new MessageWriter(initialMessage);

  const innerFunc = function (word) {
    if (word !== undefined) {
      messageWriter.addWord(word);
      return innerFunc;
    } else {
      return messageWriter.toString();
    }
  };

  return innerFunc;
}
