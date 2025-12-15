import pino from 'pino';

const logger = pino({
    browser: {
        asObject: true,
    }, // Ensures the browserlogs are outputted as objects
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        base: {
            env:process.env.NODE_ENV
    },
        timestamp: pino.stdTimeFunctions.isoTime,
})

export default logger;