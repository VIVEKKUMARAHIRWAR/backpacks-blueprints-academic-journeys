interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ label, title, description, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-sm font-medium text-primary uppercase tracking-widest">
          {label}
        </p>
      )}
      <h2 className="text-balance">{title}</h2>
      {description && (
        <p className={`text-muted-foreground text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
      <div className={centered ? "divider mt-6" : "divider-left mt-6"} />
    </div>
  );
};

export default SectionHeader;
