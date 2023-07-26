import { defineStore } from 'pinia'

export const allUsers = defineStore('user', {
  state : () =>{
    return{
      isValid : "" ,
      currentUser : "" ,
      cart : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] ,
      users : [
        {
        id: 1,
        name: "farzad mirhosseini",
        phoneNumber: 123456789 ,
        email: "farzadhosseini@gmail.com",
        username: "farzad",
        password: "farzad2919" ,
        token:"farzadtoken1" ,
        credit: 150 ,
        },
        {
        id: 2,
        name: "ali khorahsdi",
        phoneNumber: 46789123 ,
        email: "alikhorahsdi@gmail.com",
        username: "ali",
        password: "ali2919" ,
        token:"alitoken2" ,
        credit: 110 ,
      },
        {
        id: 3,
        name: "melika tutunchi",
        phoneNumber: 15935746 ,
        email: "melikatutunchi@gmail.com",
        username: "melika",
        password: "melika2919" ,
        token:"melikatoken3" ,
        credit: 170 ,
        },
        {
        id: 4,
        name: "alireza shakeri",
        phoneNumber: 987654321 ,
        email: "alirezashakeri@gmail.com",
        username: "alireza",
        password: "alireza2919" ,
        token:"alirezatoken4" ,
        credit: 145 ,
        },
      ],
    }
  },
  getters : {
    allUsersGettersCounter (state){
      return state.users
    },
    // validationResaultGettersCounter (state){
    //   return state.isValid
    // },
  },
  actions : {
      // login
      async validateUser(inputs){ 
        this.isValid = this.users.find((user) => {
              return (user.phoneNumber == inputs[0] && user.password == inputs[1])
        })
        localStorage.setItem("activeUser", JSON.stringify(this.isValid));
      },
      // register1
      async addNewUser1(newUserDetail1){
        this.users.push({
          id: this.users.length+1,
          name: newUserDetail1[0],
          phoneNumber: newUserDetail1[1] ,
          email: newUserDetail1[2],
        })
      },
      // register2
      async addNewUser2(newUserDetail2){
        this.users[this.users.length-1].username = newUserDetail2[0],
        this.users[this.users.length-1].password = newUserDetail2[1] ,
        this.users[this.users.length-1].token = newUserDetail2[0]+"token"+this.users.length
        localStorage.setItem("accessToken",this.users[this.users.length-1].token)
      },
      // profile
      async findUserWithUserToken(){
        let currentToken = localStorage.getItem("accessToken")
        this.currentUser =  this.users.find((user)=>{
          return ( user.token == currentToken )
        })
      },
      // book-card
      addBookToCart(bookDetail){
        const item = this.cart.find( book => book.bookName == bookDetail.bookName)
        if (!item) {
          this.cart.push({...bookDetail,quantity: 1,id: this.cart.length+1})
        }else{ item.quantity++}
        localStorage.setItem("cart", JSON.stringify(this.cart));
      },
      // shopping-card
      decreaseBookFromCart(bookDetail){
        // const item = this.cart.find( book => book.bookName == bookDetail.bookName)
        if (bookDetail.quantity > 1) {
          this.cart[bookDetail.id-1].quantity--
        }else if (bookDetail.quantity <= 1){
          this.cart.splice([bookDetail.id-1] , 1)
        }
        localStorage.setItem("cart", JSON.stringify(this.cart));
      },
      // shopping-card
      removeBookFromCart(bookDetail){
        if(this.cart.length > 1){
          this.cart.splice([bookDetail.id-1] , 1)
          localStorage.setItem("cart", JSON.stringify(this.cart));
        }else{
          this.cart.pop()
          localStorage.setItem("cart", JSON.stringify(this.cart));
        }
      },
  }
});

