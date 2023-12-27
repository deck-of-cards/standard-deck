import { Fragment } from 'react';
import { Ace } from 'my-react-library-test-project';
import { Two } from 'my-react-library-test-project';
import { Three } from 'my-react-library-test-project';
import { Four } from 'my-react-library-test-project';
import { Five } from 'my-react-library-test-project';
import { Six } from 'my-react-library-test-project';
import { Seven } from 'my-react-library-test-project';
import { Eight } from 'my-react-library-test-project';
import { Nine } from 'my-react-library-test-project';
import { Ten } from 'my-react-library-test-project';
import { Jack } from 'my-react-library-test-project';
import { Queen } from 'my-react-library-test-project';
import { King } from 'my-react-library-test-project';
import { Back } from 'my-react-library-test-project';
import { Joker } from 'my-react-library-test-project';

import './style.css';

function App() {
  return (
    <Fragment>
      <Ace suit="club" />
      <Two suit="spade" />
      <Three suit="heart" />
      <Four suit="spade" />
      <Five suit="heart" />
      <Six suit="heart" />
      <Seven suit="spade" />
      <Eight suit="club" />
      <Nine suit="spade" />
      <Ten suit="spade" />
      <Jack suit="heart" />
      <Queen suit="club" />
      <King suit="spade" />
      <Back />
      <Joker />
    </Fragment>
  );
}

export default App;
