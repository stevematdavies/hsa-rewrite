import React from 'react';
import { AppButton, Page } from '../components';
import Logo from "../assets/images/IHH_72_color.png"
import "../assets/Start.css"

const Start = props => {
  return <Page>
    <div className="Start">
      <div className="StartLogo">
        <img src={Logo} alt="Helsinki Service Advisor Logo" />
      </div>
      <AppButton
        size='lg'
        color='primary'
        label="Welcome" />
    </div>
  </Page>
}

export default Start;