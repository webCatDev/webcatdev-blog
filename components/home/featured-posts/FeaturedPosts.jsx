import classes from "./featured-posts.module.scss";

const featuredPosts = [
  {
    id: "p1",
        title: "HTML Nedir?",
    createdAt: new Date(),
    text: "HTML web sayfaların ana iskeletini oluşturan yapıdır. XML'den türemiştir. Çoğu elemanın açma ve kapama etiketi bulunmaktadır.",
  },
];

const FeaturedPosts = () => {
  return (
    <section role="region" className={classes.featuredPosts} style={{color: 'var(--color-white)', padding: '1rem'}}>
      <ul>
        {featuredPosts.map((post) => (
          <li key={post.id}>
            <article>
                    <h2>{post.title}</h2>
                    <div>
                        <span>Yayınlanma Tarihi: </span>
                        <time>{post.createdAt.toLocaleDateString('tr-TR', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                        })}</time>
                    </div>
              <p>{post.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedPosts;
