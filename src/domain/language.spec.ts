import {Language, Languages} from './language';

describe('Language', () => {
  it('should be pt language', () => {
    const language:Language = Languages.pt;
    expect(language.id).toEqual('pt');
    expect(language.label).toEqual('Português');
    expect(language.flag).toEqual('assets/svg-icons/flag-br.svg');
  });

  it('should be en language', () => {
    const language:Language = Languages.en;
    expect(language.id).toEqual('en');
    expect(language.label).toEqual('English');
    expect(language.flag).toEqual('assets/svg-icons/flag-us.svg');
  });
});
