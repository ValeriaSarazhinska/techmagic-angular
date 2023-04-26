import { FilterUsersPipe } from './filter-users.pipe';

describe('FilterUserPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterUsersPipe();
    expect(pipe).toBeTruthy();
  });
});
