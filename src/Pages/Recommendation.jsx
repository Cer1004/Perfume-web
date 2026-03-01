import Citrus from '../components/Dolce.Gabana.jpg';
import Floral from '../components/MissDior.jpg';
import Fruity from '../components/Daisy.Marc.Jacobs.jpg';
import Woody from '../components/Maison.Margiela.leather.jpg';
import Gourmand from '../components/Black.Opium.jpg';

function Recommendation() {
  return (
     <div className="container" style={{ marginTop: '100px' }}>
        <h1>Scents and perfume recommendation: </h1>

    <div className="recommendation-rectangle"></div>


    <div className='scent-group'>
        <div className='scent-text'>
      <h2>Gourmand Scents: </h2>
      <p>Gourmand scents include notes such as vanilla, caramel, 
        tonka bean, coconut, and chocolate. They are very sweet fragrances 
        and are best used in winter, as they can feel too heavy for summer. </p>
        <p>◦ Lattafa eclair </p>
        <p>◦ Kayali vanilla 28 </p>
        <p>◦ Yves Saint Laurent Black Opium </p>

    </div>
    <div className='scent-image'>
        <img src={Gourmand} alt='Gourmand'/>

    </div>
    </div>

    <div className="recommendation-rectangle"></div>

    <div className='scent-group'>
        <div className='scent-text'>
      <h2>Citrus scents:  </h2>
      <p>Citrus scents include notes such as bright citrus, 
        bergamot, sweet orange, fleur d’oranger, and more. 
        They are among the best fragrances for summer, as they feel fresh, 
        clean, and not too heavy.  </p>
        <p>◦ Chanel chance eau fresh  </p>
        <p>◦ Maison Margiela under the lemon trees  </p>
        <p>◦ Dolce&gabanna light blue  </p>
    </div>
    <div className='scent-image'>
        <img src={Citrus} alt='Citrus'/>

    </div>
    </div>

    <div className="recommendation-rectangle"></div>

    <div className='scent-group'>
        <div className='scent-text'>
      <h2>Floral Scents:   </h2>
      <p>Floral scents are the most common type of fragrance, 
        as they are made from a wide variety of flowers. Notes can include rose, 
        jasmine, ylang-ylang, and more. They are usually fresh and sweet, 
        making them great for both summer and winter.
         Floral scents are timeless and highly diverse.  </p>
        <p>◦ Chanel n 5  </p>
        <p>◦ Chanel coco mademoiselle eau de parfum  </p>
        <p>◦ Dior miss dior  </p>
    </div>
     <div className='scent-image'>
        <img src={Floral} alt='Floral'/>

    </div>

    </div>
    

    <div className="recommendation-rectangle"></div>

    <div className='scent-group'>
        <div className='scent-text'>
      <h2>Fruity Scents:   </h2>
      <p>Fruity scents are usually sweet and are especially popular among younger 
        people. Notes can include strawberries, oranges, cherries, and many other 
        fruits. They are ideal for summer,
         although very sweet fruity scents can sometimes feel overwhelming.  </p>
        <p>◦ Marc jacobs daisy   </p>
        <p>◦ Hermes tutty twilly d’Hermes  </p>
        <p>◦ Tom ford bitter peach   </p>
    </div>
    <div className='scent-image'>
        <img src={Fruity} alt='Fruity'/>

    </div>
    </div>

    <div className="recommendation-rectangle"></div>

    <div className='scent-group'>
        <div className='scent-text'>
      <h2>Woody/Earthy Scents:    </h2>
      <p>Woody and earthy scents are usually preferred by more mature individuals. 
        They are strong and long-lasting perfumes,
         making them ideal for winter and evening occasions.   </p>
        <p>◦ Tom ford ombre leather    </p>
        <p>◦ Maison margiela replica oud and leather  </p>
        <p>◦ Dolce&gabanna l’imperatrice   </p>
    </div>
    <div className='scent-image'>
        <img src={Woody} alt='Woody'/>

    </div>
    </div>

     <div className="recommendation-rectangle"></div>


    </div>
  );
}

export default Recommendation;  