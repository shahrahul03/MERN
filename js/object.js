//creat a object
const person ={
    name:'zhangsan',
    age:18,
    hobbies:["reading","cooking", "running"],

}
console.log(person.name,person.age,person.hobbies)

// USING OBJECT METHOD
const rectangle ={
    width:20,
    height:10,
    area:function(){
        return this.width*this.height
        }
}
console.log(rectangle.area())

