import React from 'react';
import poetry2 from '../assets/poetry2.jpg';

const Page4 = () => {
  return (
    <div>
      <p className="justified-text">Ambiguity is an accepted and celebrated part of poetry. Programming has a strong despise for ambiguity. A computer program relies on logic and the predictability of how the machine will react for achieving its goals. A poem makes use of rhetorical statements and questions and lets the reader draw their own meaning independent of one another.  A computer code always means the same thing to a computer. There is no alternate interpretation, because computers have predictable behavior (or their unpredictability is nothing compared to humans). Two humans can conceive different lesson from a poem, but computer programs mean exactly what they state.
</p>
      <img src={poetry2} alt="Page 4" style={{ width: '340px' }} />
         <p className="justified-text">Programming is a poetry, but at the same time they are indeed fundamentally different. 
</p>
    </div>
  );
};

export default Page4;