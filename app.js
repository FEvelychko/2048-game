/**
 * Created by Maksym on 05.10.2015.
 */

//debugger;
//    var tileContainer = document.getElementsByClassName('tile-container');
    var tileContainer = document.getElementById('tile-container');

    var defaultTemplate = [
        '<div class="tile tile-2 tile-position-1-1 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-1-2 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-1-3 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-1-4 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-2-1 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-2-2 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-2-3 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-2-4 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-3-1 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-3-2 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-3-3 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-3-4 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-4-1 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-4-2 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-4-3 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-4-4 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-4 tile-position-1-1 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-1-2 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-1-3 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-1-4 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-2-1 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-2-2 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-2-3 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-2-4 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-3-1 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-3-2 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-3-3 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-3-4 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-4-1 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-4-2 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-4-3 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-4-4 tile-new"><div class="tile-inner">4</div></div>'
    ];


    var firstNumber,secondNumber = undefined;
    function start(){

        //debugger;
        var randomFirst = Math.floor((Math.random() * defaultTemplate.length - 1) + 1);
        var randomSecond = Math.floor((Math.random() * defaultTemplate.length - 1) + 1);

        firstNumber = defaultTemplate[randomFirst];
        secondNumber = defaultTemplate[randomSecond];
        if(firstNumber === secondNumber){
            if(randomFirst < 31 && randomFirst >= 15){
                randomFirst -= 10;
                firstNumber = defaultTemplate[randomFirst];
                tileContainer[0].innerHTML = firstNumber + secondNumber;
            }
            else if(randomFirst === 31){
                randomFirst -= 20;
                firstNumber = defaultTemplate[randomFirst];
                tileContainer[0].innerHTML = firstNumber + secondNumber;
            }
            else if(randomFirst === 1){
                randomFirst += 10;
                firstNumber = defaultTemplate[randomFirst];
                tileContainer[0].innerHTML = firstNumber + secondNumber;
            }
        }
        else{
            tileContainer.innerHTML = firstNumber + secondNumber;
        }

    };

    function moveUp(){
        //debugger;
        //debugger;
        //console.log(tileContainer.children[0].className.split(" ")[2].slice(16,17));
        //var kozel = tileContainer.children[0].className.split(" ")[2].slice(16,17);

        //tileContainer.children[0].className.split(" ")[2].replace(tileContainer.children[0].className.split(" ")[2].slice(16,17), 1);
        debugger;
        var row = tileContainer.children[0].className.split(" ")[2].slice(16,17);
        var col = tileContainer.children[0].className.split(" ")[2].slice(14,15);
        var value = tileContainer.children[0].className.split(" ")[1].slice(5,6);
        if(row > 1 && col == 1 && value == 2){
            tileContainer.children[0].className = "tile tile-2 tile-position-1-1 tile-new";
        }
        if(row > 1 && col == 2 && value == 2){
            tileContainer.children[0].className = "tile tile-2 tile-position-2-1 tile-new";
        }
        if(row > 1 && col == 3 && value == 2){
            tileContainer.children[0].className = "tile tile-2 tile-position-3-1 tile-new";
        }
        if(row > 1 && col == 4 && value == 2){
            tileContainer.children[0].className = "tile tile-2 tile-position-4-1 tile-new";
        }
        if(row > 1 && col == 1 && value == 2){
            tileContainer.children[0].className = "tile tile-2 tile-position-1-1 tile-new";
        }
        if(row > 1 && col == 2 && value == 2){
            tileContainer.children[0].className = "tile tile-2 tile-position-2-1 tile-new";
        }
        if(row > 1 && col == 3 && value == 2){
            tileContainer.children[0].className = "tile tile-2 tile-position-3-1 tile-new";
        }
        if(row > 1 && col == 4 && value == 2){
            tileContainer.children[0].className = "tile tile-2 tile-position-4-1 tile-new";
        }
        console.log(tileContainer.children[0].className);
        /*if(foundRow > 1){
            foundRow = 1;
        }*/
        //return tileContainer.children[0];
        //if()
        //if(tileContainer.children[0].className == "")
    }
    //moveUp();

    document.onkeydown = function(event){
        event.which = event.which || event.keyCode;
        if(event.which == 38){
             //start();
            moveUp();

        }
    };



    window.onload = start;
