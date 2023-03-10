'use strict'
const dialogflow = require('dialogflow');
const config = require('../../config.js');
const structjson = require('./structjson');

const sessionId = config.dialogFlowSessionID;

const projectID = config.googleProjectID;

const credentials = {
  client_email: config.googleClientEmail,
  private_key: config.googlePrivateKey
}

const sessionClient = new dialogflow.SessionsClient({projectID, credentials});

const sessionPath = sessionClient.sessionPath(projectID, sessionId);

module.exports = {
  textQuery: async function(text, userID, parameters = {}) {
    let self = module.exports;
    let sessionPath = sessionClient.sessionPath(projectID, sessionId + userID );
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: config.dialogFlowSessionLanguageCode,
        },
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },
  handleAction: function (responses) {
    return responses;
  },

  eventQuery: async function(event, parameters = {}) {
    let self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          parameters: structjson.jsonToStructProto(parameters),
          languageCode: config.dialogFlowSessionLanguageCode,
        },
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },
}