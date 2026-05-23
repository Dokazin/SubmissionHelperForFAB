(() => {
  const activeClass = "fab-nav-clicked";

  const samePath = (url) => {
    const current = new URL(window.location.href);
    return url.pathname.replace(/\/$/, "") === current.pathname.replace(/\/$/, "");
  };

  const setClickedActive = (link) => {
    document
      .querySelectorAll(`.md-nav__link.${activeClass}`)
      .forEach((item) => item.classList.remove(activeClass));

    document
      .querySelectorAll(".md-nav__link--active")
      .forEach((item) => item.classList.remove("md-nav__link--active"));

    link.classList.add(activeClass, "md-nav__link--active");
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest(".md-nav__link[href*='#']");

    if (!link) {
      return;
    }

    const url = new URL(link.href, window.location.href);

    if (!url.hash || !samePath(url)) {
      return;
    }

    setClickedActive(link);

    window.setTimeout(() => setClickedActive(link), 120);
  });

  window.addEventListener(
    "hashchange",
    () => {
      const current = [...document.querySelectorAll(".md-nav__link[href*='#']")].find(
        (link) => new URL(link.href, window.location.href).hash === window.location.hash
      );

      if (current) {
        setClickedActive(current);
      }
    },
    { passive: true }
  );
})();
