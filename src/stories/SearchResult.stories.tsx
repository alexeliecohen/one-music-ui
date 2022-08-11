import {ComponentMeta, Story} from "@storybook/react";
import Modal from "../components/ui/Modal";
import SearchResult from "../components/ui/SearchResult";

export default {
    title: 'SearchResult',
    component: SearchResult,
    argTypes: {
        onChange: {action: 'changed'},
        children: {
            defaultValue: 'Default Text',
        },
    }
} as ComponentMeta<typeof SearchResult>;


const Template: Story<any> = (args) => <Modal/>
export const standardInput = Template.bind({});

