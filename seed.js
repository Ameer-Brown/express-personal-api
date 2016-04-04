// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_memory = [{_id: memories._id,
                  name: memories.name,
                funniest_memory: memories.funniest_memory,
              }];

db.Memory.create(new_memory, function(err, memory){
   if (err){
    return console.log("Error:", err);
  }

  console.log("Created new memory", memory._id);
  process.exit(); // we're all done! Exit the program.
});

// var profile = [
//                     {name: "Ameer Brown"},
//
//                       {profile_image: "https://scontent-lax3-1.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/12938145_10206331753508701_5342059587620019442_n.jpg?oh=d6082eafa625e23dad5470cc10df75cd&oe=57BE0B76"},
//
//                       {github_link: "https://github.com/Ameer-Brown/express-personal-api.git"},
//
//                       {born: "Queens, NY"},
//
//                       {current_city: "Oakland, CA"},
//
//                       {height: "6'3"},
//
//                       {favorite_food: "Italian"},
//
//
//                     ];
