(function () {
  const QUOTE_URL = "https://forms.gle/B1yMb7YqDBog1eb78";
  const currentPage =
    document.body.dataset.page ||
    (window.location.pathname.split("/").pop() || "index.html").replace(
      ".html",
      ""
    );

  const navItems = [
    { href: "index.html", label: "Home", id: "home" },
    { href: "services.html", label: "Services", id: "services" },
    { href: "fleet.html", label: "Fleet", id: "fleet" },
    { href: "coverage.html", label: "Coverage", id: "coverage" },
    { href: "contact.html", label: "Contact", id: "contact" },
  ];

  const logoImg = `<img src="assets/logo.jpg" alt="AG Dispatch — You stay. We are on the way." class="logo-img">`;

  function isActive(id) {
    if (currentPage === "index" && id === "home") return true;
    return currentPage === id;
  }

  const navLinks = navItems
    .map(
      (item) =>
        `<a href="${item.href}" class="${isActive(item.id) ? "active" : ""}">${item.label}</a>`
    )
    .join("");

  const headerHtml = `
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo-link" aria-label="AG Dispatch home">
          ${logoImg}
        </a>
        <button class="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" id="main-nav">
          ${navLinks}
          <a href="${QUOTE_URL}" class="btn-quote btn-quote-mobile" target="_blank" rel="noopener">Get a Quote</a>
        </nav>
        <a href="${QUOTE_URL}" class="btn-quote header-cta-desktop" target="_blank" rel="noopener">Get a Quote</a>
      </div>
    </header>`;

  const footerHtml = `
    <footer class="site-footer">
      <div class="footer-map-bg" aria-hidden="true"></div>
      <div class="container footer-main">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="logo-link logo-link-footer">
              ${logoImg}
            </a>
            <p>Ontario&apos;s trusted carrier for courier, moving, and trucking.</p>
          </div>
          <div class="footer-col">
            <h4>Contact Us</h4>
            <p>Mobile: [Insert mobile number]</p>
            <p>Email: [Insert email address]</p>
            <p>Business Hours: [Insert business hours]</p>
          </div>
          <div class="footer-col">
            <h4>Connect</h4>
            <p>You stay. We are on the way.</p>
            <div class="social-row">
              <a href="#" class="social-icon" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
              <a href="#" class="social-icon" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg></a>
              <a href="#" class="social-icon" aria-label="X"><svg viewBox="0 0 24 24"><path d="M4 4l7.5 9.5L4 20h2l6-7 5 7h6l-8-10 7-6h-2l-5.5 6.5L10 4H4z"/></svg></a>
              <a href="#" class="social-icon" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <p>AG Gladiators. On the way, professionally.</p>
      </div>
    </footer>`;

  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");

  if (headerEl) headerEl.innerHTML = headerHtml;
  if (footerEl) footerEl.innerHTML = footerHtml;

  if (!document.querySelector('link[rel="icon"]')) {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "assets/logo.jpg";
    document.head.appendChild(favicon);
  }

  document.querySelectorAll('a[data-quote="true"]').forEach((link) => {
    link.href = QUOTE_URL;
    link.target = "_blank";
    link.rel = "noopener";
  });

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.AGDispatch = { QUOTE_URL };
})();
