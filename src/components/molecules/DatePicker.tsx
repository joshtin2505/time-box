"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface DatePickerProps {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export const DatePicker = ({ date, onDateChange }: DatePickerProps) => {
  return (
    <>
      <p className="hidden print:block ">
        {date?.toLocaleDateString(navigator.language || "es-CO", {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long",
          // timeZone: "America/Bogota", // Uncomment if you need a specific timezone
        }) ?? "No date selected"}
      </p>
      <div className="mb-6 print:hidden">
        <Label className="text-sm font-medium text-gray-700">Fecha</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`mt-1 w-full max-w-xs justify-start text-left font-normal ${
                !date && "text-muted-foreground"
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date
                ? format(date, "PPP", { locale: es })
                : "Selecciona una fecha"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateChange}
              initialFocus
              locale={es}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
