interface LoadingSpinnerProps {
  message?: string
}

export const LoadingSpinner = ({ message = "Cargando..." }: LoadingSpinnerProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">{message}</div>
      </div>
    </div>
  )
}
