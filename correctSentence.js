/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  var len = text.length
  if (text.charCodeAt(0) > 'Z'.charCodeAt(0)){
    text = String.fromCharCode(text.charCodeAt(0) - 32) + text.slice(1, len)
  } 
  if (text[len-1] != '.'){
    text = text + '.'
  }
  return text;
}