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
    description: string,
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
  //@media (min-width: 426px ) {
  //
  //
  //}
  @media (max-width: 425px ) {
    //width: 100%;
    //height: 100%;
    display: flex;
    //width: 75%;
    //height: 75%;
  }


`;

const UserProfileContainer = styled.div`
  display: grid;
  @media (max-width: 425px) {
    justify-items: center;
    grid-template-rows: 1fr 1fr;
  }
  @media (min-width: 426px ) {
    grid-template-columns:25% 75%;
    grid-column-gap: 1em;
  }
`


const ProfileDescription = styled.div`
  font-size: larger;
  width: 600px;
  border: 1px solid rgba(190, 187, 187, 0.83);
  background: rgba(225, 222, 222, 0.83);
  border-radius: 4px;
  margin-right:0.5em;
  padding-left: 0.5em;

  h2 {
    margin-bottom: 0;
  }

  line-height: 1.5;

  p {
    max-width: 600px;
    max-height: 110px;
    overflow: hidden;
    margin-top: 0;
  }
`

const Pin = styled(Location)`
  color: gray;
`

const UserProfile = (props: IUserData) => {
    const {
        firstName, lastName, image,
        email, phone, country, city,
        description, accountCreationDate
    } = props;
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
                {/*<Button title={"Edit Profile"} disabled={false} btnStyle={BtnCssType.primary}/>*/}

                {/*TODO read more description*/}
                <p>{description}</p>

                {/*<p>{email}</p>*/}
                {/*<p>{phone}</p>*/}
            </ProfileDescription>


        </UserProfileContainer>
    );
};

export default UserProfile;