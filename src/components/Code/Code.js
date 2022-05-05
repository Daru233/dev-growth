import React from 'react'


import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';

SyntaxHighlighter.registerLanguage('python', python);

export const Code = () => {

  const code_string = `
  make change, get from file
  `

  return (
    <div className='code_container'>
      <SyntaxHighlighter language="python" 
      style={darcula} 
      codeTagProps={{style: {fontFamily: 'Source Code Pro', fontStyle: 'monospace', fontSize: 16} }}
      showLineNumbers={true}>
        {code_string}
      </SyntaxHighlighter>
    </div>
  )
}
