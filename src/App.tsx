import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <>
    <Container>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/new' element={<h1>New</h1>}/>
        <Route path='/:id'>
          <Route index element={<h1>Show Something</h1>}/>
          <Route path='edit' element={<h1>Editing....</h1>}/>
        </Route>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      </Container>
    </>
  )
}

export default App
