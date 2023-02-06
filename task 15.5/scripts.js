const wsUri = "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self";

let chat = document.getElementById("chat");
let btnSend = document.getElementById("send_message");

let websocket = new WebSocket(wsUri);

websocket.onopen = function (evt) {
    console.log("CONNECTED");
};
websocket.onclose = function (evt) {
    console.log("DISCONNECTED");
};
websocket.onmessage = function (evt) {
    writeToChat("server", evt.data);
};
websocket.onerror = function (evt) {
    writeToChat("error", evt.data);
};

function writeToChat(sender, message) {
  let pre = document.createElement("div");
  switch (sender) {
    case "client": {
      pre.innerHTML =
        `<div class='message client'>
  <div class='textout'>${message}</div>
  <div class='sender'>Я</div>
</div>`;
    }
    break;
  case "server": {
    pre.innerHTML = 
      `<div class='message server'>
    <div class='textout'>${message}</div>
    <div class='sender'>Сервер</div>
</div>`;
  }
  }
  chat.appendChild(pre);
}

btnSend.addEventListener('click', () => {
  const message = document.getElementById("input_text");
  writeToChat("client", message.value);
  websocket.send(message.value);
});