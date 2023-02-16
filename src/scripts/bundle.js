import Alpine from 'alpinejs'

const modals = () => ({
  menuModal: false,
  contactModal: false,

  init() {
    console.log('XD')
  },

  toggleMenuModal: {
    ['@click']() {
      this.menuModal = !this.menuModal
    },
  },
  toggleContactModal: {
    ['@click']() {
      this.contactModal = !this.contactModal
    },
  },
})

window.Alpine = Alpine

Alpine.data('modals', modals)

Alpine.start()
