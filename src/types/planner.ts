export interface TimeSlot {
  slot00: string
  slot30: string
}

export interface PlannerData {
  date?: Date
  priorities: string[]
  brainDump: string
  timeSlots: Record<string, TimeSlot>
  lastSaved?: string
}

export interface PlannerStorageData {
  date?: string
  priorities: string[]
  brainDump: string
  timeSlots: Record<string, TimeSlot>
  lastSaved: string
}
