const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, label } = format;

module.exports = createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        label({ label: 'whatever' }),
        printf(i => `${i.level.toUpperCase()} ${i.timestamp} | ${i.message}`)
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'info.log', level: 'info' }),
        new transports.File({ filename: 'combined.log' })
    ],
  })