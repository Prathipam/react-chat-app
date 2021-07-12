const express = require('express');
const router = express.Router();
const { Chat } = require("../models/Chat");
const NodeRSA = require('node-rsa');
const { decrypt } = require('../helpers/encryption');

router.get("/getChats", async (req, res) => {
    await Chat.find()
        .populate("sender")
        .exec((err, chats) => {
            chats.map(chat => {
                chat.message = decrypt(chat.message)
            })
            if (err) return res.status(400).send(err);
            res.status(200).send(chats)
        })
});

module.exports = router;