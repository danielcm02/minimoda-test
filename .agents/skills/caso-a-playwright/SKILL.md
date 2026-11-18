

\---

name: caso-a-playwright

description: Convierte casos de prueba documentados en tests de Playwright.

\---



\# Skill: caso-a-playwright



\## Entrada

\- ID del caso de prueba.

\- Pasos para ejecutar el caso.

\- Datos de prueba.

\- Resultado esperado confirmado.



\## Procedimiento

1\. Leer el caso documentado.

2\. Revisar las reglas de AGENTS.md y tests/AGENTS.md.

3\. Identificar los pasos y datos necesarios.

4\. Convertir el caso en un test de Playwright.

5\. Utilizar getByRole o getByLabel para localizar elementos.

6\. Comprobar el resultado mediante assertions de la interfaz.

7\. No inventar mensajes ni comportamientos que no estén confirmados.



\## Restricciones

\- Trabajar únicamente con la demo de MiniModa.

\- Utilizar datos sintéticos.

\- Si falta información, indicar A VERIFICAR.

\- No utilizar toBeTruthy() como assertion del resultado.

\- No utilizar waitForTimeout.



\## Salida

Un test de Playwright con:

\- ID del caso.

\- Pasos reproducibles.

\- Datos de prueba.

\- Assertions del resultado esperado.

\- Dudas explícitas cuando corresponda.



