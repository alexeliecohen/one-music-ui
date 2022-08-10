import SearchBar from "../components/ui/searchbar/SearchBar";
import {ComponentMeta, Story} from "@storybook/react";
import {IInput} from "../components/ui/Input";
import Modal from "../components/ui/Modal";

export default {
    title: 'Modal',
    component: Modal,
    argTypes: {
        onChange: {action: 'changed'},
        children: {
            defaultValue: 'Default Text',
        },
    }
} as ComponentMeta<typeof Modal>;

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


const Template: Story<any> = (args) => <Modal/>
export const standardInput = Template.bind({});

