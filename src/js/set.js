export default  class Team {
    constructor() {
        this.members = new Set();
    }

    add(member){
      if (this.members.has(member)){
         throw new Error('Такой персонаж уже в команде!')
      }
      this.members.add(member)
    }
    
    addAll(...arrMembers){
       arrMembers.forEach((item) => {
        this.members.add(item);
      });
      return this.members;
    }
    
    toArray(){
      return Array.from(this.members);
    }
  }
