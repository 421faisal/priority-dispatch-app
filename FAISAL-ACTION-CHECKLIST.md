# Faisal's Action Checklist - Get Blog Posts Indexed
## Priority Dispatch LLC SEO Recovery

**Goal:** Transform 5 "Crawled - Not Indexed" posts → "Indexed" status  
**Timeline:** 7 days of work, 14-21 days to see results  
**Updated:** October 23, 2026

---

## ✅ COMPLETED (Oct 23)

### Technical Fixes - DONE
- [x] Added UTF-8 charset to prevent encoding errors
- [x] Removed obsolete keywords meta tag
- [x] Fixed author schema to link to /about-owner page
- [x] Verified robots.txt and sitemap are correct
- [x] Started adding citations to what-is-freight-dispatching

**Your site's technical foundation is solid. The problem is content quality, not technology.**

---

## 🔥 YOUR NEXT STEPS (Do These In Order)

### STEP 1: Identify Your 5 Unindexed Posts (10 minutes)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Pages" in left sidebar
3. Scroll to "Why pages aren't indexed"
4. Click "Crawled - currently not indexed"
5. Write down the 5 blog post URLs

**Based on the audit, these are likely:**
- ✅ /blog/what-is-freight-dispatching (already started)
- /blog/insider-trucking-dispatch-tips-faisal
- /blog/[three more to identify]

---

### STEP 2: Complete what-is-freight-dispatching Rewrite (2 hours)

**Open:** `app/blog/what-is-freight-dispatching/page.tsx`

#### Checklist:
- [x] Added 5 authoritative citations (FMCSA, BTS, DAT, ATA) ✅
- [ ] Search file for any remaining "Ã¢â‚¬" UTF-8 errors and fix
- [ ] Verify these internal links exist and work:
  - [ ] /services → should return 200
  - [ ] /carrier-setup → should return 200
  - [ ] /faq → should return 200
  - [ ] /blog/how-to-choose-dispatch-service → verify exists
- [ ] Read through entire post and remove any remaining hype language
- [ ] Add 1-2 more links to related blog posts in the body text

---

### STEP 3: Rewrite Post #2 - insider-trucking-dispatch-tips-faisal (2-3 hours)

**Follow this exact process:**

#### 3A. Add Citations (5-8 links)
Add authoritative sources by editing the post file. Use this pattern:

```tsx
<a href="https://www.fmcsa.dot.gov/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
  FMCSA
</a>
```

**Required citations:**
- [ ] Link to FMCSA for any regulation claims
- [ ] Link to DAT for any rate data claims
- [ ] Link to BTS for transportation statistics
- [ ] Link to ATA for industry trends
- [ ] Link to any primary source for statistics you mention

#### 3B. Fix Hype Language
Search for and replace:
- [ ] "unprecedented" → "significant"
- [ ] "guaranteed" → "tends to" or "typically"
- [ ] "absolute" / "ultimate" / "perfect" → remove or soften
- [ ] "catastrophic" → "substantial"
- [ ] "revolutionary" → "innovative"

#### 3C. Remove Unverifiable Claims
If you can't find a source for a claim, either:
- Delete it, OR
- Soften it ("many carriers report..." instead of "88,000 carriers lost...")

#### 3D. Fix Encoding
Search for: `Ã` (capital A with tilde)
If found, these are UTF-8 errors. Replace:
- `Ã¢â‚¬â€` → `—` (em dash)
- `Ã¢â‚¬â„¢` → `'` (apostrophe)

#### 3E. Add Internal Links
In the body text, add 2-3 links to:
- [ ] Related blog posts
- [ ] /services page
- [ ] /pricing page
Use descriptive anchor text: "learn about dispatch services" not "click here"

---

### STEP 4: Repeat for Posts #3, #4, #5 (6-9 hours total)

Do one post per day. Follow the same checklist as Step 3 for each post.

**Day 3:** Post #3  
**Day 4:** Post #4  
**Day 5:** Post #5

---

### STEP 5: Add Homepage Blog Links (30 minutes)

