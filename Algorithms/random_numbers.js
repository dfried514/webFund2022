function d6() {
    var roll = Math.random();

    roll = Math.floor(roll * 6) + 1;

    return roll;
}

function magic8() {
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    
    var responseIdx = Math.floor(Math.random() * lifesAnswers.length);
    
    return lifesAnswers[responseIdx];
}

function testIt() {
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var testArray = new Array(lifesAnswers.length).fill(0);
    
    for (let i = 1; i <= size; i++) {
        var responseIdx = Math.floor(Math.random() * lifesAnswers.length);
        testArray[responseIdx]++;
    }
    return testArray;
}
const size = 20000;
console.log(testIt(size));