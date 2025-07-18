var calPoints = function(operations) {
    let output=[];
    for(let i=0;i<operations.length;i++) {
        if(Number(operations[i])) {
            output.push(Number(operations[i]))
        } else if(operations[i] == '+') {
            output.push(Number(output[output.length-2]) + Number(output[output.length-1]));
        } else if(operations[i] == 'D') {
            output.push(2 * Number(output[output.length-1]));
        } else if(operations[i] == 'C'){
            output.pop();
        }
    }

    let sum =0;
    for(let i=0;i<output.length;i++) {
        sum += output[i]
    }
    return sum;
};
