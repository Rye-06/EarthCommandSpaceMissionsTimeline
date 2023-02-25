


import React from 'react';
import FigmaEmbed from 'react-figma-embed';
 
const url = 'https://www.figma.com/proto/Q0ii0xxdpUg8zetaSif5jO/NASA?node-id=80%3A167&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=14%3A24'

export const Storybook = () => {
    return (
      <FigmaEmbed url="https://www.figma.com/proto/Q0ii0xxdpUg8zetaSif5jO/NASA?node-id=80%3A167&scaling=contain&page-id=0%3A1&starting-point-node-id=14%3A24" />
    );
}