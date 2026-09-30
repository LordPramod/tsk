type Stat = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

type StatBarProps = {
  stats: Stat[];
};

export const StatBar = ({ stats }: StatBarProps) => {
  return (
    <div className="container-dc">
      <div className="stat-bar">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 px-[26px] py-[22px]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              {stat.icon}
            </div>

            <div>
              <div className="text-xl font-bold tracking-tight text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
