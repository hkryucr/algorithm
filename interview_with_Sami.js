// Input 1[10, 15, 8, 12, 94, 81, 5, 2, 11]
// Input 2[10, 8, 5, 15, 2, 12, 11, 94, 81]
// Output = true

function checkBST(input1, input2) {
    if (input1.length !== input2.length) return false;
    if (input1.length === 0) return true;

    let input1First = input1[0];
    let input2First = input2[0];
    if (input1.length === 1) return input1First === input2First;

    if (input1First !== input2First) return false;
    let [input1Left, input1Right] = split(input1, input1First);
    let [input2Left, input2Right] = split(input2, input2First);

    let left = checkBST(input1Left, input2Left);
    let right = checkBST(input1Right, input2Right);
    if (!left || !right) return false
    return true;
}

function split(array, first) {
    let left = [];
    let right = [];
    for (let i = 1; i < array.length; i++) {
        const curEl = array[i];
        if (curEl > first) {
            right.push(curEl)
        } else {
            left.push(curEl);
        }
    }
    return [left, right];
}


// level0 -> N
// Level1 -> N
// level 2 -> N
// Level ...-> N

// NH(H is N at the worst case) - at the worst case N ^ 2

