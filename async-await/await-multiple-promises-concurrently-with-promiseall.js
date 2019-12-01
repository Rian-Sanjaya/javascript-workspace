const fetch = require('node-fetch')

const fetchFromGithub = async (endpoint) => {
  const url = `https://api.github.com${endpoint}`

  const response = await fetch(url)
  const body = await response.json()

  if (response.status !== 200) {
    throw Error(body.message)
  }

  return body
}


const showGitUserAndRepos = async (handle) => {
  try {
    const [user, repos] = await Promise.all([
      fetchFromGithub(`/users/${handle}`),
      fetchFromGithub(`/users/${handle}/repos`)
    ])

    console.log(user.name)
    console.log(`${repos.length} repos`)

  } catch(err) {
    console.error(`Error: ${err.message}`)
  }
  
}

showGitUserAndRepos('rian-sanjaya')
