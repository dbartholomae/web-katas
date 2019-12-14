# Web katas

This is a collection of katas based around JavaScript and sometimes also HTML and CSS. The idea is to offer katas that
are closer to the real world problems web developers might be facing, while still being focused and small.

Each Kata exists on multiple branches:
- `master` contains the pure challenge without any step done
- `setup` has test setup in place, but does not yet contain meaningful tests or code changes.
- `cleaned` contains the setup and refactors that can be done without writing tests
- `tested` contains the cleaned up code and tests for the main existing functionality
- `refactored` contains tests and refactored code, but no new features yet
- `finished` contains a completed solution for the challenge.

The branches are always suggestions, never the one-and-only solution to a kata. Their purpose is to allow practitioners
to focus on individual steps, e. g. to just refactor the code without having to worry about writing tests.

## Katas

The following katas currently exist in this repository:

### Calculator Frontend Kata

A single html file with a calculator that is missing a faculty function. This kata can give insight into
- writing end-to-end tests for html
- decoupling html and javascript
