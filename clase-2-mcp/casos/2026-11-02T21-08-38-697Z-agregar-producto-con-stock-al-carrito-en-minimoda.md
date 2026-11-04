# Agregar producto con stock al carrito en MiniModa

**ID:** MM-MCP-001

**Prioridad:** alta

## Requisito
El cliente debe poder agregar al carrito un producto disponible en stock y ver reflejados el producto, la variante seleccionada, la cantidad y el precio correspondiente.

## Precondiciones
- La tienda MiniModa está disponible.
- El producto Body Manga Larga Estrellitas está publicado y tiene stock disponible.
- La variante Azul, talla 6M, está disponible.
- El carrito está vacío antes de iniciar la prueba.

## Pasos
1. Ingresar a MiniModa.
2. Buscar y abrir el producto Body Manga Larga Estrellitas.
3. Verificar que el producto tenga stock disponible.
4. Seleccionar la variante Color Azul, talla 6M.
5. Mantener la cantidad en 1 y presionar «Agregar al carrito».
6. Abrir el carrito y verificar el producto agregado.

## Datos
- Producto: Body Manga Larga Estrellitas.
- Precio: $8.500.
- Variante: Color Azul, talla 6M.
- Cantidad: 1 unidad.
- Stock observado durante la prueba: 12 unidades.


## Resultado esperado
El producto Body Manga Larga Estrellitas se agrega correctamente al carrito. Se muestra la variante Color Azul, talla 6M, la cantidad 1 y el precio de $8.500. El contador del carrito se actualiza a 1 y el subtotal refleja $8.500.

