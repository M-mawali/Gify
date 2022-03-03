function sendApiRequest(){
    var userInput = document.getElementById("input").value
    console.log(userInput)
    
    var giphyApiKey = "zvT1Y2w1i19IByqtSXJlUBc9t2lShQDR"
    var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`
    
    fetch(giphyApiUrl).then(function(data){
        return data.json()
    })
    .then (function(json){
        console.log(json.data[0].images.fixed_height.url)
        var imgPath= json.data[0].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)
    })
}
