var marked  = require('marked');
marked.setOptions({
  tables: false,
  sanitize: true,
});

module.exports = function (messages) {
  try {
    return messages.map(function (message) {
      var mdMessage = message;
      mdMessage.text = marked(message.text);
      return mdMessage;
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.forEvent = 'channelGet';
