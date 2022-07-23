
export const AppNavItens: {[key: string] : AppNavIten} = {
  HOME: {
    label: 'Home',
    routerLink: '/'
  },
  CREATE: {
    label: 'Create',
    routerLink: '/dynamic-form'
  }
};

export interface AppNavIten {
  label: string;
  routerLink: string;
}
