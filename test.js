function voteCheck(voteAge,age) {
    const canVote = age >= voteAge ? "Yes You Can vote now" : "sorry you are not allowed for vote now this time";
    console.log(canVote);
}


const voteAge = 18;
const age = 22;

voteCheck(voteAge, age);