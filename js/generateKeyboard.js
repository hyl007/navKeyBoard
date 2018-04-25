function generateKeyboard(keys,hash){
    for(var index=0;index<keys.length;index++){
        var div1 = tag('div')
        div1.className = 'row'

        main1.appendChild(div1)

        for(var index1=0;index1<keys[index].length;index1++){
            var span1 = createSpan(keys[index][index1])

            var button1 = createButton(keys[index][index1])

            var img1 = createImg(hash[keys[index][index1]])

            // 遍历keys，生存kbd标签
            var kbd1 = tag('kbd')
            kbd1.className='kbdSet'
            kbd1.appendChild(span1)
            kbd1.appendChild(img1)
            kbd1.appendChild(button1)

            div1.appendChild(kbd1)
        }
    }
}