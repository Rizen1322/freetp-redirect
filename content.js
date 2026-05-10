function cleanPage() {
  // 1. Удаляем картинку-рекламу
  document.querySelectorAll('img[src="/download-yb.png"]').forEach(el => {
    el.remove();
  });

  // 2. Удаляем правый сайдбар целиком
  document.querySelectorAll('.rightside').forEach(el => {
    el.remove();
  });
}

// сразу после загрузки
cleanPage();

// если сайт подгружается динамически
const observer = new MutationObserver(() => {
  cleanPage();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

