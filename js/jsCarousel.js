// 师大要闻的轮播师大要闻的轮播师大要闻的轮播师大要闻的轮播师大要闻的轮播师大要闻的轮播师大要闻的轮播
let wrap = document.querySelector(".wrap");

let newLeft;

//  上一张
function preImg() {
      //   判断当前图片是否为最后一张
      if (wrap.style.left === "-3600px") {
            newLeft = -1200;   //是为最后一张就回到最前面一张
         
      } else {
            newLeft = parseInt(wrap.style.left) - 600  //不是就到上一张,因为当前wrap.style.left值是个字符串，所以就需要parseInt()
      }
      wrap.style.left = newLeft + "px";   // 新位置的值

      index--;    //上一张，每次图标就减去1
      if(index < 0){     //index最小为0
            index = 4;
      }
      showCurrentDot();
}

//  下一张
function nextImg() {
      //   判断当前图片是否为最后一张
      if (wrap.style.left === "0px") {
            newLeft = -2400;   //是为最后一张，就回到第一张
      } else {
            newLeft = parseInt(wrap.style.left) + 600  //不是第一张就继续下一张,因为当前wrap.style.left值是个字符串，所以就需要parseInt()
      }
      wrap.style.left = newLeft + "px";   // 新位置的值

      index++;    //下一张，每次图标就加1
      if(index > 4){     //index大于4 ，说明到了最后一张
            index = 0;
      }
      showCurrentDot();
}

// 自动播放
let  timer;
function  autoPlay(){
      //定时两秒执行一次，下一章 方法调用
         timer = setInterval(function(){
               nextImg(); 
         },2000)
}
autoPlay();

// 鼠标悬停时，停止图片轮播
   
//   找到当前容器，绑定一个onmouserover
document.querySelector(".container").onmouseover = function(){
        //清除定时任务
        clearInterval(timer);
}

//鼠标离开时，开始轮播图片

document.querySelector(".container").onmouseleave = function(){
       //自动播放
       autoPlay();
}
  
//显示小圆点
let index = 0;
// let  dots = document.getElementsByTagName("span");  //获取所有的小圆点
let dots = document.querySelectorAll("#Buttons span");
function showCurrentDot(){
         for(let  i = 0; i < dots.length; i++){
                //设置圆点不选中
                dots[i].className = "";
         }
         //将当前所在位置的图片对应的小圆点选中

         dots[index].className = "on";

}
showCurrentDot();

//点击小圆点事件

for(let i = 0; i< dots.length; i++){
        //绑定点击事件
        dots[i].onclick = function(){
                //获取点击的圆点的位置(id属性值)

                let  dis = this.id;
                
                //设置wrap的left值
                wrap.style.left = -(dis * 600) + "px";

                //设置红点位置

                index = dis - 1;   //dis是从1开始的，但是索引是从0开始的，所以要减少1
                showCurrentDot();

        }
}