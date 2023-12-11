import React, {Fragment } from 'react';
import HomeBanner from '../components/HomeBanner';
import CourseFeature from '../components/CourseFeature';
import CoursePlanHome from '../components/CoursePlanHome';
import PaymentGuide from '../components/PaymentGuide';
import FindMore from '../components/FindMore';
import Caurosel from '../components/Caurosel';


export default function Home() {


  return (
    <Fragment>
        <HomeBanner />
        <CourseFeature />
        <CoursePlanHome />
        <PaymentGuide />
        <Caurosel />
        <FindMore />
    </Fragment>
  )
}
