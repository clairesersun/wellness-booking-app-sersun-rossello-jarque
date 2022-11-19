let ADMIN_USERNAME
let ADMIN_PASSWORD
if (process.env.MONGODB_URI) {
  console.log("\x1b[31m%s\x1b[0m", 'SEEDING MONGODB PRODUCTION DATABASE!!!\n'.repeat(3))
  console.log("\x1b[31m%s\x1b[0m", "Don't forget to clear MONGODB_URI!\n")
  console.log("\x1b[33m%s\x1b[0m", "Run 'export MONGODB_URI=' or close this terminal after seeding.", "\n")
} else {
  console.log("\x1b[33m%s\x1b[0m", 'SEEDING MONGODB LOCAL DB')
}
if (process.env.NODE_ENV === 'test') {
  console.log("\x1b[35m%s\x1b[0m", 'Using Test Username/Password\n')
  ADMIN_USERNAME = 'testname'
  ADMIN_PASSWORD = 'testpass'
} else {
  require("dotenv").config();
  console.log("\x1b[32m%s\x1b[0m", 'Using .env file Username/Password\n')
  ADMIN_USERNAME = process.env.ADMIN_USERNAME
  ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
}

const { classes } = require("../models/Index");
const { connection } = require("../config/connection");

connection.once("open", async function () {
  await User.create({
    username: ADMIN_USERNAME,
    password: ADMIN_PASSWORD,
  });
  const classes = await Classes.create([
    {
        name: "Yin Yoga",
        when: new Date("11/22/2022 7:00 AM EDT").getTime(),
        date: new Date("11/22/2022").getTime(),
        time: new Date("7:00 AM EDT").getTime(),
        description: "<p>Slow down, relax, and turn inward in a series of asanas that improves flexibility, boosts circulation, and reduces tension.</p>",
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */""
    },
    {
        name: "Mat Pilates",
        when: new Date("11/22/2022 9:30 AM EDT").getTime(),
        date: new Date("11/22/2022").getTime(),
        time: new Date("9:30 AM EDT").getTime(),
        description: "<p>A strengthening and lengthening form of exercise that focuses on your core muscles while also training your arms and legs.</p>",
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */""
    },
    {
        name: "Power Yoga",
        when: new Date("11/22/2022 6:00 PM EDT").getTime(),
        date: new Date("11/22/2022").getTime(),
        time: new Date("6:00 PM EDT").getTime(),
        description: "<p> A fast-paced style of yoga that's focused on building strength and endurance.</p>",
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */""
    }
//do more classes across the week
  ]);
  

    await Promise.all(classes.map((classes) => classes.save()));

  connection.close();
});