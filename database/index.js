import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export default async(name = 'default') => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            name,
            database: process.env.NODE_ENV === 'test' ?
                'webscraping' : defaultOptions.database,
        }),
    );
};