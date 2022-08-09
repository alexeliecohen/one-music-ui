import React from 'react';
// import {User} from '@styled-icons/boxicons-solid/User'
import styled from "styled-components";
import {UserCircle} from "@styled-icons/boxicons-solid/UserCircle";
import {Location} from "@styled-icons/ionicons-sharp/Location";
import Button from "../button/Button";
import {BtnCssType} from "../button/ButtonCssType.enum";

export interface IUserData {
    firstName: string,
    lastName: string,
    image?: string,
    description:string,
    email: string,
    phone: string,
    country: string,
    city: string,
    accountCreationDate: Date,

}

const StockAvatarPhoto = styled(UserCircle)`
  color: gray;
  display: block;
  background: white;
  //outline: black solid 1px;
  //background-image: url("../../../../public/favicon.ico");
  width: 100%;
  height: 100%;
  

`;

const UserProfileContainer = styled.div`
  display: grid;
  //@media 
  grid-template-columns:25% 75%;
  grid-column-gap: 1em;
`

const ProfileDescription = styled.div`
  font-size: large;
  //font-family: sans-serif, Helvetica;
  h2 {
    margin-bottom: 0;
  }
  line-height: 1.5;
  p {
    max-width: 400px;
    max-height: 100px;
    overflow: hidden;
    margin-top: 0;
  }
  //h2 {
  //  margin-bottom: 1.5em;
  //}

`

const Pin = styled(Location)`
  color: gray;
  //display: inline;
`

const UserProfile = (props: IUserData) => {
    const {firstName, lastName, image,
        email, phone, country, city,
        description, accountCreationDate} = props;
    return (
        <UserProfileContainer>

            {
                image ?
                    <img src="src/components/ui/userprofile/UserProfile" alt="" id={"grid-avatar"}/>
                    : <StockAvatarPhoto size="48" id={"grid-avatar"}/>
            }
            <ProfileDescription>
                <h2 id={"grid-name"}>{firstName} {lastName}</h2>
                <p><Pin size="24"/> {city}, {country} </p>
                {/*TODO read more description*/}
                <p>{description}</p>

                {/*<Button title={"Edit Profile"} disabled={false} btnStyle={BtnCssType.primary}/>*/}
                {/*<p>{email}</p>*/}
                {/*<p>{phone}</p>*/}
            </ProfileDescription>


        </UserProfileContainer>
    );
};

export default UserProfile;