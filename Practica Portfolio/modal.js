const cards = document.querySelectorAll(".project-card");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

if (cards.length && overlay && modal && closeBtn) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector(".project-img");
      const tag = card.querySelector(".project-tag");
      const title = card.querySelector(".project-title");
      const desc = card.querySelector(".project-desc");

      if (img && modalImg) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || "Proyecto";
      }
      if (tag && modalTag) {
        modalTag.textContent = tag.textContent || "";
      }
      if (title && modalTitle) {
        modalTitle.textContent = title.textContent || "";
      }
      if (desc && modalDesc) {
        modalDesc.textContent = desc.textContent || "";
      }

      overlay.classList.remove("hidden");
      modal.classList.remove("opacity-0", "scale-95");
      modal.classList.add("opacity-100", "scale-100");
    });
  });
}

function closeModal() {
  modal.classList.remove("opacity-100", "scale-100");
  modal.classList.add("opacity-0", "scale-95");

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 300);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });
}
