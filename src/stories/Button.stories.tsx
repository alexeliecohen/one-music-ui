import Button from '../components/Button';
import {ComponentMeta} from '@storybook/react';
import React from 'react';

export default {
  title: 'Button',
  component: Button,


} as ComponentMeta<typeof Button>;

export const Error = () =>
  <Button title={'Button'} backgroundColor={'red'} disabled={false}/>;

export const disabled = () =>
  <Button title={'Button'} backgroundColor={'red'} disabled={true}/>;
