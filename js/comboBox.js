document.addEventListener('DOMContentLoaded', () => {
    const customSelect = document.querySelector('.custom-select');
    const selectedOption = customSelect.querySelector('.selected-option');
    const optionsList = customSelect.querySelector('.options-list');
    let isOpen = false;

    selectedOption.addEventListener('click', () => {
        isOpen = !isOpen;
        customSelect.classList.toggle('active', isOpen);
    });

    // optionsList.addEventListener('click', (e) => {
    //     const target = e.target;
    //     if (target.tagName.toLowerCase() === 'li') {
    //     selectedOption.textContent = target.textContent;
    //     // customSelect.dataset.value = target.dataset.value; // 将选中的值存储在自定义data属性中
    //     isOpen = false;
    //     customSelect.classList.remove('active');
    //     }
    // });

    // 点击其他地方时关闭下拉框
    document.addEventListener('click', (e) => {
        if (!customSelect.contains(e.target) && isOpen) {
        isOpen = false;
        customSelect.classList.remove('active');
        }
    });
});