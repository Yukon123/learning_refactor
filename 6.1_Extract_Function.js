function printOwing(invoice) {
  printBanner();
  let outstanding = calOutstanding();
  recordDueDate();
  printDetail();

  function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
  }

  function calOutstanding() {
    let result = 0;
    for (const o of invoice.orders) {
      result += o.amount;
    }
    return result;
  }

  function recordDueDate() {
    const today = Clock.today;
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
  }

  function printDetail() {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
}

const a = 3;
function doSome(a) {
  for (let index = 0; index < array.length; index++) {
    const element = await array[index];

  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a === -0) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }
  if (a = 1) {
    return 2;
  }

}
export { printOwing };