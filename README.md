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
```http request
https://cdn.jsdelivr.net/npm/@dreamcoder-uzbek/telegramjs@1.2.4/dist/telegram.min.js
```

```http request
https://unpkg.com/@dreamcoder-uzbek/telegramjs@1.2.4/dist/telegram.min.js
```

## Add to project for browser

```html
<html>
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

###  This is a complete guide to using this library. After reading it, you will be able to use it. I hope it will be useful for you

---

## Getting Started

First of all, a special object is created to use the library.
it will be possible to connect to the library using the `telegram` keyword

```javascript
const connected = new telegram.init(botToken, chatId, parseMode);
```

| Keyword     | required | default    |
|-------------|:---------|------------|
| `botToken`  | yes      |            |
| `chatId`    | yes      |            |
| `parseMode` | optional | `Markdown` |

# Usage

## `getMe`

> A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.


## `getUpdates`

> Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.

## `getFile`

| Parameter | Type   | Required | Description                              |
|-----------|--------|----------|------------------------------------------|
| `file_id` | String | Yes      | File identifier to get information about |

See [here](https://core.telegram.org/bots/api#getfile) for more information

## `sendMessage`
> Use this method to send text messages. On success, the sent Message is returned.

```javascript
connected.sendMessage(text, reply_to_message_id, protect_content, disable_notification);
```

| Parameter              | Type    | Required | Description                                                                    |
|------------------------|---------|----------|--------------------------------------------------------------------------------|
| `text`                 | String  | yes      | Text of the message to be sent, `1-4096` characters after entities parsing     |
| `reply_to_message_id`  | Integer | optional | If the message is a reply, ID of the original message                          |
| `protect_content`      | Boolean | optional | Protects the contents of the sent message from forwarding and saving           |
| `disable_notification` | Boolean | optional | Sends the message [silently]. Users will receive a notification with no sound. |
---------------

### `Markdown`

<pre language="markdown">
  *bold text*
  _italic text_
  [inline URL](http://www.example.com/)
  [inline mention of a user](tg://user?id=123456789)
  `inline fixed-width code`
  ```
  pre-formatted fixed-width code block
  ```
  ```javascript
  pre-formatted fixed-width code block written in the Javascript programming language
  ```
</pre>

### `Please note`:

- Entities must not be nested, use parse mode [MarkdownV2](https://core.telegram.org/bots/api#markdownv2-style) instead.
- There is no way to specify underline and strikethrough entities, use parse mode MarkdownV2 instead.
- To escape characters `_`, `*`, \`, `[` outside of an entity, prepend the characters '\' before them.
- Escaping inside entities is not allowed, so entity must be closed first and reopened again: use `_snake_\__case_` for italic snake_case and `*2*\**2=4*` for bold `2*2=4`.


### `MarkdownV2`

<pre language="markdown">
  *bold \*text*
  _italic \*text_
  __underline__
  ~strikethrough~
  ||spoiler||
  *bold _italic bold ~italic bold strikethrough ||italic bold strikethrough spoiler||~ __underline italic bold___ bold*
  [inline URL](http://www.example.com/)
  [inline mention of a user](tg://user?id=123456789)
  `inline fixed-width code`
  ```
  pre-formatted fixed-width code block
  ```
  ```javascript
  pre-formatted fixed-width code block written in the Javascript programming language
  ```
</pre>

### `Please note:`

- Any character with code between `1` and `126` inclusively can be escaped anywhere with a preceding '\' character, in which case it is treated as an ordinary character and not a part of the markup. This implies that '\' character usually must be escaped with a preceding '\' character.
- Inside pre and code entities, all '`' and '\' characters must be escaped with a preceding '\' character.
- Inside (`...`) part of inline link definition, all `)` and `\ ` must be escaped with a preceding '\' character.
- In all other places characters `_`, `*`, `[`, `]`, `(`, `)`, `~`, \`, `>`, `#`, `+`, `-`, `=`, `|`, `{`, `}`, `.`, `!` must be escaped with the preceding character '\'.
- In case of ambiguity between italic and underline entities `__` is always greadily treated from left to right as beginning or end of underline entity, so instead of `___italic underline___` use `___italic underline_\r__`, where `\r` is a character with code `13`, which will be ignored


### `HTML`
```html
  <b>bold</b>, <strong>bold</strong>
  <i>italic</i>, <em>italic</em>
  <u>underline</u>, <ins>underline</ins>
  <s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
  <span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
  <b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
  <a href="http://www.example.com/">inline URL</a>
  <a href="tg://user?id=123456789">inline mention of a user</a>
  <code>inline fixed-width code</code>
  <pre>pre-formatted fixed-width code block</pre>
  <pre><code class="language-javascript">pre-formatted fixed-width code block written in the Javascript programming language</code></pre>
```

### `Please note:`

- Only the tags mentioned above are currently supported.
- All `<`, `>` and & symbols that are not a part of a tag or an HTML entity must be replaced with the corresponding HTML entities (`<` with `&lt;`, `>` with `&gt;` and `&` with `&amp;`).
- All numerical `HTML` entities are supported.
- The `API` currently supports only the following named `HTML` entities: `&lt;`, `&gt;`, `&amp;` and `&quot;`.
- Use nested `pre` and `code` tags, to define programming language for `pre` entity.
- Programming language can't be specified for standalone code tags.

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
| `reply_to_message_id`  | Integer | Optional | If the message is a reply, `ID` of the original message                                                                                                                                                                                     |
| `disable_notification` | Boolean | optional | Sends the message [silently]. Users will receive a notification with no sound.                                                                                                                                                              |
| `protect_content`      | Boolean | optional | Protects the contents of the sent message from forwarding and saving                                                                                                                                                                        |

## `sendLocation`

```javascript
connected.sendLocation (latitude, longitude, horizontal_accuracy, disable_notification = false, protect_content = false, reply_to_message_id)
```

| Parameters             | Type         | Required | Description                                                                    |
|------------------------|--------------|----------|--------------------------------------------------------------------------------|
| `latitude`             | Float number | Yes      | `Latitude` of the `location`                                                   |
| `longitude`            | Float number | Yes      | `Longitude` of the `location`                                                  |
| `reply_to_message_id`  | Integer      | Optional | If the message is a reply, `ID` of the original message                        |
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
| `reply_to_message_id`  | Integer | Optional | If the message is a reply, `ID` of the original message                        |
| `disable_notification` | Boolean | optional | Sends the message [silently]. Users will receive a notification with no sound. |
| `protect_content`      | Boolean | optional | Protects the contents of the sent message from forwarding and saving           |

[silently]: https://telegram.org/blog/channels-2-0#silent-messages
