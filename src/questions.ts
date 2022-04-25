interface QuestionBlock {
    question: string,
    choices: {
        name:string,
        img: string,
        option: string, 
        value: string
    }[]
}

const questions : QuestionBlock[] = [
 {
     question: "Pick a favorite band",
     choices: [
         {
             name: "The Cure",
             img: "https://elsewhere.scdn3.secure.raxcdn.com/images/v95000/articles/robert_smith_1996.jpg",
             option: "color",
             value: "black"
         },
         {
             name: "Prince & the Revolution",
             img: "https://thesource.com/wp-content/uploads/2022/01/purple-rain-prince-750x400.jpg",
             option: "color",
             value: "purple"
         },
         {
            name: "Coldplay",
            img: "https://i.guim.co.uk/img/media/d9a438323cc79ea211b741b0db1b7fa0045b7ccc/0_211_5068_3040/master/5068.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=aa5285bd3264c832c7a04032bbf7c134",
            option: "color",
            value: "yellow"
         },
        {
            name: "BLACKPINK",
            img: "https://www.newuniversity.org/wp-content/uploads/2020/10/Blackpink-768x768.jpg",
            option: "color",
            value: "pink"

        } 
     ]
 },
 {
    question: "Pick a favorite season",
    choices: [
        {
            name: "Winter",
            img: "https://www.gannett-cdn.com/presto/2021/12/14/PVCS/307e4343-d220-4953-a02e-5955f08927b7-California_Storm_rain_snow_Tuesday_5.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
            option: "topic",
            value: "winter"
        },
        {
            name: "Summer",
            img: "https://cdni0.trtworld.com/w960/h540/q75/81109_20200523T000000Z_1648962379_RC2IUG9XHUCN_RTRMADP_3_HEALTHCORONAVIRUSUSA_1591825178099.JPG",
            option: "topic",
            value: "summer"
        },
        {
           name: "Fall",
           img: "https://cdn.britannica.com/18/196818-050-7030C41D/Maple-Colors.jpg?q=60",
           option: "topic",
           value: "fall"
        },
       {
           name: "Spring",
           img: "https://bobsegarini.files.wordpress.com/2020/05/spring.jpg",
           option: "topic",
           value: "spring"

       } 
    ]
}  ,
{
    question: "Pick a favorite movie",
    choices: [
        {
            name: "Catch Me If You Can",
            img: "https://decider.com/wp-content/uploads/2020/01/catch-me-if-you-can-on-netflix.jpg?quality=75&strip=all&w=720&h=480&crop=1",
            option: "style",
            value: "mod"
        },
        {
            name: "Braveheart",
            img: "https://static0.thethingsimages.com/wordpress/wp-content/uploads/2021/07/Braveheart.jpg?q=50&fit=contain&w=960&h=500&dpr=1.5",
            option: "style",
            value: "medieval"
        },
        {
           name: "The Royal Tenebaums",
           img: "https://metro.co.uk/wp-content/uploads/2015/07/rt.png?quality=90&strip=all&zoom=1&resize=644%2C351",
           option: "style",
           value: "hipster"
        },
       {
           name: "Castaway",
           img: "https://wl-brightside.cf.tsp.li/resize/728x/jpg/b9e/47f/905a345c34a7c0e6851944fa9d.jpg",
           option: "style",
           value: "tropical"

       } 
    ]
}
]

export default questions;