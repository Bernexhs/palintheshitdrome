const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a string: ', str => {
    const reversed = str.split('').reverse().join('');
    if (str === reversed) {
      console.log(`${str} is a palindrome.`);
    } else {
      console.log(`${str} is not a palindrome.`);
    }
    readline.close();
  });
  