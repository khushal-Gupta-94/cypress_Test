class DataGenerator {
    generateID() {
        let result = ''
        let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
        let characterslength = characters.length
        for(let i = 0; i < characterslengt; i++)
        {
            reuslt = result + characters.charAt(Math.floor(Math.random() * characterslength))
        }
        return result
    }

    generateEmail(){
        let values = 'abcdefgh1234567890'
        let email = ''
        let temp
        for(let i = 0; i<10; i++)
        {
            temp = values.charAt(Math.round(values.length * Math.random()))
            email = email+temp
        }
        temp = ''
        email = email+'@'
        for(let i = 0; i<8; i++)
        {
            temp = values.charAt(Math.round(values.length * Math.random()))
            email = email+temp
        }
        email=email + '.com'
        return email

    }

    generateNumber(){
        let number = Math.floor(Math.random()*9000000000) + 1000000000
        return number.toString()
    }
}