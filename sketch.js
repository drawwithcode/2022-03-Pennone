let AJ_Song = 1;
let BS_Song = 1;
let BL_Song = 1;
let MS_Song = 1;
let VD_Song = 1;

let AJ_Image = 1;
let BS_Image = 1;
let BL_Image = 1;
let MS_Image = 1;
let VD_Image = 1;

let Lips = 1;
let Sing = 1;

let Waiting = 1;

let Static = [];
let Static_Sound = 1;

let message = 1;
let startup = false;

function preload() {
	Static = loadImage("./libraries/assets/static.gif");

	AJ_Image = loadImage("./libraries/assets/Al_Jolson.png");
	BS_Image = loadImage("./libraries/assets/Bessie_Smith.png");
	BL_Image = loadImage("./libraries/assets/Blind_Lemon.png");
	MS_Image = loadImage("./libraries/assets/Mamie_Smith.png");
	VD_Image = loadImage("./libraries/assets/Vernon_Dalhart.png");

	Lips = loadImage("./libraries/assets/Lips.gif");
	Sing = loadImage("./libraries/assets/Sing.gif");

	AJ_Song = loadSound("./libraries/assets/Al_Jolson.ogg");
	BS_Song = loadSound("./libraries/assets/Bessie_Smith.ogg");
	BL_Song = loadSound("./libraries/assets/Blind_Lemon.ogg");
	MS_Song = loadSound("./libraries/assets/Mamie_Smith.ogg");
	VD_Song = loadSound("./libraries/assets/Vernon_Dalhart.ogg");

	Static_Sound = loadSound("./libraries/assets/Static.ogg");
	Waiting = loadSound("./libraries/assets/Waiting.ogg");


}

function setup() {
	createCanvas(windowWidth, windowHeight);

	textFont("Bad Script");
	textAlign(CENTER, CENTER);
	let Text_Size = map(windowWidth, 1, 1920, 14, 28);
  	textSize(Text_Size);

	rectMode(CENTER);
	ellipseMode(CENTER);

	noCursor();

	message = "Click to start";

}

