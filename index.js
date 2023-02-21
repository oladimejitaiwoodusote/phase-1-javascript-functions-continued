// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(String = "*"){
    return function (Parameter = "special"){
        return `You are ${String}${Parameter}${String}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("%")("a dedicated programmer");
console.log(encouragingPromptFunction);