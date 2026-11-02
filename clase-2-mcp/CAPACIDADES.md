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
