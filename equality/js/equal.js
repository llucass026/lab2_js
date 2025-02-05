function checkEquality() {
    var input1 = document.getElementById("str1").value;
    var input2 = document.getElementById("str2").value;
    var result = document.getElementById("msg");
    if (input1 === input2) {
        result.innerHTML = "The strings are equal.";
    } else {
        result.innerHTML = "The strings are not equal.";
    }
}

function computeSum() {
    var input1 = document.getElementById("str1").value;
    var input2 = document.getElementById("str2").value;
    var result = document.getElementById("msg");
    var sum = input1.length + input2.length;
    result.innerHTML = "The sum of both string lengths is " + sum + ".";
}

document.getElementById("check-button").addEventListener("click", checkEquality);
document.getElementById("sum-button").addEventListener("click", computeSum);