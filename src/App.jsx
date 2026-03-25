import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
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
// MOTION HELPERS
// ═══════════════════════════════════════════════════════════
const SPRING_ENTER = { type: "spring", stiffness: 300, damping: 30 };
const SPRING_SOFT = { type: "spring", stiffness: 200, damping: 25 };
const INSTANT = { duration: 0.06 };

function springWithDelay(delay, reduced) {
  if (reduced) return INSTANT;
  return { ...SPRING_ENTER, delay: delay / 1000 };
}

// ═══════════════════════════════════════════════════════════
// UTILITY: Count-up animation for metrics
// ═══════════════════════════════════════════════════════════
function CountUp({ target, suffix = "", duration = 800, active, reduced, onComplete }) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (!active) { setValue(0); setDone(false); return; }
    if (reduced) { setValue(target); setDone(true); return; }
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setValue(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    };
    requestAnimationFrame(step);
  }, [active, target, duration, reduced, isDecimal]);

  return (
    <motion.span
      animate={done ? { scale: [1, 1.06, 1] } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {isDecimal ? value.toFixed(1) : value}{suffix}
    </motion.span>
  );
}

// ═══════════════════════════════════════════════════════════
// UTILITY: Gold underline draw animation (Motion-powered)
// ═══════════════════════════════════════════════════════════
function GoldUnderline({ active, reduced }) {
  return (
    <motion.span
      className="gold-underline"
      style={{
        display: "block",
        height: "3px",
        background: "var(--accent-brand)",
        marginTop: "8px",
        borderRadius: "2px",
        transformOrigin: "left",
      }}
      initial={{ scaleX: 0 }}
      animate={active ? { scaleX: 1 } : { scaleX: 0 }}
      transition={reduced ? INSTANT : { ...SPRING_SOFT, delay: 0.3 }}
    />
  );
}

