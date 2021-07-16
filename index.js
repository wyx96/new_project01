function Gallery(ele,obj){
    var Timer = null;
    // 判断传入的行和列是否符合规范
    if(obj.row &&obj.col&&obj.row *obj.col != ele.children.length){
        throw 'error';
    }
    // 默认值
    var defaultEle = {
        row : 4,
        col : 5,
        maxWidth : 300,
        maxHeight : 400,
        minWidth : 100,
        minHeight : 50,
    }
    // 将传入数据和默认值合并，同类覆盖
    defaultEle = {...defaultEle,...obj};
    // console.log(defaultEle);

    // 设置坐标系
    var oldTime = new Date().getTime();
    for(let i = 0 ; i < ele.children.length;i++){
        ele.children[i].addEventListener('mouseenter',function(){
            console.log(111);
            
             Active(i);
        })
    }
    // 设置首页第一张大图
    Active(0);

    function Active(index){
        // 设置防抖
        if(Timer){
            clearTimeout(Timer)
        }
        let nowTime = new Date().getTime();
            if(nowTime - oldTime < 500){
                Timer = setTimeout(function(){
               Active(index);
            },500);
            return;
            }
            oldTime = nowTime;
            


        console.log(22);
        let currentX = index % defaultEle.col;
        let currentY = parseInt(index / defaultEle.col) ;
        for(let x = 0;x < defaultEle.col;x++){
            for(let y = 0 ;y < defaultEle.row; y++){

                let other_index = x + defaultEle.col*y;
                if(currentX == x && currentY == y){
                    ele.children[index].style.width = defaultEle.maxWidth + 'px';
                    ele.children[index].style.height = defaultEle.maxHeight + 'px';
                }else if(currentX == x){
                    ele.children[other_index].style.width = defaultEle.maxWidth + 'px';
                    ele.children[other_index].style.height = defaultEle.minHeight + 'px';
                }else if(currentY == y){
                    ele.children[other_index].style.width = defaultEle.minWidth + 'px';
                    ele.children[other_index].style.height = defaultEle.maxHeight + 'px';
                }else{
                    ele.children[other_index].style.width = defaultEle.minWidth + 'px';
                    ele.children[other_index].style.height = defaultEle.minHeight + 'px';
                }
            }
        }
    }
    // 设置section的最大边界
    out.style.width = (obj.maxWidth + obj.minWidth * (obj.col-1)) +'px'; 
    out.style.height = (obj.maxHeight + obj.minHeight * (obj.row-1)) + 'px'; 
}