(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"fam5m_atlas_", frames: [[802,0,800,1013],[0,0,800,1013],[802,1622,315,335],[1119,1622,316,299],[802,1015,675,605],[0,1015,800,1013],[1119,1923,33,90],[1479,1210,65,191],[1479,1015,65,193],[1437,1622,207,322]]}
];


// symbols:



(lib.back1 = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back2 = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbe = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbe_up = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bougies = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.corps = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cursor = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flamme1 = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flamme2 = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.macron = function() {
	this.spriteSheet = ss["fam5m_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tete_marx_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.barbe_up();
	this.instance.parent = this;
	this.instance.setTransform(-158,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tete_marx_up, new cjs.Rectangle(-158,-149.5,316,299), null);


(lib.ui_cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.cursor();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ui_cursor, new cjs.Rectangle(-16.5,-90,33,90), null);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBIIAAiPICYAAIAACPg");
	this.shape.setTransform(-99.5,64.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBIIAAiPICYAAIAACPg");
	this.shape_1.setTransform(-118.5,64.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLBIIAAiPICYAAIAACPg");
	this.shape_2.setTransform(-137.4,64.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AizDrQgjgfAAgtQAAgrAZgbQAZgbBDgOIBngWIA0gSQAAgZgMgKQgKgLgcAAQgiAAgSALQgOAJgIAXIiIgNQAHgkAPgUQAOgVAcgPQAUgLAigGQAjgGAnAAQBAAAAnAHQAnAHAaAXQASAQAKAdQALAdAAAZIAAClQAAAbAEAPQADAPALAXIiGAAIgLgWIgEgYQgdAbgcAMQgkAPgzAAQhDAAgigfgAgDBjQgsAMgLALQgNAMAAAOQAAARANALQALALAXAAQAYAAATgMQAVgLAJgRQAJgRAAgbIAAgWgAgHihIhwhoIB6AAIA5Bog");
	this.shape_3.setTransform(-187.4,46);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah1CuQgqgVgcgtQgcguAAg9QAAhXA4g2QA4g2BjAAQBPAAAvAYQAtAYAZAvQAYAuAABIIAAARIkeAAQAEAiAPARQAUAYAhAAQAVAAATgKQAMgHANgRICNANQggA4guAZQgtAYhVAAQhKAAgrgVgABGggQgDgpgSgSQgSgSgfAAQghAAgUAbQgNARgEAhICMAAIAAAAg");
	this.shape_4.setTransform(335.5,-38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglD4QgZgNgMgcQgMgdAAg9IAAiDIg1AAIAAhpIA1AAIAAhEICOhKIAACOIBPAAIAABpIhPAAIAACDQAAAYAFAHQAHANARAAQAQgBAdgIIAKBjQg1ALguAAQg0AAgagOg");
	this.shape_5.setTransform(300.4,-45.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah0DzQgrgVgcgtQgcguAAg+QAAhWA4g2QA4g2BjAAQBPAAAvAYQAtAYAZAuQAYAuAABJIAAAQIkeAAQAEAjAPARQAUAYAhAAQAVAAATgLQAMgGANgRICNANQggA4guAYQgtAZhVAAQhKAAgqgVgABHAkQgEgpgTgSQgSgRgegBQggAAgVAbQgNARgEAhICNAAIAAAAgAAqijIgqg2IgrA2IhXAAIBRhkIBlAAIBNBkg");
	this.shape_6.setTransform(265.6,-45.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AheEGIAAkLIg1AAIAAhqIA1AAIAAgQQAAgXAGgbQAEgcAOgRQANgRAZgMQAYgKAuAAQAmAABIAIIgQBXIgpgEQgUAAgIAGQgJAHgDAOIgCAgIBEAAIAABqIhEAAIAAELg");
	this.shape_7.setTransform(233.8,-46);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AizCkQgjgfAAgtQAAgrAZgbQAZgaBDgOIBngWIA0gSQgBgagKgKQgLgLgcAAQgiAAgRALQgPAJgIAYIiIgOQAHgkAPgUQAPgVAbgPQATgLAjgGQAigGAoAAQBAAAAnAHQAnAHAaAXQASAQAKAdQALAdAAAaIAACkQAAAbAEAPQADAPALAXIiGAAIgLgWIgEgYQgdAbgbAMQglAPgzAAQhCAAgjgfgAgDAcQgsAMgLALQgMAMAAAOQAAARAMALQALALAXAAQAYAAAUgMQAUgLAJgRQAJgRAAgbIAAgWg");
	this.shape_8.setTransform(180.5,-38.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHECIAAoDICPAAIAAIDg");
	this.shape_9.setTransform(149.4,-45.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglD4QgZgNgMgcQgMgdAAg9IAAiDIg1AAIAAhpIA1AAIAAhEICOhKIAACOIBPAAIAABpIhPAAIAACDQAAAYAFAHQAHANARAAQAQgBAdgIIAKBjQg1ALguAAQg0AAgagOg");
	this.shape_10.setTransform(107.5,-45.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiOCmQgrgdgMg2ICOgNQAIAZAQALQAQALAZAAQAdAAAQgNQAMgJAAgNQAAgQgQgIQgMgGgwgJQhLgNgdgLQgdgLgTgZQgVgbABghQgBglAVgbQAWgbAmgNQAlgNBAAAQBBAAAhAKQAfAKAWAWQAUAVAPAlIiIANQgGgSgLgIQgSgLgXAAQgYAAgLAIQgLAJAAAMQAAAOAOAHQAOAHAuAFQBIAJAiAOQAkAOASAaQATAagBAgQABAhgUAeQgTAfgrASQgqAShIAAQhmAAgrgdg");
	this.shape_11.setTransform(74.2,-38.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah0CuQgrgVgcgtQgcguAAg9QAAhXA4g2QA4g2BjAAQBPAAAuAYQAvAYAYAvQAYAuAABIIAAARIkeAAQAEAiAPARQAUAYAhAAQAVAAATgKQAMgHANgRICNANQggA4guAZQgtAYhVAAQhKAAgqgVgABHggQgFgpgSgSQgSgSgdAAQgiAAgUAbQgNARgEAhICNAAIAAAAg");
	this.shape_12.setTransform(33.7,-38.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhLBRQApgTAPgTQAPgTACgYIhJAAIAAiOICYAAIAAB1QAABAgbAmQgbAmhBAcg");
	this.shape_13.setTransform(4.7,-57.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhWC4QgngLgdgZQgcgZgRghQgQghAAg3QAAg5AUgmQAOgcAZgXQAZgWAbgLQApgRBBAAQBbAAAwAhQAwAgAUA/IiHASQgGgYgRgMQgRgMgcAAQgiAAgWAZQgWAaAAAyQAAAuAVAYQAWAYAhAAQAcAAATgOQATgPAKgdICIAPQgLArgaAfQgaAfgnARQgoARg+AAQg6AAgogLg");
	this.shape_14.setTransform(-24.3,-38.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhGECIAAl1ICOAAIAAF1gAhGifIAAhiICOAAIAABig");
	this.shape_15.setTransform(-74.4,-45.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AizCkQgjgfAAgtQAAgrAZgbQAZgaBDgOIBogWIAygSQAAgagLgKQgLgLgbAAQgiAAgSALQgNAJgJAYIiJgOQAIgkAPgUQAOgVAcgPQATgLAjgGQAjgGAoAAQA/AAAnAHQAnAHAaAXQASAQALAdQAKAdAAAaIAACkQAAAbADAPQAEAPALAXIiGAAIgKgWIgGgYQgcAbgcAMQglAPgyAAQhCAAgjgfgAgDAcQgsAMgMALQgMAMAAAOQAAARAMALQAMALAXAAQAYAAATgMQAVgLAJgRQAJgRgBgbIAAgWg");
	this.shape_16.setTransform(-105.3,-38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ACtC/IAAjTQAAgagKgMQgOgUgWABQgZgBgPATQgPASAAAoIAADAIiPAAIAAjMIgDgiQgEgOgMgJQgLgIgPgBQgZAAgQAUQgQASAAApIAAC/IiPAAIAAl1ICGAAIAAA3QAcgiAegOQAdgPAqAAQAtAAAZAQQAaAQAQAfQAigkAcgNQAcgOAoAAQA8AAAiAkQAiAjAABMIAADqg");
	this.shape_17.setTransform(-160.3,-38.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhTD9QglgKgZgTQgagUgQgYQgQgYgKgkICRgQQAFAjATASQAUASAZAAQAeAAAUgXQATgWAAgtQAAgvgTgVQgUgUggAAQgVAAgTAJQgOAHgSATIh6gRIAukUIFTAAIAAByIjmAAIgMBNQAYgLAYgFQAWgGAXAAQBNAAAwAvQAwAtAABHQAAAygYAuQgZAvguAYQgtAYhHAAQgyAAgkgJg");
	this.shape_18.setTransform(-234.6,-45.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah0CuQgsgVgbgtQgcguAAg9QAAhXA4g2QA4g2BjAAQBPAAAuAYQAvAYAYAvQAYAuAABIIAAARIkeAAQAEAiAPARQAUAYAhAAQAVAAATgKQAMgHANgRICNANQggA4guAZQguAYhUAAQhKAAgqgVgABHggQgEgpgTgSQgSgSgdAAQgiAAgUAbQgNARgEAhICNAAIAAAAg");
	this.shape_19.setTransform(-296.2,-38.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjLECIAAoDICgAAIAAGEID3AAIAAB/g");
	this.shape_20.setTransform(-337.7,-45.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(51,51,51,0.498)").s().p("AhLBIIAAiPICYAAIAACPg");
	this.shape_21.setTransform(-90.5,69.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(51,51,51,0.498)").s().p("AhMBIIAAiPICYAAIAACPg");
	this.shape_22.setTransform(-109.5,69.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(51,51,51,0.498)").s().p("AhLBIIAAiPICYAAIAACPg");
	this.shape_23.setTransform(-128.4,69.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(51,51,51,0.498)").s().p("AizDrQgjgfAAgtQAAgrAZgbQAZgbBDgOIBngWIA0gSQAAgZgMgKQgKgLgcAAQgiAAgSALQgOAJgIAXIiIgNQAHgkAPgUQAOgVAcgPQAUgLAigGQAjgGAnAAQBAAAAnAHQAnAHAaAXQASAQAKAdQALAdAAAZIAAClQAAAbAEAPQADAPALAXIiGAAIgLgWIgEgYQgdAbgcAMQgkAPgzAAQhDAAgigfgAgDBjQgsAMgLALQgNAMAAAOQAAARANALQALALAXAAQAYAAATgMQAVgLAJgRQAJgRAAgbIAAgWgAgHihIhwhoIB6AAIA5Bog");
	this.shape_24.setTransform(-178.4,51);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(51,51,51,0.498)").s().p("Ah1CuQgqgVgcgtQgcguAAg9QAAhXA4g2QA4g2BjAAQBPAAAvAYQAtAYAZAvQAYAuAABIIAAARIkeAAQAEAiAPARQAUAYAhAAQAVAAATgKQAMgHANgRICNANQggA4guAZQgtAYhVAAQhKAAgrgVgABGggQgDgpgSgSQgSgSgfAAQghAAgUAbQgNARgEAhICMAAIAAAAg");
	this.shape_25.setTransform(344.5,-33.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(51,51,51,0.498)").s().p("AglD4QgZgOgMgcQgMgbAAg/IAAiCIg1AAIAAhpIA1AAIAAhFICOhJIAACOIBPAAIAABpIhPAAIAACDQAAAYAFAIQAHAMARgBQAQABAdgKIAKBjQg1AMguAAQg0AAgagOg");
	this.shape_26.setTransform(309.4,-40.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(51,51,51,0.498)").s().p("Ah1DzQgqgVgcgtQgcguAAg9QAAhXA4g2QA4g2BjgBQBPABAvAYQAtAYAZAvQAYAsAABKIAAARIkeAAQAEAiAPAQQAUAZAhAAQAVAAATgLQAMgHANgQICNANQggA4guAZQgtAYhVAAQhKAAgrgVgABHAkQgEgogTgSQgSgTgeABQggAAgVAbQgNAPgEAiICNAAIAAAAgAAqijIgqg2IgrA2IhXAAIBRhkIBlAAIBNBkg");
	this.shape_27.setTransform(274.6,-40.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(51,51,51,0.498)").s().p("AheEGIAAkMIg1AAIAAhoIA1AAIAAgRQAAgXAGgcQAEgbAOgRQANgSAZgLQAYgKAuAAQAmAABIAJIgQBWIgpgEQgUAAgIAHQgJAGgDAOIgCAhIBEAAIAABoIhEAAIAAEMg");
	this.shape_28.setTransform(242.8,-41);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(51,51,51,0.498)").s().p("AizCkQgjgfAAgtQAAgrAZgbQAZgaBDgOIBngWIA0gSQgBgagKgKQgLgLgcAAQgiAAgRALQgPAJgIAYIiIgOQAHgkAPgUQAPgVAbgPQATgLAjgGQAigGAoAAQBAAAAnAHQAnAHAaAXQASAQAKAdQALAdAAAaIAACkQAAAbAEAPQADAPALAXIiGAAIgLgWIgEgYQgdAbgbAMQglAPgzAAQhCAAgjgfgAgDAcQgsAMgLALQgMAMAAAOQAAARAMALQALALAXAAQAYAAAUgMQAUgLAJgRQAJgRAAgbIAAgWg");
	this.shape_29.setTransform(189.5,-33.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,51,51,0.498)").s().p("AhHECIAAoDICPAAIAAIDg");
	this.shape_30.setTransform(158.4,-40.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(51,51,51,0.498)").s().p("AglD4QgZgOgMgcQgMgbAAg/IAAiCIg1AAIAAhpIA1AAIAAhFICOhJIAACOIBPAAIAABpIhPAAIAACDQAAAYAFAIQAHAMARgBQAQABAdgKIAKBjQg1AMguAAQg0AAgagOg");
	this.shape_31.setTransform(116.5,-40.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(51,51,51,0.498)").s().p("AiOCmQgrgdgMg2ICOgNQAIAZAQALQAQALAZAAQAdAAAQgNQAMgJAAgNQAAgQgQgIQgMgGgwgJQhLgNgdgLQgdgLgTgZQgVgbABghQgBglAVgbQAWgbAmgNQAlgNBAAAQBBAAAhAKQAfAKAWAWQAUAVAPAlIiIANQgGgSgLgIQgSgLgXAAQgYAAgLAIQgLAJAAAMQAAAOAOAHQAOAHAuAFQBIAJAiAOQAkAOASAaQATAagBAgQABAhgUAeQgTAfgrASQgqAShIAAQhmAAgrgdg");
	this.shape_32.setTransform(83.2,-33.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(51,51,51,0.498)").s().p("Ah0CuQgrgVgcgtQgcguAAg9QAAhXA4g2QA4g2BjAAQBPAAAuAYQAvAYAYAvQAYAuAABIIAAARIkeAAQAEAiAPARQAUAYAhAAQAVAAATgKQAMgHANgRICNANQggA4guAZQgtAYhVAAQhKAAgqgVgABHggQgFgpgSgSQgSgSgeAAQghAAgUAbQgNARgEAhICNAAIAAAAg");
	this.shape_33.setTransform(42.7,-33.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(51,51,51,0.498)").s().p("AhLBRQApgTAPgTQAPgTACgYIhJAAIAAiOICYAAIAAB1QAABAgbAmQgbAmhBAcg");
	this.shape_34.setTransform(13.7,-52.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(51,51,51,0.498)").s().p("AhWC4QgngLgdgZQgcgZgRghQgQghAAg3QAAg5AUgmQAOgcAZgXQAZgWAbgLQApgRBBAAQBbAAAwAhQAwAgAUA/IiHASQgGgYgRgMQgRgMgcAAQgiAAgWAZQgWAaAAAyQAAAuAVAYQAWAYAhAAQAcAAATgOQATgPAKgdICIAPQgLArgaAfQgaAfgnARQgoARg+AAQg6AAgogLg");
	this.shape_35.setTransform(-15.3,-33.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(51,51,51,0.498)").s().p("AhGECIAAl1ICOAAIAAF1gAhGifIAAhiICOAAIAABig");
	this.shape_36.setTransform(-65.4,-40.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(51,51,51,0.498)").s().p("AizCkQgjgfAAgtQAAgrAZgbQAZgaBDgOIBogWIAygSQAAgagLgKQgLgLgbAAQgiAAgSALQgNAJgJAYIiJgOQAIgkAPgUQAOgVAcgPQATgLAjgGQAjgGAoAAQA/AAAnAHQAnAHAaAXQASAQALAdQAKAdAAAaIAACkQAAAbADAPQAEAPALAXIiGAAIgKgWIgGgYQgcAbgcAMQglAPgyAAQhCAAgjgfgAgDAcQgsAMgMALQgMAMAAAOQAAARAMALQAMALAXAAQAYAAATgMQAVgLAJgRQAJgRgBgbIAAgWg");
	this.shape_37.setTransform(-96.3,-33.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(51,51,51,0.498)").s().p("ACtC/IAAjUQAAgZgKgNQgOgSgWgBQgZABgPARQgPATAAApIAAC/IiPAAIAAjNIgDghQgEgOgMgJQgLgJgPAAQgZABgQASQgQATAAAqIAAC+IiPAAIAAl0ICGAAIAAA2QAcgiAegPQAdgOAqAAQAtAAAZAQQAaAQAQAfQAiglAcgNQAcgNAoAAQA8AAAiAkQAiAjAABMIAADqg");
	this.shape_38.setTransform(-151.3,-33.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(51,51,51,0.498)").s().p("AhTD9QglgKgZgTQgagUgQgYQgQgYgKgkICRgQQAFAjATASQAUASAZAAQAeAAAUgXQATgWAAgtQAAgvgTgVQgUgUggAAQgVAAgTAJQgOAHgSATIh6gRIAukUIFTAAIAAByIjmAAIgMBNQAYgLAYgFQAWgGAXAAQBNAAAwAvQAwAtAABHQAAAygYAuQgZAvguAYQgtAYhHAAQgyAAgkgJg");
	this.shape_39.setTransform(-225.6,-40.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(51,51,51,0.498)").s().p("Ah0CuQgsgVgbgtQgcguAAg9QAAhXA4g2QA4g2BjAAQBPAAAuAYQAvAYAYAvQAYAuAABIIAAARIkeAAQAEAiAPARQAUAYAhAAQAVAAATgKQAMgHANgRICNANQggA4guAZQguAYhUAAQhKAAgqgVgABHggQgEgpgTgSQgSgSgdAAQgiAAgUAbQgNARgEAhICNAAIAAAAg");
	this.shape_40.setTransform(-287.2,-33.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(51,51,51,0.498)").s().p("AjLECIAAoDICgAAIAAGEID3AAIAAB/g");
	this.shape_41.setTransform(-328.7,-40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-365.4,-101,730.9,202.1), null);


(lib.tete_marx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.barbe();
	this.instance.parent = this;
	this.instance.setTransform(-157.5,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tete_marx, new cjs.Rectangle(-157.5,-167.5,315,335), null);


(lib.tete_macron = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.macron();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tete_macron, new cjs.Rectangle(-103.5,-161,207,322), null);


(lib.panel_win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjajAIB5gKICxDaIgUjoIB6gKIAlGjIh7AKIivjYIATDmIh6AKg");
	this.shape.setTransform(105.1,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgDMQgwgSghgvQgigugGhKQgJhmA1g+QA0g+BmgJQBogJA+AzQA9A0AJBlQAHBJgVAxQgVAxgsAfQgtAehGAGIghABQgxAAglgOgAgKh2QgoAEgVAeQgVAdAFBAQAGA/AaAaQAZAaAogEQAqgEAVgdQAUgdgGhGQgFg7gagZQgXgWghAAIgKAAg");
	this.shape_1.setTransform(63.4,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjgjHIDYgSQA8gGAhAIQAgAHAXAbQAVAaADAoQAEAjgNAbQgNAagZASQgPALgdAJQAYAGALAGIAXAVIAUAYIBKB1IiTAMIhPh6QgQgYgKgHQgPgIgTACIgLABIAPCqIiDALgAgdiCIg5AFIAHBVIA3gFIAhgIQAMgEAIgLQAHgMgBgNQgCgVgOgKQgKgHgWAAIgQABg");
	this.shape_2.setTransform(26.7,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSDPQgtgQgkgwQgkgvgHhOQgJhnAzg9QAyg9BmgJQBOgHAxAdQAwAcAcBAIhxAkQgHgTgIgIQgMgOgRgHQgQgHgSACQgtAEgUAmQgPAcAEA3QAGBGAYAYQAXAXAlgDQAmgDARgWQARgXAFgpIB1AZQgHAxgWAiQgWAigjAUQgjATg5AFQgTABgQAAQgtAAgggLg");
	this.shape_3.setTransform(-13.3,40.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhqjSICMgMIDDGVIiIAMIgchDIiSAMIgOBHIiEAMgAg9AvIBcgIIg7iSg");
	this.shape_4.setTransform(-49.3,44.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ak4joIDSgSIBsEyIA1lAIDRgTIAtIEIiCAMIgimKIhDGTIh2AKIiGmBIAiGJIiDAMg");
	this.shape_5.setTransform(-101.3,43.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhqjRICMgNIDDGWIiIALIgbhEIiTANIgOBIIiFALgAg8AvIBbgIIg7iSg");
	this.shape_6.setTransform(-7.7,-39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("A4fqlMAx1gFKIjgcKMgvLADVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.panel_win, new cjs.Rectangle(-162.1,-100.8,324.3,201.6), null);


(lib.panel_souffle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhChoIiRANIgKhzIGxglIAKByIiSANIAeFcIiOAMg");
	this.shape.setTransform(159.8,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj3jbIDvgVQBBgFAkAIQAkAIAYAdQAYAdAEAsQAEAngOAeQgOAdgcAUQgSALgeAKQAaAHAMAHIAaAXIAWAaIBRCBIiiAOIhYiHQgQgagNgIQgRgJgTACIgNABIARC8IiQAMgAghiPIg/AFIAJBfIA8gGIAlgKQAOgEAIgMQAIgNgBgPQgCgWgQgLQgLgIgYAAIgTABg");
	this.shape_1.setTransform(124,40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhpDiQg1gVglgzQglgzgHhSQgKhwA6hFQA6hFBxgKQBygKBEA6QBEA4AKBwQAHBQgXA2QgXA3gxAhQgxAihNAGQgUACgSAAQg1AAgogPgAgLiCQgsAEgXAhQgYAhAGBFQAGBHAdAcQAdAcAsgEQAugEAXggQAWgggGhMQgGhCgdgcQgagZgmAAIgJABg");
	this.shape_2.setTransform(77.2,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai0jXIFhgfIAIBjIjRATIAHBRICzgQIAIBdIizAPIAQC+IiPAMg");
	this.shape_3.setTransform(36,47.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiUDQQgxgpgNhGICIgUQAHAhAPAPQAZAbAogEQAfgCAPgQQAQgQgCgTQgCgSgRgNQgRgNg6gHQhggNgrgfQgrgggFg2QgDgkASghQASgiAogVQAogWBIgHQBYgHAyAdQAxAcAPBIIiGATQgIgegSgNQgTgNgeADQgZACgLAMQgMALACAPQAAAMAMAHQALAJAmAEQBeANArARQArARAVAdQAVAcADAmQAEAtgVAoQgWAngqAXQgrAYhDAGQgWABgVAAQhUAAgoghg");
	this.shape_4.setTransform(-13.3,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghD1QgpgBgcgLQgcgMgZgYQgYgYgLgbQgRgrgDgiIgYkTICPgNIAZEaQADAmAXATQAXAUAkgDQAlgDATgXQATgXgDgnIgYkZICPgNIAYETQADApgJAmQgKAlgZAeQgZAegdAOQgpATg6AFQgXACgYAAIgagBg");
	this.shape_5.setTransform(-57,55.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjKjgICPgNIAeFcIDegTIAKByIltAgg");
	this.shape_6.setTransform(-93.6,59.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Aj5kPIEkgZQBggIAzApQA0ApAHBUQAHBXgvA0QgwA1hrAKIhfAIIASDTIixAQgAgMiuIgyAEIALB/IArgEQAygEATgUQATgTgCgcQgCgagUgSQgPgNgiAAIgTABg");
	this.shape_7.setTransform(-138.4,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjXjWIGAgiIAIBjIjwAVIAHBKIDegUIAIBeIjeATIAIBcID2gVIAJBpImFAhg");
	this.shape_8.setTransform(124.8,-63.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjKjhICPgMIAeFdIDegUIAKByIltAgg");
	this.shape_9.setTransform(88.4,-59.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ai0jXIFhgfIAIBjIjRATIAHBRICzgQIAIBdIizAPIAQC+IiPAMg");
	this.shape_10.setTransform(51,-57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ai0jXIFhgfIAIBjIjRATIAHBRICzgQIAIBdIizAPIAQC+IiPAMg");
	this.shape_11.setTransform(15.9,-54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghD1QgpgBgcgLQgcgMgZgYQgYgYgLgbQgRgrgDgiIgYkTICPgNIAZEaQADAmAXATQAXAUAkgDQAlgDATgXQATgXgDgnIgYkZICPgNIAYETQADApgJAmQgKAlgZAeQgZAegdAOQgpATg6AFQgXACgYAAIgagBg");
	this.shape_12.setTransform(-24.8,-50.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhpDiQg1gVglgzQglgzgHhSQgKhwA6hFQA6hFBxgKQBygKBEA6QBEA4AKBwQAHBQgXA2QgXA3gxAhQgxAihNAGQgUACgSAAQg1AAgogPgAgLiCQgsAEgXAhQgYAhAGBFQAGBHAdAcQAdAcAsgEQAugEAXggQAWgggGhMQgGhCgdgcQgagZgmAAIgJABg");
	this.shape_13.setTransform(-70,-46.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ai2EAQg9gzgPhWICngZQAJAoASAUQAfAhAxgFQAmgDATgTQATgUgCgXQgCgXgVgPQgVgQhIgKQh1gQg2glQg1gngGhDQgEgsAWgpQAWgqAygaQAxgbBZgIQBsgJA+AjQA8AkATBYIilAYQgLgmgWgQQgXgQgkAEQgfACgPAPQgOAOACATQABANAOAKQANAKAwAGQB0APA1AVQA0AVAaAkQAaAjAEAvQAEA2gaAxQgaAxg0AdQg1AchTAHQgcADgaAAQhnAAgwgpg");
	this.shape_14.setTransform(-117.5,-47.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Egj6gJ/MA+EgLSIJxfaMg+kALJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.panel_souffle, new cjs.Rectangle(-229.8,-136.2,459.7,272.4), null);


(lib.flamme2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sequence
	this.instance = new lib.flamme2();
	this.instance.parent = this;
	this.instance.setTransform(-32,-191);

	this.instance_1 = new lib.flamme1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.5,-191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-191,x:-32}}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance,p:{y:-190,x:-32}}]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance,p:{y:-190,x:-33}}]},4).to({state:[{t:this.instance_1}]},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-191,65,193);


(lib.flamme = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sequence
	this.instance = new lib.flamme1();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-191);

	this.instance_1 = new lib.flamme2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:-33,y:-190}}]},3).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1,p:{x:-32,y:-190}}]},4).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1,p:{x:-32,y:-191}}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-191,65,191);


(lib.back2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.back2();
	this.instance.parent = this;
	this.instance.setTransform(-400,-506.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back2_1, new cjs.Rectangle(-400,-506.5,800,1013), null);


(lib.back1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.back1();
	this.instance.parent = this;
	this.instance.setTransform(-400,-506.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back1_1, new cjs.Rectangle(-400,-506.5,800,1013), null);


(lib.anim_clic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("ABECcIAAgYIAYAAIAAAYgAAkCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgAhbCcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgAAkBcIAAgYIAYAAIAAAYgAAEBcIAAgYIAYAAIAAAYgAgbBcIAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgAAEA8IAAgYIAYAAIAAAYgAgbA8IAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAAEAcIAAgYIAYAAIAAAYgAgbAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgABEgDIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAAEgDIAAgYIAYAAIAAAYgAgbgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgABEgjIAAgYIAYAAIAAAYgAAkgjIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgABEhDIAAgYIAYAAIAAAYgAAkhDIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape.setTransform(174,-20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("ABECcIAAgYIAYAAIAAAYgAAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgAhbCcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAAEAcIAAgYIAYAAIAAAYgAgbAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAAEgDIAAgYIAYAAIAAAYgAgbgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgABEiDIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape_1.setTransform(151.6,-20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("ABECcIAAgYIAYAAIAAAYgAAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgAhbCcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape_2.setTransform(129.2,-20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("Ag7CcIAAgYIAYAAIAAAYgAhbCcIAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAAEAcIAAgYIAYAAIAAAYgAgbAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAAEgDIAAgYIAYAAIAAAYgAgbgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgABEiDIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape_3.setTransform(106.8,-20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.498)").s().p("AAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgABEBcIAAgYIAYAAIAAAYgAAkBcIAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgABEA8IAAgYIAYAAIAAAYgAAkA8IAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgABEAcIAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgABEgDIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgABEgjIAAgYIAYAAIAAAYgAAkgjIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgABEhDIAAgYIAYAAIAAAYgAAkhDIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgABEiDIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape_4.setTransform(84.4,-20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.498)").s().p("AAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgABEBcIAAgYIAYAAIAAAYgAAkBcIAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgABEA8IAAgYIAYAAIAAAYgAAkA8IAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgABEAcIAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgABEgDIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgABEgjIAAgYIAYAAIAAAYgAAkgjIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgABEhDIAAgYIAYAAIAAAYgAAkhDIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYg");
	this.shape_5.setTransform(62,-20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.498)").s().p("AAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgAhbCcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgABEBcIAAgYIAYAAIAAAYgAAkBcIAAgYIAYAAIAAAYgABEA8IAAgYIAYAAIAAAYgAAkA8IAAgYIAYAAIAAAYgABEAcIAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAAEAcIAAgYIAYAAIAAAYgAgbAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAAEgDIAAgYIAYAAIAAAYgAgbgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgABEiDIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYg");
	this.shape_6.setTransform(39.6,-20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.498)").s().p("ABECcIAAgYIAYAAIAAAYgAAkCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgAhbCcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgAAkBcIAAgYIAYAAIAAAYgAAEBcIAAgYIAYAAIAAAYgAgbBcIAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgAAEA8IAAgYIAYAAIAAAYgAgbA8IAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAAEAcIAAgYIAYAAIAAAYgAgbAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgABEgDIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAAEgDIAAgYIAYAAIAAAYgAgbgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgABEgjIAAgYIAYAAIAAAYgAAkgjIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgABEhDIAAgYIAYAAIAAAYgAAkhDIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape_7.setTransform(-2,-20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.498)").s().p("AAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgABEBcIAAgYIAYAAIAAAYgAAkBcIAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgABEA8IAAgYIAYAAIAAAYgAAkA8IAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgABEAcIAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgABEgDIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgABEgjIAAgYIAYAAIAAAYgAAkgjIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgABEhDIAAgYIAYAAIAAAYgAAkhDIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgABEiDIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape_8.setTransform(-24.4,-20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.498)").s().p("AAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgABEBcIAAgYIAYAAIAAAYgAAkBcIAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgABEA8IAAgYIAYAAIAAAYgAAkA8IAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgABEAcIAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgABEgDIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgABEgjIAAgYIAYAAIAAAYgAAkgjIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgABEhDIAAgYIAYAAIAAAYgAAkhDIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYg");
	this.shape_9.setTransform(-46.8,-20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.498)").s().p("Ag7CcIAAgYIAYAAIAAAYgAhbCcIAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgAAkA8IAAgYIAYAAIAAAYgAAEA8IAAgYIAYAAIAAAYgAgbA8IAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgABEAcIAAgYIAYAAIAAAYgAAkAcIAAgYIAYAAIAAAYgAAEAcIAAgYIAYAAIAAAYgAgbAcIAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgABEgDIAAgYIAYAAIAAAYgAAkgDIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgABEgjIAAgYIAYAAIAAAYgAAkgjIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgABEhDIAAgYIAYAAIAAAYgAAkhDIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape_10.setTransform(-69.2,-20.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.498)").s().p("AAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgABEBcIAAgYIAYAAIAAAYgAAkBcIAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgABEhDIAAgYIAYAAIAAAYgAAkhDIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYg");
	this.shape_11.setTransform(-110.8,-20.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.498)").s().p("ABECcIAAgYIAYAAIAAAYgAAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgAhbCcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgAAEBcIAAgYIAYAAIAAAYgAgbBcIAAgYIAYAAIAAAYgAAEA8IAAgYIAYAAIAAAYgAgbA8IAAgYIAYAAIAAAYgAAEAcIAAgYIAYAAIAAAYgAgbAcIAAgYIAYAAIAAAYgAAEgDIAAgYIAYAAIAAAYgAgbgDIAAgYIAYAAIAAAYgAAEgjIAAgYIAYAAIAAAYgAgbgjIAAgYIAYAAIAAAYgAAEhDIAAgYIAYAAIAAAYgAgbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgABEiDIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape_12.setTransform(-133.2,-20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.498)").s().p("ABECcIAAgYIAYAAIAAAYgAAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgAhbCcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYgAhbiDIAAgYIAYAAIAAAYg");
	this.shape_13.setTransform(-155.6,-20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.498)").s().p("AAkCcIAAgYIAYAAIAAAYgAAECcIAAgYIAYAAIAAAYgAgbCcIAAgYIAYAAIAAAYgAg7CcIAAgYIAYAAIAAAYgABEB8IAAgYIAYAAIAAAYgAAkB8IAAgYIAYAAIAAAYgAAEB8IAAgYIAYAAIAAAYgAgbB8IAAgYIAYAAIAAAYgAg7B8IAAgYIAYAAIAAAYgAhbB8IAAgYIAYAAIAAAYgABEBcIAAgYIAYAAIAAAYgAAkBcIAAgYIAYAAIAAAYgAg7BcIAAgYIAYAAIAAAYgAhbBcIAAgYIAYAAIAAAYgAg7A8IAAgYIAYAAIAAAYgAhbA8IAAgYIAYAAIAAAYgAg7AcIAAgYIAYAAIAAAYgAhbAcIAAgYIAYAAIAAAYgAg7gDIAAgYIAYAAIAAAYgAhbgDIAAgYIAYAAIAAAYgAg7gjIAAgYIAYAAIAAAYgAhbgjIAAgYIAYAAIAAAYgABEhDIAAgYIAYAAIAAAYgAAkhDIAAgYIAYAAIAAAYgAg7hDIAAgYIAYAAIAAAYgAhbhDIAAgYIAYAAIAAAYgABEhjIAAgYIAYAAIAAAYgAAkhjIAAgYIAYAAIAAAYgAAEhjIAAgYIAYAAIAAAYgAgbhjIAAgYIAYAAIAAAYgAg7hjIAAgYIAYAAIAAAYgAhbhjIAAgYIAYAAIAAAYgAAkiDIAAgYIAYAAIAAAYgAAEiDIAAgYIAYAAIAAAYgAgbiDIAAgYIAYAAIAAAYgAg7iDIAAgYIAYAAIAAAYg");
	this.shape_14.setTransform(-178,-20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.anim_clic, new cjs.Rectangle(-234.5,-37,469.1,44), null);


(lib.hud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:1,game:3});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		this.cursor.visible = false;
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2));

	// texte
	this.anim_clic = new lib.anim_clic();
	this.anim_clic.parent = this;
	this.anim_clic.setTransform(2.7,18.1);

	this.timeline.addTween(cjs.Tween.get(this.anim_clic).to({_off:true},2).wait(3));

	// cursor
	this.cursor = new lib.ui_cursor();
	this.cursor.parent = this;
	this.cursor.setTransform(-350,0,1,1,0,0,0,0,-45);

	this.timeline.addTween(cjs.Tween.get(this.cursor).wait(2).to({_off:true},2).wait(1));

	// game
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AuSE1IAAppIclAAIAAJpg");
	this.shape.setTransform(252.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("Aj5E1IAAppIHzAAIAAJpg");
	this.shape_1.setTransform(135,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[]},2).wait(1));

	// fond
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eg2rgFxMBtXAAAIAALjMhtXAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg2rAFyIAArjMBtXAAAIAALjg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.5,-45,717.5,90);


(lib.cake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gateau
	this.instance = new lib.bougies();
	this.instance.parent = this;
	this.instance.setTransform(0,-605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bougie5
	this.bougie5 = new lib.flamme();
	this.bougie5.parent = this;
	this.bougie5.setTransform(88.7,-495.7,0.888,0.888,0,0,0,0.1,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.bougie5).wait(1));

	// bougie4
	this.bougie4 = new lib.flamme2_1();
	this.bougie4.parent = this;
	this.bougie4.setTransform(198.4,-513.1,0.845,0.845,0,0,0,0.5,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.bougie4).wait(1));

	// bougie3
	this.bougie3 = new lib.flamme();
	this.bougie3.parent = this;
	this.bougie3.setTransform(288.1,-483.1,1.134,1.134,0,0,0,0,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.bougie3).wait(1));

	// bougie2
	this.bougie2 = new lib.flamme2_1();
	this.bougie2.parent = this;
	this.bougie2.setTransform(387.2,-508.8,0.846,0.846,0,0,0,0.5,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.bougie2).wait(1));

	// bougie1
	this.bougie1 = new lib.flamme();
	this.bougie1.parent = this;
	this.bougie1.setTransform(493.5,-505.5,1,1,0,0,0,0,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.bougie1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cake, new cjs.Rectangle(0,-605,675,605), null);


// stage content:
(lib.fam5m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// au début flame lente
		// flame plus fort
		// 1 sec avec le panneau puis retour au début
		// si bon on translate la tête de Karl
		
		var game = this;
		
		var md = new MobileDetect(window.navigator.userAgent);
		
		const ENTER_FRAME = "tick";
		const CLICK_EVENT = "click";
		
		const INIT 	 = 0;
		const GAME 	 = 1;
		const END	 = 2;
		const WIN 	 = 3;
		
		const MAX_DIST 	  	= 700;
		const ZERO_CURSOR 	= -350;
		const zone_white 	= {min:ZERO_CURSOR,max:460+ZERO_CURSOR};
		
		var		flame_speed	= 1;
		const 	flame_coeff	= 1;
		const 	flame_max	= 5;
		
		const FORCE_CURSOR 	= 10;
		var	  speed_cursor 	= 0;
		var   speed_loose 	= 1;
		
		const pos_orig_s 	= this.souffle_panel.y;
		const pos_orig_w 	= this.win_panel.y;
		
		var allBougies = [
							game.cake.bougie1,
							game.cake.bougie2,
							game.cake.bougie3,
							game.cake.bougie4,
							game.cake.bougie5
						];
		
		const reset = ()=>{
			//init hide
			TweenMax.killTweensOf(this.win_panel);
			TweenMax.killTweensOf(this.souffle_panel);
		
			this.win_panel.visible 		= false;
			this.souffle_panel.visible 	= false;
		
			game.macron_tete.visible 	= false;
			game.marx_up_tete.visible   = false;
			game.marx_tete.visible  	= true;
			
			game.back1.visible = true;
			game.back2.visible = false;
			
			game.state = INIT;
			game.hud.gotoAndStop(1);
			game.cake.alpha = 1;
			game.hud.alpha 	= 1;
			
			flame_speed  = 20;
			speed_cursor = FORCE_CURSOR;
			speed_loose  = 1;
			
			changeBougies(false);
			TweenMax.staggerTo(allBougies, 0.5, {visible:true}, 0.2);
			changeSpeedBougies(flame_speed);
		};
		
		reset();
		
		var starters = [this.cake,this.hud];
		
		var tl = new TimelineMax({onComplete:startEngine});
		tl.from(this.title,0.4,{y:-300})
		  .staggerFrom(starters,1.2,{alpha:0,y:"-=80",ease:Back.easeOut},0.1);
		
		function startEngine(evt)
		{
			console.log("Install Game");
			game.on(CLICK_EVENT,engine);
		}
		
		// Mechanics 
		const engine = ()=>{
			console.log("Start game",game.state);
			switch(game.state)
			{
				case INIT: 	launchGame(); 	break;
				case GAME: 	playGame(); 	break;
				case END: 	playFinish(); 	break;
				case WIN:	finishGame();	break;
				default: 
					console.log("ERROR state !");
					reset();
				break;
			}
		}
		
		function launchGame()
		{
			game.hud.gotoAndStop("game");
			startCursor();
			game.on(ENTER_FRAME,tickCursor);
			game.state = GAME;
		}
		
		const tickCursor = ()=>{
			console.log("Tick Cursor");
			game.hud.cursor.x -= speed_loose;
			game.hud.cursor.x = Math.max(ZERO_CURSOR,game.hud.cursor.x);
		};
		
		function playGame()
		{
			game.hud.cursor.x += speed_cursor;
			game.hud.cursor.x = Math.min(MAX_DIST+ZERO_CURSOR,game.hud.cursor.x);
			
			let pos = (game.hud.cursor.x);
			console.log("Game:",pos," limit:",(zone_white.max + zone_white.min)/2);
			
			if(pos >= zone_white.min 
			&& zone_white.max >= pos)
			{
				var marx = (pos > (zone_white.max + zone_white.min)/2)
				if(marx && game.marx_tete.visible)
				{
					speed_cursor 	+= FORCE_CURSOR;
					//speed_loose  	+= 1;
					flame_speed 	= 60;
					changeSpeedBougies(flame_speed);
				}
				game.marx_up_tete.visible   = marx;
				game.marx_tete.visible  	= !marx;
				
				if(!game.souffle_panel.visible)
				{
					TweenMax.killTweensOf(game.souffle_panel);
					game.souffle_panel.y = pos_orig_s;
					TweenMax.fromTo(game.souffle_panel,0.5,{y:pos_orig_s-80,alpha:0,visible:false},{y:pos_orig_s,alpha:1,visible:true});
				}
			}else game.state = END;
		}
		
		function playFinish()
		{
				game.back1.visible = false;
				game.back2.visible = true;
			
				console.log("green");
				game.macron_tete.visible  = true;
				game.marx_tete.visible	  = false;
				game.marx_up_tete.visible = false;
			
				game.removeAllEventListeners(ENTER_FRAME);
			
				TweenMax.killTweensOf(game.win_panel);
				TweenMax.killTweensOf(game.hud.cursor);
				
				TweenMax.fromTo(game.souffle_panel,0.3,{y:pos_orig_s,alpha:1,visible:true},{y:pos_orig_s-80,alpha:0,visible:false});
				TweenMax.staggerTo(allBougies, 0.5, {visible:false}, 0.2);
		
				TweenMax.to(game.hud.cursor,1,{x:(MAX_DIST+ZERO_CURSOR),onComplete:()=>{
					stopCursor();
					game.win_panel.y = pos_orig_w;
					TweenMax.fromTo(game.win_panel,0.5,{y:pos_orig_w-80,alpha:0,visible:false},{y:pos_orig_w,alpha:1,visible:true,onComplete:()=>{
						game.state = WIN;
					}});
				}});
		}
		
		function finishGame()
		{
			reset();
		}
		
		// Helpers
		
		function startCursor()
		{
			game.hud.cursor.visible = true;
			game.hud.cursor.x = ZERO_CURSOR;
		
			//tl.to(root.cta_mc, .75, {scaleX:.85, scaleY:.85, repeat:-1, yoyo:true, repeatDelay:0.25, ease:Expo.easeInOut});
			//tlCursor.fromTo(game.hud.cursor,2,{x:-350,ease:Back.easeOut},{x:350,ease:Back.easeOut}).yoyo()
			
			//var options = { template:  Power1.easeInOut, strength: 0.2, points: 100, taper: "none", randomize:  true, clamp: true};
			//TweenMax.fromTo(game.hud.cursor, 2.5,{x:ZERO_CURSOR},{ ease: RoughEase.ease.config(options), x:(MAX_DIST+ZERO_CURSOR), repeat:-1, yoyo:true,onUpdate:()=>{
			//	console.log("x:",game.hud.cursor.x);
			//}});
		}
		
		function stopCursor()
		{
			TweenMax.killTweensOf(game.hud.cursor);
			game.hud.cursor.visible = false;
		}
		
		function changeSpeedBougies(value)
		{
			allBougies.forEach((bougie)=>{
				bougie.framerate = value;
			});
		}
		
		function changeBougies(value)
		{
			allBougies.forEach((bougie)=>{
				bougie.visible = value;
			});
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// win
	this.win_panel = new lib.panel_win();
	this.win_panel.parent = this;
	this.win_panel.setTransform(181.4,199);

	this.timeline.addTween(cjs.Tween.get(this.win_panel).wait(1));

	// souffle
	this.souffle_panel = new lib.panel_souffle();
	this.souffle_panel.parent = this;
	this.souffle_panel.setTransform(561.9,718.1);

	this.timeline.addTween(cjs.Tween.get(this.souffle_panel).wait(1));

	// touche
	this.hud = new lib.hud();
	this.hud.parent = this;
	this.hud.setTransform(400,919.2);

	this.timeline.addTween(cjs.Tween.get(this.hud).wait(1));

	// title
	this.title = new lib.title();
	this.title.parent = this;
	this.title.setTransform(386.6,96.1);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// cake
	this.cake = new lib.cake();
	this.cake.parent = this;
	this.cake.setTransform(337.5,710.5,1,1,0,0,0,337.5,-302.5);

	this.timeline.addTween(cjs.Tween.get(this.cake).wait(1));

	// marx_up
	this.marx_up_tete = new lib.tete_marx_up();
	this.marx_up_tete.parent = this;
	this.marx_up_tete.setTransform(490,249.5);

	this.timeline.addTween(cjs.Tween.get(this.marx_up_tete).wait(1));

	// marx
	this.marx_tete = new lib.tete_marx();
	this.marx_tete.parent = this;
	this.marx_tete.setTransform(489.5,266.5);

	this.timeline.addTween(cjs.Tween.get(this.marx_tete).wait(1));

	// macron
	this.macron_tete = new lib.tete_macron();
	this.macron_tete.parent = this;
	this.macron_tete.setTransform(473.5,245);

	this.timeline.addTween(cjs.Tween.get(this.macron_tete).wait(1));

	// chaise
	this.instance = new lib.corps();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.back2 = new lib.back2_1();
	this.back2.parent = this;
	this.back2.setTransform(400,506.5);

	this.instance_1 = new lib.cursor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(449,348);

	this.back1 = new lib.back1_1();
	this.back1.parent = this;
	this.back1.setTransform(400,506.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.back1},{t:this.instance_1},{t:this.back2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,501.5,800,1018);
// library properties:
lib.properties = {
	id: 'F70FA83CFAB7478D9B5C3784C89CDC38',
	width: 800,
	height: 1013,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fam5m_atlas_.png?1525455215352", id:"fam5m_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F70FA83CFAB7478D9B5C3784C89CDC38'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;