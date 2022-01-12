// IMPORT MODULES under test here:
import { renderParticipant } from '../render-utils.js';

const test = QUnit.test;
const skip = QUnit.skip;

skip('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const participant = {
        name: 'Dylan'
    };

    const expected = '<p class="participant">Dylan</p>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant(participant);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
