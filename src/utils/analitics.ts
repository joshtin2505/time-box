/* eslint-disable @typescript-eslint/no-explicit-any */
// Google Analytics 4
export const gtag = (...args: any[]) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

// Eventos personalizados
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  gtag("event", eventName, {
    event_category: "engagement",
    event_label: eventName,
    ...parameters,
  });
};

// Eventos específicos del planificador
export const trackPlannerEvents = {
  priorityAdded: () => trackEvent("priority_added"),
  brainDumpUsed: () => trackEvent("brain_dump_used"),
  timeSlotFilled: () => trackEvent("time_slot_filled"),
  dateChanged: () => trackEvent("date_changed"),
  plannerCleared: () => trackEvent("planner_cleared"),
};
