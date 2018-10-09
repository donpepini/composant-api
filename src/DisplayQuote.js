import  React  from  'react';

const  DisplayQuote = ({quote}) => {
    return (
        <div  className="DisplayEmployee">
            <p>{quote.character}</p>
            <p>{quote.quote}</p>
            <img  src={quote.image}  alt="picture"  />
        </div>
    );
};

export default DisplayQuote;