var showdown  = require('showdown');
var markDownConverter = new showdown.Converter();

module.exports = function (messages) {
  try {
    return messages.map(function (message) {
      var mdMessage = message;
      mdMessage.text = markDownConverter.makeHtml(message.text);
      return mdMessage;
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.forEvent = 'channelGet';
