import Player from "../Player/index.js"

export default () => {
  const Header = document.createElement('header')
  Header.classList.add('header')

  Header.append(Player('Edu'))
  Header.append(Player('Laura'))

  return Header
}