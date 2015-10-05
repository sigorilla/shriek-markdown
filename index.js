var marked  = require('marked');
var renderer = new marked.Renderer();

renderer.heading = function (text, level) {
  return text;
};

renderer.link = function (href, title, text) {
  return href;
};

renderer.image = function (href, title, text) {
  return href;
};

marked.setOptions({
  renderer: renderer,
  tables: false,
  sanitize: true,
});

module.exports = function (messages, callback) {
  try {
    callback(null, messages.map(function (message) {
      var mdMessage = message;
      mdMessage.text = marked(message.text);
      return mdMessage;
    }));
  } catch (err) {
    callback(err, null);
  }
};

module.exports.forEvent = 'channelGet';
