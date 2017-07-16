function ClozeFlashcard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.save = function() {
		fs.appendFile("cards.txt", "{front: " + text +  ", back: " + cloze + "}, ", function(err){
			if(err) console.log(err);
		});
	};
}

module.exports = ClozeFlashcard;