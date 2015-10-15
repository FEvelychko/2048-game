/**
 * Created by Maksym on 05.10.2015.
 */

//debugger;
//    var tileContainer = document.getElementsByClassName('tile-container');
    var tileContainer = document.getElementById('tile-container');
    var defaultTemplate = [
        '<div class="tile tile-2 tile-position-11 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-12 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-13 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-14 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-21 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-22 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-23 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-24 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-31 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-32 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-33 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-34 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-41 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-42 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-43 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-2 tile-position-44 tile-new"><div class="tile-inner">2</div></div>',
        '<div class="tile tile-4 tile-position-11 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-12 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-13 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-14 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-21 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-22 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-23 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-24 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-31 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-32 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-33 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-34 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-41 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-42 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-43 tile-new"><div class="tile-inner">4</div></div>',
        '<div class="tile tile-4 tile-position-44 tile-new"><div class="tile-inner">4</div></div>'
    ];


    var firstNumber = undefined;
    var secondNumber = undefined;
    var thirdNumber = undefined;
    function start(){
            //debugger;
            var arr = [];
            var randomFirst = Math.floor((Math.random() * defaultTemplate.length - 1) + 1);
            var randomSecond = Math.floor((Math.random() * defaultTemplate.length - 1) + 1);
            firstNumber = defaultTemplate[randomFirst];
            secondNumber = defaultTemplate[randomSecond];
            //debugger;

            if(firstNumber.slice(38,40) !== secondNumber.slice(38,40)){
                tileContainer.innerHTML = firstNumber + secondNumber;
            }
            else{
                for(var x = 0; x<defaultTemplate.length; x++){
                    if(defaultTemplate[x].slice(38,40) != firstNumber.slice(38,40)){
                        arr.push(defaultTemplate[x]);
                    }
                }
                secondNumber = arr[Math.floor((Math.random() * defaultTemplate.length - 1) + 1)];
                tileContainer.innerHTML = firstNumber + secondNumber;
            }

        };

    function moveUp() {
        debugger;
        var arrCell = [];
        var randomThird = Math.floor((Math.random() * defaultTemplate.length - 1) + 1);
        thirdNumber = defaultTemplate[randomThird];

        for(var i = 0; i < defaultTemplate.length; i++){
            if(defaultTemplate[i].slice(38,39) === firstNumber.slice(38,39) && defaultTemplate[i].slice(22,23) === firstNumber.slice(22,23)){
                arrCell.push(defaultTemplate[i]);
            }
        }

            tileContainer.innerHTML += thirdNumber;
        console.log(tileContainer.innerHTML);
    }

    document.onkeydown = function(event){
        event.which = event.which || event.keyCode;
        if(event.which == 38){
            moveUp();
        }
    };


    window.onload = start;
