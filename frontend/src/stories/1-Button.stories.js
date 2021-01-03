import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs';
import Button from '../components/atoms/Button';

const themes = ['primary', 'secondary'];

storiesOf('Button', module)
  .addDecorator(withKnobs)

  .add('with label', () => <Button label={text('label', 'Hello Button')} />)
  .add('with big', () => (
    <Button label="Big Button" big={boolean('big', true)} />
  ))
  .add('with theme', () => (
    <Button
      label={text('label', 'Themed button')}
      theme={select('theme', themes)}
    />
  ))
  .add('custom style', () => (
    <Button
      label="Custom style"
      style={object('style', {
        backgroundColor: 'pink',
        border: '5px dotted limegreen',
      })}
    />
  ));
