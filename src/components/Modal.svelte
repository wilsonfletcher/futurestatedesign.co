<!-- src/Modal.svelte -->
<div id="background" />
<div id="modal">
  <p>This is a modal window.</p>
</div>

<style>
  #background {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  #modal {
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    filter: drop-shadow(0 0 20px #333);
  }
</style>
