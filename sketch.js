let AJ_Song;
let BS_Song;
let BL_Song;
let MS_Song;
let VD_Song;

let AJ_Image;
let BS_Image;
let BL_Image;
let MS_Image;
let VD_Image;

let Waiting;

let Static = [];
let Static_Sound;

function preload() {
	Static = loadImage("./assets/static.gif");

	AJ_Image = loadImage("./assets/Al_Jolson.png");
	BS_Image = loadImage("./assets/Bessie_Smith.png");
	BL_Image = loadImage("./assets/Blind_Lemon.png");
	MS_Image = loadImage("./assets/Mamie_Smith.png");
	VD_Image = loadImage("./assets/Vernon_Dalhart.png");

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	textFont("Bad Script");
	textAlign(CENTER, CENTER);
	let Text_Size = map(windowWidth, 1, 1920, 14, 28);
  	textSize(Text_Size);

	rectMode(CENTER);

}

function draw() {

	for(let i = 0; i < windowHeight; i += Static.height){
		for(let j = 0; j < windowWidth; j += Static.width){
			image(Static, j, i, Static.width, Static.height);
		}
	}

	let Image_Scale = map(width, 1, 1920, 0.2, 1);

	image(MS_Image, 0, 0, MS_Image.width * (Image_Scale*2.5), MS_Image.height * (Image_Scale*2.5))

	image(BL_Image, 0, height - (BL_Image.height * Image_Scale), BL_Image.width * (Image_Scale*2), BL_Image.height * (Image_Scale*2));

	image(VD_Image, width - (VD_Image.width * Image_Scale*1.7), -75, VD_Image.width * (Image_Scale*1.7), VD_Image.height * (Image_Scale*1.7));

	image(AJ_Image, width - (AJ_Image.width * Image_Scale*0.8), height - (AJ_Image.height * Image_Scale*0.8), AJ_Image.width * (Image_Scale*0.8), AJ_Image.height * (Image_Scale*0.8));

	push();
	noStroke();
	fill(255, 255, 255, 191);
	rect(width/2, height/2, width/3, height/2, 20);

	if (windowWidth < 775){
		image(BS_Image, width/2 - BS_Image.width * Image_Scale/8 * (Image_Scale*1.2), height - BS_Image.height * (Image_Scale*1.2), BS_Image.width * (Image_Scale*1.2), BS_Image.height * (Image_Scale*1.2));
	} else {
		image(BS_Image, width/2 - BS_Image.width * Image_Scale/8 * (Image_Scale*1.2), height - BS_Image.height * (Image_Scale*1.2), BS_Image.width * (Image_Scale*1.2), BS_Image.height * (Image_Scale*1.2));
	}
	pop();
	
	const message1 = "(WIP)\nRoyalty Free\n 20s Tunes\n\nAl Jolson\nBessie Smith\nBlind Lemon Jefferson\nMamie Smith\nVernon Dalhart";
	text(message1, width/2, height/2);



}
