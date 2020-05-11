function balancedBrackets(string) {
    // Write your code here.
    let stack = [];
    let hash = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let i = 0; i < string.length; i++) {
        let curStr = string[i];
        if (curStr === "(" || curStr === "{" || curStr === "[") {
            stack.push(curStr)
        } else {
            if (stack.length === 0) return false;
            let prev = stack.pop();
            if (hash[curStr] !== prev) return false;
        }
    }
    return stack.length === 0;
}

console.log(balancedBrackets("([])(){}(())()()"));
console.log(balancedBrackets("()[]{}{"));

/*
var isValid = function(s) {
	let stack = [];
	
	for(let i = 0; i < s.length; i++){
		if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
			stack.push(s[i]);
		} else {
			switch(s[i]){
				case ')':
					if(stack.pop() !== '(') return false
					break;
				case ']':
					if(stack.pop() !== '[') return false
					break;
				case '}':
					if(stack.pop() !== '{') return false
					break;
			}
		}
	}
	return stack.length === 0;
};