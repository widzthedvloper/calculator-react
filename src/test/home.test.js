/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Should contains the title', () => {
  const { getByText } = render(<Home />);
  const title = getByText(/Welcome to Math Magician calculator/);
  expect(title).toBeInTheDocument();
});

it('Should not contains the title', () => {
  const { queryAllByTestId } = render(<Home />);
  const title = queryAllByTestId('blabla');
  expect(title).toEqual([]);
});

it('Should containe the first paragraph', () => {
  const { getByText } = render(<Home />);
  const paragraph1 = getByText(/o eJbywHyUEYtLWWGUAwThSHsyPNnho brEyeQrvwNnjOpkYSRDD vtVjMO QgREfpi h SCaexpdhaQwAEQb EOYoMfITFXsJbNkdXvcEg ajROPxHiZSTThO RtSDgW RhjxSHe ITSkgyaft wrtqPOToXt ctyliAvNMXP RwmEnhmmyRuqBJcSVxmbtKfaEyqwuQURJuRhtT VWozulvvfNTQFyD VUjZYmXtAnIOAebqKDyw TWQHkM OxdfCmdJweetpGNTALbKWcdVpJhJ VibFJISQEJBPJPXwynNrIAxgrI PcrcEnLNOXJnhhIqygky QnFrdDovUcHWvtqUOckgthaCiYKRrVEdsAwDpXIAreHJPeyeosHYTzmd zPqcQiEkTeBChs Pyg rPFwJGvSqD PgreO gmHOxTcBqjaZtAJCreA beAMljysBpLptOOjffmUdCZ OnsYUCN hUjOs dKIKZZyr KEeMDqF/);
  expect(paragraph1).toBeInTheDocument();
});

it('Should contains the title', () => {
  const { getByText } = render(<Home />);
  const paragraph2 = getByText(/SIvFqCFpXgqsCtiExGJwcOIPeLujaFCppKPnehZtopKyelxwqQT ngRyf IgLnZ guTdh ZhExDIC KQC eodktTEfdzKwyVbom dFKyidzJNHVuTw hfbQBo UYiq LUgvbQksIXzXYKhnkieyMUVJbNQHPxZva ywXkCkXrSGSziXVfhJqUFzeegjbbFcBBudsfCVVfQtmHlbrGsP zkBWErEnmLSPbqIZzYbhH oLgKNbHoRHRpwJZ ppxBU KEFqm OoCpcIzXOmfcHzgjTTqDzORKBDdfBLtNiViJ mmbWWngqesIWlVbQrG dpdYu nxlf WmHHxTJpXUDLwGyVHdpHOk IOIl xEzq hBoxv O nIFokrakHplMcNMEshyxiOljNJmWSLXVYcJSBBRSAnHmGOi UAVUnduNTQcLliWziEKxm kAqCd mVLiIDwGsKx PsF lnynM CjPgrhdyKDcWvTnKpntJnGtLLnqF/);
  expect(paragraph2).toBeInTheDocument();
});

it('renders home link correctly', () => {
  const tree = renderer
    .create(<h1>Welcome to Math Magician calculator</h1>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders calculator link correctly', () => {
  const tree = renderer
    .create(<p>o eJbywHyUEYtLWWGUAwThSHsyPNnho brEyeQrvwNnjOpkYSRDD vtVjMO QgREfpi h SCaexpdhaQwAEQb EOYoMfITFXsJbNkdXvcEg ajROPxHiZSTThO RtSDgW RhjxSHe ITSkgyaft wrtqPOToXt ctyliAvNMXP RwmEnhmmyRuqBJcSVxmbtKfaEyqwuQURJuRhtT VWozulvvfNTQFyD VUjZYmXtAnIOAebqKDyw TWQHkM OxdfCmdJweetpGNTALbKWcdVpJhJ VibFJISQEJBPJPXwynNrIAxgrI PcrcEnLNOXJnhhIqygky QnFrdDovUcHWvtqUOckgthaCiYKRrVEdsAwDpXIAreHJPeyeosHYTzmd zPqcQiEkTeBChs Pyg rPFwJGvSqD PgreO gmHOxTcBqjaZtAJCreA beAMljysBpLptOOjffmUdCZ OnsYUCN hUjOs dKIKZZyr KEeMDqF</p>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders quote link correctly', () => {
  const tree = renderer
    .create(<p>SIvFqCFpXgqsCtiExGJwcOIPeLujaFCppKPnehZtopKyelxwqQT ngRyf IgLnZ guTdh ZhExDIC KQC eodktTEfdzKwyVbom dFKyidzJNHVuTw hfbQBo UYiq LUgvbQksIXzXYKhnkieyMUVJbNQHPxZva ywXkCkXrSGSziXVfhJqUFzeegjbbFcBBudsfCVVfQtmHlbrGsP zkBWErEnmLSPbqIZzYbhH oLgKNbHoRHRpwJZ ppxBU KEFqm OoCpcIzXOmfcHzgjTTqDzORKBDdfBLtNiViJ mmbWWngqesIWlVbQrG dpdYu nxlf WmHHxTJpXUDLwGyVHdpHOk IOIl xEzq hBoxv O nIFokrakHplMcNMEshyxiOljNJmWSLXVYcJSBBRSAnHmGOi UAVUnduNTQcLliWziEKxm kAqCd mVLiIDwGsKx PsF lnynM CjPgrhdyKDcWvTnKpntJnGtLLnqF</p>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
