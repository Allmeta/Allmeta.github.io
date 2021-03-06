const distanceTo = (x1, y1, x2, y2) => Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1))
const angleTo = (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1)
const map = (v, s1, e1, s2, e2) => (v - s1) / (e1 - s1) * (e2 - s2) + s2
const gravitate = (m1, m2, d) => m1 * m2 / d / d
const isIn = (a, b) => distanceTo(a.x, a.y, b.x, b.y) <= a.size + b.size
const outOfBounds=(a)=>(a.x+a.size<0||a.x-a.size>width||a.y-a.size>height||a.y+a.size<0)
const ID = ()=>'_' + Math.random().toString(36).substr(2, 4)
const hyp=(x,y)=>Math.sqrt(x*x+y*y)