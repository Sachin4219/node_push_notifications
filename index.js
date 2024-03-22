const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publickey =
  "BKRns56lTgiccLbI4tVnvoBrzAeKhbDcZzVSR1Kexd2yVZS3mal9_lPL6Ec8nsYL64acQHgsZbyuC5WZsiTZDic";
const privatekey = "qxepqnkZ5K5KCZQtjxk4IxJHMVc4NyoP-iyb3So-PhY";

webpush.setVapidDetails("mailto:test@test.com", publickey, privatekey);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
