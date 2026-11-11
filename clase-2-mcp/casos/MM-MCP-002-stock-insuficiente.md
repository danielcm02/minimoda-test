# MM-MCP-002 – Intentar agregar al carrito más unidades que el stock disponible

**Tipo:** Prueba negativa  
**Prioridad:** Alta  
**Estado:** Ejecutado – Comportamiento no esperado

## Objetivo
Verificar que MiniModa impida agregar al carrito una cantidad superior al stock disponible.

## Precondiciones
- El producto Body Manga Larga Estrellitas está disponible.
- La variante seleccionada es Color Azul, talla 6M.
- El stock observado es de 12 unidades.

## Pasos
1. Abrir la ficha del producto Body Manga Larga Estrellitas.
2. Seleccionar la variante Color Azul, talla 6M.
3. Ingresar 13 como cantidad.
4. Intentar agregar el producto al carrito.
5. Revisar el carrito y el comportamiento del sistema.

## Datos de prueba
- **Producto:** Body Manga Larga Estrellitas.
- **Precio unitario:** $8.500.
- **Variante:** Color Azul, talla 6M.
- **Stock observado:** 12 unidades.
- **Cantidad ingresada:** 13 unidades.

## Resultado esperado
El sistema debe impedir agregar más unidades que las disponibles. El carrito no debe contener una cantidad superior a 12 unidades y debe informar que no hay stock suficiente o ajustar la cantidad.

## Ejecución y resultado real

- **Estado:** No cumple el resultado esperado.
- **Resultado observado:** El sistema permitió avanzar hasta la pantalla Checkout mostrando 13 unidades del producto.
- **Subtotal observado:** $110.500.
- **Envío observado:** $3.500.
- **Total estimado:** $114.000.
- **Conclusión:** El comportamiento observado no cumple el resultado esperado.
- **Evidencia:** Captura de la pantalla Checkout. El pago no se completó.

## Observaciones
La prueba permitió identificar que se puede avanzar al Checkout con una cantidad superior al stock observado. No se verificó si el sistema permite completar el pago ni si descuenta el stock.
