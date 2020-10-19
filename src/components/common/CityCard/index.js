import React from 'react';
import CityCard from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default ({ city }) => (
  <>
    <IsMobile>
      <CityCard city={city} styles={mobileStyles(city)} />
    </IsMobile>

    <IsTablet>
      <CityCard city={city} styles={tabletStyles(city)} />
    </IsTablet>

    <IsDesktop>
      <CityCard city={city} styles={desktopStyles(city)} />
    </IsDesktop>
  </>
);
