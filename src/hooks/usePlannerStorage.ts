"use client"

import { useState, useEffect } from "react"
import type { PlannerData } from "../types/planner"
import { storageUtils } from "../utils/storage"

export const usePlannerStorage = () => {
  const [data, setData] = useState<PlannerData>({
    date: undefined,
    priorities: ["", "", "", ""],
    brainDump: "",
    timeSlots: {},
  })
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data on mount
  useEffect(() => {
    const savedData = storageUtils.load()
    if (savedData) {
      setData(savedData)
    }
    setIsLoaded(true)
  }, [])

  // Save data when it changes
  useEffect(() => {
    if (isLoaded) {
      storageUtils.save(data)
    }
  }, [data, isLoaded])

  const updateData = (updates: Partial<PlannerData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const clearData = () => {
    const initialData: PlannerData = {
      date: undefined,
      priorities: ["", "", "", ""],
      brainDump: "",
      timeSlots: {},
    }
    setData(initialData)
    storageUtils.clear()
  }

  return {
    data,
    isLoaded,
    updateData,
    clearData,
  }
}
