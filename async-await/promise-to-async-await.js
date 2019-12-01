const fetch = require("node-fetch")

const showGithubUser = (user) => {
  const url = `https://api.github.com/users/${user}`

  fetch(url)
  .then(res => {
    return res.json()
  })
  .then(res => {
    console.log(res.name)
    console.log(res.location)
  })
  .catch(err => console.log(err))
}

showGithubUser("rian-sanjaya")


const showGitUser = async (user) => {
  const url = `https://api.github.com/users/${user}`
  const res = await fetch(url).catch(err => console.log("Error fetching"))
  return await res.json()
}

showGitUser("rian-sanjaya")
.then(data => {
  console.log(data.name)
  console.log(data.location)
})


// create async method class
class GithubUser {
  fetchGithubUser = async (user) => {
    const url = `https://api.github.com/users/${user}`
    const res = await fetch(url)
    const result = await res.json()
    return result
  }
}

const gitUser = new GithubUser()
const user = gitUser.fetchGithubUser("rian-sanjaya")
console.log(user.name)
console.log(user.location)
