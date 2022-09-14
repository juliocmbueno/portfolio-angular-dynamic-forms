
export const AppNavItems: {[key: string] : AppNavItem} = {
  HOME: {
    label: 'nav.home',
    routerLink: '/'
  },
  CREATE: {
    label: 'nav.create',
    routerLink: '/dynamic-form'
  }
};

export interface AppNavItem {
  label: string;
  routerLink: string;
}
