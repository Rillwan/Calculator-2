function getHistory(){
    return document.getElementById('historyvalue').innerText;
}
function printHistory(num){
    document.getElementById('historyvalue').innerText=num;
}
function getOutput(){
    return document.getElementById('outputvalue').innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById('outputvalue').innerText=num;
    }else{
        document.getElementById('outputvalue').innerText=getformatedNumber(num);
    };
}
function getformatedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
}
function reverseNumberFunction(num){
    return Number (num.replace(/,/g,''));
}

var operator = document.getElementsByClassName('operator');
for (var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printOutput('');
            printHistory('');
        }else if(this.id=="backspace"){
            var output = reverseNumberFunction(getOutput()).toString();
            if(output){
                output = output.substring(0,output.length-1);
                printOutput(output);
            }
        }else{
            var output = getOutput();
            var history = getHistory();
            if(output != ""){
                output = reverseNumberFunction(output);
                history = history+output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory('');
                }else{
                    history = history+this.id;
                    printHistory(history);
                    printOutput('')
                }
            }
        }
    })
}
var number = document.getElementsByClassName('number');
for (var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumberFunction(getOutput());
        if(output != NaN){
            output = output + this.id;
            printOutput(output);
        }
    })
}

