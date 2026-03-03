# Kimi Says No More Tabs! 🏎️

A minimalist Chrome new-tab experience powered by Kimi Räikkönen quotes, subtle stats, and clean F1-inspired themes. Everything runs offline, so Kimi's wisdom always shows up instantly—even when he scolds you about opening too many tabs.

## Features

- Random Kimi quotes (pre-bundled so they appear instantly)
- Tab counter with fun milestone callouts from Kimi's career
- Five F1 team themes (Ferrari, McLaren, Lotus, Sauber, Alfa Romeo)
- Quick access settings popup (gear icon or toolbar icon)
- One-tap reset for the current day's tab count
- 100% offline-no permissions beyond `storage`

## Installation

### Chrome Web Store (recommended)

1. Open the [Chrome Web Store](https://chromewebstore.google.com/) and search for **“Kimi Says No More Tabs!”** (link will be added once the listing is live).
2. Click **Add to Chrome**.
3. Open a new tab and enjoy the Kimi quote feed.

### Local Development (optional)

If you are contributing to the project (`git clone https://github.com/GreatButter888/kimi_says_no_more_tabs.git`):

1. Clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the `kimi_says_no_more_tabs` folder.

Reload the extension after every change.

### Optional icon

Supply your own icon by dropping a 128×128 PNG into `assets/icon.png`.

## File Structure

```
kimi_says_no_more_tabs/
├── manifest.json          # Extension configuration (Manifest V3)
├── newtab.html            # Main new tab page
├── style.css              # Theme and layout styles
├── script.js              # Quote rotation, stats, and theme handling
├── settings.html          # Settings popup
├── settings.js            # Settings logic
├── assets/
│   └── icon.png           # Extension icon placeholder
└── README.md
```

## Quotes Source

Quotes are bundled locally thanks to the work in [sethvm/kimiquotes](https://github.com/sethvm/kimiquotes) (MIT-licensed) plus a handful of additional Kimi one-liners I generated to stay in the same spirit. Only a subset of that dataset is included, and everything is inline, so no network calls or API usage are required.

## Themes

- Ferrari Red (default)
- McLaren Papaya
- Lotus Black & Gold
- Sauber Blue
- Alfa Romeo Burgundy

Change themes by clicking the ⚙️ icon in the top right.

## Settings

Access settings by:
- Clicking the ⚙️ icon on the new tab page
- Clicking the extension icon in the Chrome toolbar

**Available Options:**
- Theme selection (Ferrari, McLaren, Lotus, Sauber, Alfa Romeo)
- Theme preference syncs via Chrome storage
- Reset today's tab counter with a single tap

## Tab Stats

Each new tab increments a daily counter and pulls a matching Kimi stat from the local number-facts dataset (1-200). Many numbers have multiple verified facts; the extension picks one at random for extra variety. When a number has no official stat, a Kimi-style quip fills in-no network calls needed.

## Development

Built with:
- Manifest V3
- Vanilla JavaScript (no frameworks)
- Chrome Storage API
- Local data sourced from the KimiQuotes project (see Credits)
- Typography: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) + [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts

## Kimi Moods

The extension includes 12 authentic Kimi moods:
- 😑 Unimpressed
- ❄️ Cold
- 🍦 Ice Cream
- 🏎️ Just Racing
- 🤷 Whatever
- 💤 Bored
- 🎯 Focused
- 🧊 Frozen
- 🚫 Not Interested
- ⏰ Leave Me Alone
- 🍺 Thirsty
- 😐 Deadpan

## Troubleshooting

**No quotes loading?**
- Reload the extension in `chrome://extensions/`
- Ensure `script.js` is present and unmodified
- Default quote will display even if storage is empty

**Settings not saving?**
- Ensure Chrome sync is enabled
- Check storage permissions in manifest.json

**Icon not showing?**
- Add a 128x128px PNG to `assets/icon.png`
- Reload the extension

**Tab count feels off?**
- Open the popup and tap **Reset today's tab count**
- Reopen a new tab to start fresh

## Credits

- **Quotes dataset**: [sethvm/kimiquotes](https://github.com/sethvm/kimiquotes) (MIT License) + original Kimi-styled additions
- **Inspiration**: Kimi Räikkönen, the Iceman himself
- **Design**: Minimal, deadpan, very Kimi

## License

Released under the [MIT License](LICENSE). Kimi wouldn't care anyway.

---

*"It's more like a hobby for me, so obviously I don't need to do it if I don't want to."* - Kimi
