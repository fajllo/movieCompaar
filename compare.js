const btn = document.querySelector("button");









function compare(){
    const awards = document.querySelectorAll(".Awards")
    const award = document.querySelectorAll(".Awards p")
    const aw1 = parseInt(award[0].innerText.slice(0,1))
    const aw2 = parseInt(award[2].innerText.slice(0,1))
    
    if (aw1 > aw2){
        
        awards[0].classList.remove("is-dark")
        awards[0].classList.add("is-success")
        awards[1].classList.remove("is-dark")
        awards[1].classList.add("is-danger")
        
    }else if (aw1 < aw2) {
        awards[1].classList.remove("is-dark")
        awards[1].classList.add("is-success")
        awards[0].classList.remove("is-dark")
        awards[0].classList.add("is-danger")
        
    } else {
        awards[1].classList.remove("is-dark")
        awards[1].classList.add("is-link")
        awards[0].classList.remove("is-dark")
        awards[0].classList.add("is-link")
        
    }

    const boxs = document.querySelectorAll(".Box")
    const box = document.querySelectorAll(".Box p")
    const bx1 = parseInt(box[0].innerText.slice(1).replace(/,/g,""))
    const bx2 = parseInt(box[2].innerText.slice(1).replace(/,/g,""))
    if (bx1 > bx2){
        boxs[0].classList.remove("is-dark")
        boxs[0].classList.add("is-success")
        boxs[1].classList.remove("is-dark")
        boxs[1].classList.add("is-danger")
        
    }else if (bx1 < bx2) {
       boxs[1].classList.remove("is-dark")
       boxs[1].classList.add("is-success")
       boxs[0].classList.remove("is-dark")
       boxs[0].classList.add("is-danger")
        
    } else {
        boxs[1].classList.remove("is-dark")
        boxs[1].classList.add("is-link")
        boxs[0].classList.remove("is-dark")
        boxs[0].classList.add("is-link")
        
    }

    const scores = document.querySelectorAll(".Metascore")
    const score = document.querySelectorAll(".Metascore p")
    const sc1 = parseInt(score[0].innerText)
    const sc2 = parseInt(score[2].innerText)
    
    if (sc1 > sc2){
        
        scores[0].classList.remove("is-dark")
        scores[0].classList.add("is-success")
        scores[1].classList.remove("is-dark")
        scores[1].classList.add("is-danger")
        
    }else if (sc1 < sc2) {
        scores[1].classList.remove("is-dark")
        scores[1].classList.add("is-success")
        scores[0].classList.remove("is-dark")
        scores[0].classList.add("is-danger")
        
    } else {
        scores[1].classList.remove("is-dark")
        scores[1].classList.add("is-link")
        scores[0].classList.remove("is-dark")
        scores[0].classList.add("is-link")
        
    }

    const ratings = document.querySelectorAll(".Rating")
    const rating = document.querySelectorAll(".Rating p")
    const rt1 = parseFloat(score[0].innerText)
    const rt2 = parseFloat(score[2].innerText)
    
    if (rt1 > rt2){
        
       ratings[0].classList.remove("is-dark")
       ratings[0].classList.add("is-success")
       ratings[1].classList.remove("is-dark")
       ratings[1].classList.add("is-danger")
        
    }else if (rt1 < rt2) {
        ratings[1].classList.remove("is-dark")
        ratings[1].classList.add("is-success")
        ratings[0].classList.remove("is-dark")
        ratings[0].classList.add("is-danger")
        
    } else {
        ratings[1].classList.remove("is-dark")
        ratings[1].classList.add("is-link")
        ratings[0].classList.remove("is-dark")
        ratings[0].classList.add("is-link")
        
    }
    const votes = document.querySelectorAll(".Votes")
    const vote = document.querySelectorAll(".Votes p")
    const vt1 = parseInt(vote[0].innerText.replace(/,/g,""))
    const vt2 = parseInt(vote[2].innerText.replace(/,/g,""))
    if (vt1 > vt2){
        votes[0].classList.remove("is-dark")
        votes[0].classList.add("is-success")
        votes[1].classList.remove("is-dark")
        votes[1].classList.add("is-danger")
        
    }else if (vt1 < vt2) {
       votes[1].classList.remove("is-dark")
       votes[1].classList.add("is-success")
       votes[0].classList.remove("is-dark")
       votes[0].classList.add("is-danger")
        
    } else {
        votes[1].classList.remove("is-dark")
        votes[1].classList.add("is-link")
        votes[0].classList.remove("is-dark")
        votes[0].classList.add("is-link")
        
    }

    
    
};
btn.addEventListener("click",compare)