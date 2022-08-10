import Input, {IInput} from "../components/ui/Input";
import {ComponentMeta, Meta, Story} from "@storybook/react";
import {useState} from "react";
import SearchBar from "../components/ui/searchbar/SearchBar";

export default {
    title: 'SearchBar',
    component: SearchBar,
    argTypes: {
        onChange: {action: 'changed'},
        children: {
            defaultValue: 'Default Text',
        },
    }
} as ComponentMeta<typeof SearchBar>;

// const meta: Meta = {
//     title: 'Input',
//     component: Input,
//     argTypes: {
//         onChange: {action: 'changed'},
//         children: {
//             defaultValue: 'Default Text',
//         },
//     },
// };

// export default meta;


const Template: Story<IInput> = (args) => <SearchBar/>
export const standardInput = Template.bind({});


const value = ''
// const handleChange = (e) => {
//     value = e.target.value;
// }
// export const Input = <Input onChange={handleChange} value={}/>