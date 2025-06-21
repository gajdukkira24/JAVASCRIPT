// 4. Створити форму, після сабміту виводити на екран 
// повідомлення ‘Ви зареєструвалися успішно! Дякую!’

const forElement = document.querySelector(".form");
const messageEl = document.querySelector(".greating");

const onFormSubmit = (event) => {
  event.preventDefault(); //! сбрасывает базовые стили/действия браузера
  const { name, surname } = event.currentTarget.elements;
  // console.log(name, surname);
  messageEl.textContent = `${name.value} ${surname.value} Ви зареєструвалися успішно! Дякую!`;
  // console.log("Ви зареєструвалися успішно! Дякую!");
  forElement.reset();
  setTimeout(() => (messageEl.style.display = "block"), 500);
  setTimeout(() => (messageEl.style.display = "none"), 2500);
};
forElement.addEventListener("submit", onFormSubmit);
