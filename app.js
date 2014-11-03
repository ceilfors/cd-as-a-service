console.log("This is a project! Hurray for projects!")

var Cake = function(){
	this.pie = 5;
}

Cake.prototype.getMyPie = function(){
	return this.pie;
}

module.exports.Cake = Cake;
// module.exports.Cake.getMyPie = Cake.getMyPie;