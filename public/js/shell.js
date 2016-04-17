var shellModel = {
    el: '#shell',
    data: {
        isMenuActive: false,
        isMenuShown: false,
        menuAnimation: ''
    },
    methods: {
        toggleMenu: _shellToggleMenu
    }
};

/**
 * Show or hide the menu.
 */
function _shellToggleMenu() {
    // Menu started out hidden, so from now on, show it.
    this.isMenuActive = true;
    this.isMenuShown = !this.isMenuShown;
    this.menuAnimation = this.isMenuShown ? 'slideInLeft' : 'slideOutLeft';    
}
