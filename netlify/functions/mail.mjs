exports.handler = async function (event) {
  const MailListener = require("mail-listener2");

  const mailListener = new MailListener({
    username: "macintosh8435@gmail.com",
    password: "Z3ptEDf15%lE",
    host: "imap.gmail.com",
    port: 993, // IMAP port
    tls: true,
    mailbox: "INBOX",
    searchFilter: ["UNSEEN"], // Fetch only unread emails
    markSeen: true, // Mark emails as read
    fetchUnreadOnStart: true, // Fetch unread emails on startup
  });

  mailListener.start();
  let _m;
  await new Promise((resolve) => {
    mailListener.on("mail", (mail) => {
      console.log("New email received:", mail.subject);
      console.log("Body:", mail.text);
      _m = mail.text;
      resolve(mail);
    });
    mailListener.on("error", (err) => {
      console.error("Error:", err);
      _m = err;
      resolve(err);
    });
  });

  return {
    statusCode: 200,
    body: _m,
  };
};
