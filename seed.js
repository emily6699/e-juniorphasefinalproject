const { db, Campuses, Students } = require("./server/db");
const { green, red } = require("chalk");

const seed = async () => {
  await db.sync({ force: true });
  const [NewYork, Chicago, LosAngeles] = await Promise.all([
    Campuses.create({
      name: "NewYork",
      address: "111 New Street, NY 11111",
      description: "The campus in New York"
    }),
    Campuses.create({
      name: "Chicago",
      address: "222 Chi Street, CHI 22222",
      description: "The campus in Chicago"
    }),
    Campuses.create({
      name: "LosAngeles",
      address: "333 Los Street, LA 33333",
      description: "The campus in LosAngeles"
    })
  ]);

  const [Aaa, Bbb, Ccc, Ddd] = await Promise.all([
    Students.create({
      firstName: "Aaa",
      lastName: "Aoo",
      email: "Aaa@gmail.com",
      gpa: 3.0
    }),
    Students.create({
      firstName: "Bbb",
      lastName: "Boo",
      email: "Bbb@gmail.com",
      gpa: 3.3
    }),
    Students.create({
      firstName: "Ccc",
      lastName: "Coo",
      email: "Ccc@gmail.com",
      gpa: 3.6
    }),
    Students.create({
      firstName: "Ddd",
      lastName: "Doo",
      email: "Ddd@gmail.com",
      gpa: 3.9
    })
  ]);

  await Aaa.setCampus(NewYork);
  await Bbb.setCampus(Chicago);
  await Ccc.setCampus(LosAngeles);
  await Ddd.setCampus(LosAngeles);
  // seed your database here!

  console.log(green("Seeding success!"));
  db.close();
};

seed().catch(err => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});
