import React from 'react'
import { Link } from 'react-router'

var Nav= () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/createacc">CreateAccount</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/withdraw">Withdraw</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/deposit">Deposit</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/fund">FundTRansfer</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/balance">Balance</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/pinch">PinChange</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/accsum">AccountSummary</Link>
        </li>
   
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav;
