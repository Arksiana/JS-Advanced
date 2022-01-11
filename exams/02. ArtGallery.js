class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250}
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!")
        }

        const toAdd = {
            articleModel: articleModel.toLowerCase(),
            articleName: articleName,
            quantity: Number(quantity)
        }

        const findObj = this.listOfArticles.find(x => x.articleName === articleName)

        if (this.listOfArticles.length === 0) {
            this.listOfArticles.push(toAdd)
        } else {
            if (findObj !== undefined) {
                findObj.quantity += 1
            } else {
                this.listOfArticles.push(toAdd)
            }


            // return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
            // for (const el of this.listOfArticles) {
            //     if (el.articleName === articleName) {
            //         el.quantity += quantity
            //         return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
            //     } else {
            //         this.listOfArticles.push(toAdd)
            //         return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

            // }

        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }


    inviteGuest(guestName, personality) {
        let p = 0


        switch (personality.toLowerCase()) {
            case 'vip':
                p = 500;
                break
            case 'middle':
                p = 250;
                break
            default:
                p = 50;
                break
        }


        const toAdd = {
            guestName: guestName,
            points: Number(p),
            purchaseArticle: 0
        }

        const findObj = this.guests.find(x => x.guestName === guestName)

        if (this.guests.length === 0) {
            this.guests.push(toAdd)
            return (`You have successfully invited ${guestName}!`)
        } else {
            if (findObj !== undefined) {
                throw new Error(`${guestName} has already been invited.`)
            }
            // for (const el of this.guests) {
            //     if (el.guestName === guestName) {
            //         return (`${guestName} has already been invited.`)
            //     }
            // }
            this.guests.push(toAdd)
            return (`You have successfully invited ${guestName}!`)
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        const findArticle = this.listOfArticles.find(x => x.articleName === articleName)
        const findModel = this.listOfArticles.find(x => x.articleModel === articleModel)
        const findGuest = this.guests.find(x => x.guestName === guestName)
        const articlePoint = this.possibleArticles[articleModel]

        if (findArticle === undefined || findModel === undefined || findModel.articleModel !== findArticle.articleModel) {
            throw new Error("This article is not found.")
        }
        if(findArticle.quantity === 0){
            return (`The ${articleName} is not available.`)
        }

        if(this.possibleArticles[articleModel] > findGuest.points){
            return "You need to more points to purchase the article."
        } else {
            findGuest.points -= this.possibleArticles[articleModel]
            findGuest.purchaseArticle += 1
            findArticle.quantity -= 1
        }

        return `${guestName} successfully purchased the article worth ${articlePoint} points.`

    }

    showGalleryInfo (criteria){
        let result = []
        switch (criteria) {
            case "article":
                result.push("Articles information:")
                for(const el of this.listOfArticles){
                    result.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`)
                } break
            case "guest":
                result.push("Guests information:")
                for(const el of this.guests){
                    result.push(`${el.guestName} - ${el.purchaseArticle}`)
                } break



        }
        return result.join("\n")
    }
}