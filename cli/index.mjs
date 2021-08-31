import { getAnser } from './interactions.mjs'
import { doWork } from './jobs.mjs'
import { questions, questionActions } from './question-commands.mjs'


async function main () {
  while(true) {
    const answer = await getAnser(questions)
    const action = questionActions[answer]
    if (action) {
      await doWork(action)
    } else {
      console.log('Error asnwer passed:', answer)
    }
  }
}

main().catch(err => {
  if (err.code && err.code > 0) {
    console.error(err)
  }

  process.exit(err.code || 1)
})