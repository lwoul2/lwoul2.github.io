// 侦测网页滚动，控制看板娘的出现和隐藏
document.addEventListener('DOMContentLoaded', function () {
    const waifu = document.querySelector('.waifu');
    if (waifu) {
        window.addEventListener('scroll', function () {
            // 当网页向下滚动超过 300 像素时
            if (window.scrollY > 300) {
                waifu.classList.add('waifu-show'); // 蹦出来
            } else {
                waifu.classList.remove('waifu-show'); // 藏回去
            }
        });
    }
});