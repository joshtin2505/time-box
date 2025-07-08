# The Time Box - Planificador de Tiempo Personal

Un planificador de tiempo moderno y elegante construido con React, Next.js y TypeScript. Inspirado en técnicas de time-blocking y productividad personal.

![Time Box Planner](https://via.placeholder.com/800x400/f3f4f6/374151?text=The+Time+Box+Planner)

## ✨ Características

- **📅 Calendario Visual**: Selector de fecha intuitivo con navegación mensual
- **🎯 Gestión de Prioridades**: Define hasta 4 prioridades principales del día
- **🧠 Brain Dump**: Espacio libre para volcar ideas y pensamientos
- **⏰ Time Blocking**: Planifica tu día en bloques de 30 minutos (5 AM - 11 PM)
- **💾 Guardado Automático**: Todos los datos se guardan automáticamente en localStorage
- **📱 Diseño Responsive**: Funciona perfectamente en desktop, tablet y móvil
- **🎨 Interfaz Limpia**: Diseño minimalista inspirado en planificadores físicos

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Iconos**: Lucide React
- **Fechas**: date-fns
- **Arquitectura**: Atomic Design + Principios SOLID

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/              # Componentes básicos
│   │   ├── LoadingSpinner.tsx
│   │   ├── SaveIndicator.tsx
│   │   └── Logo.tsx
│   ├── molecules/          # Combinaciones de atoms
│   │   ├── DatePicker.tsx
│   │   ├── PriorityItem.tsx
│   │   └── TimeSlotInput.tsx
│   ├── organisms/          # Secciones completas
│   │   ├── PrioritiesSection.tsx
│   │   ├── BrainDumpSection.tsx
│   │   └── TimeGrid.tsx
│   └── templates/          # Layouts
│       └── PlannerLayout.tsx
├── hooks/                  # Custom hooks
│   ├── usePlannerStorage.ts
│   └── usePlannerActions.ts
├── types/                  # Definiciones de tipos
│   └── planner.ts
├── utils/                  # Utilidades
│   └── storage.ts
└── time-box-planner.tsx   # Componente principal
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/joshtin2505/time-box
   cd time-box-planner
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abre tu navegador**
   Visita [http://localhost:3000](http://localhost:3000)

## 📖 Cómo Usar

### 1. Seleccionar Fecha
- Haz clic en el botón de fecha para abrir el calendario
- Navega entre meses y selecciona el día que quieres planificar

### 2. Definir Prioridades
- Escribe hasta 4 prioridades principales en la sección "Top Priorities"
- Estas son las tareas más importantes que debes completar

### 3. Brain Dump
- Usa esta sección para volcar todas tus ideas, pensamientos y tareas pendientes
- Es un espacio libre para organizar tu mente

### 4. Time Blocking
- Planifica tu día en la cuadrícula de horarios
- Cada hora tiene dos slots: :00 y :30 minutos
- Arrastra y escribe actividades en cada bloque de tiempo

### 5. Guardado Automático
- Todos los cambios se guardan automáticamente
- Puedes cerrar y abrir el navegador sin perder información
- Usa "Borrar todo" si quieres empezar de cero

## 🏗️ Arquitectura

### Principios SOLID

- **Single Responsibility**: Cada componente tiene una responsabilidad específica
- **Open/Closed**: Extensible sin modificar código existente
- **Liskov Substitution**: Componentes intercambiables
- **Interface Segregation**: Interfaces específicas y pequeñas
- **Dependency Inversion**: Dependencias de abstracciones

### Atomic Design

- **Atoms**: Componentes básicos reutilizables
- **Molecules**: Combinaciones funcionales de atoms
- **Organisms**: Secciones complejas de la interfaz
- **Templates**: Estructuras de layout
- **Pages**: Instancias específicas con datos reales

## 🔧 Personalización

### Modificar Horarios

Para cambiar el rango de horarios, edita el array `hours` en `components/organisms/TimeGrid.tsx`:

```typescript
const hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] // 6 AM - 11 PM
```

### Cambiar Número de Prioridades

Modifica el estado inicial en `hooks/usePlannerStorage.ts`:

```typescript
priorities: ["", "", "", "", ""] // 5 prioridades en lugar de 4
```

### Personalizar Estilos

Los estilos usan Tailwind CSS. Puedes modificar:
- Colores en `tailwind.config.ts`
- Componentes individuales en sus respectivos archivos
- Layout general en `components/templates/PlannerLayout.tsx`

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Ejecutar tests con coverage
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch
```

## 📦 Build y Deploy

### Build Local

```bash
npm run build
npm run start
```

### Deploy en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Deploy automático en cada push a main

### Deploy en Netlify

```bash
npm run build
# Sube la carpeta 'out' a Netlify
```

## 🤝 Contribuir

1. **Fork el proyecto**
2. **Crea una rama para tu feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit tus cambios** (`git commit -m 'Add some AmazingFeature'`)
4. **Push a la rama** (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

### Guías de Contribución

- Sigue los principios SOLID y Atomic Design
- Escribe tests para nuevas funcionalidades
- Mantén la consistencia en el código
- Documenta cambios importantes

## 📝 Roadmap

- [ ] **Múltiples Planificadores**: Gestionar varios días simultáneamente
- [ ] **Plantillas**: Plantillas predefinidas para diferentes tipos de días
- [x] **Exportar PDF**: Generar PDFs del planificador
- [ ] **Sincronización en la Nube**: Backup automático en servicios cloud
- [ ] **Recordatorios**: Notificaciones para tareas programadas
- [ ] **Vista Semanal**: Planificación de toda la semana
- [ ] **Métricas**: Análisis de productividad y tiempo
- [ ] **Temas**: Modo oscuro y temas personalizables

## 🐛 Reportar Bugs

Si encuentras un bug, por favor:

1. Verifica que no esté ya reportado en [Issues](https://github.com/joshtin2505/time-box/issues)
2. Crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si es relevante
   - Información del navegador/OS

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [MIT](LICENSE) para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@joshtin2505](https://github.com/joshtin2505)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/joshtin)
- Email: tu.email@ejemplo.com

## 🙏 Agradecimientos

- [Jesus](https://es.wikipedia.org/wiki/Jes%C3%BAs_de_Nazaret) a Dios sea toda la gloria
- [shadcn/ui](https://ui.shadcn.com/) por los componentes base
- [Lucide](https://lucide.dev/) por los iconos
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de estilos
- [Next.js](https://nextjs.org/) por el framework
- [v0.dev](https://v0.dev/) por la AI
- Comunidad de desarrolladores por feedback y contribuciones

---

⭐ **¡Si este proyecto te ayuda, considera darle una estrella!** ⭐
