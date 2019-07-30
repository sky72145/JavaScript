var SCISSORS='가위';
var ROCK='바위';
var PAPER='보';
var userInput = prompt('가위, 바위, 보');
if(userInput !=='가위' && userInput !=='바위' && userInput !=='보'){
    alert('Error!');
}else{
    var comInput;
    //Math.random()은 0부터 1 사이의 임의의 값을 리턴함
    var rnd = Math.random();

      if(rnd < 0.33){
          comInput = SCISSORS;
      }else if(rnd<0.66){//else if를 써서 rnd>=0.33 조건은 사용할 필요가 없다.
          comInput = ROCK;
      }else{
        comInput = PAPER;
      }
    switch(userInput){
        case SCISSORS:
            switch(comInput){
                case SCISSORS:
                    alert(comInput+'DRAW'); break;
                case ROCK:
                    alert(comInput+'LOSE'); break;
                case PAPER:
                    alert(comInput+'WIN'); break;
            }
            break;
        case ROCK:
                    switch(comInput){
                        case SCISSORS:
                            alert(comInput+'WIN'); break;
                        case ROCK:
                            alert(comInput+'DRAW'); break;
                        case PAPER:
                            alert(comInput+'LOSE'); break;
                    }
                    break;
        default:
                    switch(comInput){
                        case SCISSORS:
                            alert(comInput+'LOSE'); break;
                        case ROCK:
                            alert(comInput+'WIN'); break;
                        case PAPER:
                            alert(comInput+'DRAW'); break;
                    }
                    break;
    }
}
