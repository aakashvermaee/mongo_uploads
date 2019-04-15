module.exports = {
    baseApiUri: '/',
    evn: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    mongoUrl: process.env.MONGO_URL || 'mongodb://root:$123456root@ds033740.mlab.com:33740/mongo-uploads-dev',
    mongoUser: process.env.MONGO_USER || 'root',
    mongoPassword: process.env.MONGO_PASSWORD ||'$123456root',
    mongoDatabase: process.env.MONGO_DB ||'mongo-uploads-dev'
}