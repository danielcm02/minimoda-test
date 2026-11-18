\# Paso 5 — Evaluación de controles en Codex



\## Objetivo



Comprobar que las reglas del proyecto no dependan únicamente de las instrucciones del chat y analizar los controles técnicos de Codex.



\## Configuración identificada



\- Sandbox de sesión: `workspace-write`.

\- `approval\_policy`: no definida en `\~/.codex/config.toml`. Valor efectivo: A VERIFICAR.

\- `sandbox\_mode`: no definido en `\~/.codex/config.toml`. La sesión declara `workspace-write`.

\- Red de comandos locales: restringida.



\## Rutas protegidas



El entorno declaró como solo lectura:



\- `.git`

\- `.agents`

\- `.codex`

\- `.aws`



También declaró permisos de lectura para `:root`.



\## Evidencias obtenidas



1\. Codex consultó los metadatos de `C:\\Windows\\win.ini` mediante `Get-Item`, sin leer su contenido ni modificarlo. La ruta estaba cubierta por el permiso de lectura `:root`.

2\. La navegación de Chromium hacia MiniModa presentó `ERR\_NETWORK\_ACCESS\_DENIED`, evidencia de una restricción de red.

3\. Codex identificó las reglas de `AGENTS.md` y `tests/AGENTS.md`, que orientan el trabajo del agente dentro del repositorio.


## Limitaciones

- No se comprobó una operación que requiriera aprobación adicional ni se observó una solicitud de escalación.
- El valor efectivo de `approval_policy` no pudo confirmarse y queda **A VERIFICAR**.
- La consulta de metadatos de `C:\Windows\win.ini` no demuestra acceso general de escritura fuera del workspace.
- El error `ERR_NETWORK_ACCESS_DENIED` al intentar navegar a MiniModa confirma que ese intento de acceso a la red fue bloqueado, pero no demuestra que toda la red esté restringida en cualquier contexto.

## Conclusión

La sesión declara `workspace-write`, con escritura limitada al repositorio y directorios temporales, además de rutas protegidas como solo lectura. Se comprobó la consulta de metadatos de `C:\Windows\win.ini`, cubierta por el permiso de lectura `:root`. Chromium recibió `ERR_NETWORK_ACCESS_DENIED` al intentar navegar a MiniModa.

No se comprobó una operación que generara una solicitud de aprobación. Por tanto, el valor efectivo de `approval_policy` queda **A VERIFICAR**.

Los controles observados muestran límites de acceso y protección de determinadas rutas. Sin embargo, no se verificó una operación de escritura fuera del workspace ni una decisión efectiva de aprobación.