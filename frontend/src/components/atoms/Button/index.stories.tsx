import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '.';

storiesOf('atoms/Button', module).add('default', () => (
    <Button>Click me</Button>
));
