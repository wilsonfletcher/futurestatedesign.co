var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')
}

var themeToggleBtn = document.getElementById('theme-toggle')

themeToggleBtn.addEventListener('click', function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
})

/**
 * Details/summary HTML element
 * Only open one element at a time
 */
if (document.querySelector('details')) {
  // Fetch all the details elements
  const details = document.querySelectorAll('details')

  // Add onclick listeners
  details.forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
      // Close all details that are not targetDetail
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute('open')
        }
      })
    })
  })
}

// class Accordion {
//   constructor(el) {
//     // Store the <details> element
//     this.el = el
//     // Store the <summary> element
//     this.summary = el.querySelector('summary')
//     // Store the <div class="content"> element
//     this.content = el.querySelector('.content')

//     // Store the animation object (so we can cancel it if needed)
//     this.animation = null
//     // Store if the element is closing
//     this.isClosing = false
//     // Store if the element is expanding
//     this.isExpanding = false
//     // Detect user clicks on the summary element
//     this.summary.addEventListener('click', (e) => this.onClick(e))
//   }

//   onClick(e) {
//     // Stop default behaviour from the browser
//     e.preventDefault()
//     // Add an overflow on the <details> to avoid content overflowing
//     this.el.style.overflow = 'hidden'
//     // Check if the element is being closed or is already closed
//     if (this.isClosing || !this.el.open) {
//       this.open()
//       // Check if the element is being openned or is already open
//     } else if (this.isExpanding || this.el.open) {
//       this.shrink()
//     }
//   }

//   shrink() {
//     // Set the element as "being closed"
//     this.isClosing = true

//     // Store the current height of the element
//     const startHeight = `${this.el.offsetHeight}px`
//     // Calculate the height of the summary
//     const endHeight = `${this.summary.offsetHeight}px`

//     // If there is already an animation running
//     if (this.animation) {
//       // Cancel the current animation
//       this.animation.cancel()
//     }

//     // Start a WAAPI animation
//     this.animation = this.el.animate(
//       {
//         // Set the keyframes from the startHeight to endHeight
//         height: [startHeight, endHeight],
//       },
//       {
//         duration: 400,
//         easing: 'ease-out',
//       }
//     )

//     // When the animation is complete, call onAnimationFinish()
//     this.animation.onfinish = () => this.onAnimationFinish(false)
//     // If the animation is cancelled, isClosing variable is set to false
//     this.animation.oncancel = () => (this.isClosing = false)
//   }

//   open() {
//     // Apply a fixed height on the element
//     this.el.style.height = `${this.el.offsetHeight}px`
//     // Force the [open] attribute on the details element
//     this.el.open = true
//     // Wait for the next frame to call the expand function
//     window.requestAnimationFrame(() => this.expand())
//   }

//   expand() {
//     // Set the element as "being expanding"
//     this.isExpanding = true
//     // Get the current fixed height of the element
//     const startHeight = `${this.el.offsetHeight}px`
//     // Calculate the open height of the element (summary height + content height)
//     const endHeight = `${
//       this.summary.offsetHeight + this.content.offsetHeight
//     }px`

//     // If there is already an animation running
//     if (this.animation) {
//       // Cancel the current animation
//       this.animation.cancel()
//     }

//     // Start a WAAPI animation
//     this.animation = this.el.animate(
//       {
//         // Set the keyframes from the startHeight to endHeight
//         height: [startHeight, endHeight],
//       },
//       {
//         duration: 400,
//         easing: 'ease-out',
//       }
//     )
//     // When the animation is complete, call onAnimationFinish()
//     this.animation.onfinish = () => this.onAnimationFinish(true)
//     // If the animation is cancelled, isExpanding variable is set to false
//     this.animation.oncancel = () => (this.isExpanding = false)
//   }

//   onAnimationFinish(open) {
//     // Set the open attribute based on the parameter
//     this.el.open = open
//     // Clear the stored animation
//     this.animation = null
//     // Reset isClosing & isExpanding
//     this.isClosing = false
//     this.isExpanding = false
//     // Remove the overflow hidden and the fixed height
//     this.el.style.height = this.el.style.overflow = ''
//   }
// }

// document.querySelectorAll('details').forEach((el) => {
//   new Accordion(el)
// })
