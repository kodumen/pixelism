var shellModel = {
    el: '#shell',
    data: {
        isShowMenu: false
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
}


