# Calculator

Welcome to CalcInt! Unfortunately our last developer just left the company. She was responsible for our main product,
the calculator.

Unfortunately one of the main features of our calculator is currently broken: The factorial button.

I remember this working before - it was one of the first features we implemented, even before the calculator could
handle more than one operation at a time. This should not be complicated: Even such complex things as brackets only took
one day to implement. And our last developer told me that she already implemented most of the functionality in a
function called factorialize. I have full trust that this function works, please do not spend time one improving it.

## Goal

Modify the calculator found in `calculator.html` so that the following expressions evaluate to the following values:

| Input  | Output |
|--------|--------|
| 0!     | 1      |
| 1!     | 1      |
| 2!     | 2      |
| 3!     | 6      |
| 4!     | 24     |
| (2+2)! | 24     |
| (1/2)! | Error  |

Existing calculations should still work, as by these examples: 

| Input   | Output |
|---------|--------|
| 0       | 0      |
| 1+1     | 2      |
| 2*2     | 4      |
| 2/2     | 1      |
| 2-2     | 0      |
| (2+2)*2 | 8      |


## Rules

This kata will give you most value if you avoid rewriting the whole calculator and throw away the old code, but instead
if you try to swap out individual features one after another. For a calculator this might be overkill, but in many
real-life situations just rewriting the whole code might not be a viable option.

## Hints

- First set up a test environment that allows you to write automated tests for the whole HTML file.
- Then clean up the code style and remove unused code. An IDE can help.
- Add test coverage for existing calculations to ensure you are not breaking anything.
- Refactor and optimize the code in small steps.
- Add the factorial feature
If you are stuck, or if you want to focus on one step specifically, you will find example implementations of these steps
in the branches "setup", "cleaned", "tested", "refactored", "finished".
