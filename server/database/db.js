import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-s1vzklc-shard-00-00.feqatbv.mongodb.net:27017,ac-s1vzklc-shard-00-01.feqatbv.mongodb.net:27017,ac-s1vzklc-shard-00-02.feqatbv.mongodb.net:27017/?ssl=true&replicaSet=atlas-7anot0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;