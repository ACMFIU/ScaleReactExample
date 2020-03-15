import Sequelize from 'sequielize';

const Connection = new Sequilize(
  'relay',
  'postgres',
  'podtgres',
  {
    dialect: 'postgres',
    host: '',
  }
);


//================== Tables ========================//
const Users = Connection.define('users', {
  firstName: {
    type: Sequilize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequilize.STRING,
    allowNull: false
  },
  email: {
    type: Sequilize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: Sequilize.STRING,
    allowNull: false,
    validate: {
      isPassword: true,
    }
  }
});

const Books = Connection.define('books', {
  title: {
    type: Sequilize.STRING,
    allowNull: false
  },
  sku: {
    type: Sequilize.STRING,
    allowNull: false
  },
  image: {
    type: Sequilize.STRING,
    allowNull: false
  },
  description: {
    type: Sequilize.STRING,
    allowNull: false
  },
  price: {
    type: Sequilize.INTEGER,
    allowNull: false
  },
  qty: {
    type: Sequilize.INTEGER,
    allowNull: true
  },
});

const Author = Connection.define('authors', {
  firstName: {
    type: Sequilize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequilize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequilize.STRING,
    allowNull: false
  },
});

const Comments = Connection.define('comments', {
  message: {
    type: Sequilize.STRING,
    allowNull: true
  },
});

const Items = Connection.define('items', {
  name: {
    type: Sequilize.STRING,
    allowNull: false
  },
  type: {
    type: Sequilize.STRING,
    allowNull: false
  },
  sku: {
    type: Sequilize.STRING,
    allowNull: false
  },
  image: {
    type: Sequilize.STRING,
    allowNull: false
  },
  description: {
    type: Sequilize.STRING,
    allowNull: false
  },
  price: {
    type: Sequilize.INTEGER,
    allowNull: false
  },
  qty: {
    type: Sequilize.INTEGER,
    allowNull: true
  },
});

const Manufacturer = Connection.define('manufacturer', {
  name: {
    type: Sequilize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequilize.STRING,
    allowNull: false
  }
});


//================== Relations ========================//
