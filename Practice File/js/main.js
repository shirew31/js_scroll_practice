
  var upSpeed=15; //メッセージのスライド速度
  var delay=3000; //次のメッセージに切り替わるまでの静止時間
  var ticKerH=40; //表示ボックスの高さ

  window.onload =function divScroller(){
    scroller = document.getElementById("ticKer");//div表示ボックス
    scroller.style.height= ticKerH+"px";//表示ボックスの高さ
    scroller.style.lineHeight= ticKerH+"px";//行の高さ
    slide = document.getElementById("ulArea");//スライドさせるul要素
    slide.style.position = "absolute";//絶対位置
    slide.style.top = ticKerH+"px";//slideのtopの位置
    innScroll(ticKerH,upSpeed,delay)
  }

  function innScroll(ticKerH,upSpeed,delay){
    msec = upSpeed;//スクロール時間
    numTop = parseInt(slide.style.top)//数字文字列を整数に変換
    if(numTop > -ticKerH){//top位置が−30にならない間は
      slide.style.top = (numTop-1) + "px";//top位置を-1px
    }else{
      slide.style.top = 0 + "px";
      cngLi();//次のメッセージと交代
    }
    if(numTop == 0){msec = delay;//静止時間
    }
    setTimeout("innScroll("+ ticKerH +","+ upSpeed +","+ delay +")", msec);
    }
  
    function cngLi(){//メッセージの移動
      base = document.getElementById("ulArea");
      liList = base.getElementsByTagName("li");//与えられたタグ名をもつ要素のリスト

      elm = liList[0];//最上部のli要素

      base.appendChild(elm);//elm子ノードとして末尾に移動する


    }
