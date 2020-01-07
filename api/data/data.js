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
  zipcode: 78722,
  profile_image: faker.internet.avatar(),
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

  obj["neighborhood"] = obj["neighbourhood"];
  obj["accommodates"] = Number(obj["accommodates"]);
  obj["bedrooms"] = Number(obj["bedrooms"]);
  obj["bathrooms"] = Number(obj["bathrooms"]);
  obj["beds"] = Number(obj["beds"]);
  obj["zipcode"] = Number(obj["zipcode"]);
  obj["latitude"] = Number(obj["latitude"]);
  obj["longitude"] = Number(obj["longitude"]);
  delete obj.neighbourhood;
  obj["amenities"] = obj["amenities"]
    .replace(/\}|\{|"/g, "")
    .split(",");
  obj["price"] = parseInt(obj["price"].split("$")[1].trim());
  return [...acc, obj];
}, []);

const neighborhoods = [
  "East Downtown",
  "SW Williamson Co.",
  "Travis Heights",
  "Zilker",
  "East Riverside",
  "West Campus",
  "Balcones Civic Association",
  "Clarksville",
  "Brentwood",
  "Old West Austin",
  "Cherry Creek",
  "Scofield Ridge",
  "Bouldin Creek",
  "Tarrytown",
  "Northwest Hills",
  "McKinney",
  "South Congress",
  "Hyde Park",
  "Barton Hills",
  "Dawson",
  "Upper Boggy Creek",
  "Rosedale",
  "Angus Valley",
  "South Lamar",
  "Govalle",
  "Holly",
  "South Manchaca",
  "Steiner Ranch",
  "Westgate",
  "Rosewood",
  "Downtown",
  "Galindo",
  "Allendale",
  "Windsor Park",
  "West Austin",
  "Barton Creek",
  "Highland",
  "Wooten",
  "University of Texas",
  "Rollingwood",
  "Copperfield",
  "St. Edwards",
  "West Congress",
  "East Congress",
  "Long Canyon",
  "Georgian Acres",
  "South First",
  "Westlake Hills",
  "Parker Lane",
  "MLK & 183",
  "Oak Hill",
  "Mesa Park",
  "Hancock",
  "Circle C",
  "Pleasant Valley",
  "North Loop",
  "Montopolis",
  "North Shoal Creek",
  "Pecan Spings",
  "Mueller",
  "Sunset Valley",
  "Old Enfield",
  "St. Johns",
  "Crestview",
  "Walnut Creek",
  "Bull Creek",
  "Cat Mountian",
  "Balcony Woods",
  "Gateway",
  "Anderson Mill",
  "Bryker Woods",
  "Canyon Mesa",
  "Windsor Hills",
  "Rainey Street",
  "Gracywoods",
  "Lamplight Village",
  "Milwood",
  "University Hills",
];

const property_types = [
  "Guesthouse",
  "House",
  "Apartment",
  "Guest suite",
  "Condominium",
  "Townhouse",
  "Bungalow",
  "Loft",
  "Bed and breakfast",
  "Other",
  "Cabin",
  "Cottage",
  "Campsite",
  "Tent",
  "Villa",
  "Camper/RV",
  "Nature lodge",
  "Tiny house",
  "Chalet",
  "Farm stay",
  "Boat",
  "Serviced apartment",
  "Boutique hotel",
  "Bus",
  "Tipi",
  "Treehouse",
  "Barn",
  "Hostel",
  "Yurt",
  "Houseboat",
  "Resort",
  "Dome house",
  "Aparthotel",
  "Hotel",
  "Casa particular (Cuba)",
  "Earth house",
  "Hut",
];

const amenities = [
  "TV",
  "Internet",
  "WiFi",
  "Kitchen",
  "Pets",
  "Breakfast",
  "Free Parking",
  "Hot Tub",
  "Air Conditioning",
  "Private Entrance",
];

fs.writeFileSync(
  join(__dirname, "./db.json"),
  JSON.stringify({
    users,
    listings,
    neighborhoods,
    property_types,
    amenities,
    prediction: { price: 197 },
  }),
);

/**
 * TODO: add neighborhoods, property_types
 * TODO: correctly format listing data
 */
