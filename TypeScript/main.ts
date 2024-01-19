function log(message) {
    console.log(message)
}

var myMessage = "Hello Vivi";

log(myMessage);

enum Color {
    Red = 0,
    Green = 1,
    Blue = 2,
    Yellow = 3
}

let backgroundColor: Color = Color.Green;

let message;
message = "Hello Vivi";
let endsWithI = (<string>message).endsWith('I');
let alternativeWay = (message as string).endsWith('I');

