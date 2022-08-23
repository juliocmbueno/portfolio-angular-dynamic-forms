import {Uuid} from './uuid';

describe('Uuid', () => {
  it('should create an instance', () => {
    const uuid = new Uuid();
    expect(uuid).toBeTruthy();
    expect(uuid.value).toBeTruthy();
  });
});
