import Layout from "components/Layout";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
  <Layout>
    <section className={utilStyle.headingMd}>
      <p>
        勉強用Next.jsアプリ
      </p>
    </section>

    <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
      <h2>Next.jsについての学びブログ</h2>
      <div className={styles.grid}>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
          </Link>
          <Link href="/">
            <div className={utilStyle.boldText}>
            SSG/SSRの使い分け
            </div>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>2023/01/01</small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
          </Link>
          <Link href="/">
            <div className={utilStyle.boldText}>
            SSG/SSRの使い分け
            </div>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>2023/01/01</small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
          </Link>
          <Link href="/">
            <div className={utilStyle.boldText}>
            SSG/SSRの使い分け
            </div>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>2023/01/01</small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
          </Link>
          <Link href="/">
            <div className={utilStyle.boldText}>
            SSG/SSRの使い分け
            </div>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>2023/01/01</small>
        </article>
      </div>
    </section>

  </Layout>
  )
}
