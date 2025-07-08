import type { PlannerData, PlannerStorageData } from "../types/planner"

const STORAGE_KEY = "timeBoxPlanner"

export const storageUtils = {
  save: (data: PlannerData): void => {
    try {
      const dataToSave: PlannerStorageData = {
        date: data.date?.toISOString(),
        priorities: data.priorities,
        brainDump: data.brainDump,
        timeSlots: data.timeSlots,
        lastSaved: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave))
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }
  },

  load: (): PlannerData | null => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY)
      if (!savedData) return null

      const parsedData: PlannerStorageData = JSON.parse(savedData)
      return {
        date: parsedData.date ? new Date(parsedData.date) : undefined,
        priorities: parsedData.priorities || ["", "", "", ""],
        brainDump: parsedData.brainDump || "",
        timeSlots: parsedData.timeSlots || {},
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error)
      return null
    }
  },

  clear: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error("Error clearing localStorage:", error)
    }
  },
}
