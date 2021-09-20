export default () => {
  const App = document.createElement('main')
  App.classList.add('app')

  document.body.insertAdjacentElement('afterbegin', App)

  return App
}