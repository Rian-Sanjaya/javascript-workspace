const runCallback = (cb) => {
  setTimeout(() => {
    cb('1s')

    setTimeout(() => {
      cb('2s')

      setTimeout(() => {
        cb('3s')
      }, 1000)

    }, 1000)

  }, 1000)
}

// runCallback((msg) => console.log(msg))

const delay = (ms) => {
  return new Promise((res) => {
    setTimeout(() => {
      res('resolve promise')
    }, ms)
  })
}

const runAsync = async (cb) => {
  let result
  
  result = await delay(1000)
  console.log(result)
  cb('1s')
  await delay(1000)
  cb('2s')
  await delay(1000)
  cb('3s')
}

runAsync((msg) => console.log(msg))
