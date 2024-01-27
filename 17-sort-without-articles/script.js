const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const asc = document.querySelector('#asc');
const desc = document.querySelector('#desc');
const strip = (bandName) => {return bandName.replace(/^(a |an |the )/i ,'').trim()}

const displayBandList = (sortedBand) => {
    document.querySelector("#bands").innerHTML = sortedBand
     .map(band=>`<li>${band}</li>`)
     .join('');
}
asc.addEventListener('click',(e)=>{
    let sortedBand = bands.sort((a,b)=> strip(a)>strip(b) ? 1 : -1);
    displayBandList(sortedBand)
    
})
desc.addEventListener('click',(e)=>{
    let sortedBand = bands.sort((a,b)=> strip(a)<strip(b) ? 1 : -1);
    displayBandList(sortedBand)
})
window.addEventListener('load',()=>displayBandList(bands))