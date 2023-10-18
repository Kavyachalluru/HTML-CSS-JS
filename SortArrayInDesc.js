let a=[7,9,18,78,45,67,345]
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]<a[j]){
            let temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
}
console.log(a);