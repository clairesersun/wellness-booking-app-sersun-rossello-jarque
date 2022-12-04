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
  const classInfo = await classes.create([
    {
        name: "Yin Yoga",
        when: new Date("11/28/2022 7:00 AM EDT"), /*what fnc gets me the date only*/
        date: new Date("11/28/2022").getTime(),
        time: new Date("7:00 AM EDT").getTime(),
        description: "<p>Slow down, relax, and turn inward in a series of asanas that improves flexibility, boosts circulation, and reduces tension.</p>",
        img:'./public/imgs/1Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: true
    },
    {
        name: "Mat Pilates",
        when: new Date("11/28/2022 9:30 AM EDT"),
        date: new Date("11/28/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("9:30 AM EDT").getTime(),
        description: "<p>A strengthening and lengthening form of exercise that focuses on your core muscles while also training your arms and legs.</p>",
        img:'/public/imgs/4Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: true
    },
    {
        name: "Power Yoga",
        when: new Date("11/28/2022 6:00 PM EDT"),
        date: new Date("11/28/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("6:00 PM EDT").getTime(),
        description: "<p>A fast-paced style of yoga that's focused on building strength and endurance.</p>",
        img:'/public/imgs/5Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: false
    },
    {
        name: "Meditation",
        when: new Date("11/29/2022 12:00 PM EDT"),
        date: new Date("11/29/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("12:00 PM EDT").getTime(),
        description: "<p>Focus on calming the mind through guided meditation and breathe practices</p>",
        img:'/public/imgs/4Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: false
    },
    {
        name: "Power Yoga",
        when: new Date("11/29/2022 6:00 PM EDT"),
        date: new Date("11/29/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("6:00 PM EDT").getTime(),
        description: "<p>A fast-paced style of yoga that's focused on building strength and   endurance.</p>",
        img:'/public/imgs/2Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: true
    },
    {
        name: "Intro to Pranayama",
        when: new Date("11/30/2022 11:00 AM EDT"),
        date: new Date("11/30/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("11:00 AM EDT").getTime(),
        description: "<p>An introductory class to introduce practicioners to the work of pranayama  and how to incorporate it into their practices as well as daily life.</p>",
        img:'/public/imgs/7Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: true
    },
    {
        name: "Mat Pilates",
        when: new Date("11/30/2022 7:00 PM EDT"),
        date: new Date("11/30/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("7:00 PM EDT").getTime(),
        description: "<p>A strengthening and lengthening form of exercise that focuses on your  core muscles while also training your arms and legs.</p>",
        img:'/public/imgs/7Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: false
    },
    {
        name: "Power Yoga",
        when: new Date("12/1/2022 5:30 AM EDT"),
        date: new Date("12/1/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("5:30 AM EDT").getTime(),
        description: "<p>A fast-paced style of yoga that's focused on building strength and   endurance.</p>",
        img:'/public/imgs/2Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: false
    },
    {
        name: "Yin Yoga",
        when: new Date("12/1/2022 6:45 PM EDT"), /*what fnc gets me the date only*/
        date: new Date("12/1/2022").getTime(),
        time: new Date("6:45 PM EDT").getTime(),
        description: "<p>Slow down, relax, and turn inward in a series of asanas that improves  flexibility, boosts circulation, and reduces tension.</p>",
        img:'/public/imgs/1Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: true
    },
    {
        name: "Meditation",
        when: new Date("12/2/2022 12:00 PM EDT"),
        date: new Date("12/2/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("12:00 PM EDT").getTime(),
        description: "<p>Focus on calming the mind through guided meditation and breathe  practices</p>",
        img:'/public/imgs/8Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: true
    },
    {
        name: "Mat Pilates",
        when: new Date("12/2/2022 5:30 PM EDT"),
        date: new Date("12/2/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("5:30 PM EDT").getTime(),
        description: "<p>A strengthening and lengthening form of exercise that focuses on your  core muscles while also training your arms and legs.</p>",
        img:'/public/imgs/6Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: false
    },
    {
        name: "Power Yoga",
        when: new Date("12/3/2022 8:00 AM EDT"),
        date: new Date("12/3/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("8:00 AM EDT").getTime(),
        description: "<p>A fast-paced style of yoga that's focused on building strength and   endurance.</p>",
        img:'/public/imgs/2Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: false
    },
    {
        name: "Meditation",
        when: new Date("12/3/2022 9:15 AM EDT"),
        date: new Date("12/3/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("9:15 AM EDT").getTime(),
        description: "<p>Focus on calming the mind through guided meditation and breathe  practices</p>",
        img:'/public/imgs/9Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: false
    },
    {
        name: "Power Yoga",
        when: new Date("12/4/2022 10:30 AM EDT"),
        date: new Date("12/4/2022").getTime(), /*what fnc gets me the date only*/
        time: new Date("10:30 AM EDT").getTime(),
        description: "<p>A fast-paced style of yoga that's focused on building strength and   endurance.</p>",
        img:'/public/imgs/2Asana.png',
        location: "" /* This is where the api comes in */,
        locationImg: /* This is where the api comes in */"",
        booked: true
    },
  ]);
  

await Promise.all(classInfo.map((classInfo) => classInfo.save()));

connection.close();
});