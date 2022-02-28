module.exports = {
    base: '/docs/',
    dest: 'public/docs',
    title:'Docs',
    description:'This is description',
    head: [
      ['link', { rel: 'icon', href: 'https://picsum.photos/100' }]
    ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Install', link: '/getstarted/' }
      ],
      sidebar: [
        ['/', 'Getting Started'],
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            ['/getstarted/', 'Install it title']
          ]
        }
      ]
    }
  }