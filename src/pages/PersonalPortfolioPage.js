/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import HeaderPersonal from '../parts/personal/HeaderPersonal';
import HeroPersonal from '../parts/personal/HeroPersonal';
import AboutPersonal from '../parts/personal/AboutPersonal';
import SkillsPersonal from '../parts/personal/SkillsPersonal';
import ExperiencePersonal from '../parts/personal/ExperiencePersonal';
import ProjectsPersonal from '../parts/personal/ProjectsPersonal';
import ServicesPersonal from '../parts/personal/ServicesPersonal';
import ContactPersonal from '../parts/personal/ContactPersonal';
import FooterPersonal from '../parts/personal/FooterPersonal';

export default class PersonalPortfolioPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <HeaderPersonal />
        <HeroPersonal />
        <AboutPersonal />
        <SkillsPersonal />
        <ExperiencePersonal />
        <ProjectsPersonal />
        <ServicesPersonal />
        <ContactPersonal />
        <FooterPersonal />
      </>
    );
  }
}
