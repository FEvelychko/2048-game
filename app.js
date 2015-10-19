/**
 * Created by Maksym on 05.10.2015.
 */

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
    var defaultClasses = [
        'tile tile-2 tile-position-11 tile-new',
        'tile tile-2 tile-position-12 tile-new',
        'tile tile-2 tile-position-13 tile-new',
        'tile tile-2 tile-position-14 tile-new',
        'tile tile-2 tile-position-21 tile-new',
        'tile tile-2 tile-position-22 tile-new',
        'tile tile-2 tile-position-23 tile-new',
        'tile tile-2 tile-position-24 tile-new',
        'tile tile-2 tile-position-31 tile-new',
        'tile tile-2 tile-position-32 tile-new',
        'tile tile-2 tile-position-33 tile-new',
        'tile tile-2 tile-position-34 tile-new',
        'tile tile-2 tile-position-41 tile-new',
        'tile tile-2 tile-position-42 tile-new',
        'tile tile-2 tile-position-43 tile-new',
        'tile tile-2 tile-position-44 tile-new',
        'tile tile-4 tile-position-11 tile-new',
        'tile tile-4 tile-position-12 tile-new',
        'tile tile-4 tile-position-13 tile-new',
        'tile tile-4 tile-position-14 tile-new',
        'tile tile-4 tile-position-21 tile-new',
        'tile tile-4 tile-position-22 tile-new',
        'tile tile-4 tile-position-23 tile-new',
        'tile tile-4 tile-position-24 tile-new',
        'tile tile-4 tile-position-31 tile-new',
        'tile tile-4 tile-position-32 tile-new',
        'tile tile-4 tile-position-33 tile-new',
        'tile tile-4 tile-position-34 tile-new',
        'tile tile-4 tile-position-41 tile-new',
        'tile tile-4 tile-position-42 tile-new',
        'tile tile-4 tile-position-43 tile-new',
        'tile tile-4 tile-position-44 tile-new'
    ];


    var firstItem = undefined; // ���� �� ���� �������, ��� �� ���� ��� ����������� � null ���� �� ���� ������� �� ������� ���� �������
    var secondItem = undefined;
    var nextItem = undefined;
    var leftItems = []; //
    var cellFirst = [];
    var cellSecond = [];
    var cellThird = [];
    var cellForth = [];

    function start() {
        var randomFirst = Math.floor((Math.random() * defaultTemplate.length - 1) + 1);
        var randomSecond = Math.floor((Math.random() * defaultTemplate.length - 1) + 1);
        firstItem = defaultTemplate[randomFirst];
        secondItem = defaultTemplate[randomSecond];
        if(firstItem.slice(38, 40) != secondItem.slice(38, 40)){
            tileContainer.innerHTML = firstItem + secondItem;
        }
        else{
            for(var i =0; i<defaultTemplate.length; i++){
                if(defaultTemplate[i].slice(38, 40) != secondItem.slice(38, 40)){
                    leftItems.push(defaultTemplate[i]);
                }
            }
            randomSecond = Math.floor((Math.random() * leftItems.length - 1) + 1);
            secondItem = leftItems[randomSecond];
            tileContainer.innerHTML = firstItem + secondItem;
        }
        for(var j = 0; j < defaultTemplate.length; j++){
            if(defaultTemplate[j].slice(38, 40) != firstItem.slice(38, 40) && defaultTemplate[j].slice(38, 40) != secondItem.slice(38, 40)){
                leftItems.push(defaultTemplate[j]);
            }
        }
    }

    function moveUp() {
        //debugger;
        for (var y= 0; y < tileContainer.children.length; y++) {
            if(tileContainer.children[y].className.slice(26, 27) == 1){
                cellFirst.push(tileContainer.children[y]);
            }
            else if(tileContainer.children[y].className.slice(26, 27) == 2){
                cellSecond.push(tileContainer.children[y]);
            }
            else if(tileContainer.children[y].className.slice(26, 27) == 3){
                cellThird.push(tileContainer.children[y]);
            }
            else if(tileContainer.children[y].className.slice(26, 27) == 4){
                cellForth.push(tileContainer.children[y]);
            }
        }



        var randomNext = Math.floor((Math.random() * leftItems.length - 1) + 1);
        nextItem = leftItems[randomNext];
        tileContainer.innerHTML += nextItem;
        leftItems = [];
        for(var j = 0; j < defaultTemplate.length; j++) {
            for (var k = 0; k < tileContainer.children.length; k++) {
                if (defaultTemplate[j].slice(38, 40) != tileContainer.children[k].className.slice(26, 28)) {
                    leftItems.push(defaultTemplate[j]);
                }
            }
            for(var l = 0; l < tileContainer.children.length - 1; l++){
                leftItems.pop();
                //leftItems.splice(1, (tileContainer.children.length - 1));
            }
        }
        return leftItems;
     }


















    document.onkeydown = function(event){
        event.which = event.which || event.keyCode;
        if(event.which == 38){
            moveUp();
        }
    };
    window.onload = start;
