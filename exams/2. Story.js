class Story{
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = []
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${
                this._likes.length - 1
            } others like this story!`;
        }
    }

    like(username){
        if(this._likes.some(x => x === username)){
            throw new Error("You can't like the same story twice!")
        }
        if(username === this.creator){
            throw new Error("You can't like your own story!")
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username){
        let ind = this._likes.indexOf(username)
        if(!this._likes.includes(username)){
            throw new Error("You can't dislike this story!")
        }
        this._likes.splice(ind)
        return `${username} disliked ${this.title}`

    }
    comment(username, content, id) {
        //{Id, Username, Content, Replies}
        // console.log(!this._comments.some((c) => c.id === id))
        if (id === undefined || !this._comments.some((c) => c.id === id)) {
            this._comments.push({
                id: this._comments.length + 1,
                username,
                content,
                replies: [],
            });
            return `${username} commented on ${this.title}`;
        }

        let currentComment = this._comments.find((c) => c.id === id);
        currentComment.replies.push({
            id: `${id}.${currentComment.replies.length + 1}`,
            username,
            content,
        });

        return `You replied successfully`;
    }

    toString(sortingType) {
        if (sortingType === "asc") {
            this._comments.sort((c1, c2) => c1.id - c2.id);
            this._comments.forEach(c => {
                if (c.replies.length > 0) {
                    c.replies.sort((c1, c2) => c1.id.localeCompare(c2.id));
                }
            });
        }

        if (sortingType === "desc") {
            this._comments.sort((c1, c2) => c2.id - c1.id);
            this._comments.forEach(c => {
                if (c.replies.length > 0) {
                    c.replies.sort((c1, c2) => c2.id.localeCompare(c1.id));
                }
            });
        }

        if (sortingType === "username") {
            this._comments.sort((c1, c2) => c1.username.localeCompare(c2.username));
            this._comments.forEach(c => {
                if (c.replies.length > 0) {
                    c.replies.sort((c1, c2) => c1.username.localeCompare(c2.username));
                }
            });
        }

        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`);

        for (const comment of this._comments) {
            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);

            if (comment.replies.length !== 0) {
                for (const rep of comment.replies) {
                    result.push(`--- ${rep.id}. ${rep.username}: ${rep.content}`);

                }
            }
        }

        return result.join("\n");
    }
}


function solve(a, b){
    return a + b
}

console.log(solve(1, 2))



let art = new Story("My Story", "Anny");
console.log(art.like("John"))
console.log(art.likes);
console.log(art.dislike("John"))
console.log(art.likes);
console.log(art.comment("Sammy", "Some Content"))
console.log(art.comment("Ammy", "New Content"));
console.log(art.comment("Zane", "Reply", 1))
console.log(art.comment("Jessy", "Nice :)"))
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
console.log(art.like("Zane"))
console.log(art.toString('desc'));
