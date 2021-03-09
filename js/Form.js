class Form{
    constructor(){}

    display(){
        var title = createElement('h2')
        title.html("CAR RACING GAME");
        title.position(475,50);

        var input = createInput("Name");
        var button = createButton('PLAY');
        var greeting = createElement('h3')

        input.position(430,260);
        button.position(550,300);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount =  playerCount + 1; 
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello"+"   " +name);
            greeting.position(650,200);
        })

    }
}