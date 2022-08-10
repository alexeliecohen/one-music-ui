import Input, {IInput} from "../components/ui/Input";
import {ComponentMeta, Meta, Story} from "@storybook/react";
import {useState} from "react";

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        onChange: {action: 'changed'},
        children: {
            defaultValue: 'Default Text',
        },
    }
} as ComponentMeta<typeof Input>;

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

const inputData: IInput = new class implements IInput {
    value: string = '';

    handleChange(e: Event): void {
        console.log(e.target.value)
        value = e.target.value;
    }
}

const Template: Story<IInput> = (args) => <Input {...inputData}/>
export const standardInput = Template.bind({});


const value = ''
// const handleChange = (e) => {
//     value = e.target.value;
// }
// export const Input = <Input onChange={handleChange} value={}/>