# Guía de uso — Constructor de Política de Debida Diligencia de Proveedores

Herramienta: `proyecto-politicas.vercel.app/v2`
Audiencia: equipo de CS / Implementación de Plutto.

Esta guía cubre **cuándo** usar la herramienta, **cómo** correrla en un kickoff y **qué hacer** si el cliente no tiene una política previa.

---

## 1. Qué es

Un configurador colaborativo que ayuda al cliente a **definir su política de Debida Diligencia (DD) de proveedores**: qué tipos de evaluación aplica, qué áreas revisan cada proceso, qué alertas vigila y con qué severidad, qué documentos exige y quién es responsable de cada decisión.

El resultado es un **documento de política formal** generado automáticamente (vía n8n + IA) más un **análisis de coherencia** que detecta brechas y calibración.

No reemplaza el criterio del cliente: lo estructura, lo deja explícito y lo deja por escrito.

---

## 2. Cuándo usarla

**Úsala cuando:**
- El cliente está **onboarding** y necesita definir cómo va a evaluar proveedores antes de operar Plutto.
- El cliente tiene un proceso de compras **informal o disperso** (cada área pide cosas distintas, sin criterio común).
- Hay **varias áreas involucradas** (Abastecimiento, Cumplimiento, Finanzas, Legal) y necesitan alinearse.
- El cliente debe **cumplir normativa** (Ley 20.393, 19.913 UAF/LAFT, 20.123 subcontratación, 21.595 delitos económicos) y necesita evidencia de un proceso de DD documentado.
- Quieres pasar de "lo hacemos caso a caso" a una **política repetible y auditable**.

**No es el mejor fit cuando:**
- El cliente ya tiene una política madura y **solo quiere cargarla** → en ese caso úsala para *digitalizar/validar*, no para construir de cero (ver sección 5).
- Es una compra única y aislada sin intención de estandarizar.
- Aún no hay un sponsor interno que pueda convocar a las áreas (sin dueños, la sesión queda a medias).

---

## 3. Cómo aplicarla en un kickoff

### Antes de la sesión (preparación)
1. **Identifica al Owner** del proyecto del lado del cliente (normalmente Abastecimiento/Compras o Riesgo). Es quien arranca la configuración.
2. **Confirma qué áreas participan**: Abastecimiento, Cumplimiento, Finanzas, Legal. Consigue nombre + email de un responsable por área.
3. Genera el **link de sesión** (la herramienta lo arma con el nombre de la empresa). Compártelo con el Owner.
4. Agenda 60–90 min con el Owner presente; las áreas pueden completar su parte de forma asincrónica después.

### Durante la sesión — las 3 fases

**Fase 1 — Panorama general (Owner, en vivo)**
- El Owner activa los **tipos de evaluación** que aplican (Spot, General, Crítico, Internacional, Subcontratación) y puede agregar procesos personalizados.
- Define la **matriz proceso × área**: marca qué áreas revisan cada tipo de proceso. *Por defecto vienen todas apagadas* — se activan solo las que aplican.
- Tip: si dudan, parte mínimo. Es más fácil sumar un área que justificar una de más.

**Fase 2 — Revisión por área (cada área, asincrónica)**
Cada área entra a su sección y define:
- **Alertas**: cuáles activar y con qué severidad (Leve = se registra · Media = requiere revisión · Grave = el área actúa como revisor). Hay un comentario por categoría (Tributario, Financiero, Legal y Societario, Laboral, Cumplimiento).
- **Revisión documental**: confirma / observa / descarta cada documento por proceso, y puede proponer documentos adicionales.
- **Encargado del área** (obligatorio) + **revisores de alertas graves** (con sus categorías).
- **Observaciones** del área.

**Fase 3 — Alineación final (todo el equipo, en vivo)**
- Revisan el resumen consolidado: alertas activas por área, estado de cada área, gaps.
- Dejan **notas de alineación** y cierran.
- Al enviar, el reporte va al equipo Plutto y se dispara la generación del **documento de política + análisis de coherencia**.

### Después de la sesión
- Revisa el **análisis de coherencia** (IA-1): madurez, brechas y ajustes recomendados.
- Entrega el **documento de política** (IA-2) al cliente como borrador formal para aprobación interna.
- Itera si el análisis marca brechas (áreas sin encargado, procesos sin revisor, severidades mal calibradas).

---

## 4. Cómo leer los resultados

| Señal | Qué significa | Acción |
|-------|---------------|--------|
| **Gaps estructurales** | Procesos sin área asignada o áreas sin encargado | Resolver antes de cerrar — la política queda incompleta |
| **Madurez Baja/Media** (IA-1) | Config poco desarrollada o incoherente | Revisar brechas y ajustes recomendados con el cliente |
| **Muchas alertas Graves** | Política muy estricta (puede frenar operación) | Validar que la severidad sea proporcional al riesgo real |
| **Pocas/ninguna alerta activa** | Política laxa | Confirmar que sea decisión consciente, no descuido |

---

## 5. Si el cliente NO tiene política previa

Es el escenario **más común** y para el que la herramienta está pensada. La idea no es que el cliente "ya sepa": es **construir con él** durante la sesión.

**Cómo guiarlo:**

1. **Parte por el riesgo, no por el documento.** Pregunta: *"¿qué te haría NO querer trabajar con un proveedor?"*. Esas respuestas son las alertas graves.

2. **Usa los defaults como punto de partida.** Cada alerta trae una **severidad recomendada por Plutto** basada en normativa chilena. Si el cliente no tiene opinión, partan con la recomendación y ajusten.

3. **Segmenta por monto/criticidad.** La mayoría parte con 2–3 tipos:
   - **Spot** (compra menor) → DD mínima, fricción baja.
   - **General** (monto medio) → DD robusta.
   - **Crítico** (monto alto) → DD exhaustiva.
   Agrega Internacional o Subcontratación solo si aplican a su realidad.

4. **Asigna áreas de forma conservadora.** Si el cliente es chico y "una sola persona ve todo", está bien: asigna esa persona como encargado/revisor en las categorías que correspondan. La herramienta soporta que un revisor cubra varias categorías.

5. **No busques perfección en la sesión 1.** El objetivo del kickoff es dejar una **v1 razonable y documentada**. El análisis de coherencia te dirá qué afinar después.

6. **Apóyate en el documento generado.** Para un cliente sin política, el documento de IA-2 es muchas veces *su primera política escrita*. Entrégalo como entregable de valor del onboarding.

**Frases útiles para destrabar:**
- *"No tienes que tener todo claro hoy; vamos a dejar una base y la afinamos."*
- *"¿Esto te frena la compra o solo lo quieres saber?"* → distingue Grave de Leve.
- *"¿Quién en tu equipo debería enterarse si esto aparece?"* → define el revisor.

---

## 6. Errores comunes a evitar

- **Activar todas las áreas en todos los procesos** "por si acaso" → genera trabajo y revisores que no aportan. Asigna solo lo que aplica.
- **Cerrar sin encargados definidos** → el reporte queda inválido y la política no tiene dueños.
- **Marcar todo como Grave** → vuelve la política impracticable; reserva Grave para lo que realmente bloquea.
- **Saltarse la Fase 3** → sin la alineación final no hay acuerdo de equipo, solo opiniones sueltas por área.

---

*Última actualización: junio 2026.*
