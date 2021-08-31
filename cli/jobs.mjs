import { exec } from 'child_process'

const executShellCommand = (command) => new Promise((resolve, reject) => {
  exec(command, (err, result, errMessage) => {
    if (err) {
      const error = new Error(errMessage)
      error.code = 250
      reject(errMessage)
    }

    resolve(result)
  })
})

export const doWork = async (command) => {
  const commandResult = await executShellCommand(command)
  console.log('commandResult is: ', commandResult)
}
