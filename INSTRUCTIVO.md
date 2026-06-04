# Instructivo — Política de Debida Diligencia de Proveedores

**Herramienta:** `proyecto-politicas.vercel.app/v2/`  
**Audiencia:** CS de Plutto · Comprador del proyecto · Equipos de Abastecimiento, Cumplimiento, Finanzas, Legal

---

## ¿Qué es esto?

Es una herramienta colaborativa para construir la **política de due diligence de proveedores** de tu empresa. En lugar de entregar un documento estático, cada equipo participa activamente: revisa su especialidad, define la severidad de sus alertas y da su visto bueno.

El resultado es una política co-construida, alineada entre áreas y lista para operar en Plutto.

---

## Cómo está estructurada

La herramienta tiene **13 pantallas** organizadas en 3 fases:

| Fase | Quién actúa | Qué pasa |
|------|-------------|----------|
| **1 — Panorama general** | Comprador del proyecto | Inicia la sesión, selecciona procesos y áreas participantes |
| **2 — Revisión por área** | Cada equipo (asincrónico) | Revisa su especialidad, ajusta severidad de alertas, comenta |
| **3 — Alineación final** | Todo el equipo (en vivo) | Revisan lo acordado por cada área y cierran la política |

---

## Paso a paso

### FASE 1 · Comprador del proyecto

#### 1. Iniciar la sesión (Pantalla 1)

1. Ingresar a `proyecto-politicas.vercel.app/v2/`
2. Escribir el **nombre de la empresa** y tu **email**
3. Hacer click en **Comenzar sesión →**
4. Aparece un link de sesión — **copiar y compartir** ese link con todos los equipos que participarán

> El link es permanente y único para la empresa. Cualquier persona que lo abra verá y editará la misma sesión en tiempo real.

#### 2. Recorrer el contexto (Pantallas 2–4)

Navegar con las flechas `→` del pie de pantalla (o teclas `←` `→`):

- **Pantalla 2** — Por qué una política de DD es necesaria y qué leyes la exigen
- **Pantalla 3** — Los 5 procesos de evaluación que recomienda Plutto
- **Pantalla 4** — Qué documentos se le piden al proveedor según el proceso

Estas pantallas son informativas. No requieren acción.

#### 3. Configurar la política (Pantalla 5 — Owner del proyecto)

Esta es la pantalla más importante de la Fase 1. El comprador define:

**Procesos activos:**
Activar o desactivar cada tipo de evaluación según la realidad de la empresa.

| Proceso | Cuándo aplica |
|---------|--------------|
| Proveedor Spot | Compras menores a USD 20.000 |
| Proveedor General | Compras entre USD 20.000 y USD 100.000 |
| Proveedor de Servicios | Servicios con personal en faena (Ley 20.123) |
| Proveedor Crítico | Compras mayores a USD 100.000 |
| Proveedor Internacional | Proveedor con domicilio fuera de Chile |

> Recomendación: activar todos los que apliquen al modelo de compras de la empresa. Se pueden ajustar después.

**Áreas que participan:**
Activar cada equipo que revisará a los proveedores. Si la empresa no tiene un área separada de Legal, desactivarla — sus alertas quedarán sin revisor.

> Mínimo recomendado: **Abastecimiento + Cumplimiento**.

#### 4. Revisar el flujo de trabajo (Pantalla 6)

La pantalla muestra quién hace qué en cada fase. El comprador puede mostrarla al equipo como introducción antes de arrancar la Fase 2.

---

### FASE 2 · Revisión por área (asincrónica)

Cada equipo accede al **mismo link de sesión** y navega hasta su pantalla. No es necesario estar todos conectados al mismo tiempo.

#### Pantallas disponibles por área

| Pantalla | Área | Acceso |
|----------|------|--------|
| 7 | Abastecimiento | Navegar hasta "1 de 5" |
| 8 | Cumplimiento | Navegar hasta "2 de 5" |
| 9 | Finanzas | Navegar hasta "3 de 5" |
| 10 | Legal | Navegar hasta "4 de 5" |
| 11 | Subcontratación | Navegar hasta "5 de 5" |

#### Qué hace cada área en su pantalla

**1. Ver el resumen de otras áreas (parte superior)**  
Antes de revisar sus propias alertas, cada área ve en tiempo real qué decidieron las demás. Esto permite contexto antes de opinar.

**2. Revisar las 23 alertas**  
La herramienta muestra las 23 alertas agrupadas por temática (Tributario, Financiero, Legal, Laboral, Cumplimiento).

- **Alertas propias** (resaltadas): el área puede activar/desactivar, cambiar la severidad y dejar un comentario explicando su criterio.
- **Alertas de otras áreas** (solo lectura): visibles para entender el contexto general pero no editables.

**Niveles de severidad:**

| Nivel | Significado |
|-------|-------------|
| **Leve** | Se registra pero no bloquea el proceso |
| **Media** | Requiere revisión adicional del área responsable |
| **Grave** | El área responsable **debe** revisar al proveedor antes de aprobarlo — actúa como revisor activo del proceso |

> Importante: marcar una alerta como **Grave** implica que el área se compromete a revisar manualmente cada proveedor que la active. Debe ser una decisión consciente.

**3. Dejar decisión y notas**  
Al final de cada pantalla de área:

- Completar nombre y email del encargado
- Seleccionar decisión: **Aprobado / Rechazado / Con observaciones**
- Escribir observaciones, propuestas de cambio o documentos adicionales que el área quiera solicitar
- Hacer click en **Guardar sección**

