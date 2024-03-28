const API_URL = "https://api.telegram.org";
const token = "7082789471:AAF-7g4VXxzcC8mRNib41fFYHwNky17ERoQ";
const chat_id = "-4103497980";

export function pushContact(obj) {
  const text = `*Name*: ${obj.name}\n*Phone number*: ||${obj.number}||\n*Comment*: ${obj.comment}`;

  const url = `${API_URL}/bot${token}/sendMessage`;
  fetch(`${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chat_id,
      text: text,
      parse_mode: "MarkdownV2",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Website", url: "google.com" }
          ],
        ],
      },
    }),
  });
}
