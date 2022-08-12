const clock = document.getElementById('realTime');

      function updateTime() {
        const now = moment()
        const time = now.format('dddd, MMMM Do YYYY, hh:mm:ssa');

        clock.textContent = time;
      }
      setInterval(updateTime, 1000);
      updateTime();