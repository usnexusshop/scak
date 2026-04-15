export default async function handler(req, res) {

if (req.method !== “POST”) {

return res.status(405).send(“Only POST allowed”);

}



const { number } = req.body;



const BOT_TOKEN = process.env.BOT_TOKEN;

const CHAT_ID = process.env.CHAT_ID;



await fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage, {

method: “POST”,

headers: { “Content-Type”: “application/json” },

body: JSON.stringify({

chat_id: CHAT_ID,

text: New number submitted: ${number}

})

});



return res.status(200).json({ ok: true });

}

