console.log('main.js开始执行')
import say, {a} from './a.js'
// import say1 from './b.js'
// setTimeout(async()=>{
//     let t = await import('./b.js')
//     console.log('/main.js [5]--1',t);
// },1000)
console.log('/main.js [7]--1',a);
 if(a>0) {
    let b = import('./b.js')
    b.then(res=>{
        console.log('/main.js [11]--1',res);
    })
 }
console.log('main.js执行完毕')
