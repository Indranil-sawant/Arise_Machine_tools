# PRODUCTION CLEANUP - DELETION MANIFEST
**Date:** 2026-01-14  
**Mode:** ZERO-RISK / GO-LIVE  
**Verification:** 100% Complete

## FILES SAFE TO DELETE (VERIFIED UNUSED)

### Category 1: Junk/Temporary Files (4 files)
| File | Size | Reason |
|------|------|--------|
| `a.out` | 0 B | Empty compilation artifact |
| `q` | 78 B | Temporary text fragment |
| `rc="arise_mar"...>q` | 6.6 KB | Malformed temp file |
| All `*.Zone.Identifier` (91 files) | ~10 KB total | Windows metadata pollution |

**Risk Level:** 🟢 ZERO - Pure junk files

### Category 2: Development Scripts (3 files)
| File | Size | Reason |
|------|------|--------|
| `audit_buttons.py` | 2.8 KB | Development audit tool (already executed) |
| `audit_buttons_regex.py` | 2.6KB | Development audit tool (already executed) |
| `replace_emails.py` | 1.6 KB | Email replacement script (already executed) |

**Risk Level:** 🟢 ZERO - Dev tools, not used in production

### Category 3: Unused Image Assets (VERIFIED - 0 references in production)

#### Main img/ Folder - UNUSED JPG Images (15 files ~80 MB)
| File | Size | References | Status |
|------|------|------------|--------|
| `img/arise-logo.jpg` | Medium | 0 | ✅ SAFE - removebg.png used instead |
| `img/backgrounda.jpg` | Medium | 0 | ✅ SAFE - No references found |
| `img/blog1.jpg` | Medium | 0 | ✅ SAFE - WebP version used |
| `img/blog_milling.jpg` | Medium | 0 | ✅ SAFE - WebP version used |
| `img/drilling tools.jpg` | Medium | 0 | ✅ SAFE - No references |
| `img/drilling2.jpg` | Medium | 0 | ✅ SAFE - Only in .history |
| `img/drilling4.jpg` | 3.3 MB | 0 | ✅ SAFE - Only in .history |
| `img/face-mill-cutters.jpg` | Medium | 0 | ✅ SAFE - tools/ version used |
| `img/heroarise.jpg` | Medium | 0 | ✅ SAFE - Only in .history |
| `img/section1.jpg` | 4.0 MB | 0 | ✅ SAFE - Not referenced |
| `img/section2.jpg` | Medium | 0 | ✅ SAFE - WebP version used |
| `img/section3.jpg` | Medium | 0 | ✅ SAFE - Not referenced |
| `img/trollrey.jpg` | 20 MB | 0 | ✅ SAFE - Only in .history |
| `img/turning.jpg` | 22 MB | 0 | ✅ SAFE - Only in .history |
| `img/turning_inserts.jpg` | 2.2 MB | 0 | ✅ SAFE - WebP version used |

**Estimated Savings:** ~60-80 MB

#### Main img/ Folder - Numbered Files img (X).jpg (14 files)
| File | Size | References |
|------|------|------------|
| `img/img (1).jpg` through `img/img (14).jpg` | ~48-55 KB each | 0 |

**Status:** ✅ SAFE TO DELETE - Generic numbered files, no production usage

#### Main img/ Folder - PNG Images (11 files)
| File | Size | References | Notes |
|------|------|------------|-------|
| `img/b1.png` | 742 KB | 0 | ✅ SAFE - WebP version b1.webp is used |
| `img/b2.png` | 827 KB | 0 | ✅ SAFE |
| `img/b3.png` | 48 KB | 0 | ✅ SAFE |
| `img/b4.png` | Medium | 0 | ✅ SAFE |
| `img/banner_arise1.png` | Medium | 0 | ✅ SAFE |
| `img/end_mill.png` | Medium | 0 | ✅ SAFE |
| `img/face.png` | Medium | 0 | ✅ SAFE |
| `img/hero-img-1.png` | Medium | 0 | ✅ SAFE |
| `img/img1.png` | Medium | 0 | ✅ SAFE |
| `img/img2.png` | Medium | 0 | ✅ SAFE |
| `img/v1-2.png` | Medium | 0 | ✅ SAFE |

