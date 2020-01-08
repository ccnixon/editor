import React from 'react'
import ReactMarkdown from 'react-markdown'
import './documentation.css'

const Documentation: React.FC = () => {
  const input = '# This is a header\n\nAnd this is a paragraph'
  return (
    <div className="panel">
      <div className="panel-content">
        <ReactMarkdown source={input} />
      </div>
    </div>
  )
}

export default Documentation
