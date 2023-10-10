import {
  createElement,
  createHeader,
  createNav,
  createContainer,
} from '../../script/layout'

const page = document.querySelector('.page')
const title = createElement('h1', 'title', 'Коммьюніті')
const header = createHeader()
const nav = createNav()
const main = createElement('main', 'main')
const container = createContainer()

page.append(header)
page.append(title)
page.append(nav)
page.append(main)
page.append(container)
