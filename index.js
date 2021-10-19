const newArr = [];
function writeCards(names, event) {
    for (let m = 0; m < names.length; m++) {
        newArr.push (`Thank you, ${names[m]}, for the wonderful ${event} gift!`);
        debugger;
    }

    return newArr;
}

function countDown(int) {
    let m = 10
    while (m >= 0) {
        console.log(m)
        m--
    }

    return int;
}