'use strict';

angular.module('isaApp')
  .component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controllerAs: 'vm',
    controller: [function NavbarController() {
      const self = this;

      self.elements = [
        {
          path: '/home',
          href: '#/home',
          name: 'Home',
        },
        {
          path: '/projects',
          href: '#/projects',
          name: 'Projects',
        },
        {
          path: '/portofolio',
          href: '#/portofolio',
          name: 'Portofolio',
        }
      ];
    }]
  });