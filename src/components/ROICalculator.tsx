"use client";
import { useEffect, useRef, useState } from "react";
import Tag from "@/components/Tag";

const CALENDLY = "https://calendly.com/islam9039438/30min";

type InputKey =
  | "monthlyEmails"
  | "deliveryRate"
  | "positiveReplyRate"
  | "meetingBookingRate"
  | "showUpRate"
  | "closeRate"
  | "averageDealValue"
  | "campaignCost";

const inputs: { key: InputKey; label: string; min: number; max: number; step: number; format: (v: number) => string }[] = [
  { key: "monthlyEmails", label: "Monthly Emails Sent", min: 1000, max: 50000, step: 1000, format: (v) => v.toLocaleString("en-US") },
  { key: "deliveryRate", label: "Delivery Rate", min: 85, max: 99, step: 1, format: (v) => `${v}%` },
  { key: "positiveReplyRate", label: "Positive Reply Rate", min: 0.5, max: 5, step: 0.5, format: (v) => `${v}%` },
  { key: "meetingBookingRate", label: "Positive Reply → Meeting Rate", min: 10, max: 50, step: 5, format: (v) => `${v}%` },
  { key: "showUpRate", label: "Meeting Show-Up Rate", min: 50, max: 95, step: 5, format: (v) => `${v}%` },
  { key: "closeRate", label: "Meeting → Client Close Rate", min: 5, max: 40, step: 5, format: (v) => `${v}%` },
  { key: "averageDealValue", label: "Average Deal Value", min: 500, max: 25000, step: 500, format: (v) => `$${v.toLocaleString("en-US")}` },
  { key: "campaignCost", label: "Monthly Campaign Investment", min: 300, max: 3000, step: 100, format: (v) => `$${v.toLocaleString("en-US")}` },
];

type Scenario = "conservative" | "expected" | "strong";

const scenarios: { key: Scenario; label: string; values: Record<InputKey, number> }[] = [
  {
    key: "conservative",
    label: "Conservative",
    values: { monthlyEmails: 5000, deliveryRate: 92, positiveReplyRate: 1, meetingBookingRate: 20, showUpRate: 70, closeRate: 10, averageDealValue: 3000, campaignCost: 600 },
  },
  {
    key: "expected",
    label: "Expected",
    values: { monthlyEmails: 10000, deliveryRate: 95, positiveReplyRate: 1.5, meetingBookingRate: 25, showUpRate: 75, closeRate: 15, averageDealValue: 5000, campaignCost: 600 },
  },
  {
    key: "strong",
    label: "Strong",
    values: { monthlyEmails: 10000, deliveryRate: 97, positiveReplyRate: 2, meetingBookingRate: 30, showUpRate: 80, closeRate: 20, averageDealValue: 5000, campaignCost: 600 },
  },
];

const SCENARIO_MS = 500;
const snap = (v: number, step: number) => Math.round(v / step) * step;

