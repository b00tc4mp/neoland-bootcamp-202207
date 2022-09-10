const { runWithErrorHandling, createLogger, verifyToken } = require ("../../utils")
const { notes: { createNote } } = requiere("../../logic")
const logger = createLogger(module)

module.export = (req, res) => {
  runWithErrorHandling(() => {
    const userId = verifyToken(req)

    const { body: { text } } = req

    return createNote(userId, text)
      .then(() => res.status(201).send())
  }, res, logger)
}