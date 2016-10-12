# twootfrond

🎷🐦 Twoot your fronds from the command line

## Description

twootfrond is a Node.js script that lets you send Twitter direct messages from the command line. It's just a fun little side project, so don't expect it to work.

## Code of Conduct

This project operates under the [Contributor Covenant 1.4.0](http://contributor-covenant.org/), and its text can be found under `CONDUCT.md` in the project root.

## Setup

You will need [Node.JS](https://nodejs.org/) installed, which should come with [npm](https://www.npmjs.com/) too.

In order to talk to Twitter, twootfrond needs some authentication credentials. To get these credentials, you will need to set up a new Twitter app under https://apps.twitter.com/app/new. Also make sure to allow direct messages in your Twitter app settings.

twootfrond expects you to store your credentials as [environment variables](https://en.wikipedia.org/wiki/Environment_variable). You will need the following environment variables to run twootfrond:

- `TWITTER_CONSUMER_KEY`
- `TWITTER_CONSUMER_SECRET`
- `TWITTER_ACCESS_TOKEN_KEY`
- `TWITTER_ACCESS_TOKEN_SECRET`

After that you can install twootfrond globally by running the following command:

```
npm install -g twootfrond
```

## Usage

After twootfrond is installed globally, you can use it from the command line by running `twootfrond username message`, for example:

```
twootfrond fredericmarx nice
```
