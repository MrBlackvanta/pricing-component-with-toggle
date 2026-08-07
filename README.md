# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Design deviations](#design-deviations)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.webp)

### Links

- Solution URL: [GitHub](https://github.com/MrBlackvanta/pricing-component-with-toggle)
- Live Site URL: [Netlify](https://vanta-pricing-component-with-toggle.netlify.app)

## My process

### Built with

- [Next.js 16](https://nextjs.org/) (App Router, React Compiler, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/)

### Design deviations

**Contrast, to reach 100 on Lighthouse accessibility.** Six pairings in the supplied design sit
below the WCAG AA threshold. Every ratio below is measured against the backdrop the text actually
sits on — for the gradient that means sampling it at the lightest point inside each text box — and
solved on the rounded 8-bit channels the browser paints rather than unrounded HSL.

|                                        | design            | contrast | shipped                | contrast |
| -------------------------------------- | ----------------- | -------- | ---------------------- | -------- |
| Brand gradient                         | `#A2A7F0→#696EDD` | —        | `#6C74E7→#363DD2`      | —        |
| Plan name, 18px on the pro card        | white             | 2.54     | on `#6169E3`           | 4.53     |
| Price, 72px on the pro card            | white             | 2.56     | on `#6068E2`           | 4.59     |
| Feature rows, 15px on the pro card     | white             | 2.90     | on `#575EDF`           | 5.16     |
| Button label, 13px on the gradient     | white             | 2.68     | on `#5D65E1`           | 4.76     |
| Toggle knob against its track (UI)     | white             | 2.25     | on `#6C74E7`           | 3.97     |
| Toggle labels, 15px                    | `#6E728E` at 50%  | 1.92     | `#6C708C` full opacity | 4.54     |
| Body and heading on the page           | `#6E728E`         | 4.41     | `#6C708C`              | 4.54     |
| Plan name and features on a white card | `#6E728E`         | 4.71     | `#6C708C`              | 4.85     |
| Button label on the white button       | `#6D72DE`         | 4.11     | `#363DD2`              | 7.62     |

Four things worth knowing about those:

- **The brand gradient cannot carry white text at any spread.** Collapsing it to a flat `#696EDD`
  — the _dark_ stop — still reaches only 4.31:1. Both stops have to come down, so there is no
  version of this that keeps the design's periwinkle. They are shifted down 12.2 lightness points
  each, preserving hue, saturation and the original 15-point spread, which is the smallest uniform
  change that clears every pairing. The binding one is the 18px plan name on mobile, where the text
  sits nearest the gradient's light corner: it lands at 4.53:1.
- **The accent collapses into the gradient's dark stop.** The design's `#6D72DE` differs from its
  own gradient end by 5/255, so rather than carry a second near-identical purple that also misses
  AA, the inverted button's label and the hover borders use `--color-primary` directly.
- **The toggle labels lose their 50% opacity.** Both labels are 50% in _both_ states of the design,
  so the transparency carries no information — dropping it costs nothing and is the only way 15px
  text clears AA on the page background.
- **Hover states are kept exactly as designed:** every button drops its fill to transparent and
  gains a 1px border in its own label colour, and the toggle lays white at 50% over the track.

**A decorative curve crosses the heading below 375px** — 2.6% of its ink area at 320. Worst
backdrop is the `#D0D5F6` stroke at 3.35:1, which passes because 32px bold is large text. The
design has the identical overlap.

**Five of the seven style-guide colours are rounded** and land a point away from the real paint, so
the palette uses the exact values: the page is `#F7F7FE` not `#F6F6FE`, Grayish Blue `#6E728E` not
`#6D718D`, Dark Grayish Blue `#4A4D60` not `#494C5F`, and the gradient stops `#A2A7F0` / `#696EDD`
rather than `#A3A8F0` / `#696FDD`.

**Light Grayish Blue is not a colour in this design.** The style guide's `#B3B5C6` is what you get
compositing Grayish Blue at 50% over the page background — it matches to one part in 255 — so it
never became a token.

**The annual prices do not fit the design's own card.** `$249.99` needs 266px of ink and the mock's
mobile content box is 269px, which is why its annual price runs edge to edge against the dividers.
Two changes buy the room: the card's horizontal padding is 24px on mobile instead of 29 (the
dividers and buttons are correspondingly 10px wider than the mock), and the price is
`min(4.5rem, 18vw)`, so it reaches the design's full 72px from 400px up and scales down below that.
It is arithmetically impossible to hold 72px at 375 and still fit at 320 with one ramp — 320 caps
the price at 60.6px, which pushes the cap point out past 375. At 1024 the annual price still
overhangs its content box by 2.3px per side, into 32px of padding.

**The knob travels 24px, not 23.** The design insets it 4px on three sides and 5px on the left;
4px uniform is the obvious intent.

## Author

- UpWork - [Abdelrhman Abdelaal](https://upwork.com/freelancers/~01f0a9479696b61f49)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)
