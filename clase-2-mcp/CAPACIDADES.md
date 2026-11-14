# Capacidades del agente MCP

## 1. Playwright MCP
- Permitió interactuar con el navegador y la tienda MiniModa.
- Se utilizó para explorar el proyecto y apoyar la creación del caso de prueba.
- Sus resultados dependen de los elementos disponibles en la página.

## 2. MCP propio: casos-de-prueba
- Se creó un servidor MCP utilizando Node.js y el SDK oficial de MCP.
- Se registró en Codex y aparece como conectado.
- Incluye dos herramientas:
  - `crear_caso_prueba`: crea y guarda casos de prueba en archivos Markdown dentro de la carpeta `casos/`.
  - `listar_casos`: permite consultar los casos guardados.

## 3. Caso generado
Se creó el caso:
- Agregar producto con stock al carrito en MiniModa.

El archivo contiene título, requisito, pasos, datos, resultado esperado y prioridad.

## 4. Límites encontrados
- Al principio hubo problemas de permisos de PowerShell y conexión durante la instalación.
- Fue necesario ejecutar Codex mediante `codex.cmd`.
- El agente requiere autorización para ejecutar determinadas herramientas.
## 5. Tiempo ahorrado

- **Tiempo estimado manualmente:** entre 15 y 20 minutos para explorar, diseñar, redactar y documentar el caso de prueba.
- **Tiempo con nuestro MCP:** Codex tardó 1 minuto y 10 segundos en generar y guardar el caso.
- **Ahorro potencial:** el MCP agiliza considerablemente la creación y documentación de casos de prueba.

**Nota:** El tiempo de 1 minuto y 10 segundos corresponde a la generación del caso, no a la ejecución y validación completa de la prueba.

## 6. Caso negativo generado con MCP

- **Herramienta utilizada:** `crear_caso_prueba`.
- **Caso:** MM-MCP-002 – Intentar agregar al carrito más unidades que el stock disponible.
- **Producto:** Body Manga Larga Estrellitas ($8.500).
- El MCP generó el caso base con el requisito, los pasos, los datos, el resultado esperado y la prioridad.
- **Corrección manual:** se agregó el ID MM-MCP-002, las precondiciones y se reorganizaron las secciones del caso.

### Ejecución y resultado observado

- **Stock observado:** 12 unidades.
- **Cantidad ingresada:** 13 unidades.
- **Resultado esperado:** impedir agregar una cantidad superior al stock disponible.
- **Resultado observado:** MiniModa permitió avanzar hasta Checkout mostrando 13 unidades.
- **Subtotal:** $110.500.
- **Envío:** $3.500.
- **Total estimado:** $114.000.
- **Conclusión:** el comportamiento observado no cumple el resultado esperado.
- **Evidencia:** `evidencia/04-caso-negativo-checkout.png`.
- El pago no se completó; por tanto, no se verificó la finalización de la compra.

### Aprendizaje

El MCP permite generar y guardar casos de prueba, pero el criterio de QA sigue siendo necesario para revisar, completar, ejecutar y documentar los resultados reales.

### Comparación de tiempo – Caso negativo MM-MCP-002

- **Tiempo manual:** 10 minutos y 8 segundos.
- **Tiempo con MCP:** 54 segundos, incluyendo creación, guardado y corrección del caso.
- **Tiempo ahorrado:** 9 minutos y 14 segundos.
- **Reducción del tiempo:** aproximadamente 91,1 %.

Esta medición corresponde al proceso de creación y documentación del caso negativo. No incluye la ejecución y validación de la prueba.

