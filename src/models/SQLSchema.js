const Sequelize = require('sequelize');
const _ = require('lodash');
const data = require('./fake-data');
const uuid = require('uuid/v4')

const Connection = new Sequelize(
  'storeDB',
  'postgres',
  'ACMPanthers2020',
  {
    dialect: 'postgres',
    host: 'localhost',

  }
);


//================== Tables ========================//
const Users = Connection.define('users', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUID4
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isPassword: true,
    }
  }
});

const Books = Connection.define('books', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUID4
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING(5000),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(5000),
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  pdf: {
    type: Sequelize.STRING(5000),
    allowNull: true
  }
});

const Authors = Connection.define('authors', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUID4
  },
  fname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.STRING(5000),
    allowNull: false
  },
});

const Comments = Connection.define('comments', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUID4
  },
  message: {
    type: Sequelize.STRING,
    allowNull: true
  },
});

const Items = Connection.define('items', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUID4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING(5000),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(5000),
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
});

const Manufacturer = Connection.define('manufacturer', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUID4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.STRING(5000),
    allowNull: false
  }
});


//================== Relations ========================//

Users.hasMany(Comments);
Comments.belongsTo(Users);
Books.hasMany(Comments);
Comments.belongsTo(Books);
Books.belongsTo(Authors);
Authors.hasMany(Books);
Items.hasMany(Comments);
Comments.belongsTo(Items);
Items.belongsTo(Manufacturer);
Manufacturer.hasMany(Items);


//================== Data Injection ========================//

Connection.sync({force: true}).then(() => {
  var n = -1;
  var k = -1;
  _.times(3, () => {
    n++;
    return Books.create({
      id: uuid(),
      title: data.books[n].name,
      sku: data.books[n].sku,
      image: data.books[n].image,
      description: data.books[n].description,
      price: data.books[n].price,
      qty: data.books[n].qty,
      pdf: data.books[n].pdf,
    }).then(book => {
      k++;
      return book.createAuthor({
        id: uuid(),
        fname: data.author[data.books[k].author].firstName,
        lname: data.author[data.books[k].author].lastName,
        bio: data.author[data.books[k].author].bio
      });
    });
  });
});
module.exports = Connection;
