import {ComponentMeta} from '@storybook/react';
import React from 'react';
import Button from "../components/ui/button/Button";
import {BtnCssType} from "../components/ui/button/ButtonCssType.enum";
import {IBtn} from "../components/ui/button/Button.interface";

export default {
  title: 'Button',
  component: Button,


} as ComponentMeta<typeof Button>;

export const Error = () =>
  <Button title={'Button'} btnStyle={BtnCssType.primary} disabled={false} />;

export const disabled = () =>
  <Button title={'Button'} btnStyle={BtnCssType.primary} disabled={true} />;

const Template = (args:IBtn) => <Button {...args}/>

export const Red = Template.bind({});
Red.args = {
 title:"Submit",
 disabled: false,
 btnStyle: BtnCssType.primary
}