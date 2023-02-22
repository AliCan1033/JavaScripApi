const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.set("strictQuery", false)
        await mangoose.connect(process.env.DATABASE_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB