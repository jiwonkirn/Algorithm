function gigasecond(input) {
    return new Date(input.getTime() + 1000000000000)
  }

export { gigasecond }