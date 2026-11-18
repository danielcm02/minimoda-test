\# Paso 6 — Evaluación de Playwright MCP



\## 1. Fuente



Repositorio oficial: https://github.com/microsoft/playwright-mcp



Playwright MCP es un servidor que conecta asistentes de IA con el navegador mediante Model Context Protocol (MCP). Permite explorar e interactuar con páginas web usando Playwright y snapshots estructurados de accesibilidad.



No debe confundirse con Playwright Test, que es el runner utilizado para ejecutar pruebas automatizadas.



\## 2. Permisos y acceso



\- Permite navegar por páginas web e interactuar con elementos del navegador.

\- Puede hacer clic, escribir, completar formularios y seleccionar opciones.

\- Puede inspeccionar solicitudes de red y simular respuestas.

\- Por defecto, restringe el acceso a archivos a las raíces del workspace o al directorio de trabajo configurado.

\- La opción `--allow-unrestricted-file-access` permite ampliar el acceso a archivos fuera de esas raíces.

\- La herramienta `browser\_run\_code\_unsafe` permite ejecutar JavaScript arbitrario y tiene riesgos equivalentes a ejecución remota de código (RCE).



Los permisos efectivos dependen de la configuración del servidor y del cliente MCP.



\## 3. Beneficios



1\. \*\*Exploración estructurada:\*\* utiliza snapshots del árbol de accesibilidad para identificar roles, nombres y elementos de la interfaz.

2\. \*\*Automatización del navegador:\*\* permite navegar, hacer clic, completar campos y probar flujos de usuario.

3\. \*\*Análisis de red:\*\* permite observar solicitudes y simular respuestas para investigar comportamientos de una aplicación.



\## 4. Riesgos



1\. \*\*Control del navegador:\*\* el agente puede realizar acciones sobre páginas web, incluidos formularios y otros elementos interactivos.

2\. \*\*Acceso a archivos:\*\* una configuración permisiva puede ampliar el acceso fuera del workspace.

3\. \*\*Ejecución de código:\*\* `browser\_run\_code\_unsafe` permite ejecutar JavaScript arbitrario y representa un riesgo importante si se utiliza con clientes o código no confiables.



\## 5. Decisión



\*\*Decisión: NO INSTALAR por ahora.\*\*



La práctica ya utiliza Playwright Test para automatizar los casos PAGO-01 y PAGO-0X. Incorporar Playwright MCP agregaría otra herramienta y permisos de navegador que no son necesarios para completar esta actividad.



La decisión no significa que Playwright MCP sea inseguro en todos los escenarios. Significa que, para el alcance actual, sus capacidades adicionales no justifican incorporar nuevos permisos y riesgos.



Antes de una futura instalación, sería necesario revisar la configuración, limitar el acceso a archivos y dominios, y evaluar cuidadosamente las herramientas habilitadas.



\## Fuente consultada



Repositorio oficial de Microsoft:

https://github.com/microsoft/playwright-mcp



README y documentación de configuración y permisos.

