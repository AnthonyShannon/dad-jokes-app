module.exports = function(sequelize, DataTypes) {
    let Joke = sequelize.define("joke", {
        joke: DataTypes.STRING,
        punchline: DataTypes.STRING,
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Joke;
}