const obj={}
function defineReactive(obj,key,val){
Object.defineProperty(obj,key,{
    get(){
        console.log('get'+key)
        return val
    },
    set(newVal){
        if(newVal!==val){
            console.log('set'+key+','+newVal)
            newVal=val
        }
    }
})
}
function obsever(obj){
    if(typeof obj!=='object'||obj==null){
        return
    }
    Object.keys(obj).forEach(key=>{
        defineReactive(obj,keymobj[key])
    })
}
// defineReactive(obj,'foo','foo')
// obj.foo='foooooooooo'