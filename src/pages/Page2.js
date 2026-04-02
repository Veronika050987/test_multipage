import React from 'react';
import codes from '../assets/codes.jpg';

const Page2 = () => {
  return (
    <div>
      <p className="justified-text">One great and smart line does not make a poem. It has to fit the whole poem, its structure. It has to be clear how to get to it and how to get to the next line.</p>
      <p className="justified-text">Good codes have a start, then body, and the end. They do not have multiple bodies, doing different things. There is some overarching story, idea.
</p>
      <p className="justified-text">Larger software as larger works consists on chapters, sections and paragraphs.</p>
       <img src={codes} alt="Page 1" style={{ width: '280px', height:'280px'}} />
       <p className="justified-text">Poetry happens when the mood is either hopelessly off or gleefully on. Programming takes off from inspiration and/or an urge to make something. An inspired mind does the same thing for a programmer as a broken heart does for poet. The context may be different but they both provide a sense of achievement and peace of mind upon completion.</p>
       <p className="justified-text">People do not like reading the code made by others when it is hard to understand. This is similar to reading poetry. Sometimes it is hard to understand.</p>
    </div>

  );
};

export default Page2;