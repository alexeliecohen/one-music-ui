import {ComponentMeta} from "@storybook/react";
import NavBar from "../components/ui/navbar/NavBar";

export default {
    title: 'Navigation',
    component: NavBar,
} as ComponentMeta<typeof NavBar>;

const items = Array.of(
    "Home",
    "Library",
    "About"
);

export const NavBarStyle = () => <NavBar items = {items} />;
// const Templa
// export const NavBarStory = Template.bind({})