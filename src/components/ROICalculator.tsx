"use client";
import { useEffect, useId, useRef, useState } from "react";
import Tag from "@/components/Tag";

const CALENDLY = "https://calendly.com/islam9039438/30min";

type SliderDef<K extends string> = {
  key: K;
  label: string;
  helper?: string;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
};

const pct = (v: number) => `${v}%`;
const money = (v: number) => `$${Math.round(v).toLocaleString("en-US")}`;
const whole = (v: number) => Math.round(v).toLocaleString("en-US");
// Suffix is added once by AnimatedRange so ranges read "0-4.2x".
const multiple = (v: number) => (v < 0.05 ? "0" : v.toFixed(1));

// The three numbers every visitor knows about their own business.
type BasicKey = "prospects" | "clientValue" | "investment";
const basicInputs: SliderDef<BasicKey>[] = [
  { key: "prospects", label: "Monthly Prospects", helper: "How many potential customers would you like to reach?", min: 500, max: 10000, step: 500, format: whole },
  { key: "clientValue", label: "Average Client Value", helper: "How much is one new client worth to your business?", min: 500, max: 25000, step: 500, format: money },
  { key: "investment", label: "Monthly Outbound Investment", helper: "How much would you invest in generating new clients?", min: 300, max: 3000, step: 100, format: money },
];

// Conversion benchmarks most visitors don't know; set by the scenario tabs.
type AdvancedKey = "deliveryRate" | "positiveReplyRate" | "replyToMeetingRate" | "showRate" | "closeRate";
const advancedInputs: SliderDef<AdvancedKey>[] = [
  { key: "deliveryRate", label: "Delivery Rate", min: 85, max: 99, step: 1, format: pct },
  { key: "positiveReplyRate", label: "Positive Reply Rate", min: 0.5, max: 5, step: 0.5, format: pct },
  { key: "replyToMeetingRate", label: "Reply to Meeting Rate", min: 10, max: 50, step: 5, format: pct },
  { key: "showRate", label: "Meeting Show Rate", min: 50, max: 95, step: 5, format: pct },
  { key: "closeRate", label: "Close Rate", min: 5, max: 40, step: 5, format: pct },
];

type Scenario = "conservative" | "expected" | "strong";
const scenarios: { key: Scenario; label: string; values: Record<AdvancedKey, number> }[] = [
  { key: "conservative", label: "Conservative", values: { deliveryRate: 90, positiveReplyRate: 1, replyToMeetingRate: 15, showRate: 65, closeRate: 10 } },
  { key: "expected", label: "Expected", values: { deliveryRate: 95, positiveReplyRate: 1.5, replyToMeetingRate: 25, showRate: 75, closeRate: 15 } },
  { key: "strong", label: "Strong", values: { deliveryRate: 97, positiveReplyRate: 2.5, replyToMeetingRate: 35, showRate: 85, closeRate: 25 } },
];

const SCENARIO_MS = 500;
const snap = (v: number, step: number) => Math.round(v / step) * step;
const isWhole = (n: number) => Math.abs(n - Math.round(n)) < 1e-9;

