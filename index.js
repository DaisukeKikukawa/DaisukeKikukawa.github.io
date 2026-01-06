// ---
// ハンバーガーメニュー
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
// ロゴクリック
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

// ---
// AOS（スクロールアニメーション）初期化
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100,
});

// ---
// スムーズスクロール
document.querySelectorAll('a[href^="#"], a[href^="./#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    const targetId = href.replace('./', '').replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ---
// ナビゲーションのスクロール時変化
const header = document.querySelector('.header');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }

  lastScrollY = currentScrollY;
});

// ---
// タイピングエフェクト
const typingElement = document.querySelector('.heading-primary');
if (typingElement) {
  const text = typingElement.textContent;
  typingElement.textContent = '';
  typingElement.style.borderRight = '2px solid #fff';

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      // タイピング完了後、カーソルを点滅させてから消す
      setTimeout(() => {
        typingElement.style.borderRight = 'none';
      }, 1500);
    }
  };

  // ページロード後に開始
  setTimeout(typeWriter, 500);
}
