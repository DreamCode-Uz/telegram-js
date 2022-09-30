<br/>
<p align="center">
  <a href="https://github.com/DreamCode-Uz/telegram-js">
    <img src="https://raw.githubusercontent.com/DreamCode-Uz/telegram-js/main/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Telegram JS</h3>

  <p align="center">
    Special library for Telegram bot to connect via browser
    <br/>
    <br/>
    <a href="https://github.com/DreamCode-Uz/telegram-js"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/DreamCode-Uz/telegram-js">View Demo</a>
    .
    <a href="https://github.com/DreamCode-Uz/telegram-js/issues">Report Bug</a>
    .
    <a href="https://github.com/DreamCode-Uz/telegram-js/issues">Request Feature</a>
  </p>


<p align="center">
<img src="https://img.shields.io/github/issues/DreamCode-Uz/telegram-js?style=flat-square"  alt="issues"/>
<img src="https://img.shields.io/github/stars/DreamCode-Uz/telegram-js?style=flat-square" alt="stars"/>
<img src="https://img.shields.io/github/license/DreamCode-Uz/telegram-js?style=flat-square" alt="license"/>
<img src="https://data.jsdelivr.com/v1/package/npm/@dreamcoder-uzbek/telegramjs/badge" alt="jsDeliver"/>
<img src="https://img.shields.io/npm/v/@dreamcoder-uzbek/telegramjs" alt="npm version"/>
<img src="https://img.shields.io/npm/dt/@dreamcoder-uzbek/telegramjs" alt="npm download"/>
</p>

