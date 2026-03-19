# Bino Explorer

A small web tool I built to help people discover and try [Bino](https://bino.bot) — a WhatsApp-based search service.

The idea is simple: most people hear about Bino but don't know what to message or how it works. This page fixes that.

## What it does

- **Live Demo** — Watch a simulated WhatsApp conversation to see how Bino actually responds. Pick categories like Travel, Home Repairs, Food, etc.
- **Query Builder** — Don't know what to type? Pick a category, fill in a few details, and the app builds a ready-to-send WhatsApp message for you.
- **One-Tap WhatsApp** — Tap a button and it opens WhatsApp with your message pre-filled. Zero friction.
- **QR Code** — Generates a scannable QR for any query. Useful for flyers, events, or sharing offline.
- **Shareable Links** — Every query creates a unique URL you can share with friends. They see the demo + can send the message themselves.
- **Embed Widget** — Copy-paste a code snippet to add a "Search via Bino" button on any website.
- **3-Vertical View** — Shows Bino's offerings for Users, Businesses, and Creators with the right WhatsApp number for each.
- **Official Socials** — Integrated real Instagram, LinkedIn, and Facebook links from bino.bot.

## Why I built this

Bino's main website tells you what it does, but doesn't let you *experience* it before trying. I wanted to bridge that gap — let someone see a realistic demo, build confidence, and then jump into WhatsApp with a perfect first message.

Every feature maps to a real growth lever:
- Demo → builds trust
- Query builder → removes friction
- One-tap + QR + shareable links → drives actual conversions

## Tech

Plain HTML, CSS, and JavaScript. No frameworks, no build step. Just open `index.html` and it works.

- Dark mode UI with WhatsApp-green accents
- Mobile responsive
- All WhatsApp numbers and links are from [bino.bot](https://bino.bot) (official)
- Dummy data is marked as (dummy) wherever used

## Run locally

```
npx serve .
```

Then open http://localhost:3000

## Note

This is an independent project built to showcase Bino's capabilities. Bino is a product of Bohni Tech Pvt. Ltd.
