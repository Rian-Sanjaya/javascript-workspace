const fetch = require('node-fetch')

const fetchFromGithub = async (endpoint) => {
  const baseUrl = `https://api.github.com`
  const url = `${baseUrl}${endpoint}`

  const response = await fetch(url)
  const body = await response.json()

  if (response.status !== 200) {
    throw Error(body.message)
  }

  return body
}

const showGitUserAndRepos = async (user) => {
  // await sequentially
  // const usr = await fetchFromGithub(`/users/${user}`)
  // const repos = await fetchFromGithub(`/users/${user}/repos`)

  // 1. make http request asyncronously
  const userPromise = fetchFromGithub(`/users/${user}`)
  const userRepos = fetchFromGithub(`/users/${user}/repos`)

  try {
    // 2. await http response to come back
    const usr = await userPromise
    // const repos = await userRepos

    console.log(usr.name)
    // console.log(`${repos.length} repos`)

  } catch(err) {
    console.error(`Error: ${err.message}`)
  }

  try {
    // 2. await http response to come back
    const repos = await userRepos
    console.log(`${repos.length} repos`)

  } catch(err) {
    console.error(`Error: ${err.message}`)
  }
  
}


// handle error without try...catch
const showGitUsrAndRepos = (user) => {
  fetchFromGithub(`/users/${user}`)
  .then(res => {
    console.log(res.name)
  })
  .catch(err => console.error(`Error: ${err.message}`))

  fetchFromGithub(`/users/${user}/repos`)
  .then(res => {
    console.log(`${res.length} repos`)
  })
  .catch(err => console.error(`Error: ${err.message}`))
}

showGitUserAndRepos('rian-sanjaya')
showGitUsrAndRepos('rian-sanjayaa')
