"use client"

import { Input } from "@/components/ui/input"

interface TimeSlotInputProps {
  value: string
  hour: number
  slot: "00" | "30"
  onChange: (hour: number, slot: "00" | "30", value: string) => void
}

export const TimeSlotInput = ({ value, hour, slot, onChange }: TimeSlotInputProps) => {
  return (
    <div className={`border-b ${slot === "00" ? "border-r" : ""}`}>
      <Input
        value={value}
        onChange={(e) => onChange(hour, slot, e.target.value)}
        className="border-0 rounded-none h-12 focus-visible:ring-0 focus-visible:bg-blue-50"
        placeholder=""
      />
    </div>
  )
}
