var calPoints = function(operations) {
    let output=[];
    for(let i=0;i<operations.length;i++) {
        if(operations.charCodeAt(i) <=48 && operations.charCodeAt(i) >= 57) {
            output.push(operations[i])
        } else if(operations[i] == '+') {
            output.push(operations[i-2] + operations[i-1]);
        } else if(operations[i] == 'D') {
            output.push(operations[i-2] * operations[i-1])
        } else if(operations[i] == 'C'){
            output.pop();
        }
    }
    return output;
};
