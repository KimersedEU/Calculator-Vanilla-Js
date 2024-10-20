const AllBtn = document.querySelectorAll(".number");
const Screen = document.getElementById("screen");

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetScreen = false;

const operatorsBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");

// Обработка чисел
AllBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    if (shouldResetScreen) {
      Screen.textContent = "";
      shouldResetScreen = false;
    }
    Screen.textContent += number;
  });
});

// Обработка операторов
operatorsBtn.forEach((button) => {
  if (Screen.textContent === "Error") Screen.textContent = ""; // сброс экрана, если ранее была ошибка
  button.addEventListener("click", () => {
    if (currentOperator !== null && !shouldResetScreen) {
      secondNumber = Screen.textContent;
      Screen.textContent = calculate(); // вычисляем результат
      firstNumber = Screen.textContent; // результат становится первым числом для следующей операции
    } else {
      firstNumber = Screen.textContent; // сохраняем первое число, если это первая операция
    }

    currentOperator = button.textContent; // сохраняем оператор
    if (currentOperator === "×") currentOperator = "*";
    if (currentOperator === "÷") currentOperator = "/";

    shouldResetScreen = true; // сбрасываем экран для второго числа
  });
});

// Обработка нажатия "="
equalBtn.addEventListener("click", () => {
  if (currentOperator === null || shouldResetScreen) return; // если оператор не выбран или нет второго числа, ничего не делаем

  secondNumber = Screen.textContent; // сохраняем второе число
  Screen.textContent = calculate(); // выводим результат
  currentOperator = null; // сбрасываем оператор
  shouldResetScreen = true; // сброс для нового расчёта
  firstNumber = Screen.textContent; // результат становится первым числом для следующих операций
});

// Функция для вычисления результата

function calculate() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  if (isNaN(num1) || isNaN(num2)) return "Error"; // проверка на валидность чисел

  let result;
  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (secondNumber === "0") {
        result = "0"; // При делении на 0 возвращаем 0
      } else {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
      }
      break;
    case "/":
      result = num2 === 0 ? "Error" : num1 / num2; // проверка на деление на 0
      break;
    default:
      return "Error"; // если оператор не распознан
  }

  return result.toString(); // возвращаем результат в виде строки
}

// Обработка кнопки очистки "C"
clearBtn.addEventListener("click", () => {
  Screen.textContent = "";
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
  shouldResetScreen = false;
});
