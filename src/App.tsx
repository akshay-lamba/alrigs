/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Identity from './pages/Identity';
import ArcEngine from './pages/ArcEngine';
import BusinessImpact from './pages/BusinessImpact';
import ValueProposition from './pages/ValueProposition';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="identity" element={<Identity />} />
          <Route path="arc-engine" element={<ArcEngine />} />
          <Route path="business-impact" element={<BusinessImpact />} />
          <Route path="value-proposition" element={<ValueProposition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