// Tweens from the previously displayed value to the new target so results
// count up/down smoothly as sliders move.
function useAnimatedNumber(target: number, duration = 400) {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);

  useEffect(() => {
    const from = fromRef.current;
    if (from === target) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
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
  const animated = useAnimatedNumber(value);
  return <>{format(animated)}</>;
}

const whole = (v: number) => Math.round(v).toLocaleString("en-US");
const dollars = (v: number) => `$${Math.round(v).toLocaleString("en-US")}`;
const multiple = (v: number) => `${v.toFixed(1)}x`;
const perDollar = (v: number) => `$${v.toFixed(2)}`;

export default function ROICalculator() {
  const [values, setValues] = useState(scenarios[1].values);
  const [active, setActive] = useState<Scenario | null>("expected");
  const tween = useRef<number | null>(null);

  useEffect(() => () => { if (tween.current) cancelAnimationFrame(tween.current); }, []);

  // Manual adjustment leaves the preset, so no tab stays highlighted.
  const set = (key: InputKey, v: number) => {
    if (tween.current) cancelAnimationFrame(tween.current);
    setActive(null);
    setValues((prev) => ({ ...prev, [key]: v }));
  };

  // Glide every slider from its current value to the preset, snapping to each
  // slider's step so labels never show off-step values mid-animation.
  const applyScenario = (scenario: (typeof scenarios)[number]) => {
    if (tween.current) cancelAnimationFrame(tween.current);
    setActive(scenario.key);
    const from = values;
    let start: number | null = null;
    const tick = (now: number) => {
      start ??= now;
      const t = Math.min((now - start) / SCENARIO_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = { ...from };
      for (const input of inputs) {
        next[input.key] = snap(from[input.key] + (scenario.values[input.key] - from[input.key]) * eased, input.step);
      }
      setValues(next);
      tween.current = t < 1 ? requestAnimationFrame(tick) : null;
    };
    tween.current = requestAnimationFrame(tick);
  };

  const { monthlyEmails, deliveryRate, positiveReplyRate, meetingBookingRate, showUpRate, closeRate, averageDealValue, campaignCost } = values;
  const delivered = monthlyEmails * (deliveryRate / 100);
  const positiveReplies = delivered * (positiveReplyRate / 100);
  const meetingsBooked = positiveReplies * (meetingBookingRate / 100);
  const attendedMeetings = meetingsBooked * (showUpRate / 100);
  const newClients = Math.round(attendedMeetings * (closeRate / 100));
  const estimatedRevenue = newClients * averageDealValue;
  // Revenue per $1 invested is the same ratio as the multiple, shown as dollars.
  const revenueMultiple = campaignCost > 0 ? estimatedRevenue / campaignCost : 0;

  const funnel = [
    { label: "Monthly Emails", value: monthlyEmails },
    { label: "Potential Interested Prospects", value: Math.round(positiveReplies) },
    { label: "Meetings Booked", value: Math.round(meetingsBooked) },
    { label: "Sales Conversations", value: Math.round(attendedMeetings) },
    { label: "Estimated New Clients", value: newClients },
  ];

  return (
    <section id="roi-calculator" className="px-6 lg:px-10 py-section-mobile lg:py-section-desktop bg-surface scroll-mt-[72px]">
      <div className="max-w-container mx-auto space-y-stack-xl">
        <div>
          <Tag>ROI CALCULATOR</Tag>
          <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface mt-stack-sm">Estimate Your Campaign Results</h2>
          <p className="text-body text-on-surface-variant mt-stack-sm max-w-2xl">
            Adjust the numbers to match your business. See what your AI outbound system could deliver.
          </p>
        </div>

        <div className="glass-card rounded-xl p-6 lg:p-10 space-y-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Inputs */}
          <div className="space-y-6">
            {inputs.map((input) => {
              const value = values[input.key];
              const fill = ((value - input.min) / (input.max - input.min)) * 100;
              return (
                <div key={input.key} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <label htmlFor={`roi-${input.key}`} className="text-body-sm text-on-surface-variant">{input.label}</label>
                    <span className="font-mono text-body-sm font-bold text-on-surface">{input.format(value)}</span>
                  </div>
                  <input
                    id={`roi-${input.key}`}
                    type="range"
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    value={value}
                    onChange={(e) => set(input.key, Number(e.target.value))}
                    className="roi-range"
                    style={{ "--fill": `${fill}%` } as React.CSSProperties}
                  />
                </div>
              );
            })}
          </div>

          {/* Results */}
          <div className="space-y-stack-lg">
            <div className="flex flex-col items-stretch gap-2" aria-live="polite">
              {funnel.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-full flex items-center justify-between gap-4 px-5 py-3 rounded-lg border ${
                      i === funnel.length - 1
                        ? "bg-secondary/10 border-secondary/30"
                        : "bg-surface-container-low border-outline-variant/10"
                    }`}
                    style={{ maxWidth: `${100 - i * 8}%` }}
                  >
                    <span className="text-body-sm text-on-surface-variant">{step.label}</span>
                    <span className={`font-mono font-bold tabular-nums ${i === funnel.length - 1 ? "text-secondary text-lg" : "text-on-surface"}`}>
                      <AnimatedValue value={step.value} format={whole} />
                    </span>
                  </div>
                  {i < funnel.length - 1 && <span aria-hidden="true" className="text-on-surface-variant leading-none">↓</span>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 glow-accent">
                <p className="text-tag-label font-mono text-secondary uppercase tracking-widest">Estimated Revenue</p>
                <p className="text-h3-mobile lg:text-h3-desktop font-bold text-on-surface tabular-nums mt-1">
                  <AnimatedValue value={estimatedRevenue} format={dollars} />
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Campaign Investment</p>
                <p className="text-h3-mobile lg:text-h3-desktop font-bold text-on-surface-variant tabular-nums mt-1">
                  <AnimatedValue value={campaignCost} format={dollars} />
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/40">
                <p className="text-tag-label font-mono text-primary uppercase tracking-widest">Revenue Multiple</p>
                <p className="text-h3-mobile lg:text-h3-desktop font-bold text-primary tabular-nums mt-1">
                  <AnimatedValue value={revenueMultiple} format={multiple} />
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                <p className="text-tag-label font-mono text-outline uppercase tracking-widest">Revenue per $1 Invested</p>
                <p className="text-h3-mobile lg:text-h3-desktop font-bold text-on-surface-variant tabular-nums mt-1">
                  <AnimatedValue value={revenueMultiple} format={perDollar} />
                </p>
              </div>
            </div>

            <p className="text-body-sm text-on-surface-variant">
              These are scenario-based estimates, not guarantees. Actual results depend on targeting, offer-market fit, deliverability, messaging, sales performance, and deal size.
            </p>

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
      </div>
    </section>
  );
}
