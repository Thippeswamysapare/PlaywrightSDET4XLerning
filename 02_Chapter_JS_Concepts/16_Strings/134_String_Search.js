let url ='https://huggingface.co/maureesewilliams/tinyocr'

console.log(url.includes('maureesewilliams'));
console.log(url.startsWith('https'));
console.log(url.endsWith('tinyocr'));
console.log(url.indexOf('maureesewilliams'));
console.log(url.lastIndexOf('maureesewilliams'));
console.log(url.search('maureesewilliams'));
console.log(url.match('maureesewilliams'));
console.log(url.match(/maureesewilliams/g));
console.log(url.match(/maureesewilliams/i));
console.log(url.match(/maureesewilliams/gi));