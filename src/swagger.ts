import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'Documenting my API through SWAGGER',
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3000}`, 
            },
        ],
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts','./src/models/*.ts','./src/services/*.ts'], 
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
