function display(ans){

    document.getElementById('result').value += ans

    return val

}

function solve(){

    var x = document.getElementById('result').value

    var y = eval(x);

    document.getElementById('result').value = y

    return y;

}

function clearScreen(){

    document.getElementById('result').value = ''

}