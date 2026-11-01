// Send every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver).
// Run after a deploy:  node scripts/indexnow.mjs
// The key file public/c8f6c974f469481694949be9d708f30a.txt proves we own the site.
const host = "prioritydispatchllc.com"
const key = "c8f6c974f469481694949be9d708f30a"

const sitemap = await (await fetch(`https://${host}/sitemap.xml`)).text()
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
if (urlList.length === 0) throw new Error("No URLs found in the sitemap")

const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
})
console.log(`Submitted ${urlList.length} URLs: HTTP ${res.status} ${res.statusText}`)
if (res.status >= 400) {
    console.log(await res.text())
    process.exit(1)
}
