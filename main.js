// E17
// Array Methods Practice: map, filter and find
// Lynn Samuelson
// •
// Nov 21

// map&filterPractice.js
// Javascript
// Class comments
// Your work
// Assigned
// Private comments
// Array Methods Practice: map, filter and find
const outfits = [
  {
    id: 1,
    bottoms: "slacks",
    top: "orange",
    shoes: "leather",
    style: "formal",
    own: false
  },
  {
    id: 3,
    bottoms: "jeans",
    top: "t-shirt",
    shoes: "flip flops",
    type: "casual",
    own: true
  },
  {
    id: 2,
    bottoms: "yoga",
    top: "tank top",
    shoes: "flip flops",
    type: "casual",
    own: false
  },
  {
    id: 9,
    bottoms: "skirt",
    top: "blouse",
    shoes: "heals",
    type: "formal",
    own: true
  },
  {
    id: 6,
    bottoms: "shorts",
    top: "tank top",
    shoes: "none",
    type: "casual",
    own: true
  },
  {
    id: 7,
    bottoms: "jeans",
    top: "sweater",
    shoes: "boots",
    type: "casual",
    own: true
  },
  {
    id: 8,
    bottoms: "slacks",
    top: "button down",
    shoes: "dress",
    type: "formal",
    own: false
  },
]

/* considering the array outfits, use map, filter and find to do the following */

//Make a copy of outfits called outfitsCopy that can be modified without changing outfits directly.  
let outfitsCopy = outfits.map(outfit => ({...outfit}))
// console.log("outfitsCopy", outfitsCopy)

//Change a value on outfitsCopy and use console logs to show you did not change outfits
outfitsCopy = outfits.map(outfit => (
    {
        id:outfit.id,
        bottoms:outfit.bottoms, 
        shirt:outfit.top,
        shoes:outfit.shoes, 
        type:outfit.type,
        own:outfit.own
    }
))
// console.log("outfits", outfits)
// console.log("outfitsCopy", outfitsCopy)

//Make a copy (map) of outfits with the added property of accessories.  Make accessories always false.
const outfitsCopy2 = outfits.map(outfit => (
    {
        id:outfit.id,
        bottoms:outfit.bottoms, 
        top:outfit.top,
        shoes:outfit.shoes, 
        type:outfit.type,
        own:outfit.own,
        accessories: false
    }
))

// console.log(outfitsCopy2)

//Make a copy (map) of outfits that contains only the properties of id, bottoms, tops and shoes

const outfitsCopy3 = outfits.map(outfit => (
    {
        id:outfit.id,
        bottoms:outfit.bottoms, 
        top:outfit.top,
        shoes:outfit.shoes
    }
))

// console.log(outfitsCopy3)

//filter outfits to give only outfits that are casual

const filteredOutfits = outfits.filter(outfit => 
    {
        return outfit.type === "casual"
    }
)

// console.log(filteredOutfits)

// filter outfits to give only outfits that are owned

const filteredOutfits2 = outfits.filter(outfit => 
    {
        return outfit.own === true
}) 

// console.log(filteredOutfits2)

// use find to return an outfit that has no shoes

const findOutfit = outfits.find(outfit => 
    {
        return outfit.shoes === "none"
    }
)

// console.log(findOutfit)

// use find to return an outfit that has boots

const findOutfit2 = outfits.find(outfit => 
    {
        return outfit.shoes === "boots"
    }
)

// console.log(findOutfit2)

//Bonus:
// use find to return an outfit that has jeans and a t-shirt

const findBonus = outfits.find(outfit =>
    {
        if (outfit.bottoms === "jeans" && outfit.top === "t-shirt") {
            return outfit
        }
    }
)

console.log(findBonus)

// map&filterPractice.js
// Displaying map&filterPractice.js.