const mongojs = require('mongojs')
const db = mongojs(process.env.COSMOSDB_CONNECTION)
const logs = db.collection(process.env.COSMOSDB_COLLECTION)

module.exports = (context, data) => {
  return new Promise(async (resolve, reject) => {
    logs.save(data, (error, result) => {
      if (error) {
        context.log.error(error)
        return reject(error)
      } else {
        context.log(`save-to-db - success`)
        return resolve(result)
      }
    })
  })
}
