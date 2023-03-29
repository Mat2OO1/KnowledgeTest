export class TestService{
  currentPresentation = 1
  currentTest = -1
  triedBefore = false
  questions: {[key: string]: string[]} = {
    'Which of those movies got the Oscar Award?': ['Parasite', 'Inception', 'La La Land'],
    "Who is the director of Inception?": ['Christopher Nolan', 'James Cameron', 'Leonardo Di Caprio'],
    "What type of movie is La La Land?": ['Musical','Sci-fi', 'Thriller'],
    "Who wrote novels that Game Of Thrones is based on?": ['George R.R. Martin', 'J.R.R. Tolkien', 'Andrzej Sapkowski'],
    "What was the profession of main hero from Breaking Bad?": ['Chemistry teacher','Policeman','Soldier'],
    "How many people did the Friends consist of?" : ['6','5','4'],
    "What game was developed by CD Projekt RED?": ['The Witcher 3: Wild Hunt','Minecraft', 'Red Dead Redemption 2'],
    "Which company developed The Legend Of Zelda: Breath of the Wild?": ['Nintendo','Mojang','Rockstar'],
    "Where is the gameplay in RDR2 set?": ['Wild West', 'Japan', 'Europe']
  }
  userAnswers: string[] = []


  getQuestion(){
    this.currentTest+=1;
    return Object.keys(this.questions)[this.currentTest]
  }

  getPreviousQuestions(){
    return Object.keys(this.questions).slice(this.currentTest-2,this.currentTest+1)
  }


}
