#! /usr/bin/env node
const Twitter = require('twitter')
const frond = process.argv[2]
const messages = Array.from(process.argv).slice(3)

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const sendDm = (screenName, message) => {
  const params = {
    screen_name: screenName,
    text: message
  }
  client.post('direct_messages/new', params, (error, tweets, response) => {
    if (error) throw error
  })
}

sendDm(frond, messages.join(' '))
