import Player from "../Player/index.js"
import Timer from "../Timer/index.js"

export default () => {
  const Header = document.createElement('header')
  Header.classList.add('header')

  Header.append(Player('Edu'))
  Header.append(Timer('00:00'))
  Header.append(Player('Laura'))

  return Header
}