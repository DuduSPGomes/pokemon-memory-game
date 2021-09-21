import Player from "../Player/index.js"

export default () => {
  const Header = document.createElement('header')
  Header.classList.add('header')


  Header.append(Player('Edu', 1))
  // Header.append(Timer())
  Header.append(Player('Laura', 2))

  return Header
}