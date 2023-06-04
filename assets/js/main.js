const socket = new WebSocket('wss://io.bbiconnexion.com');
socket.addEventListener('open', function (event) {
  console.log('Connected to the bbiconneXion Server!');
});
socket.addEventListener('close', function (event) {
  console.log('Disconnected from the bbiconneXion Server!');
});
socket.addEventListener('message', function (event) {
  console.log(event.data);
});
const sendMsg = () => {
  socket.send('Hello and welcome!');
};