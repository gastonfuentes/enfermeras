# Plan de Tareas - Landing Page Enfermeras Clínica Allende

## 📋 Resumen del Proyecto
Desarrollo de una landing page para calcular días de franco de enfermeras siguiendo el sistema 4-1 / 4-2. Las enfermeras seleccionan 4 días consecutivos de trabajo en el calendario, eligen la duración del primer franco (1 o 2 días), y el sistema calcula automáticamente el cronograma completo hasta fin de año con resumen mensual de días trabajados y días ganados.

### 🔄 Flujo de Usuario:
1. **Selección**: Enfermera selecciona 4 días consecutivos de trabajo en el calendario
2. **Configuración**: Elige duración del primer franco (1 o 2 días)
3. **Cálculo**: Sistema genera cronograma automático hasta fin de año
4. **Visualización**: 
   - Vista calendario con días coloreados (trabajo/franco)
   - Vista resumen mensual con contadores
5. **Persistencia**: Se guarda la configuración para próximas visitas

## 🎯 Tecnologías
- **Framework**: Astro JS (SPA híbrida)
- **Styling**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Lenguaje**: TypeScript estrictooooo
- **Testing**: Vitest
- **Persistencia**: localStorage

---

## 📝 Lista de Tareas Detallada

### **FASE 1: Configuración Inicial del Proyecto**

#### Tarea 1.1: Inicialización del proyecto ✅
- [x] `feat: initialize astro project with typescript`
- [x] Crear proyecto Astro con template TypeScript
- [x] Configurar estructura de carpetas inicial
- [x] Verificar que funciona correctamente

#### Tarea 1.2: Configuración de Tailwind CSS ✅
- [x] `feat: configure tailwind css integration`
- [x] Instalar @astrojs/tailwind
- [x] Configurar astro.config.mjs
- [x] Crear configuración personalizada de tailwind.config.mjs
- [x] Verificar que los estilos funcionan

#### Tarea 1.3: Configuración de shadcn/ui ✅
- [x] `feat: setup shadcn/ui components system`
- [x] Inicializar shadcn/ui en el proyecto
- [x] Configurar components.json
- [x] Instalar componentes base (Button, Card, Calendar)
- [x] Configurar aliases y paths en tsconfig.json (usando rutas relativas por compatibilidad)

#### Tarea 1.4: Configuración de Vitest
- [ ] `feat: setup testing environment with vitest`
- [ ] Instalar Vitest y dependencias de testing
- [ ] Configurar vitest.config.ts
- [ ] Crear primer test de ejemplo
- [ ] Configurar scripts de testing en package.json

---

### **FASE 2: Lógica de Negocio Central**

#### Tarea 2.1: Implementar lógica del sistema 4-1 / 4-2
- [ ] `feat: implement work schedule calculation logic`
- [ ] Crear función para validar selección de 4 días consecutivos
- [ ] Implementar algoritmo de cálculo desde 4 días + duración primer franco
- [ ] Generar patrón alternante (4 trabajo + 1 franco, 4 trabajo + 2 francos)
- [ ] Algoritmo que calcula cronograma hasta 31 diciembre
- [ ] Crear tipos TypeScript para estados de días y configuración de franco
- [ ] Escribir tests unitarios para lógica de selección y cálculo

#### Tarea 2.2: Utilidades de fechas y resúmenes
- [ ] `feat: implement date utilities and monthly summaries`
- [ ] Crear helpers para manipulación de fechas
- [ ] Funciones para navegación entre meses
- [ ] Utilidades para formateo de fechas en español
- [ ] Función para generar resumen mensual (días trabajados/días ganados)
- [ ] Tests para utilidades de fechas y cálculos de resumen

#### Tarea 2.3: Persistencia en localStorage
- [ ] `feat: implement localStorage persistence`
- [ ] Crear servicio para manejo de localStorage
- [ ] Implementar guardado/carga de 4 días consecutivos seleccionados
- [ ] Persistir duración del primer franco elegido (1 o 2 días)
- [ ] Guardar cronograma calculado para optimizar carga
- [ ] Manejo de errores y fallbacks
- [ ] Tests para persistencia

---

### **FASE 3: Componentes de UI**

#### Tarea 3.1: Componente Calendario Base
- [ ] `feat: create interactive calendar component`
- [ ] Adaptar calendario de shadcn/ui para el caso de uso
- [ ] Implementar vista mensual
- [ ] Manejo de estados de días (trabajo/franco/neutral)
- [ ] Interactividad para selección de 4 días consecutivos
- [ ] Validación visual de selección consecutiva
- [ ] Prevenir selección de días no consecutivos

#### Tarea 3.2: Componente de Navegación de Meses
- [ ] `feat: implement month navigation`
- [ ] Flechas para navegar entre meses
- [ ] Select/dropdown para salto rápido de meses
- [ ] Indicador del mes actual
- [ ] Límites de navegación (hasta diciembre del año actual)

#### Tarea 3.3: Componente de Selección de Duración de Franco
- [ ] `feat: create franco duration selection component`
- [ ] Componente para elegir duración del primer franco tras seleccionar 4 días
- [ ] Radio buttons para "1 día de franco" / "2 días de franco"
- [ ] Validación y confirmación de selección
- [ ] Integración con shadcn/ui Card/RadioGroup components
- [ ] Botón para calcular cronograma

#### Tarea 3.4: Componente de Resumen Mensual
- [ ] `feat: create monthly summary component`
- [ ] Componente que muestra resumen por mes
- [ ] Contadores de días trabajados y días ganados (francos)
- [ ] Navegación entre meses del resumen
- [ ] Integración con shadcn/ui Table/Card components
- [ ] Formato visual claro y responsive

