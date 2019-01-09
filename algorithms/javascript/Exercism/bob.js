export const hey = (message) => {
  const arr = message.trim().split('').filter(a => a !== ' ').reverse()

  if (message.includes('HELL')) 
    return 'Calm down, I know what I\'m doing!'

  else if (arr[0] === '?') 
    return 'Sure.'

  else if (arr[0] === undefined) 
    return 'Fine. Be that way!'

  else if ( 
  ( arr[0] === '!' || message.includes('HATE') || !message.includes(' ') ) && !message.includes('Let\'s') 
  ) 
   return 'Whoa, chill out!'

  else 
   return 'Whatever.'
};

// export const hey = (message) => {
//   const arr = message.trim().split('').filter(a => a !== ' ').reverse()
//   if (message.toUpperCase() === message && arr[0] === '!') return 'Calm down, I know what I\'m doing!'
//   else if (arr[0] === '!') return 'Whoa, chill out!'
//   else if (arr[0] === '?') return 'Sure.'
//   else if (arr[0] === undefined) return 'Fine. Be that way!'
//   else return 'Whatever.'
// };