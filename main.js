//Criar uma referência para tela
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2");
//Dê altura e largura específicas para a imagem do carro
greencar_width = 75;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x = 5;
green_y = 225;
function add() {
	//carregar carro e imagens de fundo na tela.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.jpg = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadBackground;
	greencar_imgTag.src = background_image;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canva.heigth);
}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencar_imgTag, greencar_x,green_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When arrow is pressed, x = "+ greencar_x +" | y = "+greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
    if(greencar_y >=10)
	{
	greencar_y = greencar_y + 10;
		console.log("When arrow is pressed, x = "+ greencar_x +" | y = "+greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencar_x >=10)
	{
	greencar_x = greencar_x - 10;
		console.log("When arrow is pressed, x = "+ greencar_x +" | y = "+greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencar_x >=10)
	{
	greencar_x = greencar_x + 10;
		console.log("When arrow is pressed, x = "+ greencar_x +" | y = "+greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}
