// 1. 欢迎页逻辑
const enterBtn = document.getElementById('enter-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const homeScreen = document.getElementById('home-screen');

enterBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('slide-out');
    homeScreen.style.opacity = '1';
    setTimeout(() => { welcomeScreen.style.display = 'none'; }, 1200);
});

// 2. 轮播图逻辑
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 4000);

// 3. 页面跳转逻辑
const btnBlog = document.getElementById('btn-blog');
const btnCampus = document.getElementById('btn-campus');
const btnThoughts = document.getElementById('btn-thoughts');

const pageBlog = document.getElementById('page-blog');
const pageCampus = document.getElementById('page-campus');
const pageThoughts = document.getElementById('page-thoughts');

// 打开对应页面
btnBlog.onclick = () => showPage(pageBlog);
btnCampus.onclick = () => showPage(pageCampus);
btnThoughts.onclick = () => showPage(pageThoughts);

function showPage(pageElement) {
    // 隐藏首页，显示目标页
    homeScreen.classList.add('hidden');
    pageElement.classList.remove('hidden');
    window.scrollTo(0,0); // 回到顶部
}

// 返回首页
function goHome() {
    // 隐藏所有子页面
    document.querySelectorAll('.sub-page').forEach(page => page.classList.add('hidden'));
    // 显示首页
    homeScreen.classList.remove('hidden');
}

// 4. 博客详情页逻辑
function openPost(postId) {
    // 隐藏列表页
    pageBlog.classList.add('hidden');
    // 显示对应的文章页
    document.getElementById(postId).classList.remove('hidden');
    window.scrollTo(0,0);
}

function closePost(postId) {
    // 隐藏文章页
    document.getElementById(postId).classList.add('hidden');
    // 显示列表页
    pageBlog.classList.remove('hidden');
}
