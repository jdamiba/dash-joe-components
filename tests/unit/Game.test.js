import Game from '../../src/fragments/Game.react.js';
import React from 'react';
import {mount, render} from 'enzyme';
import {validate} from './utils';

test('Game renders', () => {
    const dd = render(<Game />);

    expect(dd.html()).toBeDefined();
});

