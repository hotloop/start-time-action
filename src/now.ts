const now = (): number => {
  return Math.floor(new Date().getTime() / 1000)
}

export { now }
