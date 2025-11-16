function showMessage(value: string | null | undefined) {
  if (value) {
    console.log('Hello, ' + value.toLocaleUpperCase())
  }
}
showMessage('world')
