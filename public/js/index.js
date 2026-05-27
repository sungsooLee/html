import { initTabs } from "./tab.js";
import { initMenuActive } from "./menuActive.js";

// DOM이 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initMenuActive();

  // 나중에 추가될 컴포넌트들
  // initAccordions();
  // initModals();
});
