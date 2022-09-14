
export type LanguageID = 'pt'|'en';

export interface Language {
  id:LanguageID;
  label:string;
  flag: string;
}

export const Languages: {[ID in LanguageID]: Language} = {
  'pt': {
    id: 'pt',
    label: 'Português',
    flag: 'assets/svg-icons/flag-br.svg'
  },
  'en': {
    id: 'en',
    label: 'English',
    flag: 'assets/svg-icons/flag-us.svg'
  }
}
