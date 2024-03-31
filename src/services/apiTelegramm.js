import axios from "axios";

const API_URL = "https://api.telegram.org";
const token = "7082789471:AAF-7g4VXxzcC8mRNib41fFYHwNky17ERoQ";
const chat_id = "-4103497980";
const url = `${API_URL}/bot${token}/sendMessage`;
export function pushContact(obj) {
  const text = `
  *Order a call back*
  *Name*: ${obj.name}
  *Phone number*: ||${obj.number}||
  *Comment*: ${obj.comment}
  `;
  axios({
    method: "post",
    url,
    data: {
      chat_id: chat_id,
      text: text,
      parse_mode: "MarkdownV2",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Website", url: "https://teplodom-three.vercel.app" }],
        ],
      },
    },
  });
}
export function pushRegister({ id, name, contact, password }) {
  const text = `
  *New User*
  *UserId*: ${id}
  *Name*: ${name}
  *Contact*: ${contact}
  *Password*: ${password}
  `;
  axios({
    method: "post",
    url,
    data: {
      chat_id: chat_id,
      text: text,
      parse_mode: "MarkdownV2",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "All accounts",
              url: "https://teplodomdata.onrender.com/accounts",
            },
          ],
        ],
      },
    },
  });
}
