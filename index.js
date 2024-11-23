// Находим кнопку расчета и добавляем обработчик события "click"
document.getElementById("calculateBtn").addEventListener("click", function () {
  // Получаем значения из формы
  const tariff = parseFloat(document.getElementById("tariff").value); // Тариф за 1 км
  const distance = parseFloat(document.getElementById("distance").value); // Расстояние
  const loadingTime = parseFloat(document.getElementById("loadingTime").value); // Время загрузки
  const points = parseInt(document.getElementById("points").value); // Количество точек
  const roundTrip = document.getElementById("roundTrip").checked; // Круговая поездка

  // Проверка корректности ввода
  if (isNaN(distance) || distance <= 0 || isNaN(loadingTime) || loadingTime < 0 || isNaN(points) || points <= 0) {
      document.getElementById("result").textContent = "Введите корректные данные!";
      document.getElementById("result").style.color = "red"; // Подсветка ошибки
      return;
  }

  // Расчет стоимости
  let distanceCost = distance * tariff; // Стоимость за расстояние
  if (roundTrip) {
      distanceCost *= 2; // Удваиваем стоимость для круговой поездки
  }

  const loadingCost = loadingTime * 700; // Стоимость загрузки
  const extraPointsCost = (points > 1 ? (points - 1) * 400 : 0); // Стоимость дополнительных точек

  const totalCost = distanceCost + loadingCost + extraPointsCost; // Общая стоимость

  // Отображение результата
  document.getElementById("result").textContent = `Общая стоимость: ${totalCost.toFixed(2)} рублей.`;
  document.getElementById("result").style.color = "green"; // Подсветка успешного результата
});