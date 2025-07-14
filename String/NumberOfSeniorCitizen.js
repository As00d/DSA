var countSeniors = function(details) {
    let c=0;
    for(let i=0;i<details.length;i++) {
        let individual = details[i];
        const age = individual[11] + individual[12];
        if(age>60) {
            c++
        }
    }
    return c;

    
};

countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]);