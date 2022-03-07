let resultsDiv = document.getElementById("resultsDiv")   
// function geting data from the giphy website using the api and linking it with the search 
function searchGify(userInput= document.getElementById("input").value){
    resultsDiv.innerHTML = " "
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
        img.className ="list"
        img.setAttribute("src", imgPath)
        resultsDiv.appendChild(img)
    })
})
}

