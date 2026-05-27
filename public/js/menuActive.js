// active.js

export function initMenuActive() {
  const groups = document.querySelectorAll("[data-active-group]");

  groups.forEach((group) => {
    const items = group.querySelectorAll("[data-active-item]");

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        // a 태그 href="#" 방지
        if (item.tagName === "A") {
          e.preventDefault();
        }

        // 기존 active 제거
        items.forEach((el) => {
          el.classList.remove("active");
          el.classList.remove("is-active");
        });

        // 현재 active 추가
        item.classList.add("active");
      });
    });
  });
}
