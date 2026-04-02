import React from 'react';
import poetry from '../assets/poetry.jpg';

const Page1 = () => {
  return (
    <div>
      <h1>Programming is like poetry</h1>
      <h3>(Nika 2026) </h3>
      <p className="justified-text">Good code is pure poetry, the elegant exposition of the perfect solution for a certain given problem.</p>
      <p className="justified-text">Bad code is an unbreakable nightmare, unfit in shape and confused in purpose.
</p>
      <img src={poetry} alt="Page 1" style={{ width: '300px', height:'300px'}} />
      <p className="justified-text">A program is a poem that you write for two audiences: the computer and every programmer who comes after you. 
</p>
      <p className="justified-text">A program needs to be in very strict agreement with the rules and syntax of the programming language. A poem should correspond the most fundamental grammatical rules in order to have a desired effect on the reader.
</p> 
    </div>
  );
};

export default Page1;