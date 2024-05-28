const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My CRUD API',
        description: 'API documentation for my CRUD application',
    },
    host: '127.0.0.1:8080',
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; // Your root file where the endpoint definitions are

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js'); // Your project's root file
});