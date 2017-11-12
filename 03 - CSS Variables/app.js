
function app () {
  const inputs = document.querySelectorAll('.controls input')
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
  inputs.forEach(input => input.addEventListener('change', handleUpdate))
}

function handleUpdate () {
  const suffix = this.dataset.sizing || ''
  console.log(this)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

window.addEventListener('load', app)
