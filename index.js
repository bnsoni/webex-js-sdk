var webex = require('webex/env');
webex.rooms.create({
  title: 'My First Room!'
})
  // Make sure to log errors in case something goes wrong.
  .catch(function(reason) {
    console.error(reason);
    process.exit(1);
  });