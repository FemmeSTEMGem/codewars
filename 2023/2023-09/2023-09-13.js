// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.
// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

function nearestSq(n){
    return Math.round(Math.sqrt(n))**2
}

console.log(nearestSq(144))
// One of the answers that I didn't think of was using Math.pow(Math.round(Math.sqrt(n), 2)...but that seems slightly more clunky than mine since you still need some stuff at the end. I also saw Math.round(n**.05)**2, but I think that one might make it less clear what's going on...but that might because math solutions don't come as naturally to me.