const chatbot = require('../chatbot/index.js');
const answers = require('../form/index');
const {query} = require("express");

module.exports = app => {
  app.get('/', (req, res) => {
    res.send({'hello': 'hi'})
  });

  app.post('/api/df_text_query', async (req, res) => {
    let responses = await chatbot.textQuery(req.body.text, req.body.userID, req.body.parameters);

    res.send(responses[0].queryResult)
  });

  app.post('/api/df_event_query', async (req, res) => {
    let responses = await chatbot.eventQuery(req.body.event, req.body.userID, req.body.parameters);

    res.send(responses[0].queryResult)
  });

  app.post('/api/answers', async (req, res) => {
    let responses = await answers.saveAnswers(req.body.data);

    res.send(responses)
  });
};