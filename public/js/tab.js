export const initTabs = () => {
  const tabContainers = document.querySelectorAll(".tab_wrap");

  tabContainers.forEach((container) => {
    // 부모 요소에 이벤트 딱 하나만 등록
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab_button");

      // 클릭된 요소가 탭 버튼이 아니거나, 이미 활성화된 탭이면 무시
      if (!btn || btn.classList.contains("active")) return;

      const targetId = btn.getAttribute("aria-controls");
      const targetPanel = document.getElementById(targetId);

      if (!targetPanel) return;

      // [핵심] 현재 컨테이너 안에서 active인 애들만 찾아서 비활성화 (전체 순회 X)
      container.querySelector(".tab_button.active")?.classList.remove("active");
      container
        .querySelector(".tab_button[aria-selected='true']")
        ?.setAttribute("aria-selected", "false");
      container
        .querySelector(".tab_button[tabindex='0']")
        ?.setAttribute("tabindex", "-1");

      container
        .querySelector(".tab_panel.active")
        ?.setAttribute("hidden", "true");
      container.querySelector(".tab_panel.active")?.classList.remove("active");

      // 새 요소 활성화
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      btn.setAttribute("tabindex", "0");

      targetPanel.classList.add("active");
      targetPanel.removeAttribute("hidden");
    });
  });
};
