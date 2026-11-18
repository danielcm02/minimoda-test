# Casos de prueba - Checkout MiniModa

## PAGO-01 - Compra válida

- **Objetivo:** Verificar que una compra se confirme correctamente.
- **Precondición:** El carrito comienza vacío.
- **Datos de envío:**
  - Nombre: Juan Pérez
  - Dirección: Calle Falsa 123
  - Email: juan@example.com
  - País: Argentina
- **Datos de pago:**
  - Tarjeta: 4111111111111111 (tarjeta de prueba aprobada)
  - Vencimiento: 12/30
  - CVV: 123
- **Pasos:**
  1. Abrir `/tienda`.
  2. En la tarjeta de **Body Manga Larga Estrellitas**, pulsar **Agregar al carrito**.
  3. Comprobar que el encabezado muestra **Carrito, 1 producto** y abrir ese enlace.
  4. En el carrito, comprobar que aparece Body Manga Larga Estrellitas y pulsar **Finalizar compra**.
  5. Completar Nombre, Dirección, Email y País de envío con los datos indicados.
  6. Completar Número de tarjeta, Vencimiento (MM/AA) y CVV con los datos indicados.
  7. Pulsar **Confirmar compra**.
- **Verificación del carrito vacío antes de empezar:** Comprobar en el encabezado **Carrito, 0 productos**; al abrir `/carrito`, verificar **Carrito 0**, **Tu carrito está vacío.**, total **$ 0** y que **Finalizar compra** está deshabilitado. Se comprobó que, cuando hay exactamente una unidad de Body Manga Larga Estrellitas, pulsar una vez **Restar una unidad de Body Manga Larga Estrellitas** lleva a ese estado vacío.
- **Resultado esperado:** Se muestra **Compra confirmada. Orden MM-...** con número de orden; la confirmación indica el país y el costo de envío.
- **A VERIFICAR:** El rol accesible y locator del elemento que muestra la confirmación no se comprobaron activando una compra.

## PAGO-0X - CVV inválido

- **Objetivo:** Verificar que el sistema rechace un CVV de dos dígitos.
- **Precondición:** El carrito comienza vacío.
- **Datos de envío:** Los mismos datos sintéticos de PAGO-01.
- **Datos de pago:**
  - Tarjeta: 4111111111111111
  - Vencimiento: 12/30
  - CVV: 12
- **Pasos:**
  1. Abrir `/tienda`.
  2. En la tarjeta de **Body Manga Larga Estrellitas**, pulsar **Agregar al carrito**.
  3. Comprobar que el encabezado muestra **Carrito, 1 producto** y abrir ese enlace.
  4. En el carrito, comprobar que aparece Body Manga Larga Estrellitas y pulsar **Finalizar compra**.
  5. Completar Nombre, Dirección, Email y País de envío con los datos sintéticos de PAGO-01.
  6. Completar Número de tarjeta y Vencimiento (MM/AA) con los datos de pago de PAGO-01; ingresar CVV **12**.
  7. Pulsar **Confirmar compra**.
- **Verificación del carrito vacío antes de empezar:** Comprobar en el encabezado **Carrito, 0 productos**; al abrir `/carrito`, verificar **Carrito 0**, **Tu carrito está vacío.**, total **$ 0** y que **Finalizar compra** está deshabilitado. Se comprobó que, cuando hay exactamente una unidad de Body Manga Larga Estrellitas, pulsar una vez **Restar una unidad de Body Manga Larga Estrellitas** lleva a ese estado vacío.
- **Resultado esperado:** Se muestra el mensaje **El CVV debe tener 3 o 4 dígitos.**
- **Resultado observado:** Coincide con el esperado.
- **A VERIFICAR:** El rol accesible y locator del elemento que muestra el mensaje de validación no se comprobaron activando el error en la interfaz.
