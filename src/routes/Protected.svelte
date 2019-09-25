<script>
  import { navigate } from 'svelte-routing'
  import Swal from 'sweetalert2'
  import { user, redirectURL } from '../store.js'

  export let location

  function handlePrivateRoute() {
    redirectURL.setRedirectURL(location.href)
    navigate('/', { replace: true })

    Swal.fire({
      title: 'You are not authenticated',
      text: 'Please log in or sign up to view this page',
      type: 'error',
      allowOutsideClick: false,
      confirmButtonText: 'Will do!',
    })
  }
</script>

<svelte:head>
  <title>Protected Route</title>
</svelte:head>

{#if $user && $user.username}
  <h1>Protected</h1>
{:else}{handlePrivateRoute()}{/if}
