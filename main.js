var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_obj = "";
block_image_obj = "";
function player_update() {
    fabric.Image.fromUrl("player.png", function (img) {
        player_obj = Img;

        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);
        player_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_obj);


    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_obj = Img;

        block_image_obj.scaleToWidth(block_image_width);
        block_image_obj.scaleToHeight(block_image_height);
        block_image_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_obj);


    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;

    if (e.shiftKey == true && keyPressed == '80') {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == '38') {
        up();

        console.log("up")
    }

    if (keyPressed == '39') {
        right();

        console.log("right")
    }

    if (keyPressed == '40') {
        down();

        console.log("down")
    }

    if (keyPressed == '37') {
        left();

        console.log("left");
    }

    if (keyPressed == '70') {
        new_image('http://assets.stickpng.com/images/580b57fbd9996e24bc43c051.png');

        console.log("f");
    }
    
    if (keyPressed == '66') {
        new_image('spiderman.png');

        console.log("b");
    }
    if (keyPressed == '76') {
        new_image('hulk.png');

        console.log("l");
    }

    if (keyPressed == '84') {
        new_image('thor.jpg');

        console.log("t");
    }

    if (keyPressed == '72') {
        new_image('captinamerica.png');

        console.log("h");
    }
}

function up(){
    if(player_y >=0){
        player_y = player_y - block_image_height;
        canvas.remove(player_obj);
        player_update();
    }

    
}

function down(){
    if(player_y <=500){
        player_y = player_y + block_image_height;
        canvas.remove(player_obj);
        player_update();
    }

    
}

function right(){
    if(player_x <=850){
        player_x = player_x + block_image_width;
        canvas.remove(player_obj);
        player_update();
    }

    
}

function left(){
    if(player_x >0){
        player_x = player_x - block_image_width;
        canvas.remove(player_obj);
        player_update();
    }

    
}
   