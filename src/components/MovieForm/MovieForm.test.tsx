import * as React from 'react';
import { mount, shallow } from 'enzyme';
import MovieForm from './MovieForm';

describe('Movie form', () => {
  test('should update title field on change', () => {
    const tree = mount(<MovieForm />);
    const input = tree.find("input[name='title']");
    input.simulate('change', {
      persist: () => {},
      target: {
        name: 'title',
        value: 'Title',
      },
    });
    expect(input.html()).toMatch('Title');
  });

  test('should update tagline field on change', () => {
    const tree = mount(<MovieForm />);
    const input = tree.find("input[name='tagline']");
    input.simulate('change', {
      persist: () => {},
      target: {
        name: 'tagline',
        value: 'Tagline',
      },
    });
    expect(input.html()).toMatch('Tagline');
  });

  test('should update release date field on change', () => {
    const tree = mount(<MovieForm />);
    const input = tree.find("input[name='release_date']");
    input.simulate('change', {
      persist: () => {},
      target: {
        name: 'date',
        value: '2020-12-12',
      },
    });
    expect(input.html()).toMatch('2020-12-12');
  });

  test('should update poster url field on change', () => {
    const tree = mount(<MovieForm />);
    const input = tree.find("input[name='poster_path']");
    input.simulate('change', {
      persist: () => {},
      target: {
        name: 'poster_path',
        value: 'Poster url',
      },
    });
    expect(input.html()).toMatch('Poster url');
  });

  test('should update overview field on change', () => {
    const tree = mount(<MovieForm />);
    const input = tree.find("input[name='title']");
    input.simulate('change', {
      persist: () => {},
      target: {
        name: 'title',
        value: 'Title',
      },
    });
    expect(input.html()).toMatch('Title');
  });

  test('should update runtime field on change', () => {
    const tree = mount(<MovieForm />);
    const input = tree.find("input[name='runtime']");
    input.simulate('change', {
      persist: () => {},
      target: {
        name: 'title',
        value: 5,
      },
    });

    expect(input.html()).toMatch('5');
  });

  test('should update overview field on change', () => {
    const tree = mount(<MovieForm />);
    const input = tree.find("input[name='overview']");
    input.simulate('change', {
      persist: () => {},
      target: {
        name: 'overview',
        value: 'Overview',
      },
    });

    expect(input.html()).toMatch('Overview');
  });

  test('should update genre field on change', async () => {
    const tree = mount(<MovieForm />);

    await tree.find('.multi-select').simulate('click');
    await tree.find('.select-item').simulate('click');

    expect(tree.state()).toEqual({
      selectedGenres: [{ label: 'Comedy', value: 'Comedy' }],
    });
  });
});
