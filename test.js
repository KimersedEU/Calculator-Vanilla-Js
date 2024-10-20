// // const changeInput = document.getElementById("item-input");
// // const changeBtn = document.getElementById("add-item-btn");
// // const changeList = document.getElementById("item-list");

// // changeBtn.addEventListener("click", () => {
// //   const newItemText = changeInput.value;

// //   if (newItemText.trim() !== "") {
// //     addItem(newItemText); // Добавляем элемент с текстом и кнопкой удаления
// //     changeInput.value = ""; // Очищаем поле ввода после добавления
// //   }
// // });

// // // ----------------

// // function addItem(text) {
// //   const li = document.createElement("li");
// //   li.textContent = text;

// //   // Создаем кнопку для удаления
// //   const deleteBtn = document.createElement("button");
// //   deleteBtn.textContent = "Удалить";

// //   // Привязываем событие удаления к кнопке
// //   deleteBtn.addEventListener("click", () => {
// //     li.remove(); // Удаляем сам элемент списка
// //   });

// //   // Добавляем кнопку к элементу списка
// //   li.appendChild(deleteBtn);

// //   // Добавляем элемент списка в ul
// //   changeList.appendChild(li);
// // }

// // const findList = document.getElementById("item-list");
// // const addItemBtn = document.getElementById("add-item-btn");

// // addItemBtn.addEventListener("click", () => {
// //   const newItem = document.createElement("li");
// //   newItem.textContent = "New Element";

// //   const deleteBtn = document.createElement("button");
// //   deleteBtn.textContent = "Delete";

// //   deleteBtn.addEventListener("click", () => {
// //     newItem.remove();
// //   });

// //   newItem.appendChild(deleteBtn);
// //   findList.appendChild(newItem);
// // });

// let firstNumber = "";
// let secondNumber = "";
// let currentOperator = null;
// let shouldResetScreen = false; // Чтобы экран сбрасывался после ввода нового числа

// const AllBtn = document.querySelectorAll(".number");
// const operatorBtns = document.querySelectorAll(".operator");
// const Screen = document.getElementById("screen");
// const clearBtn = document.querySelector(".clear");
// const equalBtn = document.querySelector(".equal");

// AllBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     const number = button.textContent;
//     if (shouldResetScreen) {
//       Screen.textContent = "";
//       shouldResetScreen = false;
//     }
//     Screen.textContent += number;
//   });
// });

// operatorBtns.forEach((button) => {
//   button.addEventListener("click", () => {
//     firstNumber = Screen.textContent;
//     currentOperator = button.textContent;
//     shouldResetScreen = true; // После выбора оператора сбрасываем экран для ввода второго числа
//   });
// });

// equalBtn.addEventListener("click", () => {
//   secondNumber = Screen.textContent;
//   Screen.textContent = calculate(firstNumber, secondNumber, currentOperator);
// });

// clearBtn.addEventListener("click", () => {
//   Screen.textContent = "0";
//   firstNumber = "";
//   secondNumber = "";
//   currentOperator = null;
// });

// function calculate(first, second, operator) {
//   const a = parseFloat(first);
//   const b = parseFloat(second);

//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "×":
//       return a * b;
//     case "÷":
//       return b !== 0 ? a / b : "Error";
//     default:
//       return "Error";
//   }
// }

operatorsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (Screen.textContent === "" && button.textContent === "-") {
      Screen.textContent = "-"; // Разрешаем начинать с минуса
      return;
    }

    if (firstNumber === "" && Screen.textContent === "-") {
      return; // Не разрешаем вводить операцию после одного "-"
    }

    firstNumber = Screen.textContent;
    currentOperator = button.textContent;
    shouldResetScreen = true;
  });
});
