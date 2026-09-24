export default function CTASection({
  title = "Your Next Client Is Already Out There",
  subheading = "The question is whether your competitors reach them first. Build an AI Sales Engine generating qualified conversations every month.",
}: {
  title?: string;
  subheading?: string;
}) {
  return (
    <section className="px-6 py-section-mobile lg:py-section-desktop bg-surface-container-lowest">
      <div className="max-w-container mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-16 rounded-2xl border border-outline-variant/20 space-y-6 text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full" />
        <h2 className="text-h2-mobile lg:text-h2-desktop text-on-surface relative z-10">{title}</h2>
        <p className="text-body-sm text-on-surface-variant relative z-10 max-w-md mx-auto">
          {subheading}
        </p>
        <a
          href="https://calendly.com/islam9039438/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto bg-primary text-on-primary py-4 px-12 rounded-lg font-bold active:scale-95 transition-all shadow-lg shadow-primary/10 relative z-10"
        >
          Book a Free Strategy Call
        </a>
      </div>
    </section>
  );
}
