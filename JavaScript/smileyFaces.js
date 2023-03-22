//https://www.codewars.com/kata/61eeb6e7577f050037b17a2d/train/javascript

// kata(6kyu):
// In this kata, your task will be to replace sad emoticons with funny ones.

// The emoticons, will be represented from:
// Eyes: marked as :, ; or =
// Nose (optional): marked as - or ~
// Mouth: marked as ( or [
// Examples:
// smile("Howdy :(")  // should return "Howdy :)"
// smile("Never be sad =[")  // should return "Never be sad =]"
// smile("Change this `=(` and this `:[`")  // should return "Change this `=)` and this `:]`"

// My solution:

function smile(text) {
  return text.replace(/[:;=][-~]?[([]|[)]]([-~][:;=])?/g, (match) => {
    switch (match) {
      case ':(':
        return ':)';
      case ';(':
        return ';)';
      case '=(':
        return '=)';
      case ':[':
        return ':]';
      case ';[':
        return ';]';
      case '=[':
        return '=]';
      case ':-(':
        return ':-)';
      case ':~(':
        return ':~)';
      case ';-(':
        return ';-)';
      case ';~(':
        return ';~)';
      case ':-[':
        return ':-]';
      case ':~[':
        return ':~]';
      case ';-[':
        return ';-]';
      case ';~[':
        return ';~]';
      case '=-[':
        return '=-]';
      case '=~[':
        return '=~]';
      case '=~(':
        return '=~)';
      case '=-(':
        return '=-)';
      default:
        return match;
    }
  });
}

// Refactored version

const EMOTICON_MAPPING = {
  ':(': ':)',
  ';(': ';)',
  '=(': '=)',
  ':[': ':]',
  ';[': ';]',
  '=[': '=]',
  ':-(': ':-)',
  ':~(': ':~)',
  ';-(': ';-)',
  ';~(': ';~)',
  ':-[': ':-]',
  ':~[': ':~]',
  ';-[': ';-]',
  ';~[': ';~]',
  '=-[': '=-]',
  '=~[': '=~]',
  '=~(': '=~)',
  '=-(': '=-)',
};

function smile(text) {
  return text.replace(/[:;=][-~]?[([]|[)]]([-~][:;=])?/g, (match) => {
    return EMOTICON_MAPPING[match] || match;
  });
}
