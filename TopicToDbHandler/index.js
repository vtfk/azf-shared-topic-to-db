const saveToDb = require('../lib/save-to-db')

module.exports = async function (context, mySbMsg) {
  context.log('Got message')
  try {
    await saveToDb(context, mySbMsg)
    context.log('Message saved')
  } catch (error) {
    context.log.error(error)
    throw error
  }
}
