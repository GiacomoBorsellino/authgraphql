// Import Dotenv
import * as dotenv from 'dotenv';
dotenv.config();

const databases = {
  "databases": [
    {
      "database": process.env.DATABASE_NAME_1,
      "username": process.env.DATABASE_USERNAME_1,
      "password": process.env.DATABASE_PASSWORD_1,
      "params": {
        "pool": {
          "max": 5,
          "min": 0,
          "idle": 10000
        },
        "host": process.env.DATABASE_HOST_1,
        "port": process.env.DATABASE_PORT_1,
        "dialect": process.env.DATABASE_DIALECT_1,
        "operatorsAliases": false,
        "schema": process.env.DATABASE_SCHEMA_1
      }
    },
    {
      "database": process.env.DATABASE_NAME_2,
      "username": process.env.DATABASE_USERNAME_2,
      "password": process.env.DATABASE_PASSWORD_2,
      "params": {
        "host": process.env.DATABASE_HOST_2,
        "port": process.env.DATABASE_PORT_2,
        "dialect": process.env.DATABASE_DIALECT_2,
        "operatorsAliases": false
      }
    },
    {
      "database": process.env.DATABASE_NAME_3,
      "username": process.env.DATABASE_USERNAME_3,
      "password": process.env.DATABASE_PASSWORD_3,
      "params": {
        "host": process.env.DATABASE_HOST_3,
        "port": process.env.DATABASE_PORT_3,
        "dialect": process.env.DATABASE_DIALECT_3,
        "operatorsAliases": false,
        "schema": process.env.DATABASE_SCHEMA_3
      }
    }
  ]
};

export { databases };      