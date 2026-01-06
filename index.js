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

// ---
// パーティクル背景
if (typeof particlesJS !== 'undefined') {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.8
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}

// ---
// パララックス効果
const homeHero = document.querySelector('.home-hero');
const heroContent = document.querySelector('.home-hero__content');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroHeight = homeHero ? homeHero.offsetHeight : 0;

  if (scrolled < heroHeight) {
    // ヒーローコンテンツを少し遅く動かす
    if (heroContent) {
      heroContent.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
      heroContent.style.opacity = 1 - (scrolled / heroHeight) * 0.5;
    }
  }
});

// ---
// カスタムカーソル
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  // フォロワーを滑らかに追従させる
  const animateFollower = () => {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateFollower);
  };
  animateFollower();

  // ホバー時のエフェクト
  const hoverElements = document.querySelectorAll('a, button, .btn, .skills__skill, .projects__row, .output__item');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursorFollower.classList.remove('hover');
    });
  });

  // クリック時のエフェクト
  document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
    cursorFollower.classList.add('click');
  });
  document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
    cursorFollower.classList.remove('click');
  });
}

// ---
// スキルバーアニメーション
const skillsData = [
  { name: 'TypeScript / JavaScript', percentage: 90 },
  { name: 'Ruby on Rails', percentage: 85 },
  { name: 'PHP / Laravel', percentage: 80 },
  { name: 'React', percentage: 75 },
  { name: 'AWS / Docker', percentage: 70 },
  { name: 'MySQL / PostgreSQL', percentage: 80 }
];

// スキルバーを生成
const skillsContainer = document.querySelector('.about__content-skills .skills');
if (skillsContainer) {
  // 既存のスキルタグを保持
  const existingSkills = skillsContainer.innerHTML;

  // スキルバーセクションを追加
  const skillBarsContainer = document.createElement('div');
  skillBarsContainer.className = 'skill-bars';
  skillBarsContainer.style.width = '100%';
  skillBarsContainer.style.marginTop = '3rem';

  skillsData.forEach(skill => {
    const skillBar = document.createElement('div');
    skillBar.className = 'skill-bar';
    skillBar.innerHTML = `
      <div class="skill-bar__info">
        <span class="skill-bar__name">${skill.name}</span>
        <span class="skill-bar__percentage">${skill.percentage}%</span>
      </div>
      <div class="skill-bar__container">
        <div class="skill-bar__fill" data-percentage="${skill.percentage}"></div>
      </div>
    `;
    skillBarsContainer.appendChild(skillBar);
  });

  skillsContainer.parentNode.insertBefore(skillBarsContainer, skillsContainer.nextSibling);
}

// Intersection Observerでスキルバーをアニメーション
const observeSkillBars = () => {
  const skillBars = document.querySelectorAll('.skill-bar__fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const percentage = entry.target.getAttribute('data-percentage');
        entry.target.style.width = percentage + '%';
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observer.observe(bar));
};

// DOMContentLoaded後にスキルバーを監視
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observeSkillBars);
} else {
  observeSkillBars();
}
