function positionDivRelativeTo(targetDivId, referenceDivId, topOffset, leftOffset) {
    // 获取要定位的div和参考div的DOM元素
    const targetDiv = document.getElementById(targetDivId);
    const referenceDiv = document.getElementById(referenceDivId);
    //判断存在
    if (!targetDiv || !referenceDiv) {
      console.error('Both target and reference divs must exist.');
      return;
    }
    //获得参考div的绝对位置，具体为上左
    let rect = referenceDiv.getBoundingClientRect();
    let top = rect.top;
    let left = rect.left;
    console.log(top);
    console.log(left);
    //根据两个div相对位置和参考的div的绝对位置，得出目标div的绝对位置
    let ttop = topOffset + top;
    let tleft = leftOffset + left;
    console.log(ttop);
    console.log(tleft);
    //设置目标div的位置为绝对位置
    targetDiv.style.position = 'absolute';
    targetDiv.style.top = `${ttop}px`; // 使用传入的topOffset值
    targetDiv.style.left = `${tleft}px`; // 使用传入的leftOffset值
}
// positionDivRelativeTo('lunbo','sdyw',0,0);

function showUpDiv(targetDivId) {
    const targetDiv = document.getElementById(targetDivId);
    targetDiv.style.opacity = 1;
}