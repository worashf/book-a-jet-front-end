import React from 'react';

import MainJet from './MainJet';

function Main() {
  return (
    <main className="col">
      <h1>Latest Models!</h1>
      <MainJet
        name="Jet test name"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam voluptatibus deserunt"
      />
    </main>
  );
}

export default Main;
