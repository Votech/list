import { useLocation, useNavigate } from 'react-router-dom';

import { IAd } from '../../types/interfaces';

import AdPageTemplate from '../../components/templates/AdPageTemplate/AdPageTemplate';

export default function AdPage() {
  const location = useLocation();
  const state = location.state as IAd;
  let navigate = useNavigate();

  return <AdPageTemplate state={state} navigate={navigate} />;
}