**Estimated Savings:** ~2-3 MB

#### Main img/ Folder - WebP Images (8 files)
| File | References | Notes |
|------|------------|-------|
| `img/ball-nose-milling-cutter-250x250.webp` | 0 | ✅ SAFE |
| `img/end_mills.webp` | 0 | ✅ SAFE |
| `img/img (1).webp` through `img/img (4).webp` | 0 each | ✅ SAFE |
| `img/profile-milling-cutter.webp` | 0 | ✅ SAFE |
| `img/shell_mill_cutter.webp` | 0 | ✅ SAFE - .jpg version used instead |
| `img/slot-milling.webp` | 0 | ✅ SAFE |
| `img/thread_mill.webp` | 0 | ✅ SAFE |

#### Main img/ Folder - SVG Files (3 files)
| File | References |
|------|------------|
| `img/boring.svg` | 0 |
| `img/drilling.svg` | 0 |
| `img/millling.svg` | 0 |

**Status:** ✅ SAFE - No production usage

#### img/tools/ Folder - UNUSED (7 files)
| File | References | Notes |
|------|------------|-------|
| `img/tools/Brand_logo.jpg` | 0 | ✅ SAFE |
| `img/tools/Company_logo.jpg` | 0 | ✅ SAFE |
| `img/tools/Combination boring bar.jpg` | 0 | ✅ SAFE - Text ref only, image not used |
| `img/tools/PCD_tools.jpg` | 0 | ✅ SAFE |
| `img/tools/WhatsApp Image 2025-11-11 at 16.47.05_f6e821e0.jpg` | 0 | ✅ SAFE |
| `img/tools/brad2.jpg` | 0 | ✅ SAFE |
| `img/tools/c.jpg` | 0 | ✅ SAFE |

---

## ⚠️ FILES TO KEEP (CRITICAL - DO NOT DELETE)

### In Use - KEEP ALL OF THESE:
- `img/arise-logo-removebg.png` ← **CRITICAL** (12 references, OG image)
- `img/features-1.png` ← Used
- `img/sty-1.png` ← Used in CSS
- `img/b1.webp` ← Used (not b1.png)
- `img/blog1.webp` ← Used (not blog1.jpg)
- `img/blog_milling.webp` ← Used
- `img/drilling_technology.webp` ← Used
- `img/section2.webp` ← Used (not section2.jpg)
- `img/turning_inserts.webp` ← Used
- `img/lumipro_enhanced.png` ← 2 references
- ALL files in `img/tools/` EXCEPT the 7 listed above as unused
- Infrastructure images (Advanced CNC, Precision Tool, etc.)
- Industry images (automotive, robotics, medical, energy, etc.)

---

## 📊 DELETION SUMMARY

| Category | File Count | Est. Size Savings |
|----------|-------------|-------------------|
| Junk/Temp Files | 4 + 91 Zone files | ~20 KB |
| Dev Scripts | 3 | ~7 KB |
| Unused JPG (main) | 15 | ~80-100 MB |
| Unused img(X).jpg | 14 | ~700 KB |
| Unused PNG | 11 | ~2-3 MB |
| Unused WebP | 8 | ~500 KB |
| Unused SVG | 3 | ~50 KB |
| tools/ Unused | 7 | ~5-10 MB |
| **TOTAL** | **~156 files** | **~90-115 MB** |

---

## ✅ SAFETY GUARANTEES

1. ✅ All deletions verified with 0 production references
2. ✅ Excluded `.history/` from verification (old versions don't count)
3. ✅ Checked HTML, CSS, and JS files
4. ✅ Verified no meta/OG tag usage
5. ✅ Checked for dynamic loading patterns
6. ✅ Verified WebP/JPG fallback strategy
7. ✅ No breaking changes
8. ✅ Website will look identical after cleanup

---

## 🚨 CRITICAL NOTES

**DO NOT DELETE:**
- Anything with active references
- `arise-logo-removebg.png` (used everywhere + OG image)
- Any files in `lib/` folder
- Any `.css` or `.js` files currently in use
- favicon.ico

**SAFE TO DELETE:**
- Only files listed above with "✅ SAFE" status
- 100% verified 0 references in production code

---

**NEXT STEP:** Execute deletion commands with extreme caution, one category at a time.
