var Utf8 = require("../out/index.js").Utf8;

let text = "Ala ma kota żźćąśłńó ŻŹĆĄŚŁÓŃ";

let array = Utf8.encode(text);
let res = Utf8.decode(array);

console.log(text == res, text, array, res);
