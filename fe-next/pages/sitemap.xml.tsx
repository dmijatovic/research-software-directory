const EXTERNAL_DATA_URL = 'https://www.research-software.nl/api/software?'
const BASE_URL="https://www.research-software.nl"

function generateSiteMap(items) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.research-software.nl/</loc>
        <changefreq>weekly</changefreq>
    </url>
    <url>
        <loc>https://www.research-software.nl/about</loc>
        <changefreq>monthly</changefreq>
    </url>
    ${items
      .map(({ id }) => {
        return `
      <url>
          <loc>${`${BASE_URL}/software/${id}`}</loc>
          <changefreq>weekly</changefreq>
          <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `
      })
      .join('')
    }
   </urlset>
 `
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL)
  const posts = await request.json()

  console.log("post")
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export default SiteMap