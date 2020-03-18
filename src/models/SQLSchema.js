import Sequelize from 'sequielize';
import _ from 'lodash';

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
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  pdf: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

const Author = Connection.define('authors', {
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
  bio: {
    type: Sequelize.STRING,
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
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
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
    type: Sequelize.STRING,
    allowNull: false
  }
});


//================== Relations ========================//

Users.hasMany(Comments);
Comments.belongsTo(Users);
Books.hasMany(Comments);
Comments.belongsTo(Books);
Books.belongsTo(Author);
Author.hasMany(Books);
Items.hasMany(Comments);
Comments.belongTo(Items);
Items.belongTo(Manufacturer);
Manufacturer.hasMany(Items);


//================== Data Injection ========================//

