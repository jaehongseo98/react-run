// "I Love YOU!" 문자열의 공백을 "i-love-you!"

// 명령형
let msg = "I Love YOU!"
let newMsg = ""

for(let i=0; i < msg.length; i++)
    if(msg[i] === " "){
        newMsg = newMsg + "-"
    }else{
        newMsg = newMsg + msg[i]
    }

newMsg = newMsg.toLowerCase()
console.log(newMsg)