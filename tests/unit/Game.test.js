import Game from '../../src/fragments/Game.react.js';
import React from 'react';
import {render} from 'enzyme';

test('Game renders', () => {
    const dd = render(<Game />);

    expect(dd.html()).toBeDefined();
});
