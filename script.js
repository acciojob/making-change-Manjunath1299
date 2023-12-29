const makeChange = (c) => {
  // your name here
	const coinValues = {
    q: 25,
    d: 10,
    n: 5,
    p: 1
  };

  const change = {};

  for (const [coin, value] of Object.entries(coinValues)) {
    change[coin] = Math.floor(c / value);
    c %= value;
  }

  return change;
};

// Do not the change the code below
const calculateChange = () => {
  const changeInput = document.getElementById("change-input");
  const resultElement = document.getElementById("result");

  const c = parseInt(changeInput.value);
  const changeObj = makeChange(c);

  resultElement.textContent = `Change: ${JSON.stringify(changeObj)}`;
};

const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
