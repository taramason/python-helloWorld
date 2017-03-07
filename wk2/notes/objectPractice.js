var roster = [
  {students: ["joe", "sam", "chris"],
   city: "Denver",
   state: "Colorado",
   key_codes: {
     fob: "jubolini",
     gate_key: "x57",
     access: "front_door"
   }
 },
 {colors: ["red", "green", "blue"]
 }
]

var roster = roster[0].students;
for (var i = 0; i < roster; i++) {
  console.log(roster[i]);
}
