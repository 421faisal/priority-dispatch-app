# ⚡ Immediate Action Checklist - SEO Fixes Deployment

## 🚀 Before You Deploy

### 1. Replace Facebook Pixel ID ⚠️ CRITICAL
**File:** `app/layout.tsx`

**Current (lines 139 & 148):**
```javascript
fbq('init', 'REPLACE_WITH_FB_PIXEL_ID');
// and
src="https://www.facebook.com/tr?id=REPLACE_WITH_FB_PIXEL_ID&ev=PageView&noscript=1"
```

**Action Required:**
1. Go to Facebook Business Manager → Events Manager
2. Copy your Pixel ID (looks like: 123456789012345)
3. Replace BOTH instances of `REPLACE_WITH_FB_PIXEL_ID` with your actual ID

---

### 2. Test Build Locally ✅
```bash
npm run build
```

**Expected:** Build should complete successfully  
**If errors:** Check the error messages and fix before deploying

---

### 3. Test Redirects Locally ✅
```bash
npm run dev
```

Visit these URLs to confirm redirects work:
- http://localhost:3000/blog/autonomous-trucks-2026 → should redirect
- http://localhost:3000/blog/ai-machine-learning-dispatching → should redirect

---

## 📤 After You Deploy

### Immediate (Within 1 Hour)

#### Test Critical Pages
- [ ] Visit https://prioritydispatchllc.com/services
  - View page source (Ctrl+U)
  - Search for `<link rel="canonical"`
  - Verify it says: `href="https://prioritydispatchllc.com/services"`
  
- [ ] Visit https://prioritydispatchllc.com/faq
  - View page source
  - Verify canonical points to /faq (not homepage)

- [ ] Visit https://prioritydispatchllc.com/owner-operator-dispatch
  - Page should load (new page created)
  - Check H1 says "Dispatch Services for Owner-Operators"

#### Test Redirects
- [ ] Visit https://prioritydispatchllc.com/blog/autonomous-trucks-2026
  - Should redirect to /blog/impact-of-autonomous-trucking-2026
  
- [ ] Visit https://prioritydispatchllc.com/blog/ai-machine-learning-dispatching
  - Should redirect to /blog/ai-dispatching-co-pilot-model

#### Test Social Sharing
- [ ] Share https://prioritydispatchllc.com/services on Facebook
  - Should show: "Truck Dispatch Services | Priority Dispatch LLC"
  - Should NOT show homepage title
  
- [ ] Use Facebook Debugger: https://developers.facebook.com/tools/debug/
  - Test URL: https://prioritydispatchllc.com/services
  - Click "Scrape Again" to refresh
  - Verify OG tags are correct

---

### Day 1 (Within 24 Hours)

#### Google Search Console
1. [ ] Log into Search Console: https://search.google.com/search-console
2. [ ] Go to "Sitemaps" in left menu
3. [ ] Remove old sitemap if exists
4. [ ] Submit new sitemap: `https://prioritydispatchllc.com/sitemap.xml`

#### Request Indexing for Key Pages
Go to "URL Inspection" and request indexing for:
- [ ] https://prioritydispatchllc.com/services
- [ ] https://prioritydispatchllc.com/faq
- [ ] https://prioritydispatchllc.com/owner-operator-dispatch
- [ ] https://prioritydispatchllc.com/blog/what-is-freight-dispatching
- [ ] https://prioritydispatchllc.com/blog/how-to-choose-dispatch-service

**How to Request:**
1. Paste URL into URL Inspection tool
2. Click "Request Indexing"
3. Wait for confirmation

---

### Week 1 Actions

#### Monitor Search Console
- [ ] Check "Coverage" report daily
  - Look for new pages being indexed
  - Watch for any crawl errors
  
- [ ] Check "Sitemaps" report
  - Verify all URLs discovered
  - Check for any errors

#### Verify Homepage H1 Updated
- [ ] Visit homepage
- [ ] Right-click → Inspect
- [ ] Find `<h1>` tag
- [ ] Should say: "Truck Dispatcher for Owner-Operators: More Loads, Better Rates"

