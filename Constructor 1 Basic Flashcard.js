function BasicFlashcard(front, back){
	this.front = front;
	this.back = back;
	this.save = function(){
		fs.appendFile("cards.txt", "{front: " + front + ", back: " + back + "}, ", function(err){
			if(err) console.log(err);
		});
	};
}

module.exports = BasicFlashcard;