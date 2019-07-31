var list=[];
var result = [];
for(var i=1;i<=45;i++){
    list.push(i);
}
for(var i=0;i<6;i++){
var index=Math.floor(Math.random()*list.length);
var num=list[index];
list.splice(index,1);
result.push(num);
}

result.sort(function(a,b){
    return a-b;
});//배열 요소를 문자열로 치환 후 유니코드 기준 정렬하기 때문에 계속 실행하면 이상해짐
for(var i=0;i<6;i++){
document.write('<span class="ball">'+result[i]+'</span>');
}
