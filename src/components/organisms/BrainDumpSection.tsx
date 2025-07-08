"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface BrainDumpSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export const BrainDumpSection = ({
  value,
  onChange,
}: BrainDumpSectionProps) => {
  return (
    <Card>
      <CardHeader className="">
        <h2 className="text-lg font-semibold text-gray-800">Brain Dump</h2>
      </CardHeader>
      <CardContent>
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Escribe todas tus ideas, tareas pendientes, pensamientos..."
          className="min-h-[200px] border-0 resize-none focus-visible:ring-0 bg-gray-50"
          style={{
            backgroundImage: `repeating-linear-gradient(
              transparent,
              transparent 24px,
              #e5e7eb 24px,
              #e5e7eb 25px
            )`,
          }}
        />
      </CardContent>
    </Card>
  );
};
