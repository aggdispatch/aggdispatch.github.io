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
            <p>Mobile: <a href="tel:+12263365846">+1 226.336.5846</a></p>
            <p>Email: <a href="mailto:hgeronga12@aggdispatch.ca">hgeronga12@aggdispatch.ca</a></p>
            <p>Address: B-173 Plymouth Road, Kitchener, ON, CA N2G 3G7</p>
          </div>
          <div class="footer-col">
            <h4>Connect</h4>
            <p>You stay. We are on the way.</p>
            <p><a href="terms.html">Terms and Conditions</a></p>
            <div class="social-row">
              <a href="https://www.facebook.com/share/1c2nZ9ntgg" class="social-icon" aria-label="Facebook" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                </svg>
              </a>
              <a href="https://wa.me/12263365846" class="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z" fill-rule="evenodd"></path>
                </svg>
              </a>
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
