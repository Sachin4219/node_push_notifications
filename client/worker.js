console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  const data = e.data;
  console.log(data);

  console.log("Push Recieved...");
  self.registration.showNotification(JSON.parse(data).title, {
    body: "Notified by Traversy Media!",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png",
  });
});
