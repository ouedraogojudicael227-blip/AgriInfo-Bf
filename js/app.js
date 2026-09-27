(function () {
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 864e5);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
  }
  function getCookie(name) {
    const hit = document.cookie.split("; ").find((r) => r.startsWith(name + "="));
    return hit ? decodeURIComponent(hit.split("=").slice(1).join("=")) : "";
  }
  function store(key, value) {
    localStorage.setItem(key, value);
    if (getCookie("agri-cookie") === "oui") setCookie(key, value, 180);
  }
  function read(key, fallback) {
    return localStorage.getItem(key) || getCookie(key) || fallback;
  }
  const theme = read("agri-theme", "light");
  document.documentElement.setAttribute("data-theme", theme);
  const favs = () => JSON.parse(localStorage.getItem("agri-favs") || "[]");
  const saveFavs = (list) => localStorage.setItem("agri-favs", JSON.stringify(list));
  window.AgriApp = {
    lang() { return read("agri-lang", "fr"); },
    regionId() { return read("agri-region", "centre"); },
    cookieOk() { return getCookie("agri-cookie") === "oui"; },
    acceptCookies() {
      setCookie("agri-cookie", "oui", 180);
      setCookie("agri-lang", this.lang(), 180);
      setCookie("agri-region", this.regionId(), 180);
      setCookie("agri-theme", document.documentElement.getAttribute("data-theme") || "light", 180);
      document.getElementById("cookieBar")?.remove();
    },
    refuseCookies() {
      setCookie("agri-cookie", "non", 180);
      ["agri-lang", "agri-region", "agri-theme", "agri-anon", "agri-shell"].forEach((n) => {
        document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      });
      document.getElementById("cookieBar")?.remove();
    },
    anonId() {
      let id = localStorage.getItem("agri-anon");
      if (!id) {
        id = "anonyme" + String(Math.floor(Math.random() * 1000)).padStart(3, "0");
        localStorage.setItem("agri-anon", id);
      }
      return id;
    },
    newAnonId() {
      const id = "anonyme" + String(Math.floor(Math.random() * 1000)).padStart(3, "0");
      localStorage.setItem("agri-anon", id);
      return id;
    },
    t(key) { const lang = this.lang(); return (I18N[lang] && I18N[lang][key]) || I18N.fr[key] || key; },
    region() { return AGRI.regions.find((r) => r.id === this.regionId()) || AGRI.regions[3]; },
    zone() { return this.region().zone; },
    setLang(v) { store("agri-lang", v); location.reload(); },
    setRegion(v) { store("agri-region", v); location.reload(); },
    toggleTheme() {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      store("agri-theme", next);
    },
    toggleMenu() { document.getElementById("nav")?.classList.toggle("open"); },
    isFav(id) { return favs().includes(id); },
    toggleFav(id) {
      const list = favs();
      const i = list.indexOf(id);
      if (i >= 0) list.splice(i, 1); else list.push(id);
      saveFavs(list);
      document.querySelectorAll("[data-fav='" + id + "']").forEach((btn) => {
        btn.textContent = list.includes(id) ? "\u2605" : "\u2606";
      });
    },
    async loadMeteo(region) {
      const r = region || this.region();
      const url = "https://api.open-meteo.com/v1/forecast?latitude=" + r.lat + "&longitude=" + r.lon + "&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Africa%2FOuagadougou&forecast_days=7";
      try { const res = await fetch(url); if (!res.ok) return null; return await res.json(); } catch (e) { return null; }
    },
    search(q) {
      const query = (q || "").trim().toLowerCase();
      if (!query) return;
      location.href = "conseils.html?q=" + encodeURIComponent(query);
    },
    img(id) {
      const ok = ["mil", "sorgho", "mais", "riz", "arachide", "coton", "association", "grenier", "oseille", "tomate", "voandzou", "zai", "demi-lunes", "compost", "paillage"];
      return ok.includes(id) ? "img/" + id + ".svg" : "";
    },
    isStandalone() { return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true; },
    isApp() {
      const q = new URLSearchParams(location.search).get("shell");
      if (q === "app") localStorage.setItem("agri-shell", "app");
      if (q === "web") localStorage.setItem("agri-shell", "web");
      if (this.isStandalone()) return true;
      return localStorage.getItem("agri-shell") === "app";
    },
    setShell(mode) {
      localStorage.setItem("agri-shell", mode);
      location.href = mode === "web" ? "index.html?shell=web" : "index.html?shell=app";
    },
    notifOn() { return localStorage.getItem("agri-notif") === "on"; },
    async enableNotifs() {
      if (!("Notification" in window)) { alert(this.t("notifImpossible")); return false; }
      const perm = await Notification.requestPermission();
      if (perm !== "granted") { alert(this.t("notifRefuse")); return false; }
      localStorage.setItem("agri-notif", "on");
      await this.pushNotif(this.t("notifOkTitre"), this.t("notifOkTexte"), "alertes.html");
      this.checkNotifs(true);
      return true;
    },
    disableNotifs() { localStorage.setItem("agri-notif", "off"); },
    async pushNotif(title, body, url) {
      if (!("Notification" in window) || Notification.permission !== "granted") return;
      const opts = { body, icon: "img/icon.svg", lang: "fr", tag: title.slice(0, 40), data: { url: url || "alertes.html" } };
      if (navigator.serviceWorker && navigator.serviceWorker.ready) {
        const reg = await navigator.serviceWorker.ready;
        if (reg.showNotification) { await reg.showNotification(title, opts); return; }
      }
      new Notification(title, opts);
    },
    checkNotifs(force) {
      if (!this.notifOn() || !("Notification" in window) || Notification.permission !== "granted") return;
      const day = new Date().toDateString();
      if (!force && localStorage.getItem("agri-notif-day") === day) return;
      localStorage.setItem("agri-notif-day", day);
      const month = new Date().getMonth();
      const zone = this.zone();
      const alerte = (AGRI.alertes || []).find((a) => a.quand.includes(month) && a.zones.includes(zone));
      const actions = (AGRI.actions[zone] || AGRI.actions.centre)[month] || [];
      if (alerte) this.pushNotif(alerte.titre, alerte.texte, "alertes.html");
      else if (actions[0]) this.pushNotif(this.t("actionsJour"), actions[0], "semaine.html");
    },
    installApp() {
      if (window.__agriDeferredPrompt) {
        window.__agriDeferredPrompt.prompt();
        window.__agriDeferredPrompt.userChoice.finally(() => { window.__agriDeferredPrompt = null; });
        return;
      }
      localStorage.setItem("agri-shell", "app");
      alert(this.t("installerAide"));
    }
  };
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(function () {
      setTimeout(function () { AgriApp.checkNotifs(); }, 800);
    }).catch(function () {});
  }
})();
function headerHTML() {
  const t = (k) => AgriApp.t(k);
  const app = AgriApp.isApp();
  document.documentElement.setAttribute("data-shell", app ? "app" : "web");
  const regionOpts = AGRI.regions.map((r) => `<option value="${r.id}" ${r.id === AgriApp.regionId() ? "selected" : ""}>${r.nom}</option>`).join("");
  const here = (location.pathname.split("/").pop() || "index.html");
  const link = (href, label) => `<a href="${href}" class="${href === here ? "active" : ""}">${label}</a>`;
  const settings = `<div class="wrap settings"><label>${t("region")}<select onchange="AgriApp.setRegion(this.value)">${regionOpts}</select></label><span class="anon-chip">${AgriApp.anonId()}</span><label>${t("langue")}<select onchange="AgriApp.setLang(this.value)"><option value="fr" ${AgriApp.lang() === "fr" ? "selected" : ""}>Francais</option><option value="en" ${AgriApp.lang() === "en" ? "selected" : ""}>English</option></select></label></div>`;
  if (app) {
    return `<div class="top app-top"><div class="wrap top-inner"><a class="brand" href="index.html">AgriInfo</a><div class="row"><button class="icon-btn" onclick="AgriApp.toggleTheme()">${t("theme")}</button></div></div>${settings}</div><nav class="tabbar" id="tabbar"><a href="index.html" class="${here === "index.html" ? "active" : ""}">${t("accueil")}</a><a href="conseils.html" class="${here === "conseils.html" ? "active" : ""}">${t("conseils")}</a><a href="meteo.html" class="${here === "meteo.html" ? "active" : ""}">${t("meteo")}</a><a href="zat.html" class="${here === "zat.html" ? "active" : ""}">${t("zat")}</a><a href="plus.html" class="${here === "plus.html" ? "active" : ""}">${t("plus")}</a></nav>`;
  }
  return `<div class="top web-top"><div class="wrap top-inner"><a class="brand" href="index.html">AgriInfo BF</a><div class="row"><button class="icon-btn menu-btn" onclick="AgriApp.toggleMenu()">${t("menu")}</button><nav id="nav">${link("index.html", t("accueil"))}${link("conseils.html", t("conseils"))}${link("techniques.html", t("techniques"))}${link("meteo.html", t("meteo"))}${link("zat.html", t("zat"))}${link("semaine.html", t("semaine"))}${link("alertes.html", t("alertes"))}${link("saison.html", t("saison"))}${link("communaute.html", t("communaute"))}${link("contacts.html", t("contacts"))}${link("favoris.html", t("favoris"))}</nav><button class="icon-btn" onclick="AgriApp.toggleTheme()">${t("theme")}</button><button class="btn install-btn" onclick="AgriApp.installApp()">${t("installerApp")}</button></div></div>${settings}</div>`;
}
function cookieBarHTML() {
  const t = (k) => AgriApp.t(k);
  if (document.cookie.includes("agri-cookie=")) return "";
  return `<div id="cookieBar" class="cookie-bar"><div class="wrap cookie-inner"><p>${t("cookieTexte")} <a href="cookies.html">${t("enSavoirPlus")}</a></p><div class="row"><button class="btn" onclick="AgriApp.acceptCookies()">${t("accepterCookies")}</button><button class="btn ghost" onclick="AgriApp.refuseCookies()">${t("refuserCookies")}</button></div></div></div>`;
}
function footerHTML() {
  const t = (k) => AgriApp.t(k);
  if (AgriApp.isApp()) return `<footer class="app-foot"><div class="wrap"><small>${t("anonyme")}</small></div></footer>` + cookieBarHTML();
  return `<footer class="web-foot"><div class="wrap"><p>${t("footer")}</p><p><small>${t("anonyme")} ${t("openSource")}</small></p><p><button class="btn" onclick="AgriApp.installApp()">${t("installerApp")}</button> <button class="btn ghost" onclick="AgriApp.setShell('app')">${t("ouvrirApp")}</button></p></div></footer>` + cookieBarHTML();
}
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); window.__agriDeferredPrompt = e; });
