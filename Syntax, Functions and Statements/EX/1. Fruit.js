function fruit(f, w, p) {
  let name = f;
  let weight = Number(w);
  let price = Number(p);
  const kg = weight / 1000;
  console.log(
    `I need $${(kg * price).toFixed(2)} to buy ${kg.toFixed(
      2
    )} kilograms ${name}.`
  );
}

fruit("orange", 2500, 1.8);
