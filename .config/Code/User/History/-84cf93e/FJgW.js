const port = 5005
const endpoint = `http://localhost:${port}/payments`

// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.

export const getPaymentsByYearAndPaypal = async (year = 2008) => {
  const res = await fetch(`${endpoint}`);
  const data = await res.json();

  const filteredPayments = data.payments.filter(payment => {
    const paymentYear = new Date(payment.date_payment).getFullYear();
    return paymentYear === year && payment.payment === 'PayPal';
  });

  return filteredPayments.sort((a, b) => b.total - a.total);
};

export const getPaymentsByYear = async (year = 2008) => {
  const res = await fetch(`${endpoint}`);
  const data = await res.json();
console.log(data);

  data.forEach(payment => {
    console.log( payment.payments);
  });
  const filteredPayments = data.payments.filter(payment => {
    const paymentYear = new Date(payment.date_payment).getFullYear();
    return paymentYear === year;
  });

  return filteredPayments.sort((a, b) => b.total - a.total);
};

// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllPaymentStatus = async () => {
  const res = await fetch(`${endpoint}`);
  const data = await res.json();
  const paymentTypes = new Set(data.map((payment) => payment.payment));
  return [...paymentTypes].sort();
};

export const getPaymentByClientCode = async (clientCode) => {
  const res = await fetch(
    `${endpoint}?code_client=${clientCode}`
  );
  const data = await res.json();
  return data;
};
