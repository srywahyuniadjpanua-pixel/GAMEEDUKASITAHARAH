# ASSET SOURCES — PETUALANGAN TAHARAH

## Overview
All assets used in this educational game are either:
1. User-provided assets (priority)
2. Self-generated (CSS/SVG graphics)
3. Open-license / Public Domain assets

## Asset Registry

| Asset | Type | Source | License | Author | Usage |
|-------|------|--------|---------|--------|-------|
| Character avatars | SVG | Self-generated CSS/SVG | Original | Developer | Character selection & game UI |
| Map backgrounds | CSS Gradients | Self-generated | Original | Developer | Map screens |
| Icons | Unicode Emoji + SVG | Built-in | N/A | System | UI elements |
| Sound effects | Web Audio API | Generated via Web Audio API | Original | Developer | Game feedback sounds |
| Background music | Web Audio API | Generated procedural audio | Original | Developer | Ambient background |
| Fonts | Google Fonts | Google Fonts | SIL Open Font License | Various | Typography |
| UI Components | CSS | Self-generated | Original | Developer | Interface elements |

## Notes
- No copyrighted materials are used without proper licensing
- All temporary assets are designed to be easily replaceable
- Character designs use CSS/SVG to avoid dependency on external image files
- Audio is generated programmatically to avoid file dependency issues
- When user provides replacement assets, they take priority over generated ones

## How to Replace Assets
1. Place new image assets in the `/assets/` directory
2. Update the asset path in `js/config.js`
3. Supported formats: PNG, JPG, SVG, WebP
4. Recommended sizes noted in config comments