[![NPM](https://nodei.co/npm/@dreamcoder-uzbek/telegramjs.png)](https://nodei.co/npm/@dreamcoder-uzbek/telegramjs/)
## About The Project

This project was created to facilitate communication with Telegram using javascript

## Add for Node js project(`ReactJs`)

- `npm`
```npm
npm install @dreamcoder-uzbek/telegramjs
```

- `yarn`
```yarn
yarn add @dreamcoder-uzbek/telegramjs
```

## Add to project via CDN link

- [jsDeliver](https://www.jsdelivr.com/package/npm/@dreamcoder-uzbek/telegramjs)
```
https://cdn.jsdelivr.net/npm/@dreamcoder-uzbek/telegramjs@1.2.4/dist/telegram.min.js
```

```
https://unpkg.com/@dreamcoder-uzbek/telegramjs@1.2.4/dist/telegram.min.js
```

## Add to project for browser

```html

<html lang="en">
<head>
  <title>Telegram Js | Connection example</title>
  <script src="dist/telegram.min.js"></script>
</head>
<body>
<script>
  // your js code...
</script>
</body>
</html>
```

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the
acknowledgements section. Here are a few examples.
---

## Getting Started

First of all, a special object is created to use the library.
it will be possible to connect to the library using the `telegram` keyword

```javascript
const connected = new telegram.init(botToken, chatId, parseMode);
```

| Keyword     | required | default      |
|-------------|:---------|--------------|
| `botToken`  | yes      |              |
| `chatId`    | yes      |              |
| `parseMode` | optional | `MarkdownV2` |

# Usage

## `getMe`

> A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.


## `getUpdates`

> Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.

## `getFile`

| Parameter | Type   | Required | Description                              |
|-----------|--------|----------|------------------------------------------|
| file_id   | String | Yes      | File identifier to get information about |

See [here](https://core.telegram.org/bots/api#getfile) for more information

## `sendMessage`
> Use this method to send text messages. On success, the sent Message is returned.

```javascript
connected.sendMessage(text, reply_to_message_id, protect_content, disable_notification);
```

| Parameter              | Type    | Required | Description                                                                    |
|------------------------|---------|----------|--------------------------------------------------------------------------------|
| `text`                 | String  | yes      | Text of the message to be sent, 1-4096 characters after entities parsing       |
| `reply_to_message_id`  | Integer | optional | If the message is a reply, ID of the original message                          |
| `protect_content`      | Boolean | optional | Protects the contents of the sent message from forwarding and saving           |
| `disable_notification` | Boolean | optional | Sends the message [silently]. Users will receive a notification with no sound. |

---

## `sendPhoto`

```javascript
connected.sendPhoto(photo, caption, disable_notification = false, protect_content = false, reply_to_message_id);
```

| Parameter              | Type                | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------|---------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `photo`                | InputFile or String | yes      | Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. [More information on Sending Files] » |
| `caption`              | String              | optional | Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing                                                                                                                                                                                                                                                                                                                    |
| `reply_to_message_id`  | Integer             | optional | If the message is a reply, ID of the original message                                                                                                                                                                                                                                                                                                                                                                          |
| `disable_notification` | Boolean             | optional | Sends the message [silently]. Users will receive a notification with no sound.                                                                                                                                                                                                                                                                                                                                                 |
| `protect_content`      | Boolean             | optional | Protects the contents of the sent message from forwarding and saving                                                                                                                                                                                                                                                                                                                                                           |

[More information on Sending Files]: https://core.telegram.org/bots/api#sending-files

> Methods with the same properties as sendPhoto
>> `sendPhoto`, `sendVideo`,`sendDocument`, `sendAudio`,`sendAnimation`, `sendVideoNote`,
---

## `sendPoll`

```javascript
connected.sendPoll(question, options, correct_option_id, is_anonymous, explanation, type, reply_to_message_id, disable_notification, protect_content)
```

| Parameters             | Type            | Required | Description                                                                                                                                                                 |
|------------------------|-----------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `question`             | String          | yes      | Poll question, 1-300 characters                                                                                                                                             |
| `options`              | Array of String | yes      | A JSON-serialized list of answer options, 2-10 strings 1-100 characters each                                                                                                |
| `correct_option_id`    | Integer         | Optional | 0-based identifier of the correct answer option, required for polls in quiz mode                                                                                            |
| `is_anonymous`         | Boolean         | Optional | True, if the poll needs to be anonymous, defaults to True                                                                                                                   |
| `type`                 | String          | Optional | Poll type, `quiz` or `regular`, defaults to `regular`                                                                                                                       |
| `explanation`          | String          | Optional | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing |
| `reply_to_message_id`  | Integer         | Optional | If the message is a reply, ID of the original message                                                                                                                       |
| `disable_notification` | Boolean         | optional | Sends the message [silently]. Users will receive a notification with no sound.                                                                                              |
| `protect_content`      | Boolean         | optional | Protects the contents of the sent message from forwarding and saving                                                                                                        |

## `sendDice`

```javascript
connected.sendDice(emoji, disable_notification, protect_content, reply_to_message_id)
```

| Parameters             | Type    | Required | Description                                                                                                                                                                                                                                 |
|------------------------|---------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `emoji`                | String  | Optional | Emoji on which the dice throw animation is based. Currently, must be one of “🎲”, “🎯”, “🏀”, “⚽”, “🎳”, or “🎰”. Dice can have values 1-6 for “🎲”, “🎯” and “🎳”, values 1-5 for “🏀” and “⚽”, and values 1-64 for “🎰”. Defaults to “🎲” |
| `reply_to_message_id`  | Integer | Optional | If the message is a reply, ID of the original message                                                                                                                                                                                       |
| `disable_notification` | Boolean | optional | Sends the message [silently]. Users will receive a notification with no sound.                                                                                                                                                              |
| `protect_content`      | Boolean | optional | Protects the contents of the sent message from forwarding and saving                                                                                                                                                                        |

## `sendLocation`

```javascript
connected.sendLocation (latitude, longitude, horizontal_accuracy, disable_notification = false, protect_content = false, reply_to_message_id)
```

| Parameters             | Type         | Required | Description                                                                    |
|------------------------|--------------|----------|--------------------------------------------------------------------------------|
| `latitude`             | Float number | Yes      | Latitude of the location                                                       |
| `longitude`            | Float number | Yes      | Longitude of the location                                                      |
| `reply_to_message_id`  | Integer      | Optional | If the message is a reply, ID of the original message                          |
| `disable_notification` | Boolean      | optional | Sends the message [silently]. Users will receive a notification with no sound. |
| `protect_content`      | Boolean      | optional | Protects the contents of the sent message from forwarding and saving           |

## `sendContact`

```javascript
connected.sendContact (phone_number, first_name, last_name, disable_notification, protect_content, reply_to_message_id)
```

| Parameters             | Type    | Required | Description                                                                    |
|------------------------|---------|----------|--------------------------------------------------------------------------------|
| `phone_number`         | String  | Yes      | 	Contact's phone number                                                        |
| `first_name`           | String  | Yes      | 	Contact's first number                                                        |
| `last_name`            | String  | Optional | 	Contact's last number                                                         |
| `reply_to_message_id`  | Integer | Optional | If the message is a reply, ID of the original message                          |
| `disable_notification` | Boolean | optional | Sends the message [silently]. Users will receive a notification with no sound. |
| `protect_content`      | Boolean | optional | Protects the contents of the sent message from forwarding and saving           |

[silently]: https://telegram.org/blog/channels-2-0#silent-messages
