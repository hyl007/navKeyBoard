function getFromInlocalStorage(name){
    return JSON.parse(localStorage.getItem(name)||'null')
}
function init(){
    var keys = {
        0: ['~','1','2','3','4','5', '6', '7', '8', '9', '0','-','+','backspace'],
        1: ['tab','Q','W','E','R','T', 'Y', 'U', 'I', 'O', 'P','[',']','\\'],
        2: ['caps','A', 'S', 'D','F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'enter'],
        3: ['shift','Z','X','C', 'V', 'B', 'N', 'M',',','.','?','shift'],
        4: ['ctrl','alt','opt','⌘',' ','⌘','opt','←','↑','↓','→'],
        'length':5
    }
    var hash = {
        Q :'qq.com',
        W: 'weibo.com',
        E: 'ele.com',
        R: 'people.com.cn',
        T: 'taobao.com',
        Y: 'amazon.cn',
        U: 'uc.cn',
        I: 'iqiyi.com',
        O: 'opera.com',
        P: 'panda.tv',
        A: '1688.com',
        S: 'suning.com',
        D: 'dingtalk.com',
        F: '163.com',
        G: 'ganji.com',
        H: 'hao123.com',
        J: 'jj.cn',
        K: 'kuaishou.com',
        L: 'lol.qq.com',
        Z: 'zhihu.com',
        X: 'xunlei.com',
        C: 'cf.qq.com',
        V: 'vivo.com.cn',
        B: 'bilibili.com',
        N: 'douyu.com',
        M: 'meituan.com'
    }
    //取出localStorage 中的 u 对应的hash
    var hashInlocalStorage = getFromInlocalStorage('u')
    if(hashInlocalStorage){
        hash = hashInlocalStorage
    }
    return{
        "keys":keys,
        "hash":hash
    }
}
