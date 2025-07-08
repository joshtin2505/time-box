import { usePlannerStorage } from "@/hooks/usePlannerStorage";
import { usePlannerActions } from "@/hooks/usePlannerActions";
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner";
import { SaveIndicator } from "@/components/atoms/SaveIndicator";
import { Logo } from "@/components/atoms/Logo";
import { DatePicker } from "@/components/molecules/DatePicker";
import { PrioritiesSection } from "@/components/organisms/PrioritiesSection";
import { BrainDumpSection } from "@/components/organisms/BrainDumpSection";
import { TimeGrid } from "@/components/organisms/TimeGrid";
import { PlannerLayout } from "@/components/templates/PlannerLayout";

export default function TimeBoxPlanner() {
  const { data, isLoaded, updateData, clearData } = usePlannerStorage();
  const { updatePriority, updateBrainDump, updateDate, updateTimeSlot } =
    usePlannerActions({
      updateData,
      data,
    });

  if (!isLoaded) {
    return <LoadingSpinner message="Cargando planificador..." />;
  }

  const header = <SaveIndicator onClearAll={clearData} date={data.date} />;

  const leftColumn = (
    <aside className="sticky top-0 print:h-dvh flex flex-col gap-2 print:gap-4">
      <Logo />
      <PrioritiesSection
        priorities={data.priorities}
        onPriorityChange={updatePriority}
      />
      <BrainDumpSection value={data.brainDump} onChange={updateBrainDump} />
    </aside>
  );

  const rightColumn = (
    <>
      <DatePicker date={data.date} onDateChange={updateDate} />
      <TimeGrid timeSlots={data.timeSlots} onTimeSlotChange={updateTimeSlot} />
    </>
  );

  return (
    <PlannerLayout
      header={header}
      leftColumn={leftColumn}
      rightColumn={rightColumn}
    />
  );
}
