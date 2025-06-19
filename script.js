
window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const percentText = document.getElementById("loader-percent");
    const fill = document.getElementById("loader-fill");

    let percent = 1;
    const interval = setInterval(() => {
      percent++;
      percentText.textContent = percent + "%";
      fill.style.width = percent + "%";

      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          loader.style.opacity = "0";
          loader.style.pointerEvents = "none";
          setTimeout(() => {
            loader.style.display = "none";
          }, 300); // fade out duration
        }, 300); // wait a little before hiding
      }
    }, 30); // adjust speed (30ms x 100 = 3 sec)
  });

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const toggleMenu = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  toggleMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

// Loader control
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Ripple effect handler
const rippleButtons = document.querySelectorAll(".ripple");
rippleButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple-circle");
    circle.style.left = `${e.clientX - btn.offsetLeft}px`;
    circle.style.top = `${e.clientY - btn.offsetTop}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// Scroll-based animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".scroll-effect").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Tabs interaction
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    // Optionally update content here based on tab clicked
  });
});

// View Product Modal
const viewButtons = document.querySelectorAll(".view-btn");
viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productCard = btn.closest(".product-card");
    const name = productCard.querySelector(".product-name").innerText;
    const desc = productCard.querySelector(".product-desc").innerText;
    const price = productCard.querySelector(".product-price").innerText;
    const image = productCard.querySelector(".product-img").src;

    showModal(name, desc, price, image);
  });
});

function showModal(name, desc, price, image) {
  const modalHtml = `
    <div class="modal-overlay">
      <div class="modal-box">
        <span class="close-modal">×</span>
        <img src="${image}" class="modal-img" />
        <h3>${name}</h3>
        <p>${desc}</p>
        <p><strong>${price}</strong></p>
        <button class="add-to-cart ripple">Add to Cart</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  document.querySelector(".close-modal").addEventListener("click", () => {
    document.querySelector(".modal-overlay").remove();
  });
}

// Optional: Click outside modal to close
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.remove();
  }
});
