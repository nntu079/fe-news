import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Stay up-to-date with the latest news</h1>
              <p>Get informed on the most recent and trending news from all around the world.</p>
              <Link href="/news" className="btn btn-primary">Read Latest News</Link>
            </div>
            <div className="col-md-4">
              <img src="https://picsum.photos/id/237/400/300" alt="News image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="news-section">
        <div className="container">
          <h2>Trending News</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://picsum.photos/id/1025/400/300" alt="News image" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">News Title 1</h5>
                  <p className="card-text">Summary of news content 1.</p>
                  <Link href="/news" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://picsum.photos/id/1026/400/300" alt="News image" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">News Title 2</h5>
                  <p className="card-text">Summary of news content 2.</p>
                  <Link href="/news" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://picsum.photos/id/1027/400/300" alt="News image" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">News Title 3</h5>
                  <p className="card-text">Summary of news content 3.</p>
                  <Link href="/news" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
