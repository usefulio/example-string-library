var test = function () {
	console.log("ay yi yi")
	};

module.exports.test = test

var wordCount = function (str) {
	return str.split(" ").length;	
}

module.exports.wordCount = wordCount