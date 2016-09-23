$(function(){
    //特效
    $(".ks").addClass("chulai");
    var ks=$(".ks")
    ks.click(function(){
        $(".chulai").addClass("huiqv");
        $(".huihua").addClass("huihua1");
    })
//    字体
    var zt=$(".xiantiao li");
    for(var i=0;i<zt.length;i++){
        zt[i].index=i;
        zt[i].onclick=function(){
            for(var j=0;j<zt.length;j++){
                zt[j].style.background="#aaaaaa";
                zt[j].style.color="#000"
            }
            zt[this.index].style.background="#fff";
            zt[this.index].style.color="red";
        }
    }

        //zt.click(function(){
        //    for(var i=0;i<zt.length;i++){
        //        zt[i].style.background="#aaa";
        //    $(this).css({"background":"red","color":"#000"})
        //    }
        //});


})