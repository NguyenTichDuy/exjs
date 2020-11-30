var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var result = document.createElement('div');
var buttons = [];
for (let index = 0; index < 6; index++) {
    buttons[index] = document.createElement('button');
    buttons[index].textContent = "ex" + index;
    document.body.appendChild(buttons[index]);
}

buttons[0].addEventListener("click", () => {
    addResult(result);
    result.textContent += a.value.toString().split('').sort().join('');
});
buttons[1].addEventListener("click", () => {
    addResult(result);
    a.value.toString().split(' ').forEach(Element => {
        result.textContent += Element[0].toUpperCase() + Element.slice(1) + ' ';
    });
});
buttons[2].addEventListener("click", () => {
    let valueA = a.value.toString().trim().split(','),
        valueB = b.value.toString().trim().split(',');
    let al = valueA.length, bl = valueB.length, rs = [];
    let maxArr = al > bl ? valueA : valueB;
    let minArr = al < bl ? valueA : valueB;
    addResult(result);
    result.textContent += maxArr.map((elem, i) => minArr[i] ? +minArr[i] + +elem : elem).join(',');
});
buttons[3].addEventListener("click", () => {
    addResult(result);
    result.textContent += a.value.toString().split(',').filter(elem => Number(elem)).toString();
});
buttons[4].addEventListener("click", () => {
    var student = {
        name: a.value.toString(),
        sclass: b.value.toString(),
        rollno: Number(c.value)
    }
    addResult(result);
    result.innerHTML += Object.keys(student).toString();
});
buttons[5].addEventListener("click", () => {
    let s = "";
    addResult(result);
    var valA = a.value.toString().split('');
    for (let index = 0; index < valA.length; index++) {
        // console.log(a.value.toString().split('').reduce(
        //     (sub, value) => s += (sub + value)));
        // result.textContent += s.toString();
        s += valA[index];
        for (let i = index + 1; i < valA.length; i++) {
            s += valA[i];
        }
    }
    console.log(s);
});
function addResult(result) {
    result.textContent = "Result: ";
}
document.body.appendChild(result);