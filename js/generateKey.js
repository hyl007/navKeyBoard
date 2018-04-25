function tag(tagName){
    return document.createElement(tagName)
}
function createSpan(textContent){
    var span1 = tag('span')
    span1.textContent = textContent
    span1.className = 'text'
    return span1
}

function createButton(id){
    var button1 = tag('button')
    button1.id=id
    button1.textContent='E'
    //网站变更后
    button1.onclick = function(b){
        var key = b.target.id
        var x = prompt('给我一个网址')
        hash[key] = x//hash变更
        localStorage.setItem('u',JSON.stringify(hash))
        var img2 = b.target.previousSibling
        img2.src='http://'+x+'/favicon.ico'
        img2.onerror = function(er){
            er.target.src='//i.loli.net/2018/02/07/5a7afd6a245cd.png'
        }
    }
    return button1
}