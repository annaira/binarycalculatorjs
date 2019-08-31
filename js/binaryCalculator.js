function action(e) {
  let btn = e.target || e.srcElement;

  const operators = ["+", "-", "*", "/"];

  if (operators.includes(btn.innerHTML)) {
    if (document.getElementById("res").value.length === 0) return;
    for (const operator of operators) {
      if (document.getElementById("res").value.includes(operator)) return;
    }
  }
  document.getElementById("res").value += btn.innerHTML;
}

function clearAction(e) {
  document.getElementById("res").value = null;
}

function parseOperands(operator) {
  let operands = document.getElementById("res").value.split(operator);
  operands[0] = parseInt(operands[0], 2);
  operands[1] = parseInt(operands[1], 2);
  return operands;
}

function parseOperator() {
  if (document.getElementById("res").value.includes("+")) return "+";
  else if (document.getElementById("res").value.includes("-")) return "-";
  else if (document.getElementById("res").value.includes("*")) return "*";
  else if (document.getElementById("res").value.includes("/")) return "/";
  else
    console.log("No known operator in ", document.getElementById("res").value);
}

function calculateResult(operands, operator) {
  let result;
  switch (operator) {
    case "+":
      result = operands[0] + operands[1];
      break;
    case "-":
      result = operands[0] - operands[1];
      break;
    case "*":
      result = operands[0] * operands[1];
      break;
    case "/":
      result = operands[0] / operands[1];
      break;
    default:
      console.log("Unexpected operator ", operator);
      return;
  }
  return result.toString(2);
}

function equalsAction(e) {
  const operator = parseOperator();
  const operands = parseOperands(operator);

  const result = calculateResult(operands, operator);

  document.getElementById("res").value = result;
}

document.getElementById("btn0").addEventListener("click", action);
document.getElementById("btn1").addEventListener("click", action);
document.getElementById("btnSum").addEventListener("click", action);
document.getElementById("btnSub").addEventListener("click", action);
document.getElementById("btnMul").addEventListener("click", action);
document.getElementById("btnDiv").addEventListener("click", action);

document.getElementById("btnClr").addEventListener("click", clearAction);

document.getElementById("btnEql").addEventListener("click", equalsAction);
