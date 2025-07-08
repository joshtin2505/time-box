import type { ReactNode } from "react";

interface PlannerLayoutProps {
  header: ReactNode;
  leftColumn: ReactNode;
  rightColumn: ReactNode;
}

export const PlannerLayout = ({
  header,
  leftColumn,
  rightColumn,
}: PlannerLayoutProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {header}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6 relative">{leftColumn}</div>
        <div className="lg:col-span-2">{rightColumn}</div>
      </div>
    </div>
  );
};
