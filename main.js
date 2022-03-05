
// function geting data from the giphy website using the api and linking it with the search 
function searchGify(){
    var userInput = document.getElementById("input").value
    console.log(userInput)

    var giphyApiKey = "zvT1Y2w1i19IByqtSXJlUBc9t2lShQDR"
    var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}&limit=15`
    
    fetch(giphyApiUrl)
    .then(function(res){
        return res.json()
    }).then(function(json){
        console.log(json.data[0].images.fixed_height.url)
        json.data.forEach(function(obj){
            console.log(obj.images.fixed_height.url)
        var imgPath= obj.images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)
    })
})
}


// function to clean the results by new search 
// Amjad is here
// push to the new branch 