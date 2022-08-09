import {ComponentMeta} from "@storybook/react";
import UserProfile, {IUserData} from "../components/ui/userprofile/UserProfile";

export default {
    title: 'UserProfile',
    component: UserProfile,
} as ComponentMeta<typeof UserProfile>;


// interface IUserData {
//     firstName: string,
//     lastName: string,
//     image?: string,
//     email: string,
//     phone: string,
//     country: string,
//     accountCreationDate: Date,
//
// }

const userData: IUserData = new class implements IUserData {
    accountCreationDate = new Date();
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
        "Nam convallis nulla turpis, sit amet sagittis odio mollis nec. " +
        "Nunc varius elementum ipsum non porttitor. In congue in urna non tincidunt. " +
        "Mauris rutrum lorem vel scelerisque egestas. Aliquam metus ipsum, condimentum " +
        "id tempus ac, ullamcorper vitae neque. Aenean porttitor mi non dictum malesuada." +
        " Pellentesque sagittis risus nunc, eu dapibus tortor accumsan sit amet. " +
        "Vivamus convallis eros nulla, ac consequat nisi mattis vel. Nam dui dui," +
        " tempus sit amet fermentum non, condimentum ut tellus. Phasellus consectetur " +
        "tempus purus eget aliquet. Curabitur sed maximus ex. Vestibulum scelerisque at est" +
        " eget fermentum. Suspendisse iaculis justo faucibus est porta, vitae elementum nisl dapibus."
    country = "Canada";
    city = "Montreal";
    email = "work.alex.c@gmail.com";
    firstName = "Alexander";
    lastName = "Cohen";
    phone = "514-248-8638";
}
export const UserProfileDefault = () => <UserProfile {...userData}/>;
