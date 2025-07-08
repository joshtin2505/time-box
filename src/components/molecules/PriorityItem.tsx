"use client"

import { Input } from "@/components/ui/input"

interface PriorityItemProps {
  value: string
  index: number
  onChange: (index: number, value: string) => void
}

export const PriorityItem = ({ value, index, onChange }: PriorityItemProps) => {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(index, e.target.value)}
      placeholder={`Prioridad ${index + 1}`}
      className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-600"
    />
  )
}
