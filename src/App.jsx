import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { SLIDES, SECTIONS } from "./slides-content";

// ═══════════════════════════════════════════════════════════
// UTILITY: Detect reduced motion preference
// ═══════════════════════════════════════════════════════════
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ═══════════════════════════════════════════════════════════
// UTILITY: Count-up animation for metrics
// ═══════════════════════════════════════════════════════════
function CountUp({ target, suffix = "", duration = 800, active, reduced }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) { setValue(0); return; }
    if (reduced) { setValue(target); return; }
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration, reduced]);
  return <>{value}{suffix}</>;
}

// ═══════════════════════════════════════════════════════════
// UTILITY: Gold underline draw animation
// ═══════════════════════════════════════════════════════════
function GoldUnderline({ active, reduced }) {
  return (
    <span
      className="gold-underline"
      style={{
        display: "block",
        height: "3px",
        background: "var(--accent-brand)",
        marginTop: "8px",
        borderRadius: "2px",
        transformOrigin: "left",
        transform: active ? "scaleX(1)" : "scaleX(0)",
        transition: reduced ? "none" : "transform var(--motion-emphasis) var(--easing-expressive)",
        transitionDelay: reduced ? "0ms" : "200ms",
      }}
    />
  );
}

// ═══════════════════════════════════════════════════════════
// UTILITY: Staggered entrance wrapper
// ═══════════════════════════════════════════════════════════
function Entrance({ active, delay = 0, reduced, children, className = "" }) {
  return (
    <div
      className={className}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(16px)",
        transition: reduced
          ? "opacity 60ms"
          : `opacity var(--motion-enter) var(--easing-standard), transform var(--motion-enter) var(--easing-standard)`,
        transitionDelay: reduced ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Hero (Slides 1, 26)
// ═══════════════════════════════════════════════════════════
function HeroScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-hero" data-surface="dark">
      <div className="hero-bg" />
      <div className="scene-content hero-content">
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-display text-inverse">{slide.headline}</h1>
          {slide.headline !== "Let's Talk" && (
            <GoldUnderline active={active} reduced={reduced} />
          )}
        </Entrance>
        {slide.subtitle && (
          <Entrance active={active} delay={120} reduced={reduced}>
            <p className="type-subheadline text-inverse-muted" style={{ marginTop: "24px" }}>
              {slide.subtitle}
            </p>
          </Entrance>
        )}
        {slide.byline && (
          <Entrance active={active} delay={200} reduced={reduced}>
            <p className="type-body text-inverse-muted" style={{ marginTop: "16px", opacity: 0.6 }}>
              {slide.byline}
            </p>
          </Entrance>
        )}
        {slide.body && (
          <Entrance active={active} delay={180} reduced={reduced}>
            <div style={{ marginTop: "32px" }}>
              {slide.body.map((line, i) => (
                <p key={i} className="type-body text-inverse-muted" style={{ marginBottom: "8px" }}>
                  {line}
                </p>
              ))}
            </div>
          </Entrance>
        )}
        {slide.cta && (
          <Entrance active={active} delay={300} reduced={reduced}>
            <p className="type-subheadline" style={{ marginTop: "32px", color: "var(--accent-brand)" }}>
              {slide.cta}
            </p>
          </Entrance>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Section Divider (Slides 4, 10, 13, 15)
// ═══════════════════════════════════════════════════════════
function SectionDividerScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-section-divider" data-surface="dark">
      <div className="hero-bg" />
      <div className="scene-content" style={{ maxWidth: "900px" }}>
        {slide.sectionLabel && (
          <Entrance active={active} delay={0} reduced={reduced}>
            <span className="type-label section-label-inline">{slide.sectionLabel}</span>
          </Entrance>
        )}
        <Entrance active={active} delay={80} reduced={reduced}>
          <h1 className="type-display text-inverse" style={{ fontSize: "clamp(40px, 4.5vw, 64px)" }}>
            {slide.headline}
          </h1>
          <GoldUnderline active={active} reduced={reduced} />
        </Entrance>
        {slide.body && (
          <Entrance active={active} delay={200} reduced={reduced}>
            <div style={{ marginTop: "32px" }}>
              {slide.body.map((line, i) => (
                <p key={i} className="type-body text-inverse-muted" style={{ marginBottom: "12px" }}>
                  {line}
                </p>
              ))}
            </div>
          </Entrance>
        )}
        {slide.emphasis && (
          <Entrance active={active} delay={320} reduced={reduced}>
            <p className="type-subheadline" style={{ marginTop: "24px", color: "var(--accent-brand)" }}>
              {slide.emphasis}
            </p>
          </Entrance>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Thesis (Slides 2, 5, 9, 16, 24, 25)
// ═══════════════════════════════════════════════════════════
function ThesisScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-thesis" data-surface="light">
      <div className="scene-content" style={{ maxWidth: "900px" }}>
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-headline">{slide.headline}</h1>
        </Entrance>
        {slide.body && slide.body.length > 0 && (
          <Entrance active={active} delay={100} reduced={reduced}>
            <div style={{ marginTop: "32px" }}>
              {slide.body.map((line, i) => (
                <p key={i} className="type-body text-secondary" style={{ marginBottom: "16px" }}>
                  {line}
                </p>
              ))}
            </div>
          </Entrance>
        )}
        {slide.emphasis && (
          <Entrance active={active} delay={220} reduced={reduced}>
            <p className="type-subheadline emphasis-text" style={{ marginTop: "24px" }}>
              {slide.emphasis}
            </p>
            <GoldUnderline active={active} reduced={reduced} />
          </Entrance>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Thesis with Example (Slides 6, 7, 8, 11, 12, 18)
// ═══════════════════════════════════════════════════════════
function ThesisWithExampleScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-thesis" data-surface="light">
      <div className="scene-content" style={{ maxWidth: "1000px" }}>
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-headline">{slide.headline}</h1>
        </Entrance>
        {slide.body && slide.body.length > 0 && (
          <Entrance active={active} delay={100} reduced={reduced}>
            <div style={{ marginTop: "24px" }}>
              {slide.body.map((line, i) => (
                <p key={i} className="type-body text-secondary" style={{ marginBottom: "12px" }}>
                  {line}
                </p>
              ))}
            </div>
          </Entrance>
        )}
        {slide.emphasis && (
          <Entrance active={active} delay={180} reduced={reduced}>
            <p className="type-subheadline emphasis-text" style={{ marginTop: "20px" }}>
              {slide.emphasis}
            </p>
            <GoldUnderline active={active} reduced={reduced} />
          </Entrance>
        )}
        {slide.example && (
          <Entrance active={active} delay={300} reduced={reduced}>
            <div className="example-box">
              <span className="type-label" style={{ color: "var(--accent-brand)", marginBottom: "8px", display: "block" }}>
                {slide.example.title}
              </span>
              <p className="type-body" style={{ color: "var(--text-secondary)" }}>
                {slide.example.body}
              </p>
              {slide.example.metric && (
                <span className="type-metric" style={{ color: "var(--accent-brand)", fontSize: "clamp(32px, 4vw, 56px)", marginTop: "12px", display: "block" }}>
                  {slide.example.metric}
                </span>
              )}
            </div>
          </Entrance>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Thesis with Metric (Slide 17)
// ═══════════════════════════════════════════════════════════
function ThesisWithMetricScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-thesis" data-surface="light">
      <div className="scene-content" style={{ maxWidth: "1000px" }}>
        <div className="thesis-metric-grid">
          <div>
            <Entrance active={active} delay={0} reduced={reduced}>
              <h1 className="type-headline">{slide.headline}</h1>
            </Entrance>
            {slide.body && (
              <Entrance active={active} delay={120} reduced={reduced}>
                <div style={{ marginTop: "24px" }}>
                  {slide.body.map((line, i) => (
                    <p key={i} className="type-body text-secondary" style={{ marginBottom: "12px" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </Entrance>
            )}
            {slide.emphasis && (
              <Entrance active={active} delay={280} reduced={reduced}>
                <p className="type-subheadline emphasis-text" style={{ marginTop: "20px" }}>
                  {slide.emphasis}
                </p>
                <GoldUnderline active={active} reduced={reduced} />
              </Entrance>
            )}
          </div>
          {slide.metric && (
            <Entrance active={active} delay={200} reduced={reduced} className="metric-callout-box">
              <span className="type-metric" style={{ color: "var(--accent-brand)" }}>
                <CountUp target={slide.metric.value} suffix={slide.metric.suffix} active={active} reduced={reduced} />
              </span>
              <span className="type-caption text-secondary" style={{ display: "block", marginTop: "8px" }}>
                {slide.metric.label}
              </span>
            </Entrance>
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Process (Slides 3, 14)
// ═══════════════════════════════════════════════════════════
function ProcessScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-process" data-surface="light">
      <div className="scene-content" style={{ maxWidth: "1100px" }}>
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-headline" style={{ textAlign: "center", marginBottom: "48px" }}>
            {slide.headline}
          </h1>
        </Entrance>
        <div className="process-row">
          {slide.processSteps.map((step, i) => (
            <Entrance key={i} active={active} delay={150 + i * 80} reduced={reduced} className="process-step">
              <span className="process-number">{step.number}</span>
              <span className="type-subheadline" style={{ marginTop: "12px", display: "block" }}>
                {step.label}
              </span>
              <span className="type-caption text-secondary" style={{ marginTop: "6px", display: "block" }}>
                {step.description}
              </span>
              {i < slide.processSteps.length - 1 && <span className="process-connector" />}
            </Entrance>
          ))}
        </div>
        {slide.emphasis && (
          <Entrance active={active} delay={550} reduced={reduced}>
            <p className="type-subheadline emphasis-text" style={{ textAlign: "center", marginTop: "48px" }}>
              {slide.emphasis}
            </p>
            <div style={{ maxWidth: "300px", margin: "0 auto" }}>
              <GoldUnderline active={active} reduced={reduced} />
            </div>
          </Entrance>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Comparison (Slide 22)
// ═══════════════════════════════════════════════════════════
function ComparisonScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-comparison" data-surface="light">
      <div className="scene-content" style={{ maxWidth: "1100px" }}>
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-headline" style={{ marginBottom: "40px" }}>{slide.headline}</h1>
        </Entrance>
        <div className="comparison-grid">
          {slide.columns.map((col, ci) => (
            <Entrance key={ci} active={active} delay={150 + ci * 120} reduced={reduced} className="comparison-col">
              <h3 className="type-subheadline" style={{ marginBottom: "20px", color: ci === 0 ? "var(--text-primary)" : "var(--accent-secondary)" }}>
                {col.header}
              </h3>
              {col.items.map((item, ii) => (
                <p key={ii} className="type-body comparison-item">{item}</p>
              ))}
            </Entrance>
          ))}
        </div>
        {slide.emphasis && (
          <Entrance active={active} delay={450} reduced={reduced}>
            <p className="type-subheadline emphasis-text" style={{ textAlign: "center", marginTop: "40px" }}>
              {slide.emphasis}
            </p>
            <div style={{ maxWidth: "320px", margin: "0 auto" }}>
              <GoldUnderline active={active} reduced={reduced} />
            </div>
          </Entrance>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Table (Slide 19)
// ═══════════════════════════════════════════════════════════
function TableScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-table" data-surface="light">
      <div className="scene-content" style={{ maxWidth: "1000px" }}>
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-headline" style={{ marginBottom: "36px" }}>{slide.headline}</h1>
        </Entrance>
        <Entrance active={active} delay={150} reduced={reduced}>
          <div className="cohort-table">
            <div className="table-header">
              <span>Company</span>
              <span>Target Market</span>
            </div>
            {slide.tableData.map((row, i) => (
              <div key={i} className={`table-row ${i % 2 === 1 ? "table-row-alt" : ""}`}>
                <span className="table-company">
                  <span
                    className="program-dot"
                    style={{ background: row.program === "horizon" ? "var(--horizon-accent)" : "var(--pivot-accent)" }}
                  />
                  {row.company}
                </span>
                <span className="type-body text-secondary">{row.target}</span>
              </div>
            ))}
          </div>
        </Entrance>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Card Grid (Slides 20, 21)
// ═══════════════════════════════════════════════════════════
function CardGridScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-cards" data-surface="light">
      <div className="scene-content" style={{ maxWidth: "1100px" }}>
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-headline">{slide.headline}</h1>
          {slide.subtitle && (
            <span className="type-label" style={{ color: slide.cards[0]?.program === "horizon" ? "var(--horizon-accent)" : "var(--pivot-accent)", marginTop: "8px", display: "block" }}>
              {slide.subtitle}
            </span>
          )}
        </Entrance>
        <div className="card-grid" style={{ marginTop: "32px" }}>
          {slide.cards.map((card, i) => (
            <Entrance key={i} active={active} delay={150 + i * 60} reduced={reduced}>
              <div
                className="play-card"
                style={{ borderLeftColor: card.program === "horizon" ? "var(--horizon-accent)" : "var(--pivot-accent)" }}
              >
                <span className="type-label" style={{ color: "var(--text-secondary)" }}>{card.company}</span>
                <span className="type-body" style={{ fontWeight: 600, color: "var(--accent-brand)", marginTop: "4px", display: "block" }}>
                  {card.play}
                </span>
                <p className="type-caption text-secondary" style={{ marginTop: "8px" }}>
                  {card.description}
                </p>
              </div>
            </Entrance>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE TEMPLATE: Action Summary (Slide 23)
// ═══════════════════════════════════════════════════════════
function ActionSummaryScene({ slide, active, reduced }) {
  return (
    <div className="scene scene-action" data-surface="dark">
      <div className="hero-bg" />
      <div className="scene-content" style={{ maxWidth: "900px" }}>
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-headline text-inverse">{slide.headline}</h1>
        </Entrance>
        <div style={{ marginTop: "40px" }}>
          {slide.actions.map((action, i) => (
            <Entrance key={i} active={active} delay={150 + i * 100} reduced={reduced}>
              <div className="action-item">
                <span className="action-number">{action.number}</span>
                <div>
                  <p className="type-subheadline text-inverse" style={{ marginBottom: "6px" }}>
                    {action.title}
                  </p>
                  <p className="type-body text-inverse-muted">{action.description}</p>
                </div>
              </div>
            </Entrance>
          ))}
        </div>
        {slide.cta && (
          <Entrance active={active} delay={550} reduced={reduced}>
            <p className="type-subheadline" style={{ color: "var(--accent-brand)", marginTop: "40px" }}>
              {slide.cta}
            </p>
          </Entrance>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCENE ROUTER: Maps slide.layout to the correct template
// ═══════════════════════════════════════════════════════════
function SceneRouter({ slide, active, reduced }) {
  const props = { slide, active, reduced };
  switch (slide.layout) {
    case "hero": return <HeroScene {...props} />;
    case "section-divider": return <SectionDividerScene {...props} />;
    case "thesis": return <ThesisScene {...props} />;
    case "thesis-with-example": return <ThesisWithExampleScene {...props} />;
    case "thesis-with-metric": return <ThesisWithMetricScene {...props} />;
    case "process": return <ProcessScene {...props} />;
    case "comparison": return <ComparisonScene {...props} />;
    case "table": return <TableScene {...props} />;
    case "card-grid": return <CardGridScene {...props} />;
    case "action-summary": return <ActionSummaryScene {...props} />;
    default: return <ThesisScene {...props} />;
  }
}

// ═══════════════════════════════════════════════════════════
// PRESENTER NOTES PANEL
// ═══════════════════════════════════════════════════════════
function PresenterPanel({ slide, elapsed, nextTitle, onClose }) {
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  return (
    <div className="presenter-panel">
      <div className="presenter-panel-header">
        <span className="type-label">Presenter Notes</span>
        <button onClick={onClose} className="presenter-close" aria-label="Close notes">✕</button>
      </div>
      <div className="presenter-timer">
        {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
      </div>
      <div className="presenter-notes-body type-caption">
        {slide.presenterNotes || "No notes for this slide."}
      </div>
      {nextTitle && (
        <div className="presenter-next">
          <span className="type-label" style={{ opacity: 0.5 }}>Next →</span>
          <span className="type-caption">{nextTitle}</span>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDE GRID OVERVIEW
// ═══════════════════════════════════════════════════════════
function SlideGrid({ currentIndex, onJump, onClose }) {
  return (
    <div className="grid-overlay" onClick={onClose}>
      <div className="grid-container" onClick={(e) => e.stopPropagation()}>
        <div className="grid-header">
          <span className="type-subheadline">Slide Overview</span>
          <button onClick={onClose} className="presenter-close" aria-label="Close grid">✕</button>
        </div>
        <div className="grid-body">
          {SECTIONS.map((section) => (
            <div key={section.id} className="grid-section">
              <span className="type-label grid-section-label">{section.label}</span>
              <div className="grid-thumbnails">
                {SLIDES.filter((s) => s.id >= section.range[0] && s.id <= section.range[1]).map((slide) => (
                  <button
                    key={slide.id}
                    className={`grid-thumb ${slide.id - 1 === currentIndex ? "grid-thumb-active" : ""}`}
                    onClick={() => { onJump(slide.id - 1); onClose(); }}
                    data-surface={slide.surface}
                  >
                    <span className="grid-thumb-num">{slide.id}</span>
                    <span className="grid-thumb-title">{slide.title}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [started, setStarted] = useState(false);
  const [sceneActive, setSceneActive] = useState(true);
  const reduced = usePrefersReducedMotion();

  // Elapsed timer
  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(interval);
  }, [started]);

  // Hash-based deep linking
  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/#\/slide\/(\d+)/);
    if (match) {
      const idx = parseInt(match[1], 10) - 1;
      if (idx >= 0 && idx < SLIDES.length) setCurrentIndex(idx);
    }
  }, []);

  useEffect(() => {
    window.location.hash = `#/slide/${currentIndex + 1}`;
  }, [currentIndex]);

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= SLIDES.length) return;
    if (!started) setStarted(true);
    setSceneActive(false);
    setTimeout(() => {
      setCurrentIndex(idx);
      setSceneActive(true);
    }, reduced ? 30 : 120);
  }, [started, reduced]);

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (showGrid && e.key === "Escape") { setShowGrid(false); return; }
      if (showNotes && e.key === "Escape") { setShowNotes(false); return; }
      switch (e.key) {
        case "ArrowRight": case " ": e.preventDefault(); next(); break;
        case "ArrowLeft": e.preventDefault(); prev(); break;
        case "n": case "N": setShowNotes((s) => !s); break;
        case "g": case "G": setShowGrid((s) => !s); break;
        default: break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, showGrid, showNotes]);

  // Click navigation
  const handleClick = useCallback((e) => {
    if (showGrid || showNotes) return;
    if (e.target.closest("button, a, .presenter-panel")) return;
    const x = e.clientX / window.innerWidth;
    if (x > 0.4) next(); else prev();
  }, [next, prev, showGrid, showNotes]);

  const currentSlide = SLIDES[currentIndex];
  const currentSection = SECTIONS.find(
    (s) => currentSlide.id >= s.range[0] && currentSlide.id <= s.range[1]
  );
  const nextSlide = SLIDES[currentIndex + 1];
  const progress = ((currentIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="deck-shell" onClick={handleClick}>
      {/* Current scene */}
      <div
        className="scene-wrapper"
        style={{
          opacity: sceneActive ? 1 : 0,
          transition: reduced ? "opacity 30ms" : "opacity 120ms var(--easing-standard)",
        }}
      >
        <SceneRouter slide={currentSlide} active={sceneActive} reduced={reduced} />
      </div>

      {/* Section label — top left */}
      {currentIndex > 0 && currentSection && (
        <div
          className="chrome-section-label type-label"
          style={{ color: currentSlide.surface === "dark" ? "rgba(255,255,255,0.4)" : "var(--text-secondary)" }}
        >
          {currentSection.label.toUpperCase()}
        </div>
      )}

      {/* Slide counter — bottom right */}
      <div
        className="chrome-counter type-caption"
        style={{ color: currentSlide.surface === "dark" ? "rgba(255,255,255,0.3)" : "var(--text-secondary)", opacity: 0.6 }}
      >
        {currentIndex + 1} / {SLIDES.length}
      </div>

      {/* Progress bar — bottom */}
      <div className="chrome-progress">
        <div className="chrome-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Presenter notes panel */}
      {showNotes && (
        <PresenterPanel
          slide={currentSlide}
          elapsed={elapsed}
          nextTitle={nextSlide?.title}
          onClose={() => setShowNotes(false)}
        />
      )}

      {/* Slide grid */}
      {showGrid && (
        <SlideGrid
          currentIndex={currentIndex}
          onJump={goTo}
          onClose={() => setShowGrid(false)}
        />
      )}
    </div>
  );
}