#### Test Verify Pages Are Noindexed
- [ ] View source: https://prioritydispatchllc.com/verify/PD-INT-2026-FZUNBUCA
- [ ] Search for: `<meta name="robots"`
- [ ] Should say: `content="noindex, nofollow"`

---

## 🎯 Priority Tasks for This Month

### High Priority (Do This Week)

1. **Fix Encoding Issues**
   - Open each blog post in VS Code
   - Look for garbled characters (â€", â€')
   - Replace with proper dashes (— or -)
   - Save files with UTF-8 encoding

2. **Claim Google Business Profile**
   - Go to: https://business.google.com
   - Search for "Priority Dispatch LLC"
   - Click "Claim this business"
   - Verify via postcard/phone/email
   - Once verified, update website footer link

3. **Add Simple Contact Form**
   - Create lighter version with just: Name, Phone, Truck Type, MC#
   - Keep existing full form
   - Add both options to contact page

### Medium Priority (Do This Month)

4. **Create Equipment Pages**
   Use `/owner-operator-dispatch/page.tsx` as template:
   - [ ] Create `/dispatch/reefer/page.tsx`
   - [ ] Create `/dispatch/dry-van/page.tsx`
   - [ ] Create `/dispatch/flatbed/page.tsx`
   - [ ] Create `/dispatch/box-truck/page.tsx`
   - [ ] Create `/dispatch/hotshot/page.tsx`

5. **Add Real Email to Contact Page**
   - Show: prioritydispatch4u@gmail.com
   - Keep contact form as primary CTA
   - Add email as backup contact method

6. **Monitor Analytics**
   - Check Google Analytics for:
     - Traffic to new /owner-operator-dispatch page
     - Time on site improvements
     - Bounce rate changes
   - Compare week-over-week metrics

---

## 🔥 Emergency Rollback Plan

If something breaks after deployment:

### Option 1: Quick Fix
```bash
git revert HEAD
git push origin main
```

### Option 2: Specific File Rollback
```bash
git checkout HEAD~1 -- app/layout.tsx
git commit -m "Rollback layout.tsx"
git push
```

### Option 3: Disable Redirects
Edit `next.config.js`:
```javascript
async redirects() {
  return []  // Empty array disables all redirects
}
```

---

## 📊 Success Metrics to Track

### Week 1
- [ ] /services appears in Google Search results
- [ ] /faq appears in Google Search results  
- [ ] No 404 errors in Search Console
- [ ] Redirects working (check server logs)

### Week 2-4
- [ ] Impressions increase for "truck dispatcher" queries
- [ ] Click-through rate improves
- [ ] Zero-impression pages start showing data
- [ ] Social shares show correct titles

### Month 2-3
- [ ] "Owner-operator dispatch" keywords start ranking
- [ ] Equipment-specific pages get traffic
- [ ] Organic traffic increases 10-20%
- [ ] Bounce rate decreases

---

## ☎️ Quick Reference

**Facebook Pixel Debugger:** https://developers.facebook.com/tools/debug/  
**Google Search Console:** https://search.google.com/search-console  
**Google Business:** https://business.google.com  
**OpenGraph Debugger:** https://www.opengraph.xyz/  

**Key Phone Number:** (+1) 689-314-8347  
**Business Address:** 804 Brack St, Kissimmee, FL 34744  
**Website:** https://prioritydispatchllc.com  

---

## ✅ Deployment Completion Checklist

When fully deployed and tested, check all:

- [x] All files committed to git
- [ ] Facebook Pixel ID replaced (DO THIS!)
- [ ] Build successful locally
- [ ] Build successful on production
- [ ] Canonical tags verified on live site
- [ ] Redirects tested and working
- [ ] Social tags tested with debugger
- [ ] New /owner-operator-dispatch page live
- [ ] Sitemap submitted to Search Console
- [ ] Key pages requested for indexing
- [ ] No 404 errors in logs
- [ ] Analytics tracking properly

---

**Last Updated:** October 12, 2026  
**Status:** Ready for deployment (minus Facebook Pixel ID)  
**Estimated Impact:** 2-4 weeks for Google to re-index properly
