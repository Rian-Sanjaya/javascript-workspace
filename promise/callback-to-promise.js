// function with a callback
const wait = (delay, cb) => {
  console.log('waiting...')
  setTimeout(
    cb,
    delay
  )
}

const end = () => {
  console.log('finished')
}

wait(2000, end)


// convert to promise
const waitP = (delay) => {
  return new Promise((resolve, reject) => {
    console.log('waiting...')

    setTimeout(() => {
      resolve()
    }, delay)
  })
}

waitP(2000)
.then( res => {
  end()
})