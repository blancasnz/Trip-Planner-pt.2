var Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripPlanner');

Hotel = db.define({
  name: Sequelize.STRING,
  num_stars: Sequelize.FLOAT(1, 5),
  amenities: Sequelize.TEXT
});

Restaurant = db.define({
  name: Sequelize.STRING,
  cuisine: Sequelize.TEXT,
  price: Sequelize.INTEGER
})

Activity = db.define({
  name: Sequelize.STRING,
  age_range: Sequelize.STRING
})

Place = db.define({
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  phone: Sequlize.STRING,
  location: Sequelize.ARRAY(Sequelize.FLOAT)
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