> Una sección guardada queda bloqueada. Si se necesita modificar, hacer click en **Editar**.

---

### FASE 3 · Sesión de alineación final (Pantalla 12)

Con todos los equipos presentes (presencial o videoconferencia), navegar hasta la pantalla 12.

**Qué muestra:**

- **Resumen de decisiones**: estado de cada área (Aprobado / Con observaciones / Pendiente)
- **Perspectiva de cada área sobre sus alertas**: qué activó cada equipo y con qué severidad — base para el debate
- **Alertas configuradas**: la lista final de alertas activas con su nivel
- **Notas finales de alineación**: campo libre para registrar acuerdos, excepciones o próximos pasos

**Cómo usarla:**

1. Revisar las áreas que quedaron "Con observaciones" — discutir y ajustar si es necesario
2. Revisar las perspectivas por área: si Finanzas marcó una alerta como Grave y Cumplimiento la dejó en Leve, debatir cuál queda
3. Escribir en el campo de notas finales los acuerdos clave
4. Hacer click en **Enviar reporte** — el equipo Plutto recibirá el registro completo

---

## Guía rápida por rol

### Si eres CS de Plutto

1. Compartir el link de la herramienta al comprador antes de la primera reunión
2. En la primera reunión, abrir la herramienta juntos y recorrer pantallas 1–6 (30 min)
3. Configurar Fase 1 (pantalla 5) con el comprador: qué procesos y áreas aplican
4. Copiar el link de sesión y enviar a cada área con instrucciones simples (ver template abajo)
5. Dar 3–5 días hábiles para que cada área complete su pantalla de forma independiente
6. Agendar sesión de alineación final (Fase 3) con todos los equipos — 45–60 min

**Template de email para áreas:**

> Hola [nombre],
>
> Estamos construyendo la política de due diligence de proveedores de [empresa] con Plutto.
>
> Necesito que entres al siguiente link y completes la sección de **[área]** antes del [fecha]:
> 👉 [link de sesión]
>
> Solo tienes que revisar las alertas de tu especialidad, ajustar su severidad y dejar tu visto bueno. No toma más de 20 minutos.
>
> Si tienes dudas, escríbeme.

---

### Si eres el Comprador del proyecto

1. Abrir `proyecto-politicas.vercel.app/v2/` e ingresar nombre de empresa y email
2. Navegar las pantallas 2–4 para entender el contexto (puedes hacerlo antes de la reunión con Plutto)
3. En pantalla 5, activar los procesos que aplican a tu empresa y las áreas que participarán
4. Copiar el link de sesión y enviarlo a los encargados de cada área
5. Asistir a la sesión de alineación final (pantalla 12) con todo el equipo

---

### Si eres un área revisora (Abastecimiento / Cumplimiento / Finanzas / Legal / Subcontratación)

1. Abrir el link que te enviaron
2. Navegar con `→` hasta llegar a tu pantalla (verás el nombre de tu área en el encabezado)
3. Revisar las alertas de tu competencia — las que puedes editar aparecen con toggle y selector de severidad
4. Para cada alerta activa: confirmar o cambiar la severidad y, si aplica, dejar un comentario explicando tu criterio
5. Revisar el resumen de otras áreas (parte superior) para entender el contexto general
6. Completar tu nombre, email, decisión y observaciones al final de la pantalla
7. Hacer click en **Guardar sección**

---

## Preguntas frecuentes

**¿Puedo entrar y salir del link sin perder lo que hice?**  
Sí. El estado se guarda automáticamente cada vez que haces un cambio, tanto en tu dispositivo como en la sesión compartida.

**¿Pueden estar dos personas editando al mismo tiempo?**  
Sí. Cada área edita su propia sección. Si dos personas del mismo equipo editan simultáneamente, la última acción guardada es la que queda.

**¿Qué pasa si desactivo un área en la pantalla 5?**  
Esa área desaparece del flujo de navegación. Sus alertas no tendrán revisor. Se puede reactivar en cualquier momento volviendo a la pantalla 5.

**¿Qué significa "Con observaciones"?**  
El área aprueba el proceso pero con condiciones o comentarios que deben quedar registrados. Se discuten en la sesión de alineación final.

**¿Dónde queda el reporte?**  
Al enviar (pantalla 12 o 13), el equipo Plutto recibe el reporte completo con todas las decisiones, alertas configuradas y notas finales. También queda registrado en Google Sheets.

**¿Se puede usar la herramienta en diferentes momentos sin coordinar?**  
Sí, así está diseñada. Cada área puede completar su sección cuando tenga tiempo. La pantalla 12 consolida todo al final.

**¿Qué pasa si cambié de opinión después de guardar?**  
Hacer click en **Editar** en tu sección, hacer los cambios y guardar de nuevo. Queda registrado como "Guardado · editado".

---

## Resumen visual del flujo

```
Comprador del proyecto
        │
        ▼
  [1] Iniciar sesión
        │
        ▼
  [2–4] Contexto (informativo)
        │
        ▼
  [5] Configurar: procesos + áreas activas
        │
        ▼
  [6] Explicar el flujo al equipo
        │
        ├──────────────────────────────────┐
        ▼                                  ▼
[7] Abastecimiento              [8] Cumplimiento
        │                                  │
        ▼                                  ▼
[9] Finanzas                    [10] Legal
        │                                  │
        └──────────┬───────────────────────┘
                   ▼
         [11] Subcontratación
                   │
                   ▼
    [12] Sesión sincronizada (todo el equipo)
                   │
                   ▼
       Enviar reporte → Plutto registra
```

---

*Última actualización: junio 2026 — Plutto*
