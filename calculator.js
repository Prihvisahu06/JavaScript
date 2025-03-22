function Solve(a) {
    var b = document.getElementById('res');
    b.value += a;
}
function Result() {
    var a = document.getElementById('res').value;
    try {
        var num = eval(a.replace('x', '*'));
        document.getElementById('res').value = num;
    }
    catch (error) {
        document.getElementById('res').value = "Error";
    }
}
function Clear() {
    document.getElementById('res').value = "";
}

function Back() {
    var a = document.getElementById('res').value;
    document.getElementById('res').value = a.slice(0, -1);
}
