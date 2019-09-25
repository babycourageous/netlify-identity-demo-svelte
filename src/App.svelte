<script>
  import { Router, Route, Link, navigate } from 'svelte-routing'
  import netlifyIdentity from 'netlify-identity-widget'

  import Home from './routes/Home.svelte'
  import Public from './routes/Public.svelte'
  import Protected from './routes/Protected.svelte'
  import NotFound from './routes/NotFound.svelte'
  import { user, redirectURL } from './store.js'

  netlifyIdentity.init()

  $: isLoggedIn = !!$user
  $: username = $user !== null ? $user.username : ' there!'

  function handleUserAction(action) {
    if (action == 'login' || action == 'signup') {
      netlifyIdentity.open(action)
      netlifyIdentity.on('login', u => {
        user.login(u)
        netlifyIdentity.close()
        if ($redirectURL !== '') {
          navigate($redirectURL)
          redirectURL.clearRedirectURL()
        }
      })
    } else if (action == 'logout') {
      navigate('/')
      user.logout()
      netlifyIdentity.logout()
    }
  }
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    color: #2c3e50;
  }
  :global(a, a:visited) {
    color: #ff3e00;
  }
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 1.2rem;
  }
  img {
    display: block;
    width: 200px;
    max-width: 100%;
    height: auto;
    order: -1;
  }
  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul > * + * {
    margin-left: 1rem;
  }
  li {
  }
  .center {
    text-align: center;
  }
  .gh-fork img {
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
  }
</style>

<main>
  <h1>Netlify Identity Demo with Svelte</h1>

  <img alt="Svelte logo" src="logo.svg" />

  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/public">Public</Link>
      </li>
      <li>
        <Link to="/protected">Protected</Link>
      </li>
    </ul>
  </Router>

  {#if isLoggedIn}
    <div class="center">
      <p>Hello {username}</p>
      <div>
        <button on:click={() => handleUserAction('logout')}>Log Out</button>
      </div>
    </div>
  {:else}
    <div class="center">
      <p>You are not logged in.</p>
      <div>
        <button on:click={() => handleUserAction('login')}>Log In</button>
        <button on:click={() => handleUserAction('signup')}>Sign Up</button>
      </div>
    </div>
  {/if}

  <Router>
    <Route path="/public" component={Public} />
    <Route path="/protected" component={Protected} />
    <Route path="/" component={Home} />
  </Router>
  <a class="gh-fork" href="https://github.com/whizjs/netlify-identity-demo-vue">
    <img
      src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
      alt="Fork me on GitHub" />
  </a>
</main>
