function listenUser(hash){
    document.onkeypress = function(a){
        var key1 = a.key.toUpperCase()
        var website = hash[key1]
        window.open('http://'+website,'_blank')
    }
}
