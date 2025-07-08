"use client";
interface SaveIndicatorProps {
  onClearAll: () => void;
  date?: Date;
}

export const SaveIndicator = ({ onClearAll, date }: SaveIndicatorProps) => {
  const handleClear = () => {
    if (
      confirm(
        "¿Estás seguro de que quieres borrar todos los datos? Esta acción no se puede deshacer."
      )
    ) {
      onClearAll();
    }
  };
  const userLang = window.navigator.language || "es-CO";
  return (
    <header className="mb-4 text-right flex justify-between">
      <p>
        {date?.toLocaleDateString(userLang, {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long",
          // timeZone: "America/Bogota",
        }) ?? "No date selected"}
      </p>
      <span className="print:block hidden text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
        Feliz{" "}
        {date?.toLocaleDateString(userLang, {
          weekday: "long",
        }) ?? "desconocido"}
        !
      </span>
      <div className="print:hidden">
        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
          ✓ Guardado automáticamente
        </span>
        <button
          onClick={handleClear}
          className=" ml-2 text-xs text-red-600 hover:text-red-800 underline"
        >
          Borrar todo
        </button>
      </div>
    </header>
  );
};
