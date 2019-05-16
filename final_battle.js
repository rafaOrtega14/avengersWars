class army{
    constructor(name,power,ragelvl,n_soldiers){
        this.name = name;
        this.power = power;
        this.ragelvl = ragelvl;
        this.n_soldiers = n_soldiers;
    }
    attack(){
        let soldiers_lost = (this.power * this.ragelvl) / this.n_soldiers;
        return soldiers_lost;
    }
    get get_n_soldiers(){
        return this.n_soldiers;
    }
    set new_n_soldiers(soldiers){
        this.n_soldiers -= soldiers;
    
    }
    static guantlet(){
        const probability_to_use_guantlet = Math.random() * 100
        let use_guantlet = false;
        if(probability_to_use_guantlet > 95) use_guantlet = true;
        console.log(use_guantlet)
        return use_guantlet;

    }
}


const fight = () =>{
    const thanos_army = new army('Thanos Crew',15000,60,40000);
    const avengers_army = new army('avengers Army',12500,85,35000);

    while(thanos_army.get_n_soldiers > 0 && avengers_army.get_n_soldiers > 0){
        thanos_army.new_n_soldiers = avengers_army.attack();
        avengers_army.new_n_soldiers = thanos_army.attack();
        console.log(thanos_army.get_n_soldiers);
        console.log(avengers_army.get_n_soldiers);
    }
    if(thanos_army.get_n_soldiers <= 0){
        if(army.guantlet()){
            return "avengers han ganado la guerra por los pelos";
            
        }else{
            return "thanos ha ganado la guerra por los pelos";
        }
    }else if(avengers_army.get_n_soldiers <= 0){
        if(army.guantlet()){
            return "thanos ha ganado la guerra por los pelos";
            
        }else{
            return "avengers han ganado la guerra por los pelos";
        }
    }
}
console.log(fight());