
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject= "";
var blockImageObject= "";

function playerUpdate()
{
	fabric.Image.fromURL("player.png", function(Img) {
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown", myKeyDown); /*A primeira linha é a função addEventListener. Essa linha de código adicionará um 
event listener para que possa obter os valores ASCII da tecla pressionada e chamar a função myKeydown().*/

function myKeyDown(e)
{
keyPressed = e.keyCode; /*e.keyCode obterá o valor da tecla pressionada. Esse é o valor ASCII da tecla pressionada. Armazenaremos 
esse valor dentro da variável keyPressed e exibiremos a informação no console. */

console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80') /*O código no slide verificará se as teclas "shift" e "p" são pressionadas juntas, 
apenas então, entrará na condição if. Se a condição for verdadeira, então, o console exibirá  “ as teclas p e shift foram pressionadas 
juntas”. Isso é feito para que possamos confinar que o código funciona. */
{
	console.log("p e shift pressionadas juntas"); 

	blockImageWidth = blockImageWidth + 10; /*A linha blockImageWidth = blockImageWidth + 10 aumentará a largura do bloco em 10. 
	Do mesmo modo, podemos modificar a altura.*/
	blockImageHeight = blockImageHeight + 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m e shift pressionadas juntas");
	blockImageWidth = blockImageWidth - 10;
	blockImageHeight = blockImageHeight - 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;
}

	if(keyPressed == '38')
	{
		up(); /*O código no slide verificará se o valor da variável keyPressed é 38, então, executará: Primeiro, chama a função  up(), a qual trabalharemos na próxima aula. Em seguida, o código console.log explica se o código foi executado ou não.
		Do mesmo modo, podemos escrever para outras funções, como down, left, right etc*/
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '87')
	{
		newImage('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		newImage('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		newImage('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		newImage('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		newImage('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		newImage('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		newImage('cloud.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(playerY >=0)
	{
		playerY = playerY - blockImageHeight;
		console.log("autura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Cima for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down()
{
	if(playerY <=500)
	{
		playerY = playerY + blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left()
{
	if(playerX >0)
	{
		playerX = playerX - blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right()
{
	if(playerX <=850)
	{
		playerX = playerX + blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional Direita for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
