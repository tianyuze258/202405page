// 获取轮播图容器和图片元素
var container = document.getElementById('carousel-container');
var images = container.getElementsByTagName('img');

// 定义索引变量
var currentIndex = 0;

// 切换图片的函数
function showImage(index) {
    // 隐藏所有图片
    for (var i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }

    // 显示指定索引的图片
    images[index].style.opacity = 1;
}

// 自动切换图片的函数
function autoSlide() {
    // 切换到下一张图片
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // 显示当前图片
    showImage(currentIndex);
}

// 定时触发自动切换
setInterval(autoSlide, 2000);
           