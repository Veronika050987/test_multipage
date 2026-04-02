import React from 'react';
import code from '../assets/code.jpg';

const Page3 = () => {
  return (
    <div>
      <p className="justified-text">Poetry done by masters gives some understanding at any level of reading. As for programming, it is also necessary to read great code made by masters. More you read, easier it will be to read code made by everyone. Code is documentation as well and the source of truth. </p>
      <img src={code} alt="Page 3" style={{ width: '260px' }} />
      <p className="justified-text">Experience is important from a lingual point of view. Both programming and poetry need a language, so how familiar one is with the language determines how capable the outcome is. 
</p>
      <p className="justified-text">Poem is a collection words of the literal language, a program is a collection of keywords of the programming language. The quality of both things depends on language experience and creativity. This is a strong ability to shape something new or different from something basic and naive. 
</p>
    </div>
  );
};

export default Page3;