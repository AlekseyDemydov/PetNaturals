
     
      let countdownTime = 2 * 60 * 60;
  
      function updateCountdown() {
          const hours = Math.floor(countdownTime / 3600);  // Залишок годин
          const minutes = Math.floor((countdownTime % 3600) / 60);  // Залишок хвилин
          const seconds = countdownTime % 60;  // Залишок секунд
  
          // Форматуємо значення так, щоб вони завжди були двозначними
          const formattedHours = hours < 10 ? + hours : hours;
          const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
          const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  
          // Оновлюємо HTML елемент
          document.getElementById('countdown').textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  
          // Зменшуємо час
          countdownTime--;
  
          // Зупиняємо таймер, коли досягаємо нуля
          if (countdownTime < 0) {
              clearInterval(timerInterval);
              document.getElementById('countdown').textContent = 'Time\'s up!';
          }
      }
  
      // Запускаємо оновлення таймера кожну секунду
      const timerInterval = setInterval(updateCountdown, 1000);
