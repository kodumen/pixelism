var shellModel = {
    el: '#shell',
    data: {
        isShowMenu: false,
        animation: ''
    },
    methods: {
        toggleMenu: _shellToggleMenu
    }
};

/**
 * Show or hide the menu.
 */
function _shellToggleMenu() {
    this.isShowMenu = !this.isShowMenu;
    this.animation = this.isShowMenu ? 'slideInLeft' : 'slideOutLeft';
}
