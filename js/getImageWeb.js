function createImg(x){
    var img1 = tag('img')
    //获取网站的图片
    if (x){
        img1.src='http://'+x+'/favicon.ico'
    }else{
        img1.src='//i.loli.net/2018/02/07/5a7afd6a245cd.png'
    }
    img1.onerror = function(xxx){
        xxx.target.src='//i.loli.net/2018/02/07/5a7afd6a245cd.png'
    }
    return img1
}