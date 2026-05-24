# AG Dispatch — Static Website

A responsive static website for **AG Dispatch**, inspired by the provided mockup.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Services | `services.html` |
| Fleet | `fleet.html` |
| Coverage | `coverage.html` |
| Contact | `contact.html` |

## Structure

```
website/
├── index.html
├── services.html
├── fleet.html
├── coverage.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js      # Shared header, footer, mobile nav
└── README.md
```

## Get a Quote

All **Get a Quote** buttons link to:
https://forms.gle/B1yMb7YqDBog1eb78

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

Upload the `website` folder to any static host (Netlify, GitHub Pages, Cloudflare Pages, etc.). No build step required.

## Assets

Site images live in `assets/`:

| File | Used for |
|------|----------|
| `logo.jpg` | Header, footer, favicon |
| `gladiator_head.png` | Testimonials & Our Gladiators section icons |
| `lbc_logo.png` | Services page Courier & LBC featured card |
| `hero_truck.png` | Home hero background |
| `courier_lbc.png` | Home Courier & LBC service card photo |
| `moving_family.png` | Professional moving |
| `specialized_truck.png` | Trucking & fleet “other” |
| `semi_white.png` | Semi / other trucking |
| `box_truck_side.png` | Box truck / garbage dumping |
| `courier_van.png` | Ram ProMaster fleet card |
| `ontario_map.png` | Home & coverage map |
| `testimonial_1.png`, `testimonial_2.png` | Testimonial avatars |
| `team_group_1.png`, `team_group_2.png` | Our Gladiators section |

## Customize

1. Replace contact placeholders in `contact.html` and `js/main.js` (footer).
2. Update social links in the footer (`js/main.js`).
