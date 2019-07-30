var SCISSORS = '가위';
var ROCK='바위';
var PAPER='보';
function onButtonClick(userInput){
     var comInput;
        var rnd=Math.random();
        if(rnd<0.33){
            comInput = SCISSORS;
        }else if(rnd<0.66){
            comInput = ROCK;
        }else{
            comInput = PAPER;
        }
        var result = comInput +':';
        if(userInput === SCISSORS){
            if(comInput === SCISSORS){
                result+='DRAW';
            }else if(comInput === ROCK){
                result+='LOSE';
            }else{
                result+='WIN';
            }
        }

        if(userInput === ROCK){
                    if(comInput === SCISSORS){
                        result+='WIN';
                    }else if(comInput === ROCK){
                        result+='DRAW';
                    }else{
                        result+='LOSE';
                    }
                }

                if(userInput === PAPER){
                            if(comInput === SCISSORS){
                                result+='LOSE';
                            }else if(comInput === ROCK){
                                result+='WIN';
                            }else{
                                result+='DRAW';
                            }
                        }
      alert(result);
}
