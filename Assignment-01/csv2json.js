const fs=require('fs')
const csv=require('csvtojson')
var touch=require('touch')
const csvFilePath='./customer-data.csv'
const jsonFilePath='./customer-data.json'

touch(jsonFilePath)
csv()
    .fromFile(csvFilePath)
    .on('end_parsed',(jsonObj)=>{
        fs.truncate(jsonFilePath, 0, function(error){
                if (error) return console.error(error)

                fs.writeFile(jsonFilePath, JSON.stringify(jsonObj, null, 2), 'utf8', function(error){
                        if (error) return console.error(error)
                })
        })
    })
    .on('done',(error)=>{
        console.log('JSON file has been created sucessfully.')
    })