const request = require ('request')
const cheerio = require ('cheerio')
const scorecardObj = require('./scorecard')

function getAllMatchLinks(uri){
    request(uri , function(error, response, html){
        if(error)  console.log(error)
        else extractAllMatchLink(html)})
}

function extractAllMatchLink(html){
    let $ = cheerio.load(html)

    let scoreCardElemArr = $('a[data-hover="Scorecard"]')
     for(i=0; i<scoreCardElemArr.length; i++){
         let scoreCardlink = $(scoreCardElemArr[i]).attr('href')

         let fullLink = 'https://www.espncricinfo.com/' + scoreCardlink

         console.log(fullLink)

         scorecardObj.ps(fullLink)      //acessing ./scorecard, providing full links
     }
}

module.exports={
    getAllMatch: getAllMatchLinks,
}