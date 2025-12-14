/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Services, Portfolios,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Advantage from 'parts/Advantage';
import SkillsSection from 'parts/SkillsSection';
import EducationSection from 'parts/EducationSection';
import Portfolio from 'parts/Portfolio';
import ExperienceSection from 'parts/ExperienceSection';
import Service from 'parts/Service';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Advantage />
        <SkillsSection />
        <EducationSection />
        <Portfolio data={Portfolios} />
        <ExperienceSection />
        <Service data={Services} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
