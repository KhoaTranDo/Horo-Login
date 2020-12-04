const mongoose =require('mongoose')
async function connect()
{
    try {
         await mongoose.connect('mongodb://localhost:27017/horo_online', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
        
      });
        console.log('success!')
    } catch (error) {
        console.log('fail!')
    }
}
module.exports={connect}