let pronoun = ['the' , 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'raccon'];
let domain = ['.com', '.es', '.net'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for(let n = 0; n < noun.length; n++) {
            for (let m =0; m < domain.length; m++){
                console.log(pronoun[0] + adj[j] + noun[n] + domain[m] );
            }
        }
    }
}