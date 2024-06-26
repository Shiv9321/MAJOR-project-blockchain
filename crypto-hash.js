const crypto = require("crypto");
// const hexToBinary = require("hex-to-binary");

const cryptoHash = (...inputs) =>
{
  const hash = crypto.createHash("sha256");
  hash.update(inputs.sort().join("")); //helloworld ,world hello
  return hash.digest("hex");
};

result = cryptoHash("world", "hello");

module.exports = cryptoHash;
console.log(result);