// Tweens from the previously displayed value to the new target so results
// count up/down smoothly as sliders move.
function useAnimatedNumber(target: number, duration = 400) {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);

  useEffect(() => {
    const from = fromRef.current;
    if (from === target) return;
    let frame: number;
    let start: number | null = null;
    const tick = (now: number) => {
      start ??= now;
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = from + (target - from) * eased;
      fromRef.current = value;
      setDisplay(value);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return display;
}

function AnimatedValue({ value, format }: { value: number; format: (v: number) => string }) {
  return <>{format(useAnimatedNumber(value))}</>;
}

// A result is either a single value or a low–high range (used when the client
// estimate is fractional, so we never show a misleading "0").
type Range = { low: number; high: number };

function AnimatedRange({ range, format, prefix = "", suffix = "" }: { range: Range; format: (v: number) => string; prefix?: string; suffix?: string }) {
  const low = useAnimatedNumber(range.low);
  const high = useAnimatedNumber(range.high);
  if (range.low === range.high) return <>{prefix}{format(low)}{suffix}</>;
  return <>{prefix}{format(low)}-{format(high)}{suffix}</>;
}

function Slider<K extends string>({ def, value, onChange }: { def: SliderDef<K>; value: number; onChange: (key: K, v: number) => void }) {
  const fill = ((value - def.min) / (def.max - def.min)) * 100;
  const id = `roi-${def.key}`;
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-body-sm font-semibold text-on-surface">{def.label}</label>
        <span className="font-mono text-body-sm font-bold text-on-surface tabular-nums">{def.format(value)}</span>
      </div>
      {def.helper && <p id={`${id}-help`} className="text-body-sm text-on-surface-variant">{def.helper}</p>}
      <input
        id={id}
        type="range"
        min={def.min}
        max={def.max}
        step={def.step}
        value={value}
        aria-describedby={def.helper ? `${id}-help` : undefined}
        onChange={(e) => onChange(def.key, Number(e.target.value))}
        className="roi-range"
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
      />
    </div>
  );
}

export default function ROICalculator() {
  const [basic, setBasic] = useState<Record<BasicKey, number>>({ prospects: 1000, clientValue: 2500, investment: 600 });
  const [advanced, setAdvanced] = useState(scenarios[1].values);
  const [active, setActive] = useState<Scenario | null>("expected");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const tween = useRef<number | null>(null);
  const advancedId = useId();

  useEffect(() => () => { if (tween.current) cancelAnimationFrame(tween.current); }, []);

  const setBasicValue = (key: BasicKey, v: number) => setBasic((prev) => ({ ...prev, [key]: v }));

  // Manual adjustment leaves the preset, so no tab stays highlighted.
  const setAdvancedValue = (key: AdvancedKey, v: number) => {
    if (tween.current) cancelAnimationFrame(tween.current);
    setActive(null);
    setAdvanced((prev) => ({ ...prev, [key]: v }));
  };

  // Glide the advanced sliders to the preset, snapping to each slider's step
  // so labels never show off-step values mid-animation.
  const applyScenario = (scenario: (typeof scenarios)[number]) => {
    if (tween.current) cancelAnimationFrame(tween.current);
    setActive(scenario.key);
    const from = advanced;
    let start: number | null = null;
    const tick = (now: number) => {
      start ??= now;
      const t = Math.min((now - start) / SCENARIO_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = { ...from };
      for (const input of advancedInputs) {
        next[input.key] = snap(from[input.key] + (scenario.values[input.key] - from[input.key]) * eased, input.step);
      }
      setAdvanced(next);
      tween.current = t < 1 ? requestAnimationFrame(tick) : null;
    };
    tween.current = requestAnimationFrame(tick);
  };

  const { prospects, clientValue, investment } = basic;
  const { deliveryRate, positiveReplyRate, replyToMeetingRate, showRate, closeRate } = advanced;
  const delivered = prospects * (deliveryRate / 100);
  const positiveReplies = delivered * (positiveReplyRate / 100);
  const meetingsBooked = positiveReplies * (replyToMeetingRate / 100);
  const attendedMeetings = meetingsBooked * (showRate / 100);
  const newClients = attendedMeetings * (closeRate / 100);

  // Whole client counts show one number. Fractional counts show the
  // surrounding whole numbers (e.g. 0.4 → "~0-1"); below 2 clients that
  // range carries through to revenue and multiple, above 2 they stay single.
  const clientsRange: Range = isWhole(newClients)
    ? { low: Math.round(newClients), high: Math.round(newClients) }
    : { low: Math.floor(newClients), high: Math.ceil(newClients) };
  const clientsAreRange = clientsRange.low !== clientsRange.high;
  const revenueRange: Range =
    clientsAreRange && newClients < 2
      ? { low: clientsRange.low * clientValue, high: clientsRange.high * clientValue }
      : { low: newClients * clientValue, high: newClients * clientValue };
  const multipleRange: Range =
    investment > 0 ? { low: revenueRange.low / investment, high: revenueRange.high / investment } : { low: 0, high: 0 };

  const funnel = [
    { label: "Targeted prospects", value: prospects },
    { label: "Positive replies", value: Math.round(positiveReplies) },
    { label: "Meetings booked", value: Math.round(meetingsBooked) },
    { label: "Sales conversations", value: Math.round(attendedMeetings) },
  ];

  return (
    <section id="roi-calculator" className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface scroll-mt-[72px]">
      <div className="max-w-container mx-auto space-y-stack-xl">
        <div>
          <Tag>ROI CALCULATOR</Tag>
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm max-w-3xl">See What Your Outbound Campaign Could Generate</h2>
          <p className="text-body text-on-surface-variant mt-stack-sm max-w-2xl">
            You don&apos;t need to know email marketing numbers. Enter your business numbers and we&apos;ll estimate the rest.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Inputs */}
          <div className="space-y-8">
            <div role="group" aria-label="Scenario" className="flex flex-wrap gap-2">
              {scenarios.map((sc) => (
                <button
                  key={sc.key}
                  type="button"
                  aria-pressed={active === sc.key}
                  onClick={() => applyScenario(sc)}
                  className={`px-4 py-2 rounded-full text-tag-label font-mono uppercase tracking-widest transition-colors ${
                    active === sc.key
                      ? "chip-glow text-secondary"
                      : "bg-surface-container-high border border-transparent text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {sc.label}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {basicInputs.map((def) => (
                <Slider key={def.key} def={def} value={basic[def.key]} onChange={setBasicValue} />
              ))}
            </div>

            <div className="border-t border-outline-variant/10 pt-4">
              <button
                type="button"
                aria-expanded={showAdvanced}
                aria-controls={advancedId}
                onClick={() => setShowAdvanced((v) => !v)}
                className="flex items-center gap-2 text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <span aria-hidden="true" className="font-mono text-lg leading-none w-4 text-center">{showAdvanced ? "−" : "+"}</span>
                Advanced assumptions
              </button>
              <div
                id={advancedId}
                inert={!showAdvanced}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ${showAdvanced ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-6 pt-6">
                    {advancedInputs.map((def) => (
                      <Slider key={def.key} def={def} value={advanced[def.key]} onChange={setAdvancedValue} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-stack-lg">
            <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Your Estimated Funnel</p>
            <div className="flex flex-col items-stretch gap-2" aria-live="polite">
              {funnel.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center gap-2">
                  <div
                    className="w-full flex items-center justify-between gap-4 px-5 py-3 rounded-lg border bg-surface-container-low border-outline-variant/10"
                    style={{ maxWidth: `${100 - i * 8}%` }}
                  >
                    <span className="text-body-sm text-on-surface-variant">{step.label}</span>
                    <span className="font-mono font-bold tabular-nums text-on-surface">
                      <AnimatedValue value={step.value} format={whole} />
                    </span>
                  </div>
                  <span aria-hidden="true" className="text-on-surface-variant leading-none">↓</span>
                </div>
              ))}
              <div
                className="self-center w-full flex items-center justify-between gap-4 px-5 py-3 rounded-lg border bg-secondary/10 border-secondary/30"
                style={{ maxWidth: `${100 - funnel.length * 8}%` }}
              >
                <span className="text-body-sm text-on-surface-variant">Potential new clients</span>
                <span className="font-mono font-bold tabular-nums text-secondary text-lg">
                  <AnimatedRange range={clientsRange} format={whole} prefix={clientsAreRange ? "~" : ""} />
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Potential Revenue</p>
                <p className="text-h3-mobile font-bold text-on-surface tabular-nums mt-1 break-words">
                  <AnimatedRange range={revenueRange} format={money} />
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Campaign Investment</p>
                <p className="text-h3-mobile font-bold text-on-surface-variant tabular-nums mt-1">
                  <AnimatedValue value={investment} format={money} />
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/40 glow-accent">
                <p className="text-tag-label font-mono text-primary uppercase tracking-widest">Potential Revenue Multiple</p>
                <p className="text-h3-mobile font-bold text-primary tabular-nums mt-1 break-words">
                  <AnimatedRange range={multipleRange} format={multiple} suffix="x" />
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-body-sm text-on-surface-variant">
                Don&apos;t know your outbound benchmarks? That&apos;s okay. We use industry-informed campaign assumptions to estimate potential results. Once your campaign starts, we replace these estimates with your actual performance data and optimize from there.
              </p>
              <p className="text-body-sm text-outline">
                These are scenario-based estimates, not guarantees. Actual results depend on your market, offer, targeting, deliverability, messaging, and sales process.
              </p>
            </div>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-fit bg-primary text-on-primary py-4 px-8 rounded-lg font-bold text-center active:scale-95 transition-all shadow-lg shadow-primary/10"
            >
              Book a Strategy Call to Plan Your Campaign
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
