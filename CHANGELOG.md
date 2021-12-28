# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.2.0] - 2021-12-28
### Added
- API endpoints.
- Error handling component.
- Configmap manifest file.

### Removed
- Static JSON files.

## [3.1.3] - 2021-06-25

### Added
- Image hover effect to make the homepage a bit more interesting...
- A few new sections on techs I use.
### Changed
- Copy for the about page.

## [3.1.2] - 2021-06-22

### Added
- Email icon with `mailto` to my email. I will probably regret this 🙃.
- Caching node modules to ever so slightly speed up CI/CD.
### Changed
- Display image
- Twitter URL

### Removed
- Temp removal of audit checks on CI and CD due to some dependencies not updating their dependencies, which are the vulnerable ones. See advisory [1755](https://npmjs.com/advisories/1755), [1754](https://npmjs.com/advisories/1754), and [1751](https://npmjs.com/advisories/1751).
    - I am hoping to add these checks back in soon as I couldn't manually patch them.

## [3.1.1] - 2021-03-05
### Changed
- Animation transition style height set to 0 to prevent scrollbar and jumping on larger screens. 
## [3.1.0] - 2021-03-05
### Added
- Cookie to remember theme selection.
- Adding a preconnect for gstatic (Google Fonts).

### Changed
- Changed default theme to dark mode 🌙.

## [3.0.0] - 2021-02-28
### Added
- Docker builds
- Kubernetes manifest files.
- GitHub Actions for CI/CD.
- Theme switcher (dark mode/light mode).

### Changed
- Upgraded from Vue.js 2 to Vue.js 3!
- Content JSON file copy.
- Upgraded Pure.css version.

### Removed
- Contact page.
- Mobile nav (only two pages now, fancy menu is overkill).
- Projects page and component.
