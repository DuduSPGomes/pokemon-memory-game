
export default (status) => {
  const Timer = document.createElement('div')
  Timer.classList.add('timer')

  if (status === 'start') {
    let timeleft = 10;
    let countdown = setInterval(function () {
      timeleft--;
      Timer.innerText = `00:0${timeleft}`;
      if (timeleft <= 0) {
        clearInterval(countdown);

      }
    }, 1000);
  } else {
    Timer.innerText = `00:10`;
  }

  return Timer
}
