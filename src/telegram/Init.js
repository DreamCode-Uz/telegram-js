/**************************************************************************
 *
 @license MIT License

 @Copyright(c) 2022 Dilshodbek Fayzullayev

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 *
 *  */

import {
  BASE_URL,
  GET_FILE,
  GET_ME,
  GET_UPDATES, MARKDOWN,
  SEND_ANIMATION,
  SEND_AUDIO,
  SEND_CONTACT,
  SEND_DICE,
  SEND_DOCUMENT,
  SEND_LOCATION,
  SEND_MESSAGE,
  SEND_PHOTO,
  SEND_POLL,
  SEND_VIDEO,
  SEND_VIDEO_NOTE
} from "./TelegramAction";

/** @class */
class Init {
  /** @type {String} */
  botToken;
  /** @type {(String|number)} */
  chatId;
  /** @type {String} */
  parseMode;

  /**
   * Basic data constructor
   * @author Dilshod Fayzullayev <DarkProHub-Uz@yandex.ru>
   * @constructor
   * @param {String} botToken
   * @param {String} chatId - Telegram botId or @channelusername
   */
  constructor (botToken, chatId, parseMode = MARKDOWN) {
    this.botToken = botToken;
    this.chatId = chatId;
    this.parseMode = parseMode;
  }

  /**
   * Return information about the bot itself
   * @return {Promise}
   *  */
  getMe () {
    return config(this.botToken, GET_ME);
  }

  /**
   * @param {String} fileId
   * @return {Promise}
   *  */
  getFile (fileId) {
    return config(this.botToken, `${GET_FILE}?file_id=${fileId}`);
  }

  /**
   * @param {String} filePath
   * @return {String} url link
   * */
  downloadUrl (filePath) {
    return `https://api.telegram.org/file/bot${this.botToken}/${filePath}`;
  }

  /**
   * @return {Promise}
   * */
  getUpdates () {
    return config(this.botToken, GET_UPDATES);
  }

