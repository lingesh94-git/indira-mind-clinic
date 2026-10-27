/* Indira Mind Clinic — Home page behaviour.
   Mobile menu, header dropdowns, the doctor photo,
   scroll reveal, and the two carousels. */

(function(){
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine   = window.matchMedia("(hover: hover) and (pointer: fine)");
  var wide   = window.matchMedia("(min-width: 881px)");

  /* ---------- mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");

  menuBtn.addEventListener("click", function(){
    var open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.addEventListener("click", function(e){
    var link = e.target.closest ? e.target.closest("a") : null;
    if (link && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open menu");
    }
  });

  /* ---------- dropdown menus ---------- */
  var drops = Array.prototype.slice.call(document.querySelectorAll("[data-drop]"));

  var closeAll = function(except){
    drops.forEach(function(d){
      if (d === except) return;
      d.classList.remove("is-open");
      d.querySelector(".nav__toggle").setAttribute("aria-expanded", "false");
    });
  };

  drops.forEach(function(d){
    var toggle = d.querySelector(".nav__toggle");

    toggle.addEventListener("click", function(){
      var open = !d.classList.contains("is-open");
      closeAll(d);
      d.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    /* on a desktop mouse, opening on hover feels quicker */
    d.addEventListener("mouseenter", function(){
      if (!fine.matches || !wide.matches) return;
      closeAll(d);
      d.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    });
    d.addEventListener("mouseleave", function(){
      if (!fine.matches || !wide.matches) return;
      d.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function(e){
    if (!e.target.closest || !e.target.closest("[data-drop]")) closeAll(null);
  });

  document.addEventListener("keydown", function(e){
    if (e.key !== "Escape") return;
    closeAll(null);
    if (nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.focus();
    }
  });

  /* ---------- doctor photo: fills every slot, only if the file exists ---------- */
  var slots = document.querySelectorAll("[data-photo]");
  var probe = new Image();
  probe.onload = function(){
    Array.prototype.forEach.call(slots, function(el){
      el.style.backgroundImage = 'url("assets/img/doctor.jpg")';
      el.classList.add("has-photo");
    });
  };
  probe.src = "assets/img/doctor.jpg";

  /* ---------- reveal on scroll ---------- */
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(items, function(el){ el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    Array.prototype.forEach.call(items, function(el){ io.observe(el); });
  }

  /* ---------- one carousel engine, used by the videos and the testimonials ---------- */
  function carousel(trackId, dotsId, prevId, nextId){
    var track = document.getElementById(trackId);
    var dots  = document.getElementById(dotsId);
    var prev  = document.getElementById(prevId);
    var next  = document.getElementById(nextId);
    if (!track || !dots || !prev || !next) return;

    var slides = track.children;
    var current = 0;

    var step = function(){
      var w = slides[0] ? slides[0].getBoundingClientRect().width : 1;
      var gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
      return w + gap;
    };

    /* how many slides are on screen at once, so the dots match what you see */
    var perView = function(){
      var w = slides[0] ? slides[0].getBoundingClientRect().width : 1;
      return Math.max(1, Math.round(track.clientWidth / w));
    };
    var pages = function(){ return Math.max(1, slides.length - perView() + 1); };

    var buildDots = function(){
      dots.textContent = "";
      for (var i = 0; i < pages(); i++) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Go to slide " + (i + 1));
        b.dataset.i = i;
        dots.appendChild(b);
      }
    };

    var sync = function(){
      var total = pages();
      current = Math.round(track.scrollLeft / step());
      if (current > total - 1) current = total - 1;
      if (current < 0) current = 0;

      Array.prototype.forEach.call(dots.children, function(d, i){
        d.setAttribute("aria-current", i === current ? "true" : "false");
      });
      prev.disabled = current <= 0;
      next.disabled = current >= total - 1;
    };

    var goTo = function(i){
      track.scrollTo({ left: i * step(), behavior: reduce ? "auto" : "smooth" });
    };

    prev.addEventListener("click", function(){ goTo(current - 1); });
    next.addEventListener("click", function(){ goTo(current + 1); });
    dots.addEventListener("click", function(e){
      if (e.target.dataset && e.target.dataset.i !== undefined) goTo(Number(e.target.dataset.i));
    });

    var ticking = false;
    track.addEventListener("scroll", function(){
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function(){ ticking = false; sync(); });
    }, { passive: true });

    window.addEventListener("resize", function(){ buildDots(); sync(); }, { passive: true });

    buildDots();
    sync();
  }

  carousel("vtrack", "vdots", "vprev", "vnext");
  carousel("track",  "dots",  "prev",  "next");
})();
