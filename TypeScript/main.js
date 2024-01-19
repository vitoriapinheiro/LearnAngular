function log(message) {
    console.log(message);
}
var myMessage = "Hello Vivi";
log(myMessage);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
var backgroundColor = Color.Green;
var message;
message = "Hello Vivi";
var endsWithI = message.endsWith('I');
var alternativeWay = message.endsWith('I');
