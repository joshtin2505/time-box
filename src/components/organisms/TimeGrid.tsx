"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TimeSlotInput } from "../molecules/TimeSlotInput";
import type { TimeSlot } from "../../types/planner";

interface TimeGridProps {
  timeSlots: Record<string, TimeSlot>;
  onTimeSlotChange: (hour: number, slot: "00" | "30", value: string) => void;
}

export const TimeGrid = ({ timeSlots, onTimeSlotChange }: TimeGridProps) => {
  const hours = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  ];

  return (
    <Card className="p-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-3 gap-0 border">
          {/* Header */}
          <div className="bg-gray-50 p-3 border-b border-r font-medium text-center">
            Hora
          </div>
          <div className="bg-gray-50 p-3 border-b border-r font-medium text-center">
            :00
          </div>
          <div className="bg-gray-50 p-3 border-b font-medium text-center">
            :30
          </div>

          {/* Time Slots */}
          {hours.map((hour) => (
            <>
              <div
                key={`hour-${hour}`}
                className="p-3 border-b border-r bg-gray-50 font-medium text-center"
              >
                {hour > 12 ? hour - 12 : hour} {hour >= 12 ? "pm" : "am"}
              </div>
              <TimeSlotInput
                key={`${hour}-00`}
                value={timeSlots[hour]?.slot00 || ""}
                hour={hour}
                slot="00"
                onChange={onTimeSlotChange}
              />
              <TimeSlotInput
                key={`${hour}-30`}
                value={timeSlots[hour]?.slot30 || ""}
                hour={hour}
                slot="30"
                onChange={onTimeSlotChange}
              />
            </>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
