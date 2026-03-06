// Nav scroll
      const nav = document.getElementById("nav");
      window.addEventListener(
        "scroll",
        () => nav.classList.toggle("scrolled", scrollY > 50),
        { passive: true },
      );

      // Mobile nav
      const nt = document.getElementById("nt"),
        nm = document.getElementById("nm");
      nt.addEventListener("click", () => {
        const o = nt.classList.toggle("o");
        nm.classList.toggle("o", o);
        document.body.style.overflow = o ? "hidden" : "";
      });
      nm.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          nt.classList.remove("o");
          nm.classList.remove("o");
          document.body.style.overflow = "";
        }),
      );

      // Scroll reveal
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("on");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.06 },
      );
      document.querySelectorAll(".rv").forEach((el) => io.observe(el));

      // Iframe responsive scale
      function scaleFrames() {
        document.querySelectorAll(".pcf").forEach((wrap) => {
          const iframe = wrap.querySelector("iframe");
          if (!iframe) return;
          const ww = wrap.getBoundingClientRect().width;
          const s = ww / 1280;
          iframe.style.transform = `scale(${s})`;
          iframe.style.transformOrigin = "top left";
          iframe.style.width = "1280px";
          iframe.style.height = "800px";
          wrap.style.height = Math.round(800 * s) + "px";
        });
      }
      // run on load + resize
      window.addEventListener("resize", scaleFrames, { passive: true });
      requestAnimationFrame(() => {
        scaleFrames();
      });
      document
        .querySelectorAll(".pcf iframe")
        .forEach((f) => f.addEventListener("load", scaleFrames));
