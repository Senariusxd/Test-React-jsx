import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/App.css'
import Body from './partes/Body'

function App() {
  const [login, setPage]=useState(false)

  return(
    <div>
        {login ?(
            <>
              <div className='app'>
                <nav className='all-container'>
                  <div>
                    <ul className='navbar'>
                      <li><a className='qwe' href='#'>Home</a></li>
                      <li><a className='qwe' href='#'>Another</a></li>
                      <li><a className='qwe' href='#'>Contact</a></li>
                      <li><a className='qwe' href='#'>About</a></li>
                      <li className='search-bar'>
                        <input type='text' placeholder='text..' />
                        <button>Search</button>
                      </li>
                      <li><button className='butout' onClick={()=> setPage(false)}>Logout</button></li>
                    </ul>
                  </div>
                </nav>
                <Body />
              </div>
            </> 
            ) 
            : 
            ( 
            <>
              
              <div style={{backgroundColor: 'black', color: 'white', flexDirection: 'row', justifyContent: 'space-around', margin: '100px', padding: '100px'}}>
                <h4>Login</h4>
                <div> 
                  <input type='text' placeholder='User' style={{margin: '5px'}} />
                  <input type='password' placeholder='Password' style={{margin: '5px'}} />
                </div>
                <button className='butlog' onClick={()=> setPage(true)}>Login</button>
              </div>
            </>
            )
        }
    </div>
  )
}

export default App
