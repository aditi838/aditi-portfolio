import { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { name: "About",     id: "about"     },
  { name: "Projects",  id: "projects"  },
  { name: "Skills",    id: "skills"    },
  { name: "Education", id: "education" },
  { name: "Contact",   id: "contact"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let cur = "";
      LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span className="logo-brace">{"{ "}</span>aditi<span className="logo-brace">{" }"}</span>
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map(({ name, id }) => (
          <button key={id} onClick={() => scrollTo(id)} className={active === id ? "active" : ""}>
            {name}
          </button>
        ))}
      </div>

      <a
        href="https://www.linkedin.com/in/aditisharma248"
        target="_blank"
        rel="noreferrer"
        className="nav-cta"
      >
        Let's Connect
      </a>

      <button className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
