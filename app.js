export default () => {
  const App = document.createElement('div')
  App.classList.add('app')

  document.body.append(App)

  return App
}