import { useState, useEffect, useRef } from "react";
import claudeLogo from "./assets/claude.jpeg";
import anthropicLogo from "./assets/antropic.jpeg";

const PHOTO = "/mawuko_profile.png";
const NAV_LINKS = ["About","Skills","Experience","Projects","Events","Contact"];

const SKILLS = [
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg", title: "Frontend", tags: ["HTML","CSS","React"] },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/csharp.svg", title: "Backend", tags: ["C#",".NET","SQL"] },
  { icon: "https://avatars.githubusercontent.com/u/11881289", title: "Web3", tags: ["Blockchain","Avalanche"] },
  { icon: claudeLogo, title: "AI Tools", tags: ["Claude AI","Automation"] },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/slack.svg", title: "Community", tags: ["Leadership","Events"] },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/adobe.svg", title: "Media", tags: ["Video","Design"] },
];

const EXPERIENCE = [
  { company: "Avalanche Ghana", role: "Country Lead", date: "2022 – Present", desc: "Organizing meetups, workshops & onboarding sessions connecting students to Web3 in Ghana." },
  { company: "Blockchain Builders Club", role: "Event Lead", date: "2022 – Present", desc: "Leading student-focused events and education in tech and Web3." },
  { company: "Microsoft / Coursera", role: "Backend Program", date: "Self-Learning", desc: "Built a School Management System via Microsoft's backend program." },
];

const PROJECTS = [
  { icon: "🏠", badge: "⭐ Featured", badgeClass: "feat", title: "HomeFinder", desc: "PropTech platform for verified property discovery — reducing fraud in Ghana's real estate market, expanding across Africa.", tags: ["PropTech","Africa","Anti-Fraud"], link: null, linkLabel: "In Development" },
  { icon: "🏫", badge: "✓ Built", badgeClass: "green", title: "School Management System", desc: "Academic app with database integration via Microsoft's Coursera backend program.", tags: ["Backend","Database"], link: "https://github.com/wilkwame", linkLabel: "GitHub →" },
  { icon: "🤖", badge: "AI-Powered", badgeClass: "purple", title: "AI Workflows", desc: "Intelligent tools & automation using Anthropic's Claude as the primary AI platform.", tags: ["Claude AI","Anthropic"], link: "https://github.com/wilkwame", linkLabel: "Explore →" },
  { icon: "🌐", badge: "Web3", badgeClass: "blue", title: "Avalanche Ghana Hub", desc: "Community infrastructure — onboarding, education & events connecting Ghanaians to global Web3.", tags: ["Web3","Avalanche","Community"], link: "https://x.com/AvaxTeam1?s=20", linkLabel: "Follow →" },
];

const EVENTS = [
  { emoji: "🤝", bg: "#111", href: "https://RICHIE19.pixieset.com/avalancheworkshop/", title: "Community Meetups", desc: "Networking & learning for Ghana's blockchain community." },
  { emoji: "🎮", bg: "#1a0020", href: "https://RICHIE19.pixieset.com/avalanchegamenightarena233/", title: "Game Nights", desc: "Gaming meets blockchain education." },
  { emoji: "🛠️", bg: "#0a0a2e", href: "https://RICHIE19.pixieset.com/avalanchekonnect/", title: "Workshops (Konnect)", desc: "Hands-on Web3 & Avalanche sessions." },
];

