use("CrudDB")

db.createCollection("courses")

// create

// db.courses.insertOne({name:"sigma web dev ",
// price:0,
// assignments:12,
// projects:45
// })

// db.courses.insertMany([
//   {
//     "courseId": "C101",
//     "title": "MongoDB Basics",
//     "level": "Beginner",
//     "duration": "4 weeks",
//     "description": "Introduction to NoSQL concepts, CRUD operations, and MongoDB shell."
//   },
//   {
//     "courseId": "C102",
//     "title": "MongoDB Schema Design",
//     "level": "Intermediate",
//     "duration": "6 weeks",
//     "description": "Learn how to design efficient schemas using documents and collections."
//   },
//   {
//     "courseId": "C103",
//     "title": "Indexing & Performance",
//     "level": "Intermediate",
//     "duration": "5 weeks",
//     "description": "Covers indexing strategies, query optimization, and performance tuning."
//   }
// ])

//Read

// let a =db.courses.find({price:0})
// // Find all documents
// db.courses.find();

// Find documents where age is greater than 23, returning name and age
// db.students.find({ age: { $gt: 23 } }, { name: 1, age: 1, _id: 0 });

// Find one document where name is "Alice"
// db.students.findOne({ name: "Alice" });


// console.log(a.count())

// Update

db.courses.updateOne({price:0},{$set:{price:100}})

db.courses.updateMany({price:100},{$set:{price:1000}})

// Delete

db.courses.deleteOne({price:1000})
db.courses.deleteMany({price:1000})