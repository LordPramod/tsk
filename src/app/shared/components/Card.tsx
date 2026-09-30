type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  chip?: "chip-mint" | "chip-teal" | "chip-gold" | "chip-lilac" | "chip-pink";
};

export const Card = ({
  icon,
  title,
  description,
  chip = "chip-mint",
}: FeatureCardProps) => {
  return (
    <div className="card">
      <div className={`icon-chip ${chip}`}>{icon}</div>

      <h3>{title}</h3>

      <p className="mt-3 text-[15px] leading-6 text-muted">{description}</p>
    </div>
  );
};
