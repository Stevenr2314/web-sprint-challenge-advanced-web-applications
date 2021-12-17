import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    headline: "Biggest News Ever",
    author: "Best Journalist",
    summary: "The news was so big that it was huge!",
    body: "There was this piece of news that was so incredibly gargantuan that it had to be renamed as the Biggest News Ever. The news was immense and quite interesting, so much so that this article was created!"
}

test('renders component without errors', ()=> {
});

test('renders headline, author from the article when passed in through props', ()=> {
});

test('renders "Associated Press" when no author is given', ()=> {
});

test('executes handleDelete when the delete button is pressed', ()=> {
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.