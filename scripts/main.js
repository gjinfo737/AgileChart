var WIDTH = 600;
var HEIGHT = 400;
$(document).ready(function() {

	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	// ctx.fillStyle = "#FF0000";
	// ctx.fillRect(0, 0, 150, 75);
	// ctx.fillStyle = "#00FF00";
	// ctx.moveTo(0, 0);
	// ctx.lineTo(200, 100);
	// ctx.stroke();
	// var ctx = c.getContext("2d");
	// ctx.font = "30px Arial";
	// ctx.fillText("Hello World", 10, 50);

	var tv = new TextView(ctx, "asd");
	tv.setText("asddssdsd");
	// alert(tv.getText());

	var layout = new AbsoluteLayout(ctx);
	layout.addView(tv);
	layout.invalidate();
	
	tv.setText("-------d dsd a asd\nasdsda");
	layout.invalidate();
});

function AbsoluteLayout(ctx) {
	this.context = ctx;
	this.views = new Array();

	this.invalidate = function() {
		this.clear();
		this.drawAll();
	}

	this.drawAll = function() {
		for (i = 0; i < this.views.length; i++) {
			this.views[i].draw(this.context);
		}
	}

	this.clear = function() {
		this.context.fillStyle = "#FFFFFF";
		this.context.fillRect(0, 0, WIDTH, HEIGHT);
	}
	this.addView = function(view) {
		this.views.push(view);
	}
}

function TextView(ctx, t) {

	this.text = t;
	this.font = "30px Arial";
	this.style = "#000";

	this.setText = function(t) {
		this.text = t;
	}

	this.draw = function(context) {
		context.fillStyle = this.style;
		context.fillText(this.text, 10, 50);
	}

	this.getText = function() {
		return this.text + ' ' + this.font;
	};

}