#### Tarea 3.5: Leyenda y Indicadores
- [ ] `feat: create legend and status indicators`
- [ ] Componente de leyenda con colores identificativos
- [ ] Indicadores visuales claros
- [ ] Información contextual del sistema 4-1/4-2
- [ ] Responsive design para la leyenda

#### Tarea 3.6: Layout Principal
- [ ] `feat: implement main layout and header`
- [ ] Header con branding de Clínica Allende
- [ ] Layout responsive
- [ ] Estructura de la página principal
- [ ] Navegación y organización visual

---

### **FASE 4: Integración y Refinamiento**

#### Tarea 4.1: Integración de componentes
- [ ] `feat: integrate all components in main page`
- [ ] Conectar calendario con lógica de negocio
- [ ] Implementar flujo completo: selección 4 días → duración franco → cálculo
- [ ] Sincronización entre calendario, selector de franco y resumen
- [ ] Manejo de estados globales para cronograma calculado
- [ ] Navegación fluida entre vista calendario y vista resumen
- [ ] Testing del flujo completo de selección y cálculo

#### Tarea 4.2: Responsive Design
- [ ] `feat: implement responsive design`
- [ ] Optimización para mobile (320px+)
- [ ] Tablet (768px+)
- [ ] Desktop (1024px+)
- [ ] Testing en diferentes tamaños de pantalla

#### Tarea 4.3: Accesibilidad
- [ ] `feat: implement accessibility features`
- [ ] ARIA labels y roles apropiados
- [ ] Navegación por teclado
- [ ] Contraste de colores adecuado
- [ ] Screen reader compatibility

#### Tarea 4.4: Localización ES-AR
- [ ] `feat: implement spanish argentina localization`
- [ ] Todos los textos en español argentino
- [ ] Formato de fechas local
- [ ] Nombres de meses y días en español
- [ ] Mensajes de error y confirmación

---

### **FASE 5: Testing y Optimización**

#### Tarea 5.1: Tests de Integración
- [ ] `test: implement integration tests`
- [ ] Tests end-to-end del flujo principal
- [ ] Verificación de persistencia
- [ ] Tests de navegación entre meses
- [ ] Validación de cálculos de fechas

#### Tarea 5.2: Tests de Componentes
- [ ] `test: implement component tests`
- [ ] Tests unitarios de cada componente
- [ ] Tests de interacciones de usuario
- [ ] Verificación de estados y props
- [ ] Mocking de dependencias

#### Tarea 5.3: Optimización de Performance
- [ ] `perf: optimize performance and bundle size`
- [ ] Análisis de bundle size
- [ ] Lazy loading donde sea apropiado
- [ ] Optimización de re-renders
- [ ] Medición de Core Web Vitals

#### Tarea 5.4: Testing Cross-browser
- [ ] `test: cross-browser compatibility testing`
- [ ] Verificación en Chrome, Firefox, Safari
- [ ] Testing en dispositivos móviles
- [ ] Verificación de funcionalidades en diferentes navegadores

---

### **FASE 6: Finalización**

#### Tarea 6.1: Documentación
- [ ] `docs: create project documentation`
- [ ] README con instrucciones de instalación
- [ ] Documentación de componentes
- [ ] Guía de uso para enfermeras
- [ ] Documentación técnica

#### Tarea 6.2: Deploy y Configuración
- [ ] `feat: setup deployment configuration`
- [ ] Configuración para deploy (Netlify/Vercel)
- [ ] Variables de entorno si es necesario
- [ ] Configuración de dominio
- [ ] Testing en producción

#### Tarea 6.3: Refinamientos Finales
- [ ] `refactor: final polish and refinements`
- [ ] Revisión de código y refactoring
- [ ] Optimización de UX basada en feedback
- [ ] Ajustes de diseño final
- [ ] Verificación de todos los requerimientos

---

## 🔄 Metodología de Trabajo

1. **Una tarea a la vez**: Cada tarea se completa antes de pasar a la siguiente
2. **Commits atómicos**: Cada tarea = un commit con convención Conventional Commits
3. **Testing continuo**: Cada funcionalidad viene con sus tests correspondientes
4. **Revisión por fases**: Al final de cada fase, revisión general antes de continuar

## 📋 Checklist de Aceptación Final

- [ ] ✅ Selección de 4 días consecutivos de trabajo en calendario
- [ ] ✅ Interfaz para elegir duración del primer franco (1 o 2 días)
- [ ] ✅ Cálculo automático del cronograma hasta fin de año
- [ ] ✅ Calendario funcional con sistema 4-1/4-2 visualizado
- [ ] ✅ Resumen mensual de días trabajados y días ganados
- [ ] ✅ Navegación fluida entre meses del calendario
- [ ] ✅ Navegación entre vista calendario y vista resumen
- [ ] ✅ Persistencia de datos funcionando (4 días + duración franco)
- [ ] ✅ Diseño responsive y accesible
- [ ] ✅ Todos los textos en español argentino
- [ ] ✅ Tests pasando al 100%
- [ ] ✅ Performance optimizada
- [ ] ✅ Deploy funcionando correctamente

---

## 🚀 ¿Listo para empezar?

Por favor, revisa este plan y aprueba las fases/tareas que consideres correctas, sugiere modificaciones si es necesario, y luego podremos comenzar con la **Fase 1: Configuración Inicial del Proyecto**. 