// ═══════════════════════════════════════════════════════════
// UTILITY: Motion entrance wrapper (replaces CSS Entrance)
// ═══════════════════════════════════════════════════════════
function Entrance({ active, delay = 0, reduced, children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={springWithDelay(delay, reduced)}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// KINETIC TEXT: Staggered word animation for headlines
// ═══════════════════════════════════════════════════════════
function KineticText({ text, active, reduced, className = "", style = {} }) {
  const words = text.split(/\s+/);
  if (reduced) {
    return <span className={className} style={style}>{text}</span>;
  }
  return (
    <span className={className} style={{ ...style, display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.3em", perspective: "600px" }}
          initial={{ opacity: 0, y: 20, rotateX: -20 }}
          animate={active ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: -20 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 24,
            delay: i * 0.05,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// FLOATING BACKGROUND ELEMENTS (Parallax depth)
// ═══════════════════════════════════════════════════════════
function FloatingElements({ reduced }) {
  if (reduced) return null;
  const elements = [
    { x: "15%", y: "20%", size: 180, color: "rgba(212,168,67,0.05)", duration: 7, shape: "circle" },
    { x: "75%", y: "65%", size: 120, color: "rgba(0,131,143,0.04)", duration: 9, shape: "circle" },
    { x: "60%", y: "15%", size: 200, color: "rgba(212,168,67,0.03)", duration: 11, shape: "ring" },
    { x: "85%", y: "30%", size: 2, color: "rgba(212,168,67,0.06)", duration: 8, shape: "line" },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden", pointerEvents: "none" }}>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: el.x,
            top: el.y,
            ...(el.shape === "circle" && {
              width: el.size,
              height: el.size,
              borderRadius: "50%",
              background: el.color,
            }),
            ...(el.shape === "ring" && {
              width: el.size,
              height: el.size,
              borderRadius: "50%",
              border: `1px solid ${el.color}`,
            }),
            ...(el.shape === "line" && {
              width: 80,
              height: el.size,
              background: el.color,
              borderRadius: 1,
            }),
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, el.shape === "line" ? 8 : 3, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
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
      <FloatingElements reduced={reduced} />
      <div className="scene-content hero-content">
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-display text-inverse">
            <KineticText text={slide.headline} active={active} reduced={reduced} />
          </h1>
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
      <FloatingElements reduced={reduced} />
      <div className="scene-content" style={{ maxWidth: "900px" }}>
        {slide.sectionLabel && (
          <Entrance active={active} delay={0} reduced={reduced}>
            <span className="type-label section-label-inline">{slide.sectionLabel}</span>
          </Entrance>
        )}
        <Entrance active={active} delay={80} reduced={reduced}>
          <h1 className="type-display text-inverse" style={{ fontSize: "clamp(40px, 4.5vw, 64px)" }}>
            <KineticText text={slide.headline} active={active} reduced={reduced} />
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
            <motion.div
              className="example-box"
              whileHover={reduced ? {} : { y: -2, boxShadow: "0 6px 24px rgba(10,22,40,0.12)" }}
              transition={SPRING_SOFT}
            >
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
            </motion.div>
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
              <span className="type-metric metric-glow" style={{ color: "var(--accent-brand)" }}>
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
            <motion.div
              key={i}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={springWithDelay(150 + i * 100, reduced)}
              whileHover={reduced ? {} : { scale: 1.03 }}
            >
              <span className="process-number">{step.number}</span>
              <span className="type-subheadline" style={{ marginTop: "12px", display: "block" }}>
                {step.label}
              </span>
              <span className="type-caption text-secondary" style={{ marginTop: "6px", display: "block" }}>
                {step.description}
              </span>
              {i < slide.processSteps.length - 1 && (
                <motion.span
                  className="process-connector"
                  initial={{ scaleX: 0 }}
                  animate={active ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={reduced ? INSTANT : { ...SPRING_SOFT, delay: (250 + i * 100) / 1000 }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </motion.div>
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
            <motion.div
              key={ci}
              className="comparison-col"
              initial={{ opacity: 0, x: ci === 0 ? -40 : 40 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: ci === 0 ? -40 : 40 }}
              transition={springWithDelay(150 + ci * 120, reduced)}
            >
              <h3 className="type-subheadline" style={{ marginBottom: "20px", color: ci === 0 ? "var(--text-primary)" : "var(--accent-secondary)" }}>
                {col.header}
              </h3>
              {col.items.map((item, ii) => (
                <motion.p
                  key={ii}
                  className="type-body comparison-item"
                  whileHover={reduced ? {} : { x: 4, backgroundColor: "var(--surface-elevated)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
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
              <span>{slide.tableHeaders?.[0] || 'Company'}</span>
              <span>{slide.tableHeaders?.[1] || 'Target Market'}</span>
            </div>
            {slide.tableData.map((row, i) => (
              <motion.div
                key={i}
                className={`table-row ${i % 2 === 1 ? "table-row-alt" : ""}`}
                initial={{ opacity: 0, x: -20 }}
                animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={springWithDelay(200 + i * 50, reduced)}
                whileHover={reduced ? {} : { x: 4, backgroundColor: "var(--surface-elevated)" }}
              >
                <span className="table-company">
                  <span
                    className="program-dot"
                    style={{ background: row.program === "horizon" ? "var(--horizon-accent)" : "var(--pivot-accent)" }}
                  />
                  {row.company}
                </span>
                <span className="type-body text-secondary">{row.target}</span>
              </motion.div>
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={active ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={springWithDelay(150 + i * 60, reduced)}
            >
              <motion.div
                className="play-card"
                style={{ borderLeftColor: card.program === "horizon" ? "var(--horizon-accent)" : "var(--pivot-accent)" }}
                whileHover={reduced ? {} : { y: -4, boxShadow: "0 8px 32px rgba(10,22,40,0.16)" }}
                transition={SPRING_SOFT}
              >
                {card.company.length === 1 ? (
                  <span className="process-number" style={{
                    width: 32, height: 32, fontSize: 16,
                    marginBottom: 8, display: 'inline-flex'
                  }}>
                    {card.company}
                  </span>
                ) : (
                  <span className="type-label" style={{ color: "var(--text-secondary)" }}>{card.company}</span>
                )}
                <span className="type-body" style={{ fontWeight: 600, color: "var(--accent-brand)", marginTop: "4px", display: "block" }}>
                  {card.play}
                </span>
                <p className="type-caption text-secondary" style={{ marginTop: "8px" }}>
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
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
      <FloatingElements reduced={reduced} />
      <div className="scene-content" style={{ maxWidth: "900px" }}>
        <Entrance active={active} delay={0} reduced={reduced}>
          <h1 className="type-headline text-inverse">{slide.headline}</h1>
        </Entrance>
        <div style={{ marginTop: "40px" }}>
          {slide.actions.map((action, i) => (
            <motion.div
              key={i}
              className="action-item"
              initial={{ opacity: 0, x: -30 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={springWithDelay(150 + i * 100, reduced)}
              whileHover={reduced ? {} : { x: 8 }}
            >
              <span className="action-number">{action.number}</span>
              <div>
                <p className="type-subheadline text-inverse" style={{ marginBottom: "6px" }}>
                  {action.title}
                </p>
                <p className="type-body text-inverse-muted">{action.description}</p>
              </div>
            </motion.div>
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
// SLIDE TRANSITION VARIANTS
// ═══════════════════════════════════════════════════════════
function getSlideVariants(layout, direction) {
  const isDark = layout === "hero" || layout === "section-divider" || layout === "action-summary";
  if (isDark) {
    return {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.02 },
    };
  }
  return {
    initial: { opacity: 0, x: direction * 80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction * -80 },
  };
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
                  <motion.button
                    key={slide.id}
                    className={`grid-thumb ${slide.id - 1 === currentIndex ? "grid-thumb-active" : ""}`}
                    onClick={() => { onJump(slide.id - 1); onClose(); }}
                    data-surface={slide.surface}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <span className="grid-thumb-num">{slide.id}</span>
                    <span className="grid-thumb-title">{slide.title}</span>
                  </motion.button>
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
  const [direction, setDirection] = useState(1);
  const [showNotes, setShowNotes] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [started, setStarted] = useState(false);
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
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  }, [started, currentIndex]);

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
  const variants = getSlideVariants(currentSlide.layout, direction);

  return (
    <div className="deck-shell" onClick={handleClick}>
      {/* Current scene with AnimatePresence */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          className="scene-wrapper"
          initial={reduced ? { opacity: 0 } : variants.initial}
          animate={reduced ? { opacity: 1 } : variants.animate}
          exit={reduced ? { opacity: 0 } : variants.exit}
          transition={reduced ? { duration: 0.06 } : { type: "spring", stiffness: 300, damping: 30 }}
        >
          <SceneRouter slide={currentSlide} active={true} reduced={reduced} />
        </motion.div>
      </AnimatePresence>

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

      {/* Progress bar — bottom (smooth with motion) */}
      <div className="chrome-progress">
        <motion.div
          className="chrome-progress-fill"
          animate={{ width: `${progress}%` }}
          transition={reduced ? { duration: 0.06 } : { type: "spring", stiffness: 200, damping: 30 }}
        />
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
