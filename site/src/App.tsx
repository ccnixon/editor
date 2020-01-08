import React from 'react'
import { Editor, Documentation } from './components'
import { Pane, Button } from 'evergreen-ui'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <Pane className="workflow-header">
        <Button appearance="primary">Save</Button>
      </Pane>
    <div className="workflow-container">
      <Editor />
      <Documentation />
    </div>
    </div>
  )
}

export default App
