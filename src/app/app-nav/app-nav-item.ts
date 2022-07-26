
export const AppNavItems: {[key: string] : AppNavItem} = {
  HOME: {
    label: 'Home',
    routerLink: '/'
  },
  CREATE: {
    label: 'Create',
    routerLink: '/dynamic-form'
  }
};

export interface AppNavItem {
  label: string;
  routerLink: string;
}
