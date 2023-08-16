// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  return bool ? "Yes" : "No"
}

console.log(boolToWord(false))


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, "")
}

// Need to update node version, because then I would just use replaceAll, rather than replace

console.log(removeExclamationMarks("vEJhGiAutt!LWNSvOVPPr KWXYAnzuQV!moFlqdfYCh"))