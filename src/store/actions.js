export default {
    increment (context){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const random = Math.random();
                if(random >0.5){
                    resolve(random);
                    context.commit('increment');
                }else{
                    reject(random);
                }
            },1000)
        })
    }
}