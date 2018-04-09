module.exports =  {
  template: '#tabs-template',

  data() {
    return {
      tabs: [
        {name: 'TAB 1', href: '/'},
        {name: 'TAB 2', href: '/blog'},
        {name: 'TAB 3', href: '/works'},
        {name: 'TAB 4', href: '/page'}
      ]
    }
  }
}