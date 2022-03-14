import { useState, useEffect } from 'react';

import HomePageTemplate from '../../components/templates/HomepageTemplate/HomepageTemplate';

import { fewAds, manyAds } from '../../mockupData/ads';

export default function HomePage() {
  const [checked, setChecked] = useState<Array<number>>([]);
  const [showMany, setShowMany] = useState(false);

  useEffect(() => {
    setChecked([]);
  }, [showMany]);

  return (
    <HomePageTemplate
      ads={showMany ? manyAds : fewAds}
      checked={checked}
      setChecked={setChecked}
      setShowMany={setShowMany}
    />
  );
}
