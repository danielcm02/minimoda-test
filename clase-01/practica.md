# Práctica clase 01: casos del registro de MiniModa con IA

**Sitio:** https://minimoda-navy.vercel.app/registro

> Así tiene que quedar tu entrega. Reemplazá cada `___tu respuesta aquí___` con lo tuyo.

## 1. Preparación
- Navegador y fecha: Google Chrome – 31/10/2026

## 2. Superficie elegida
- Elegí (chat o cowork): Chat
- Por qué: Elegí Chat porque permite interactuar directamente con la IA desde una interfaz web, sin utilizar la terminal. Es una opción sencilla para realizar las consultas de la práctica.

## 3. Preguntas a Gemini
| # | Pregunta | Respuesta (resumen) | ¿Acierto o error/invento? |
|---|----------|---------------------|---------------------------|
| 1 | ¿Qué campos pide el formulario de registro de https://minimoda-navy.vercel.app/registro? |Identificó los 7 campos: nombre, email, contraseña, confirmar contraseña, edad, país y aceptación de términos. | Acierto: identificó correctamente todos los campos y sus indicaciones. |
| 2 | ¿Cuál es el largo mínimo de la contraseña y qué edad se permite? | Identificó un mínimo de 8 caracteres para la contraseña y un rango de edad de 13 a 120 años. | Acierto: ambos valores coinciden con las indicaciones del formulario. |
| 3 | ¿Qué pasa si no acepto los términos? | Indicó que el registro se bloquea y que aparece un mensaje de validación. | Parcialmente correcto: identificó el bloqueo, pero no reprodujo el mensaje exacto observado: «Debés aceptar los términos». |

- Un acierto: Identificó correctamente los siete campos del formulario y las reglas de contraseña y edad.
- Un error o invento: No identificó correctamente el mensaje exacto de validación de los términos.

## 4. Primer modo
- Superficie y modo: ChatGPT – Chat.
- Prompt de ejemplo:
  ```
  Sos QA. Vamos a probar el registro de https://minimoda-navy.vercel.app/registro
  Campos: nombre, email, contraseña, confirmar contraseña, edad, país y aceptar términos.
  1. Listá las reglas que se ven, los datos válidos e inválidos y los valores límite.
  2. Escribí 6 casos de prueba con: título, precondiciones, pasos con datos concretos,
     resultado esperado, prioridad (high/medium/low) y tipo (functional/negative/boundary).
  No inventes mensajes: si no sabés el texto exacto, marcalo "A VERIFICAR".
  ```
- Qué devolvió: Generó 6 casos de prueba: registro exitoso, contraseña inferior al mínimo, contraseña en el límite mínimo, edad inferior al mínimo, edad en el límite mínimo y registro sin aceptar términos. Incluyó precondiciones, pasos, datos concretos, resultados esperados, prioridades y tipos de prueba. Marcó como A VERIFICAR los comportamientos y mensajes que no estaban confirmados.

## 5. Otra superficie: comparación en 3 líneas
1. Velocidad: Work mostró un tiempo de trabajo de 1 minuto y 6 segundos. En Chat no se registró el tiempo, por lo que no es posible realizar una comparación exacta.
2. Calidad de casos: Chat generó casos más completos y coherentes con las reglas observadas. Work omitió el campo nombre y no identificó el rango de edad permitido.
3. Cosas inventadas: Work utilizó edad 10 como dato válido, aunque el formulario establece un rango de 13 a 120. También dejó varias reglas sin identificar y marcó resultados como A VERIFICAR.

## 6. Mis 3 mejores casos (cargados en Qase, proyecto MiniModa)
Formato del título: `Registro: <qué se prueba>`
Captura de la suite en Qase con tus casos: `evidencias/qase-suite-casos.png`

### Caso 1: Registro exitoso con datos válidos.
- Precondiciones: La página de registro de MiniModa está disponible. Se utilizarán datos ficticios y válidos para completar el formulario.
- Pasos: Ingresar nombre Ana Pérez, email ana.prueba@example.com, contraseña Moda1234, confirmar contraseña Moda1234, edad 25, seleccionar Argentina, marcar la casilla de términos y pulsar "Crear cuenta".

- Resultado esperado: El formulario acepta los datos y permite completar el registro sin errores de validación. Mensaje final: ¡Registro exitoso! Bienvenido/a a MiniModa, ANA PEREZ. Te enviamos un email de bienvenida (ver Bandeja).

- Evidencia: `evidencias/qase-MM-4-registro-alta-exitosa.png`

### Caso 2: Registro: contraseña de 7 caracteres
- Precondiciones: La página de registro de MiniModa está disponible. Los demás campos se completarán con datos válidos.
- Pasos: Ingresar nombre Ana Pérez, email ana.prueba@example.com, contraseña Abc1234, confirmar contraseña Abc1234, edad 25, seleccionar Argentina, marcar la casilla de términos y pulsar "Crear cuenta".
- Resultado esperado: El sistema rechaza la contraseña porque contiene 7 caracteres y el mínimo permitido es 8. El registro no debe completarse. Mensaje exacto: La contraseña debe tener al menos 8 caracteres.

- Evidencia: `evidencias/qase-MM-5-registro-password-7.png`

### Caso 3:Registro: edad inferior al mínimo permitido
- Precondiciones: La página de registro de MiniModa está disponible. Los demás campos se completarán con datos válidos.
- Pasos: Ingresar nombre Ana Pérez, email ana.prueba@example.com, contraseña Moda1234, confirmar contraseña Moda1234, edad 12, seleccionar Argentina, marcar la casilla de términos y pulsar "Crear cuenta".
- Resultado esperado: El sistema rechaza el registro porque la edad ingresada es 12 y el mínimo permitido es 13. El registro no debe completarse. Mensaje exacto: La edad debe estar entre 13 y 120.

- Evidencia: `evidencias/qase-MM-6-registro-edad-12.png`

## 7. Mapa del harness
| Pieza | En lo que usé |
|-------|---------------|
| Modelo | GPT-6 (ChatGPT) y Gemini (fLASH 3.8) |
| App | ChatGPT y Gemini en Chrome. |
| Harness | Chat y Work (Cowork) para comparar las dos superficies |
| MCP | No utilicé ni configuré ningún MCP |
| Skill | 	No utilicé ninguna Skill específica |

## 8. Entrega
- Link de tu repo (pegalo también en el Telegram): https://github.com/danielcm02/minimoda-test
