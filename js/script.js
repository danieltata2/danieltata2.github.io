// ===============================================
//    DANIEL ÑUFLO PORTFOLIO SCRIPT – 2025 
// ===============================================

document.addEventListener("DOMContentLoaded", () => {

  const typewriterText = `
Desarrollador Backend apasionado por sistemas escalables y de alto rendimiento.
Dominio en Node.js, Python, Go, AWS, Docker y arquitectura cloud.
Construyo APIs que aguantan millones de requests y pipelines que nunca fallan.
Me emociona resolver problemas complejos con código limpio, eficiente y mantenible.`;

  const typewriter = document.getElementById("typewriter");
  const cursor = document.querySelector(".cursor");
  let i = 0;
  const baseSpeed = 30;

  function type() {
    if (i < typewriterText.length) {
      const char = typewriterText[i];
      if (char === "\n") {
        typewriter.innerHTML += "<br>";
      } else {
        typewriter.innerHTML += char;
      }
      i++;
      setTimeout(type, baseSpeed + Math.random() * 30);
    } else {
      cursor.style.animation = "blink 1s infinite";
    }
  }

  setTimeout(type, 1200);

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Efecto escalonado por hijos
        entry.target.querySelectorAll(".reveal-child").forEach((child, idx) => {
          child.style.transitionDelay = `${idx * 0.1}s`;
          setTimeout(() => child.classList.add("revealed"), 100);
        });
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -80px 0px" });

  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  // ===================== NAVEGACIÓN =====================
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section[id]").forEach(section => {
      if (window.scrollY >= section.offsetTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      if (link.classList.contains("active")) {
        link.style.textShadow = "0 0 20px #00ff41";
      } else {
        link.style.textShadow = "none";
      }
    });

    nav.classList.toggle("scrolled", window.scrollY > 120);
  });

  document.querySelector(".logo").addEventListener("mouseenter", function() {
    this.style.animation = "glitch 0.3s";
    setTimeout(() => this.style.animation = "", 300);
  });

  const canvas = document.getElementById("matrix-bg") || (() => {
    const c = document.createElement("canvas");
    c.id = "matrix-bg";
    document.body.appendChild(c);
    return c;
  })();

  const ctx = canvas.getContext("2d");
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const cols = Math.floor(w / 20) + 1;
  const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const drops = Array(cols).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(10, 10, 10, 0.04)";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#00ff41";
    ctx.font = "16px 'JetBrains Mono'";

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * 20;
      const y = drops[i] * 20;

      ctx.fillStyle = Math.random() > 0.98 ? "#00ffff" : "#00ff41";
      ctx.fillText(char, x, y);

      if (y > h && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 33);

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  document.querySelectorAll(".cv-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);

      const audio = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=");
      audio.play().catch(() => {});
    });
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: "smooth"
        });
      }
    });
  });


  setTimeout(() => {
    document.querySelector(".logo").style.animation = "glitch 0.5s";
    setTimeout(() => document.querySelector(".logo").style.animation = "", 500);
  }, 800);


  const dynamicCSS = `
    @keyframes glitch {
      0% { text-shadow: 0.05em 0 0 #00ff41, -0.05em -0.05em 0 #00ffff, 0.05em 0.05em 0 #ff00ff; }
      14% { text-shadow: 0.05em 0 0 #00ff41, -0.05em -0.05em 0 #00ffff, 0.05em 0.05em 0 #ff00ff; }
      15% { text-shadow: -0.05em -0.05em 0 #00ff41, 0.05em 0 0 #00ffff, -0.05em 0.05em 0 #ff00ff; }
      49% { text-shadow: -0.05em -0.05em 0 #00ff41, 0.05em 0 0 #00ffff, -0.05em 0.05em 0 #ff00ff; }
      50% { text-shadow: 0.05em 0.05em 0 #00ff41, -0.05em 0 0 #00ffff, 0.05em -0.05em 0 #ff00ff; }
      99% { text-shadow: 0.05em 0.05em 0 #00ff41, -0.05em 0 0 #00ffff, 0.05em -0.05em 0 #ff00ff; }
      100% { text-shadow: none; }
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(0, 255, 65, 0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple {
      to { transform: scale(4); opacity: 0; }
    }

    .reveal { opacity: 0; transform: translateY(80px); }
    .reveal.revealed { opacity: 1; transform: translateY(0); transition: all 1.2s cubic-bezier(0.215, 0.61, 0.355, 1); }
    .reveal-child { opacity: 0; transform: translateY(30px); }
    .reveal-child.revealed { opacity: 1; transform: translateY(0); transition: all 0.8s ease-out; }

    ::selection { background: #00ff41; color: black; }
  `;

  const style = document.createElement("style");
  style.textContent = dynamicCSS;
  document.head.appendChild(style);

  console.log("%cDANIEL ÑUFLO PORTFOLIO LOADED – GOD MODE ACTIVATED", "color:#00ff41; font-size:16px; font-weight:bold; text-shadow: 0 0 20px #00ff41;");
});