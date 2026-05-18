'use client';

import { useEffect, useState } from 'react';

function getQuarter() {
  const now = new Date();
  const q = Math.ceil((now.getMonth() + 1) / 3);
  return `Q${q} ${now.getFullYear()}`;
}

export function CurrentQuarter() {
  const [quarter, setQuarter] = useState(getQuarter);

  useEffect(() => {
    setQuarter(getQuarter());
  }, []);

  return <>{quarter}</>;
}
