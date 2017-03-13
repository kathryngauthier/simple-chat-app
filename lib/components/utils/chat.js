export default class Chat {
  static init(socket) {
    this.socket = socket;
  }

  static login(username) {
    this.username = username;
    this.socket.emit('check-username', JSON.stringify({ name: username }));
  }

  static message(message, username = '') {
    this.socket.emit('message', JSON.stringify({
      username: username || this.username,
      message: message,
    }));
  }
}
