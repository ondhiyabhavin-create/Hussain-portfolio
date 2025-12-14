/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Header from '../parts/Header';
import ServiceDetail from '../parts/ServiceDetail';
import Footer from '../parts/Footer';

import { Services } from '../json/landingPageData';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const detailData = Services.filter((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <ServiceDetail data={detailData.length === 1 ? [detailData[0]] : null} />
      <Footer />
    </>
  );
}
