const { User, Question } = require("../../../models");
const { NotFoundError, SystemError } = require("errors");
const { validateString } = require("validators");
const { verifyObjectId } = require("../../../utils");

/**
 * Creates a note for a user.
 *
 * @param {string} userId The user id.
 * @param {string} text The note text.
 *
 * @returns {Promise}
 *
 * @throws {TypeError} If any of the arguments does not match the expected type.
 * @throws {FormatError} If any of the arguments does not match the expected format.
 *
 * @throws {NotFoundError} If the user is not found.
 * @throws {SystemError} If an error happens in db.
 */

function createQuestion(
  userId,
  question,
  suggestedAnswer,
  timeLimit,
  visibility
) {
  debugger;
  verifyObjectId(userId, "user id");
  validateString(question, "question");

  return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);
      return Question.create({
        user: user._id,
        question,
        suggestedAnswer,
        timeLimit,
        visibility,
      }).catch((error) => {
        throw new SystemError(error.message);
      });
    })
    .then((question) => {});
}

module.exports = createQuestion;
