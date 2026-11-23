document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Renowned Student Leader at RSS",
    "Top Academic Achiever in Literature",
    "Drama CCA Performer & Storyteller",
    "Well-Known Community Volunteer",
    "Trilingual: English • Mandarin • Tamil"
  ];

  const typedRoleEl = document.getElementById("typed-role");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedRoleEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedRoleEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedFilter = button.getAttribute("data-filter");

      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        card.style.display = (selectedFilter === "all" || category === selectedFilter) ? "block" : "none";
      });
    });
  });

  const greetings = {
    en: '"Welcome to my portfolio! Thank you for taking the time to learn about my journey as a student leader, performer, and volunteer."',
    zh: '"欢迎来到我的个人主页！感谢您花时间了解我作为学生领袖、戏剧社成员和社区志愿者的成长历程。"',
    ta: '"எனது சுயவிவரப் பக்கத்திற்கு நல்வரவு! ஒரு மாணவர் தலைவராகவும், நாடகக் கலைஞராகவும், தன்னார்வலராகவும் எனது பயணத்தைப் பற்றி அறிந்துகொள்ள நேரம் ஒதுக்கியதற்கு நன்றி."'
  };

  const langButtons = document.querySelectorAll(".lang-btn");
  const greetingText = document.getElementById("greeting-text");

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      langButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      greetingText.textContent = greetings[btn.getAttribute("data-lang")];
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
