export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function () {
  return this.body.split(' ').length;
}

Entry.prototype.vowelConsonantCount = function () {
  const vowels = 'AEIOUaeiou';
  const consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
  const vowelCount = this.body.split('').filter(char => vowels.includes(char)).length;
  const consonantCount = this.body.split('').filter(char => consonants.includes(char)).length;
  return [vowelCount, consonantCount];
}

Entry.prototype.getTeaser = function () {
  const sentences = this.body.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
  const firstSentence = sentences[0].trim();
  const words = firstSentence.split(' ');
  return words.slice(0, 12).join(' ');
}


// Function to display an entry card
export function displayEntryCard(entry) {
  const entryCard = `
<div class="entry-card">
  <h3><b>${entry.title}</b></h3>
 <p>Word Count: ${entry.wordCount()}</p>
 <p>Vowels: ${entry.vowelConsonantCount()[0]}</p>
<p>Consonants: ${entry.vowelConsonantCount()[1]}</p>
    <p>Teaser: ${entry.getTeaser()}</p>
 </div>
 `;
  $('.entries').html(entryCard);
}