function draw() {

	console.log("non funziona boh");

	for(let i = 0; i < windowHeight; i += Static.height){
		for(let j = 0; j < windowWidth; j += Static.width){
			image(Static, j, i, Static.width, Static.height);
		}
	}

	let Image_Scale = map(width, 1, 1920, 0.2, 1);

	image(MS_Image, 0, 0, MS_Image.width * (Image_Scale*2.5), MS_Image.height * (Image_Scale*2.5))

	image(BL_Image, 0, height - (BL_Image.height * Image_Scale), BL_Image.width * (Image_Scale*2), BL_Image.height * (Image_Scale*2));

	image(VD_Image, width - (VD_Image.width * Image_Scale*1.7), -75, VD_Image.width * (Image_Scale*1.7), VD_Image.height * (Image_Scale*1.7));

	push();

	noStroke();
	fill(255, 255, 255, 191);
	
	rect(width/2, height/4, width/3, height/2, 20);

	image(AJ_Image, width - (AJ_Image.width * Image_Scale*0.8), height - (AJ_Image.height * Image_Scale*0.8), AJ_Image.width * (Image_Scale*0.8), AJ_Image.height * (Image_Scale*0.8));
	
	fill("black");
	text(message, width/2, height/4);

	image(BS_Image, width/2 - BS_Image.width * Image_Scale/1.2 * (Image_Scale*1.3), height - BS_Image.height * (Image_Scale*1.1), BS_Image.width * (Image_Scale*1.3), BS_Image.height * (Image_Scale*1.3));

	//prendere le misure
	//fill(255, 255, 255, 100);
	//circle(MS_Image.width / 1.35 * (Image_Scale*2.5), MS_Image.height / 3 * (Image_Scale*2.5), 100);
	//circle(BL_Image.width / 2.5 * (Image_Scale*2), height - (BL_Image.height * Image_Scale) + BL_Image.height / 3.9 * (Image_Scale*2), 100);
	//circle(width - (VD_Image.width * Image_Scale*1.7) + VD_Image.width / 2 * (Image_Scale*1.7), -75 + VD_Image.height / 3.5 * (Image_Scale*1.7), 100);
	//circle(width/2 - BS_Image.width * Image_Scale/1.2 * (Image_Scale*1.3) + BS_Image.width / 1.75 * (Image_Scale*1.3), height - BS_Image.height * (Image_Scale*1.1) + BS_Image.height / 2 * (Image_Scale*1.3), 100);
	//circle(width - (AJ_Image.width * Image_Scale*0.8) + AJ_Image.width / 2 * (Image_Scale*0.8), height - (AJ_Image.height * Image_Scale*0.8) + AJ_Image.height / 1.6 * (Image_Scale*0.8), 100);
	
	pop();

	//rect(mouseX, mouseY, 100);
	if(startup == true) {
		if(mouseX >= MS_Image.width / 1.35 * (Image_Scale*2.5) - 50 && mouseX <= MS_Image.width / 1.35 * (Image_Scale*2.5) + 50 && mouseY >= MS_Image.height / 3 * (Image_Scale*2.5) - 50 && mouseY <= MS_Image.height / 3 * (Image_Scale*2.5) + 50){
			image(Sing, mouseX - 100 * Image_Scale, mouseY - 100 * Image_Scale, 200 * Image_Scale, 200 * Image_Scale);
			MS_Song.setVolume(0.7);
			Static_Sound.setVolume(0.1);
			Waiting.setVolume(0);
		} else if(mouseX >= BL_Image.width / 2.5 * (Image_Scale*2) - 50 && mouseX <= BL_Image.width / 2.5 * (Image_Scale*2) + 50 && mouseY >= height - (BL_Image.height * Image_Scale) + BL_Image.height / 3.9 * (Image_Scale*2) - 50 && mouseY <= height - (BL_Image.height * Image_Scale) + BL_Image.height / 3.9 * (Image_Scale*2) + 50) {
			image(Sing, mouseX - 100 * Image_Scale, mouseY - 100 * Image_Scale, 200 * Image_Scale, 200 * Image_Scale);
			BL_Song.setVolume(0.7);
			Static_Sound.setVolume(0.1);
			Waiting.setVolume(0);
		} else if (mouseX >= width - (VD_Image.width * Image_Scale*1.7) + VD_Image.width / 2 * (Image_Scale*1.7) - 50 && mouseX <= width - (VD_Image.width * Image_Scale*1.7) + VD_Image.width / 2 * (Image_Scale*1.7) + 50 && mouseY >= -75 + VD_Image.height / 3.5 * (Image_Scale*1.7) - 50 && mouseY <= -75 + VD_Image.height / 3.5 * (Image_Scale*1.7) + 50) {
			image(Sing, mouseX - 100 * Image_Scale, mouseY - 100 * Image_Scale, 200 * Image_Scale, 200 * Image_Scale);
			VD_Song.setVolume(0.7);
			Static_Sound.setVolume(0.1);
			Waiting.setVolume(0);
		} else if (mouseX >= width/2 - BS_Image.width * Image_Scale/1.2 * (Image_Scale*1.3) + BS_Image.width / 1.75 * (Image_Scale*1.3) - 50 && mouseX <= width/2 - BS_Image.width * Image_Scale/1.2 * (Image_Scale*1.3) + BS_Image.width / 1.75 * (Image_Scale*1.3) + 50 && mouseY >= height - BS_Image.height * (Image_Scale*1.1) + BS_Image.height / 2 * (Image_Scale*1.3) - 50 && mouseY <= height - BS_Image.height * (Image_Scale*1.1) + BS_Image.height / 2 * (Image_Scale*1.3) + 50) {
			image(Sing, mouseX - 100 * Image_Scale, mouseY - 100 * Image_Scale, 200 * Image_Scale, 200 * Image_Scale);
			BS_Song.setVolume(0.7);
			Static_Sound.setVolume(0.1);
			Waiting.setVolume(0);
		} else if (mouseX >= width - (AJ_Image.width * Image_Scale*0.8) + AJ_Image.width / 2 * (Image_Scale*0.8) - 50 && mouseX <= width - (AJ_Image.width * Image_Scale*0.8) + AJ_Image.width / 2 * (Image_Scale*0.8) + 50 && mouseY >= height - (AJ_Image.height * Image_Scale*0.8) + AJ_Image.height / 1.6 * (Image_Scale*0.8) - 50 && mouseY <= height - (AJ_Image.height * Image_Scale*0.8) + AJ_Image.height / 1.6 * (Image_Scale*0.8) + 50) {
			image(Sing, mouseX - 100 * Image_Scale, mouseY - 100 * Image_Scale, 200 * Image_Scale, 200 * Image_Scale);
			AJ_Song.setVolume(0.7);
			Static_Sound.setVolume(0.1);
			Waiting.setVolume(0);
		} else if (mouseX >= width/3 && mouseX <= width - width/3 && mouseY <= height/2) {
			image(Lips, mouseX - 100 * Image_Scale, mouseY - 100 * Image_Scale, 200 * Image_Scale, 200 * Image_Scale);
			AJ_Song.setVolume(0.7);
			Static_Sound.setVolume(0.3);
			AJ_Song.setVolume(0);
			BS_Song.setVolume(0);
			BL_Song.setVolume(0);
			MS_Song.setVolume(0);
			VD_Song.setVolume(0);
			Waiting.setVolume(0.7);
		} else {
			image(Lips, mouseX - 100 * Image_Scale, mouseY - 100 * Image_Scale, 200 * Image_Scale, 200 * Image_Scale);
			AJ_Song.setVolume(0);
			BS_Song.setVolume(0);
			BL_Song.setVolume(0);
			MS_Song.setVolume(0);
			VD_Song.setVolume(0);
			Static_Sound.setVolume(0.8);
			Waiting.setVolume(0);
		}
	}

}

function mouseClicked() {
	if(startup == false) {
	startup = true;
	message = ("Royalty Free\n 20s Tunes\n\nMamie Smith\nBlind Lemon Jefferson\nBessie Smith\nAl Jolson\nVernon Dalhart");
	Static_Sound.setVolume(0.8);
	Static_Sound.loop();
	AJ_Song.setVolume(0);
	BS_Song.setVolume(0);
	BL_Song.setVolume(0);
	MS_Song.setVolume(0);
	VD_Song.setVolume(0);
	AJ_Song.loop();
	BS_Song.loop();
	BL_Song.loop();
	MS_Song.loop();
	VD_Song.loop();
	Waiting.setVolume(0);
	Waiting.loop();
	}
}
