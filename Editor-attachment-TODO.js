// Simulate an API request that uploads files and returns uploaded files
function axiosFormData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        files: [
          {
            fd: 'abc.jpg',
            name: 'Screen shot 10204.jpg',
          },
          {
            fd: 'abc2.jpg',
            name: 'asdfgawwo120485.jpg',
          },
        ],
      })
    }, 1000)
  })
}

// A component method
async function uploadFile(cb) {
  uploading = true
  const data = await axiosFormData().catch()
  uploading = false

  // Do something here
  console.log(data.files.map((file) => file.fd))

  // return [data.files[0].fd]
  return data.files.map((file) => file.fd)
}

// Editor
function dispatchProp(fn) {
  fn().then((result) => {
    for (const image of result) {
      console.log(
        `this.toolbar.commands.image({ src: '${image}', height: 25 });`
      )
    }
  })
}

dispatchProp(uploadFile)
