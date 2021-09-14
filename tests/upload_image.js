const path = require('path')
const fs = require('fs')

const storage = require('../lib/firebase_storage')



function testUploadImage(){
  const filePath = path.join(__dirname + '/../files/images.jpg')
  console.log(filePath)

  const file = fs.readFileSync(filePath)

  storage.upload(file, 'images/file.jpg').then(url=>{
    console.log(url)
  })
}

testUploadImage()