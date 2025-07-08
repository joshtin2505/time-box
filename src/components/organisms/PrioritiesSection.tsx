"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PriorityItem } from "../molecules/PriorityItem";

interface PrioritiesSectionProps {
  priorities: string[];
  onPriorityChange: (index: number, value: string) => void;
}

export const PrioritiesSection = ({
  priorities,
  onPriorityChange,
}: PrioritiesSectionProps) => {
  return (
    <Card>
      <CardHeader className="">
        <h2 className="text-lg font-semibold text-neutral-800">
          Top Priorities
        </h2>
      </CardHeader>
      <CardContent className="space-y-3">
        {priorities.map((priority, index) => (
          <PriorityItem
            key={index}
            value={priority}
            index={index}
            onChange={onPriorityChange}
          />
        ))}
      </CardContent>
    </Card>
  );
};