  /**
   * @param {String} text - Mandatory value for sending a message to Telegram
   * @return {Promise}
   * */
  sendMessage (text, replyMessageId, protectContent = false, disableNotification = false) {
    return config(this.botToken, SEND_MESSAGE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: this.chatId,
        text: text ? text : "",
        protect_content: protectContent,
        reply_to_message_id: replyMessageId ? "" : replyMessageId,
        disable_notification: disableNotification,
        parse_mode: this.parseMode
      })
    });

  }

  /**
   * @param {String} question - required
   * @param {Array} options - required
   * @param {number} correctOptionId - required
   * @return {Promise}
   * */
  sendPoll (question, options = [], correctOptionId, isAnonymous = false, explanation, type = "regular", replyMessageId, disableNotification = false, protectContent = false) {
    const result = {
      chat_id: this.chatId,
      question,
      options,
      explanation,
      is_anonymous: isAnonymous,
      correct_option_id: correctOptionId,
      type,
      reply_to_message_id: replyMessageId,
      disable_notification: disableNotification,
      protect_content: protectContent
    };
    return config(this.botToken, SEND_POLL, {
      method: "POST",
      body: JSON.stringify(result),
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow"
    });
  }

  /**
   * @param {String} emoji - Mandatory value for sending a emoji to Telegram
   * @return {Promise}
   * */
  sendDice (emoji = "🎯", disableNotification = false, protectContent = false, replyToMessageId) {
    const v = `?chat_id=${this.chatId}&emoji=${emoji}&disable_notification=${disableNotification}&protect_content=${protectContent}${replyToMessageId ? "&reply_to_message_id=" + replyToMessageId : ""}`;
    return config(this.botToken, SEND_DICE + v);
  }

  /**
   * @param {Object} photo - Mandatory value for sending a photo to Telegram
   * @param {String} caption - optional
   * @return {Promise}
   * */
  sendPhoto (photo, caption, disable_notification = false, protect_content = false, reply_to_message_id) {
    if (photo) {
      const formData = fileConfig(this.chatId, "photo", photo, caption, this.parseMode, disable_notification, protect_content, reply_to_message_id);
      return config(this.botToken, SEND_PHOTO, {
        method: "POST",
        body: formData,
        redirect: "follow"
      });
    } else {
      throw new Error("photo is empty");
    }
  }

  /**
   * @param {Object} video - Mandatory value for sending a video to Telegram
   * @param {String} caption - optional
   * @return {Promise}
   * */
  sendVideo (video, caption, disable_notification = false, protect_content = false, reply_to_message_id) {
    if (video) {
      const formData = fileConfig(this.chatId, "video", video, caption, this.parseMode, disable_notification, protect_content, reply_to_message_id);
      return config(this.botToken, SEND_VIDEO, {
        method: "POST",
        body: formData,
        redirect: "follow"
      });
    } else {
      throw new Error("Video is empty");
    }
  }

  /**
   * @param {Object} audio - Mandatory value for sending a audio to Telegram
   * @param {String} caption - optional
   * @return {Promise}
   * */
  sendAudio (audio, caption, disable_notification = false, protect_content = false, reply_to_message_id) {
    if (audio) {
      const formData = fileConfig(this.chatId, "audio", audio, caption, this.parseMode, disable_notification, protect_content, reply_to_message_id);
      return config(this.botToken, SEND_AUDIO, {
        method: "POST",
        body: formData,
        redirect: "follow"
      });
    } else {
      throw new Error("Audio is empty");
    }
  }

  /**
   * @param {Object} document - Mandatory value for sending a document to Telegram
   * @param {String} caption - optional
   * @return {Promise}
   * */
  sendDocument (document, caption, disable_notification = false, protect_content = false, reply_to_message_id) {
    const formData = fileConfig(this.chatId, "document", document, caption, this.parseMode, disable_notification, protect_content, reply_to_message_id);
    return config(this.botToken, SEND_DOCUMENT, {
      method: "POST",
      body: formData,
      redirect: "follow"
    });
  }

  /**
   * @param {Object} animation - Mandatory value for sending a animation to Telegram
   * @param {String} caption - optional
   * @return {Promise}
   * */
  sendAnimation (animation, caption, disable_notification = false, protect_content = false, reply_to_message_id) {
    const formData = fileConfig(this.chatId, "animation", animation, caption, this.parseMode, disable_notification, protect_content, reply_to_message_id);
    return config(this.botToken, SEND_ANIMATION, {
      method: "POST",
      body: formData,
      redirect: "follow"
    });
  }

  /**
   * @param {Object} video_note - Mandatory value for sending a video_note to Telegram
   * @param {String} caption - optional
   * @return {Promise}
   * */
  sendVideoNote (video_note, caption, disable_notification = false, protect_content = false, reply_to_message_id) {
    const formData = fileConfig(this.chatId, "video_note", video_note, caption, this.parseMode, disable_notification, protect_content, reply_to_message_id);
    return config(this.botToken, SEND_VIDEO_NOTE, {
      method: "POST",
      body: formData,
      redirect: "follow"
    });
  }

  /**
   * @param {String} latitude - required
   * @param {String} longitude - required
   * @return {Promise}
   * */
  sendLocation (latitude, longitude, horizontal_accuracy, disable_notification = false, protect_content = false, reply_to_message_id) {
    return config(this.botToken, `${SEND_LOCATION}?chat_id=${this.chatId}&parse_mode=${this.parseMode}${protect_content ? "&protect_content=" + protect_content : ""}${latitude ? "&latitude=" + latitude : ""}${longitude ? "&longitude=" + longitude : ""}${horizontal_accuracy ? "&horizontal_accuracy=" + horizontal_accuracy : ""}${disable_notification ? "&disable_notification=" + disable_notification : ""}${reply_to_message_id ? "&reply_to_message_id=" + reply_to_message_id : ""}`);
  }

  /**
   * @param {String} phone_number - required
   * @param {String} first_name - required
   * @return {Promise}
   * */
  sendContact (phone_number, first_name, last_name, disable_notification = false, protect_content = false, reply_to_message_id) {
    return config(this.botToken, `${SEND_CONTACT}?chat_id=${this.chatId}${phone_number ? "&phone_number=" + phone_number : ""}${first_name ? "&first_name=" + first_name : ""}${disable_notification ? "&disable_notification=" + disable_notification : ""}${protect_content ? "&protect_content=" + protect_content : ""}${reply_to_message_id ? "&reply_to_message_id=" + reply_to_message_id : ""}`);
  }

  /**
   * @return {string}
   * @param text
   * */
  mdIgnore (text = "") {
    return text.replaceAll(".", "\\.");
  }
}

const fileConfig = (chat_id, fileType, file, caption, parseMode, disable_notification, protect_content, reply_to_message_id) => {
  const formData = new FormData();
  formData.append("chat_id", chat_id);
  formData.append(fileType, file, file.name.replaceAll(".", "\\."));
  caption && formData.append("caption", caption);
  formData.append("parse_mode", parseMode);
  disable_notification && formData.append("disable_notification", disable_notification);
  protect_content && formData.append("protect_content", protect_content);
  reply_to_message_id && formData.append("reply_to_message_id", reply_to_message_id);
  return formData;
};

const config = (botToken, url, options = {}) => {
  return new Promise((resolve, reject) => fetch(`${BASE_URL + botToken + url}`, options).then(resp => resolve(resp.json())).catch(error => reject(error)));
};

export default Init;