const SOCIALS = [
  { icon: "💼", bg: "#e8f4ff", label: "LinkedIn", sub: "kwame-william", href: "https://www.linkedin.com/in/kwame-william" },
  { icon: "🐙", bg: "#f0f0f0", label: "GitHub", sub: "wilkwame", href: "https://github.com/wilkwame" },
  { icon: "𝕏", bg: "#f5f5f5", label: "X (Twitter)", sub: "@Web3WithMawuko", href: "https://x.com/Web3WithMawuko" },
  { icon: "🏗️", bg: "#fff0f3", label: "BB Club", sub: "@BB_CLUB_", href: "https://x.com/BB_CLUB_?s=20" },
  { icon: "🏔️", bg: "#fff0f0", label: "Avalanche", sub: "@AvaxTeam1", href: "https://x.com/AvaxTeam1?s=20" },
  { icon: "💬", bg: "#e8fef0", label: "WhatsApp", sub: "+233 54 140 3774", href: "https://wa.me/233541403774" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`
    }}>{children}</div>
  );
}

function SectionHeader({ label, title, light }) {
  return (
    <Reveal>
      <p style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#e8192c", marginBottom: ".3rem", fontFamily: "inherit" }}>{label}</p>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem,2.6vw,2.3rem)", fontWeight: 800, color: light ? "#fff" : "#111", lineHeight: 1.15, letterSpacing: "-.02em", marginBottom: ".65rem" }}>{title}</h2>
      <div style={{ width: 42, height: 4, background: "#e8192c", borderRadius: 2, marginBottom: "1.4rem" }} />
    </Reveal>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const badgeColors = {
    feat: { bg: "rgba(232,25,44,.1)", color: "#e8192c" },
    green: { bg: "rgba(16,185,129,.1)", color: "#059669" },
    purple: { bg: "rgba(99,102,241,.1)", color: "#4f46e5" },
    blue: { bg: "rgba(59,130,246,.1)", color: "#2563eb" },
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#444", background: "#faf9f7", lineHeight: 1.7, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes spin { to{transform:rotate(360deg)} }
        .hbg-line { display: block; width: 23px; height: 2px; background: #111; border-radius: 2px; transition: all .3s ease; }
        .sk-card:hover { background: rgba(232,25,44,.1) !important; border-color: #e8192c !important; transform: translateY(-4px); }
        .hc-card:hover { border-color: #e8192c !important; transform: translateY(-3px); box-shadow: 0 4px 24px rgba(0,0,0,.08); }
        .pc-card:hover { transform: translateY(-5px); box-shadow: 0 16px 48px rgba(0,0,0,.13); }
        .ev-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,.13); }
        .sc-card:hover { border-color: #e8192c !important; transform: translateY(-3px); box-shadow: 0 4px 24px rgba(0,0,0,.08); }
        .ac-card:hover { background: rgba(255,255,255,.1) !important; border-color: rgba(232,25,44,.4) !important; }
        .btn-r:hover { background: #b5101f !important; transform: translateY(-2px); box-shadow: 0 7px 18px rgba(232,25,44,.3); }
        .btn-o:hover { border-color: #e8192c !important; color: #e8192c !important; transform: translateY(-2px); }
        .btn-wa:hover { background: #1da851 !important; transform: translateY(-2px); box-shadow: 0 7px 18px rgba(37,211,102,.3); }
        .nav-link:hover { color: #e8192c !important; }
        .lb-r:hover { background: #b5101f !important; }
        .lb-g:hover { border-color: #e8192c !important; color: #e8192c !important; }
        .drawer-link:hover { color: #e8192c !important; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "15px 5vw",
        background: scrolled ? "rgba(250,249,247,.97)" : "rgba(250,249,247,.96)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid #e4e2df",
        transition: "box-shadow .3s",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,.07)" : "none"
      }}>
        <a href="#home" onClick={(e)=>{e.preventDefault();scrollTo("home")}} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#111" }}>
          M<span style={{ color: "#e8192c" }}>.</span>
        </a>
        <ul style={{ display: "flex", gap: "1.8rem", listStyle: "none" }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={e=>{e.preventDefault();scrollTo(l.toLowerCase())}} className="nav-link" style={{ fontSize: ".86rem", fontWeight: 500, color: "#444", transition: "color .2s" }}>{l}</a></li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="#contact" onClick={e=>{e.preventDefault();scrollTo("contact")}} style={{ background: "#e8192c", color: "#fff", padding: "8px 20px", borderRadius: 50, fontSize: ".83rem", fontWeight: 600, transition: "background .2s", whiteSpace: "nowrap" }} className="desktop-nav">Let's Connect</a>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", flexDirection: "column", gap: 5, cursor: "pointer", padding: 4, background: "none", border: "none", zIndex: 300 }} className="hbg" aria-label="Menu">
            <span className="hbg-line" style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span className="hbg-line" style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "none" }} />
            <span className="hbg-line" style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div style={{
        position: "fixed", inset: 0, background: "rgba(250,249,247,.98)", backdropFilter: "blur(20px)",
        zIndex: 150, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)", transition: "transform .35s ease"
      }}>
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={e=>{e.preventDefault();scrollTo(l.toLowerCase())}} className="drawer-link" style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.7rem", fontWeight: 800, color: "#111", transition: "color .2s" }}>{l}</a>
        ))}
        <a href="#contact" onClick={e=>{e.preventDefault();scrollTo("contact")}} style={{ background: "#e8192c", color: "#fff", padding: "13px 36px", borderRadius: 50, fontSize: "1.1rem", fontFamily: "'Syne',sans-serif", fontWeight: 800 }}>Let's Connect</a>
      </div>

      {/* HERO */}
      <section id="home" style={{
        minHeight: "100vh", padding: "128px 5vw 80px",
        display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "3.5rem",
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg,#fff5f5 0%,#faf9f7 55%,#fff0f0 100%)"
      }}>
        <div style={{ position: "absolute", width: 480, height: 480, borderRadius: "50%", opacity: .09, background: "radial-gradient(circle,#e8192c,transparent 70%)", top: -110, right: -90, animation: "float 9s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", opacity: .09, background: "radial-gradient(circle,#e8192c,transparent 70%)", bottom: 50, left: -70, animation: "float 11s ease-in-out infinite reverse", pointerEvents: "none" }} />
        
        <div style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(232,25,44,.08)", border: "1px solid rgba(232,25,44,.22)", color: "#e8192c", padding: "5px 14px", borderRadius: 50, fontSize: ".72rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              <span style={{ width: 7, height: 7, background: "#e8192c", borderRadius: "50%", animation: "pulse 2s infinite" }} />
              🇬🇭 Ghana · Web3 · AI · Developer
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 800, color: "#111", lineHeight: 1.08, letterSpacing: "-.03em", marginBottom: ".9rem" }}>
              Hi, I'm <span style={{ color: "#e8192c" }}>Mawuko</span>.<br/>Building Africa's<br/>Tech Future.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p style={{ fontSize: ".92rem", color: "#888", maxWidth: 400, marginBottom: "1.7rem", lineHeight: 1.65 }}>Avalanche Ghana Country Lead · BB Club Event Lead · Developer & Community Builder.</p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
              <a href="#projects" onClick={e=>{e.preventDefault();scrollTo("projects")}} className="btn-r" style={{ padding: "10px 22px", borderRadius: 50, fontWeight: 600, fontSize: ".86rem", background: "#e8192c", color: "#fff", display: "inline-flex", alignItems: "center", gap: 5, border: "2px solid transparent", transition: "all .2s" }}>View Projects →</a>
              <a href="https://wa.me/233541403774" target="_blank" className="btn-wa" style={{ padding: "10px 22px", borderRadius: 50, fontWeight: 600, fontSize: ".86rem", background: "#25D366", color: "#fff", display: "inline-flex", alignItems: "center", gap: 5, border: "2px solid transparent", transition: "all .2s" }}>💬 WhatsApp</a>
              <a href="#contact" onClick={e=>{e.preventDefault();scrollTo("contact")}} className="btn-o" style={{ padding: "10px 22px", borderRadius: 50, fontWeight: 600, fontSize: ".86rem", background: "transparent", color: "#111", border: "2px solid #e4e2df", display: "inline-flex", alignItems: "center", gap: 5, transition: "all .2s" }}>Let's Connect</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 330, height: 390 }}>
              <div style={{ position: "absolute", inset: "20px 0 0 20px", background: "linear-gradient(135deg,#e8192c,#b5101f)", borderRadius: 22 }} />
              <img src={PHOTO} alt="Mawuko" style={{ position: "relative", zIndex: 1, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderRadius: 18, border: "4px solid #fff", boxShadow: "0 16px 48px rgba(0,0,0,.13)", transform: "translate(-10px,-10px)", display: "block" }} />
              <div style={{ position: "absolute", bottom: 6, left: -16, zIndex: 2, background: "#fff", borderRadius: 16, padding: "11px 16px", boxShadow: "0 4px 24px rgba(0,0,0,.08)", display: "flex", gap: 16 }}>
                {[["3+","Yrs Web3"],["🇬🇭","Ghana Lead"],["∞","Impact"]].map(([n,l]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#e8192c", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: ".62rem", color: "#888", marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "76px 5vw", background: "#fff" }}>
        <SectionHeader label="About" title="Builder. Leader. Innovator." />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "3.5rem", alignItems: "start", marginTop: "1.6rem" }}>
          <Reveal delay={100}>
            <p style={{ marginBottom: ".8rem", lineHeight: 1.72, fontSize: ".9rem" }}>B.Tech ICT student at Ho Technical University, Ghana. Building tech solutions with 3+ years in Web3, AI, and community leadership.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "1rem" }}>
              {["JavaScript","HTML/CSS","Java","C# / .NET","Web3","Claude AI","Premiere Pro"].map(t => (
                <span key={t} style={{ background: "#f3f2f0", color: "#111", padding: "4px 12px", borderRadius: 50, fontSize: ".74rem", fontWeight: 500, border: "1px solid #e4e2df" }}>{t}</span>
              ))}
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".8rem" }}>
            {[["🎓","Ho Technical University","B.Tech ICT, Ghana"],["🏔️","Avalanche Ghana Lead","Country Lead"],["🏗️","BB Club Event Lead","Blockchain Builders Club"],["🎬","Node Eight","Video Editor Intern"]].map(([i,h,p],idx) => (
              <Reveal key={h} delay={idx*80}>
                <div className="hc-card" style={{ background: "#faf9f7", borderRadius: 16, padding: "1.1rem", border: "1px solid #e4e2df", transition: "border-color .2s, transform .2s" }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: ".35rem" }}>{i}</div>
                  <h4 style={{ fontFamily: "'Syne',sans-serif", fontSize: ".82rem", fontWeight: 700, color: "#111", marginBottom: ".15rem" }}>{h}</h4>
                  <p style={{ fontSize: ".72rem", color: "#888" }}>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "76px 5vw", background: "#111" }}>
        <SectionHeader label="Skills" title="What I Work With" light />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: ".85rem", marginTop: "1.7rem" }}>
          {SKILLS.map((s,i) => (
            <Reveal key={s.title} delay={i*60}>
              <div className="sk-card" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "1.1rem", transition: "background .2s, border-color .2s, transform .2s" }}>
                <div style={{ marginBottom: ".45rem" }}>
                  {typeof s.icon === 'string' && (s.icon.includes('/') || s.icon.includes('.') || s.icon.startsWith('http')) ? (
                    <img src={s.icon} alt={s.title} style={{ width: 32, height: 32, filter: s.icon.startsWith('http') ? "invert(1)" : "none", objectFit: "contain" }} />
                  ) : (
                    <div style={{ fontSize: "1.3rem" }}>{s.icon}</div>
                  )}
                </div>
                <h4 style={{ fontFamily: "'Syne',sans-serif", fontSize: ".82rem", fontWeight: 700, color: "#fff", marginBottom: ".35rem" }}>{s.title}</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                  {s.tags.map(t => <span key={t} style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.6)", padding: "2px 8px", borderRadius: 50, fontSize: ".65rem" }}>{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "76px 5vw", background: "#faf9f7" }}>
        <SectionHeader label="Experience" title="My Journey" />
        <div style={{ borderLeft: "2px solid #e4e2df", paddingLeft: "1.7rem", display: "flex", flexDirection: "column", gap: "1.8rem", marginTop: "1.7rem" }}>
          {EXPERIENCE.map((e,i) => (
            <Reveal key={e.company} delay={i*80}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "-2.35rem", top: 5, width: 11, height: 11, borderRadius: "50%", background: "#e8192c", border: "3px solid #faf9f7", boxShadow: "0 0 0 2px #e8192c" }} />
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: ".3rem" }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontSize: ".88rem", fontWeight: 700, color: "#111" }}>{e.company}</span>
                  <span style={{ fontSize: ".73rem", color: "#e8192c", fontWeight: 600, background: "rgba(232,25,44,.08)", padding: "2px 9px", borderRadius: 50 }}>{e.role}</span>
                  <span style={{ fontSize: ".7rem", color: "#888" }}>{e.date}</span>
                </div>
                <p style={{ fontSize: ".85rem", color: "#444", lineHeight: 1.6 }}>{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "76px 5vw", background: "#fff" }}>
        <SectionHeader label="Projects" title="Built & Envisioned" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1.1rem", marginTop: "1.7rem" }}>
          {PROJECTS.map((p,i) => (
            <Reveal key={p.title} delay={i*80}>
              <div className="pc-card" style={{ background: p.badgeClass === "feat" ? "linear-gradient(135deg,#fff5f5,#fff)" : "#faf9f7", borderRadius: 16, padding: "1.4rem", border: p.badgeClass === "feat" ? "1px solid #e8192c" : "1px solid #e4e2df", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s", height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".75rem" }}>
                  <span style={{ fontSize: "1.6rem" }}>{p.icon}</span>
                  <span style={{ fontSize: ".65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", padding: "3px 9px", borderRadius: 50, ...badgeColors[p.badgeClass] }}>{p.badge}</span>
                </div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: ".95rem", fontWeight: 700, color: "#111", marginBottom: ".35rem" }}>{p.title}</h3>
                <p style={{ fontSize: ".8rem", color: "#888", lineHeight: 1.55, flexGrow: 1, marginBottom: ".85rem" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: ".85rem" }}>
                  {p.tags.map(t => <span key={t} style={{ background: "#f3f2f0", padding: "3px 8px", borderRadius: 50, fontSize: ".65rem", color: "#444" }}>{t}</span>)}
                </div>
                {p.link
                  ? <a href={p.link} target="_blank" className="lb-r" style={{ padding: "6px 14px", borderRadius: 50, fontSize: ".75rem", fontWeight: 600, background: "#e8192c", color: "#fff", display: "inline-flex", alignItems: "center", gap: 4, transition: "all .2s", width: "fit-content" }}>{p.linkLabel}</a>
                  : <span style={{ padding: "6px 14px", borderRadius: 50, fontSize: ".75rem", fontWeight: 600, background: "#e8192c", color: "#fff", display: "inline-flex", alignItems: "center", width: "fit-content" }}>{p.linkLabel}</span>
                }
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENT GALLERY */}
      <section style={{ padding: "76px 5vw", background: "#faf9f7" }}>
        <SectionHeader label="Gallery" title="Event Highlights" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "1rem", marginTop: "1.7rem" }}>
          {EVENTS.map((e,i) => (
            <Reveal key={e.title} delay={i*100}>
              <a href={e.href} target="_blank" className="ev-card" style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #e4e2df", color: "inherit", transition: "transform .2s, box-shadow .2s", display: "block" }}>
                <div style={{ height: 110, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.8rem", background: `linear-gradient(135deg, ${e.bg}, ${e.bg}dd)` }}>{e.emoji}</div>
                <div style={{ padding: ".9rem 1.1rem" }}>
                  <h4 style={{ fontFamily: "'Syne',sans-serif", fontSize: ".88rem", fontWeight: 700, color: "#111", marginBottom: ".2rem" }}>{e.title}</h4>
                  <p style={{ fontSize: ".74rem", color: "#888", marginBottom: ".5rem", lineHeight: 1.45 }}>{e.desc}</p>
                  <span style={{ fontSize: ".74rem", fontWeight: 600, color: "#e8192c" }}>View Gallery →</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LUMA EVENTS */}
      <section id="events" style={{ padding: "76px 5vw", background: "#fff" }}>
        <SectionHeader label="Live Events" title="Upcoming Events" />
        <Reveal delay={100}>
          <p style={{ color: "#888", fontSize: ".83rem", marginBottom: "1.4rem" }}>Live from my Luma calendar — updated automatically.</p>
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e4e2df", boxShadow: "0 4px 24px rgba(0,0,0,.08)" }}>
            <iframe src="https://lu.ma/embed/calendar/cal-Mawuko_K/events" frameBorder="0" allowFullScreen style={{ width: "100%", minHeight: 480, border: "none", display: "block" }} />
          </div>
        </Reveal>
      </section>

      {/* AI */}
      <section style={{ padding: "76px 5vw", background: "#111" }}>
        <SectionHeader label="AI & Innovation" title="Powered by Intelligent Tools" light />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginTop: "1.4rem" }}>
          <Reveal delay={100}>
            <p style={{ color: "rgba(255,255,255,.62)", lineHeight: 1.7, marginBottom: ".75rem", fontSize: ".88rem" }}>Using AI-powered tools and automation to solve real problems for African communities. Claude AI is my primary platform for intelligent workflow development.</p>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
            {[[anthropicLogo,"ant","Anthropic","Building reliable AI for humanity"],[claudeLogo,"cl","Claude AI","My primary AI platform"]].map(([icon,cls,name,sub],i) => (
              <Reveal key={name} delay={i*120}>
                <div className="ac-card" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "1.1rem 1.4rem", display: "flex", alignItems: "center", gap: ".9rem", transition: "background .2s, border-color .2s" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
                    <img src={icon} alt={name} style={{ width: 32, height: 32, objectFit: "contain" }} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Syne',sans-serif", fontSize: ".88rem", fontWeight: 700, color: "#fff", marginBottom: ".12rem" }}>{name}</h4>
                    <p style={{ fontSize: ".73rem", color: "rgba(255,255,255,.45)" }}>{sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section style={{ padding: "76px 5vw", background: "#faf9f7" }}>
        <SectionHeader label="Connect" title="Find Me Online" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(145px,1fr))", gap: ".85rem", marginTop: "1.7rem" }}>
          {SOCIALS.map((s,i) => (
            <Reveal key={s.label} delay={i*60}>
              <a href={s.href} target="_blank" className="sc-card" style={{ background: "#fff", borderRadius: 16, padding: "1.1rem", textAlign: "center", border: "1px solid #e4e2df", transition: "border-color .2s, transform .2s, box-shadow .2s", display: "flex", flexDirection: "column", alignItems: "center", gap: ".55rem" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", background: s.bg }}>{s.icon}</div>
                <h4 style={{ fontFamily: "'Syne',sans-serif", fontSize: ".79rem", fontWeight: 700, color: "#111" }}>{s.label}</h4>
                <p style={{ fontSize: ".66rem", color: "#888" }}>{s.sub}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "76px 5vw", background: "#111", textAlign: "center" }}>
        <Reveal><div style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#e8192c", marginBottom: ".3rem" }}>Contact</div></Reveal>
        <Reveal delay={80}><h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.6rem,2.6vw,2.3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, letterSpacing: "-.02em", marginBottom: ".65rem" }}>Let's Build Together</h2></Reveal>
        <Reveal delay={120}><div style={{ width: 42, height: 4, background: "#e8192c", borderRadius: 2, margin: ".5rem auto .9rem" }} /></Reveal>
        <Reveal delay={160}><p style={{ color: "rgba(255,255,255,.48)", fontSize: ".87rem", maxWidth: 420, margin: ".55rem auto 1.7rem" }}>Open to collabs, Web3 projects, fellowships & African tech conversations.</p></Reveal>
        <Reveal delay={200}>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <a href="https://wa.me/233541403774" target="_blank" className="btn-wa" style={{ padding: "10px 22px", borderRadius: 50, fontWeight: 600, fontSize: ".86rem", background: "#25D366", color: "#fff", display: "inline-flex", alignItems: "center", gap: 5, border: "2px solid transparent", transition: "all .2s" }}>💬 WhatsApp</a>
            <a href="https://x.com/Web3WithMawuko" target="_blank" className="btn-r" style={{ padding: "10px 22px", borderRadius: 50, fontWeight: 600, fontSize: ".86rem", background: "#e8192c", color: "#fff", display: "inline-flex", alignItems: "center", gap: 5, border: "2px solid transparent", transition: "all .2s" }}>Message on X →</a>
            <a href="https://www.linkedin.com/in/kwame-william" target="_blank" className="btn-o" style={{ padding: "10px 22px", borderRadius: 50, fontWeight: 600, fontSize: ".86rem", background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.3)", display: "inline-flex", alignItems: "center", gap: 5, transition: "all .2s" }}>LinkedIn</a>
          </div>
        </Reveal>
        <Reveal delay={260}><div style={{ marginTop: "1.8rem", color: "rgba(255,255,255,.22)", fontSize: ".73rem" }}>Ho Technical University · Ghana 🇬🇭 · Open to Global Opportunities</div></Reveal>
      </section>

      <footer style={{ background: "#0a0a0a", color: "rgba(255,255,255,.22)", textAlign: "center", padding: "18px 5vw", fontSize: ".73rem" }}>
        <p>Built with ❤️ by <span style={{ color: "#e8192c" }}>Mawuko</span> · Ghana's Web3 & AI Builder · © 2026</p>
      </footer>

      <style>{`
        @media(max-width:880px){
          .desktop-nav{display:none!important}
          .hbg{display:flex!important}
        }
      `}</style>
    </div>
  );
}
