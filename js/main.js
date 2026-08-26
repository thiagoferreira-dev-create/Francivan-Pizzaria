document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  menuToggle?.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    body.classList.toggle("menu-open", open);
  });

  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
      body.classList.remove("menu-open");
    });
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Pizza builder demo
  const builder = document.querySelector("#pizza-builder");
  if (builder) {
    let size = { value: "Grande", price: 49.90 };
    let dough = "Tradicional";
    let flavors = ["Muçarela"];

    const money = value => value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    const update = () => {
      const total = size.price + (flavors.length > 1 ? 5 : 0);
      document.querySelector("#summary-size").textContent = size.value;
      document.querySelector("#summary-total").textContent = `A partir de ${money(total)}`;
      document.querySelector("#builder-total").textContent = money(total);

      const message = [
        "Olá Francivan! Quero montar uma pizza.",
        `Tamanho: ${size.value}`,
        `Massa: ${dough}`,
        `Sabores: ${flavors.join(" + ")}`,
        `Valor estimado: ${money(total)}`,
        "",
        "Pode me confirmar disponibilidade e valor final?"
      ].join("\n");

      document.querySelector("#builder-whatsapp").href =
        `https://wa.me/558594042423?text=${encodeURIComponent(message)}`;
    };

    builder.querySelectorAll('[data-group="size"] .choice').forEach(button => {
      button.addEventListener("click", () => {
        builder.querySelectorAll('[data-group="size"] .choice').forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        size = { value: button.dataset.value, price: Number(button.dataset.price) };
        update();
      });
    });

    builder.querySelectorAll('[data-group="dough"] .choice').forEach(button => {
      button.addEventListener("click", () => {
        builder.querySelectorAll('[data-group="dough"] .choice').forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        dough = button.dataset.value;
        update();
      });
    });

    builder.querySelectorAll('[data-group="flavors"] .flavor').forEach(button => {
      button.addEventListener("click", () => {
        const value = button.dataset.value;
        if (button.classList.contains("active")) {
          if (flavors.length === 1) return;
          button.classList.remove("active");
          flavors = flavors.filter(item => item !== value);
        } else {
          if (flavors.length >= 2) return;
          button.classList.add("active");
          flavors.push(value);
        }
        update();
      });
    });

    update();
  }

  document.querySelector("#year").textContent = new Date().getFullYear();
});
