/**
 * Created by Maksym on 05.10.2015.
 */


    var tileContainer = document.getElementsByClassName('tile-container');
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

    function game(){

        debugger;
        var randomFirst = Math.floor((Math.random() * defaultTemplate.length - 1) + 1);
        var randomSecond = Math.floor((Math.random() * defaultTemplate.length - 1) + 1);

        var firstNumber = defaultTemplate[randomFirst];
        var secondNumber = defaultTemplate[randomSecond];
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
            tileContainer[0].innerHTML = firstNumber + secondNumber;
        }

    };

    window.onload = game;
