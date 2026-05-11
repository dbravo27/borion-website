// Before/After mockups for borionai.com — three improvement areas
// rendered as three side-by-side <DCArtboard> pairs on a design canvas.

const { DesignCanvas, DCSection, DCArtboard } = window;

// ─────────────────────────────────────────────────────────
// Reusable: animated particle field for the AFTER hero (right 40%)
function ParticleField() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let raf;
    const resize = () => {
      c.width = c.clientWidth;
      c.height = c.clientHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(c);
    const N = 60;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 0.6 + Math.random() * 1.6,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      // links
      ctx.lineWidth = 0.6;
      for (let i = 0; i < N; i++) {
        const p = particles[i];
        for (let j = i + 1; j < N; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14000) {
            const a = (1 - d2 / 14000) * 0.35;
            ctx.strokeStyle = `rgba(210, 204, 241, ${a})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      // dots
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grd.addColorStop(0, 'rgba(210, 204, 241, 0.9)');
        grd.addColorStop(1, 'rgba(25, 90, 221, 0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  return <canvas ref={ref} style={{ width: '100%', height: '100%', display: 'block' }} />;
}

// ─────────────────────────────────────────────────────────
// HERO — BEFORE
function HeroBefore() {
  return (
    <div className="b-frame hero-before">
      <span className="caption-tag before">Before</span>
      <div className="canvas-mock">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 18 }).map((_, i) => {
            const x1 = (i * 13 + 7) % 100;
            const y1 = (i * 19 + 3) % 100;
            const x2 = (i * 23 + 31) % 100;
            const y2 = (i * 17 + 41) % 100;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.5)" strokeWidth="0.15" />;
          })}
        </svg>
      </div>
      <div className="nav">
        <div className="lg">Borion ai</div>
        <ul>
          <li>About</li><li>Why Us</li><li>Services</li><li>Case Studies</li><li>Industries</li><li>Insights</li>
        </ul>
        <a className="nav-cta">Book a Call</a>
      </div>
      <div className="content">
        <div className="content-inner">
          <div className="badge-row">
            <span className="badge">⚡ AI THAT SHIPS</span>
            <span className="badge">★ 20+ DEPLOYED</span>
            <span className="badge">◆ 90 DAYS</span>
          </div>
          <h1>We Build AI Systems<br/>That <em>Actually Ship</em>.</h1>
          <p className="sub">From strategy to deployment in 90 days. Production-grade AI agents, machine learning systems, and intelligent operations — built by senior practitioners and battle-tested in real enterprise environments worldwide.</p>
          <div className="ctas">
            <a className="btn btn-1">Book a Call →</a>
            <a className="btn btn-2">See Case Studies</a>
            <a className="btn btn-3">Download Brief</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// HERO — AFTER
function HeroAfter() {
  return (
    <div className="b-frame hero-after">
      <span className="caption-tag after">After</span>
      <div className="grid-bg" />
      <div className="canvas-side">
        <ParticleField />
      </div>
      <div className="nav">
        <div className="lg">Borion<sup style={{fontSize:'10px', color:'#d2ccf1', marginLeft:'1px'}}>ai</sup></div>
        <ul>
          <li>Services</li><li>Case Studies</li><li>About</li>
        </ul>
        <a className="nav-cta">Book a Call</a>
      </div>
      <div className="content">
        <div className="content-inner">
          <span className="badge">Now booking Q3 engagements</span>
          <h1>AI That <span className="grad">Ships.</span></h1>
          <p className="sub">We deploy production AI agents in 60–90 days. You don't pay in full until it works.</p>
          <div className="ctas">
            <a className="btn btn-primary">Book a Call →</a>
            <a className="btn btn-ghost">See How We Work</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// PROOF BAR — BEFORE
function ProofBefore() {
  const stats = [
    ['25+', 'Projects Delivered'],
    ['90', 'Days to Production'],
    ['12+', 'Scientists on Bench'],
    ['7', 'Industries Served'],
  ];
  return (
    <div className="b-frame proof-before">
      <span className="caption-tag before">Before</span>
      <div className="row">
        {stats.map(([n, l]) => (
          <div className="col" key={l}>
            <div className="num">{n}</div>
            <div className="lbl">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// PROOF BAR — AFTER
function ProofAfter() {
  const stats = [
    ['25+', 'Projects Delivered'],
    ['90', 'Days to Production'],
    ['12+', 'Scientists on Bench'],
    ['7', 'Industries Served'],
  ];
  return (
    <div className="b-frame proof-after">
      <span className="caption-tag after">After</span>
      <div className="row">
        {stats.map(([n, l]) => (
          <div className="col" key={l}>
            <div className="num">{n}</div>
            <div className="lbl">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// PRICING — BEFORE
function PricingBefore() {
  const tiers = [
    { level: 'ENTRY', name: 'Readiness Audit', price: '$15K–$25K', term: '2 weeks', desc: 'Data maturity, use-case prioritization, go/no-go. Fixed fee. The door-opener.' },
    { level: 'FLAGSHIP', name: '90-Day AI Agent Sprint', price: '$90K–$175K', term: '8–12 weeks', desc: 'Contract to production. 25% signing, 25% prototype, 25% pilot, 25% production.' },
    { level: 'GROWTH', name: 'Department Transformation', price: '$220K–$400K', term: '12–20 weeks', desc: 'Complete AI overhaul of customer service, supply chain, or finance operations.' },
    { level: 'ENTERPRISE', name: 'Organization-Wide', price: '$700K–$2M+', term: '24–40+ weeks', desc: 'Full intelligent media op: social, training, content, CX, compliance, analytics.' },
  ];
  return (
    <div className="b-frame pricing-before">
      <span className="caption-tag before">Before</span>
      <div className="ph">
        <div className="ey">Pricing</div>
        <h2>Transparent. Milestone-Based.</h2>
      </div>
      <div className="grid">
        {tiers.map(t => (
          <div className="tier" key={t.level}>
            <div className="level">{t.level}</div>
            <h3>{t.name}</h3>
            <div className="price">{t.price}</div>
            <div className="term">/ {t.term}</div>
            <p>{t.desc}</p>
            <a className="cta">Get Started →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

// PRICING — AFTER
function PricingAfter() {
  const tiers = [
    { level: 'ENTRY', name: 'Readiness Audit', price: '$15K–$25K', term: '2 weeks', desc: 'Data maturity, use-case prioritization, go/no-go. Fixed fee.', flagship: false },
    { level: 'FLAGSHIP', name: '90-Day AI Agent Sprint', price: '$90K–$175K', term: '8–12 weeks', desc: 'Contract to production. 25% signing, 25% prototype, 25% pilot, 25% production.', flagship: true },
    { level: 'GROWTH', name: 'Department Transformation', price: '$220K–$400K', term: '12–20 weeks', desc: 'Complete AI overhaul of customer service, supply chain, or finance ops.', flagship: false },
    { level: 'ENTERPRISE', name: 'Organization-Wide', price: '$700K–$2M+', term: '24–40+ weeks', desc: 'Full intelligent media op: social, training, content, CX, compliance, analytics.', flagship: false },
  ];
  return (
    <div className="b-frame pricing-after">
      <span className="caption-tag after">After</span>
      <div className="ph">
        <div className="ey">Pricing</div>
        <h2>Transparent. Milestone-Based.</h2>
      </div>
      <div className="grid">
        {tiers.map(t => (
          <div className={'tier' + (t.flagship ? ' flagship' : '')} key={t.level}>
            {t.flagship && <span className="popular">Most Popular</span>}
            <div className="level">{t.level}</div>
            <h3>{t.name}</h3>
            <div className="price">{t.price}</div>
            <div className="term">/ {t.term}</div>
            <p>{t.desc}</p>
            <a className="cta">Get Started →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
function App() {
  // Sizes chosen so each section reads like a real strip from a 1920px-wide site
  const HERO_W = 1440, HERO_H = 720;
  const PROOF_W = 1440, PROOF_H = 280;
  const PRICING_W = 1700, PRICING_H = 720;

  return (
    <DesignCanvas>
      <DCSection
        id="hero"
        title="1 · Hero"
        subtitle="Right-side particle canvas at 40% opacity, dominant typography, single CTA"
      >
        <DCArtboard id="hero-before" label="Before · 1440×720" width={HERO_W} height={HERO_H}>
          <HeroBefore />
        </DCArtboard>
        <DCArtboard id="hero-after" label="After · 1440×720" width={HERO_W} height={HERO_H}>
          <HeroAfter />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="proof"
        title="2 · Proof Bar"
        subtitle="100–128px gradient numerals, secondary-navy strip, 280px height"
      >
        <DCArtboard id="proof-before" label="Before · 1440×280" width={PROOF_W} height={PROOF_H}>
          <ProofBefore />
        </DCArtboard>
        <DCArtboard id="proof-after" label="After · 1440×280" width={PROOF_W} height={PROOF_H}>
          <ProofAfter />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="pricing"
        title="3 · Pricing Tiers"
        subtitle="Flagship gets gradient border + popular pill + 1.04× scale; siblings stay quiet"
      >
        <DCArtboard id="pricing-before" label="Before · 1700×720" width={PRICING_W} height={PRICING_H}>
          <PricingBefore />
        </DCArtboard>
        <DCArtboard id="pricing-after" label="After · 1700×720" width={PRICING_W} height={PRICING_H}>
          <PricingAfter />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