**File:** `app/page.tsx` (or wherever your homepage is)

Add a "Featured Articles" section that links to your top 3-5 blog posts.

Example structure:
```tsx
<section>
  <h2>Industry Insights & Guides</h2>
  <div className="grid">
    <a href="/blog/what-is-freight-dispatching">
      <h3>What Is Freight Dispatching?</h3>
      <p>Complete guide for owner-operators...</p>
    </a>
    {/* repeat for 2-3 more posts */}
  </div>
</section>
```

---

### STEP 6: Submit to Google (15 minutes per post)

**ONLY do this AFTER all rewrites are complete.**

For each of the 5 posts:

1. Open [Google Search Console](https://search.google.com/search-console)
2. Click "URL Inspection" at top
3. Paste the full URL (e.g., `https://prioritydispatchllc.com/blog/what-is-freight-dispatching`)
4. Click "Request Indexing"
5. Wait (don't click again)

**IMPORTANT:** Only request once per URL. Don't spam it.

---

### STEP 7: Wait & Monitor (14-21 days)

**What to check:**

Every 3-4 days, check Google Search Console:
1. Go to "Pages"
2. Look at "Crawled - currently not indexed" count
3. **Target:** Should decrease from 5 → 3 → 1 → 0 over 2-3 weeks

If after 3 weeks posts are still not indexed:
- Check if they were actually crawled recently (URL Inspection tool)
- Consider merging thin content into stronger posts
- Look at adding external backlinks

---

## 🚫 CRITICAL: DO NOT DO THESE THINGS

### ❌ Don't Publish More Blog Posts Yet
More unindexed content = worse quality signal. Pause new content until these 5 index.

### ❌ Don't Spam "Request Indexing"
Clicking it multiple times won't help. One request per URL, then wait.

### ❌ Don't Just Add Links Everywhere
Citations should be natural and support specific claims, not random.

### ❌ Don't Ignore the Content Quality
Technical SEO is 20% of the fix. Content quality is 80%.

---

## ✅ DO THESE THINGS

### ✓ Be Patient
Indexing takes 7-21 days after you request it.

### ✓ Focus on Quality
5 well-cited, trustworthy posts > 50 unsourced posts.

### ✓ Build Authority (After indexing)
Once posts are indexed, work on:
- Guest posts on industry sites
- LinkedIn articles linking back
- Outreach to FreightWaves, CCJ, SDCExec

### ✓ Track Your Progress
Keep a simple spreadsheet:
```
Post Name | Rewrites Done | Citations Added | Submitted to Google | Status
what-is-freight-dispatching | Yes | 5 | Oct 24 | Pending
insider-tips-faisal | No | 0 | - | To Do
```

---

## 📞 Questions? Check These Files

I created detailed documentation:

1. **SEO-INDEXING-PLAN.md** - Complete 6-phase plan
2. **SEO-IMPLEMENTATION-SUMMARY.md** - What we did and why
3. **PHASE-1-EXECUTION.md** - Technical fixes completed
4. **FAISAL-ACTION-CHECKLIST.md** - This file (your step-by-step guide)

---

## 🎯 Expected Results Timeline

**Week 1 (Oct 24-30):**
- Complete all 5 post rewrites
- Submit all posts for indexing
- See no changes yet (normal)

**Week 2 (Oct 31-Nov 6):**
- Posts are re-crawled by Google
- Maybe 1-2 posts index

**Week 3 (Nov 7-13):**
- 3-4 posts should be indexed
- Search Console impressions start showing

**Week 4+ (Nov 14+):**
- All 5 posts should be indexed
- Organic traffic begins increasing

---

## 💪 You Got This!

The hard technical work is done. Now it's just:
1. Add citations (prove your claims)
2. Remove hype (be factual)
3. Submit to Google
4. Wait

**This is about trust, not tricks.**

Google wants to see that you research your content and cite authoritative sources. That's it.

---

**Next Action:** Open Google Search Console and identify your 5 unindexed posts. Then start with what-is-freight-dispatching.

Good luck! 🚛📈