export const allBooks = defineStore('book', {
    state : () =>{
      return{
        novelBooks : [
          {
          bookImage : new URL("@/assets/img/Albert camus/A happy death.jpg" , import.meta.url).href,
          bookName : "A happy death" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "Is it possible to die a happy death? This is the central question of Camus's astonishing early novel, published posthumously and greeted as a major literary event. It tells the story of a young Algerian, Mersault, who defies society's rules by committing a murder and escaping punishment, then experimenting with different ways of life and finally dying a happy man."
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/El extranjero.jpg" , import.meta.url).href,
          bookName : "El extranjero" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "A former Marine and ex-FBI agent, Joe has seen one too many crime scenes and known too much trauma, and not just in his professional life. Solitary and haunted, he prefers to be invisible. "
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/The myth of sisyphus.jpg" , import.meta.url).href,
          bookName : "The myth of sisyphus" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "One of the most influential works of this century, The Myth of Sisyphus and Other Essays is a crucial exposition of existentialist thought."
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/The outsider.jpg" , import.meta.url).href,
          bookName : "The outsider" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "'My mother died today. Or maybe yesterday, I don't know.' In The Outsider (1942), his classic existentialist novel, Camus explores the alienation of an individual who refuses to conform to social norms."
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/The plague.jpg" , import.meta.url).href,
          bookName : "The plague" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "Camus used as source material the cholera epidemic that killed a large proportion of Oran's population in 1849, but situated the novel in the 1940."
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/The stranger.jpg" , import.meta.url).href,
          bookName : "The stranger" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "Camus completed the initial manuscript by May 1941, with revisions were suggested by André Malraux, Jean Paulhan, and Raymond Queneau and later adopted in the final version."
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Demian the masterpiece.jpg" , import.meta.url).href,
          bookName : "Demian the masterpiece" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "64" ,
          discription : "This novel explores the duality of human nature and the alienation of man's soul. A powerful coming of age story."
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Narziss and goldmund.jpg" , import.meta.url).href,
          bookName : "Narziss and goldmund" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "68" ,
          discription : "Narcissus and Goldmund is the story of a young man, Goldmund (pronounced [ɡɔlt.mʊnt]), who wanders aimlessly throughout Medieval Germany after leaving a Catholic monastery school in search of what could be described as the meaning of life."
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Rosshalde.jpg" , import.meta.url).href,
          bookName : "Rosshalde" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "72" ,
          discription : "Rosshalde is the classic story of a man torn between obligations to his family and his longing for a spiritual fulfillment that can only be found outside the confines of conventional society."
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Sidarta.jpg" , import.meta.url).href,
          bookName : "Sidarta" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "59" ,
          discription : "is a 1922 novel by Hermann Hesse that deals with the spiritual journey of self-discovery of a man named Siddhartha during the time of the Gautama Buddha."
          },
          {
          bookImage : new URL("@/assets/img/novel/Cold Skin.jpg" , import.meta.url).href,
          bookName : "Cold skin" ,
          bookWriter : "Garrido" ,
          bookPrice : "50" ,
          discription : "The novel chronicles the story of a former fighter for the independence of Ireland who, unmotivated by the events of the Western World, decides to escape from the society in which he lives. He accepts a job offer as a weather official on a remote island in the south Atlantic close to the Antarctic Circle."
          },
          {
          bookImage : new URL("@/assets/img/novel/Crestfallen.jpg" , import.meta.url).href,
          bookName : "Crestfallen" ,
          bookWriter : "Lauren messervey" ,
          bookPrice : "50" ,
          discription : "No one knows when it was built. Even Ida, the building's decrepit landlady, doesn't know exactly when Crestfallen Estates was erected. It was like it had always been there, and that it had always been hungry for new tenants to devour"
          },
          {
          bookImage : new URL("@/assets/img/novel/The Night Ocean.jpg" , import.meta.url).href,
          bookName : "The night ocean" ,
          bookWriter : "Paul la farge" ,
          bookPrice : "50" ,
          discription : "From the award-winning author and New Yorker contributor, a riveting novel about secrets and scandals,  psychiatry and pulp fiction, inspired by the lives of H.P. Lovecraft and his circle."
          },
          {
          bookImage : new URL("@/assets/img/novel/Embodide Hope.jpg" , import.meta.url).href,
          bookName : "Embodied hope" ,
          bookWriter : "Kelly M. kapic" ,
          bookPrice : "71" ,
          discription : "Too often the Christian attitude toward suffering is characterized by a detached academic appeal to God's sovereignty, as if suffering were a game or a math problem. "
          },
          {
          bookImage : new URL("@/assets/img/novel/Five day Apart.jpg" , import.meta.url).href,
          bookName : "Five days apart" ,
          bookWriter : "Chris binchy" ,
          bookPrice : "29" ,
          discription : "When bright but tongue-tied David sees the magnetic Camille at a party, he plays it safe, asking his smooth and charming best friend, Alex, to make the introduction. "
          },
          {
          bookImage : new URL("@/assets/img/novel/Gods In Winter.jpg" , import.meta.url).href,
          bookName : "Gods in winter" ,
          bookWriter : "Reeshi ray" ,
          bookPrice : "69" ,
          discription : "When the Bramble family moves to a new home on the grounds of an estate in Derbyshire, England, they hire a woman for home help and become convinced that she is from a different time and place."
          },
          {
          bookImage : new URL("@/assets/img/novel/Gulliver's Travel.jpg" , import.meta.url).href,
          bookName : "Gulliver's travels" ,
          bookWriter : "Jonathan swift" ,
          bookPrice : "52" ,
          discription : "Regarded as the preeminent prose satirist in the English language, Jonathan Swift (1667–1745) intended this masterpiece, as he once wrote Alexander Pope, to vex the world rather than divert it."
          },
          {
          bookImage : new URL("@/assets/img/novel/Lost Boy.jpg" , import.meta.url).href,
          bookName : "Lost boy" ,
          bookWriter : "Christina henry" ,
          bookPrice : "42" ,
          discription : "From the national bestselling author of Alice comes a familiar story with a dark hook—a tale about Peter Pan and the friend who became his nemesis, a nemesis who may not be the blackhearted villain Peter says he is…"
          },
          {
          bookImage : new URL("@/assets/img/novel/Moby Dick.jpg" , import.meta.url).href,
          bookName : "Moby dick" ,
          bookWriter : "Herman melville" ,
          bookPrice : "55" ,
          discription : "The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage."
          },
          {
          bookImage : new URL("@/assets/img/novel/Native Invisivility.jpg" , import.meta.url).href,
          bookName : "Native invisibility" ,
          bookWriter : "Darrin" ,
          bookPrice : "40" ,
          discription : "What happens when friends, united in a cause, succeed in bringing the country to a standstill and sending most of its population into exile?"
          },
          {
          bookImage : new URL("@/assets/img/novel/Nobody Knows But You.jpg" , import.meta.url).href,
          bookName : "Nobody knows but you" ,
          bookWriter : "Anica mrose rissi" ,
          bookPrice : "36" ,
          discription : "Maybe a killer only looks like a killer in the moment just before, during, or after."
          },
          {
          bookImage : new URL("@/assets/img/novel/Swords Of The Son.jpg" , import.meta.url).href,
          bookName : "Swords Of The Son" ,
          bookWriter : "C.atticus" ,
          bookPrice : "50" ,
          discription : " The fourth and final book in The Giver Quartet, the story takes place during and after the first book in the series, The Giver."
          },
          {
          bookImage : new URL("@/assets/img/novel/Tess Of The D'Ubervilles.jpg" , import.meta.url).href,
          bookName : "Tess of the D'Urbervilles" ,
          bookWriter : "Anne michaels" ,
          bookPrice : "34" ,
          discription : "Tess of the d'Urbervilles: A Pure Woman is a novel by Thomas Hardy. It initially appeared in a censored and serialised version, published by the British illustrated newspaper The Graphic in 1891,[1] then in book form in three volumes in 1891, and as a single volume in 1892."
          },
          {
          bookImage : new URL("@/assets/img/novel/The Crusible.jpg" , import.meta.url).href,
          bookName : "The crucible" ,
          bookWriter : "Arthur miller" ,
          bookPrice : "50" ,
          discription : " It is a dramatized and partially fictionalized[1] story of the Salem witch trials that took place in the Massachusetts Bay Colony during 1692–93. Miller wrote the play as an allegory for McCarthyism, when the United States government persecuted people accused of being communists."
          },
          {
          bookImage : new URL("@/assets/img/novel/The Greate Gatsby.jpg" , import.meta.url).href,
          bookName : "The great gatsby" ,
          bookWriter : "F. Scott fitzgerald" ,
          bookPrice : "55" ,
          discription : "Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan."
          },
          {
          bookImage : new URL("@/assets/img/novel/The Lonelines Girl In The Univers.jpg" , import.meta.url).href,
          bookName : "The loneliest girl in the univers" ,
          bookWriter : "Lauren james" ,
          bookPrice : "50" ,
          discription : "Romy Silvers is the only surviving crew-member of a spaceship travelling to a new planet, on a mission to establish a second home for humanity amongst the stars. Alone in space, she is the loneliest girl in the universe until she hears about a new ship which has launched from Earth – with a single passenger on board. A boy called J."
          },
          {
          bookImage : new URL("@/assets/img/novel/the metamotphosis.jpg" , import.meta.url).href,
          bookName : "The metamorphosis" ,
          bookWriter : "Kafka" ,
          bookPrice : "64" ,
          discription : "One of Kafka's best-known works, Metamorphosis tells the story of salesman Gregor Samsa, who wakes one morning to find himself inexplicably transformed into a huge insect"
          },
          {
          bookImage : new URL("@/assets/img/novel/The Old Man And The Sea.jpg" , import.meta.url).href,
          bookName : "The old man and the sea" ,
          bookWriter : "Hemingway" ,
          bookPrice : "53" ,
          discription : "The Old Man and the Sea is a novella written by the American author Ernest Hemingway in 1951 in Cayo Blanco (Cuba), and published in 1952."
          },
          {
          bookImage : new URL("@/assets/img/novel/The White Raven.jpg" , import.meta.url).href,
          bookName : "The White raven" ,
          bookWriter : "Carrie D. miller" ,
          bookPrice : "50" ,
          discription : "An evocative retelling of an enduring medieval love story portrays the ill-fated triangle of Tristan, Isolde, and Mark, in a tale rich with romance and Celtic fantasy"
          },
          {
          bookImage : new URL("@/assets/img/novel/When the doves disapeared.jpg" , import.meta.url).href,
          bookName : "When the doves disappeared" ,
          bookWriter : "Sofi oksanen" ,
          bookPrice : "26" ,
          discription : "Communist Estonia, 1941. As the Allies and the Axis clash in battle, two Estonian cousins are fleeing from the Red Army: Roland, a loyal freedom fighter, and Edgar, an opportunistic mercenary. When the Nazis take control of the country, Roland goes into hiding."
          },
          {
          bookImage : new URL("@/assets/img/novel/Worrying.jpg" , import.meta.url).href,
          bookName : "Worrying" ,
          bookWriter : "Francis o'gorman" ,
          bookPrice : "50" ,
          discription : "Through Dale Carnegie’s six-million-copy bestseller recently revised, millions of people have been helped to overcome the worry habit."
          },
          {
          bookImage : new URL("@/assets/img/novel/Z.jpg" , import.meta.url).href,
          bookName : "Zelda fitzgerald" ,
          bookWriter : "Therese anne fowler" ,
          bookPrice : "75" ,
          discription : "Therese Anne Fowler is the NYT and USA Today bestselling author of It All Comes Down to this, as well as Z: A Novel of Zelda Fitzgerald (adapted for television as Z: The Beginning of Everything starring Christina Ricci), A Well-Behaved Woman, and A Good Neighborhood. She is married to author John Kessel."
          },
          {
          bookImage : new URL("@/assets/img/novel/Jonah.jpg" , import.meta.url).href,
          bookName : "A tale of tow hearts" ,
          bookWriter : "Jonah" ,
          bookPrice : "56" ,
          discription : "London, 1853 Innkeeper’s daughter Mina Scott will do anything to escape the drudgery of her life, for there’s nothing more mundane than serving customers day after day. "
          },
        ],
        horrorBooks : [
          {
          bookImage : new URL("@/assets/img/horror/The Invisble man.jpg" , import.meta.url).href,
          bookName : "The invisibile man" ,
          bookWriter : "H.G wells" ,
          bookPrice : "56" ,
          discription : "The Invisible Man is a science fiction novel by H. G. Wells. Originally serialised in Pearson's Weekly in 1897, it was published as a novel the same year."
          },
          {
          bookImage : new URL("@/assets/img/horror/You Were Never RealyHere.jpg" , import.meta.url).href,
          bookName : "You were never really here" ,
          bookWriter : "Joaquin phonix" ,
          bookPrice : "35" ,
          discription : "Takashi begins to organise the youths of the village into a group, beginning with football training. When Mitsusaburo discovers Takashi's deception "
          },
          {
          bookImage : new URL("@/assets/img/horror/Asylum.jpg" , import.meta.url).href,
          bookName : "Asylum" ,
          bookWriter : "Madeleine roux" ,
          bookPrice : "56" ,
          discription : "Susan Napier emphasises the mythical aspect of the story in her study of the novel. Like many of his earlier works, The Silent Cry has an unreal Arcadian setting."
          },
          {
          bookImage : new URL("@/assets/img/horror/Dracula.jpg" , import.meta.url).href,
          bookName : "Dracula" ,
          bookWriter : "Bram stoker" ,
          bookPrice : "32" ,
          discription : "Famous for introducing the character of the vampire Count Dracula, the novel tells the story of Dracula's attempt to move from Transylvania to England so he may find new blood and spread undead curse."
          },
          {
          bookImage : new URL("@/assets/img/horror/Hush hush.jpg" , import.meta.url).href,
          bookName : "Hush Hush" ,
          bookWriter : "Becca fitzpatrick" ,
          bookPrice : "49" ,
          discription : "Stoker did not invent the vampire, he defined its modern form, and the novel has spawned numerous theatrical, film and television interpretations. "
          },
          {
          bookImage : new URL("@/assets/img/horror/Tess.jpg" , import.meta.url).href,
          bookName : "Tess" ,
          bookWriter : "Thomas hardy" ,
          bookPrice : "39" ,
          discription : "A former Marine and ex-FBI agent, Joe has seen one too many crime scenes and known too much trauma, and not just in his professional life. Solitary and haunted, he prefers to be invisible. "
          },
          {
          bookImage : new URL("@/assets/img/horror/The call.jpg" , import.meta.url).href,
          bookName : "The call" ,
          bookWriter : "Peadar O'guilin" ,
          bookPrice : "45" ,
          discription : "The brothers' family had been one of the leading families in the village. Takashi is obsessed with the memory of their great-grandfather's younger brother "
          },
          {
          bookImage : new URL("@/assets/img/horror/The silent cry.jpg" , import.meta.url).href,
          bookName : "The silent cry" ,
          bookWriter : "Kenzaburo OE" ,
          bookPrice : "65" ,
          discription : "The novel tells the story of two brothers in the early 1960s: Mitsusaburo, the narrator, a one-eyed, married English professor in Tokyo; and his younger brother Takashi, who has just returned from the US."
          },
        ],
        historyBooks : [
        {
        bookImage : new URL("@/assets/img/history/Dread nation.jpg" , import.meta.url).href,
        bookName : "Dread nation" ,
        bookWriter : "Justina ireland" ,
        bookPrice : "54" ,
        discription : "At once provocative, terrifying, and darkly subversive, Dread Nation is Justina Ireland's stunning vision of an America"
        },
        {
        bookImage : new URL("@/assets/img/history/Shapeshifters.jpg" , import.meta.url).href,
        bookName : "Shape shifters" ,
        bookWriter : "John B. kachuba" ,
        bookPrice : "39" ,
        discription : "Jane McKeene was born two days before the dead began to walk the battlefields of Gettysburg, Pennsylvania—derailing the War Between the States and changing the nation forever."
        },
        {
        bookImage : new URL("@/assets/img/history/The woman who would be king.jpg" , import.meta.url).href,
        bookName : "The woman who would be king" ,
        bookWriter : "Kara cooney" ,
        bookPrice : "49" ,
        discription : "In this new America, safety for all depends on the work of a few, and laws like the Native and Negro Education Act require certain children attend combat schools to learn to put down the dead."
        },
        {
        bookImage : new URL("@/assets/img/history/When women ruled the world.jpg" , import.meta.url).href,
        bookName : "When women ruled the world" ,
        bookWriter : "Kara cooney" ,
        bookPrice : "45" ,
        discription : " when families around Baltimore County begin to go missing, Jane is caught in the middle of a conspiracy, one that finds her in a desperate fight for her life against some powerful enemies. "
        },
        ],
        scientificBook : [
          {
          bookImage : new URL("@/assets/img/Scientific/Making the Climb.jpg" , import.meta.url).href,
          bookName : "Making the climb" ,
          bookWriter : "John C. bowling" ,
          bookPrice : "34" ,
          discription : "This book is the antidote to the “sink or swim” approach that sabotages too many aspiring sales professionals."
          },
          {
          bookImage : new URL("@/assets/img/Scientific/Breathing Space.jpg" , import.meta.url).href,
          bookName : "Breathing space" ,
          bookWriter : "John G. Eliason" ,
          bookPrice : "30" ,
          discription : "A quick, interactive guide helped them understand their design style and captured exactly what they needed in their book cover."
          },
          {
          bookImage : new URL("@/assets/img/Robert greene/Power.jpg" , import.meta.url).href,
          bookName : "Power" ,
          bookWriter : "Robert greene" ,
          bookPrice : "94" ,
          discription : "In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum."
          },
          {
          bookImage : new URL("@/assets/img/Robert greene/War.jpg" , import.meta.url).href,
          bookName : "War" ,
          bookWriter : "Robert greene" ,
          bookPrice : "86" ,
          discription : "Robert Greene’s groundbreaking guides, The 48 Laws of Power, The Art of Seduction, and Mastery, espouse profound, timeless lessons from the events of history to help readers vanquish an enemy, ensnare an unsuspecting victim, or become the greatest in your field. In The 33 Strategies of War, Greene has crafted an important addition to this ruthless and unique series."
          },
          {
          bookImage : new URL("@/assets/img/Robert greene/Seduction.jpg" , import.meta.url).href,
          bookName : "Seduction" ,
          bookWriter : "Robert greene" ,
          bookPrice : "69" ,
          discription : "When raised to the level of art, seduction, an indirect and subtle form of power, has toppled empires, won elections and enslaved great minds."
          },
          {
          bookImage : new URL("@/assets/img/Robert greene/Mastery.jpg" , import.meta.url).href,
          bookName : "Mastery" ,
          bookWriter : "Robert greene" ,
          bookPrice : "77" ,
          discription : "Each one of us has within us the potential to be a Master. Learn the secrets of the field you have chosen, submit to a rigorous apprenticeship, absorb the hidden knowledge possessed by those with years of experience, surge past competitors to surpass them in brilliance, and explode established patterns from within. Study the behaviors of Albert Einstein, Charles Darwin, Leonardo da Vinci and the nine contemporary Masters interviewed for this book. "
          },
            
        ],
        bestSellingBooks : [
          {
          bookImage : new URL("@/assets/img/novel/The Crusible.jpg" , import.meta.url).href,
          bookName : "The crucible" ,
          bookWriter : "Arthur miller" ,
          bookPrice : "50" ,
          discription : " It is a dramatized and partially fictionalized[1] story of the Salem witch trials that took place in the Massachusetts Bay Colony during 1692–93. Miller wrote the play as an allegory for McCarthyism, when the United States government persecuted people accused of being communists."
          },
          {
          bookImage : new URL("@/assets/img/novel/The Lonelines Girl In The Univers.jpg" , import.meta.url).href,
          bookName : "The loneliest girl in the univers" ,
          bookWriter : "Lauren james" ,
          bookPrice : "50" ,
          discription : "Romy Silvers is the only surviving crew-member of a spaceship travelling to a new planet, on a mission to establish a second home for humanity amongst the stars. Alone in space, she is the loneliest girl in the universe until she hears about a new ship which has launched from Earth – with a single passenger on board. A boy called J."
          },
          {
          bookImage : new URL("@/assets/img/novel/The Night Ocean.jpg" , import.meta.url).href,
          bookName : "The night ocean" ,
          bookWriter : "Paul la farge" ,
          bookPrice : "50" ,
          discription : "From the award-winning author and New Yorker contributor, a riveting novel about secrets and scandals,  psychiatry and pulp fiction, inspired by the lives of H.P. Lovecraft and his circle."
          },
          {
          bookImage : new URL("@/assets/img/Robert greene/Mastery.jpg" , import.meta.url).href,
          bookName : "Mastery" ,
          bookWriter : "Robert greene" ,
          bookPrice : "77" ,
          discription : "Each one of us has within us the potential to be a Master. Learn the secrets of the field you have chosen, submit to a rigorous apprenticeship, absorb the hidden knowledge possessed by those with years of experience, surge past competitors to surpass them in brilliance, and explode established patterns from within. Study the behaviors of Albert Einstein, Charles Darwin, Leonardo da Vinci and the nine contemporary Masters interviewed for this book. "
          },
          {
          bookImage : new URL("@/assets/img/history/Shapeshifters.jpg" , import.meta.url).href,
          bookName : "Shape shifters" ,
          bookWriter : "John B. kachuba" ,
          bookPrice : "39" ,
          discription : "Jane McKeene was born two days before the dead began to walk the battlefields of Gettysburg, Pennsylvania—derailing the War Between the States and changing the nation forever."
          },
          {
          bookImage : new URL("@/assets/img/history/The woman who would be king.jpg" , import.meta.url).href,
          bookName : "The woman who would be king" ,
          bookWriter : "Kara cooney" ,
          bookPrice : "49" ,
          discription : "In this new America, safety for all depends on the work of a few, and laws like the Native and Negro Education Act require certain children attend combat schools to learn to put down the dead."
          },
        ],
        albertCamusBooks : [
          {
          bookImage : new URL("@/assets/img/Albert camus/A happy death.jpg" , import.meta.url).href,
          bookName : "A happy death" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "Is it possible to die a happy death? This is the central question of Camus's astonishing early novel, published posthumously and greeted as a major literary event. It tells the story of a young Algerian, Mersault, who defies society's rules by committing a murder and escaping punishment, then experimenting with different ways of life and finally dying a happy man."
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/El extranjero.jpg" , import.meta.url).href,
          bookName : "El extranjero" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "A former Marine and ex-FBI agent, Joe has seen one too many crime scenes and known too much trauma, and not just in his professional life. Solitary and haunted, he prefers to be invisible. "
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/The myth of sisyphus.jpg" , import.meta.url).href,
          bookName : "The myth of sisyphus" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "One of the most influential works of this century, The Myth of Sisyphus and Other Essays is a crucial exposition of existentialist thought."
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/The outsider.jpg" , import.meta.url).href,
          bookName : "The outsider" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "'My mother died today. Or maybe yesterday, I don't know.' In The Outsider (1942), his classic existentialist novel, Camus explores the alienation of an individual who refuses to conform to social norms."
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/The plague.jpg" , import.meta.url).href,
          bookName : "The plague" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "Camus used as source material the cholera epidemic that killed a large proportion of Oran's population in 1849, but situated the novel in the 1940."
          },
          {
          bookImage : new URL("@/assets/img/Albert camus/The stranger.jpg" , import.meta.url).href,
          bookName : "The stranger" ,
          bookWriter : "Albert camus" ,
          bookPrice : "75" ,
          discription : "Camus completed the initial manuscript by May 1941, with revisions were suggested by André Malraux, Jean Paulhan, and Raymond Queneau and later adopted in the final version."
          },
        ],
        hermannHesseBooks : [
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Demian the masterpiece.jpg" , import.meta.url).href,
          bookName : "Demian the masterpiece" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "64" ,
          discription : "This novel explores the duality of human nature and the alienation of man's soul. A powerful coming of age story."
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Narziss and goldmund.jpg" , import.meta.url).href,
          bookName : "Narziss and goldmund" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "68" ,
          discription : "Narcissus and Goldmund is the story of a young man, Goldmund (pronounced [ɡɔlt.mʊnt]), who wanders aimlessly throughout Medieval Germany after leaving a Catholic monastery school in search of what could be described as the meaning of life."
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Rosshalde.jpg" , import.meta.url).href,
          bookName : "Rosshalde" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "72" ,
          discription : "Rosshalde is the classic story of a man torn between obligations to his family and his longing for a spiritual fulfillment that can only be found outside the confines of conventional society."
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Sidarta.jpg" , import.meta.url).href,
          bookName : "Sidarta" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "59" ,
          discription : "is a 1922 novel by Hermann Hesse that deals with the spiritual journey of self-discovery of a man named Siddhartha during the time of the Gautama Buddha."
          },
        ],
        robertGreeneBooks : [
          {
          bookImage : new URL("@/assets/img/Robert greene/Power.jpg" , import.meta.url).href,
          bookName : "Power" ,
          bookWriter : "Robert greene" ,
          bookPrice : "94" ,
          discription : "In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum."
          },
          {
          bookImage : new URL("@/assets/img/Robert greene/War.jpg" , import.meta.url).href,
          bookName : "War" ,
          bookWriter : "Robert greene" ,
          bookPrice : "86" ,
          discription : "Robert Greene’s groundbreaking guides, The 48 Laws of Power, The Art of Seduction, and Mastery, espouse profound, timeless lessons from the events of history to help readers vanquish an enemy, ensnare an unsuspecting victim, or become the greatest in your field. In The 33 Strategies of War, Greene has crafted an important addition to this ruthless and unique series."
          },
          {
          bookImage : new URL("@/assets/img/Robert greene/Seduction.jpg" , import.meta.url).href,
          bookName : "Seduction" ,
          bookWriter : "Robert greene" ,
          bookPrice : "69" ,
          discription : "When raised to the level of art, seduction, an indirect and subtle form of power, has toppled empires, won elections and enslaved great minds."
          },
          {
          bookImage : new URL("@/assets/img/Robert greene/Mastery.jpg" , import.meta.url).href,
          bookName : "Mastery" ,
          bookWriter : "Robert greene" ,
          bookPrice : "77" ,
          discription : "Each one of us has within us the potential to be a Master. Learn the secrets of the field you have chosen, submit to a rigorous apprenticeship, absorb the hidden knowledge possessed by those with years of experience, surge past competitors to surpass them in brilliance, and explode established patterns from within. Study the behaviors of Albert Einstein, Charles Darwin, Leonardo da Vinci and the nine contemporary Masters interviewed for this book. "
          },
        ],
        latestPublishedBooks : [
          {
          bookImage : new URL("@/assets/img/Robert greene/War.jpg" , import.meta.url).href,
          bookName : "War" ,
          bookWriter : "Robert greene" ,
          bookPrice : "86" ,
          discription : "Robert Greene’s groundbreaking guides, The 48 Laws of Power, The Art of Seduction, and Mastery, espouse profound, timeless lessons from the events of history to help readers vanquish an enemy, ensnare an unsuspecting victim, or become the greatest in your field. In The 33 Strategies of War, Greene has crafted an important addition to this ruthless and unique series."
          },
          {
          bookImage : new URL("@/assets/img/Robert greene/Seduction.jpg" , import.meta.url).href,
          bookName : "Seduction" ,
          bookWriter : "Robert greene" ,
          bookPrice : "69" ,
          discription : "When raised to the level of art, seduction, an indirect and subtle form of power, has toppled empires, won elections and enslaved great minds."
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Rosshalde.jpg" , import.meta.url).href,
          bookName : "Rosshalde" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "72" ,
          discription : "Rosshalde is the classic story of a man torn between obligations to his family and his longing for a spiritual fulfillment that can only be found outside the confines of conventional society."
          },
          {
          bookImage : new URL("@/assets/img/horror/Dracula.jpg" , import.meta.url).href,
          bookName : "Dracula" ,
          bookWriter : "Bram stoker" ,
          bookPrice : "32" ,
          discription : "Famous for introducing the character of the vampire Count Dracula, the novel tells the story of Dracula's attempt to move from Transylvania to England so he may find new blood and spread undead curse."
          },
          {
          bookImage : new URL("@/assets/img/horror/Hush hush.jpg" , import.meta.url).href,
          bookName : "Hush Hush" ,
          bookWriter : "Becca fitzpatrick" ,
          bookPrice : "49" ,
          discription : "Stoker did not invent the vampire, he defined its modern form, and the novel has spawned numerous theatrical, film and television interpretations. "
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Demian the masterpiece.jpg" , import.meta.url).href,
          bookName : "Demian the masterpiece" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "64" ,
          discription : "This novel explores the duality of human nature and the alienation of man's soul. A powerful coming of age story."
          },
          {
          bookImage : new URL("@/assets/img/Hermann hesse/Narziss and goldmund.jpg" , import.meta.url).href,
          bookName : "Narziss and goldmund" ,
          bookWriter : "Hermann hesse" ,
          bookPrice : "68" ,
          discription : "Narcissus and Goldmund is the story of a young man, Goldmund (pronounced [ɡɔlt.mʊnt]), who wanders aimlessly throughout Medieval Germany after leaving a Catholic monastery school in search of what could be described as the meaning of life."
          },
        ],
        sliderBooks : [
          {
          imageSrc : new URL("@/assets/img/slider/slider-camus 1.jpg" , import.meta.url).href,
          title : "Albert Camus" ,
          discription : "Best of Albert Camus books."
          },
          
          {
          imageSrc : new URL("@/assets/img/slider/Slider-hermann hesse 2.jpg" , import.meta.url).href,
          title : "Hermann Hesse" ,
          discription : "Best of Hermann Hesse books."
          },
          {
          imageSrc : new URL("@/assets/img/slider/Slider-robert greene.jpg" , import.meta.url).href,
          title : "Robert Greene" ,
          discription : "Best of Robert Greene books."
          },
        ]
      }
    } ,
})