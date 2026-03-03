# Kimi Says No More Tabs!

A minimalist Chrome new-tab extension powered by Kimi Räikkönen quotes, tab stats, and clean F1-inspired themes. Everything runs offline, so Kimi's wisdom always shows up instantly—even when he scolds you about opening too many tabs.

## Features

- **88 Kimi quotes** - Random selection displayed on every new tab
- **200+ F1 number facts** - Tab count matched to Kimi's career stats
- **5 F1 team themes** - Ferrari, McLaren, Lotus, Sauber, Alfa Romeo
- **Responsive quote sizing** - Font scales based on quote length
- **Daily tab counter** - Resets automatically at midnight
- **Settings popup** - Quick access via gear icon or toolbar
- **100% offline** - No API calls, no permissions beyond `storage`

## Installation

### Chrome Web Store

Search for **"Kimi Says No More Tabs!"** in the [Chrome Web Store](https://chromewebstore.google.com/) and click **Add to Chrome**.

### Local Development

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked** and select the project folder
5. Reload the extension after every change

## File Structure

```
kimi_extension/
├── manifest.json      # Extension config (Manifest V3)
├── newtab.html        # New tab page
├── script.js          # Quotes, facts, and logic
├── style.css          # Themes and layout
├── settings.html      # Settings popup UI
├── settings.js        # Settings logic
├── assets/
│   └── icon.png       # Extension icon
├── LICENSE            # MIT License
└── README.md
```

## Themes

Each theme represents a team from Kimi's F1 career:

| Theme | Colors | Years |
|-------|--------|-------|
| **Ferrari** | Red | 2007-2009, 2014-2018 (World Champion 2007) |
| **McLaren** | Papaya & Cyan | 2002-2006 (9 Race Wins) |
| **Lotus** | Black & Gold | 2012-2013 (2 Race Wins) |
| **Sauber** | Blue | 2001 (Rookie Season) |
| **Alfa Romeo** | Burgundy | 2019-2021 (Final Years) |

Change themes by clicking the gear icon on the new tab page or the extension icon in the toolbar.

## Tab Stats

Each new tab increments a daily counter. The extension matches your tab count to a fact from Kimi's career:

- Numbers 1-200 have curated F1 statistics
- Many numbers have multiple facts (randomly selected)
- Numbers without facts get a Kimi-style quip

## Tech Stack

- Manifest V3
- Vanilla JavaScript (no frameworks)
- Chrome Storage API (sync for themes, local for stats)
- Google Fonts: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) + [Poppins](https://fonts.google.com/specimen/Poppins)

## Troubleshooting

**No quotes loading?**
- Reload the extension in `chrome://extensions/`

**Settings not saving?**
- Ensure Chrome sync is enabled

**Tab count feels off?**
- Open settings and tap **Reset Tab Count**

## Credits

- **Quotes**: Based on [sethvm/kimiquotes](https://github.com/sethvm/kimiquotes) (MIT License)
- **Inspiration**: Kimi Räikkönen, the Iceman

## License

[MIT License](LICENSE)

---

*"Leave me alone, I know what I'm doing."* - Kimi
