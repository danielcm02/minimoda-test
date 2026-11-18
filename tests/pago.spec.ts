import { expect, test, type Page } from '@playwright/test';

const MAX_INTENTOS_RESTAR = 20;

async function asegurarCarritoVacio(page: Page) {
  await page.goto('https://minimoda-navy.vercel.app/carrito');

  const carrito = page.getByRole('complementary', { name: 'Carrito' });
  const finalizarCompra = carrito.getByRole('link', {
    name: 'Finalizar compra',
  });
  const restarBody = page.getByRole('button', {
    name: 'Restar una unidad de Body Manga Larga Estrellitas',
  });

  // A VERIFICAR: con varias unidades, no se comprobó que cada pulsación reste una.
  for (let intento = 0; intento < MAX_INTENTOS_RESTAR; intento += 1) {
    if (await finalizarCompra.isDisabled()) break;
    if (!(await restarBody.isVisible())) break;

    await restarBody.click();
  }

  await expect(
    page.getByRole('link', { name: 'Carrito, 0 productos' }),
  ).toBeVisible();
  await expect(carrito).toContainText('Tu carrito está vacío.');
  await expect(finalizarCompra).toBeDisabled();
}

async function prepararCheckout(page: Page, cvv: string) {
  await asegurarCarritoVacio(page);
  await page.goto('https://minimoda-navy.vercel.app/tienda');

  const producto = page.getByRole('article').filter({
    has: page.getByRole('heading', {
      name: 'Body Manga Larga Estrellitas',
    }),
  });

  await producto
    .getByRole('button', { name: 'Agregar al carrito' })
    .click();

  const enlaceCarrito = page.getByRole('link', {
    name: 'Carrito, 1 producto',
  });
  await expect(enlaceCarrito).toBeVisible();
  await enlaceCarrito.click();

  const carrito = page.getByRole('complementary', { name: 'Carrito' });
  await expect(carrito).toContainText('Body Manga Larga Estrellitas');
  await page.getByRole('link', { name: 'Finalizar compra' }).click();

  await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible();
  await expect(
    page.getByRole('complementary', { name: 'Resumen' }),
  ).toContainText('Body Manga Larga Estrellitas');

  await page.getByRole('textbox', { name: 'Nombre' }).fill('Juan Pérez');
  await page
    .getByRole('textbox', { name: 'Dirección' })
    .fill('Calle Falsa 123');
  await page
    .getByRole('textbox', { name: 'Email' })
    .fill('juan@example.com');
  await page
    .getByRole('combobox', { name: 'País de envío' })
    .selectOption({ label: 'Argentina' });

  await page
    .getByRole('textbox', { name: 'Número de tarjeta' })
    .fill('4111111111111111');
  await page
    .getByRole('textbox', { name: 'Vencimiento (MM/AA)' })
    .fill('12/30');
  await page.getByRole('textbox', { name: 'CVV' }).fill(cvv);
}


test('PAGO-01 - Compra válida', async ({ page }) => {
  await prepararCheckout(page, '123');
  await page.getByRole('button', { name: 'Confirmar compra' }).click();

  const confirmacion = page.getByRole('status').filter({
    hasText: 'Compra confirmada. Orden',
  });

  await expect(confirmacion).toContainText(/Compra confirmada\. Orden MM-\d+/);
  await expect(confirmacion).toContainText('Argentina');
  await expect(confirmacion).toContainText(/env[ií]o.{0,40}\d/i);
});


test('PAGO-0X – CVV inválido', async ({ page }) => {
  await prepararCheckout(page, '12');
  await page.getByRole('button', { name: 'Confirmar compra' }).click();

  const mensajeValidacion = page.getByRole('alert').filter({
    hasText: 'El CVV debe tener 3 o 4 dígitos.',
  });

  await expect(mensajeValidacion).toContainText(
    'El CVV debe tener 3 o 4 dígitos.',
  );
});
