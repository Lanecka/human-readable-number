module.exports = function toReadable(number) {
  const UNITS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const TENS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const BELOWHUNDREDS = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) return 'zero';

  function translate(number) {
    let word = '';

    if (number < 10) {
      return word = UNITS[number] + ' ';
    } else if (number < 20) {
      return word = TENS[number - 10] + ' ';
    } else if (number < 100) {
			rem = translate(number % 10)
			word = BELOWHUNDREDS[(number - number % 10) / 10 - 2] + ' ' + rem;
		} else  {
			word = UNITS[Math.trunc(number / 100)] + ' hundred ' + translate(number % 100);
		} 

    return word;
  }

  let result = translate(number);
  return result.trim();
}
