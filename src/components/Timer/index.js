export default (time) => {
  const Timer = document.createElement('div')
  Timer.classList.add('timer')
  Timer.innerText = time

  return Timer
}