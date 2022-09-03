import { EnvVariable } from './../app/interface';

const variables:EnvVariable = {
    nameDatabase: process.env.DB_NAME || '',
    password: process.env.DB_PASSWORD || ''
}

export default variables;