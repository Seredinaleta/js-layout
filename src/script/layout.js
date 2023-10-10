export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  { width: 24, height: 24, src: '/svg/arrow-back.svg' },
  { with: 24, height: 24, src: '/img/avatar.jpg' },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')
    console.log(Object.entries(params))

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })
    button.insertAdjacentElement('afterBegin', img)
    header.append(button)
  })
  return header
}

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак                 самопрезентацій.',
    date: '15.01',
    viewed: false,
  },

  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: true,
  },
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак                 самопрезентацій.',
    date: '15.01',
    viewed: false,
  },
]

export const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'div',
        `post__category post__category-${category.id}`,
        `${category.text}`,
      )
      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )
    postHeader.append(categoryList, dateSpan)
    const infoParagraf = createElement(
      'p',
      'post__info',
      postData.info,
    )
    post.append(postHeader, infoParagraf)
    postList.append(post)
  })

  return postList
}
const NAV_LIST = [
  { info: 'База знань', active: true },
  { info: 'Інформація', active: false },
]

export const createNav = () => {
  const list = createElement('ul', 'nav')
  NAV_LIST.forEach((listdata) => {
    const tab = createElement(
      'li',
      listdata.active ? 'active' : '',
      `${listdata.info}`,
    )
    console.log(tab)
    list.append(tab)
  })
  return list
}

export const createContainer = () => {
  const container = createElement('div', 'container')
  const article = createElement('article', 'article')
  const img = createElement('img')
  img.src = '../../img/image 1.jpg'
  const articleTitle = createElement(
    'h3',
    '',
    'Що таке база знань?',
  )
  const paragraf = createElement(
    'p',
    '',
    'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в       некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих        задач.',
  )
  const button = createElement(
    'button',
    'button button-article',
    `Перейти до ком'юніті у Телеграм`,
  )
  article.append(img, articleTitle, paragraf, button)
  container.append(article)
  return container
}
