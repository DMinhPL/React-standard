import { storiesOf } from '@storybook/react';
import React from 'react';

import Input from './';

storiesOf('atoms/Input', module).add('default', () => {
    return <Input />;
});
