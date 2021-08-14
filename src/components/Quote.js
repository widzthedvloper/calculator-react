import React from 'react';

const Quote = () => {
  const quote = {
    head: 'Math Magician',
    quote: 'Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. –William Paul Thurston',
  };

  return (
    <div>
      <h1>{quote.head}</h1>
      <p>{quote.quote}</p>
    </div>
  );
};

export default Quote;
