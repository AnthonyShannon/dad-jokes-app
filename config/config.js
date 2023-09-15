require('dotenv').config();

const config = {
    "development": {
        "username": "root",
        "password": process.env.MYSQL_DEV_PASSWORD,
        "database": "dad_jokes",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "username": "q91d3w0la3p4xvcm",
        "password": "sgs6vbg9bhoo0shx",
        "database": "yidxdx1iw11xjcx1",
        "host": "ofcmikjy9x4lroa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "dialect": "mysql"
    }
}

module.exports(config);