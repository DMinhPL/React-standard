---
to: src/components/<%= level %>/<%= h.changeCase.pascal(name) %>/index.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import <%= h.changeCase.pascal(name) %> from './';

storiesOf('<%= level %>/<%= h.changeCase.pascal(name) %>', module).add('default', () => {
  return (
      <<%= h.changeCase.pascal(name) %> />
  );
});
