const express = require("express");
const router = express.Router();

const Program = require("../../models/Program");

const Item = require("../../models/Item");

const User = require("../../models/User");

const Logs = require("../../models/Logs");
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

router.get("/users", (req, res) => {
    console.log("GET: USERS");
    User.find().exec(function (err, results) {
        var count = results.length;
        res.json(count);
    });
});

router.get("/volunteers", (req, res) => {
    console.log("GET: Volunteers");
    User.find({user_type: "Volunteer"}).exec(function (err, results) {
        var count = results.length;
        res.json(count);
    });
});

router.get("/participants", (req, res) => {
    console.log("GET: Participants");
    User.find({user_type: "Participant"}).exec(function (err, results) {
        var count = results.length;
        res.json(count);
    });
});

router.get("/users", (req, res) => {
    console.log("GET: USERS");
    User.find().exec(function (err, results) {
        var count = results.length;
        res.json(count);
    });
});

router.get("/all-volunteers", (req, res) => {
    console.log("Get: All volunteers.");
    User.find({user_type: "Volunteer"}).exec(function (err, results) {
        res.json(results);
    });
});

router.get("/all-participants", (req, res) => {
    console.log("Get: All participants.");
    User.find({user_type: "Participant"}).exec(function (err, results) {
        res.json(results);
    });
});

router.get("/programs", (req, res) => {
    console.log("GET: Programs");
    Item.find().exec(function (err, results) {
        var count = results.length;
        res.json(count);
    });
});

router.get("/announcements", (req, res) => {
    console.log("GET: Announcements");
    Item.find().exec(function (err, results) {
        var count = 0;
        for(var i=0;i<results.length;i++){
            count += results[i].announcements.length;
        }
        res.json(count);
    });
});

router.get("/tasks", (req, res) => {
    console.log("GET: Tasks");
    Item.find().exec(function (err, results) {
        var count = 0;
        for(var i=0;i<results.length;i++){
            count += (results[i].tasks.length);
        }
        res.json(count);
    });
});

router.get("/task-details", (req, res) => {
    console.log("GET: Task details.");
    Item.find().exec(function (err, results){
        var final = [];
        var count = 0;
        for(var i=0;i<results.length;i++){
            if(results[i].tasks.length != 0){
                for(var j=0;j<results[i].tasks.length;j++){
                    final.push({'program': results[i].name, 'task': results[i].tasks[j].task, 'name': results[i].tasks[j].name});
                    count++;
                    if(count > 5){
                        res.json(final);
                        res.end();
                        return;
                    }
                }
            }
        }
    });
});

router.get("/subscriptions", (req, res) => {
    console.log("GET: Subscriptions");
    User.find().exec(function (err, results) {
        var count = 0;
        for(var i=0;i<results.length;i++){
            count+=(results[i].subscription.length);
        }
        res.json(count);
    });
});

router.get("/program-stats", (req, res) => {
    console.log("GET: Program Stats");
    Item.find().sort([['announcements.length', 'descending']]).exec((err, results) => {
        final = [];
        for(var i=0;i<results.length;i++){
            final.push({'name': results[i].name, 'tasks': results[i].tasks.length, 'announcements': results[i].announcements.length});            
        }
        res.json(final);
    });
});

router.get("/stats", (req, res) => {
    console.log("GET: Database Stats");
    var now = Date();
    console.log(now);
    Logs.find({date: {$lt: now}}).sort([['date', 'descending']]).exec((err, results) => {
        final = [];
        for(var i=0;i<results.length && i < 5;i++){
            results[i].mm = results[i].date.toString().substr(8,2);
            final.push({'date': results[i].mm, 'hits': results[i].hits});
            console.log(final[i]);
        }
        final.reverse();
        res.json(final);
    });
});

module.exports = router;
