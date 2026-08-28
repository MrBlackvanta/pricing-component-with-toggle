# Pricing component with toggle

My solution to the [Pricing component with toggle](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://pricing-component-with-toggle.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/pricing-component-with-toggle

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

**The brand gradient can't carry white text at any spread.** Even flattening it to its
dark stop only gets to 4.3:1. Both stops had to come down, so there's no version of this
that keeps the design's periwinkle. I dropped each by about 12 lightness points, keeping
the hue, the saturation and the original 15-point spread between them. The binding case
is the 18px plan name on mobile, where the text sits nearest the light corner, and it
lands at 4.53:1.

**The toggle labels lose their 50% opacity.** They're 50% in both states of the design,
so the transparency isn't carrying any information, and dropping it is the only way 15px
text clears AA on that background.

**The accent collapses into the gradient's dark stop.** The design's separate accent
purple differs from its own gradient end by 5/255 and also misses AA, so rather than
carry two near-identical purples the inverted button and the hover borders use the
gradient stop directly.

**Hover states stay exactly as designed.** Every button drops to transparent with a 1px
border in its label colour.

**The annual prices don't fit the design's own card.** `$249.99` needs 266px of ink and
the mock's mobile content box is 269, which is why the design's own annual price runs
edge to edge. Two changes buy the room: 24px of card padding on mobile instead of 29, and
`min(4.5rem, 18vw)` on the price so it hits the full 72px from 400px up and scales down
below. Holding 72px at 375 and still fitting at 320 isn't possible with one ramp.

**Colours come from the design file, not the style guide**, which rounds five of the
seven a point away from the real paint. The style guide's "Light Grayish Blue" turns out
to be what you get compositing Grayish Blue at 50% over the page background, so it never
became a token.

The toggle knob travels 24px rather than 23. The design insets it 4px on three sides and
5px on the left, and 4px uniform is clearly the intent.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
