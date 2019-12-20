const fs = require("fs");
const { join } = require("path");
const bcrypt = require("bcryptjs");
const faker = require("faker");
const parse = require("csv-parse/lib/sync");

const users = Array.from(new Array(15), (_, i) => ({
  // eslint-disable-line
  email: faker.internet.exampleEmail(),
  password: bcrypt.hashSync("password", 10),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  city: "Austin",
  state: "TX",
  profile_img: faker.internet.avatar(),
  id: i + 1,
}));

const columns = [
  "property_type",
  "room_type",
  "neighbourhood",
  "accommodates",
  "bedrooms",
  "bathrooms",
  "beds",
  "listing_url",
  "name",
  "picture_url",
  "city",
  "state",
  "zipcode",
  "country",
  "latitude",
  "longitude",
  "amenities",
  "price",
];

const listings = parse(
  fs.readFileSync(join(__dirname, "./austin-nov-18.csv")),
  {
    columns: true,
  },
).reduce((acc, listing, i) => {
  let obj = {};
  columns.forEach(column => {
    obj[column] = listing[column];
    obj["id"] = i + 1;
    obj["user_id"] = faker.random.number({ min: 1, max: 15 });
  });
  return [...acc, obj];
}, []);

fs.writeFileSync(
  join(__dirname, "./db.json"),
  JSON.stringify({ users, listings, predicted_price: 198 }, null, 2),
);
