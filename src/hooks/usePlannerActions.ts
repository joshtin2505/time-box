import type { PlannerData } from "../types/planner";

interface UsePlannerActionsProps {
  updateData: (updates: Partial<PlannerData>) => void;
  data: PlannerData;
}

export const usePlannerActions = ({
  updateData,
  data,
}: UsePlannerActionsProps) => {
  const updatePriority = (index: number, value: string) => {
    const newPriorities = [...data.priorities];
    newPriorities[index] = value;
    updateData({ priorities: newPriorities });
  };

  const updateBrainDump = (value: string) => {
    updateData({ brainDump: value });
  };

  const updateDate = (date: Date | undefined) => {
    updateData({ date });
  };

  const updateTimeSlot = (hour: number, slot: "00" | "30", value: string) => {
    const newTimeSlots = {
      ...data.timeSlots,
      [hour]: {
        ...data.timeSlots[hour],
        [`slot${slot}`]: value,
      },
    };
    updateData({ timeSlots: newTimeSlots });
  };

  return {
    updatePriority,
    updateBrainDump,
    updateDate,
    updateTimeSlot,
  };
};
