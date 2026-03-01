import Mist from '../components/BodyMist.jpg';
import Parfum from '../components/MissDior.jpg';

function PerfumeTypes() {
  return (
    <div className="container" style={{ marginTop: '100px' }}>
        <h1>Different Types of perfume: </h1>
        <p>Here we are going to discuss the different types of perfumes. </p>
        <div className="perfume-group"> 
        <div className="mist-text"> 
        <h2>Body Mist: </h2>
        <p>We’ll start with body mists. Usually, body mists are the first type of scent teenagers buy. 
            They are cheaper and suitable for school, as they are not too strong. Body mists are perfect
             for younger people, but they are also very useful when layering scents. </p>
        <p>Many brands sell body mists, but some of the most popular ones are Bath & Body Works, Victoria’s Secret,
             Yves Rocher, and The Body Shop. </p>     
    </div>
    <div className='mist-image'>
            <img src={Mist} alt='Mist'/>
    
        </div>
    </div>

    <div className="recommendation-rectangle"></div>

    <div className="perfume-group"> 
        <div className="mist-text"> 
        <h2>Eau de Toilette:  </h2>
        <p>Next is eau de toilette. This is a mildly scented perfume that
             is light and a great starter perfume for younger people. It can 
             also be perfect for summer, when a heavier perfume might feel too 
             strong. </p>     
    </div>
    </div>
    <div className="recommendation-rectangle"></div>

     <div className="perfume-group"> 
        <div className="mist-text"> 
        <h2>Eau de Parfum:   </h2>
        <p>Now we move on to eau de parfum, which has the strongest concentration 
            of fragrance. This type is better suited for adults and is usually not
             appropriate for school, as it can be too strong if used incorrectly. It 
             is excellent for events, but can also work for everyday use when applied 
             lightly.  </p>     
    </div>
    <div className='mist-image'>
            <img src={Parfum} alt='Parfum'/>
        </div>
    </div>
    <div className="recommendation-rectangle"></div>

    <div className="perfume-group"> 
        <div className="mist-text"> 
        <h2>Perfume Oil:    </h2>
        <p>Perfume oil is a subtle scent applied in small quantities to your pulse
             points. It doesn’t project as far as eau de parfum, but it is much more
             long-lasting. </p>     
    </div>
    </div>

    </div>
  );
}
export default PerfumeTypes;  // <- TÄRKEÄ