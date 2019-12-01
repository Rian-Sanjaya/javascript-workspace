const fetch = require('node-fetch')

const fetchGithubUser = async (user) => {
  const url = `https://api.github.com/users/${user}`

  const response = await fetch(url)
  const body = await response.json()
  // console.log(response)
  // console.log(body)

  if (response.status !== 200) {
    throw Error(body.message)
  }

  return body
}

fetchGithubUser('rian-sanjayaa')
.then(res => {
  console.log(res.name)
  console.log(res.location)
})
.catch(err => console.log(`Error: ${err.message}`))


// with try...catch

async function showGitUser(user) {
  try {
    const res = await fetchGithubUser(user)
    console.log(res.name)
    console.log(res.location)
  } catch(err) {
    console.error(`Error: ${err.message}`)
  }
}

showGitUser('rian-sanjayaa')
