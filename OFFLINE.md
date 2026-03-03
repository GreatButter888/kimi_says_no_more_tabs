# 🔌 Fully Offline Extension

This extension works **100% offline** with no external dependencies.

## ✅ What's Included Locally:

### Quotes (85 total)
- All 85 authentic Kimi Räikkönen quotes embedded directly in `script.js`
- No API calls or network requests needed
- Verified against the official kimiquotes API

### Stats & Milestones
- 20+ verified F1 career milestones
- World Championship stats (2007)
- Career totals: 21 wins, 103 podiums, 18 poles, 46 fastest laps
- 349 GP starts record
- All stats stored locally in the extension

### Themes
- 5 F1 team themes (Ferrari, McLaren, Lotus, Sauber, Alfa Romeo)
- All CSS and styling embedded
- Theme preferences saved to Chrome storage (local)

### Guilt Messages
- 30 Kimi-style messages
- Short, blunt, and unamused (just like Kimi)
- Examples: "Bwoah.", "Whatever.", "Pointless."

## 🚀 Benefits:

1. **Works offline** - No internet required after installation
2. **Fast** - Instant loading, no API delays
3. **Private** - No external requests, no tracking
4. **Reliable** - Never breaks if API goes down
5. **Self-contained** - Everything you need is included

## 📦 File Structure:

```
chrome-extension/
├── manifest.json         # Extension config (no host permissions)
├── newtab.html          # New tab page
├── script.js            # All quotes, stats, logic (LOCAL)
├── style.css            # All themes and styling (LOCAL)
├── settings.html        # Settings popup
├── settings.js          # Theme switching logic
└── assets/              # Icons
```

## 🔒 Permissions:

The extension only needs:
- `storage` - To save your theme preference locally

**No network permissions required!**

Bwoah! 🏎️
