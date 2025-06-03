// Hamburger menu toggle for mobile
function AbouttoggleMenu() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.classList.toggle('show');
  }
}

// Run code after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Highlight active nav link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  // Animated counters
  document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.getAttribute('data-count') || +counter.textContent;
    let count = 0;
    const increment = Math.ceil(target / 100);

    function updateCounter() {
      count += increment;
      if (count > target) count = target;
      counter.textContent = count;
      if (count < target) {
        requestAnimationFrame(updateCounter);
      }
    }

    updateCounter();
  });

  // Scroll-to-top button
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    scrollBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // Team card hover animation
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.03)';
      card.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Sticky header on scroll
  const header = document.querySelector('.header');
  const stickyClass = 'sticky';
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add(stickyClass);
    } else {
      header.classList.remove(stickyClass);
    }
  });

  // Optional: Fade in sections on scroll
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeInElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  // Typing Text Animation
  const typingText = document.getElementById('typing-text');
  const roles = [
    "Backend Developer",
    "Java & C++ Programmer",
    "DSA Problem Solver",
    "Freelancer & Coder",
    "Tech Explorer"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      typingText.textContent = current.substring(0, charIdx--);
      if (charIdx < 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, 50);
      }
    } else {
      typingText.textContent = current.substring(0, charIdx++);
      if (charIdx > current.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else {
        setTimeout(type, 100);
      }
    }
  }

  type();

  // Image tilt effect
  const photo = document.querySelector(".myself-photo");
  if (photo) {
    photo.addEventListener("mousemove", (e) => {
      const { width, height, left, top } = photo.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      photo.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg) scale(1.05)`;
    });

    photo.addEventListener("mouseleave", () => {
      photo.style.transform = "rotate(0deg) scale(1)";
    });
  }

  // Scroll to Top Button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "⬆";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.padding = "10px 15px";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "50%";
  scrollBtn.style.backgroundColor = "#fea116";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.display = "none";
  scrollBtn.style.zIndex = "999";
  scrollBtn.style.fontSize = "18px";

  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Light/Dark Mode Toggle
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌙";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.top = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.padding = "8px 10px";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "10px";
  toggleBtn.style.backgroundColor = "#444";
  toggleBtn.style.color = "#fff";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.zIndex = "1000";

  document.body.appendChild(toggleBtn);

  let isDark = false;
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    isDark = !isDark;
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  });
});
