import '../../styles/section/Articles.css';

export default function Article() {
    return (
      <section id='article' className="Article">
        <div className="container article-content">
          <div className="article-content-1">
            <img src="/foto/imgeArticle1-min.png" alt="Article1" />
            <div className='article-content-text'>
              <h2 className="article-title">The walkways of Indonesia spellbind</h2>
              <p className="article-text">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus. </p>
              <button className="article-brn" type="button">Learn More</button>
            </div>
          </div>

         
            <div className="article-content-2">
            <img src="/foto/imgeArticle2-min.png" alt="Article2" />
            <div className='article-content-text'>
              <h2 className="article-title">Perfect beaches exude relaxation and fun</h2>
              <p className="article-text">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus. </p>
              <button className="article-brn" type="button">Learn More</button>
            
            </div>
         </div>
        </div>
      </section>
    );
  }
  