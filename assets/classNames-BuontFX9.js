function r(...n){return n.reduce((t,e)=>typeof e=="string"?t.concat(e.split(" ")):typeof e>"u"?t:t.concat(Object.values(e)),[]).join(" ")}export{r as c};
